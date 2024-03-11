"use client";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";

export default function Navbar() {
  const [scrollvalue, setScrollValue] = useState<number>(0);
  useEffect(() => {
    function updatescrollvalue() {
      setScrollValue(window.scrollY);
    }
    window.addEventListener("scroll", updatescrollvalue);
    return () => {
      window.removeEventListener("scroll", updatescrollvalue);
    };
  }, []);

  return (
    <nav
      className={`fixed z-40 flex w-full  justify-center py-0.5 transition-all ease-in sm:py-4 ${scrollvalue > 0 && "bg-[#252E3C]/60 sm:py-2"}`}
    >
      <ul className="hidden items-center gap-[4vw] text-xl text-[#F8F8FF] sm:flex">
        <li className="text-2xl text-[#F8F8FF] ">
          <span className="text-[#2DA2FF]">{"{"}</span>
          <Link href="">Struct</Link>
          <span className="text-[#2DA2FF]">{"}"}</span>
        </li>
        <li>
          <Link className=" hover:text-[#071944] " href="">
            Serviços
          </Link>
        </li>
        <li>
          <Link className=" hover:text-[#071944] " href="">
            Portifólio
          </Link>
        </li>
        <li>
          <Link className=" hover:text-[#071944] " href="">
            Sobre nós
          </Link>
        </li>
        <li>
          <Link className=" hover:text-[#071944] " href="">
            Contato
          </Link>
        </li>
      </ul>
      <Accordion
        className="flex w-full justify-between border-none bg-inherit px-6 sm:hidden"
        type="single"
        collapsible
      >
        <AccordionItem className="  w-full border-none" value="menu">
          <div className="flex items-center justify-between">
            <div className="text-[34px] text-[#F8F8FF] ">
              <span className="text-[#2DA2FF]">{"{"}</span>
              <Link href="">Struct</Link>
              <span className="text-[#2DA2FF]">{"}"}</span>
            </div>
            <AccordionTrigger className="text-white">
              <MenuIcon size={42} />
            </AccordionTrigger>
          </div>
          <AccordionContent className="-mt-[34px] w-full">
            <ul className="flex flex-col items-center gap-4 py-[34px] text-xl text-[#F8F8FF]">
              <li>
                <Link className="  " href="">
                  Serviços
                </Link>
              </li>
              <li>
                <Link className="  " href="">
                  Portifólio
                </Link>
              </li>
              <li>
                <Link className="  " href="">
                  Sobre nós
                </Link>
              </li>
              <li>
                <Link className="  " href="">
                  Contato
                </Link>
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </nav>
  );
}
