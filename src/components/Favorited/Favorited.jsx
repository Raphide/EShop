
import React, { useEffect, useState } from "react";
import { setFavorite } from "../../services/eshop-service";
import styles from "./Favorited.module.scss";

const Favorited = ({product}) => {
    const [isFavorite, setIsFavorite] = useState(product.favorited);

  const handleClick = () => {
    setIsFavorite(!isFavorite);
  };

  useEffect(() => {
    setFavorite(product.id, isFavorite);
    // console.log(isFavorite);
  }, [isFavorite]);

  const classes = `${styles.fave} ${
    product.favorited ? styles.fave_true : styles.fave_false
  }`;

  return (
    <div className={classes} onClick={handleClick}></div>
  )
}

export default Favorited