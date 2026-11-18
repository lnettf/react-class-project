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

const generateUrl = (search) => {
  if (search.length > 0) {
    return `${SEARCH_URL}?q=${search}`;
  }

  return SEARCH_URL;
}

const SEARCH_URL = "https://dummyjson.com/products/search";
const DEBOUNCE = 500;

export const Exercise4ProductSearch = () => {
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const get = async () => {
      try {
        const url = generateUrl(search)
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error("ERROR")
        }
        const productsResult = await res.json();
        setProducts(productsResult.products);
      } catch (error) {
        setError(error)
      } finally {
        setIsLoading(false)
      }
    }
    get()
  }, [debouncedSearch]);


  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search)
    }, DEBOUNCE);

    return () => {
      clearInterval(timer)
    }
  }, [search])


  return (
    <section className={styles.card}>
      <h2 className={styles.cardTitle}>Ejercicio 4 · Repaso: buscador de productos</h2>

      <input
        className={styles.input}
        placeholder="Buscar productos (ej: phone)"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />

      {/* TODO 3: "Cargando...", error y "X resultados" */}
      {isLoading && (<p>Cargando...</p>)}
      {error && (<p>error...</p>)}

      <div className={styles.grid}>
        {products.map(product => {

          return (
            <div>
              <h3>{product.title}</h3>

              <img src={product.images[0]} alt="" />
            </div>
          )
        })}
      </div>
    </section>
  );
};
