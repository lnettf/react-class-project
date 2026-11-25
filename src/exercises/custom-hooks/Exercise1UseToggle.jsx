import { useState } from "react";
import styles from "../Exercises.module.css";

/*
  EJERCICIO 1 — Crea tu primer custom hook: useToggle

  Este componente ya FUNCIONA, pero tiene la misma lógica repetida tres veces:
  un booleano que se enciende y se apaga (contraseña, detalles, modo oscuro).

  Enunciado:
  1. Crea el fichero ./hooks/useToggle.js con un custom hook que:
       - reciba el valor inicial (por defecto false)
       - devuelva un array [value, toggle]
       - toggle() cambia el valor de true a false y al revés
  2. Sustituye los tres useState + funciones de abajo por useToggle.
     Al terminar, este componente NO debería importar useState.
  3. Comprueba que los tres siguen siendo independientes.

  Pistas:
  - Mira ./hooks/useCounter.js: es casi igual, pero más pequeño.
  - setValue(prev => !prev)
  - ¿Por qué devolver un array y no un objeto? Igual que useState: así cada uno
    lo renombra como quiere → const [isOpen, toggleOpen] = useToggle();

  Reto extra:
  - Añade a lo que devuelve dos funciones más: setTrue y setFalse.
    Úsalas en un botón "Mostrar todo" y otro "Ocultar todo".
*/

export const Exercise1UseToggle = () => {
  // TODO 2: sustituye todo esto por useToggle
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => setShowPassword((prev) => !prev);

  const [showDetails, setShowDetails] = useState(false);
  const toggleDetails = () => setShowDetails((prev) => !prev);

  const [isDark, setIsDark] = useState(false);
  const toggleDark = () => setIsDark((prev) => !prev);

  return (
    <section
      className={styles.card}
      style={isDark ? { background: "#1f2937", color: "white" } : undefined}
    >
      <h2 className={styles.cardTitle}>Ejercicio 1 · useToggle</h2>

      <div className={styles.row}>
        <input
          className={styles.input}
          type={showPassword ? "text" : "password"}
          defaultValue="secreto123"
        />
        <button className={styles.buttonSecondary} onClick={togglePassword}>
          {showPassword ? "Ocultar" : "Mostrar"} contraseña
        </button>
      </div>

      <div className={styles.row}>
        <button className={styles.button} onClick={toggleDetails}>
          {showDetails ? "▲ Ocultar detalles" : "▼ Ver detalles"}
        </button>
      </div>
      {showDetails && <p>Un custom hook comparte la lógica, no el estado.</p>}

      <div className={styles.row}>
        <button className={styles.buttonSecondary} onClick={toggleDark}>
          {isDark ? "☀️ Modo claro" : "🌙 Modo oscuro"}
        </button>
      </div>
    </section>
  );
};
