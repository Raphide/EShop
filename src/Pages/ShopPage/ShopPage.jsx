import React, { useEffect, useState } from "react";
import styles from "./ShopPage.module.scss"
import { subscribeToProducts } from "../../services/eshop-service";
import ProductCard from "../../containers/ProductCard/ProductCard";
import Heading from "../../components/Heading/Heading";

const ShopPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const unsubscribe = subscribeToProducts(setProducts);
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div>
      <Heading text="SHOP"/>
      <section className={styles.main}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </div>
  );
};

export default ShopPage;
