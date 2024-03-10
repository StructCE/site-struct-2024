import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        oxanium: ["Oxanium", "sans-serif"],
        nunito: ["Nunito", "sans-serif"],
      },
      colors: {
        "struct-1": "#FD8D4B",
        "struct-2": "#54BBFE",
        "struct-3": "#2DA2FF",
        "struct-4": "#1D7CFA",
        "struct-5": "#0A369F",
        "struct-6": "#071944",
        "struct-7": "#F8F8FF",
        "fundo-0": "#081426",
        "fundo-1": "#0D2140",
        "fundo-2": "#0A1D38",
        "fundo-3": "#0E284E",
        "fundo-transparente": "#252E3C", // Para aplicar a opacidade correta utilizar "bg-fundo-transparente/60" = 60% da opacidade
        "struct-7-hover": "#D8D8D8",
      },
    },
  },
  plugins: [],
} satisfies Config;
