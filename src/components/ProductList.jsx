/*
<ProductList
  products={
  [{
    name: "Camiseta"
    id: 1
    },
    {
      name: "zapatos"
      id: 2
    }
  ]}
/>

*/

import { Fragment } from "react";
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
