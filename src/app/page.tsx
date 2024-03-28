import ContactUs from "~/components/Homepage/ContactUs/page";
import { Home } from "~/components/Homepage/Home";
import WhatsappLogo from "~/components/ui/whatsapp";
import AboutUs from "../components/Homepage/AboutUs/page";
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
        <WhatsappLogo />
      </div>
    </>
  );
}
