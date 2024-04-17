"use client";
import { motion } from "framer-motion";
import CloudinaryImg from "~/components/app/cloudinaryImage";

export function AnimatedLight() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 100 }}
      transition={{ ease: "easeInOut", duration: 1, delay: 5.5 }}
      viewport={{ once: true }}
      className="absolute top-[250px] flex w-[280px] items-center justify-center sm:w-[600px] lg:w-[750px]"
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
  );
}
