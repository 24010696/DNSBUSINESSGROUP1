export const SITE = {
  name: "DNS Business Group",
  tagline: "We Go Above The Limit",
  description: "A diversified business group committed to quality service, innovation, and customer satisfaction across four specialised divisions.",
  phone: "072 326 0873",
  phoneHref: "tel:+27723260873",
  whatsappHref: "https://wa.me/27723260873",
  email: "dnsbusinessgroup87@gmail.com",
  emailHref: "mailto:dnsbusinessgroup87@gmail.com",
  address: "South Africa",
  hours: "Mon – Sat · 08:00 – 18:00",
  socials: { facebook: "#", instagram: "#" },
};

export const DIVISIONS = [
  { slug: "transportation", name: "DNS Transportation", short: "Reliable transport solutions.", description: "Cargo, courier and passenger transport designed to move goods and people on time, every time.", image: "transportation", ctaLabel: "Request a Quote", ctaTo: "/transportation" },
  { slug: "outdoor", name: "DNS Outdoor", short: "Outdoor services and supplies.", description: "Billboard fabrication, installation and outdoor advertising structures — engineered to stand the test of time.", image: "outdoor", ctaLabel: "Request a Quote", ctaTo: "/outdoor" },
  { slug: "manufacturers", name: "DNS Manufacturers", short: "Production and manufacturing.", description: "Custom fabrication, welding and production services for businesses that demand precision and consistency.", image: "manufacturers", ctaLabel: "Request a Quote", ctaTo: "/manufacturers" },
  { slug: "travel", name: "DNS Travel and Tours", short: "Travel experiences and tour packages.", description: "Curated local and international travel packages, group tours and bespoke itineraries for every budget.", image: "travel", ctaLabel: "Plan a Trip", ctaTo: "/travel" },
] as const;

export const VALUES = [
  { title: "Quality", body: "We deliver the best." },
  { title: "Innovation", body: "We create better solutions." },
  { title: "Customer Focus", body: "We put our customers first." },
  { title: "Integrity", body: "We do business the right way." },
  { title: "Growth", body: "We strive for continuous growth." },
];