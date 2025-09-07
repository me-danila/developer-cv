#!/bin/bash
set -e

log() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1"
}

log "Начинаем обновление..."

# Получаем последние изменения
git fetch origin
git reset --hard origin/main

# Перезапускаем контейнеры
log "Перезапускаем контейнеры..."
docker compose down
docker compose up -d --build

log "Обновление завершено!"
log "Статус контейнеров:"
docker compose ps