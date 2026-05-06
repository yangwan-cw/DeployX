import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-bold">DeployX Docs</h1>
      <p className="mt-4 text-gray-600">文档站点初始化完成（MDX + Fumadocs + Next.js 14）。</p>
      <div className="mt-8">
        <Link href="/docs" className="rounded bg-black px-4 py-2 text-white">
          进入文档
        </Link>
      </div>
    </main>
  )
}
