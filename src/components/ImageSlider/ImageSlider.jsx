import React, { useState } from "react";
import styles from "./ImageSlider.module.scss";
import HeadLeft from "../../assets/HeadLeft.svg";
import HeadRight from "../../assets/HeadRight.svg";

const ImageSlider = ({ imageUrls }) => {
  const [imageIndex, setImageIndex] = useState(0);

  function showNextImage(){
    setImageIndex(index => {
      if (index === imageUrls.length -1) return 0
      return index +1;
    })
  }

  function showPrevImage(){
setImageIndex(index => {
  if (index === 0) return imageUrls.length - 1
  return index -1;
})
  }

  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      <div style={{width:"100%", height:"100%", overflow:"hidden", display: "flex"}}>
        {imageUrls.map(url => (
          <img key={url} src={url} className={styles.image} style={{translate: `${-100 * imageIndex}%`}} />
        ))}
      </div>
      
      <button
        onClick={showPrevImage}
        className={styles.button}
        style={{ left: "0" }}
      >
        <img src={HeadLeft} className={styles.catHead} />
      </button>
      <button
        onClick={showNextImage}
        className={styles.button}
        style={{ right: "0" }}
      >
        <img src={HeadRight} className={styles.catHead}/>
      </button>
      <div style={{position: "absolute", bottom: ".5rem", left: "50%", translate: "-50%", display:"flex", gap: ".25rem" }}>
        {imageUrls.map((_, index)=> (
         <button key={index} className={styles.dotButtons} onClick={() => setImageIndex(index)}>{index === imageIndex ? "Meow" : ""}</button> 
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
