import React from "react";
type ImageProps = {
  src: string;
  width: number;
  height: number;
  alt?: string;
};
export function Image(props: ImageProps) {
  const { src, height, width, alt } = props;
  return <img src={src} width={width} height={height} alt={alt}></img>;
}
