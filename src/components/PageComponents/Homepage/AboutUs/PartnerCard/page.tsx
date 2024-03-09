import { CldImage } from "next-cloudinary";
import Link from "next/link";

type Image = {
  url: string;
  alt: string;
  link: string;
};

type Props = {
  images: Image;
};

export default function PartnerCard({ images }: Props) {
  return (
    <>
      <Link
        href={images.link}
        target="_blank"
        className="hover:bg-struct-7-hover size-28 rounded-full bg-struct-7"
      >
        <CldImage
          alt={images.alt}
          src={images.url}
          width={112}
          height={112}
          className="rounded-full"
        ></CldImage>
      </Link>
    </>
  );
}
