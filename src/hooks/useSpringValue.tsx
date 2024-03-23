import {
  type MotionValue,
  useInView,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useRef } from "react";

export function useSpringValue(value: number) {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const springValueTmp = useSpring(0, { damping: 40 });
  const springValue = useTransform(
    springValueTmp as MotionValue<number>,
    (latest) => Math.round(latest),
  );

  useEffect(() => {
    if (isInView) {
      springValueTmp.set(value);
    }
  }, [isInView, value, springValueTmp]);

  return { ref, springValue };
}
