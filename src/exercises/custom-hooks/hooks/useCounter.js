import { useState } from "react";

/*
  EJEMPLO DE CUSTOM HOOK · useCounter

  Un custom hook es una FUNCIÓN normal de JavaScript que:
    1. Empieza por "use" (useCounter, useToggle, useFetch...).
    2. Usa otros hooks dentro (useState, useEffect...).
    3. Devuelve lo que el componente necesite (valores y funciones).

  Sirve para SACAR lógica de un componente y poder reutilizarla.

  Uso:
    const { count, increment, decrement, reset } = useCounter(10);
*/
export const useCounter = (initialValue = 0, step = 1) => {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount((prev) => prev + step);
  const decrement = () => setCount((prev) => prev - step);
  const reset = () => setCount(initialValue);

  return { count, increment, decrement, reset };
};
