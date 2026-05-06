.PHONY: dev dev-backend dev-frontend

dev:
	bash ./scripts/dev.sh

dev-backend:
	cd backend && go run ./cmd/api

dev-frontend:
	cd frontend && npm run dev
