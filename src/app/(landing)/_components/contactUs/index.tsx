"use client";
import { motion } from "framer-motion";
import { EmailForm } from "./emailForm";
import { FindUs } from "./findUs";

export function ContactUs() {
  return (
    <section
      className="m-0 mb-12 flex w-full skew-y-3 items-center justify-center bg-gradient-to-br from-fundo-3 to-fundo-0 py-16 lg:h-[1000px] lg:py-0"
      id="contato"
    >
      <div className="flex w-full -skew-y-3 flex-col items-center justify-center gap-8 ">
        <motion.div
          initial={{ opacity: "var(--opacity-from)", y: "var(--y-from)" }}
          whileInView={{ opacity: "var(--opacity-to)", y: "var(--y-to)" }}
          exit={{ opacity: "var(--opacity-from)", y: "var(--y-to)" }}
          transition={{ ease: "easeInOut", duration: 1, delay: 0 }}
          viewport={{ once: true }}
          className="[--opacity-from:1%] [--opacity-to:100%] [--y-from:75px] [--y-to:0px]"
        >
          <h2 className="text-center font-oxanium text-[24px] font-bold leading-[30px] sm:text-[32px] sm:leading-[48px] lg:text-[48px] lg:leading-[60px]">
            Contato
          </h2>
        </motion.div>
        <div className="flex flex-col items-center justify-center gap-8 lg:flex-row">
          <EmailForm />
          <FindUs />
        </div>
      </div>
    </section>
  );
}
