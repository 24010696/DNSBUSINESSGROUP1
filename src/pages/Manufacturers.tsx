import { PageShell } from "@/components/PageShell";
import { Seo } from "@/components/Seo";
import { DivisionHero } from "@/components/DivisionHero";
import { QuoteForm } from "@/components/QuoteForm";
import { DivisionGallery } from "@/components/DivisionGallery";
import { Factory, Cog, Flame, Ruler } from "lucide-react";
import img from "@/assets/division-manufacturers.jpg";

const MANUFACTURING_GALLERY = [
  { src: "/gallery/manufacturers/fabrication-1.jpg", alt: "Steel welding in progress" },
  { src: "/gallery/manufacturers/fabrication-2.jpg", alt: "Custom metal components" },
  { src: "/gallery/manufacturers/fabrication-3.jpg", alt: "Industrial fabrication workshop" },
  { src: "/gallery/manufacturers/fabrication-4.jpg", alt: "Precision cutting machinery" },
  { src: "/gallery/manufacturers/fabrication-5.jpg", alt: "Assembly line production" },
];

const services = [
  { icon: Flame, title: "Welding & Fabrication", body: "Steel fabrication for industrial and commercial use." },
  { icon: Factory, title: "Production Runs", body: "Repeatable production for parts and components." },
  { icon: Ruler, title: "Custom Builds", body: "Bespoke builds tailored to your drawings or brief." },
  { icon: Cog, title: "Repairs & Refits", body: "Maintenance, refurbishment and on-site repair work." },
];

export default function Manufacturers() {
  return (
    <PageShell>
      <Seo
        title="DNS Manufacturers — Production and manufacturing"
        description="Custom fabrication, welding and production services from DNS Manufacturers."
        ogDescription="Production and manufacturing services."
      />
      <DivisionHero
        eyebrow="DNS Manufacturers"
        title="Precision. Consistency. On every job."
        description="Custom fabrication, welding and production services for businesses that demand parts done right the first time."
        image={img}
      />
      <section className="container-prose py-20">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">What we make</h2>
            <p className="mt-3 max-w-xl text-muted-foreground">
              From one-off custom pieces to ongoing production, our workshop delivers on spec and on schedule.
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
            <QuoteForm division="DNS Manufacturers" />
          </div>
        </div>
      </section>
      <DivisionGallery images={MANUFACTURING_GALLERY} title="Workshop & Fabrication" />
    </PageShell>
  );
}