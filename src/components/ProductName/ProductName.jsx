import React from 'react'
import { Link } from "react-router-dom";
import styles from "./ProductName.module.scss"

const ProductName = ({product}) => {
  return (
    <div><Link to={`/shop/${product.id}`} className={styles.Link}><h1 style={{textTransform:"uppercase"}}>{product.name}</h1></Link></div>
  )
}

export default ProductName