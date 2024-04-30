import * as React from "react";
import { cartContent } from "../../types/types";

interface ShoppingCartContentProps {
  isHover: boolean;
}

function ShoppingCartContent({
  isHover,
  cart,
  removeAll,
}: ShoppingCartContentProps & cartContent) {
  return (
    <section className={`shopping-cart-content ${isHover ? "is-hover" : ""}`}>
      <div>
        <h1>Cart</h1>
      </div>

      <div className="content">
        {cart === 0 && <p className="cart-empty-msg">Your cart is empty.</p>}
      </div>
    </section>
  );
}

export default ShoppingCartContent;
