"use client";
import Home from "../components/PageComponents/Homepage/Home/page";
import Services from "../components/PageComponents/Homepage/Services/page";

export default function Homepage() {
  return (
    <>
      <div className="w-full bg-[#081426] text-[#F8F8FF] selection:bg-[#1D7CFA]">
        {/* Navbar */}
        <Home />
        <Services />
        {/* Portfólio */}
        {/* Sobre nós */}
        {/* Contato */}
        {/* Footer */}
      </div>
    </>
  );
}
