import { Link } from "react-router-dom";
import { PageShell } from "@/components/PageShell";
import { DivisionHero } from "@/components/DivisionHero";
import { QuoteForm } from "@/components/QuoteForm";
import { DivisionGallery } from "@/components/DivisionGallery";
import { Plane, MapPin, Users, Sparkles } from "lucide-react";
import img from "@/assets/division-travel.jpg";

const TRAVEL_GALLERY = [
  { src: "/gallery/travel/destination-1.jpg", alt: "Scenic travel destination" },
  { src: "/gallery/travel/destination-2.jpg", alt: "Group tour excursion" },
  { src: "/gallery/travel/destination-3.jpg", alt: "Luxury accommodation view" },
  { src: "/gallery/travel/destination-4.jpg", alt: "Adventure activity setup" },
  { src: "/gallery/travel/destination-5.jpg", alt: "Cultural tour experience" },
  { src: "/gallery/travel/destination-6.jpg", alt: "Corporate retreat venue" },
];

const services = [
  { icon: MapPin, title: "Local Tours", body: "Day trips and weekend getaways across the country." },
  { icon: Plane, title: "International Packages", body: "Flights, hotels and itineraries to top destinations." },
  { icon: Users, title: "Group Travel", body: "Church, school, corporate and family group bookings." },
  { icon: Sparkles, title: "Bespoke Itineraries", body: "Tailor-made trips planned around your dream list." },
];

export default function Travel() {
  return (
    <PageShell>
      <DivisionHero eyebrow="DNS Travel & Tours" title="Go further. Travel better." description="Curated local and international travel packages, group tours and bespoke itineraries — for every budget and every milestone." image={img} />
      <section className="container-prose py-20">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">How we travel</h2>
            <p className="mt-3 max-w-xl text-muted-foreground">Tell us where you'd like to go — we'll build the trip, book the logistics and look after the details.</p>
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {services.map((s) => (
                <div key={s.title} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-full gradient-brand text-white"><s.icon className="h-5 w-5" /></div>
                  <h3 className="mt-4 font-display text-lg font-bold">{s.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-2"><QuoteForm division="DNS Travel & Tours" /></div>
        </div>
      </section>
      <DivisionGallery images={TRAVEL_GALLERY} title="Destinations & Tours" />
    </PageShell>
  );
}