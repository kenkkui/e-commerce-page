import React from "react";
import "./App.css";
import Nav from "./component/Nav";
import iconPlus from "./images/icon-plus.svg";
import iconMinus from "./images/icon-minus.svg";
import cart from "./images/icon-cart.svg";

function App() {
  return (
    <div id="app">
      <main className="main-content">
        <Nav />

        <section className="sneaker-page">
          <main className="sneaker-content">
            <section className="sneaker-preview-wrapper">
              <main className="sneaker-preview"></main>
              <aside className="sneaker-preview">
                <div className="aside-preview"></div>
                <div className="aside-preview"></div>
                <div className="aside-preview"></div>
                <div className="aside-preview"></div>
              </aside>
            </section>

            <section className="sneaker-info-wrapper">
              <main className="sneaker-info">
                <h6 className="company-subtitle">sneaker company</h6>
                <h1 className="sneaker-name">Fall Limited Edition Sneakers</h1>

                <p className="sneaker-description">
                  These low-profile sneakers are your perfect casual wear
                  companion. Featuring a durable rubber outer sole, they'll
                  withstand everything the weather can offer.
                </p>

                <div className="price-container">
                  <div className="sale-price">
                    $125.00
                    <span className="discount-amount">50%</span>
                  </div>

                  <div className="original-price">$250.00</div>
                </div>

                <section className="add-cart-container">
                  <div className="quantity-container">
                    <img src={iconMinus} alt="Remove one" />
                    <p className="quantity">0</p>
                    <img src={iconPlus} alt="Add one" />
                  </div>

                  <button className="add-to-cart">
                    <img src={cart} alt="cart" />
                    Add to Cart
                  </button>
                </section>
              </main>
            </section>
          </main>
        </section>
      </main>
    </div>
  );
}

export default App;
