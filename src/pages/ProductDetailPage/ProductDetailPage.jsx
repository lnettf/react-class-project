/*
  PROYECTO · Detalle de producto (fase 2)

  Ruta: /productos/:productId

  Enunciado:
  1. Lee el id de la URL y pide https://dummyjson.com/products/<id>
  2. Muestra título, imagen (thumbnail o images[0]), precio, descripción,
     categoría, valoración (rating) y stock.
  3. "Cargando...", error, y "Producto no encontrado" si la API devuelve 404
     (prueba /productos/99999).
  4. Botón "← Volver" que vuelva a la página anterior, CONSERVANDO la búsqueda.

  Pistas:
  - useParams / useNavigate → src/exercises/react-router/Exercise2UserDetail.jsx
  - ¿Por qué navigate(-1) conserva el ?q= y <Link to="/productos"> no?

  Reto extra:
  - Si el descuento (discountPercentage) es mayor que 10, muestra una etiqueta "Oferta".
*/

export const ProductDetailPage = () => {
  return <p>TODO: detalle de producto</p>;
};
