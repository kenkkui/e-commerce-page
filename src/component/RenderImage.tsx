import * as React from "react";

interface RenderImageProps {
  src: string;
  name: string;
  alt: string;
}

function RenderImage({ src, name, alt }: RenderImageProps) {
  return (
    <div className={name}>
      <img src={src} alt={alt} />
    </div>
  );
}

export default RenderImage;
