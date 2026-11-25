import { Link, NavLink, Route, Routes } from "react-router";
import styles from "../Exercises.module.css";

/*
  EJERCICIO 1 — Rutas básicas, menú con NavLink y página 404

  Enunciado:
  Este ejercicio vive en /ejercicios/router/1. Haz que funcionen estas rutas:
    /ejercicios/router/1                 → <Home />
    /ejercicios/router/1/sobre-nosotros  → <About />
    /ejercicios/router/1/contacto        → <Contact />
    /ejercicios/router/1/<lo-que-sea>    → <NotFound />

  1. Crea las rutas con <Routes> y <Route>. Los componentes ya están hechos.
  2. Crea un menú con NavLink a Inicio, Sobre nosotros y Contacto.
     El enlace activo debe verse distinto (usa styles.active / styles.navLink).
  3. Añade un <Link> a una ruta que no existe para probar la página 404.
  4. En <NotFound /> añade un enlace para volver al inicio.

  Pistas:
  - Dentro de este componente los path van SIN barra delante: "contacto".
  - Para /ejercicios/router/1 a secas usa <Route index ... />.
  - Para "cualquier otra cosa" usa path="*".
  - className de NavLink puede ser una función: ({ isActive }) => ...
  - ¿Por qué "Inicio" sale activo en todas las páginas? Busca la prop `end`.

  Reto extra:
  - Cambia un NavLink por <a href="...">. ¿Qué pasa con la página?
*/

const BASE = "/ejercicios/router/1";

const Home = () => <p>🏠 Bienvenido a la tienda.</p>;
const About = () => <p>👋 Somos una tienda de ejemplo del curso de React.</p>;
const Contact = () => <p>📧 Escríbenos a hola@tienda.com</p>;

const NotFound = () => (
  <p className={styles.error}>
    404 · Esta página no existe.
    {/* TODO 4: enlace para volver a BASE */}
  </p>
);

export const Exercise1Routes = () => {
  return (
    <section className={styles.card}>
      <h2 className={styles.cardTitle}>Ejercicio 1 · Rutas básicas</h2>

      <nav className={styles.nav}>
        {/* TODO 2: NavLink a Inicio, Sobre nosotros y Contacto */}
        {/* TODO 3: Link a `${BASE}/no-existe` */}
      </nav>

      {/* TODO 1: <Routes> con las 4 rutas */}
    </section>
  );
};
