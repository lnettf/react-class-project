import { Link, NavLink, Outlet } from "react-router";
import styles from "./Exercises.module.css";
import { SECTIONS } from "./sections";

const navClass = ({ isActive }) => (isActive ? styles.active : styles.navLink);

// Menú común a todas las páginas de /ejercicios. Cada sección se pinta en el <Outlet />.
export const ExercisesLayout = () => {
  return (
    <>
      <header className={styles.topBar}>
        <Link className={styles.navLink} to="/">
          ← Tienda
        </Link>
        <nav className={styles.nav}>
          <NavLink to="/ejercicios" end className={navClass}>
            Todos
          </NavLink>
          {SECTIONS.map((section) => (
            <NavLink key={section.to} to={`/ejercicios/${section.to}`} className={navClass}>
              {section.label}
            </NavLink>
          ))}
        </nav>
      </header>
      <Outlet />
    </>
  );
};
