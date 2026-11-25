/*
  PROYECTO · Nuevo usuario — FORMULARIO (fase 4)

  ⚠️ Antes haz los ejercicios de /ejercicios/formularios. Aquí se aplica
  directamente el patrón del ejercicio 2 (un solo handleChange con [name]: value).

  Enunciado:
  1. Un formulario con: nombre, email, teléfono, ciudad (<select>) y
     "Acepto las condiciones" (checkbox).
  2. TODO el formulario se guarda en UN solo estado:
       const [form, setForm] = useState(INITIAL_FORM);
  3. UN solo handleChange para todos los campos (también el checkbox y el select).
  4. Al enviar (onSubmit):
     a. Que la página NO se recargue.
     b. Valida y guarda los errores en un objeto `errors` por campo:
        - nombre obligatorio
        - email con "@"
        - hay que aceptar las condiciones
        Pinta cada error debajo de su campo. Si hay errores, no se envía.
     c. Haz un POST a https://jsonplaceholder.typicode.com/users
        con el formulario en el body (JSON) y la cabecera Content-Type.
     d. Mientras se envía: botón desactivado y con el texto "Enviando...".
     e. Si va bien, muestra "Usuario creado con id X" (el id lo devuelve la API)
        y vacía el formulario.
  5. Botón "Limpiar" que vuelve a INITIAL_FORM.

  Pistas:
  - fetch(url, { method: "POST", headers: {...}, body: JSON.stringify(form) })
  - jsonplaceholder no guarda nada de verdad: siempre devuelve id 11.
  - Provoca el error a propósito: setForm({ [name]: value }) sin el spread.
    ¿Qué les pasa a los demás campos?

  Retos extra:
  - Después de crear, navega a /usuarios con useNavigate.
  - Desactiva "Enviar" mientras el formulario no sea válido.
  - Valida también mientras se escribe (solo los campos que ya se han tocado).
*/

// eslint-disable-next-line no-unused-vars
const INITIAL_FORM = {
  name: "",
  email: "",
  phone: "",
  city: "",
  acceptTerms: false,
};

export const NewUserPage = () => {
  return <p>TODO: formulario de nuevo usuario</p>;
};
