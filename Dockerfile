FROM node:18 AS builder

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json для установки зависимостей
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем все файлы приложения в контейнер
COPY . .

# Собираем проект
RUN npm run build

# Указываем базовый образ для продакшн-окружения
FROM node:18 AS runner

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем необходимые файлы из стадии сборки
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules

# Указываем переменную окружения для Next.js
ENV NODE_ENV production

# Открываем порт, на котором будет работать приложение
EXPOSE 3000

# Запускаем приложение
CMD ["npm", "start"]
