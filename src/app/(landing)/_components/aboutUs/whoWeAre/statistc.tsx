"use client";
import { motion } from "framer-motion";
import { useSpringValue } from "~/hooks/useSpringValue";

export function Statistic({
  number,
  description,
}: {
  number: number;
  description: string;
}) {
  const { ref, springValue } = useSpringValue(number);

  return (
    <p className="flex w-[64px] flex-col text-center sm:w-[130px]">
      <motion.span
        ref={ref}
        className="font-oxanium text-[48px] font-semibold leading-[45px] text-struct-1 sm:text-[96px] sm:leading-[90px]"
      >
        {springValue}
      </motion.span>{" "}
      {description}
    </p>
  );
}
