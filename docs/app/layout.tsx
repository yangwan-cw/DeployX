import { I18nProvider } from 'fumadocs-ui/i18n'
import { RootProvider } from 'fumadocs-ui/provider'
import './globals.css'


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body>
        <RootProvider>
          <I18nProvider
            locale="zh-CN"
            translations={{
              search: '搜索',
              searchNoResult: '没有找到结果',
              toc: '本页导航',
              tocNoHeadings: '暂无标题',
              lastUpdate: '最后更新于',
              chooseLanguage: '选择语言',
              nextPage: '下一页',
              previousPage: '上一页',
              chooseTheme: '主题',
              editOnGithub: '在 GitHub 上编辑',
            }}
          >
            {children}
          </I18nProvider>
        </RootProvider>
      </body>
    </html>
  )
}
