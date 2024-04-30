import * as React from "react";

function SneakerDescription() {
  return (
    <>
      <section className="text-content">
        <header>
          <h6 className="company-subtitle">sneaker company</h6>
          <h1 className="sneaker-name">Fall Limited Edition Sneakers</h1>
        </header>

        <p className="sneaker-description">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they'll withstand everything
          the weather can offer.
        </p>
      </section>

      <div className="price-container">
        <div className="sale-price">
          $125.00
          <span className="discount-amount">50%</span>
        </div>

        <div className="original-price">$250.00</div>
      </div>
    </>
  );
}

export default SneakerDescription;
