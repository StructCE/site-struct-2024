"use client";
import { motion } from "framer-motion";

export function WhoWeAreBox({ children }: React.PropsWithChildren) {
  return (
    <motion.div
      initial={{ opacity: "var(--opacity-from)", y: "var(--y-from)" }}
      whileInView={{ opacity: "var(--opacity-to)", y: "var(--y-to)" }}
      exit={{ opacity: "var(--opacity-from)", y: "var(--y-to)" }}
      transition={{ ease: "easeInOut", duration: 1, delay: 0.2 }}
      viewport={{ once: true }}
      className=" flex w-[280px] flex-col rounded-2xl bg-fundo-1/50 [--opacity-from:1%] [--opacity-to:100%] [--y-from:75px] [--y-to:0px] sm:w-[580px] sm:justify-center lg:w-[1024px] lg:flex-row"
    >
      {children}
    </motion.div>
  );
}
