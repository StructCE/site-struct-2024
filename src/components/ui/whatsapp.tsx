"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsappLogo() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 100, x: 0 }}
        transition={{ ease: "easeInOut", duration: 1.5, delay: 5 }}
        viewport={{ once: true }}
        className="fixed bottom-[22px] right-3 z-50 max-sm:hidden"
      >
        <Link href="https://wa.me/556190000093" target="_blank">
          <FaWhatsapp className="text-[#00a859] transition delay-75 ease-in-out hover:text-[#00c307] sm:h-[44px] sm:w-[44px] lg:h-[58px] lg:w-[58px]" />
        </Link>
      </motion.div>
    </>
  );
}
