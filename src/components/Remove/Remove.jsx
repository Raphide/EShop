import React from 'react'

const Remove = ({product}) => {

    const removeFromCart = (id) => {
        deleteProductFromCart(id);
      };
  return (
    <div><button onClick={removeFromCart(product)}>Remove</button></div>
  )
}

export default Remove