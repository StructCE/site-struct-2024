import Home from "../components/PageComponents/Homepage/Home/page";
import Services from "../components/PageComponents/Homepage/Services/page";
import Portfolio from "../components/PageComponents/Homepage/Portfolio/page";
import AboutUs from "../components/PageComponents/Homepage/AboutUs/page";

export default function Homepage() {
  return (
    <>
      <div className="bg-fundo-0 text-struct-7 selection:bg-struct-5 w-full">
        <Home />
        <Services />
        <Portfolio />
        <AboutUs />
        {/* Contato */}
      </div>
    </>
  );
}
