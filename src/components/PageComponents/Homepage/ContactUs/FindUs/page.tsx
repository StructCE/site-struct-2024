// import GoogleMap from "google-map-react";
import Link from "next/link";
import { FaFacebookSquare, FaInstagram, FaLinkedin } from "react-icons/fa";
import MapStruct from "./MapStruct/page";

export default function FindUs() {
  return (
    <>
      <div className="h-[598px] w-[496px] rounded-lg bg-fundo-2 p-6">
        {/* Título */}
        <h3 className="mb-6 text-center font-oxanium text-[14px] font-bold leading-[18px] sm:text-[32px] sm:leading-[40px]">
          <span className="text-struct-3">{"{ "}</span>Como nos encontrar
          <span className="text-struct-3">{" }"}</span>
        </h3>
        <div className="flex flex-col justify-center rounded-lg">
          {/* Mapa */}
          <div className="z-10">
            <MapStruct />
          </div>
          {/* Redes Sociais */}
          <div className="relative bottom-12 z-20 mx-auto">
            <div className="flex justify-center gap-6 rounded-lg bg-fundo-3 p-6">
              <Link
                href="https://www.facebook.com/StructUnB"
                target="_blank"
                className="rounded-lg bg-fundo-0 p-3"
              >
                <FaFacebookSquare size={26} color="#f8f8ff" />
              </Link>
              <Link
                href="https://www.linkedin.com/company/struct-ej/"
                target="_blank"
                className="rounded-lg bg-fundo-0 p-3"
              >
                <FaLinkedin size={26} color="#f8f8ff" />
              </Link>
              <Link
                href="https://www.instagram.com/structunb/"
                target="_blank"
                className="rounded-lg bg-fundo-0 p-3"
              >
                <FaInstagram size={26} color="#f8f8ff" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
