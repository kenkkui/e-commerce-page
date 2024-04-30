import * as React from "react";
import iconPlus from "../images/icon-plus.svg";
import iconMinus from "../images/icon-minus.svg";
import { CartQuantity } from "../types/types";

function Quantity({ addItemCart, removeItemCart }: CartQuantity) {
  return (
    <div className="quantity-container">
      <img src={iconMinus} alt="Remove one" onClick={removeItemCart} />
      <p className="quantity">0</p>
      <img src={iconPlus} alt="Add one" onClick={addItemCart} />
    </div>
  );
}

export default Quantity;
