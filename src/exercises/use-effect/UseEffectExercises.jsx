import styles from "../Exercises.module.css";
import { UseEffectIntro } from "./UseEffectIntro";
import { Exercise1TabTitle } from "./Exercise1TabTitle";
import { Exercise2Stopwatch } from "./Exercise2Stopwatch";
import { Exercise3Users } from "./Exercise3Users";
import { Exercise4ProductSearch } from "./Exercise4ProductSearch";

export const UseEffectExercises = () => {
  return (
    <main className={styles.page}>
      <h1 className={styles.pageTitle}>Ejercicios de useEffect</h1>
      <UseEffectIntro />
      <Exercise1TabTitle />
      <Exercise2Stopwatch />
      <Exercise3Users />
      <Exercise4ProductSearch />
    </main>
  );
};
