import type { ImageMetadata } from "astro";

import aboutImage from "@/assets/images/about/DSC09426.jpg";
import faviconImage from "@/assets/images/favicon.png";
import heroImage from "@/assets/images/home/Background-2.jpg";
import sliderImage01 from "@/assets/images/slider/d6c7e556-59d2-4dd2-b107-b5c191f9f90d.jpeg";
import sliderImage02 from "@/assets/images/slider/d3b1a031-e2d9-4bfa-8798-357080485e16.jpeg";
import sliderImage03 from "@/assets/images/slider/c6119631-70f9-448f-a849-e4ac752ba680.jpeg";
import sliderImage04 from "@/assets/images/slider/ad356c3a-a904-414d-b6ab-988368835eef.jpeg";
import sliderImage05 from "@/assets/images/slider/6874e43f-d679-4570-81ab-f394efe0472f.jpeg";
import sliderImage06 from "@/assets/images/slider/87d23d2a-6e66-4689-8d41-a98916b50a06.jpeg";
import sliderImage07 from "@/assets/images/slider/9bfaf503-78fb-4a67-942f-8031602c8fc9.jpeg";
import sliderImage08 from "@/assets/images/slider/8d8587a9-8b68-47ce-b65c-745be7e40355.jpeg";
import sliderImage09 from "@/assets/images/slider/7a41e474-ef7b-4b2d-bbef-a17593f4eedf.jpeg";
import sliderImage10 from "@/assets/images/slider/5a405a97-ae91-408e-a915-a984fafde835.jpeg";
import sliderImage11 from "@/assets/images/slider/1cdfa965-4934-41af-9122-03b9b169bfae.jpeg";
import warehouseImage01 from "@/assets/images/warehouse/57-2.jpg";
import warehouseImage02 from "@/assets/images/warehouse/Aussenansicht.jpg";
import warehouseImage03 from "@/assets/images/warehouse/57-1.jpg";

export const site = {
  name: "Matratzen Outlet Lintfort",
  title: "Matratzen Outlet | Matratzen zu unschlagbaren Preisen",
  description:
    "Bis zu 70% Rabatt auf alle bekannten Marken Matratzen. Testsieger Matratzen und weitere Bettwaren zu den besten Preisen im Lagerverkauf im Matratzen Outlet.",
  url: "https://matratzen24-lintfort.de",
  email: "verkauf@lepur.de",
  phone: "+49 2842 1219855",
  phoneHref: "tel:+4928421219855",
  address: ["Moerser Str. 470", "47475 Kamp-Lintfort"],
  mapsUrl:
    "https://maps.google.com/maps/dir//Matratzen+Outlet+Kamp-Lintfort+Moerser+Str.+470+47475+Kamp-Lintfort/@51.4987171,6.5679935,16z/data=!4m5!4m4!1m0!1m2!1m1!1s0x47b8a3023256f2f9:0xcf516b6d1403f931",
  facebook:
    "https://www.facebook.com/Matratzen-Outlet-Kamp-Lintfort-107765121668884",
  instagram: "https://www.instagram.com/matratzen_outlet_kamp_lintfort/",
  heroImage,
  logo: "/assets/images/logo.svg",
  favicon: faviconImage,
};

export const openingHours = [
  { day: "Montag", hours: "14:30 – 19:00" },
  { day: "Dienstag – Samstag", hours: "10:30 – 19:00" },
];

export const announcement = {
  title: "Neue Lieferung eingetroffen",
  text: "Eine frische Lieferung mit vielen neuen hochwertigen Matratzen ist neu bei uns eingetroffen",
};

export const sliderImages: ImageMetadata[] = [
  sliderImage01,
  sliderImage02,
  sliderImage03,
  sliderImage04,
  sliderImage05,
  sliderImage06,
  sliderImage07,
  sliderImage08,
  sliderImage09,
  sliderImage10,
  sliderImage11,
];

export const about = {
  title: "Über uns",
  paragraphs: [
    "Mit 80% unseres Handelsvolumen ist unser Kerngeschäft der Großhandel sowie der Handel großer Rest- und Sonderposten. Wir freuen uns dabei sehr unsere unschlagbaren Preise auch an den Endverbraucher weiter zu geben und damit eine sehr günstige Alternative zu dem herkömmlichen Matratzenfachgeschäft zu bieten.",
    "Hier kannst du deine Traummatratze direkt aus dem Lager mit einer Auswahl von über 800 Matratzen aussuchen.",
    "Bei uns gibt es Matratzen und weitere Bettwaren zum günstigsten Preis. Komm doch einfach zum Probeliegen vorbei.",
    "Wir freuen uns auf Dich!",
  ],
  image: aboutImage,
  imageAlt: "Die beiden Brüder und Geschäftsführer Tristan und Leo Hennen",
};

export const warehouse = {
  title: "Unser Lager",
  subheading: "Bilder",
  copy:
    "Auf über 500 Quadratmeter bieten wir eine Auswahl von mehr als 800 Matratzen, sowie Topper, Lattenroste und Betten.",
  images: [
    {
      src: warehouseImage01,
      alt: "Matratzen im Lager des Matratzen Outlet Lintfort",
    },
    {
      src: warehouseImage02,
      alt: "Eingang vom Büro des Matratzen Outlet Lintfort",
    },
    {
      src: warehouseImage03,
      alt: "Weitere Matratzen im Lager",
    },
  ],
};

export const routeInfo = {
  title: "Wegbeschreibung",
  text: [
    "Die Zufahrt zum Lager befindet sich zwischen der Aral Tankstelle und der IMO Waschstraße.",
    "Durchquere einfach das Tor, anschließend findest du auf der rechten Seite genügend Parkplätze vor.",
  ],
};

export const footerLinks = [
  { href: "/", label: "Start" },
  { href: "/#anfahrt", label: "Anfahrt" },
  { href: "/#ueber-uns", label: "Über uns" },
  { href: "/#kontakt", label: "Kontakt" },
];
