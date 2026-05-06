package app

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"go.uber.org/zap"

	"deployx/backend/internal/app/middleware"
)

func NewRouter(cfg *Config, logger *zap.Logger) *gin.Engine {
	gin.SetMode(cfg.Server.Mode)

	r := gin.New()

	r.Use(gin.Recovery())
	r.Use(middleware.RequestLogger(logger))

	r.GET("/health", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
			"status": "ok",
			"app":    cfg.App.Name,
			"env":    cfg.App.Env,
		})
	})

	return r
}
