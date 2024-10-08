import React, { useEffect, useState } from "react";
import { subscribeToCart } from "../../services/eshop-service";
import styles from "./CheckoutPage.module.scss";
import CheckoutCard from "../../components/CheckoutCard/CheckoutCard";
import Heading from "../../components/Heading/Heading";

const CheckoutPage = () => {

  const [cart, setCart] = useState([]);

  useEffect(() => {
    const unsubscribe = subscribeToCart(setCart);
    return () => {
      unsubscribe();
    };
  }, []);

  const totalPrice = cart
    .reduce((acc, curr) => acc + curr.productData.price, 0)
    .toFixed(2);

  return (
    <div>
      <Heading text="CHECKOUT" />
      <section className={styles.main}>
        {cart.map((product) => (
          <CheckoutCard key={product.id} product={product} />
        ))}
      </section>
      <section className={styles.total}>
        <span>
          <h3>Total: </h3>
          <h4>${totalPrice}</h4>
        </span>
      </section>
    </div>
  );
};

export default CheckoutPage;
