"use client";
import { motion } from "framer-motion";
import { MenuIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { LuSun } from "react-icons/lu";
import { RiMoonClearLine } from "react-icons/ri";
import { Link } from "react-scroll";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import { useScrolValue } from "~/hooks/useScrollNavbar";
import { Button } from "../ui/button";

export default function Navbar() {
  const [navbaropen, setNavbaropen] = useState<boolean>(false);
  const scrollValue = useScrolValue();
  const router = useRouter();

  const [theme, setTheme] = useState<string>("dark");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <nav
      className={`fixed z-40 flex w-full items-center justify-center transition-all ease-in ${scrollValue > 80 && "h-[64px] bg-fundo-transparente/80"} ${scrollValue <= 80 && " h-[96px]"} ${scrollValue > 80 && navbaropen && "bg-fundo-transparente/0"} `}
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
        <li>
          <motion.div
            animate={theme === "dark" ? "moon" : "sun"}
            variants={{
              sun: { rotateY: 0, transition: { duration: 0.6 } },
              moon: { rotateY: 180, transition: { duration: 0.6 } },
            }}
          >
            {theme === "dark" ? (
              <Button
                className="cursor-pointer rounded-full bg-fundo-1/25 p-2 transition delay-150 ease-in-out hover:bg-fundo-1/25"
                onClick={handleThemeSwitch}
              >
                <LuSun className="h-[24px] w-[24px] text-struct-7 transition ease-in-out hover:text-struct-1" />
              </Button>
            ) : (
              <Button
                className="cursor-pointer rounded-full bg-fundo-1/25 p-2 transition delay-150 ease-in-out hover:bg-fundo-1/25"
                onClick={handleThemeSwitch}
              >
                <RiMoonClearLine className="h-[24px] w-[24px] text-struct-7 transition ease-in-out hover:text-struct-2" />
              </Button>
            )}
          </motion.div>
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
