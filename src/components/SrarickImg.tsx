import { Image } from "antd";
import React from "react";

interface ImgPro {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export const Imgpro: React.FC<ImgPro> = ({ src, alt, width, height }) => {
  return (
    <>
      <Image src={src} alt={alt} width={width} height={height} />
    </>
  );
};
