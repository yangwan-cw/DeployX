# DeployX Backend

Go 社区标准、适合中大型团队的后端目录骨架（`cmd + internal + pkg`）。

## 目录结构

```text
backend/
├── cmd/
│   └── api/                     # 程序入口
├── internal/                    # 项目私有代码（不对外暴露）
│   ├── app/                     # 应用编排层
│   │   ├── app.go
│   │   ├── bootstrap/
│   │   ├── module/
│   │   ├── service/
│   │   ├── domain/
│   │   ├── repository/
│   │   └── usecase/
│   └── platform/
│       ├── runtime/
│       └── worker/
├── pkg/                         # 可复用公共库（谨慎放置）
│   ├── logger/
│   ├── database/
│   ├── cache/
│   ├── queue/
│   ├── metrics/
│   └── utils/
├── api/
│   └── openapi/                 # API 协议文档占位
├── deployments/
│   ├── docker/                  # Docker 部署资源
│   └── k8s/                     # Kubernetes 部署资源
├── configs/                     # 配置目录占位（当前无实现）
├── migrations/                  # 数据迁移脚本占位
├── scripts/                     # 工具脚本
├── test/                        # 测试目录
├── go.mod
└── README.md
```

## Run

```bash
go run ./cmd/api -env dev
```

## Multi-Env Config

- `configs/config.dev.toml`
- `configs/config.test.toml`
- `configs/config.prod.toml`
- `configs/config.toml`（兜底配置）

优先通过命令参数 `-env` 选择配置：

```bash
go run ./cmd/api -env dev
go run ./cmd/api -env test
go run ./cmd/api -env prod
```
