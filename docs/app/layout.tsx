import type { Metadata } from 'next'
import { RootProvider } from 'fumadocs-ui/provider'
import './globals.css'

export const metadata: Metadata = {
  title: 'DeployX Docs',
  description: 'Documentation site powered by Fumadocs + Next.js 14',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  )
}
