import styles from "../Exercises.module.css";
import { Exercise1BasicForm } from "./Exercise1BasicForm";
import { Exercise2DynamicForm } from "./Exercise2DynamicForm";

/*
  INTRODUCCIÓN A LOS FORMULARIOS EN REACT

  Input CONTROLADO: el valor lo guarda React en el estado, no el navegador.
      <input value={form.name} onChange={handleChange} />
    - value    → lo que se ve sale del estado
    - onChange → cada tecla actualiza el estado → React vuelve a pintar el input

  Un formulario = un objeto en el estado:
      const [form, setForm] = useState({ name: "", email: "" });
      setForm({ ...form, email: "nuevo@email.com" });   // copia + cambia un campo

  Enviar:
      <form onSubmit={handleSubmit}>   ← el evento está en el <form>, no en el botón
      e.preventDefault()               ← si no, el navegador recarga la página
*/

const FormsIntro = () => {
  return (
    <section className={styles.card}>
      <h2 className={styles.cardTitle}>Introducción · Formularios controlados</h2>
      <ul className={styles.list}>
        <li>
          <code>value</code> + <code>onChange</code>: el estado de React es quien manda.
        </li>
        <li>
          Un solo <code>useState</code> con un objeto para todo el formulario.
        </li>
        <li>
          Nunca modifiques el objeto: crea uno nuevo con <code>{"{ ...form, campo: valor }"}</code>.
        </li>
        <li>
          <code>onSubmit</code> en el <code>&lt;form&gt;</code> y <code>e.preventDefault()</code>.
        </li>
      </ul>
    </section>
  );
};

export const FormsExercises = () => {
  return (
    <main className={styles.page}>
      <h1 className={styles.pageTitle}>Ejercicios de formularios</h1>
      <FormsIntro />
      <Exercise1BasicForm />
      <Exercise2DynamicForm />
    </main>
  );
};
