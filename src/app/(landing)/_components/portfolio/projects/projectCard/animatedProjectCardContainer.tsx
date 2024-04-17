"use client";
import { motion } from "framer-motion";

export function AnimatedProjectCardContainer({
  children,
}: React.PropsWithChildren) {
  return (
    <motion.div
      initial={{
        opacity: "var(--opacity-from)",
        y: "var(--y-from)",
      }}
      whileInView={{
        opacity: "var(--opacity-to)",
        y: "var(--y-to)",
      }}
      exit={{ opacity: "var(--opacity-from)", y: "var(--y-to)" }}
      transition={{ ease: "easeInOut", duration: 1, delay: 0.2 }}
      viewport={{ once: true }}
      className="text-lg [--opacity-from:1%] [--opacity-to:100%] [--y-from:75px] [--y-to:0px]"
    >
      <div className="relative mx-4 my-2 items-center justify-center transition delay-75 ease-in hover:scale-[1.02] hover:shadow-[0_0_40px_10px_rgba(0,0,0,0.2)] sm:m-3 lg:m-5">
        {children}
      </div>
    </motion.div>
  );
}
