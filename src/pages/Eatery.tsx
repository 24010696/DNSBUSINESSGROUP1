import { PageShell } from "@/components/PageShell";
import { Seo } from "@/components/Seo";
import { DivisionHero } from "@/components/DivisionHero";
import { SITE } from "@/lib/site";
import eateryImg from "@/assets/division-eatery.jpg";
import { Phone } from "lucide-react";

type Item = { name: string; desc?: string; price: string };
type Section = { title: string; items: Item[] };

const MENU: Section[] = [
  {
    title: "Mains",
    items: [
      { name: "Grilled Chicken Plate", desc: "Half chicken, pap or rice, salad", price: "R 90" },
      { name: "Beef Stew & Pap", desc: "Slow-cooked beef stew with traditional pap", price: "R 75" },
      { name: "Mutton Curry & Rice", desc: "Tender mutton curry served with yellow rice", price: "R 95" },
      { name: "Fish & Chips", desc: "Hake fillet, golden chips, tartare", price: "R 70" },
    ],
  },
  {
    title: "Quick Meals",
    items: [
      { name: "Kota (Full)", desc: "Quarter loaf, polony, cheese, chips, atchar", price: "R 45" },
      { name: "Bunny Chow", desc: "Half loaf filled with curry of the day", price: "R 55" },
      { name: "Russian & Chips", price: "R 40" },
      { name: "Chicken Wrap", price: "R 50" },
    ],
  },
  {
    title: "Sides & Drinks",
    items: [
      { name: "Chips (Large)", price: "R 25" },
      { name: "Side Salad", price: "R 20" },
      { name: "Soft Drink (330ml)", price: "R 15" },
      { name: "Bottled Water", price: "R 12" },
    ],
  },
];

export default function Eatery() {
  return (
    <PageShell>
      <Seo
        title="DNS Eatery — Good food with good taste"
        description="Hearty, freshly prepared meals at fair prices. Browse the DNS Eatery menu."
        ogDescription="Good food with good taste."
      />
      <DivisionHero
        eyebrow="DNS Eatery"
        title="Good food with good taste."
        description="Hearty, freshly prepared meals served fast — built on quality ingredients and recipes our community already loves."
        image={eateryImg}
      />

      <section className="container-prose py-20">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-red)]">
              Menu
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">Today's selection</h2>
          </div>
          <a
            href={SITE.phoneHref}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft"
          >
            <Phone className="h-4 w-4" /> Call to order
          </a>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-3">
          {MENU.map((section) => (
            <div key={section.title} className="rounded-2xl border border-border bg-card p-7 shadow-soft">
              <h3 className="font-display text-xl font-bold text-[var(--brand-green-deep)]">
                {section.title}
              </h3>
              <ul className="mt-5 space-y-4">
                {section.items.map((item) => (
                  <li
                    key={item.name}
                    className="flex items-baseline justify-between gap-4 border-b border-dashed border-border pb-3 last:border-0 last:pb-0"
                  >
                    <div>
                      <p className="font-medium">{item.name}</p>
                      {item.desc && (
                        <p className="mt-0.5 text-xs text-muted-foreground">{item.desc}</p>
                      )}
                    </div>
                    <span className="font-display text-sm font-bold text-[var(--brand-red)]">
                      {item.price}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-xs text-muted-foreground">
          Menu and prices may change. Please call ahead to confirm availability.
        </p>
      </section>
    </PageShell>
  );
}
