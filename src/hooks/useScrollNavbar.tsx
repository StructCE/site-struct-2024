"use client";
import { useEffect, useState } from "react";

export function useScrolValue() {
  const [scrollValue, setScrollValue] = useState<number>(0);

  useEffect(() => {
    function updatescrollvalue() {
      setScrollValue(window.scrollY);
    }
    window.addEventListener("scroll", updatescrollvalue);
    return () => {
      window.removeEventListener("scroll", updatescrollvalue);
    };
  }, []);

  return scrollValue;
}
