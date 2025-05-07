Интерфейс для поиска компании по БИН и просмотра истории найденных компаний.

## ⚙️ Стек

- Vue 3 (Composition API)
- Vue Router
- Axios
- Vite
- Чистый CSS (без Tailwind)

---

## 🚀 Установка и запуск

```bash
npm install
npm run dev
```
🧭 Страницы

/ — Главная: кнопки "Поиск по БИН" и "История поиска"
/search — Ввод БИН и получение данных через /api/company/{bin}
/history — История всех найденных компаний (из базы)

⚙️ Настройки proxy

Для корректной работы с backend убедитесь, что в vite.config.js настроен proxy:

```
server: {
  proxy: {
    '/api': 'http://localhost:8080'
  }
}
```
