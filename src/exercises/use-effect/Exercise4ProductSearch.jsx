import { useEffect, useState } from "react";
import styles from "../Exercises.module.css";
import { Product } from "../../components/Product/Product";

/*
  EJERCICIO 4 — REPASO · Buscador de productos con debounce

  Enunciado:
  1. Busca productos en dummyjson con el parámetro q:
       https://dummyjson.com/products/search?q=<texto>&limit=12
     Ábrela antes en el navegador: la respuesta NO es un array,
     es { products: [...], total, skip, limit }.
  2. Muestra "Cargando...", el error en rojo y "X resultados" (usa `total`).
  3. Pinta cada producto reutilizando el componente <Product /> del proyecto.
  4. Debounce: NO hagas una petición por cada tecla. Espera 500 ms desde la
     última tecla antes de buscar (mira la pestaña Network para comprobarlo).

  Pistas:
  - Usa dos estados: `search` (lo que hay en el input) y `debouncedSearch`
    (el valor con el que se hace el fetch).
  - Efecto 1, depende de [search]: un setTimeout que hace setDebouncedSearch(search).
    En la limpieza, clearTimeout. ¿Por qué así se cancela la búsqueda "a medias"?
  - Efecto 2, depende de [debouncedSearch]: el fetch, igual que en el ejercicio 3.
  - <Product /> recibe las props name, price y thumbnail.

  Reto extra:
  - Añade un <select> con el límite de resultados (6, 12, 24) y mételo en la URL.
*/

const SEARCH_URL = "https://dummyjson.com/products/search";

export const Exercise4ProductSearch = () => {
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // TODO 1: efecto de debounce (setTimeout + clearTimeout)

  // TODO 2: efecto que hace el fetch a SEARCH_URL con debouncedSearch

  return (
    <section className={styles.card}>
      <h2 className={styles.cardTitle}>Ejercicio 4 · Repaso: buscador de productos</h2>

      <input
        className={styles.input}
        placeholder="Buscar productos (ej: phone)"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* TODO 3: "Cargando...", error y "X resultados" */}

      <div className={styles.grid}>
        {/* TODO 4: pinta los productos con <Product /> */}
      </div>
    </section>
  );
};
