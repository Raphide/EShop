import React, { useEffect, useState } from "react";
import { getProductById } from "../../services/eshop-service";
import ProductPage from "../../Pages/ProductPage/ProductPage";
import { useParams } from "react-router-dom";

const ProductLoader = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [fetchStatus, setFetchStatus] = useState("");

  useEffect(() => {
    setFetchStatus("Loading");
    getProductById(id)
      .then((data) => {
        setFetchStatus("Success");
        // console.log(data.id);
        setProduct(data);
      })
      .catch((error) => {
        setFetchStatus("Failed");
        setError(error);
      });
  }, [id]);
  return (
    <>
      {fetchStatus === "Loading" && <p>Loading...</p>}
      {fetchStatus === "Failed" && (
        <p style={{ color: "red" }}>{error.message}</p>
      )}
      {fetchStatus === "Success" && <ProductPage product={product} />}
    </>
  );
};

export default ProductLoader;

// productData.map((product) => (<ProductCard key={product.id} product={product}/>))
