import { useEffect, useState } from "react"
import ImageSlider from "../../components/ImageSlider/ImageSlider"
import { getFeaturedProducts } from "../../services/eshop-service"
import styles from "./Carousel.module.scss"

const Carousel = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
      getFeaturedProducts()
      .then((data) => {
          setProducts(data);
      })
  },[products]);

  return (
    <div className={styles.carousel} ><ImageSlider product={products}/></div>
  )
}

export default Carousel