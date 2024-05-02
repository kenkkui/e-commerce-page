import * as React from "react";
import { cartContent } from "../../types/types";
import thumbnailImage from "../../images/image-product-1-thumbnail.jpg";
import RenderImage from "../RenderImage";
import iconClear from "../../images/icon-delete.svg";

interface ShoppingCartContentProps {
  isHover: boolean;
}

function ShoppingCartContent({
  isHover,
  cart,
  removeAll,
}: ShoppingCartContentProps & cartContent) {
  const item = (
    <div className="item-in-cart-wrapper">
      <div className="item-in-cart">
        <RenderImage
          src={thumbnailImage}
          name="thumbnail-image"
          alt="Thumbnail"
        />
        <div className="text-container">
          <h3>Fall Limited Edition Sneakers</h3>
          <p>
            $125.00 x {cart}
            <p className="cart-total-price">${cart * 125}.00</p>
          </p>
        </div>

        <button className="clear-cart" onClick={removeAll}>
          <img src={iconClear} alt="Clear" />
        </button>
      </div>

      <button id="checkout">Checkout</button>
    </div>
  );

  return (
    <section className={`shopping-cart-content ${isHover ? "is-hover" : ""}`}>
      <div>
        <h1>Cart</h1>
      </div>

      <div className="content">
        {cart > 0 ? (
          item
        ) : (
          <p className="cart-empty-msg">Your cart is empty.</p>
        )}
      </div>
    </section>
  );
}

export default ShoppingCartContent;
