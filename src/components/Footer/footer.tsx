import Link from "next/link";
import { FaFacebookSquare, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="absolute z-40 flex h-[96px] w-full items-center justify-center gap-4 bg-transparent text-struct-7 sm:justify-center sm:gap-10">
      <div className="font-oxanium text-[28px] font-bold sm:text-[36px]">
        <Link href="/">
          <span className="text-struct-2 ">{"{"}</span>
          <span className="hover:[text-shadow:_0_0_5px_rgb(255_255_255_/_40%)]">
            struct
          </span>
          <span className="text-struct-2">{"}"}</span>
        </Link>
      </div>
      <div className="flex flex-col gap-[6px]">
        <div className="flex justify-center gap-[20px]">
          <Link href="https://www.facebook.com/StructUnB" target="_blank">
            <FaFacebookSquare
              size={20}
              className="text-struct-7 transition ease-in-out hover:scale-[1.05] hover:text-struct-1"
            />
          </Link>
          <Link
            href="https://www.linkedin.com/company/struct-ej/"
            target="_blank"
          >
            <FaLinkedin
              size={20}
              className="text-struct-7 transition ease-in-out hover:scale-[1.05] hover:text-struct-1"
            />
          </Link>
          <Link href="https://www.instagram.com/structunb/" target="_blank">
            <FaInstagram
              size={20}
              className="text-struct-7 transition ease-in-out hover:scale-[1.05] hover:text-struct-1"
            />
          </Link>
        </div>
        <p className="text-center font-nunito text-[8px] sm:text-[10px]">
          Copyright © 2024 | Created by Us
        </p>
      </div>
    </footer>
  );
}
