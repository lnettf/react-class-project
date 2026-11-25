import { useState } from "react";
import styles from "../Exercises.module.css";

/*
  EJERCICIO 2 — Un solo handleChange para todo el formulario ([name]: value)

  En el ejercicio 1 escribiste un handler por campo, y los tres eran CASI iguales:
      setForm({ ...form, name: e.target.value })
      setForm({ ...form, email: e.target.value })
      ...
  Lo único que cambia es la clave. Aquí solo puede haber UN handleChange.

  ¿De dónde sacamos la clave? Del propio input que ha cambiado: e.target.name
      <input name="email" ... />   →   e.target.name === "email"

  Y para usar una variable como clave de un objeto → "propiedad computada":
      const key = "email";
      const obj = { [key]: "hola@tienda.com" };   // { email: "hola@tienda.com" }
      const obj2 = { key: "hola@tienda.com" };    // { key: "hola@tienda.com" }  ❌

  Enunciado:
  1. Pon el atributo `name` a cada campo. Tiene que ser EXACTAMENTE la clave del estado.
  2. Escribe UN solo handleChange(e) que:
       - lea name y value de e.target
       - actualice solo ese campo: setForm(prev => ({ ...prev, [name]: value }))
     y úsalo en el onChange de TODOS los campos (también en el <select>).
  3. El checkbox es especial: no tiene `value`, tiene `checked` (true/false).
     Haz que handleChange también funcione con él.
     → En el input del checkbox se usa checked={form.newsletter}, no value.
  4. Al enviar: e.preventDefault() y muestra "Cuenta creada para <username>"
     (no muestres la contraseña 😉).

  Pistas:
  - const { name, value, type, checked } = e.target;
  - Fíjate en el preview de abajo. Escribe name="emial" (mal) en un input.
    ¿Qué aparece en el objeto?
  - ¿Por qué aquí usamos setForm(prev => ...) en vez de setForm({ ...form, ... })?
    (Las dos funcionan aquí, pero la de `prev` siempre usa el estado más reciente.)

  Reto extra:
  - Valida al enviar y guarda los errores en un objeto `errors`:
      { username: "Obligatorio", password: "Mínimo 6 caracteres" }
    Muestra cada error debajo de su campo con className={styles.error}.
  - Botón "Limpiar" usando una constante INITIAL_FORM.
*/

export const Exercise2DynamicForm = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    country: "",
    newsletter: false,
  });
  const [createdUser, setCreatedUser] = useState(null);

  // TODO 2 y 3: un solo handleChange

  // TODO 4: handleSubmit

  return (
    <section className={styles.card}>
      <h2 className={styles.cardTitle}>Ejercicio 2 · Registro con un solo handleChange</h2>

      {/* TODO 4: onSubmit */}
      <form>
        {/* TODO 1 y 2: name + value + onChange en todos los campos */}
        <label>
          Usuario
          <input className={styles.input} placeholder="usuario123" />
        </label>

        <label>
          Email
          <input className={styles.input} type="email" placeholder="tu@email.com" />
        </label>

        <label>
          Contraseña
          <input className={styles.input} type="password" />
        </label>

        <label>
          País
          <select className={styles.input}>
            <option value="">-- Elige un país --</option>
            <option value="es">España</option>
            <option value="mx">México</option>
            <option value="ar">Argentina</option>
            <option value="co">Colombia</option>
          </select>
        </label>

        <label>
          {/* TODO 3: checked en vez de value */}
          <input type="checkbox" /> Quiero recibir la newsletter
        </label>

        <div className={styles.row}>
          <button className={styles.button} type="submit">
            Crear cuenta
          </button>
        </div>
      </form>

      {createdUser && <p>TODO: "Cuenta creada para ..."</p>}

      {/* Preview en vivo del estado: aquí verás si los `name` coinciden con las claves */}
      <pre>{JSON.stringify(form, null, 2)}</pre>
    </section>
  );
};
