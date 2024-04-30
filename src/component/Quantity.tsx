import * as React from "react";
import iconPlus from "../images/icon-plus.svg";
import iconMinus from "../images/icon-minus.svg";

function Quantity() {
  return (
    <div className="quantity-container">
      <img src={iconMinus} alt="Remove one" />
      <p className="quantity">0</p>
      <img src={iconPlus} alt="Add one" />
    </div>
  );
}

export default Quantity;
