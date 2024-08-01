import React, { useEffect } from 'react'
import styles from "./CheckoutCard.module.scss"
import { deleteProductFromCart } from '../../services/eshop-service';

const CheckoutCard = ({product}) => {
    
    const removeFromCart = () => {
        deleteProductFromCart(product.id);
      };
  return (
    <div> <img className={styles.prodImg} src={product.imgLink} />
    <h1>{product.name}</h1>
    <h3>{product.smallData}</h3>
    <button onClick={removeFromCart()}>Remove</button>
    </div>
  )
}

export default CheckoutCard