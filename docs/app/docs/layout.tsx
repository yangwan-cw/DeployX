import type { ReactNode } from 'react'
import { DocsLayout } from 'fumadocs-ui/layouts/docs'
import { source } from '@/lib/source'

function BrandTitle() {
  return (
    <span className="inline-flex items-center gap-3">
      <span className="relative inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-blue-500 text-white shadow-sm">
        <span className="absolute size-5 rounded-full border-4 border-white/85 border-l-transparent" />
      </span>
      <span className="flex flex-col gap-1">
        <span className="text-xl font-semibold leading-none tracking-normal">DeployX</span>
        <span className="inline-flex items-center gap-1.5">
          <span className="rounded bg-fd-secondary  py-0.5 text-[11px] font-medium leading-none text-fd-secondary-foreground">
            v0.1.0
          </span>
          <span className="rounded bg-blue-500/10 px-1.5 py-0.5 text-[11px] font-medium leading-none text-blue-600 dark:text-blue-400">
            开发中
          </span>
        </span>
      </span>
    </span>
  )
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      tree={source.pageTree}
      nav={{
        title: <BrandTitle />,
        url: '/docs',
      }}
      containerProps={{
          className: 'min-h-screen',
      }}

    >
      {children}
    </DocsLayout>
  )
}
