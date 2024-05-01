import * as React from "react";
import SneakerDescription from "./SneakerDescription";
import Quantity from "./Quantity";
import AddCart from "./AddCartBtn";

import { CartFunctions } from "../types/types";

function SneakerInfo({
  addItemCart,
  removeItemCart,
  cart,
}: CartFunctions & { cart: number }) {
  return (
    <section className="sneaker-info-wrapper">
      <main className="sneaker-info">
        <SneakerDescription />

        <section className="add-cart-container">
          <Quantity
            addItemCart={addItemCart}
            removeItemCart={removeItemCart}
            cart={cart}
          />
          <AddCart onClick={addItemCart} />
        </section>
      </main>
    </section>
  );
}

export default SneakerInfo;
