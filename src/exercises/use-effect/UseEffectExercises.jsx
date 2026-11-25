import styles from "../Exercises.module.css";
import { UseEffectIntro } from "./UseEffectIntro";
import { Exercise1TabTitle } from "./Exercise1TabTitle";
import { Exercise2Stopwatch } from "./Exercise2Stopwatch";
import { Exercise3Users } from "./Exercise3Users";
import { Exercise4ProductSearch } from "./Exercise4ProductSearch";
import { Link } from "react-router";

export const UseEffectExercises = () => {
  return (
    <main className={styles.page}>
      <h1 className={styles.pageTitle}>Ejercicios de useEffect</h1>
      <nav className={styles.nav}>
        <Link className={styles.navLink} to="/">
          → Ir a la tienda
        </Link>
        <Link className={styles.navLink} to="/router">
          Ejercicios de React Router
        </Link>
        <Link className={styles.navLink} to="/ejercicios/formularios">
          Ejercicios de formularios
        </Link>
      </nav>
      <UseEffectIntro />
      <Exercise1TabTitle />
      <Exercise2Stopwatch />
      <Exercise3Users />
      <Exercise4ProductSearch />
    </main>
  );
};
