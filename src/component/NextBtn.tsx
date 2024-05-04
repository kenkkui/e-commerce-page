import * as React from "react";
import ScrollBtn from "./ScrollBtn";

interface NextBtnProps {
  setCurrentImage: React.Dispatch<React.SetStateAction<number>>;
  addClass?: string;
}

export default function NextBtn({ setCurrentImage, addClass }: NextBtnProps) {
  return (
    <ScrollBtn
      addClass={addClass ? addClass : ""}
      setCurrentImage={setCurrentImage}
      nextBtn
      svg={
        <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
          <path
            d="m2 1 8 8-8 8"
            stroke-width="3"
            fill="none"
            fill-rule="evenodd"
          />
        </svg>
      }
    />
  );
}
