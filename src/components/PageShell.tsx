import { Link } from "react-router-dom";
import { SITE } from "@/lib/site";
import { Menu, X, Phone, Mail, MapPin, Facebook, Instagram, Send } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/dns-logo.png";

export function PageShell({ children }: { children: React.ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Construct pre-filled message for the header "Get a Quote" button
  const whatsappQuoteText = encodeURIComponent(
    "Hi DNS Business Group, I'd like to request a quote for your services. Please let me know the next steps."
  );
  const whatsappUrl = `https://wa.me/27723260873?text=${whatsappQuoteText}`;

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container-prose flex h-20 items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <img src={logo} alt="DNS Business Group Logo" className="h-10 w-auto transition-transform group-hover:scale-105" />
            <div className="hidden sm:flex flex-col leading-none">
              <span className="font-display text-xl font-extrabold text-[var(--brand-ink)]">DNS</span>
              <span className="font-display text-[10px] font-bold tracking-wider text-[var(--brand-green)]">BUSINESS GROUP</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-sm font-semibold text-foreground hover:text-[var(--brand-green)] transition-colors">Home</Link>
            <Link to="/about" className="text-sm font-semibold text-muted-foreground hover:text-[var(--brand-green)] transition-colors">About</Link>
            {["transportation", "outdoor", "manufacturers", "travel"].map((slug) => (
              <Link key={slug} to={`/${slug}`} className="text-sm font-semibold text-muted-foreground hover:text-[var(--brand-green)] transition-colors capitalize">{slug}</Link>
            ))}
            {/* Updated "Get a Quote" button with pre-filled message */}
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[var(--brand-green)] px-5 py-2.5 text-sm font-bold text-white shadow-soft hover:bg-[var(--brand-green-deep)] transition-all hover:shadow-md">
              <Send className="h-4 w-4" /> Get a Quote
            </a>
          </nav>

          <button className="md:hidden p-2 text-foreground" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-background px-6 py-4 shadow-lg animate-in slide-in-from-top-5">
            <nav className="flex flex-col gap-4">
              <Link to="/" className="text-base font-medium" onClick={() => setMobileMenuOpen(false)}>Home</Link>
              <Link to="/about" className="text-base font-medium" onClick={() => setMobileMenuOpen(false)}>About</Link>
              {["transportation", "outdoor", "manufacturers", "travel"].map((slug) => (
                <Link key={slug} to={`/${slug}`} className="text-base font-medium capitalize" onClick={() => setMobileMenuOpen(false)}>{slug}</Link>
              ))}
              {/* Mobile "Get a Quote" button with pre-filled message */}
              <a href={whatsappUrl} className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--brand-green)] px-4 py-3 text-sm font-bold text-white" onClick={() => setMobileMenuOpen(false)}>
                <Send className="h-4 w-4" /> WhatsApp Us
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="border-t border-border bg-[var(--brand-ink)] text-white">
        <div className="container-prose py-16">
          <div className="grid gap-12 md:grid-cols-4">
            <div className="md:col-span-2">
              <Link to="/" className="flex items-center gap-3 mb-6 group">
                <img src={logo} alt="DNS Business Group" className="h-12 w-auto invert brightness-0 contrast-200" />
                <div className="flex flex-col">
                  <span className="font-display text-2xl font-bold">DNS</span>
                  <span className="font-display text-xs font-bold tracking-widest text-[var(--brand-green)]">BUSINESS GROUP</span>
                </div>
              </Link>
              <p className="text-sm text-white/70 max-w-sm leading-relaxed">{SITE.description}</p>
              <div className="mt-6 flex gap-4">
                <a href={SITE.socials.facebook} className="h-10 w-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-[var(--brand-green)] transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href={SITE.socials.instagram} className="h-10 w-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-[var(--brand-green)] transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-display font-bold text-lg mb-6 text-[var(--brand-green)]">Divisions</h4>
              <ul className="space-y-3 text-sm text-white/70">
                <li><Link to="/transportation" className="hover:text-white transition-colors">DNS Transportation</Link></li>
                <li><Link to="/outdoor" className="hover:text-white transition-colors">DNS Outdoor</Link></li>
                <li><Link to="/manufacturers" className="hover:text-white transition-colors">DNS Manufacturers</Link></li>
                <li><Link to="/travel" className="hover:text-white transition-colors">DNS Travel & Tours</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-display font-bold text-lg mb-6 text-[var(--brand-green)]">Contact</h4>
              <ul className="space-y-4 text-sm text-white/70">
                <li className="flex items-start gap-3"><Phone className="h-5 w-5 mt-0.5 text-[var(--brand-green)]" /><a href={SITE.phoneHref} className="hover:text-white transition-colors">{SITE.phone}</a></li>
                <li className="flex items-start gap-3"><Mail className="h-5 w-5 mt-0.5 text-[var(--brand-green)]" /><a href={SITE.emailHref} className="hover:text-white transition-colors">{SITE.email}</a></li>
                <li className="flex items-start gap-3"><MapPin className="h-5 w-5 mt-0.5 text-[var(--brand-green)]" /><span>{SITE.address}</span></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/40">
            <p>© {new Date().getFullYear()} DNS Business Group. All rights reserved.</p>
            <p className="text-[var(--brand-green)] font-bold tracking-wide uppercase">We Go Above The Limit</p>
          </div>
        </div>
      </footer>
    </div>
  );
}