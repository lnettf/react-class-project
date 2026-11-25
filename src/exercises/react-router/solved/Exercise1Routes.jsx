import { Link, NavLink, Route, Routes } from "react-router";
import styles from "../../Exercises.module.css";

/*
  EJERCICIO 1 — Rutas básicas, menú con NavLink y página 404   ✅ SOLUCIÓN

  Este ejercicio vive en /router/1, así que sus rutas son:
    /router/1                 → <Home />
    /router/1/sobre-nosotros  → <About />
    /router/1/contacto        → <Contact />
    /router/1/<lo-que-sea>    → <NotFound />

  Qué se practica:
  - <Routes> elige UNA sola <Route>: la que mejor encaja con la URL.
  - `index` = la ruta del propio padre (/router/1).
  - path="*" atrapa todo lo que no encaja con ninguna otra → 404.
  - NavLink recibe { isActive } en className para marcar el enlace activo.
  - `end` en el enlace de Inicio: sin él, /router/1 estaría "activo" también
    en /router/1/contacto (porque la URL empieza igual).
*/

const BASE = "/router/1";

const navClass = ({ isActive }) => (isActive ? styles.active : styles.navLink);

const Home = () => <p>🏠 Bienvenido a la tienda.</p>;
const About = () => <p>👋 Somos una tienda de ejemplo del curso de React.</p>;
const Contact = () => <p>📧 Escríbenos a hola@tienda.com</p>;

const NotFound = () => (
  <p className={styles.error}>
    404 · Esta página no existe. <Link to={BASE}>Volver al inicio</Link>
  </p>
);

export const Exercise1Routes = () => {
  return (
    <section className={styles.card}>
      <h2 className={styles.cardTitle}>Ejercicio 1 · Rutas básicas</h2>

      <nav className={styles.nav}>
        <NavLink to={BASE} end className={navClass}>
          Inicio
        </NavLink>
        <NavLink to={`${BASE}/sobre-nosotros`} className={navClass}>
          Sobre nosotros
        </NavLink>
        <NavLink to={`${BASE}/contacto`} className={navClass}>
          Contacto
        </NavLink>
        <Link to={`${BASE}/no-existe`} className={styles.navLink}>
          Enlace roto
        </Link>
      </nav>

      {/* Los path de dentro son relativos a /router/1 (sin barra delante) */}
      <Routes>
        <Route index element={<Home />} />
        <Route path="sobre-nosotros" element={<About />} />
        <Route path="contacto" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </section>
  );
};
