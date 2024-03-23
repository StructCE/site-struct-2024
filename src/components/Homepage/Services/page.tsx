"use client";
import { motion } from "framer-motion";
import ServicesCards from "./ServicesCards/page";

export default function Services() {
  return (
    <>
      <section
        id="servicos"
        className="m-0 flex w-full items-center justify-center p-0"
      >
        <div className="w-full pb-16 pt-8 sm:pb-32 sm:pt-16 lg:pb-64 lg:pt-32">
          {/* titulo */}
          <motion.div
            initial={{ opacity: "var(--opacity-from)", y: "var(--y-from)" }}
            whileInView={{ opacity: "var(--opacity-to)", y: "var(--y-to)" }}
            exit={{ opacity: "var(--opacity-from)", y: "var(--y-to)" }}
            transition={{ duration: 1, delay: 0 }}
            viewport={{ once: true }}
            className="[--opacity-from:1%] [--opacity-to:100%] [--y-from:75px] [--y-to:0px]"
          >
            <div className="flex flex-col items-center justify-center">
              <h2 className="text-center font-oxanium text-[24px] font-bold leading-[30px] sm:text-[32px] sm:leading-[48px] lg:text-[48px] lg:leading-[60px]">
                Serviços
              </h2>
              <p className="my-1 w-[20px] border-b-2 border-struct-1 sm:my-2 sm:w-[52px] lg:my-4 lg:w-[84px]"></p>
              <p className="text-center font-nunito text-[12px] max-sm:w-[280px] sm:text-[14px] lg:text-[16px]">
                Conheça como podemos transformar seu{" "}
                <span className="font-oxanium font-bold">sonho</span> em{" "}
                <span className="font-oxanium font-bold">realidade</span>!
              </p>
            </div>
          </motion.div>
          {/* caixas */}
          <div className="my-6 flex flex-wrap justify-center gap-4 font-nunito sm:m-8 sm:gap-6 lg:gap-8">
            <ServicesCards />
          </div>
        </div>
      </section>
    </>
  );
}
