import styles from "../Exercises.module.css";
import { CustomHookExample } from "./CustomHookExample";
import { Exercise1UseToggle } from "./Exercise1UseToggle";

/*
  INTRODUCCIÓN A LOS CUSTOM HOOKS

  Cuando varios componentes (o varias partes de uno) repiten la misma lógica con
  useState / useEffect, la sacamos a una función propia: un CUSTOM HOOK.

  Reglas:
  - El nombre empieza por "use" → así React (y el linter) saben que es un hook.
  - Solo se llama en el nivel superior de un componente o de otro hook
    (nunca dentro de un if, un bucle o un onClick).
  - Cada componente que lo usa tiene SU PROPIO estado: se comparte la lógica, no los datos.

  Antes:
    const [open, setOpen] = useState(false)

    Después:

   const [open, toggleOpen] = useToggle()
    const toggle = () => setOpen(p => !p)
*/

const CustomHooksIntro = () => {
  return (
    <section className={styles.card}>
      <h2 className={styles.cardTitle}>
        Introducción · ¿Qué es un custom hook?
      </h2>
      <ul className={styles.list}>
        <li>
          Una función que empieza por <code>use</code> y usa otros hooks dentro.
        </li>
        <li>
          Sirve para sacar lógica repetida de los componentes y reutilizarla.
        </li>
        <li>Se comparte la lógica, no el estado: cada uso tiene el suyo.</li>
        <li>
          Solo se llama arriba del componente, nunca dentro de <code>if</code>,
          bucles o eventos.
        </li>
      </ul>
    </section>
  );
};

export const CustomHooksExercises = () => {
  return (
    <main className={styles.page}>
      <h1 className={styles.pageTitle}>Custom hooks</h1>
      <CustomHooksIntro />
      <CustomHookExample />
      <Exercise1UseToggle />
    </main>
  );
};
