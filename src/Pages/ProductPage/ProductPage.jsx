import React, { useEffect, useState } from "react";
import styles from "./ProductPage.module.scss";
import {
  addProductToCart,
  setFavorite,
  setInCartStatus,
} from "../../services/eshop-service";

const ProductPage = ({ product }) => {
  const [isFavorite, setIsFavorite] = useState(product.favorited);
  const [productSize, setProductSize] = useState("small");
  const { small, large, name, ...rest } = product;
  const sizeData = productSize === "small" ? small : large;
  const {price, img} = sizeData;
  // const [inCart, setInCart] = useState(sizeData.inCart);
  const cartData = {name, price, img};

  const addToFavorites = () => {
    setIsFavorite(!isFavorite);
  };
  
  useEffect(() => {
    setFavorite(product.id, isFavorite);
    // console.log(isFavorite);
  }, []);

  const addToCart = () => {
    // setInCart(true);
    addProductToCart(
      cartData
    );
  };

  useEffect(() => {
    setFavorite(product.id, isFavorite);
    // console.log(isFavorite);
  }, []);

  // useEffect(() => {
  //   setInCartStatus(product.id, inCart);
  //   // console.log(inCart);
  // }, [inCart]);

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
        <p style={{marginBottom:"0em"}}>{product.flavour} flavour</p>
        <h5 style={{marginBottom:"0.5em", marginTop:"0.5em"}}>Size: {productSize}</h5>
        <span>
          <h1 style={{ fontSize: "1.5em" }}>$</h1>
          <h1 className={styles.price}>{sizeData.price}</h1>
        </span>
        <h6 style={{marginBottom:"0.5em"}}>Buy now</h6>
        <form>
          <label>Select size</label>
          <select onChange={handleChange}>
            <option value={"small"}>Small</option>
            <option value={"large"}>Large</option>
          </select>
        </form>

        <h5 style={{marginBottom:"0.5em"}}>{sizeData.qty} still in stock!</h5>
<span className={styles.buttonSpan}>
        {/* {inCart ? (
        <button onClick={removeFromCart}>remove from cart</button>
      ) : (
        <button onClick={addToCart}>Add to cart</button>
      )} */}
        <button className={styles.buttons} onClick={addToCart}>Add to cart</button>
        <div className={classes} onClick={addToFavorites}></div></span>
      </div>
    </div>
  );
};

export default ProductPage;
