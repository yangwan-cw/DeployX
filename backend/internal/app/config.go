package app

import (
	"fmt"
	"strings"

	"github.com/spf13/viper"
)

type Config struct {
	App struct {
		Name    string `mapstructure:"name"`
		Version string `mapstructure:"version"`
		Env     string `mapstructure:"env"`
	} `mapstructure:"app"`

	Server struct {
		Addr string `mapstructure:"addr"`
		Mode string `mapstructure:"mode"`
	} `mapstructure:"server"`

	Logger struct {
		Level string `mapstructure:"level"`
	} `mapstructure:"log"`
}

func LoadConfig(env string) (*Config, error) {
	v := viper.New() // 引入viper
	v.SetConfigType("toml")

	if env == "" {
		env = "dev"
	}

	// 配置查询路径
	v.AddConfigPath("./configs")
	v.AddConfigPath("../configs")
	v.AddConfigPath("../../configs")
	v.AddConfigPath("../../../configs")

	v.SetDefault("app.name", "deployx")
	v.SetDefault("app.env", "dev")
	v.SetDefault("app.version", "1.0.1")
	v.SetDefault("server.addr", ":8080")
	v.SetDefault("server.mode", "debug")
	v.SetDefault("log.level", "debug")

	v.SetEnvPrefix("DEPLOYX")

	v.SetEnvKeyReplacer(strings.NewReplacer(".", "_"))
	v.AutomaticEnv()

	v.SetConfigName(fmt.Sprintf("config.%s", env))
	if err := v.ReadInConfig(); err != nil {
		if _, ok := err.(viper.ConfigFileNotFoundError); ok {
			v.SetConfigName("config")
			_ = v.ReadInConfig()
		} else {
			return nil, err
		}
	}

	var cfg Config
	if err := v.Unmarshal(&cfg); err != nil {
		return nil, err
	}

	return &cfg, nil

}
