"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function CustomImage({
  src,
  alt,
  ...rest
}: {
  readonly src: string;
  readonly alt: string;
  [key: string]: any;
}) {
  const [imgSrc, setImgSrc] = useState(src);
  useEffect(() => {
    setImgSrc(src);
  }, [src]);
  return (
    <Image
      src={imgSrc}
      alt={alt}
      onError={() => setImgSrc("/assets/no-image-placeholder.svg")}
      {...rest}
    />
  );
}
