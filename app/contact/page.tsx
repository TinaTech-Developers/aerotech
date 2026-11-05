import type { Metadata } from "next";
import ContactHero from "../components/contact/contact-hero";
import ContactInformation from "../components/contact/contact-information";
import ContactForm from "../components/contact/contact-form";
import ContactLocation from "../components/contact/contact-location";
import ContactCTA from "../components/contact/contact-cta";

export const metadata: Metadata = {
  title: "Contact Us | Aerotech (Pvt) Ltd",
  description:
    "Contact Aerotech at Charles Prince Airport, Mt Hampden, Harare, Zimbabwe, for aircraft maintenance, engineering and instrument testing enquiries.",
};

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <ContactInformation />
      <ContactForm />
      <ContactLocation />
      <ContactCTA />
    </main>
  );
}
