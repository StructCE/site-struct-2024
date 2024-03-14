import ContactUs from "~/components/PageComponents/ContactUs/page";
import AboutUs from "../components/PageComponents/AboutUs/page";
import Home from "../components/PageComponents/Home/page";
import Portfolio from "../components/PageComponents/Portfolio/page";
import Services from "../components/PageComponents/Services/page";

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
