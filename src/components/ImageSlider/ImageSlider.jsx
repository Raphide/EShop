import React, { useState } from "react";
import styles from "./ImageSlider.module.scss";
import HeadLeft from "../../assets/HeadLeft.svg";
import HeadRight from "../../assets/HeadRight.svg";
import { Link } from "react-router-dom";

const ImageSlider = ({ imageUrls }) => {
  const [imageIndex, setImageIndex] = useState(0);
  const [productLink, setProductLink] = useState("wgMB1IpqikPH5W0apxZl");

  const getProductLink = () => {
    if (imageIndex === 0) {
      setProductLink("wgMB1IpqikPH5W0apxZl");
    } else if (imageIndex === 1) {
      setProductLink("shOnL82HKQZD35C3JDpL");
    } else if (imageIndex === 2) {
      setProductLink("9xS5rDGeV5pYVB5vZpYF");
    } else {
      setProductLink("4khvCG1hsZv798qNvTJD");
    }
    return productLink;
  };

  const showNextImage = () => {
    setImageIndex((index) => {
      if (index === imageUrls.length - 1) return 0;
      return index + 1;
    });
    getProductLink();
  };

  const showPrevImage = () => {
    setImageIndex((index) => {
      if (index === 0) return imageUrls.length - 1;
      return index - 1;
    });
    getProductLink();
  };

  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      <Link to={`/shop/${productLink}`}>
        <div
          style={{
            width: "100%",
            height: "100%",
            overflow: "hidden",
            display: "flex",
          }}
        >
          {imageUrls.map((url) => (
            <img
              key={url}
              src={url}
              className={styles.image}
              style={{ translate: `${-100 * imageIndex}%` }}
            />
          ))}
        </div>
      </Link>

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
        {imageUrls.map((_, index) => (
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
