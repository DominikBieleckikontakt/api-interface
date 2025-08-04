# API Interface – Vue.js + Vuex

Projekt stworzony jako zadanie rekrutacyjne dla firmy **Cogitech**. Aplikacja jest interfejsem użytkownika do wyświetlania i zarządzania postami z REST API [`jsonplaceholder.typicode.com`](https://jsonplaceholder.typicode.com), z wykorzystaniem Vue 3 i Vuex.

## 🔗 Demo

👉 [Zobacz działającą aplikację](https://dominikbieleckikontakt.github.io/api-interface)

---

## ✨ Funkcje

- ✅ Pobieranie danych z API (posty i użytkownicy)

- ✅ Wyświetlanie listy postów z paginacją (10 na stronę)

- ✅ Możliwość usuwania postów

- ✅ Autor postu (imię i nazwisko)

- ✅ Rozwijana treść (`Zobacz więcej` / `Zobacz mniej`)

- ✅ Paginacja bez przeładowania strony

- ✅ Toaster z animacją po usunięciu posta

- ✅ Responsywny design (RWD)

---

## 🛠️ Technologie

- [Vue 3](https://vuejs.org/)

- [Vuex 4](https://vuex.vuejs.org/)

- [Vite](https://vitejs.dev/)

- [Tailwind CSS](https://tailwindcss.com/) (utility-first styling)

- [Axios](https://axios-http.com/) – do komunikacji z API

---

## 🚀 Uruchomienie lokalne

```bash

# 1. Klonuj repozytorium

git  clone  https://github.com/dominikbieleckikontakt/api-interface.git

cd  api-interface



# 2. Instalacja zależności

npm  install



# 3. Start serwera deweloperskiego

npm  run  dev

```

## 📄 Uwagi techniczne

- Do animacji toasta zastosowano komponent <Transition> oraz własne klasy CSS.

- Toaster automatycznie się chowa po 2 sekundach i resetuje timeout przy szybkim klikaniu.

- Dane pochodzą z publicznego API JSONPlaceholder (brak realnego zapisu/usuwania na serwerze).

## Licencja

Projekt stworzony na potrzeby rekrutacji – tylko do celów demonstracyjnych.
