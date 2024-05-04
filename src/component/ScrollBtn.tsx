import * as React from "react";

interface ScrollBtnProps {
  setCurrentImage: React.Dispatch<React.SetStateAction<number>>;
  nextBtn?: boolean;
  addClass: string;
  svg: React.ReactNode;
}

export default function ScrollBtn({
  setCurrentImage,
  nextBtn,
  addClass,
  svg,
}: ScrollBtnProps) {
  return (
    <div
      className={`scroll-btn ${addClass ? addClass : ""}`}
      data-next-btn={nextBtn}
      data-prev-btn={!nextBtn}
      onClick={
        nextBtn
          ? () => setCurrentImage((prev) => (prev + 1) % 4)
          : () => setCurrentImage((prev) => (prev - 1 + 4) % 4)
      }
    >
      {svg}
    </div>
  );
}
