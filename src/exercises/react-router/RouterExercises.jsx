import { Link, NavLink, Route, Routes } from "react-router";
import styles from "../Exercises.module.css";
import { Exercise1Routes } from "./Exercise1Routes";
import { Exercise2UserDetail } from "./Exercise2UserDetail";
import { Exercise3SearchParams } from "./Exercise3SearchParams";

/*
  INTRODUCCIÓN A REACT ROUTER

  ¿Qué es?
  - Permite tener varias "páginas" en una SPA: cambia lo que se pinta según la URL
    SIN recargar la página (no se pierde el estado, no se vuelve a descargar nada).

  Instalación:  npm install react-router

  Las piezas básicas:
    <BrowserRouter>            → envuelve la app (lo tenemos en main.jsx)
    <Routes> + <Route>         → "si la URL es X, pinta el componente Y"
    <Link to="/ruta">          → un <a> que NO recarga la página
    <NavLink to="/ruta">       → como Link, pero sabe si está activo (para el menú)
    useParams()                → lee partes variables de la URL: /users/:userId
    useNavigate()              → navegar desde código: navigate("/"), navigate(-1)
    useSearchParams()          → lee/escribe el query string: ?q=texto

  ❌ Error típico: usar <a href="/ruta">. Funciona, pero recarga toda la página
     y se pierde el estado. Pruébalo con el contador de abajo.
*/

const navClass = ({ isActive }) => (isActive ? styles.active : styles.navLink);

const RouterIntro = () => {
  return (
    <section className={styles.card}>
      <h2 className={styles.cardTitle}>Introducción · ¿Cómo funciona React Router?</h2>
      <p>
        Fíjate en la URL del navegador al pulsar el menú de arriba: cambia, pero la página no se
        recarga.
      </p>
      <p>
        Compara: <Link to="/">volver con Link</Link> vs <a href="/">volver con &lt;a href&gt;</a>{" "}
        (mira la pestaña Network: el segundo vuelve a descargarlo todo).
      </p>
      <ul className={styles.list}>
        <li>
          <code>&lt;Route path="/users/:userId" element=&#123;&lt;User /&gt;&#125; /&gt;</code>
        </li>
        <li>
          <code>&lt;Route path="*" /&gt;</code>: cualquier otra URL (página 404)
        </li>
        <li>
          <code>&lt;Route index /&gt;</code>: la ruta "por defecto" del padre
        </li>
      </ul>
    </section>
  );
};

export const RouterExercises = () => {
  return (
    <main className={styles.page}>
      <div>
        <h1 className={styles.pageTitle}>Ejercicios de React Router</h1>
        <nav className={styles.nav}>
          <Link className={styles.navLink} to="/">
            → Ir a la tienda
          </Link>
          <Link className={styles.navLink} to="/ejercicios/use-effect">
            ← Ejercicios de useEffect
          </Link>
          {/* `end`: solo está activo si la URL es exactamente /router */}
          <NavLink to="/router" end className={navClass}>
            Intro
          </NavLink>
          <NavLink to="/router/1" className={navClass}>
            Ejercicio 1
          </NavLink>
          <NavLink to="/router/2" className={navClass}>
            Ejercicio 2
          </NavLink>
          <NavLink to="/router/3" className={navClass}>
            Ejercicio 3
          </NavLink>
        </nav>
      </div>

      {/* Rutas "hijas" de /router/* → los path son relativos a /router */}
      <Routes>
        <Route index element={<RouterIntro />} />
        <Route path="1/*" element={<Exercise1Routes />} />
        <Route path="2/*" element={<Exercise2UserDetail />} />
        <Route path="3" element={<Exercise3SearchParams />} />
      </Routes>
    </main>
  );
};
