import { DocsImage } from '@/components/mdx/docs-image'

type MDXComponents = Record<string, unknown>

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    DocsImage,
  }
}
