import styles from "../Exercises.module.css";
import { useCounter } from "./hooks/useCounter";

/*
  EJEMPLO (ya resuelto) — Usar un custom hook

  Abre ./hooks/useCounter.js: es solo un useState con tres funciones.
  Aquí lo usamos DOS veces. Fíjate en que:
  - Cada llamada a useCounter() tiene SU PROPIO estado: sumar en uno no cambia el otro.
    Un custom hook comparte la LÓGICA, no el estado.
  - El componente queda limpio: no sabe cómo se suma, solo llama a increment().
  - Con parámetros lo reutilizamos con otra configuración (empezar en 10, de 5 en 5).
*/

const Counter = ({ title, initialValue, step }) => {
  const { count, increment, decrement, reset } = useCounter(initialValue, step);

  return (
    <div>
      <h3>{title}</h3>
      <p className={styles.bigNumber}>{count}</p>
      <div className={styles.row}>
        <button className={styles.button} onClick={decrement}>
          − {step}
        </button>
        <button className={styles.button} onClick={increment}>
          + {step}
        </button>
        <button className={styles.buttonSecondary} onClick={reset}>
          Reiniciar
        </button>
      </div>
    </div>
  );
};

export const CustomHookExample = () => {
  return (
    <section className={styles.card}>
      <h2 className={styles.cardTitle}>Ejemplo · useCounter</h2>
      <Counter title="Contador normal" initialValue={0} step={1} />
      <Counter title="Empieza en 10, de 5 en 5" initialValue={10} step={5} />
    </section>
  );
};
