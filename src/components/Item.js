import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart, setCart] = useState(true);
  function handleCart(event) {
    setCart(!inCart)
  }

  return (
    <li className={inCart ? "" : "in-cart"}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={inCart ? "add" : "remove"} onClick={handleCart}>{inCart ? "Add to Cart" : "Remove From Cart"}</button>
    </li>
  );
}

export default Item;
