import * as React from "react";
import { useState } from "react";
import Box from "./Box";

interface LightBoxProps {
  setIsOpenLightBox: React.Dispatch<React.SetStateAction<boolean>>;
}

function LightBox({ setIsOpenLightBox }: LightBoxProps) {
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <section className="light-box">
      <div className="box">
        <svg
          width="14"
          height="15"
          xmlns="http://www.w3.org/2000/svg"
          className="icon-close"
          onClick={() => setIsOpenLightBox(false)}
        >
          <path
            d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
            fill-rule="evenodd"
          />
        </svg>

        <Box currentImage={currentImage} setCurrentImage={setCurrentImage} />
      </div>
    </section>
  );
}

export default LightBox;
