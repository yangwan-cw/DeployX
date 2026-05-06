function DeployXMark() {
  return (
    <span className="relative inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-blue-500 text-white shadow-sm">
      <span className="absolute size-6 rounded-full border-[5px] border-white/85 border-l-transparent" />
    </span>
  )
}

function ArrowRightIcon() {
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
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}

export function AsideProductCard() {
  return (
    <div className="mb-8 rounded-xl border bg-fd-card p-6 text-fd-card-foreground shadow-sm">
      <div className="flex items-center gap-3">
        <DeployXMark />
        <p className="text-xl font-semibold">DeployX</p>
      </div>

      <p className="mt-6 text-lg font-semibold leading-snug">
        统一你的应用交付流程。
      </p>
      <p className="mt-3 text-sm leading-6 text-fd-muted-foreground">
        从应用创建、部署配置到发布记录追踪，把研发、测试和运维的交付动作收敛到一个轻量平台。
      </p>

      <a
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-fd-primary px-4 py-2.5 text-sm font-medium text-fd-primary-foreground transition-opacity hover:opacity-90"
        href="/docs/getting-started"
      >
        快速开始
        <ArrowRightIcon />
      </a>
    </div>
  )
}
