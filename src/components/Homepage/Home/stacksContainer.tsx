"use client";
import { motion } from "framer-motion";
import CloudinaryImg from "~/components/ui/cloudinaryImage";

export function StacksContainer({ children }: React.PropsWithChildren) {
  return (
    <div className="flex w-full flex-col items-center sm:top-[360px]">
      <motion.div
        initial={{ opacity: "var(--opacity-from)", y: "var(--y-from)" }}
        whileInView={{ opacity: "var(--opacity-to)", y: "var(--y-to)" }}
        exit={{ opacity: "var(--opacity-from)", y: "var(--y-to)" }}
        transition={{ ease: "easeInOut", duration: 1, delay: 5 }}
        viewport={{ once: true }}
        className="mt-3 flex w-[280px] flex-wrap justify-around [--opacity-from:0%] [--opacity-to:100%] [--y-from:-75px] [--y-to:0px] sm:mt-6 sm:w-[600px] sm:gap-8 lg:mt-10 lg:w-[750px] lg:gap-14"
      >
        {children}
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 100 }}
        transition={{ ease: "easeInOut", duration: 1, delay: 4.5 }}
        viewport={{ once: true }}
        className="flex w-full flex-col items-center"
      >
        <CloudinaryImg
          src="light-effect_avcltf"
          alt="base portal"
          width={600}
          height={600}
          draggable={false}
          quality={100}
          className="absolute top-[300px] select-none "
        />
      </motion.div>
    </div>
  );
}
