"use client";
import { useEffect, useState } from "react";

export function useScrolProgress() {
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  function updateScrollProgress() {
    const scrollValue = window.scrollY;
    const scrollMax =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrollProgress = Number((scrollValue / scrollMax).toFixed(2)) * 100;
    setScrollProgress(scrollProgress);
  }

  useEffect(() => {
    window.addEventListener("scroll", updateScrollProgress);
    return () => {
      window.removeEventListener("scroll", updateScrollProgress);
    };
  }, []);

  return scrollProgress;
}
