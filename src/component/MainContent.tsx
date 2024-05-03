import * as React from "react";
import { useState } from "react";
import SneakerPreview from "./SneakerPreview";
import SneakerInfo from "./SneakerInfo";
import LightBox from "./LightBox";

import { CartFunctions } from "../types/types";

function MainContent({
  addItemCart,
  removeItemCart,
  cart,
}: CartFunctions & { cart: number }) {
  const [isOpenLightBox, setIsOpenLightBox] = useState(false);

  return (
    <>
      <section className="sneaker-page">
        <main className="sneaker-content">
          <SneakerPreview setIsOpenLightBox={setIsOpenLightBox} />
          <SneakerInfo
            addItemCart={addItemCart}
            removeItemCart={removeItemCart}
            cart={cart}
          />
        </main>
      </section>

      {isOpenLightBox && <LightBox setIsOpenLightBox={setIsOpenLightBox} />}
    </>
  );
}

export default MainContent;
