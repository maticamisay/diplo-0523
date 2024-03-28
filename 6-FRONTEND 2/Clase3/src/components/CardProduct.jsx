import React from "react";
import Card from "./Card";
import styles from "./CardProduct.module.css";

const CardProduct = ({ title, children }) => {
  return (
    <Card color={"#F7ECE1"} borderColor={"#725AC1"}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.description}>{children}</p>
      <button className={styles.btn}>Comprar</button>
    </Card>
  );
};

export default CardProduct;
