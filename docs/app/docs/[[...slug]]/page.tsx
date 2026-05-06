import path from 'node:path'
import { readFile } from 'node:fs/promises'
import { notFound } from 'next/navigation'
import { DocsBody, DocsDescription, DocsPage, DocsTitle } from 'fumadocs-ui/page'
import { AsideProductCard } from '@/components/docs/aside-product-card'
import { PageBackdrop } from '@/components/docs/page-backdrop'
import { PageActions } from '@/components/docs/page-actions'
import { source } from '@/lib/source'

export function generateStaticParams() {
  return source.generateParams()
}

async function getMarkdown(slug?: string[]) {
  const segments = slug && slug.length > 0 ? slug : ['index']
  const contentPath = path.join(process.cwd(), 'content/docs', ...segments)
  const candidates = [`${contentPath}.mdx`, path.join(contentPath, 'index.mdx')]

  for (const filePath of candidates) {
    try {
      return await readFile(filePath, 'utf8')
    } catch {
      // Try the next supported MDX location.
    }
  }

  return ''
}

export default async function DocPage({ params }: { params: { slug?: string[] } }) {
  const page = source.getPage(params.slug)
  if (!page) notFound()

  const MDXContent = page.data.body
  const markdown = await getMarkdown(params.slug)

  return (
    <DocsPage
      toc={page.data.toc}
      full={page.data.full}
      tableOfContent={{
        header: <AsideProductCard />,
      }}
      article={{
        className: 'relative overflow-hidden',
      }}
    >
      <PageBackdrop />
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <PageActions markdown={markdown} />
      <DocsBody>
        <MDXContent />
      </DocsBody>
    </DocsPage>
  )
}
