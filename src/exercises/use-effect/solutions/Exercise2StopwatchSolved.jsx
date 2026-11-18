import { useEffect, useState } from "react";
import styles from "../../Exercises.module.css";

/*
  EJERCICIO 2 — Cronómetro (useEffect con limpieza / cleanup)   ✅ SOLUCIÓN

  Enunciado:
  - Crea un cronómetro que muestre los segundos transcurridos.
  - Botones: "Iniciar / Pausar" y "Reiniciar".
  - Mientras está activo, debe sumar 1 cada segundo con setInterval.
  - Al pausar (o al desmontar el componente) el intervalo debe limpiarse con clearInterval.
  - Comprueba en la consola que al pausar el intervalo se limpia y no sigue contando.

  Qué se practica:
  - La función que devuelve useEffect es la "limpieza": se ejecuta antes del siguiente efecto
    y cuando el componente se desmonta.
  - Usar la forma funcional setSeconds(s => s + 1) para no depender del valor antiguo.
  - Con <StrictMode> en desarrollo verás montar → limpiar → montar: es normal.
*/

export const Exercise2StopwatchSolved = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) return;

    console.log("▶ Intervalo creado");
    const intervalId = setInterval(() => {
      setSeconds((s) => s + 1);
    }, 1000);

    return () => {
      console.log("■ Intervalo limpiado");
      clearInterval(intervalId);
    };
  }, [isRunning]);

  const reset = () => {
    setIsRunning(false);
    setSeconds(0);
  };

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
