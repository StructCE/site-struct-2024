// import GoogleMap from "google-map-react";
import Link from "next/link";
import { FaFacebookSquare, FaInstagram, FaLinkedin } from "react-icons/fa";
import MapStruct from "./MapStruct/page";

export default function FindUs() {
  return (
    <>
      <div className="h-[346px] w-[280px] rounded-lg bg-fundo-2 p-4 sm:h-[598px] sm:w-[496px] sm:p-6">
        {/* Título */}
        <h3 className="mb-3 text-center font-oxanium text-[14px] font-bold leading-[18px] sm:mb-6 sm:text-[32px] sm:leading-[40px]">
          <span className="text-struct-3">{"{ "}</span>Como nos encontrar
          <span className="text-struct-3">{" }"}</span>
        </h3>
        <div className="flex flex-col justify-center rounded-lg">
          {/* Mapa */}
          <div className="z-10">
            <MapStruct />
          </div>
          {/* Redes Sociais */}
          <div className="relative bottom-6 z-20 mx-auto sm:bottom-12">
            <div className="flex justify-center gap-3 rounded-lg bg-fundo-3 p-3 sm:gap-6 sm:p-6">
              <Link
                href="https://www.facebook.com/StructUnB"
                target="_blank"
                className="rounded-lg bg-fundo-0 p-[6px] sm:p-3"
              >
                <FaFacebookSquare
                  className="size-[16px] sm:size-[26px]"
                  color="#f8f8ff"
                />
              </Link>
              <Link
                href="https://www.linkedin.com/company/struct-ej/"
                target="_blank"
                className="rounded-lg bg-fundo-0 p-[6px] sm:p-3"
              >
                <FaLinkedin
                  color="#f8f8ff"
                  className="size-[16px] sm:size-[26px]"
                />
              </Link>
              <Link
                href="https://www.instagram.com/structunb/"
                target="_blank"
                className="rounded-lg bg-fundo-0 p-[6px] sm:p-3"
              >
                <FaInstagram
                  className="size-[16px] sm:size-[26px]"
                  color="#f8f8ff"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
