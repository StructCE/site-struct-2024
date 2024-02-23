"use client";
import { motion } from "framer-motion";
import { Rocket } from "lucide-react";
import { CldImage } from "next-cloudinary";

export default function Home() {
  return (
    <>
      <div className="m-5 flex h-[100rem] flex-col items-center">
        <div className="flex">
          <CldImage
            alt="Imagem"
            src="avatar_transparente_tiomyt"
            width={300}
            height={300}
          />
          <Rocket width={200} height={200} className="m-12" />
        </div>
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-7xl"
        >
          {"{struct}"}
        </motion.h1>
      </div>
    </>
  );
}
