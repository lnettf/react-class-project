import { useEffect, useState } from "react";
import styles from "../Exercises.module.css";

/*
  EJERCICIO 1 — Título de la pestaña (useEffect con dependencias)

  Enunciado:
  - Crea un contador de "mensajes sin leer" con dos botones: "Nuevo mensaje" (+1) y "Marcar como leídos" (vuelve a 0).
  - Cada vez que cambie el número, el título de la pestaña del navegador debe mostrar:
      "(3) Mensajes nuevos"   si hay mensajes
      "Sin mensajes"          si es 0
  - Añade además un input de texto para el nombre del usuario.
    Escribir en el input NO debe volver a ejecutar el efecto del título.

  Pistas:
  - El título de la pestaña se cambia con document.title = "...".
  - Pon un console.log dentro del efecto para ver cuándo se ejecuta.
  - ¿Qué va dentro del array de dependencias para que NO se ejecute al escribir el nombre?
*/

export const Exercise1TabTitle = () => {
  const [messages, setMessages] = useState(0);
  const [name, setName] = useState("");

  // TODO 1: escribe aquí el useEffect que actualiza document.title según `messages`

  return (
    <section className={styles.card}>
      <h2 className={styles.cardTitle}>Ejercicio 1 · Título de la pestaña</h2>

      <input
        className={styles.input}
        placeholder="Tu nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <p>
        Hola {name || "usuario"}, tienes <strong>{messages}</strong> mensajes sin leer.
      </p>

      <div className={styles.row}>
        {/* TODO 2: haz que este botón sume 1 a `messages` */}
        <button className={styles.button}>Nuevo mensaje</button>
        {/* TODO 3: haz que este botón ponga `messages` a 0 */}
        <button className={styles.buttonSecondary}>Marcar como leídos</button>
      </div>
    </section>
  );
};
