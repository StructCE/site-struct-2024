"use client";
import AboutUs from "~/components/PageComponents/Homepage/AboutUs/page";
import ContactUs from "~/components/PageComponents/Homepage/ContactUs/page";
import Home from "~/components/PageComponents/Homepage/Home/page";
import Services from "~/components/PageComponents/Homepage/Services/page";

export default function Homepage() {
  return (
    <>
      <div className="w-full bg-fundo-0 text-struct-7 selection:bg-struct-5">
        <Home />
        <Services />
        {/* Portfólio */}
        <AboutUs />
        <ContactUs />
      </div>
    </>
  );
}
