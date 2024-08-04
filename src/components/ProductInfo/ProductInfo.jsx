import React from 'react'
import styles from "./ProductInfo.module.scss"

const ProductInfo = ({product}) => {
  return (
    <><p>{product.flavour}</p>
    <span><h1>from $</h1>
    <h1 className={styles.price}>{product.small?.price}</h1></span></>
  )
}

export default ProductInfo