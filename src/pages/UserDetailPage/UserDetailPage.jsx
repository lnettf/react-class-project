/*
  PROYECTO · Detalle de usuario (fase 3)

  Ruta: /usuarios/:userId

  Enunciado:
  1. Lee el id con useParams() y pide https://jsonplaceholder.typicode.com/users/<id>
  2. Muestra nombre, email, teléfono, web, ciudad (address.city) y empresa (company.name).
  3. "Cargando...", error, y "Usuario no encontrado" si devuelve 404 (prueba /usuarios/999).
  4. Botón "← Atrás" con useNavigate().
  5. Botones "← Anterior" / "Siguiente →" que vayan al id - 1 / id + 1.

  Pistas:
  - Es el ejercicio 2 de router: src/exercises/react-router/Exercise2UserDetail.jsx
  - useParams devuelve STRINGS → Number(userId) + 1
  - Al pasar de /usuarios/1 a /usuarios/2 el componente NO se vuelve a montar:
    ¿qué tiene que ir en las dependencias del efecto?
*/

export const UserDetailPage = () => {
  return <p>TODO: detalle de usuario</p>;
};
