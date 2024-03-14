import ContactUs from "~/components/Homepage/ContactUs/page";
import AboutUs from "../components/Homepage/AboutUs/page";
import Home from "../components/Homepage/Home/page";
import Portfolio from "../components/Homepage/Portfolio/page";
import Services from "../components/Homepage/Services/page";

export default function Homepage() {
  return (
    <>
      <div className="w-full bg-fundo-0 text-struct-7 selection:bg-struct-5">
        <Home />
        <Services />
        <Portfolio />
        <AboutUs />
        <ContactUs />
      </div>
    </>
  );
}
