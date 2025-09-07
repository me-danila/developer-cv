#!/bin/bash
set -e

log() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1"
}

# Проверка, что скрипт запущен от root
if [ "$EUID" -ne 0 ]; then
    echo "Запустите скрипт с правами root (sudo ./setup.sh)"
    exit 1
fi

log "Настройка сервера для Developer CV..."

# Обновление системы
log "Обновляем систему..."
apt update && apt upgrade -y

# Установка необходимых пакетов
log "Устанавливаем необходимые пакеты..."
apt install -y curl git nginx certbot python3-certbot-nginx ssl-cert

# Установка Docker
if ! command -v docker &> /dev/null; then
    log "Устанавливаем Docker..."
    curl -fsSL https://get.docker.com -o get-docker.sh
    sh get-docker.sh
    rm get-docker.sh
else
    log "Docker уже установлен"
fi

# Проверяем Docker Compose (новый способ и старый)
if ! docker compose version &> /dev/null && ! command -v docker-compose &> /dev/null; then
    log "Устанавливаем Docker Compose..."
    curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
    chmod +x /usr/local/bin/docker-compose
    # Создаем алиас для нового синтаксиса
    ln -sf /usr/local/bin/docker-compose /usr/local/bin/docker-compose-v1
else
    log "Docker Compose уже установлен"
fi

# Генерируем self-signed сертификаты если их нет
if [ ! -f "/etc/ssl/certs/ssl-cert-snakeoil.pem" ]; then
    log "Генерируем временные SSL сертификаты..."
    make-ssl-cert generate-default-snakeoil --force-overwrite
fi

# Запуск служб
log "Запускаем службы..."
systemctl enable docker
systemctl start docker
systemctl enable nginx
systemctl start nginx

log "Сервер настроен!"