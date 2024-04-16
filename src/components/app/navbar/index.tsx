"use client";
import { MenuIcon } from "lucide-react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Link } from "react-scroll";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import { useScrollProgress } from "~/hooks/useScrollNavbar";

export function Navbar() {
  const [navbaropen, setNavbaropen] = useState<boolean>(false);
  const scrollProgress = useScrollProgress();
  const router = useRouter();
  const { data: session } = useSession();

  return (
    <nav
      className={`fixed z-40 flex w-screen items-center justify-center transition-all ease-in ${scrollProgress > 1 && "h-[72px] bg-fundo-transparente/80 backdrop-blur-sm"} ${scrollProgress <= 1 && " h-[96px]"} ${scrollProgress > 1 && navbaropen && "bg-fundo-transparente/0"}`}
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
            offset={0}
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
            offset={50}
            duration={700}
            onClick={() => router.push("/#portfolio")}
          >
            Portfólio
          </Link>
        </li>
        <li>
          <Link
            className="cursor-pointer transition delay-75 ease-in hover:text-struct-1"
            to="sobrenos"
            spy={true}
            smooth={true}
            offset={-10}
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
            offset={100}
            duration={700}
            onClick={() => router.push("/#contato")}
          >
            Contato
          </Link>
        </li>
        {session?.user ? (
          <li>
            <Link
              className="cursor-pointer font-bold text-struct-3 transition delay-75 ease-in hover:text-struct-1"
              to="dashboard"
              spy={true}
              smooth={true}
              offset={50}
              duration={700}
              onClick={() => router.push("/dashboard")}
            >
              Admin
            </Link>
          </li>
        ) : (
          <></>
        )}
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
                  offset={-100}
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
                  offset={50}
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
                  offset={-10}
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
                  offset={100}
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
      {!navbaropen && (
        <div
          style={{ width: `${scrollProgress > 1 ? scrollProgress : 0}%` }}
          className="transition-width absolute bottom-0 left-0 z-50 h-1 w-full bg-struct-7/30 duration-75 ease-in-out"
        ></div>
      )}
    </nav>
  );
}
