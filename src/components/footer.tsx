import { Instagram, Facebook, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="absolute -bottom-10 z-50 flex h-24 w-full items-center justify-between bg-transparent px-6 text-[#F8F8FF] sm:justify-center sm:gap-[2vw]">
      <div className="-mt-3 flex-col  justify-center  text-3xl">
        <span className="text-[#2DA2FF] ">{"{"}</span>
        <a href="">Struct</a>
        <span className="text-[#2DA2FF]">{"}"}</span>
      </div>
      <div className="">
        <div className="flex justify-center gap-[1vw]">
          <a href="" className="">
            <Instagram size={18} />
          </a>
          <a href="" className="">
            <Facebook size={18} />
          </a>
          <a href="">
            <Linkedin size={18} />
          </a>
          <a href="">
            <Mail size={18} />
          </a>
        </div>
        <p className="flex justify-center text-[7.5px]">
          Copyright © 2024 | Created by Us
        </p>
      </div>
    </footer>
  );
}
