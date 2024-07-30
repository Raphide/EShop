import React, { useEffect, useState } from "react";
// import { editFavoriteByID, editProductById, setFavorite } from "../../services/eshop-service";
import { useParams } from "react-router-dom";

const Favorite = ({ product }) => {
  const { id } = useParams();
  const [formData, setFormData] = useState({ favorited: false, ...product });
  const [errors, setErrors] = useState({});
  const [isFavorited, setIsFavorited] = useState(false);

  // useEffect(() => {
  //   if (id) {
  //     getProductById(id)
  //       .then((data) => setProduct(data))
  //       .catch(setErrors);
  //   }
  // }, [id]);

  // useEffect(() => {
  //   setFormData({ ...formData, ...product });
  // }, [product]);


  // const handleChange = (event) => {
  //   const { name, value } = event.target;
  //   setFormData({
  //     ...formData,
  //     [name]: name === "favorited" && isFavorited,
  //   });
  //   setIsFavorited(!isFavorited);
  //   setFavorite(id, formData)
  // };



  return (
    <div>
      <form>
        <input
          type="checkbox"
          name="favorited"
          value={formData.favorited}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Favorite;
