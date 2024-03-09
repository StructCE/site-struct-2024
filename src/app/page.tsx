"use client";
import Home from "../components/PageComponents/Homepage/Home/page";
import Services from "../components/PageComponents/Homepage/Services/page";

export default function Homepage() {
  return (
    <>
      <div className="bg-fundo-0 text-struct-7 selection:bg-struct-5 w-full">
        <Home />
        <Services />
        {/* Portfólio */}
        {/* Sobre nós */}
        {/* Contato */}
      </div>
    </>
  );
}
