import styles from "./ProductCard.module.scss";
import ProductName from "../../components/ProductName/ProductName";
import ProductInfo from "../../components/ProductInfo/ProductInfo";
import ProductImg from "../../components/ProductImg/ProductImg";
import Favorited from "../../components/Favorited/Favorited";

const ProductCard = ({ product }) => {
  return (
    <div>
      <section className={styles.imgOverlay}>
        <ProductImg product={product} />
        <Favorited product={product} />
      </section>
      <section className={styles.content}>
        <ProductName product={product} />
        <ProductInfo product={product} />
      </section>
    </div>
  );
};

export default ProductCard;
