"use client";
import { motion } from "framer-motion";
import FormEmail from "./formCard";

export function EmailForm() {
  return (
    <>
      <motion.div
        initial={{ opacity: "var(--opacity-from)", y: "var(--y-from)" }}
        whileInView={{ opacity: "var(--opacity-to)", y: "var(--y-to)" }}
        exit={{ opacity: "var(--opacity-from)", y: "var(--y-to)" }}
        transition={{ ease: "easeInOut", duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
        className="h-[360px] w-[280px] rounded-lg bg-fundo-0/75 p-4 [--opacity-from:1%] [--opacity-to:100%] [--y-from:75px] [--y-to:0px] sm:h-[598px] sm:w-[496px] sm:p-6"
      >
        <h3 className="text-center font-oxanium text-[14px] font-bold leading-[18px] sm:text-[32px] sm:leading-[40px]">
          Peça um orçamento
        </h3>
        <FormEmail />
      </motion.div>
    </>
  );
}
