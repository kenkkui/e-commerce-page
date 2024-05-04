import * as React from "react";
import { useState } from "react";
import "./SneakerPreview.css";
import NextBtn from "./NextBtn";
import PrevBtn from "./PrevBtn";

const images = [
  require("../images/image-product-1.jpg"),
  require("../images/image-product-2.jpg"),
  require("../images/image-product-3.jpg"),
  require("../images/image-product-4.jpg"),
];

interface SneakerPreviewProps {
  setIsOpenLightBox?: React.Dispatch<React.SetStateAction<boolean>>;
}

function SneakerPreview({ setIsOpenLightBox }: SneakerPreviewProps) {
  const [currentImage, setcurrentImage] = useState(0);

  return (
    <section className="sneaker-preview-wrapper">
      <main
        className="sneaker-preview"
        onClick={() => setIsOpenLightBox?.(true)}
      >
        <img src={images[currentImage]} alt="Fall Limited Edition Sneakers" />
      </main>

      <main className="mobile-sneaker-preview">
        <NextBtn setCurrentImage={setcurrentImage} addClass="mobile" />
        <img src={images[currentImage]} alt="Fall Limited Edition Sneakers" />
        <PrevBtn setCurrentImage={setcurrentImage} addClass="mobile" />
      </main>

      <aside className="sneaker-preview">
        {images.map((image, i) => {
          return (
            <div
              className={`aside-preview ${
                i === currentImage ? "active-image" : ""
              }`}
              onClick={() => setcurrentImage(i)}
            >
              <img key={i} src={image} alt="Product" />
            </div>
          );
        })}
      </aside>
    </section>
  );
}

export default SneakerPreview;
