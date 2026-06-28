import { useState, type FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";
import { SITE } from "@/lib/site";

export function QuoteForm({ division }: { division: string }) {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    
    // Gather form data
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const phone = formData.get("phone");
    const email = formData.get("email");
    const message = formData.get("message");

    // Construct the WhatsApp message
    const text = `*New Quote Request: ${division}*\n\n👤 *Name:* ${name}\n📞 *Phone:* ${phone}\n📧 *Email:* ${email}\n📝 *Details:* ${message}`;
    
    // Open WhatsApp with the pre-filled message
    // Note: Using '?text=' because the base URL in site.ts doesn't have query params yet
    const whatsappUrl = `${SITE.whatsappHref}?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, "_blank");
    
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-2xl border border-border bg-card p-8 text-center shadow-soft">
        <CheckCircle2 className="mx-auto h-10 w-10 text-[var(--brand-green)]" />
        <h3 className="mt-3 font-display text-xl font-bold">Opening WhatsApp</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Please press "Send" in the WhatsApp chat to complete your enquiry.
        </p>
        <button 
          onClick={() => setSent(false)}
          className="mt-4 text-sm underline text-muted-foreground hover:text-foreground"
        >
          Send another request
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="space-y-4 rounded-2xl border border-border bg-card p-6 shadow-soft sm:p-8"
    >
      <h3 className="font-display text-xl font-bold">Request a Quote</h3>
      <p className="-mt-2 text-sm text-muted-foreground">
        Fill in your details and we'll reply on WhatsApp.
      </p>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Full name" name="name" required />
        <Field label="Phone" name="phone" type="tel" required />
      </div>
      <Field label="Email" name="email" type="email" required />
      <div>
        <label className="mb-1.5 block text-sm font-medium">Details</label>
        <textarea
          name="message"
          required
          rows={4}
          placeholder={`Describe what you need from ${division}...`}
          className="w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm outline-none ring-ring/30 transition focus:border-primary focus:ring-2"
        />
      </div>
      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] hover:bg-[#20bd5a] px-6 py-3 text-sm font-semibold text-white shadow-soft transition-transform hover:scale-[1.01]"
      >
        Send via WhatsApp
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
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