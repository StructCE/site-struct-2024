"use client";
import { MenuIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";

export default function Navbar() {
  const [scrollvalue, setScrollValue] = useState<number>(0);
  const [navbaropen, setNavbaropen] = useState<boolean>(false);
  useEffect(() => {
    function updatescrollvalue() {
      setScrollValue(window.scrollY);
    }
    window.addEventListener("scroll", updatescrollvalue);
    return () => {
      window.removeEventListener("scroll", updatescrollvalue);
    };
  }, []);

  const router = useRouter();

  return (
    <nav
      className={`fixed z-40 flex w-full items-center justify-center transition-all ease-in ${scrollvalue > 0 && "h-[64px] bg-fundo-transparente/80"} ${scrollvalue == 0 && " h-[96px]"} ${scrollvalue > 0 && navbaropen && "bg-fundo-transparente/0"} `}
    >
      <ul className="hidden items-center gap-[4vw] font-oxanium text-[20px] text-xl font-semibold text-struct-7 sm:flex">
        <li className="text-[36px] font-bold text-struct-7">
          <Link
            to="home"
            className="cursor-pointer"
            spy={true}
            smooth={true}
            duration={700}
            onClick={() => router.push("/#home")}
          >
            <span className="text-struct-2">{"{"}</span>
            <span className="hover:[text-shadow:_0_0_5px_rgb(255_255_255_/_40%)]">
              struct
            </span>
            <span className="text-struct-2">{"}"}</span>
          </Link>
        </li>
        <li>
          <Link
            className="cursor-pointer transition delay-75 ease-in hover:text-struct-1"
            to="servicos"
            spy={true}
            smooth={true}
            offset={50}
            duration={700}
            onClick={() => router.push("/#servicos")}
          >
            Serviços
          </Link>
        </li>
        <li>
          <Link
            className="cursor-pointer transition delay-75 ease-in hover:text-struct-1"
            to="portfolio"
            spy={true}
            smooth={true}
            offset={0}
            duration={700}
            onClick={() => router.push("/#portfolio")}
          >
            Portifólio
          </Link>
        </li>
        <li>
          <Link
            className="cursor-pointer transition delay-75 ease-in hover:text-struct-1"
            to="sobrenos"
            spy={true}
            smooth={true}
            offset={50}
            duration={700}
            onClick={() => router.push("/#sobrenos")}
          >
            Sobre nós
          </Link>
        </li>
        <li>
          <Link
            className="cursor-pointer transition delay-75 ease-in hover:text-struct-1"
            to="contato"
            spy={true}
            smooth={true}
            offset={50}
            duration={700}
            onClick={() => router.push("/#contato")}
          >
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
            <div className="ml-6 text-[36px] text-struct-7">
              <Link
                to="home"
                className="cursor-pointer"
                spy={true}
                smooth={true}
                duration={700}
                onClick={() => router.push("/#home")}
              >
                <span className="text-struct-2">{"{"}</span>
                <span className="transition delay-75 ease-in-out hover:[text-shadow:_0_0_5px_rgb(255_255_255_/_40%)]">
                  struct
                </span>
                <span className="text-struct-2">{"}"}</span>
              </Link>
            </div>
            <AccordionTrigger
              className="mr-6 text-struct-7"
              onClick={() => setNavbaropen(true)}
            >
              <MenuIcon size={42} />
            </AccordionTrigger>
          </div>
          <AccordionContent className="w-full bg-fundo-transparente/60">
            <ul className="flex flex-col items-center font-oxanium text-[14px] font-semibold text-struct-7">
              <li className="text-[28px] font-bold text-struct-7">
                <Link
                  to="home"
                  className="cursor-pointer"
                  spy={true}
                  smooth={true}
                  duration={700}
                  onClick={() => router.push("/#home")}
                >
                  <span className="text-struct-2">{"{"}</span>
                  <span className="transition delay-75 ease-in-out hover:[text-shadow:_0_0_5px_rgb(255_255_255_/_40%)]">
                    struct
                  </span>
                  <span className="text-struct-2">{"}"}</span>
                </Link>
              </li>
              <li className="mt-4">
                <Link
                  className="cursor-pointer transition delay-75 ease-in-out hover:text-struct-1"
                  to="servicos"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={700}
                  onClick={() => router.push("/#servicos")}
                >
                  Serviços
                </Link>
              </li>
              <li className="mt-4">
                <Link
                  className="cursor-pointer transition delay-75 ease-in-out hover:text-struct-1"
                  to="portfolio"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={700}
                  onClick={() => router.push("/#portfolio")}
                >
                  Portifólio
                </Link>
              </li>
              <li className="mt-4">
                <Link
                  className="cursor-pointer transition delay-75 ease-in-out hover:text-struct-1"
                  to="sobrenos"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={700}
                  onClick={() => router.push("/#sobrenos")}
                >
                  Sobre nós
                </Link>
              </li>
              <li className="mt-4">
                <Link
                  className="cursor-pointer transition delay-75 ease-in-out hover:text-struct-1"
                  to="contato"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={700}
                  onClick={() => router.push("/#contato")}
                >
                  Contato
                </Link>
              </li>
              <li className="mt-2">
                <AccordionTrigger
                  className="text-struct-7"
                  onClick={() => setNavbaropen(false)}
                ></AccordionTrigger>
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </nav>
  );
}
