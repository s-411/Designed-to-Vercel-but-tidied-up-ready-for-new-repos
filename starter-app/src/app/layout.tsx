import type { Metadata } from "next"
import "mm-design-system/styles/globals.css"
import { ThemeProvider } from "mm-design-system/lib/theme-provider"
import { cn } from "mm-design-system/lib/utils"

export const metadata: Metadata = {
  title: "MM Starter Shell",
  description: "Token-driven Next.js starter wired to the MM Design System.",
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
