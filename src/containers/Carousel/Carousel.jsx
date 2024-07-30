import can1 from "../../assets/can1.jpg"
import can2 from "../../assets/can2.jpg"
import can3 from "../../assets/can3.jpg"
import can4 from "../../assets/can4.png"
import ImageSlider from "../../components/ImageSlider/ImageSlider"

const Carousel = () => {

    const images = [can1, can2, can3, can4]
  return (
    <div style={{maxWidth: "1000px", width: "100%", height: "500px", aspectRatio: "10 / 4" }}><ImageSlider imageUrls={images}/></div>
  )
}

export default Carousel