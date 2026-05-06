package app

import (
	"go.uber.org/zap"
	"go.uber.org/zap/zapcore"
)

func NewLogger(cfg *Config) (*zap.Logger, error) {
	var zapCfg zap.Config

	if cfg.App.Env == "prod" {
		zapCfg = zap.NewProductionConfig()
	} else {
		zapCfg = zap.NewDevelopmentConfig()
	}

	level := zapcore.DebugLevel
	if err := level.Set(cfg.Logger.Level); err != nil {
		return nil, err
	}

	zapCfg.Level = zap.NewAtomicLevelAt(level)

	return zapCfg.Build()
}
