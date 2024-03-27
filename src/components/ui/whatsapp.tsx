"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import CloudinaryImg from "./cloudinaryImage";

export default function WhatsappLogo() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 100, x: 0 }}
        transition={{ ease: "easeInOut", duration: 1, delay: 5 }}
        viewport={{ once: true }}
        className="fixed bottom-7 right-3"
      >
        <Link href="https://wa.me/556190000093" target="_blank">
          <CloudinaryImg
            src="whatsapp_logo"
            alt="whatsapp"
            width={70}
            height={70}
          ></CloudinaryImg>
        </Link>
      </motion.div>
    </>
  );
}
