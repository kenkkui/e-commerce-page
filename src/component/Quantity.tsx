import * as React from "react";
import iconPlus from "../images/icon-plus.svg";
import iconMinus from "../images/icon-minus.svg";
import { CartFunctions } from "../types/types";

function Quantity({
  addItemCart,
  removeItemCart,
  cart,
}: CartFunctions & { cart: number }) {
  return (
    <div className="quantity-container">
      <img src={iconMinus} alt="Remove one" onClick={removeItemCart} />
      <p className="quantity">{cart}</p>
      <img src={iconPlus} alt="Add one" onClick={addItemCart} />
    </div>
  );
}

export default Quantity;
