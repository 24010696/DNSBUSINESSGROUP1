import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import logo from "@/assets/dns-logo.png";
import { SITE, DIVISIONS } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-[var(--brand-ink)] text-white/85">
      <div className="container-prose grid gap-12 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <img src={logo} alt="" width={44} height={44} className="h-11 w-11 object-contain" />
            <span className="font-display text-lg font-bold text-white">{SITE.name}</span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/65">{SITE.description}</p>
          <p className="mt-6 font-display text-sm font-semibold text-[var(--brand-green)]">
            One Group. Many Solutions. Endless Possibilities.
          </p>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
            Divisions
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            {DIVISIONS.map((d) => (
              <li key={d.slug}>
                <Link to={d.ctaTo} className="text-white/65 transition-colors hover:text-white">
                  {d.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
            Contact
          </h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-2.5">
              <Phone className="mt-0.5 h-4 w-4 flex-shrink-0 text-[var(--brand-green)]" />
              <a href={SITE.phoneHref} className="text-white/75 hover:text-white">
                {SITE.phone}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <Mail className="mt-0.5 h-4 w-4 flex-shrink-0 text-[var(--brand-green)]" />
              <a href={SITE.emailHref} className="text-white/75 hover:text-white">
                {SITE.email}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-[var(--brand-green)]" />
              <span className="text-white/75">{SITE.address}</span>
            </li>
            <li className="flex items-start gap-2.5">
              <Clock className="mt-0.5 h-4 w-4 flex-shrink-0 text-[var(--brand-green)]" />
              <span className="text-white/75">{SITE.hours}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-prose flex flex-col items-center justify-between gap-2 py-6 text-xs text-white/55 sm:flex-row">
          <span>
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </span>
          <span className="font-display tracking-wide">{SITE.tagline}.</span>
        </div>
      </div>
    </footer>
  );
}
