"use client";
import { motion } from "framer-motion";

export function ProjectCard({ children }: React.PropsWithChildren) {
  return (
    <motion.div
      initial={{
        opacity: "var(--opacity-from)",
        y: "var(--y-from)",
      }}
      whileInView={{
        opacity: "var(--opacity-to)",
        y: "var(--y-to)",
        transition: { ease: "easeInOut", duration: 1, delay: 0.2 },
      }}
      viewport={{ once: true }}
      whileHover={{
        scale: 1.02,
        shadow: "0_0_40px_10px_rgba(0,0,0,0.2)",
        transition: { ease: "easeInOut", duration: 0.25, delay: 0 },
      }}
      className="relative mx-4 my-2 items-center justify-center text-lg [--opacity-from:1%] [--opacity-to:100%] [--y-from:75px] [--y-to:0px] sm:m-3 lg:m-5"
    >
      {children}
    </motion.div>
  );
}
