import * as React from "react";

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
        <div
          className="scroll-btn"
          data-prev-btn="true"
          onClick={() => setCurrentImage((prev) => (prev - 1 + 4) % 4)}
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
        <img src={images[currentImage]} alt="Fall Limited Edition Sneakers" />
        <div
          className="scroll-btn"
          data-next-btn="true"
          onClick={() => setCurrentImage((prev) => (prev + 1) % 4)}
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
