import * as React from "react";
import SneakerDescription from "./SneakerDescription";
import Quantity from "./Quantity";
import AddCart from "./AddCartBtn";

function SneakerInfo() {
  return (
    <section className="sneaker-info-wrapper">
      <main className="sneaker-info">
        <SneakerDescription />

        <section className="add-cart-container">
          <Quantity />
          <AddCart />
        </section>
      </main>
    </section>
  );
}

export default SneakerInfo;
