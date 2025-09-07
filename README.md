# Developer CV

CV & portfolio for developer

## Деплой с нуля на VPS Ubuntu

### 1. Подготовка сервера

- Создайте деплой-ключ и добавьте его в настройки репозитория

```bash
ssh-keygen -t ed25519 -C "your_email@example.com"
```

- Затем склонируйте репозиторий

```bash
cd /opt
git clone git@github.com:me-danila/developer-cv.git
```

- И запустите автоматическую настройку сервера

```bash
cd developer-cv
chmod +x setup.sh
sudo ./setup.sh
```

Скрипт `setup.sh` автоматически:

- Обновит систему Ubuntu
- Установит Docker и Docker Compose
- Установит Nginx и Certbot для SSL
- Настроит все необходимые службы

### 2. Настройка конфигурации

```bash
# Скопируйте и отредактируйте файл окружения
cp .env.example .env
nano .env
```

Убедитесь, что домен указывает на IP вашего сервера:

- Создайте A-запись в DNS для домена из `.env`:
  `sub.example.com` → `server-ip`
- Подождите распространения DNS (5-60 минут)

**Обязательно заполните все переменные в .env.**

### 3. Деплой

```bash
# Запустите автоматический деплой
chmod +x deploy.sh
sudo ./deploy.sh
```

Скрипт `deploy.sh` автоматически:

- Создаст конфигурацию Nginx из шаблона
- Настроит SSL сертификат через Let's Encrypt
- Запустит Docker контейнеры
- Настроит crontab

## Обновление проекта

Для обновления используйте простой скрипт:

```bash
cd /opt/developer-cv
chmod +x update.sh
./update.sh
```

Скрипт автоматически:

- Получит последние изменения из Git
- Пересоберет и перезапустит контейнеры
- Покажет статус