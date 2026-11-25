import { Link } from "react-router";
import styles from "./Exercises.module.css";
import { SECTIONS } from "./sections";

// Portada de /ejercicios: una tarjeta por sección
export const ExercisesHome = () => {
  return (
    <main className={styles.page}>
      <div>
        <h1 className={styles.pageTitle}>Ejercicios</h1>
        <p>
          Cada ejercicio tiene el enunciado y las pistas en el comentario de arriba del fichero.
          Busca los <code>TODO</code>.
        </p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {SECTIONS.map((section, index) => (
          <Link key={section.to} to={section.to} className={styles.sectionCard}>
            <strong>
              {index + 1}. {section.label}
            </strong>
            <p>{section.description}</p>
          </Link>
        ))}
      </div>
    </main>
  );
};
