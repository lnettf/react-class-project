import { useEffect, useState } from "react";
import { Link, Route, Routes, useNavigate, useParams } from "react-router";
import styles from "../../Exercises.module.css";

/*
  EJERCICIO 2 — Listado y detalle con rutas dinámicas (useParams + useNavigate)   ✅ SOLUCIÓN

  Rutas:
    /router/2           → <UserList />   (lista de usuarios, cada uno es un Link)
    /router/2/:userId   → <UserDetail /> (pide /users/:userId a la API)

  Qué se practica:
  - ":userId" es un parámetro: encaja con /router/2/1, /router/2/7, /router/2/abc...
  - useParams() devuelve { userId: "7" } → ¡siempre es un STRING!
  - Como el fetch depende de userId, va en el array de dependencias del efecto:
    si navegas de /router/2/1 a /router/2/2 el componente NO se desmonta,
    solo cambia userId y el efecto se vuelve a ejecutar.
  - useNavigate() para navegar desde código: navigate(-1) = botón "atrás".
  - /router/2/999 → la API devuelve 404 → mostramos "Usuario no encontrado".
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
          <li key={user.id}>
            <Link to={`${BASE}/${user.id}`}>{user.name}</Link>
          </li>
        ))}
        <li>
          <Link to={`${BASE}/999`}>Usuario que no existe (999)</Link>
        </li>
      </ul>
    </>
  );
};

const UserDetail = () => {
  const { userId } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    const loadUser = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const res = await fetch(`${USERS_URL}/${userId}`, { signal: controller.signal });
        if (res.status === 404) throw new Error("Usuario no encontrado");
        if (!res.ok) throw new Error(`Error ${res.status}`);
        setUser(await res.json());
      } catch (err) {
        if (err.name === "AbortError") return;
        setError(err.message);
      } finally {
        if (!controller.signal.aborted) setIsLoading(false);
      }
    };

    loadUser();
    return () => controller.abort();
  }, [userId]);

  const nextId = Number(userId) + 1; // userId es string → lo pasamos a número

  return (
    <div>
      <div className={styles.row}>
        <button className={styles.buttonSecondary} onClick={() => navigate(-1)}>
          ← Atrás
        </button>
        <button className={styles.button} onClick={() => navigate(`${BASE}/${nextId}`)}>
          Siguiente →
        </button>
      </div>

      {isLoading && <p>Cargando...</p>}
      {error && <p className={styles.error}>{error}</p>}
      {!isLoading && !error && user && (
        <>
          <h3>{user.name}</h3>
          <ul className={styles.list}>
            <li>Email: {user.email}</li>
            <li>Teléfono: {user.phone}</li>
            <li>Ciudad: {user.address.city}</li>
            <li>Empresa: {user.company.name}</li>
          </ul>
        </>
      )}
    </div>
  );
};

export const Exercise2UserDetail = () => {
  return (
    <section className={styles.card}>
      <h2 className={styles.cardTitle}>Ejercicio 2 · Detalle de usuario</h2>

      <Routes>
        <Route index element={<UserList />} />
        <Route path=":userId" element={<UserDetail />} />
      </Routes>
    </section>
  );
};
