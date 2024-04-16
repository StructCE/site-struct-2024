import {
  AboutUs,
  ContactUs,
  Home,
  Portfolio,
  Services,
  WhatsappLogo,
} from "~/components/app/landing";

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
