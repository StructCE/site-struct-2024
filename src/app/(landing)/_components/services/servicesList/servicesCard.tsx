"use client";
import { motion } from "framer-motion";
import React from "react";
import { cn } from "~/lib/utils";

function ServiceCardHeader({ children }: React.PropsWithChildren) {
  return (
    <div className="mx-5 mb-1 mt-3 flex sm:mx-5 sm:mb-1.5 sm:mt-5 lg:mx-6 lg:mb-2 lg:mt-6">
      {children}
    </div>
  );
}

function ServiceCardHeaderIcon({
  children,
}: {
  children: React.ReactElement<{ className?: string }>;
}) {
  const updatedChildren = React.cloneElement(children, {
    ...children.props,
    className: cn(
      "mx-1.5 my-1.5 h-[18px] w-[18px] text-struct-7 transition ease-in-out hover:scale-[1.04] hover:text-struct-1 sm:mx-1.5 sm:my-2 sm:h-[24px] sm:w-[24px] lg:mx-1.5 lg:my-[11px] lg:mr-2 lg:h-[28px] lg:w-[28px]",
      children.props.className,
    ),
  });

  return updatedChildren;
}

function ServiceCardHeaderTitle({ children }: { children: string }) {
  return (
    <h3 className="text-[18px] font-bold sm:text-[26px] lg:text-[32px]">
      {children}
    </h3>
  );
}

function ServiceCardDescription({ children }: { children: string }) {
  return (
    <p className="mx-6 text-[11px] sm:mx-7 sm:text-sm lg:mx-8">{children}</p>
  );
}

function ServiceCard({ children }: React.PropsWithChildren) {
  return (
    <motion.div
      initial={{ opacity: "var(--opacity-from)", y: "var(--y-from)" }}
      whileInView={{ opacity: "var(--opacity-to)", y: "var(--y-to)" }}
      exit={{ opacity: "var(--opacity-from)", y: "var(--y-to)" }}
      transition={{ duration: 1, delay: 0.3 }}
      viewport={{ once: true }}
      className="h-[165px] w-[280px] rounded-lg bg-fundo-2/50 [--opacity-from:1%] [--opacity-to:100%] [--y-from:100px] [--y-to:0px] sm:h-[200px] sm:w-[400px] lg:h-[252px] lg:w-[365px]"
    >
      {children}
    </motion.div>
  );
}

export {
  ServiceCard,
  ServiceCardDescription,
  ServiceCardHeader,
  ServiceCardHeaderIcon,
  ServiceCardHeaderTitle,
};
