import { useEffect, useState } from "react";
import styles from "../../Exercises.module.css";
import { Product } from "../../../components/Product/Product";

/*
  EJERCICIO 4 — REPASO · Buscador de productos con debounce   ✅ SOLUCIÓN

  Enunciado:
  1. Busca productos en dummyjson con el parámetro q:
       https://dummyjson.com/products/search?q=<texto>&limit=12
     La respuesta NO es un array: es { products: [...], total, skip, limit }.
  2. Muestra "Cargando...", el error en rojo y "X resultados" (usa `total`).
  3. Pinta cada producto reutilizando el componente <Product /> del proyecto.
  4. Debounce: NO hagas una petición por cada tecla. Espera 500 ms desde la
     última tecla antes de buscar.

  Qué se repasa:
  - useState, useEffect con dependencias y función de limpieza.
  - Limpieza con clearTimeout (como el clearInterval del cronómetro).
  - fetch + res.ok + try/catch/finally + AbortController (como el ejercicio 3).
  - Reutilizar componentes pasando props.

  Cómo funciona el debounce:
    tecla "p"  → setTimeout(500ms)
    tecla "ph" → la limpieza cancela el anterior → setTimeout(500ms)
    ... 500 ms sin teclas → setDebouncedSearch("pho") → se lanza el fetch
*/

const SEARCH_URL = "https://dummyjson.com/products/search";

export const Exercise4ProductSearch = () => {
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Efecto 1: debounce → copia `search` en `debouncedSearch` tras 500 ms
  useEffect(() => {
    const timeoutId = setTimeout(() => setDebouncedSearch(search), 500);
    return () => clearTimeout(timeoutId);
  }, [search]);

  // Efecto 2: fetch → solo depende del valor "con debounce"
  useEffect(() => {
    const controller = new AbortController();

    const loadProducts = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const url = `${SEARCH_URL}?q=${encodeURIComponent(debouncedSearch)}&limit=12`;
        const res = await fetch(url, { signal: controller.signal });
        if (!res.ok) throw new Error(`Error ${res.status} al buscar productos`);

        const data = await res.json();
        setProducts(data.products);
        setTotal(data.total);
      } catch (err) {
        if (err.name === "AbortError") return;
        setError(err.message);
      } finally {
        if (!controller.signal.aborted) setIsLoading(false);
      }
    };

    loadProducts();
    return () => controller.abort();
  }, [debouncedSearch]);

  return (
    <section className={styles.card}>
      <h2 className={styles.cardTitle}>Ejercicio 4 · Repaso: buscador de productos</h2>

      <input
        className={styles.input}
        placeholder="Buscar productos (ej: phone)"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {isLoading && <p>Cargando...</p>}
      {error && <p className={styles.error}>{error}</p>}
      {!isLoading && !error && <p>{total} resultados</p>}

      <div className={styles.grid}>
        {products.map((product) => (
          <Product
            key={product.id}
            name={product.title}
            price={product.price}
            thumbnail={product.thumbnail}
          />
        ))}
      </div>
    </section>
  );
};
