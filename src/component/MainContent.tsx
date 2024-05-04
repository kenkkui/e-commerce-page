import * as React from "react";
import SneakerPreview from "./SneakerPreview";
import SneakerInfo from "./SneakerInfo";
import LightBox from "./LightBox";

import { CartFunctions } from "../types/types";

interface MainContentProps {
  cart: number;
  setIsOpenLightBox: React.Dispatch<React.SetStateAction<boolean>>;
}

function MainContent({
  addItemCart,
  removeItemCart,
  cart,
  setIsOpenLightBox,
}: CartFunctions & MainContentProps) {
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
    </>
  );
}

export default MainContent;
