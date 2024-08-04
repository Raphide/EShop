import React, { useEffect, useState } from "react";
import styles from "./ProductPage.module.scss";
import {
  addProductToCart,
  deleteProductFromCart,
  setFavorite,
  setInCartStatus,
  subscribeToCart,
} from "../../services/eshop-service";

const ProductPage = ({ product }) => {
  const [isFavorite, setIsFavorite] = useState(product.favorited);
  const [productSize, setProductSize] = useState("small");
  const { small, large, name, ...rest } = product;
  const sizeData = productSize === "small" ? small : large;
  const {price, img} = sizeData;
  const [inCart, setInCart] = useState(sizeData.inCart);
  const cartData = {name, price, img};

  const addToFavorites = () => {
    setIsFavorite(!isFavorite);
  };

  const addToCart = () => {
    setInCart(true);
    addProductToCart(
      cartData
    );
  };

  const removeFromCart = () => {
    setInCart(false);
    deleteProductFromCart(product.id);
  };

  useEffect(() => {
    setFavorite(product.id, isFavorite);
    // console.log(isFavorite);
  }, [isFavorite]);

  useEffect(() => {
    setInCartStatus(product.id, inCart);
    // console.log(inCart);
  }, [inCart]);

  const classes = `${styles.fave} ${
    product.favorited ? styles.fave_true : styles.fave_false
  }`;
  // create graphic indicator for favorited

  const handleChange = (event) => {
    const { value } = event.target;
    setProductSize(value);
  };

  // remember to change product to sizeData
  return (
    <div className={styles.main}>
      <img className={styles.img} src={sizeData.img} />
      <div className={styles.content}>
        <h1>{product.name}</h1>
        <p>{product.flavour} flavour</p>
        <h5>Size: {productSize}</h5>
        <span>
          <h1 style={{ fontSize: "1.5em" }}>$</h1>
          <h1 className={styles.price}>{sizeData.price}</h1>
        </span>
        <h6>Buy now</h6>
        <form>
          <label>Select size</label>
          <select onChange={handleChange}>
            <option value={"small"}>Small</option>
            <option value={"large"}>Large</option>
          </select>
        </form>

        <h5>{sizeData.qty} still in stock!</h5>

        <button onClick={addToFavorites}>
          {isFavorite ? "Remove Favorite" : "Favorite"}
        </button>
        {/* {inCart ? (
        <button onClick={removeFromCart}>remove from cart</button>
      ) : (
        <button onClick={addToCart}>Add to cart</button>
      )} */}
        <button onClick={addToCart}>Add to cart</button>
      </div>
    </div>
  );
};

export default ProductPage;
