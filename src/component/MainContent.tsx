import * as React from "react";
import SneakerPreview from "./SneakerPreview";
import SneakerInfo from "./SneakerInfo";

import { CartQuantity } from "../types/types";

function MainContent({ addItemCart, removeItemCart }: CartQuantity) {
  return (
    <section className="sneaker-page">
      <main className="sneaker-content">
        <SneakerPreview />
        <SneakerInfo
          addItemCart={addItemCart}
          removeItemCart={removeItemCart}
        />
      </main>
    </section>
  );
}

export default MainContent;
