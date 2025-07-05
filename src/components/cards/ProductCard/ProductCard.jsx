import React from "react";
import classes from "./ProductCard.module.scss";

const ProductCard = ({ imgURL, imgAlt, price, desc, title }) => {
  return (
    <section className={classes.card}>
      <img src={imgURL} alt={imgAlt} />
      <section className={classes.cardContent}>
        <h1>{title}</h1>
        <p className={classes.desc}>{desc}</p>
        <p className={classes.price}>{price}</p>
      </section>
    </section>
  );
};

export default ProductCard;
