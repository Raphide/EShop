import React, { useEffect, useState } from 'react'
import { getAllFavorites } from '../../services/eshop-service';
import ProductCard from '../../components/ProductCard/ProductCard';

const FavoritesPage = () => {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        getAllFavorites()
        .then((data) => {
            setProducts(data);
        })
    },[]);
    
  return (
    <div>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
     
    </div>
  )
}

export default FavoritesPage