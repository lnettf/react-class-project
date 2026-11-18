import { useEffect, useState } from "react";
import styles from "../Exercises.module.css";

/*
  INTRODUCCIÓN A useEffect

  ¿Qué es?
  - useEffect sirve para ejecutar "efectos secundarios": código que no es pintar la UI.
    Ejemplos: llamar a una API, cambiar document.title, crear un setInterval,
    escuchar eventos de window, guardar en localStorage...

  ¿Cuándo se ejecuta?
  - SIEMPRE después de que React pinta el componente en pantalla (después del render).

  Sintaxis:
    useEffect(() => {
      // 1. código del efecto
      return () => {
        // 2. limpieza (opcional): se ejecuta antes del siguiente efecto y al desmontar
      };
    }, [dependencias]); // 3. cuándo se vuelve a ejecutar

  Las 3 formas del array de dependencias:
    useEffect(fn)          → después de CADA render
    useEffect(fn, [])      → solo UNA vez, al montar el componente
    useEffect(fn, [count]) → al montar y cada vez que cambie `count`

  👉 Abre la consola del navegador y pulsa los botones / escribe en el input
     para ver qué efecto se ejecuta en cada momento.

  Nota: con <StrictMode> en desarrollo React monta, limpia y vuelve a montar
  el componente, por eso al cargar verás los logs duplicados. Es normal.
*/

export const UseEffectIntro = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // 1️⃣ SIN array de dependencias → se ejecuta después de CADA render
  //    (al cambiar count, al escribir en el input... cualquier cambio de estado)
  useEffect(() => {
    console.log("1️⃣ [sin dependencias] Render terminado");
  });

  // 2️⃣ Array VACÍO → se ejecuta solo una vez, cuando el componente aparece (se monta)
  //    Es el sitio típico para hacer un fetch inicial
  useEffect(() => {
    console.log("2️⃣ [ ] Componente montado");

    // La limpieza de un efecto con [] se ejecuta cuando el componente desaparece
    return () => {
      console.log("2️⃣ [ ] Componente desmontado");
    };
  }, []);

  // 3️⃣ Con dependencias → se ejecuta al montar y cada vez que cambia `count`
  //    Escribir en el input NO lo dispara, porque `text` no está en el array
  useEffect(() => {
    console.log(`3️⃣ [count] count ha cambiado a ${count}`);

    // La limpieza se ejecuta ANTES de volver a lanzar el efecto,
    // y todavía "ve" el valor antiguo de count
    return () => {
      console.log(`🧹 [count] limpiando el efecto de count = ${count}`);
    };
  }, [count]);

  // ❌ Error típico: actualizar en el efecto un estado que está en sus dependencias
  //    → bucle infinito (render → efecto → setCount → render → efecto...)
  // useEffect(() => {
  //   setCount(count + 1);
  // }, [count]);

  return (
    <section className={styles.card}>
      <h2 className={styles.cardTitle}>Introducción · ¿Cómo funciona useEffect?</h2>

      <p className={styles.bigNumber}>{count}</p>

      <div className={styles.row}>
        <button className={styles.button} onClick={() => setCount(count + 1)}>
          Sumar (dispara 1️⃣ y 3️⃣)
        </button>
      </div>

      <input
        className={styles.input}
        placeholder="Escribe algo (solo dispara 1️⃣)"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <ul className={styles.list}>
        <li>
          <code>useEffect(fn)</code>: después de cada render
        </li>
        <li>
          <code>useEffect(fn, [])</code>: solo al montar
        </li>
        <li>
          <code>useEffect(fn, [count])</code>: al montar y cuando cambia <code>count</code>
        </li>
        <li>
          <code>return () =&gt; {"{...}"}</code>: limpieza antes del siguiente efecto y al desmontar
        </li>
      </ul>
    </section>
  );
};
