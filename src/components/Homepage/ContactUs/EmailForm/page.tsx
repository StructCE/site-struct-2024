"use client";
import { motion } from "framer-motion";
import FormEmail from "./FormCard/page";

export default function EmailForm() {
  return (
    <>
      <motion.div
        initial={{ opacity: "var(--opacity-from)", y: "var(--y-from)" }}
        whileInView={{ opacity: "var(--opacity-to)", y: "var(--y-to)" }}
        exit={{ opacity: "var(--opacity-from)", y: "var(--y-to)" }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="h-[360px] w-[280px] rounded-lg bg-fundo-2 p-4 [--opacity-from:1%] [--opacity-to:100%] [--y-from:75px] [--y-to:0px] sm:h-[598px] sm:w-[496px] sm:p-6"
      >
        <h3 className="text-center font-oxanium text-[14px] font-bold leading-[18px] sm:text-[32px] sm:leading-[40px]">
          <span className="text-struct-3">{"{ "}</span>Peça um orçamento
          <span className="text-struct-3">{" }"}</span>
        </h3>
        <FormEmail />
      </motion.div>
    </>
  );
}
