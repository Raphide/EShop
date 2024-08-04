import React, { useState } from "react";
import styles from "./ImageSlider.module.scss";
import HeadLeft from "../../assets/HeadLeft.svg";
import HeadRight from "../../assets/HeadRight.svg";
import { Link } from "react-router-dom";

const ImageSlider = ({ product }) => {
  const [imageIndex, setImageIndex] = useState(0);

  const showNextImage = () => {
    setImageIndex((index) => {
      if (index === product.length - 1) return 0;
      return index + 1;
    });
  };

  const showPrevImage = () => {
    setImageIndex((index) => {
      if (index === 0) return product.length - 1;
      return index - 1;
    });
  };

  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      <div
        style={{
          width: "100%",
          height: "100%",
          overflow: "hidden",
          display: "flex",
        }}
      >
        {product.map((product) => (
          <Link key={product.id} to={`/shop/${product.id}`} className={styles.image}>
            <img
              key={product.id}
              src={product.promoImg}
              className={styles.image}
              style={{ translate: `${-100 * imageIndex}%` }}
            />
          </Link>
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
        <img src={HeadRight} className={styles.catHead} />
      </button>
      <div
        style={{
          position: "absolute",
          bottom: ".5rem",
          left: "50%",
          translate: "-50%",
          display: "flex",
          gap: ".25rem",
        }}
      >
        {product.map((_, index) => (
          <button
            key={index}
            className={styles.dotButtons}
            onClick={() => setImageIndex(index)}
          >
            {index === imageIndex ? "Meow" : ""}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
