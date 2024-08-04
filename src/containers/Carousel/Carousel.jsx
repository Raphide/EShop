import { useEffect } from "react"
import can1 from "../../assets/OriginalPromo.png"
import can2 from "../../assets/ChocolatePromo.png"
import can3 from "../../assets/StrawberryPromo.png"
import Can4 from "../../assets/PineapplePromo.png"
import ImageSlider from "../../components/ImageSlider/ImageSlider"
import { getProductCollection } from "../../services/eshop-service"
import styles from "./Carousel.module.scss"

const Carousel = () => {
//   useEffect(()=> (
// getProductCollection()
//   ),[])

    const images = [can1, can2, can3, Can4]
  return (
    <div className={styles.carousel} ><ImageSlider imageUrls={images}/></div>
  )
}

export default Carousel