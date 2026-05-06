export function PageBackdrop() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute right-0 top-0 -z-10 h-[360px] w-[78%] overflow-hidden opacity-0 dark:opacity-100"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_18%,rgba(148,163,184,0.16),transparent_26%),linear-gradient(115deg,transparent_0%,rgba(148,163,184,0.09)_42%,transparent_43%),linear-gradient(68deg,transparent_0%,rgba(148,163,184,0.11)_57%,transparent_58%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(148,163,184,0.12)_1px,transparent_1px),linear-gradient(0deg,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:84px_84px] [transform:skewY(-14deg)_translateY(-70px)]" />
      <div className="absolute left-1/4 top-0 h-full w-24 bg-white/[0.035] [transform:skewY(-14deg)]" />
      <div className="absolute right-1/4 top-12 h-full w-20 bg-white/[0.03] [transform:skewY(-14deg)]" />
      <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-fd-background to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-fd-background" />
    </div>
  )
}
