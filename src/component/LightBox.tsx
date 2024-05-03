import * as React from "react";
import { useState } from "react";

const images = [
  require("../images/image-product-1.jpg"),
  require("../images/image-product-2.jpg"),
  require("../images/image-product-3.jpg"),
  require("../images/image-product-4.jpg"),
];

interface LightBoxProps {
  setIsOpenLightBox: React.Dispatch<React.SetStateAction<boolean>>;
}

function LightBox({ setIsOpenLightBox }: LightBoxProps) {
  const [currentImage, setcurrentImage] = useState(0);

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

        <section className="light-box-preview">
          <div className="main-image">
            <div
              className="scroll-btn"
              data-prev-btn="true"
              onClick={() => setcurrentImage((prev) => (prev - 1 + 4) % 4)}
            >
              <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M11 1 3 9l8 8"
                  stroke-width="3"
                  fill="none"
                  fill-rule="evenodd"
                />
              </svg>
            </div>
            <img
              src={images[currentImage]}
              alt="Fall Limited Edition Sneakers"
            />
            <div
              className="scroll-btn"
              data-next-btn="true"
              onClick={() => setcurrentImage((prev) => (prev + 1) % 4)}
            >
              <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="m2 1 8 8-8 8"
                  stroke-width="3"
                  fill="none"
                  fill-rule="evenodd"
                />
              </svg>
            </div>
          </div>

          <div className="small-images-wrapper">
            {images.map((image, i) => {
              return (
                <div
                  className={`small-images ${
                    i === currentImage ? "active-image" : ""
                  }`}
                  onClick={() => setcurrentImage(i)}
                >
                  <img key={i} src={image} alt="Product" />
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </section>
  );
}

export default LightBox;
