import React from 'react'
import styles from "./FavoriteCard.module.scss"
import ProductImg from '../../components/ProductImg/ProductImg'
import Favorited from '../../components/Favorited/Favorited'
import ProductName from '../../components/ProductName/ProductName'

const FavoriteCard = ({product}) => {
  return (
    <div>
      <section className={styles.imgOverlay}>
        <ProductImg product={product} />
        <Favorited product={product}/>
      </section>
      <section className={styles.content}>
        <ProductName product={product} />
      </section>
    </div>
  )
}

export default FavoriteCard