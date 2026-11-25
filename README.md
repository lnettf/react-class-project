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

## Proyecto: Mi tienda

La propia aplicación es el proyecto del curso: una tienda en `/` con productos,
usuarios y un formulario de alta, con el diseño en Tailwind.

Enunciado y fases: [docs/PROYECTO.md](docs/PROYECTO.md)

## Páginas

| URL                       | Contenido                                       |
| ------------------------- | ----------------------------------------------- |
| `/`                       | 🛒 Proyecto: Mi tienda (inicio)                 |
| `/productos`, `/productos/:productId` | Tienda: productos                   |
| `/usuarios`, `/usuarios/nuevo`, `/usuarios/:userId` | Tienda: usuarios      |
| `/ejercicios/use-effect`  | Lista de productos + ejercicios de `useEffect`  |
| `/ejercicios/use-state`   | Ejemplo del contador con `useState`             |
| `/ejercicios/formularios` | Ejercicios de formularios                       |
| `/router`                 | Introducción y ejercicios de React Router       |

## Estructura

```
docs/
└── PROYECTO.md               # Enunciado del proyecto
src/
├── main.jsx                  # Punto de entrada: BrowserRouter + <App />
├── App.jsx                   # Todas las rutas (tienda + ejercicios)
├── assets/products.js        # Datos de productos de ejemplo
├── layouts/MainLayout.jsx    # Cabecera + <Outlet /> de la tienda
├── pages/                    # Páginas de la tienda (lógica a mano)
│   ├── HomePage/
│   ├── ProductsPage/
│   ├── ProductDetailPage/
│   ├── UsersPage/
│   ├── UserDetailPage/
│   ├── NewUserPage/          # Formulario con useState de objeto
│   └── NotFoundPage/
├── components/               # Componentes reutilizables
│   ├── ProductList.jsx
│   └── Product/
└── exercises/
    ├── Exercises.module.css  # Estilos compartidos por todos los ejercicios
    ├── use-state/            # /ejercicios/use-state (contador)
    ├── use-effect/           # /ejercicios/use-effect (+ solved/)
    ├── forms/                # /ejercicios/formularios
    │   ├── FormsExercises.jsx
    │   ├── Exercise1BasicForm.jsx
    │   └── Exercise2DynamicForm.jsx
    └── react-router/         # /router (+ solved/)
```

Cada ejercicio tiene el enunciado y las pistas en el comentario de arriba del fichero.
Busca los `TODO` para ver qué hay que completar. Las soluciones están en las carpetas `solved/`.

## Ejercicios

### useEffect (`/ejercicios/use-effect`)

| #     | Ejercicio                 | Qué se practica                                                     |
| ----- | ------------------------- | ------------------------------------------------------------------- |
| Intro | ¿Cómo funciona useEffect? | Las 3 formas del array de dependencias y la función de limpieza     |
| 1     | Título de la pestaña      | Efecto que cambia `document.title`                                  |
| 2     | Cronómetro                | `setInterval` + limpieza con `clearInterval`                        |
| 3     | Buscador de usuarios      | `fetch` con `try/catch/finally`, filtrar en la API con `?q=`, `AbortController` |
| 4     | Repaso: buscador de productos | Debounce con `setTimeout`, `fetch` a dummyjson, reutilizar `<Product />` |

### Formularios (`/ejercicios/formularios`)

| # | Ejercicio                       | Qué se practica                                               |
| - | ------------------------------- | ------------------------------------------------------------- |
| 1 | Formulario de contacto          | `useState` con un objeto, inputs controlados, un handler por campo, `onSubmit` |
| 2 | Registro con un solo handler    | `handleChange` único con `[name]: value`, checkbox con `checked`, `<select>` |

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

El proyecto de la tienda: [docs/PROYECTO.md](docs/PROYECTO.md).
