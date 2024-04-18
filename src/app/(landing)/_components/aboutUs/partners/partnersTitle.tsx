"use client";
import { motion } from "framer-motion";

export function PartnersTitle() {
  return (
    <motion.h3
      initial={{ opacity: "var(--opacity-from)", y: "var(--y-from)" }}
      whileInView={{ opacity: "var(--opacity-to)", y: "var(--y-to)" }}
      exit={{ opacity: "var(--opacity-from)", y: "var(--y-to)" }}
      transition={{ ease: "easeInOut", duration: 1, delay: 0 }}
      viewport={{ once: true }}
      className="text-center font-oxanium text-[20px] font-bold leading-[25px] [--opacity-from:1%] [--opacity-to:100%] [--y-from:75px] [--y-to:0px] sm:text-[24px] sm:leading-[30px] lg:text-[40px] lg:leading-[50px]"
    >
      Parceiros
    </motion.h3>
  );
}
