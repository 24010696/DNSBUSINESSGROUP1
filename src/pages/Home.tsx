import { Link } from "react-router-dom";
import { ArrowRight, Award, Lightbulb, Users, Handshake, TrendingUp } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { Seo } from "@/components/Seo";
import { DIVISIONS, SITE, VALUES } from "@/lib/site";
import heroImg from "@/assets/hero-main.jpg";
import transportationImg from "@/assets/division-transportation.jpg";
import outdoorImg from "@/assets/division-outdoor.jpg";
import manufacturersImg from "@/assets/division-manufacturers.jpg";
import travelImg from "@/assets/division-travel.jpg";
import logo from "@/assets/dns-logo.png";

const divisionImages: Record<string, string> = {
  transportation: transportationImg,
  outdoor: outdoorImg,
  manufacturers: manufacturersImg,
  travel: travelImg,
};

const valueIcons = [Award, Lightbulb, Users, Handshake, TrendingUp];

export default function Home() {
  return (
    <PageShell>
      <Seo
        title="DNS Business Group — We Go Above The Limit"
        description="Four specialised divisions, one trusted group. Transport, outdoor advertising, manufacturing and travel — all under DNS Business Group."
        ogDescription="One Group. Many Solutions. Endless Possibilities."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[var(--brand-ink)] text-white">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="DNS Business Group"
            className="h-full w-full object-cover opacity-55"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--brand-ink)] via-[var(--brand-ink)]/85 to-[var(--brand-ink)]/30" />
        </div>
        <div className="container-prose relative grid gap-10 py-24 sm:py-32 lg:grid-cols-12 lg:py-40">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-white/85 backdrop-blur">
              <img src={logo} className="h-4 w-auto invert brightness-0 contrast-200" alt="logo" />
              Four divisions. One trusted group.
            </div>
            <h1 className="mt-6 text-balance font-display text-5xl font-bold leading-[1.05] sm:text-6xl md:text-7xl">
              We Go <span className="bg-gradient-to-r from-[var(--brand-green)] to-[var(--brand-red)] bg-clip-text text-transparent">Above The Limit.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">{SITE.description}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link to="/about" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[var(--brand-ink)] shadow-soft transition-transform hover:scale-[1.02]">
                About the Group <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/10">
                Get in touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Divisions Grid */}
      <section className="container-prose py-20 sm:py-28">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-red)]">
              Our Divisions
            </p>
            <h2 className="mt-3 max-w-2xl text-balance font-display text-3xl font-bold sm:text-4xl md:text-5xl">
              Four specialised teams, one standard of excellence.
            </h2>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground">
            Every division is run by experts focused on a single craft — so you get specialist quality with the backing of a trusted group.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {DIVISIONS.map((d, idx) => (
            <Link
              key={d.slug}
              to={d.ctaTo}
              className={`group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-all hover:-translate-y-1 hover:shadow-elegant ${idx === 0 ? "sm:col-span-2 lg:col-span-1" : ""}`}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={divisionImages[d.image]}
                  alt={d.name}
                  loading="lazy"
                  width={1280}
                  height={960}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-xl font-bold">{d.name}</h3>
                <p className="mt-2 text-sm font-medium text-[var(--brand-green-deep)]">{d.short}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d.description}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                  {d.ctaLabel} <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="border-y border-border bg-muted/40 py-20 sm:py-24">
        <div className="container-prose">
          <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-red)]">
            What we stand for
          </p>
          <h2 className="mt-3 max-w-2xl text-balance font-display text-3xl font-bold sm:text-4xl">
            Values that guide every division.
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {VALUES.map((v, i) => {
              const Icon = valueIcons[i];
              return (
                <div
                  key={v.title}
                  className="rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-soft"
                >
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-full gradient-brand text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold">{v.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{v.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-prose py-20 sm:py-28">
        <div className="relative overflow-hidden rounded-3xl bg-[var(--brand-ink)] p-10 text-white sm:p-16">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[var(--brand-green)]/25 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-[var(--brand-red)]/20 blur-3xl" />
          <div className="relative grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-balance font-display text-3xl font-bold sm:text-4xl md:text-5xl">
                Building better businesses. Creating a better future.
              </h2>
              <p className="mt-4 max-w-xl text-white/70">
                Whether you need logistics, fabrication, advertising or travel — reach out and let's get to work.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[var(--brand-ink)] shadow-soft transition-transform hover:scale-[1.02]"
              >
                Contact us <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={SITE.whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/10"
              >
                WhatsApp us
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}