import { useEffect, useState } from "react";
import styles from "../Exercises.module.css";

/*
  EJERCICIO 2 — Cronómetro (useEffect con limpieza / cleanup)

  Enunciado:
  - Crea un cronómetro que muestre los segundos transcurridos.
  - Botones: "Iniciar / Pausar" y "Reiniciar".
  - Mientras está activo, debe sumar 1 cada segundo con setInterval.
  - Al pausar (o al desmontar el componente) el intervalo debe limpiarse con clearInterval.
  - Comprueba en la consola que al pausar el intervalo se limpia y no sigue contando.

  Pistas:
  - Si el cronómetro no está activo, el efecto no tiene que hacer nada (return temprano).
  - La función que devuelve useEffect es la "limpieza": ahí va el clearInterval.
  - Usa la forma funcional setSeconds(s => s + 1). ¿Qué pasa si usas setSeconds(seconds + 1)?
  - Con <StrictMode> en desarrollo verás montar → limpiar → montar: es normal.
*/

export const Exercise2Stopwatch = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  // TODO 1: escribe aquí el useEffect que crea el intervalo cuando `isRunning` es true
  //         y lo limpia en la función de limpieza

  // TODO 2: completa la función para parar el cronómetro y volver a 0
  const reset = () => {};

  return (
    <section className={styles.card}>
      <h2 className={styles.cardTitle}>Ejercicio 2 · Cronómetro</h2>

      <p className={styles.bigNumber}>{seconds}s</p>

      <div className={styles.row}>
        <button className={styles.button} onClick={() => setIsRunning(!isRunning)}>
          {isRunning ? "Pausar" : "Iniciar"}
        </button>
        <button className={styles.buttonSecondary} onClick={reset}>
          Reiniciar
        </button>
      </div>
    </section>
  );
};
