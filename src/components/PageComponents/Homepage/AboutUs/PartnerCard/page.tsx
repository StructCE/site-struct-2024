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
        className="delay-50 size-[92px] rounded-full bg-struct-7 transition ease-in-out hover:-translate-y-[3px] sm:size-28"
      >
        <CldImage
          alt={images.alt}
          src={images.url}
          width={112}
          height={112}
          className="h-[92px] w-[92px] rounded-full sm:h-[112px] sm:w-[112px]"
        ></CldImage>
      </Link>
    </>
  );
}