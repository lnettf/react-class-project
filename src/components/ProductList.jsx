import { Product } from "./Product/Product";

export const ProductList = ({ products }) => {
  return (
    <>
      <h1>Lista de productos</h1>
      {products.map((product) => {
        return (
          <Product
            name={product.title}
            key={product.id}
            price={product.price}
            thumbnail={product.thumbnail}
          />
        );
      })}
    </>
  );
};
