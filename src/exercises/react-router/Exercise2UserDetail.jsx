import { useEffect, useState } from "react";
import { Link, Route, Routes, useNavigate, useParams } from "react-router";
import styles from "../Exercises.module.css";

/*
  EJERCICIO 2 — Listado y detalle con rutas dinámicas (useParams + useNavigate)

  Enunciado:
  Este ejercicio vive en /router/2:
    /router/2           → <UserList />   (ya hace el fetch de la lista)
    /router/2/:userId   → <UserDetail />

  1. Crea las dos rutas. La segunda tiene un parámetro: path=":userId".
  2. En <UserList />, convierte cada nombre en un <Link> a /router/2/<id>.
  3. En <UserDetail />:
     a. Lee el id de la URL con useParams().
     b. Pide https://jsonplaceholder.typicode.com/users/<id> y muestra
        nombre, email, teléfono, ciudad (address.city) y empresa (company.name).
     c. Muestra "Cargando..." y los errores. Si la API devuelve 404,
        el mensaje debe ser "Usuario no encontrado" (prueba /router/2/999).
  4. Añade un botón "← Atrás" que use useNavigate().

  Pistas:
  - ¿Qué va en el array de dependencias del efecto del detalle?
    Pista: si navegas de /router/2/1 a /router/2/2, ¿se vuelve a montar el componente?
  - navigate(-1) vuelve a la página anterior, igual que el botón del navegador.

  Reto extra:
  - Botón "Siguiente →" que vaya al usuario id + 1.
    Cuidado: useParams devuelve STRINGS. "1" + 1 = "11" 🤔
*/

const BASE = "/router/2";
const USERS_URL = "https://jsonplaceholder.typicode.com/users";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const res = await fetch(USERS_URL);
        if (!res.ok) {
          throw new Error(`Error ${res.status} al cargar los usuarios`);
        }
        setUsers(await res.json());
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    loadUsers();
  }, []);

  return (
    <>
      {isLoading && <p>Cargando...</p>}
      {error && <p className={styles.error}>{error}</p>}
      <ul className={styles.list}>
        {users.map((user) => (
          // TODO 2: convierte el nombre en un Link al detalle
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
};

const UserDetail = () => {
  // TODO 3a: lee userId con useParams()
  // TODO 4: const navigate = ...
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // TODO 3b: useEffect que pide el usuario

  return (
    <div>
      {/* TODO 4: botón "← Atrás" */}
      {/* TODO 3c: "Cargando...", error y los datos del usuario */}
    </div>
  );
};

export const Exercise2UserDetail = () => {
  return (
    <section className={styles.card}>
      <h2 className={styles.cardTitle}>Ejercicio 2 · Detalle de usuario</h2>

      {/* TODO 1: <Routes> con la lista (index) y el detalle (":userId") */}
      <UserList />
    </section>
  );
};
