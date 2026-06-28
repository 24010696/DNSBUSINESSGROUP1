import { useState, type FormEvent } from "react";
import { PageShell } from "@/components/PageShell";
import { Seo } from "@/components/Seo";
import { SITE, DIVISIONS } from "@/lib/site";
import { Phone, Mail, MapPin, Clock, MessageCircle, CheckCircle2, Send } from "lucide-react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const phone = formData.get("phone");
    const email = formData.get("email");
    const division = formData.get("division");
    const message = formData.get("message");

    // Construct WhatsApp Message
    const text = `*New Enquiry: ${division}*\n\n Name: ${name}\n📞 Phone: ${phone}\n📧 Email: ${email}\n\n📝 Message:\n${message}`;
    
    // Open WhatsApp with pre-filled message
    // Note: Uses international format 27723260873
    window.open(`https://wa.me/27723260873?text=${encodeURIComponent(text)}`, "_blank");
    
    setSent(true);
  }

  return (
    <PageShell>
      <Seo
        title="Contact — DNS Business Group"
        description="Get in touch with DNS Business Group. Call, WhatsApp, email, or send a message and we'll be in touch."
        ogDescription="We'd love to hear from you."
      />
      <section className="relative overflow-hidden bg-[var(--brand-ink)] py-24 text-white sm:py-32">
        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-[var(--brand-green)]/20 blur-3xl" />
        <div className="container-prose relative">
          <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-green)]">Contact</p>
          <h1 className="mt-3 max-w-2xl text-balance font-display text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
            Let's build something together.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
            Reach out about any of our divisions. We typically reply within one business day.
          </p>
        </div>
      </section>

      <section className="container-prose grid gap-10 py-20 lg:grid-cols-5">
        <div className="space-y-4 lg:col-span-2">
          <ContactCard icon={Phone} label="Call us" value={SITE.phone} href={SITE.phoneHref} />
          <ContactCard
            icon={MessageCircle}
            label="WhatsApp"
            value="Chat with us instantly"
            href={SITE.whatsappHref}
            external
          />
          <ContactCard icon={Mail} label="Email" value={SITE.email} href={SITE.emailHref} />
          <ContactCard icon={MapPin} label="Location" value={SITE.address} />
          <ContactCard icon={Clock} label="Hours" value={SITE.hours} />
        </div>

        <div className="lg:col-span-3">
          {sent ? (
            <div className="rounded-2xl border border-border bg-card p-10 text-center shadow-soft">
              <CheckCircle2 className="mx-auto h-12 w-12 text-[var(--brand-green)]" />
              <h3 className="mt-4 font-display text-2xl font-bold">Message sent</h3>
              <p className="mt-2 text-muted-foreground">
                Opening WhatsApp with your details. Please press "Send" in the chat to complete your enquiry.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-5 rounded-2xl border border-border bg-card p-8 shadow-soft">
              <h2 className="font-display text-2xl font-bold">Send us a message</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field name="name" label="Full name" required />
                <Field name="phone" label="Phone" type="tel" required />
              </div>
              <Field name="email" label="Email" type="email" required />
              <div>
                <label className="mb-1.5 block text-sm font-medium">Which division?</label>
                <select
                  name="division"
                  className="w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm outline-none ring-ring/30 transition focus:border-primary focus:ring-2"
                >
                  <option value="General Enquiry">General enquiry</option>
                  {DIVISIONS.map((div) => (
                    <option key={div.slug} value={div.name}>{div.name}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium">Message</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm outline-none ring-ring/30 transition focus:border-primary focus:ring-2"
                />
              </div>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] hover:bg-[#20bd5a] px-6 py-3 text-sm font-semibold text-white shadow-soft transition-transform hover:scale-[1.02]"
              >
                <Send className="h-4 w-4" /> Send via WhatsApp
              </button>
            </form>
          )}
        </div>
      </section>
    </PageShell>
  );
}

function ContactCard({
  icon: Icon,
  label,
  value,
  href,
  external,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
}) {
  const inner = (
    <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft transition-colors hover:bg-muted/40">
      <div className="inline-flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full gradient-brand text-white">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</p>
        <p className="mt-0.5 font-medium">{value}</p>
      </div>
    </div>
  );
  if (href) return <a href={href} {...(external ? { target: "_blank", rel: "noreferrer" } : {})}>{inner}</a>;
  return inner;
}

function Field({
  name,
  label,
  type = "text",
  required,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm outline-none ring-ring/30 transition focus:border-primary focus:ring-2"
      />
    </div>
  );
}