import AboutUs from "../components/PageComponents/Homepage/AboutUs/page";
import Home from "../components/PageComponents/Homepage/Home/page";
import Portfolio from "../components/PageComponents/Homepage/Portfolio/page";
import Services from "../components/PageComponents/Homepage/Services/page";

export default function Homepage() {
  return (
    <>
      <div className="w-full bg-fundo-0 text-struct-7 selection:bg-struct-5">
        <Home />
        <Services />
        <Portfolio />
        <AboutUs />
        {/* Contato */}
      </div>
    </>
  );
}
