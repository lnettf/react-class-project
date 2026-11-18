import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router";
import styles from "../Exercises.module.css";

/*
  EJERCICIO 3 — La búsqueda en la URL (useSearchParams)

  Este es el buscador del ejercicio 3 de useEffect, ya resuelto. El problema:
  si buscas "lean" y recargas la página, la búsqueda se pierde.
  Y no puedes mandarle a nadie un enlace con la búsqueda hecha.

  Enunciado:
  1. Cambia el useState de `search` por useSearchParams(), para que la URL sea
     /router/3?q=lean. Recarga la página: la búsqueda tiene que mantenerse.
  2. Si el input se queda vacío, quita el ?q= de la URL.
  3. Escribe "leanne" y pulsa "atrás" en el navegador. ¿Cuántas veces tienes que
     pulsarlo? Arréglalo para que no se guarde una entrada por cada tecla.
  4. Añade enlaces de "búsquedas rápidas" con <Link to="?q=lean">.

  Pistas:
  - const [searchParams, setSearchParams] = useSearchParams();
  - searchParams.get("q") devuelve null si no existe → usa ?? "".
  - setSearchParams({ q: "texto" }) cambia la URL. Para quitarlo: setSearchParams({}).
  - setSearchParams acepta un segundo argumento de opciones: { replace: true }.
  - El useEffect del fetch NO hay que tocarlo. ¿Por qué?

  Reto extra:
  - Haz que cada nombre sea un Link al detalle del ejercicio 2 (/router/2/<id>).
*/

const USERS_URL = "https://jsonplaceholder.typicode.com/users";

export const Exercise3SearchParams = () => {
  // TODO 1: sustituye este useState por useSearchParams()
  const [search, setSearch] = useState("");

  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    // TODO 1, 2 y 3: actualiza la URL en vez del estado
    setSearch(e.target.value);
  };

  useEffect(() => {
    const controller = new AbortController();

    const loadUsers = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const url = `${USERS_URL}?q=${encodeURIComponent(search)}`;
        const res = await fetch(url, { signal: controller.signal });
        if (!res.ok) throw new Error(`Error ${res.status} al cargar los usuarios`);
        setUsers(await res.json());
      } catch (err) {
        if (err.name === "AbortError") return;
        setError(err.message);
      } finally {
        if (!controller.signal.aborted) setIsLoading(false);
      }
    };

    loadUsers();
    return () => controller.abort();
  }, [search]);

  return (
    <section className={styles.card}>
      <h2 className={styles.cardTitle}>Ejercicio 3 · Búsqueda en la URL</h2>

      {/* TODO 4: búsquedas rápidas con <Link to="?q=..."> */}

      <input
        className={styles.input}
        placeholder="Buscar..."
        value={search}
        onChange={handleChange}
      />

      {isLoading && <p>Cargando...</p>}
      {error && <p className={styles.error}>{error}</p>}
      {!isLoading && !error && users.length === 0 && <p>No hay resultados</p>}

      <ul className={styles.list}>
        {users.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong> — {user.email}
          </li>
        ))}
      </ul>
    </section>
  );
};
