import { useEffect } from "react"
import can1 from "../../assets/can1.jpg"
import can2 from "../../assets/can2.jpg"
import can3 from "../../assets/can3.png"
import Cat from "../../assets/Cat.png"
import ImageSlider from "../../components/ImageSlider/ImageSlider"
import { getProductCollection } from "../../services/eshop-service"
import styles from "./Carousel.module.scss"

const Carousel = () => {
//   useEffect(()=> (
// getProductCollection()
//   ),[])

    const images = [can1, can2, can3, Cat]
  return (
    <div className={styles.carousel} ><ImageSlider imageUrls={images}/></div>
  )
}

export default Carousel