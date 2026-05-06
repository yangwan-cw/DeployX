# DeployX

## 设计之初
## 产品定位

本系统定位为内部轻量级 DevOps 应用交付平台，主要服务于研发、测试和运维人员。

平台围绕“应用”这一核心资产，提供从应用创建、部署配置、容器启动、状态监控、访问跳转、更新发布到部署记录追踪的一体化能力。

通过可视化表单和部署向导，开发人员无需手动编写复杂的 Dockerfile、docker-compose.yml 或 Kubernetes YAML，即可根据应用包、配置文件、中间件依赖和目标服务器信息，自动生成标准化部署资源并完成发布。

## 项目目录（当前）

```text
DeployX/
├── backend/                 # Go 后端骨架（当前仅保留基础运行代码，无 config/web 实现）
│   ├── cmd/api/             # 入口
│   ├── app/                 # 应用层与业务分层目录
│   ├── pkg/                 # 通用基础库目录
│   ├── platform/            # 平台运行与任务目录
│   ├── api/openapi/         # API 文档占位
│   ├── deployments/         # 部署资源占位（docker/k8s）
│   ├── configs/             # 配置目录占位
│   ├── migrations/          # 迁移脚本占位
│   └── test/                # 测试目录占位
├── frontend/                # React + Vite 前端项目
├── docs/                    # Next.js 14 + Fumadocs 文档站（MDX，静态导出）
├── scripts/                 # 根目录脚本（如联合启动脚本）
├── Makefile                 # 根目录快捷命令
└── README.md
```

## 快速开始

### Frontend

```bash
cd frontend
npm install
npm run dev
```

### Backend

```bash
cd backend
go run ./cmd/api
```

### Docs

```bash
cd docs
npm install
npm run dev
```
