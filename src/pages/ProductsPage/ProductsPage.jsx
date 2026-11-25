/*
  PROYECTO · Productos (fase 2)

  Es el ejercicio 4 de useEffect + el ejercicio 3 de router, juntos y "de verdad".

  Enunciado:
  1. Pide los productos a:
       https://dummyjson.com/products/search?q=<texto>&limit=12
     Recuerda: la respuesta es { products: [...], total, skip, limit }.
  2. Muestra "Cargando...", el error y "X resultados" (usa `total`).
  3. La búsqueda vive en la URL: /productos?q=phone
     - Recarga la página: la búsqueda se tiene que mantener.
     - Si el input queda vacío, quita el ?q=.
     - Que no se guarde una entrada en el historial por cada tecla.
  4. Debounce de 500 ms: no hagas una petición por cada tecla.
  5. Cancela la petición anterior con AbortController.
  6. Cada producto es un <Link> a /productos/<id>.

  Pistas (no lo vuelvas a inventar, ya lo has hecho):
  - useSearchParams + { replace: true } → src/exercises/react-router/Exercise3SearchParams.jsx
  - Debounce con dos estados/efectos     → src/exercises/use-effect/Exercise4ProductSearch.jsx
  - Ojo: el input escribe en la URL al momento, pero el fetch usa el valor "debounced".

  Reto extra:
  - Un <select> con el límite (6, 12, 24) que también vaya en la URL: ?q=phone&limit=6
*/

export const ProductsPage = () => {
  return <p>TODO: listado de productos</p>;
};
