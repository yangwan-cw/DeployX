package main

import (
	"deployx/backend/internal/app"
	"flag"

	"go.uber.org/zap"
)

func main() {
	env := flag.String("env", "dev", "runtime environment: dev|test|prod")
	flag.Parse()

	bootstrapLogger, err := zap.NewDevelopment()
	if err != nil {
		panic(err)
	}
	defer bootstrapLogger.Sync()

	application, err := app.New(*env)
	if err != nil {
		bootstrapLogger.Fatal("failed to create application", zap.Error(err))
	}

	application.Logger.Info(
		"application initialized",
		zap.String("name", application.Config.App.Name),
		zap.String("version", application.Config.App.Version),
		zap.String("env", application.Config.App.Env),
		zap.String("addr", application.Config.Server.Addr),
	)

	if err := application.Start(); err != nil {
		application.Logger.Fatal("application start failed", zap.Error(err))
	}
}
