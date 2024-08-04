import React, { useEffect, useState } from 'react'
import { getAllFavorites } from '../../services/eshop-service';
import Heading from '../../components/Heading/Heading';
import styles from "./FavoritesPage.module.scss"
import FavoriteCard from '../../containers/FavoriteCard/FavoriteCard';

const FavoritesPage = () => {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        getAllFavorites()
        .then((data) => {
            setProducts(data);
        })
    },[products]);
    
  return (
    <div>
      
      <Heading text="FAVORITES"/>
      <section className={styles.main}>
        {products.map((product) => (
          <FavoriteCard key={product.id} product={product} />
        ))}
     </section>
    </div>
  )
}

export default FavoritesPage