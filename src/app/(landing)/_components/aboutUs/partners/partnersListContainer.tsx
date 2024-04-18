"use client";
import { motion } from "framer-motion";

export function PartnersListContainer({ children }: React.PropsWithChildren) {
  return (
    <motion.div
      initial={{ opacity: "var(--opacity-from)", y: "var(--y-from)" }}
      whileInView={{ opacity: "var(--opacity-to)", y: "var(--y-to)" }}
      exit={{ opacity: "var(--opacity-from)", y: "var(--y-to)" }}
      transition={{ ease: "easeInOut", duration: 1, delay: 0.2 }}
      viewport={{ once: true }}
      className="flex max-w-[256px] flex-wrap justify-center gap-6 rounded-xl px-6 [--opacity-from:1%] [--opacity-to:100%] [--y-from:75px] [--y-to:0px] sm:max-w-[464px] sm:gap-8 sm:px-8 lg:max-w-[896px]"
    >
      {children}
    </motion.div>
  );
}
