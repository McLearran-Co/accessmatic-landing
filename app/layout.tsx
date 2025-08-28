import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AccessMatic - Make PDFs Accessible Instantly',
  description: 'AI-powered document accessibility for government websites. WCAG 2.2 compliant in minutes.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
