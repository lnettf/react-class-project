import { useEffect, useState } from "react";
import styles from "../../Exercises.module.css";

/*
  EJERCICIO 3 — Buscador de usuarios (useEffect + fetch + ?q=)   ✅ SOLUCIÓN

  Enunciado:
  1. Pide los usuarios a https://jsonplaceholder.typicode.com/users
     y guárdalos en el estado `users`.
  2. Mientras se cargan, muestra "Cargando...".
  3. Si la petición falla, muestra el mensaje de error en rojo.
  4. Muestra la lista con el nombre y el email de cada usuario.
  5. El filtrado lo hace la API: cada vez que cambia `search` se pide
       https://jsonplaceholder.typicode.com/users?q=<texto>

  Dos formas de filtrar (comparación):
  ┌─────────────────────────┬──────────────────────────────────────────────┐
  │ Filtrar en el cliente   │ 1 fetch al montar ([]) + users.filter(...)   │
  │                         │ en el render. Bien si los datos son pocos.   │
  ├─────────────────────────┼──────────────────────────────────────────────┤
  │ Filtrar en la API (?q=) │ 1 fetch cada vez que cambia search ([search])│
  │                         │ Lo normal cuando hay miles de resultados.    │
  └─────────────────────────┴──────────────────────────────────────────────┘
  Ojo: el `q` de jsonplaceholder busca en TODOS los campos (email, ciudad...),
  no solo en el nombre. Prueba a buscar "gwenborough".

  Qué se practica:
  - La URL se construye con el estado → `search` va en el array de dependencias.
  - encodeURIComponent: si el usuario escribe "&" o espacios, la URL no se rompe.
  - Antes de cada petición: isLoading = true y error = null (si no, se quedan
    con el valor de la búsqueda anterior).
  - Condición de carrera: si escribes "le" rápido, pueden llegar las respuestas
    de "l" y "le" desordenadas. Con AbortController cancelamos la petición
    anterior en la limpieza del efecto, así solo cuenta la última.
*/

const USERS_URL = "https://jsonplaceholder.typicode.com/users";

export const Exercise3UsersSolved = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    const loadUsers = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const url = `${USERS_URL}?q=${encodeURIComponent(search)}`;
        const res = await fetch(url, { signal: controller.signal });

        // fetch NO lanza error con un 404/500: lo lanzamos nosotros
        if (!res.ok) {
          throw new Error(`Error ${res.status} al cargar los usuarios`);
        }

        setUsers(await res.json());
      } catch (err) {
        // Si la abortamos nosotros no es un error real: lo ignoramos
        if (err.name === "AbortError") return;
        setError(err.message);
      } finally {
         setIsLoading(false);
      }
    };

    loadUsers();

    // Limpieza: se ejecuta ANTES del siguiente efecto (cuando cambia search)
    // → cancela la petición anterior que aún no ha terminado
    return () => controller.abort();
  }, [search]);

  return (
    <section className={styles.card}>
      <h2 className={styles.cardTitle}>Ejercicio 3 · Usuarios</h2>

      <input
        className={styles.input}
        placeholder="Buscar..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
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
