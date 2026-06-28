import { PageShell } from "@/components/PageShell";
import { Seo } from "@/components/Seo";
import { DivisionHero } from "@/components/DivisionHero";
import { QuoteForm } from "@/components/QuoteForm";
import { DivisionGallery } from "@/components/DivisionGallery";
import { Truck, Package, Users, Clock } from "lucide-react";
import img from "@/assets/division-transportation.jpg";

const TRANSPORT_GALLERY = [
  { src: "/gallery/transportation/vehicle-1.jpg", alt: "Cargo truck on delivery route" },
  { src: "/gallery/transportation/vehicle-2.jpg", alt: "Loading cargo into vehicle" },
  
];

const services = [
  { icon: Truck, title: "Cargo & Freight", body: "Local and long-haul cargo movement with full tracking." },
  { icon: Package, title: "Courier Services", body: "Same-day and next-day courier for parcels and documents." },
  { icon: Users, title: "Passenger Transport", body: "Group transfers, shuttles and chartered minibus hire." },
  { icon: Clock, title: "Scheduled Routes", body: "Reliable scheduled deliveries for businesses." },
];

export default function Transportation() {
  return (
    <PageShell>
      <Seo
        title="DNS Transportation — Reliable transport solutions"
        description="Cargo, courier and passenger transport across South Africa. Request a quote from DNS Transportation."
        ogDescription="Reliable transport solutions."
      />
      <DivisionHero
        eyebrow="DNS Transportation"
        title="Moving goods and people, on time."
        description="Cargo, courier and passenger transport designed around your schedule — backed by drivers who know the roads and care about your delivery."
        image={img}
      />
      <section className="container-prose py-20">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">What we move</h2>
            <p className="mt-3 max-w-xl text-muted-foreground">
              From a single parcel to full truck loads, we tailor a transport solution that fits your budget and timeline.
            </p>
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {services.map((s) => (
                <div key={s.title} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-full gradient-brand text-white">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold">{s.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-2">
            <QuoteForm division="DNS Transportation" />
          </div>
        </div>
      </section>
      <DivisionGallery images={TRANSPORT_GALLERY} title="Fleet & Cargo" />
    </PageShell>
  );
}