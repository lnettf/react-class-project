// Secciones de ejercicios, en el orden del curso.
// Las usan el menú (ExercisesLayout) y la portada (ExercisesHome).
export const SECTIONS = [
  {
    to: "use-state",
    label: "useState",
    description: "El contador: estado, setState y la versión con función (prev => prev + 1).",
  },
  {
    to: "use-effect",
    label: "useEffect",
    description: "Título de la pestaña, cronómetro, fetch de usuarios y buscador con debounce.",
  },
  {
    to: "router",
    label: "React Router",
    description: "Rutas, NavLink, 404, rutas dinámicas con useParams y búsqueda en la URL.",
  },
  {
    to: "formularios",
    label: "Formularios",
    description: "Inputs controlados, un useState con objeto y un solo handleChange con [name]: value.",
  },
  {
    to: "custom-hooks",
    label: "Custom hooks",
    description: "Sacar lógica repetida a tus propios hooks: useCounter y useToggle.",
  },
];
