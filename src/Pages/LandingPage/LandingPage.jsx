import React from "react";
import Carousel from "../../containers/Carousel/Carousel";
import Heading from "../../components/Heading/Heading";
import styles from "./LandingPage.module.scss"

const LandingPage = () => {
  return (
    <div className={styles.main}>
      <Heading text="I CAN HAZ CANZ?"/>
      <section className={styles.blurb}>
      <p>You CAN!</p>
      <p>You can haz better brighter beverages, because you deserve it! CANZ aren't just drinks, they're nourishment. Each can contains no more than 200 calories and no less an 3 cat hairs.</p></section>
      <Carousel/>
      
    </div>
  );
};

export default LandingPage;
