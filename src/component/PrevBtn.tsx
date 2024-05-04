import * as React from "react";
import ScrollBtn from "./ScrollBtn";

interface PrevBtnProps {
  setCurrentImage: React.Dispatch<React.SetStateAction<number>>;
  addClass?: string;
}

export default function PrevBtn({ setCurrentImage, addClass }: PrevBtnProps) {
  return (
    <ScrollBtn
      setCurrentImage={setCurrentImage}
      addClass={addClass ? addClass : ""}
      svg={
        <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M11 1 3 9l8 8"
            stroke-width="3"
            fill="none"
            fill-rule="evenodd"
          />
        </svg>
      }
    />
  );
}
