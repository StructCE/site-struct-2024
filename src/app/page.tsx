import Home from "../components/PageComponents/Homepage/Home/page";
import Services from "../components/PageComponents/Homepage/Services/page";
import Portfolio from "../components/PageComponents/Homepage/Portfolio/page";
export default function Homepage() {
  return (
    <>
      <div className="w-full bg-[#081426] text-[#F8F8FF] selection:bg-[#0A369F]">
        <Home />
        <Services />
        <Portfolio />
        {/* Sobre nós */}
        {/* Contato */}
      </div>
    </>
  );
}
