import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.aerotech.co.zw"),
  title: {
    default: "Aerotech (Pvt) Ltd | Aircraft Maintenance & Aviation Engineering",
    template: "%s | Aerotech (Pvt) Ltd",
  },
  description:
    "Aerotech (Pvt) Ltd provides aircraft maintenance, engine and propeller overhauls, instrument testing and calibration, airframe engineering, electrical and radio services, and aviation engineering solutions in Zimbabwe.",
  keywords: [
    "Aerotech Zimbabwe",
    "Aircraft Maintenance Zimbabwe",
    "Aviation Engineering",
    "Aircraft Repairs",
    "Engine Overhauls",
    "Propeller Overhauls",
    "Instrument Testing and Calibration",
    "Airframe Engineering",
    "Aircraft Electrical and Radio Services",
    "NDT and Corrosion Protection",
    "Charles Prince Airport",
    "Aviation Services Zimbabwe",
  ],
  authors: [{ name: "Aerotech (Pvt) Ltd" }],
  creator: "Aerotech (Pvt) Ltd",
  publisher: "Aerotech (Pvt) Ltd",
  openGraph: {
    type: "website",
    locale: "en_ZW",
    url: "https://www.aerotech.co.zw",
    siteName: "Aerotech (Pvt) Ltd",
    title: "Aerotech (Pvt) Ltd | Aircraft Maintenance & Aviation Engineering",
    description:
      "Your one-stop partner for general aviation services, aircraft maintenance, engineering, and instrument calibration in Zimbabwe.",
    images: [
      {
        url: "/images/aviation-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Aerotech aircraft maintenance and aviation engineering",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aerotech (Pvt) Ltd | Aviation Engineering",
    description:
      "Aircraft maintenance, engineering, engine overhauls and instrument calibration in Zimbabwe.",
    images: ["/images/aviation-hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};
