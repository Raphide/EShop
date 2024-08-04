import React, { useEffect } from 'react'
import styles from "./CheckoutCard.module.scss"
import { deleteProductFromCart } from '../../services/eshop-service';

const CheckoutCard = ({product}) => {
    
    const removeFromCart = () => {
        deleteProductFromCart(product.id);
      };
  return (
    <div className={styles.content}> <img className={styles.prodImg} src={product.productData.img} />
    <section className={styles.info}>
    <h1>{product.productData.name}</h1>
    <h3>${product.productData.price}</h3>
    <button onClick={removeFromCart}>Remove</button></section>
    </div>
  )
}

export default CheckoutCard