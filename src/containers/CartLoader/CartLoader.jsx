import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../../services/eshop-service';
import FavoritesPage from '../../Pages/FavoritesPage/FavoritesPage';

const CartLoader = () => {
    const {id} = useParams();
    const [product, setProduct] = useState(null);
    const [error, setError] = useState(null);
    const [fetchStatus, setFetchStatus] = useState("");

useEffect(() => {
    setFetchStatus("Loading");
    getProductById(id)
    .then((data) => {
        setFetchStatus("Success");
        setProduct(data);
    })
    .catch((error) => {
        setFetchStatus("Failed");
        setError(error);
    })
}, [id]);

  return (
    <>
      {fetchStatus === "Loading" && <p>Loading...</p>}
      {fetchStatus === "Failed" && (
        <p style={{ color: "red" }}>{error.message}</p>
      )}
      {fetchStatus === "Success" && <FavoritesPage product={product} />}
    </>
  );
};


export default CartLoader