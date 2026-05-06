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

Эндпойнт отзывов: `GET /api/yandex-reviews` (`app/api/yandex-reviews/route.ts`).

- По умолчанию отдаёт локальный файл: `data/yandex-reviews.json`
- Можно прокинуть внешний JSON (сервер-сервер): переменная окружения `YANDEX_REVIEWS_JSON_URL`

## Контакты MVP

- Телефон: `+7 961 130 69 49`
- Telegram: `https://t.me/+79805642561`
- Адрес: `г. Рязань, ул. Баженова, 36`
