import Hero from "./components/hero";
import About from "./components/about";
import Services from "./components/services";
import InstrumentCalibration from "./components/instrument-calibration";
import WhyChooseAerotech from "./components/why-choose-aerotech";
import ClientsReferences from "./components/clients-references";
import ContactCTA from "./components/contact-cta";
import QualitySafety from "./components/quality-safety";

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
