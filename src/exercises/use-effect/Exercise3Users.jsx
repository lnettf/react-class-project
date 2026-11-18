import { useEffect, useState } from "react";
import styles from "../Exercises.module.css";

/*
  EJERCICIO 3 — Buscador de usuarios (useEffect + fetch)

  Enunciado:
  1. Al montar el componente, pide los usuarios a:
       https://jsonplaceholder.typicode.com/users
     y guárdalos en el estado `users`.
  2. Mientras se cargan, muestra "Cargando...".
  3. Si la petición falla, muestra el mensaje de error en rojo.
  4. Muestra la lista con el nombre y el email de cada usuario.
  5. El filtrado lo hace la API: cada vez que cambia `search` pide
       https://jsonplaceholder.typicode.com/users?q=<texto>
     (prueba antes en el navegador: .../users?q=lean)

  Pistas:
  - Ahora el fetch depende de `search`: ¿qué tiene que ir en el array de dependencias?
  - useEffect no puede ser async directamente: crea una función async dentro y llámala.
  - Usa try / catch / finally para gestionar `isLoading` y `error`.
  - Comprueba `res.ok`: fetch no lanza error con un 404, tienes que lanzarlo tú.
  - Usa encodeURIComponent(search) al montar la URL.
  - Antes de cada petición pon isLoading a true y error a null.

  Reto extra:
  - Escribe rápido en el input: ¿llegan las respuestas en orden? Usa un
    AbortController y abórtalo en la función de limpieza del efecto.
  - Cambia la URL a una que no exista para probar el error.
*/

const USERS_URL = "https://jsonplaceholder.typicode.com/users";

export const Exercise3Users = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  // TODO 1: escribe aquí el useEffect que hace el fetch a USERS_URL


  return (
    <section className={styles.card}>
      <h2 className={styles.cardTitle}>Ejercicio 3 · Usuarios</h2>

      <input
        className={styles.input}
        placeholder="Buscar..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* TODO 2: muestra "Cargando..." o el error cuando corresponda */}

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
