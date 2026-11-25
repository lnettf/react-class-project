# Proyecto · Mi tienda

Hasta ahora hemos hecho ejercicios sueltos: `useEffect`, fetch, React Router...
Ahora **la propia aplicación es el proyecto**: una tienda con productos y usuarios
en la raíz (`/`) que junta todo lo anterior y añade algo nuevo: **formularios**.

## Rutas

| URL                       | Página                         | Fichero                        |
| ------------------------- | ------------------------------ | ------------------------------ |
| `/`                       | Inicio                         | `src/pages/HomePage/HomePage.jsx`       |
| `/productos?q=`           | Listado + buscador             | `src/pages/ProductsPage/ProductsPage.jsx`   |
| `/productos/:productId`   | Detalle de producto            | `src/pages/ProductDetailPage/ProductDetailPage.jsx` |
| `/usuarios?q=`            | Listado + buscador             | `src/pages/UsersPage/UsersPage.jsx`      |
| `/usuarios/nuevo`         | ⭐ Formulario de alta          | `src/pages/NewUserPage/NewUserPage.jsx`    |
| `/usuarios/:userId`       | Detalle de usuario             | `src/pages/UserDetailPage/UserDetailPage.jsx` |
| cualquier otra            | 404                            | `src/pages/NotFoundPage/NotFoundPage.jsx`   |

Todas se pintan dentro de `src/layouts/MainLayout.jsx` (cabecera + `<Outlet />`).
Las rutas se escriben en `src/App.jsx`.

Los ejercicios están en `/ejercicios`.

## Fases

Cada fichero tiene el enunciado y las pistas en el comentario de arriba. Busca los `TODO`.

### Fase 0 · Instalar Tailwind

```bash
npm install -D tailwindcss @tailwindcss/vite
```

1. En `vite.config.js` añade el plugin:
   ```js
   import tailwindcss from "@tailwindcss/vite";
   // ...
   plugins: [react(), tailwindcss()],
   ```
2. En la primera línea de `src/index.css`:
   ```css
   @import "tailwindcss";
   ```
3. Comprueba que funciona: pon `className="text-3xl font-bold text-blue-600"` en el `HomePage`.
4. Ahora abre `/ejercicios`. ¿Ha cambiado algo? Tailwind trae un
   **reset CSS** (preflight) que quita márgenes y tamaños por defecto a `h1`, `ul`, `button`...
   ¿Por qué afecta a TODA la app aunque solo lo uses en la tienda?

### Fase 1 · Layout y rutas
- `src/App.jsx`: rutas de la tienda dentro de una ruta "layout" (`<Route element={<MainLayout />}>`).
- `src/layouts/MainLayout.jsx`: menú con `NavLink` (enlace activo, `end` en Inicio).
- `src/pages/NotFoundPage/NotFoundPage.jsx`: 404 con enlace al inicio.
- Repaso: `src/exercises/react-router/Exercise1Routes.jsx`.

### Fase 2 · Productos
- `ProductsPage`: dummyjson, búsqueda en la URL (`?q=`), debounce, AbortController.
- `ProductDetailPage`: `/products/:id`, 404 y "← Volver" conservando la búsqueda.

### Fase 3 · Usuarios
- `UsersPage`: jsonplaceholder con búsqueda en la URL y enlace a "Nuevo usuario".
- `UserDetailPage`: detalle, "← Atrás", anterior/siguiente.

### Fase 4 · Formulario de alta ⭐
**Antes haz los dos ejercicios de `/ejercicios/formularios`.**

`NewUserPage`:
- Un solo `useState` con un objeto (`INITIAL_FORM`).
- Un solo `handleChange` con `[name]: value` (también checkbox y select).
- `onSubmit` + `e.preventDefault()`, validación con un objeto `errors`.
- `POST` a jsonplaceholder, con el estado "Enviando..." y un mensaje de éxito.

### Fase 5 · Retos finales
- Productos y usuarios repiten el mismo patrón de fetch (loading, error, abort).
  Sácalo a un hook propio: `const { data, isLoading, error } = useFetch(url)` en `src/hooks/useFetch.js`.
- En el detalle de producto, enlaza a otros productos de la misma categoría
  (`https://dummyjson.com/products/category/<categoria>`).

## ¿Cuándo está terminado?

- [ ] Todas las rutas de la tabla funcionan y la 404 sale con cualquier otra URL.
- [ ] Al recargar `/productos?q=phone` o `/usuarios?q=lean`, la búsqueda se mantiene.
- [ ] En la pestaña Network no hay una petición por cada tecla en productos.
- [ ] El botón "atrás" del navegador no recorre cada letra de la búsqueda.
- [ ] El formulario no recarga la página, valida, envía y se vacía.
- [ ] `npm run lint` y `npm run build` sin errores.

## APIs

- Productos: https://dummyjson.com/products/search?q=texto&limit=12 · detalle: `/products/1`
- Usuarios: https://jsonplaceholder.typicode.com/users?q=texto · detalle: `/users/1` · alta: `POST /users`
