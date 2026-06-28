import { Link } from "react-router-dom";
import { PageShell } from "@/components/PageShell";
import { Seo } from "@/components/Seo";
import { DIVISIONS, VALUES } from "@/lib/site";
import { ArrowRight } from "lucide-react";

export default function About() {
  return (
    <PageShell>
      <Seo
        title="About — DNS Business Group"
        description="Get to know DNS Business Group: our mission, our values, and the five divisions that make us one of the most versatile groups in the region."
        ogDescription="A diversified business group built on quality, integrity and continuous growth."
      />
      <section className="relative overflow-hidden bg-[var(--brand-ink)] py-24 text-white sm:py-32">
        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-[var(--brand-green)]/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-[var(--brand-red)]/15 blur-3xl" />
        <div className="container-prose relative">
          <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-green)]">
            About the Group
          </p>
          <h1 className="mt-3 max-w-3xl text-balance font-display text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
            One group, built to serve communities through many trades.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
            DNS Business Group brings together five specialised divisions under one trusted brand —
            so customers, partners and communities can rely on a single name for food, transport,
            outdoor advertising, manufacturing and travel.
          </p>
        </div>
      </section>

      <section className="container-prose grid gap-12 py-20 lg:grid-cols-2 lg:py-28">
        <div>
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Our mission</h2>
          <p className="mt-4 text-muted-foreground">
            To build better businesses, create meaningful jobs, and deliver service that goes
            beyond what customers expect. We grow by being indispensable to the people we serve.
          </p>
        </div>
        <div>
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Our promise</h2>
          <p className="mt-4 text-muted-foreground">
            Whichever division you engage, you get the same standard: quality work, fair pricing,
            honest communication, and a team that takes pride in going above the limit.
          </p>
        </div>
      </section>

      <section className="border-y border-border bg-muted/40 py-20">
        <div className="container-prose">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Our values</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {VALUES.map((v) => (
              <div key={v.title} className="rounded-2xl border border-border bg-card p-6">
                <h3 className="font-display text-lg font-bold text-[var(--brand-green-deep)]">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-prose py-20">
        <h2 className="font-display text-3xl font-bold sm:text-4xl">Explore our divisions</h2>
        <ul className="mt-8 divide-y divide-border rounded-2xl border border-border bg-card shadow-soft">
          {DIVISIONS.map((d) => (
            <li key={d.slug}>
              <Link
                to={d.ctaTo}
                className="group flex items-center justify-between gap-6 p-6 transition-colors hover:bg-muted/50"
              >
                <div>
                  <h3 className="font-display text-lg font-bold">{d.name}</h3>
                  <p className="text-sm text-muted-foreground">{d.short}</p>
                </div>
                <ArrowRight className="h-5 w-5 text-primary transition-transform group-hover:translate-x-1" />
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </PageShell>
  );
}
