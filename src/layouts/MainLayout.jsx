import { Link, Outlet } from "react-router";

/*
  PROYECTO · Layout principal (fase 1)

  Es el "marco" de la tienda: cabecera con el menú arriba, la página actual debajo
  y un pie. Todas las páginas de la tienda se pintan dentro del <Outlet />.

  Enunciado:
  1. Crea un menú con NavLink a: Inicio (/), Productos (/productos),
     Usuarios (/usuarios) y Nuevo usuario (/usuarios/nuevo).
  2. El enlace activo tiene que verse distinto.
  3. Deja en el pie un enlace a los ejercicios (/ejercicios).

  Pistas:
  - Mira el menú de src/exercises/react-router/RouterExercises.jsx.
  - ¿Por qué "Inicio" sale activo en todas las páginas? → prop `end`.
  - Con Tailwind, className de NavLink también puede ser una función:
      className={({ isActive }) => (isActive ? "font-bold text-blue-600" : "text-gray-600")}
*/

export const MainLayout = () => {
  return (
    <>
      <header>
        <strong>🛒 Mi tienda</strong>
        {/* TODO 1 y 2: <nav> con los NavLink */}
      </header>

      <main>
        {/* Aquí se pinta la página hija de la ruta actual */}
        <Outlet />
      </main>

      <footer>
        <Link to="/ejercicios">Ir a los ejercicios</Link>
      </footer>
    </>
  );
};
