#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

cleanup() {
  if [[ -n "${BACKEND_PID:-}" ]]; then
    kill "$BACKEND_PID" >/dev/null 2>&1 || true
  fi
  if [[ -n "${FRONTEND_PID:-}" ]]; then
    kill "$FRONTEND_PID" >/dev/null 2>&1 || true
  fi
}

trap cleanup EXIT INT TERM

echo "[dev] starting backend on :8080"
(
  cd "$ROOT_DIR/backend"
  go run ./cmd/api
) &
BACKEND_PID=$!

echo "[dev] starting frontend on :5173"
(
  cd "$ROOT_DIR/frontend"
  if [[ ! -d node_modules ]]; then
    echo "[dev] frontend dependencies not found, running npm install"
    npm install
  fi
  npm run dev -- --host 0.0.0.0
) &
FRONTEND_PID=$!

echo "[dev] backend pid=$BACKEND_PID, frontend pid=$FRONTEND_PID"
wait
