import React from 'react'
import { Link } from "react-router-dom";
import styles from "./ProductImg.module.scss"

const ProductImg = ({product}) => {
  return (
    <><Link to={`/shop/${product.id}`}> <img className={styles.prodImg} src={product.imgLink} /></Link></>
  )
}

export default ProductImg