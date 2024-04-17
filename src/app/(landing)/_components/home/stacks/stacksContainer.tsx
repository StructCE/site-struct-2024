"use client";
import { motion } from "framer-motion";

export function StacksContainer({ children }: React.PropsWithChildren) {
  return (
    <div className="flex w-full flex-col items-center sm:top-[360px]">
      <motion.div
        initial={{ opacity: "var(--opacity-from)", y: "var(--y-from)" }}
        whileInView={{ opacity: "var(--opacity-to)", y: "var(--y-to)" }}
        exit={{ opacity: "var(--opacity-from)", y: "var(--y-to)" }}
        transition={{ ease: "easeInOut", duration: 1.2, delay: 3.2 }}
        viewport={{ once: true }}
        className="mt-3 flex w-[280px] flex-wrap justify-around [--opacity-from:0%] [--opacity-to:100%] [--y-from:-75px] [--y-to:0px] sm:mt-6 sm:w-[600px] sm:gap-6 lg:mt-10 lg:w-[650px] lg:gap-12"
      >
        {children}
      </motion.div>
    </div>
  );
}
