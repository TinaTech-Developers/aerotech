import Image from "next/image";
import SiteHeader from "./components/site-header";
import Hero from "./components/hero";
import About from "./components/about";
import Services from "./components/services";
import QualitySafety from "./components/quality-safety";
import InstrumentCalibration from "./components/instrument-calibration";
import WhyChooseAerotech from "./components/why-choose-aerotech";
import ClientsReferences from "./components/clients-references";
import ContactCTA from "./components/contact-cta";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <QualitySafety />
      <InstrumentCalibration />
      <WhyChooseAerotech />
      <ClientsReferences />
      <ContactCTA />
    </>
  );
}
