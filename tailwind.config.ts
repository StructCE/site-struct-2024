import { type Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
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
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config