import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router";
import styles from "../../Exercises.module.css";

/*
  EJERCICIO 3 — La búsqueda en la URL (useSearchParams)   ✅ SOLUCIÓN

  Es el buscador del ejercicio 3 de useEffect, pero el texto buscado
  vive en la URL (/ejercicios/router/3?q=lean) en vez de en un useState.

  ¿Para qué?
  - Si recargas la página, la búsqueda se mantiene.
  - Puedes copiar la URL y mandársela a alguien: verá los mismos resultados.
  - Los botones atrás/adelante del navegador funcionan.

  Qué se practica:
  - useSearchParams() funciona como useState, pero guarda en el query string:
      const [searchParams, setSearchParams] = useSearchParams();
      searchParams.get("q")          → "lean" o null si no está
      setSearchParams({ q: "lean" }) → la URL pasa a ?q=lean
  - { replace: true }: sustituye la entrada del historial en vez de añadir una
    por cada tecla (si no, para volver atrás tendrías que pulsar 20 veces).
  - Un <Link to="?q=..."> también cambia la búsqueda: la URL es el estado.
  - El fetch NO cambia nada: sigue dependiendo de `search`, venga de donde venga.
*/

const USERS_URL = "https://jsonplaceholder.typicode.com/users";

export const Exercise3SearchParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("q") ?? "";

  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const value = e.target.value;
    // Si el input está vacío quitamos el ?q= de la URL
    setSearchParams(value ? { q: value } : {}, { replace: true });
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

      <div className={styles.row}>
        Búsquedas rápidas:
        <Link to="?q=lean">lean</Link>
        <Link to="?q=gwenborough">gwenborough</Link>
        <Link to="?">(todos)</Link>
      </div>

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
            {/* Reto extra: enlazamos con el detalle del ejercicio 2 */}
            <Link to={`/ejercicios/router/2/${user.id}`}>
              <strong>{user.name}</strong>
            </Link>{" "}
            — {user.email}
          </li>
        ))}
      </ul>
    </section>
  );
};
