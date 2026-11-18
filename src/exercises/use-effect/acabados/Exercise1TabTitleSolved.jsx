import { useEffect, useState } from "react";
import styles from "../../Exercises.module.css";

/*
  EJERCICIO 1 — Título de la pestaña (useEffect con dependencias)   ✅ SOLUCIÓN

  Enunciado:
  - Crea un contador de "mensajes sin leer" con dos botones: "Nuevo mensaje" (+1) y "Marcar como leídos" (vuelve a 0).
  - Cada vez que cambie el número, el título de la pestaña del navegador debe mostrar:
      "(3) Mensajes nuevos"   si hay mensajes
      "Sin mensajes"          si es 0
  - Añade además un input de texto para el nombre del usuario.
    Escribir en el input NO debe volver a ejecutar el efecto del título.

  Qué se practica:
  - useEffect se ejecuta DESPUÉS del render.
  - El array de dependencias [messages] controla cuándo se vuelve a ejecutar.
  - Mira la consola: el log del efecto solo aparece cuando cambian los mensajes, no al escribir.
*/

export const Exercise1TabTitleSolved = () => {
  const [messages, setMessages] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("Efecto del título ejecutado. Mensajes:", messages);
    document.title = messages > 0 ? `(${messages}) Mensajes nuevos` : "Sin mensajes";
  }, [messages]);

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
        <button className={styles.button} onClick={() => setMessages(messages + 1)}>
          Nuevo mensaje
        </button>
        <button className={styles.buttonSecondary} onClick={() => setMessages(0)}>
          Marcar como leídos
        </button>
      </div>
    </section>
  );
};
