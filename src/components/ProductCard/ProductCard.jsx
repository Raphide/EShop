import React, { useEffect, useState } from "react";
import styles from "./ProductCard.module.scss";
import { Link } from "react-router-dom";
import { setFavorite } from "../../services/eshop-service";

const ProductCard = ({ product }) => {
  const [isFavorite, setIsFavorite] = useState(product.favorited);

  const handleClick = () => {
    setIsFavorite(!isFavorite);
  };

  useEffect(() => {
    setFavorite(product.id, isFavorite);
    console.log(isFavorite);
  }, [isFavorite]);
  

  const classes = `${styles.fave} ${
    product.favorited ? styles.fave_true : styles.fave_false
  }`;

  return (
    <div>
      <section className={styles.imgOverlay}>
        <img className={styles.prodImg} src={product.imgLink} />
        <div className={classes} onClick={handleClick}></div>
      </section>
      <h1>{product.name}</h1>
      <h3>{product.flavour}</h3>
      <Link to={product.id}>See more</Link>
    </div>
  );
};

export default ProductCard;
