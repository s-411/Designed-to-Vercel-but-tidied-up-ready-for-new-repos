import type { Metadata } from 'next'
import 'mm-design-system/styles/globals.css'
import './globals.css'
import { ThemeProvider } from '@/components/providers/theme-provider'
import { cn } from 'mm-design-system/lib/utils'

export const metadata: Metadata = {
  title: 'Starter App Template',
  description: 'Production-ready Next.js starter with auth, payments, email, and AI-powered Q&A',
  icons: {
    icon: '/favicon.ico',
  },
}

type RootLayoutProps = Readonly<{
  children: React.ReactNode
}>

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background text-foreground antialiased",
          "font-body",
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
