import * as React from "react";
import { CartContent } from "../../types/types";
import thumbnailImage from "../../images/image-product-1-thumbnail.jpg";
import RenderImage from "../RenderImage";
import iconClear from "../../images/icon-delete.svg";
import { BooleanLiteral } from "typescript";

interface ShoppingCartContentProps {
  isHover: boolean;
  setCartOnHover: React.Dispatch<React.SetStateAction<boolean>>;
  mobile?: boolean;
}

function ShoppingCartContent({
  isHover,
  setCartOnHover,
  cart,
  setCart,
  mobile,
}: ShoppingCartContentProps & CartContent) {
  function handleMouseOver() {
    if (isHover) {
      setCartOnHover(true);
    }
  }

  function handleMouseOut() {
    setCartOnHover(false);
  }

  return (
    <section
      className={`shopping-cart-container ${isHover ? "is-hover" : ""}`}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <div className="shopping-cart-content">
        <div>
          <h1>Cart</h1>
        </div>

        <div className="content">
          {cart > 0 ? (
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

                <button className="clear-cart" onClick={() => setCart(0)}>
                  <img src={iconClear} alt="Clear" />
                </button>
              </div>

              <button id="checkout">Checkout</button>
            </div>
          ) : (
            <p className="cart-empty-msg">Your cart is empty.</p>
          )}
        </div>
      </div>
    </section>
  );
}

export default ShoppingCartContent;
