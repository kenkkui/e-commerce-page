import * as React from "react";
import iconClose from "../images/icon-close.svg";

interface LightBoxProps {
  setIsOpenLightBox: React.Dispatch<React.SetStateAction<boolean>>;
}

function LightBox({ setIsOpenLightBox }: LightBoxProps) {
  return (
    <section className="light-box">
      <div className="box">
        <img src={iconClose} alt="Close" />
      </div>
    </section>
  );
}

export default LightBox;
