#!/bin/bash
set -e

# Функция для логирования
log() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1"
}

# Проверка, что скрипт запущен от root
if [ "$EUID" -ne 0 ]; then
    echo "Запустите скрипт с правами root (sudo ./deploy.sh)"
    exit 1
fi

log "Начинаем деплой..."

# Проверка наличия файлов
if [ ! -f ".env" ]; then
    log "ОШИБКА: файл .env не найден!"
    log "Скопируйте .env.example в .env и заполните переменные"
    exit 1
fi

if [ ! -f "nginx.example.conf" ]; then
    log "ОШИБКА: файл nginx.example.conf не найден!"
    exit 1
fi

# Загружаем переменные из .env
source .env

# Проверяем обязательные переменные
check_var() {
    local var_name=$1
    local var_value=$2
    if [ -z "$var_value" ]; then
        log "ОШИБКА: переменная $var_name не задана в .env файле"
        exit 1
    fi
}

check_var "HOST" "$HOST"
check_var "PORT" "$PORT"

# Извлекаем только домены (убираем протокол если есть)
HOST=$(echo "$HOST" | sed 's|https\?://||')

log "Создаем nginx конфиг для домена: $HOST"

# Создаем nginx конфиг из шаблона
sed "s/{{HOST}}/$HOST/g; s/{{PORT}}/$PORT/g" nginx.example.conf > /etc/nginx/sites-available/developer-cv

# Создаем симлинк
ln -sf /etc/nginx/sites-available/developer-cv /etc/nginx/sites-enabled/

# Проверяем nginx конфиг
if nginx -t; then
    systemctl reload nginx
    log "Nginx конфиг успешно создан и загружен"
else
    log "ОШИБКА: некорректный nginx конфиг"
    exit 1
fi

# SSL сертификаты для всех доменов
log "Настраиваем SSL сертификаты..."

# Получаем email для certbot
EMAIL="admin@$HOST"

# Функция для создания SSL сертификата
setup_ssl() {
    local domain=$1
    log "Настраиваем SSL для $domain..."

    if certbot --nginx -d "$domain" --non-interactive --agree-tos --email "$EMAIL"; then
        log "SSL для $domain успешно настроен"
    else
        log "Не удалось настроить SSL для $domain (возможно уже настроен)"
    fi
}

# Создаем сертификаты для каждого домена
setup_ssl "$HOST"

log "SSL сертификат настроен"

# Docker деплой
log "Деплоим Docker контейнеры..."

# Останавливаем существующие контейнеры
docker compose down 2>/dev/null || true

# Собираем и запускаем новые контейнеры
if docker compose up -d --build; then
    log "Docker контейнеры успешно запущены"
else
    log "ОШИБКА: не удалось запустить Docker контейнеры"
    exit 1
fi

# Ждем запуска контейнеров
sleep 5

log "Деплой завершен успешно!"
log "Статус контейнеров:"
docker compose ps

# Проверяем, что контейнеры работают
if [ $(docker compose ps --services --filter "status=running" | wc -l) -gt 0 ]; then
    log "✅ Все сервисы запущены успешно!"
else
    log "⚠️  Не все сервисы запущены. Проверьте логи: docker compose logs"
fi