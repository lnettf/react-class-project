import styles from "./Product.module.css";

export const Product = ({ name, price, thumbnail }) => {
  return (
    <div>
      <p className={styles.title}>
        {name}-{price}€
      </p>
      <img src={thumbnail} alt="" />
    </div>
  );
};
