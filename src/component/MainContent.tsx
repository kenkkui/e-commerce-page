import * as React from "react";
import SneakerPreview from "./SneakerPreview";
import SneakerInfo from "./SneakerInfo";

import { CartFunctions } from "../types/types";

function MainContent({
  addItemCart,
  removeItemCart,
  cart,
}: CartFunctions & { cart: number }) {
  return (
    <section className="sneaker-page">
      <main className="sneaker-content">
        <SneakerPreview />
        <SneakerInfo
          addItemCart={addItemCart}
          removeItemCart={removeItemCart}
          cart={cart}
        />
      </main>
    </section>
  );
}

export default MainContent;
