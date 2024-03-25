"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaFacebookSquare, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function FindUs() {
  return (
    <>
      <motion.div
        initial={{ opacity: "var(--opacity-from)", y: "var(--y-from)" }}
        whileInView={{ opacity: "var(--opacity-to)", y: "var(--y-to)" }}
        exit={{ opacity: "var(--opacity-from)", y: "var(--y-to)" }}
        transition={{ ease: "easeInOut", duration: 1, delay: 0.4 }}
        viewport={{ once: true }}
        className="h-[332px] w-[280px] rounded-lg bg-fundo-0/75 p-4 [--opacity-from:1%] [--opacity-to:100%] [--y-from:75px] [--y-to:0px] sm:h-[598px] sm:w-[496px] sm:p-6"
      >
        {/* Título */}
        <h3 className="mb-3 text-center font-oxanium text-[14px] font-bold leading-[18px] sm:mb-6 sm:text-[32px] sm:leading-[40px]">
          Como nos encontrar
        </h3>
        <div className="flex flex-col justify-center rounded-lg">
          {/* Mapa */}
          <div className="z-10">
            <iframe
              className="h-[248px] w-[248px] border-none sm:h-[448px] sm:w-[448px]"
              loading="lazy"
              allowFullScreen
              src={`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ2eWshbo7WpMRyW_XzFV-Glc&key=${process.env.MAP_API_KEY}`}
            ></iframe>
          </div>
          {/* Redes Sociais */}
          <div className="relative bottom-6 z-20 mx-auto sm:bottom-11">
            <div className="flex justify-center gap-3 rounded-lg bg-fundo-2 p-3 sm:gap-5 sm:p-5">
              <Link
                href="https://www.facebook.com/StructUnB"
                target="_blank"
                className="rounded-lg bg-fundo-0 p-[6px] sm:p-3"
              >
                <FaFacebookSquare className="size-[16px] text-struct-7 transition ease-in-out hover:scale-[1.05] hover:text-struct-1 sm:size-[26px]" />
              </Link>
              <Link
                href="https://www.linkedin.com/company/struct-ej/"
                target="_blank"
                className="rounded-lg bg-fundo-0 p-[6px] sm:p-3"
              >
                <FaLinkedin className="size-[16px] text-struct-7 transition ease-in-out hover:scale-[1.05] hover:text-struct-1 sm:size-[26px]" />
              </Link>
              <Link
                href="https://www.instagram.com/structunb/"
                target="_blank"
                className="rounded-lg bg-fundo-0 p-[6px] sm:p-3"
              >
                <FaInstagram className="size-[16px] text-struct-7 transition ease-in-out hover:scale-[1.05] hover:text-struct-1 sm:size-[26px]" />
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
