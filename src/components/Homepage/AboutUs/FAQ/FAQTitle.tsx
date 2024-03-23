"use client";
import { motion } from "framer-motion";

export function FAQTitle() {
  return (
    <motion.h2
      initial={{ opacity: "var(--opacity-from)", y: "var(--y-from)" }}
      whileInView={{ opacity: "var(--opacity-to)", y: "var(--y-to)" }}
      exit={{ opacity: "var(--opacity-from)", y: "var(--y-to)" }}
      transition={{ ease: "easeInOut", duration: 1, delay: 0 }}
      viewport={{ once: true }}
      className="font-oxanium text-[24px] font-bold leading-[30px] [--opacity-from:1%] [--opacity-to:100%] [--y-from:75px] [--y-to:0px] sm:text-[32px] sm:leading-[48px] lg:text-[48px] lg:leading-[60px]"
    >
      F.A.Q
    </motion.h2>
  );
}
