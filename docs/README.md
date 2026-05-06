# DeployX Docs

技术栈：

- 文档内容：MDX
- 文档框架：Fumadocs
- 前端框架：Next.js 14 + React
- 样式/UI：Fumadocs UI + Tailwind CSS（可扩展 Radix UI）
- 构建方式：Next.js 静态站点构建

## 目录结构

- `app`: Next.js App Router
- `content/docs`: 文档 MDX 内容
- `lib/source.ts`: Fumadocs source loader
- `source.config.ts`: Fumadocs 文档源配置

## 启动

```bash
npm install
npm run dev
```

## 构建静态站点

```bash
npm run build
```

构建输出目录：`out/`
