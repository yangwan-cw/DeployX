package app

import (
	"fmt"

	"github.com/gin-gonic/gin"
	"go.uber.org/zap"
)

// 返回应用
type Application struct {
	Config *Config
	Logger *zap.Logger
	Router *gin.Engine
}

// 创建对应用
func New(env string) (*Application, error) {
	cfg, err := LoadConfig(env)

	if err != nil {
		return nil, fmt.Errorf("load config failed: %w", err)
	}
	logger, err := NewLogger(cfg)
	if err != nil {
		return nil, fmt.Errorf("init logger failed: %w", err)
	}

	router := NewRouter(cfg, logger)

	return &Application{
		Config: cfg,
		Logger: logger,
		Router: router,
	}, nil
}

// 启动应用
func (a *Application) Start() error {
	a.Logger.Info("starting server", zap.String("addr", a.Config.Server.Addr))
	return a.Router.Run(a.Config.Server.Addr) // 后续重构此处，使用更加优雅的 &http.Server 结合gin
}
