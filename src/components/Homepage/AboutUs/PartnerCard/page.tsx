"use client";
import { type Partner } from "@prisma/client";
import { motion } from "framer-motion";
import { CldImage } from "next-cloudinary";
import Link from "next/link";

export default function PartnerCard({ partners }: { partners: Partner[] }) {
  return (
    <>
      <motion.div
        initial={{ opacity: "var(--opacity-from)", y: "var(--y-from)" }}
        whileInView={{ opacity: "var(--opacity-to)", y: "var(--y-to)" }}
        exit={{ opacity: "var(--opacity-from)", y: "var(--y-to)" }}
        transition={{ ease: "easeInOut", duration: 1, delay: 0 }}
        viewport={{ once: true }}
        className="[--opacity-from:1%] [--opacity-to:100%] [--y-from:75px] [--y-to:0px]"
      >
        <h3 className="text-center font-oxanium text-[20px] font-bold leading-[25px] sm:text-[24px] sm:leading-[30px] lg:text-[40px] lg:leading-[50px]">
          <span className="text-struct-3">{"{ "}</span>Parceiros
          <span className="text-struct-3">{" }"}</span>
        </h3>
      </motion.div>
      <div className="flex justify-center">
        <motion.div
          initial={{ opacity: "var(--opacity-from)", y: "var(--y-from)" }}
          whileInView={{ opacity: "var(--opacity-to)", y: "var(--y-to)" }}
          exit={{ opacity: "var(--opacity-from)", y: "var(--y-to)" }}
          transition={{ ease: "easeInOut", duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex max-w-[256px] flex-wrap gap-6 rounded-xl bg-fundo-3 p-6 [--opacity-from:1%] [--opacity-to:100%] [--y-from:75px] [--y-to:0px] sm:max-w-[464px] sm:gap-8 sm:p-8 lg:max-w-[896px]"
        >
          {partners?.map((partner) => (
            <Link
              key={partner.id}
              href={partner.link}
              target="_blank"
              className="delay-50 size-[92px] rounded-full bg-struct-7 transition ease-in-out  hover:scale-[1.03] hover:shadow-[0_0_20px_5px_rgba(0,0,0,0.2)] sm:size-28"
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
        </motion.div>
      </div>
    </>
  );
}
