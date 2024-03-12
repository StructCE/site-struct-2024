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
  const [navbaropen, setNavbaropen] = useState<boolean>(false);
  console.log(navbaropen)
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
      className={`fixed z-40 flex w-full justify-center items-center transition-all ease-in ${scrollvalue > 0 && "bg-fundo-transparente/60 h-[64px]"} ${scrollvalue == 0 && " h-[96px]"} ${scrollvalue > 0 && navbaropen && "bg-fundo-transparente/0"} `}
    >
      <ul className="hidden items-center gap-[4vw] text-xl text-struct-7 sm:flex font-oxanium font-semibold text-[20px]">
        <li className="text-[36px] text-struct-7 font-bold">
          <Link href="/">
            <span className="text-struct-2">{"{"}</span>
              struct
            <span className="text-struct-2">{"}"}</span>
          </Link>
        </li>
        <li>
          <Link className="hover:text-struct-1 transition delay-75 ease-in-out" href="#servicos">
            Serviços
          </Link>
        </li>
        <li>
          <Link className="hover:text-struct-1 transition delay-75 ease-in-out" href="#portfolio">
            Portifólio
          </Link>
        </li>
        <li>
          <Link className="hover:text-struct-1 transition delay-75 ease-in-out" href="#sobrenos">
            Sobre nós
          </Link>
        </li>
        <li>
          <Link className="hover:text-struct-1 transition delay-75 ease-in-out" href="#contato">
            Contato
          </Link>
        </li>
      </ul>
      <Accordion
        className="flex w-full justify-between border-none sm:hidden"
        type="single"
        collapsible
      >
        <AccordionItem className="w-full border-none" value="menu">
          <div className="flex items-center justify-between font-oxanium font-bold">
            <div className="text-[36px] text-struct-7 ml-6">
              <Link href="/">
                <span className="text-struct-2">{"{"}</span>
                  struct
                <span className="text-struct-2">{"}"}</span>
              </Link>
            </div>
            <AccordionTrigger className="text-struct-7 mr-6" onClick={() => setNavbaropen(true)}>
              <MenuIcon size={42} />
            </AccordionTrigger>
          </div>
          <AccordionContent className="w-full bg-fundo-transparente/60">
            <ul className="flex flex-col items-center text-[14px] text-struct-7 font-oxanium font-semibold">
              <li className="text-[28px] text-struct-7 font-bold">
                <Link href="/">
                  <span className="text-struct-2">{"{"}</span>
                    struct
                  <span className="text-struct-2">{"}"}</span>
                </Link>
              </li>
              <li className="mt-4">
                <Link href="#servicos">
                  Serviços
                </Link>
              </li>
              <li className="mt-4">
                <Link href="portfolio">
                  Portifólio
                </Link>
              </li>
              <li className="mt-4">
                <Link href="#sobrenos">
                  Sobre nós
                </Link>
              </li>
              <li className="mt-4">
                <Link href="#contato">
                  Contato
                </Link>
              </li>
              <li className="mt-2">
                <AccordionTrigger className="text-struct-7" onClick={() => setNavbaropen(false)}>
                </AccordionTrigger>
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </nav>
  );
}
