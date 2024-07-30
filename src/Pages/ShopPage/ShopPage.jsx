import React, { useEffect, useState } from "react";
import styles from "./ShopPage.module.scss"
import ProductLoader from "../../containers/ProductLoader/ProductLoader";
import { subscribeToProducts } from "../../services/eshop-service";
import ProductCard from "../../components/ProductCard/ProductCard";

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
      <h1>Shop</h1>
      <section className={styles.main}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </div>
  );
};

export default ShopPage;
