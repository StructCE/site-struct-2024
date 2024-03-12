import Link from "next/link";
import { FaFacebookSquare, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="absolute z-40 flex h-[96px] w-full items-center justify-center gap-4 sm:gap-10 bg-transparent text-struct-7 sm:justify-center">
      <div className="font-oxanium font-bold sm:text-[36px] text-[28px]">
        <Link href="/">
          <span className="text-struct-2 ">{"{"}</span>
            struct
          <span className="text-struct-2">{"}"}</span>
        </Link>
      </div>
      <div className="flex flex-col gap-[6px]">
        <div className="flex justify-center gap-[20px]">
          <Link href="https://www.facebook.com/StructUnB" target="_blank">
            <FaFacebookSquare size={20} />
          </Link>
          <Link href="https://www.linkedin.com/company/struct-ej/" target="_blank">
            <FaLinkedin size={20} />
          </Link>
          <Link href="https://www.instagram.com/structunb/" target="_blank">
            <FaInstagram size={20} />
          </Link>
        </div>
        <p className="text-center text-[8px] sm:text-[10px] font-nunito">
          Copyright © 2024 | Created by Us
        </p>
      </div>
    </footer>
  );
}
