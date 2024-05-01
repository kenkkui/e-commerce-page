import * as React from "react";
import { cartContent } from "../../types/types";
import thumbnailImage from "../../images/image-product-1-thumbnail.jpg";

interface ShoppingCartContentProps {
  isHover: boolean;
}

function ShoppingCartContent({
  isHover,
  cart,
  removeAll,
}: ShoppingCartContentProps & cartContent) {
  const item = (
    <>
      <div className="item-in-cart">
        <img src={thumbnailImage} alt="Thumbnail" />
        <div className="text-container">
          <h3>Fall Limited Edition Sneakers</h3>
          <p>
            $125.00 x {cart}{" "}
            <span className="cart-total-price">${cart * 125}.00</span>
          </p>
        </div>
      </div>
      <button id="checkout"></button>
    </>
  );

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
