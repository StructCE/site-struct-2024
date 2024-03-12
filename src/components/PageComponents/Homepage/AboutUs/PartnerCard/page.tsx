"use client";
import { type Partner } from "@prisma/client";
import { CldImage } from "next-cloudinary";
import Link from "next/link";

export default function PartnerCard({ partners }: { partners: Partner[] }) {
  return (
    <>
      {partners?.map((partner) => (
        <Link
          key={partner.id}
          href={partner.link}
          target="_blank"
          className="delay-50 size-[92px] rounded-full bg-struct-7 transition ease-in-out hover:-translate-y-[3px] sm:size-28"
        >
          <CldImage
            alt={partner.name}
            src={partner.logoPublicId}
            width={112}
            height={112}
            className="h-[92px] w-[92px] rounded-full sm:h-[112px] sm:w-[112px]"
          ></CldImage>
        </Link>
      ))}
    </>
  );
}
