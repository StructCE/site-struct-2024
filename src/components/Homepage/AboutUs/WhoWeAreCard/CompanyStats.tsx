"use client";
import { motion } from "framer-motion";
import { useSpringValue } from "~/hooks/useSpringValue";

export function CompanyInformationStatistic({
  statistic,
}: {
  statistic: number;
}) {
  const { ref, springValue } = useSpringValue(statistic);

  return (
    <p className="flex w-[64px] flex-col text-center sm:w-[130px]">
      <motion.span
        ref={ref}
        className="font-oxanium text-[48px] font-semibold leading-[45px] text-struct-1 sm:text-[96px] sm:leading-[90px]"
      >
        {springValue}
      </motion.span>{" "}
      projetos concluídos
    </p>
  );
}
