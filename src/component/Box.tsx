import * as React from "react";
import ScrollBtn from "./ScrollBtn";
import PrevBtn from "./PrevBtn";
import NextBtn from "./NextBtn";

const images = [
  require("../images/image-product-1.jpg"),
  require("../images/image-product-2.jpg"),
  require("../images/image-product-3.jpg"),
  require("../images/image-product-4.jpg"),
];

interface BoxProps {
  setCurrentImage: React.Dispatch<React.SetStateAction<number>>;
  currentImage: number;
}

function Box({ setCurrentImage, currentImage }: BoxProps) {
  return (
    <section className="light-box-preview">
      <div className="main-image">
        <PrevBtn setCurrentImage={setCurrentImage} />
        <img src={images[currentImage]} alt="Fall Limited Edition Sneakers" />
        <NextBtn setCurrentImage={setCurrentImage} />
      </div>

      <div className="small-images-wrapper">
        {images.map((image, i) => {
          return (
            <div
              className={`small-images ${
                i === currentImage ? "active-image" : ""
              }`}
              onClick={() => setCurrentImage(i)}
            >
              <img key={i} src={image} alt="Product" />
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Box;
