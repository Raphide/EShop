import React, { useEffect, useState } from "react";
import styles from "./ProductPage.module.scss";
import { setFavorite } from "../../services/eshop-service";

const ProductPage = ({ product }) => {
  const [isFavorite, setIsFavorite] = useState(product.favorited);

  const handleClick = () => {
    setIsFavorite(!isFavorite);
  };

  useEffect(() => {
    setFavorite(product.id, isFavorite);
    console.log(isFavorite);
  }, [isFavorite]);

  // const classes = `${styles.fave} ${
  //   product.favorited ? styles.fave_true : styles.fave_false
  // }`;
  // create graphic indicator for favorited

  return (
    <div>
      <img className={styles.img} src={product.imgLink} />
      <h1>{product.name}</h1>
      <h3>{product.flavour}</h3>
      {isFavorite ? <h5>Love this</h5> : <h5>Hate this</h5>}
      <h6>Buy now</h6>
      <button onClick={handleClick}>Favorite</button>
    </div>
  );
};

export default ProductPage;
