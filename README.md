# Все Свои 62 - MVP лендинг автосервиса

## Стек

- Next.js (App Router)
- React
- Chakra UI

## Запуск проекта

```bash
yarn install
yarn dev
```

## Основные команды

```bash
yarn dev
yarn build
yarn start
yarn lint
```

## Статический экспорт (для деплоя в Yandex Object Storage)

Проект настроен на `output: "export"`, после сборки готовые файлы лежат в `out/`.

```bash
yarn build
```

## Где менять контент

- Основной контент страницы (тексты, услуги, контакты, ссылки): `src/content.ts`
- Типы данных секций: `src/types.ts`
- Основная разметка секций: `src/LandingPage.tsx`
- Chakra/тема и провайдеры: `app/providers.tsx`, `src/theme/system.ts`
- Логотип: `public/images/logo.png`
- Open Graph изображение: `public/images/og-image.svg`
- SEO-метаданные: `app/layout.tsx`
- `robots.txt`: `app/robots.ts`
- `sitemap.xml`: `app/sitemap.ts`

## Отзывы (Яндекс)

Отзывы для статической версии читаются из файла `public/data/yandex-reviews.json`.

## Контакты MVP

- Телефон: `+7 961 130 69 49`
- Telegram: `https://t.me/+79805642561`
- Адрес: `г. Рязань, ул. Баженова, 36`
