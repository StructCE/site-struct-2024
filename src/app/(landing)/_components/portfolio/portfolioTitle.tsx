"use client";
import { motion } from "framer-motion";

export function PortfolioTitle() {
  return (
    <motion.div
      initial={{ opacity: "var(--opacity-from)", y: "var(--y-from)" }}
      whileInView={{ opacity: "var(--opacity-to)", y: "var(--y-to)" }}
      exit={{ opacity: "var(--opacity-from)", y: "var(--y-to)" }}
      transition={{ ease: "easeInOut", duration: 1, delay: 0 }}
      viewport={{ once: true }}
      className="mb-3 flex flex-col items-center justify-center [--opacity-from:1%] [--opacity-to:100%] [--y-from:75px] [--y-to:0px] sm:mb-4"
    >
      <h2 className="text-center font-oxanium text-[24px] font-bold leading-[30px] sm:text-[32px] sm:leading-[48px] lg:text-[48px] lg:leading-[60px]">
        Portfólio
      </h2>
      <p className="my-1 w-[20px] border-b-2 border-struct-1 sm:my-2 sm:w-[52px] lg:my-4 lg:w-[84px]"></p>
      <p className="font-nunito text-[12px] sm:text-[14px] lg:text-[16px]">
        Explore alguns dos nossos projetos!
      </p>
    </motion.div>
  );
}
