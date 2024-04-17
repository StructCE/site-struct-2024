"use client";

import { CldImage, type CldImageProps } from "next-cloudinary";

export default function CloudinaryImg(props: CldImageProps) {
  return <CldImage {...props} dpr="auto" />;
}
