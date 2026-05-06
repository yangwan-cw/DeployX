'use client'

import { useState } from 'react'

function CopyIcon() {
  return (
    <svg
      aria-hidden
      className="size-4"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      viewBox="0 0 24 24"
    >
      <rect height={14} rx={2} ry={2} width={14} x={8} y={8} />
      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
    </svg>
  )
}

export function PageActions({ markdown }: { markdown: string }) {
  const [copied, setCopied] = useState(false)

  async function copyMarkdown() {
    if (!markdown) return

    await navigator.clipboard.writeText(markdown)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1600)
  }

  return (
    <div className="not-prose mb-5 mt-5 flex flex-wrap items-center gap-3">
      <button
        className="inline-flex items-center gap-2 rounded-md bg-fd-secondary px-4 py-2 text-sm font-medium text-fd-secondary-foreground transition-colors hover:bg-fd-accent hover:text-fd-accent-foreground disabled:cursor-not-allowed disabled:opacity-50"
        disabled={!markdown}
        onClick={copyMarkdown}
        type="button"
      >
        <CopyIcon />
        {copied ? '已复制' : '复制 Markdown'}
      </button>
    </div>
  )
}
