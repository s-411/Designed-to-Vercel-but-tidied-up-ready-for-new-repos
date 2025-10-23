import { createServerSupabaseClient } from '@/lib/supabase'
import { redirect } from 'next/navigation'

export default async function DashboardPage() {
  const supabase = createServerSupabaseClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect('/signin')
  }

  const { data: profile } = await supabase
    .from('user_profiles')
    .select('*')
    .eq('id', user.id)
    .single()

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">
            Welcome back{profile?.first_name ? `, ${profile.first_name}` : ''}!
          </h1>
          <p className="mt-2 text-muted-foreground">Here's what's happening with your account</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Account Status */}
          <div className="rounded-lg border border-border bg-card p-6">
            <h3 className="mb-4 text-lg font-semibold">Account Status</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Email:</span>
                <span className="font-medium">{user.email}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Verified:</span>
                <span className={profile?.email_verified ? 'text-green-600' : 'text-yellow-600'}>
                  {profile?.email_verified ? 'Yes' : 'Pending'}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subscription:</span>
                <span className="font-medium capitalize">
                  {profile?.subscription_status || 'free'}
                </span>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="rounded-lg border border-border bg-card p-6">
            <h3 className="mb-4 text-lg font-semibold">Quick Actions</h3>
            <div className="space-y-2">
              <a
                href="/profile"
                className="block rounded-lg border border-border px-4 py-2 text-sm font-medium transition-colors hover:bg-accent"
              >
                Edit Profile
              </a>
              <a
                href="/billing"
                className="block rounded-lg border border-border px-4 py-2 text-sm font-medium transition-colors hover:bg-accent"
              >
                Manage Billing
              </a>
              <a
                href="/chat"
                className="block rounded-lg border border-border px-4 py-2 text-sm font-medium transition-colors hover:bg-accent"
              >
                Start Chat
              </a>
            </div>
          </div>

          {/* Getting Started */}
          <div className="rounded-lg border border-border bg-card p-6">
            <h3 className="mb-4 text-lg font-semibold">Getting Started</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>Account created</span>
              </li>
              <li className="flex items-start gap-2">
                <span className={profile?.email_verified ? 'text-green-600' : 'text-gray-400'}>
                  {profile?.email_verified ? '✓' : '○'}
                </span>
                <span>Email verified</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-400">○</span>
                <span>Complete profile</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-400">○</span>
                <span>Subscribe to a plan</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
