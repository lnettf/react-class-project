# Proyecto de clase · React

Proyecto del curso de React (Vite + React 19 + React Router).

## Puesta en marcha

```bash
npm install
npm run dev
```

Abre la URL que aparece en la terminal (normalmente http://localhost:5173).

| Comando           | Qué hace                              |
| ----------------- | ------------------------------------- |
| `npm run dev`     | Servidor de desarrollo con recarga    |
| `npm run build`   | Genera la versión de producción       |
| `npm run preview` | Sirve la versión de producción        |
| `npm run lint`    | Revisa el código con Oxlint           |

## Páginas

| URL         | Contenido                                            |
| ----------- | ---------------------------------------------------- |
| `/`         | Lista de productos + ejercicios de `useEffect`       |
| `/router`   | Introducción y ejercicios de React Router            |

## Estructura

```
src/
├── main.jsx                  # Punto de entrada: BrowserRouter y rutas principales
├── assets/products.js        # Datos de productos de ejemplo
├── components/
│   ├── ProductList.jsx
│   └── Product/              # Componente Product + CSS Module
└── exercises/
    ├── Exercises.module.css        # Estilos compartidos por todos los ejercicios
    ├── use-effect/                 # Página "/"
    │   ├── UseEffectExercises.jsx  # Muestra todos los ejercicios de useEffect
    │   ├── UseEffectIntro.jsx
    │   ├── Exercise1TabTitle.jsx
    │   ├── Exercise2Stopwatch.jsx
    │   ├── Exercise3Users.jsx
    │   └── Exercise4ProductSearch.jsx
    └── react-router/               # Página "/router"
        ├── RouterExercises.jsx     # Menú + introducción
        ├── Exercise1Routes.jsx
        ├── Exercise2UserDetail.jsx
        └── Exercise3SearchParams.jsx
```

Cada ejercicio tiene el enunciado y las pistas en el comentario de arriba del fichero.
Busca los `TODO` para ver qué hay que completar.

## Ejercicios

### useEffect (`/`)

| #     | Ejercicio                 | Qué se practica                                                     |
| ----- | ------------------------- | ------------------------------------------------------------------- |
| Intro | ¿Cómo funciona useEffect? | Las 3 formas del array de dependencias y la función de limpieza     |
| 1     | Título de la pestaña      | Efecto que cambia `document.title`                                  |
| 2     | Cronómetro                | `setInterval` + limpieza con `clearInterval`                        |
| 3     | Buscador de usuarios      | `fetch` con `try/catch/finally`, filtrar en la API con `?q=`, `AbortController` |
| 4     | Repaso: buscador de productos | Debounce con `setTimeout`, `fetch` a dummyjson, reutilizar `<Product />` |

### React Router (`/router`)

| # | Ejercicio             | Qué se practica                                             |
| - | --------------------- | ----------------------------------------------------------- |
| 1 | Rutas básicas         | `Routes`, `Route`, `index`, `NavLink` activo, página 404    |
| 2 | Detalle de usuario    | Rutas dinámicas `:userId`, `useParams`, `useNavigate`       |
| 3 | Búsqueda en la URL    | `useSearchParams` (`?q=`) para no perder la búsqueda        |

## APIs que usamos

- Usuarios: https://jsonplaceholder.typicode.com/users (`?q=texto` para buscar, `/users/1` para uno)
- Productos: https://dummyjson.com/products/search?q=texto

## Siguiente paso

Llevar lo de los ejercicios a la página de productos: buscador con `?q=` y
una ruta de detalle `/products/:id`.
