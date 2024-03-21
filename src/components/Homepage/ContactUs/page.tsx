"use client";
import { motion } from "framer-motion";
import EmailForm from "./EmailForm/page";
import FindUs from "./FindUs/page";

export default function ContactUs() {
  return (
    <>
      <section
        className="m-0 flex w-full flex-col items-center justify-center gap-8 py-16 sm:p-0 sm:py-0 lg:h-[1000px]"
        id="contato"
      >
        <motion.div
          initial={{ opacity: "var(--opacity-from)", y: "var(--y-from)" }}
          whileInView={{ opacity: "var(--opacity-to)", y: "var(--y-to)" }}
          exit={{ opacity: "var(--opacity-from)", y: "var(--y-to)" }}
          transition={{ ease: "easeInOut", duration: 1, delay: 0 }}
          viewport={{ once: true }}
          className="[--opacity-from:1%] [--opacity-to:100%] [--y-from:75px] [--y-to:0px]"
        >
          <h2 className="text-center font-oxanium text-[24px] font-bold leading-[30px] sm:text-[32px] sm:leading-[48px] lg:text-[48px] lg:leading-[60px]">
            <span className="text-struct-3">{"{ "}</span>Contato
            <span className="text-struct-3">{" }"}</span>
          </h2>
        </motion.div>
        <div className="flex flex-col items-center justify-center gap-8 lg:flex-row">
          <EmailForm />
          <FindUs />
        </div>
      </section>
    </>
  );
}
