# DeployX Frontend

## Structure

- `src/app`: app-level composition
- `src/pages`: page components
- `src/components`: reusable UI components
- `src/services`: API and external integrations
- `src/hooks`: custom React hooks
- `src/utils`: utility constants/helpers
- `src/styles`: global and shared styles
- `src/assets`: static frontend assets
- `src/tests`: test files

## Run

```bash
npm install
npm run dev
```

## 技术栈

版本：`v0.01`

> 当前阶段仅记录前端技术选型方向，不代表依赖已经全部引入。实际依赖会随着功能开发逐步安装和落地。

| 技术 | 主要用途 | 解决的问题 |
| --- | --- | --- |
| TypeScript | 类型系统与静态检查 | 提前发现接口字段、组件 props、状态结构等类型错误，提升大型前端代码的可维护性。 |
| React | UI 组件开发 | 用组件化方式组织页面、业务模块和可复用交互单元。 |
| React Router | 前端路由 | 管理应用内页面跳转、嵌套路由、路由参数和页面级布局。 |
| Zustand | 全局状态管理 | 管理用户信息、应用配置、部署流程状态等跨组件共享数据，避免复杂 props 传递。 |
| ESLint + Prettier + Husky + lint-staged | 代码规范与提交检查 | 统一开发人员代码规范，在提交前自动执行格式化和静态检查，减少低级代码风格问题进入仓库。 |
| dayjs | 日期时间处理 | 统一处理时间格式化、时间差、发布时间、日志时间等场景。 |
| Ant Design | UI 组件库 | 快速搭建表单、表格、弹窗、菜单、通知、布局等后台管理常用界面。 |
| lucide-react | 通用图标库 | 提供按钮、菜单、状态、操作入口等常见线性图标，保证界面图标风格统一。 |
| simple-icons | 品牌与技术图标库 | 提供 GitHub、Docker、Kubernetes、React 等品牌或技术 Logo，用于技术栈展示和外部系统入口。 |
| Storybook | 组件开发与文档 | 独立开发、调试和展示 UI 组件，沉淀组件使用示例和交互状态文档。 |
| React Hook Form | 表单状态管理 | 负责表单状态、字段注册、提交处理和错误信息管理，降低复杂表单的渲染和维护成本。 |
| zod | 数据结构与校验规则 | 负责定义数据结构和校验规则，可用于表单校验、接口响应校验和配置数据校验。 |
| ahooks | 业务 Hooks 工具集 | 负责业务交互逻辑、异步请求、防抖、轮询、本地缓存等常见前端业务能力。 |
| Monaco Editor | 在线代码编辑器 | 支持编辑配置文件、Dockerfile、YAML、JSON、脚本等文本内容。 |
| ECharts | 数据可视化 | 展示部署趋势、资源使用、运行状态、任务统计等图表。 |
| xterm.js | Web 终端 | 在浏览器中提供容器终端、服务器终端或任务执行输出窗口。 |
| WebSocket | 双向实时通信 | 支持终端交互、实时日志、任务状态推送等需要持续连接的场景。 |
| SSE | 服务端事件推送 | 用于部署进度、日志流、通知消息等单向实时推送，复杂度低于 WebSocket。 |

## 技术选型说明

- `Ant Design` 负责基础后台 UI，优先用于表单、表格、弹窗和布局。
- `Zustand` 只承载真正需要跨页面共享的状态，页面内部状态仍优先使用 React 本地状态。
- `React Hook Form` 负责表单运行时状态，`zod` 负责数据结构和校验规则，二者可结合处理复杂配置表单。
- `ahooks` 优先承载可复用的业务交互逻辑，例如请求、轮询、防抖、本地缓存和页面生命周期处理。
- `WebSocket` 适合强交互场景，例如 Web 终端；`SSE` 适合只需要服务端持续推送的场景，例如部署日志。
- `Monaco Editor` 和 `xterm.js` 体积较大，建议按页面懒加载，避免影响首页加载速度。
