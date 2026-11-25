import { useState } from "react";
import styles from "../Exercises.module.css";

/*
  EJERCICIO 1 — Formulario "normal": un objeto en el estado y un handler por campo

  Hasta ahora cada input tenía su propio useState. En un formulario con muchos campos
  es más cómodo guardarlo TODO en un solo objeto:
      const [form, setForm] = useState({ name: "", email: "", message: "" });

  Enunciado:
  1. Haz que cada input sea CONTROLADO: value={form.name}, value={form.email}...
     (fíjate: si pones value sin onChange, React te avisa en la consola y no puedes escribir).
  2. Escribe UN handler por campo: handleNameChange, handleEmailChange, handleMessageChange.
     Cada uno actualiza SOLO su campo del objeto.
  3. Al pulsar "Enviar":
     - Que la página NO se recargue.
     - Guarda una copia del formulario en `sent` y muestra debajo:
         "¡Gracias, <nombre>! Te escribiremos a <email>."
     - Y el objeto completo con <pre>{JSON.stringify(sent, null, 2)}</pre>
  4. El botón "Limpiar" vacía todos los campos.

  Pistas:
  - El estado es un objeto: NO lo modifiques (form.name = "x" ❌). Crea uno nuevo
    copiando el anterior con el spread y cambiando solo un campo:
        setForm({ ...form, name: e.target.value })
  - Prueba a quitar el `...form`. Escribe en "Nombre" y luego en "Email". ¿Qué ha pasado
    con el nombre? (Pon un console.log(form) para verlo.)
  - El submit se escucha en el <form> (onSubmit), no en el botón.
    e.preventDefault() evita que el navegador recargue la página.
  - ¿Por qué el botón "Limpiar" lleva type="button"? Quítaselo y pruébalo.

  Reto extra:
  - Desactiva "Enviar" (disabled) mientras algún campo esté vacío.
  - Muestra cuántos caracteres llevas en el mensaje: "23 / 200".
*/

export const Exercise1BasicForm = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(null);

  // TODO 2: handleNameChange, handleEmailChange, handleMessageChange

  // TODO 3: handleSubmit

  // TODO 4: handleReset

  return (
    <section className={styles.card}>
      <h2 className={styles.cardTitle}>Ejercicio 1 · Formulario de contacto</h2>

      {/* TODO 3: onSubmit */}
      <form>
        <label>
          Nombre
          {/* TODO 1 y 2: value + onChange */}
          <input className={styles.input} placeholder="Tu nombre" />
        </label>

        <label>
          Email
          <input className={styles.input} type="email" placeholder="tu@email.com" />
        </label>

        <label>
          Mensaje
          <textarea className={styles.input} rows={4} placeholder="Escribe tu mensaje" />
        </label>

        <div className={styles.row}>
          <button className={styles.button} type="submit">
            Enviar
          </button>
          {/* TODO 4: onClick */}
          <button className={styles.buttonSecondary} type="button">
            Limpiar
          </button>
        </div>
      </form>

      {/* TODO 3: si hay `sent`, muestra el mensaje de gracias y el JSON */}
      {sent && <p>TODO: mensaje de gracias</p>}

      {/* Para ver el estado en vivo mientras haces el ejercicio */}
      <pre>{JSON.stringify(form, null, 2)}</pre>
    </section>
  );
};
