# Современный лендинг для адвокатов. 

Сайт предоставляет комплексную информацию о юридической защите частных лиц и бизнеса, знакомит с практикующими адвокатами, стандартами работы и этапами сотрудничества.

## Технологический стек

Проект построен на современном стеке технологий для обеспечения высокой производительности и удобства поддержки:

- **Frontend:** [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Сборщик:** [Vite](https://vite.dev/)
- **Стилизация:** [Tailwind CSS v4](https://tailwindcss.com/) (с использованием `@tailwindcss/vite`)
- **Утилиты:** `clsx`, `tailwind-merge` (для гибкого управления классами)
- **Иконки:** [Lucide React](https://lucide.dev/), кастомные иконки для социальных сетей
- **Карты:** [MapLibre GL JS](https://maplibre.org/maplibre-gl-js/docs/) (открытая альтернатива YandexMaps)

## Быстрый старт

Для запуска проекта локально потребуется [Node.js](https://nodejs.org/) (рекомендуется версия 18+).

### 1. Клонирование репозитория
```bash
git clone https://github.com/zed-damasky/lawyer-landing.git
cd lawyer-landing
```

### 2. Установка зависимостей
```bash
npm install
# или
pnpm install
# или
yarn install
```

### 3. Запуск в режиме разработки
```bash
npm run dev
```
Приложение будет доступно по адресу http://localhost:5173

## Сборка для продакшена
Чтобы собрать оптимизированную версию сайта для деплоя:
```bash
npm run build
```
Для локального предпросмотра собранной версии:
```bash
npm run preview
```
## Результат
### https://адвокат.website 
<img width="1913" height="902" alt="image" src="https://github.com/user-attachments/assets/40dde6b3-c193-4ba9-96b5-b9e5395db6b6" />
<img width="1919" height="902" alt="image" src="https://github.com/user-attachments/assets/069d4403-72ff-4f69-9ecb-72c751fbc5f4" />
<img width="1917" height="909" alt="image" src="https://github.com/user-attachments/assets/78b0fb44-2b28-4313-8b42-8030c72f0834" />
<img width="1919" height="907" alt="image" src="https://github.com/user-attachments/assets/46734f33-8f71-4a29-8e0d-8e920f8a4b73" />

## Лицензия
Этот проект создан в качестве лендинга для адвокатов. Все права на тексты и дизайн принадлежат владельцам лендинга.
