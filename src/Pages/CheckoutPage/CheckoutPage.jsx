import React, { useEffect, useState } from "react";
import { deleteProductFromCart, getAllInCart, getCart, subscribeToCart} from "../../services/eshop-service";
import styles from "./CheckoutPage.module.scss";
import CheckoutCard from "../../components/CheckoutCard/CheckoutCard";

const CheckoutPage = () => {
  // const [products, setProducts] = useState([]);
  const [cart, setCart] =useState([]);

   useEffect(() => {
    const unsubscribe = subscribeToCart(setCart);
    return () => {
      unsubscribe();
    };
  }, []);

  // useEffect(() => {
  //  getCart()
  //  .then((data) => setCart(data))
  //  .catch((e) => console.log(e));
  // }, []);

  

  return (
    <div>
      <h1>Checkout</h1>
      <section className={styles.main}>
      {cart.map((product) => (
          <CheckoutCard key={product.id} product ={product} />
        ))}
      </section>
    </div>
  );
};

export default CheckoutPage;
