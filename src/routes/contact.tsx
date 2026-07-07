import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Send, MessageCircle, Instagram, CheckCircle2 } from "lucide-react";
import { useState, type FormEvent } from "react";
import { Reveal, SectionHeader, Mandala } from "@/components/site/primitives";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact — Book a Vastu Consultation | VASTUSAMRUDDHI" },
      { name: "description", content: "Book a Vastu consultation in Navi Mumbai or online. Call +91 99872 60919, WhatsApp, or send us a message. Serving India and 5 countries." },
      { property: "og:title", content: "Contact VASTUSAMRUDDHI" },
      { property: "og:description", content: "Book your Vastu consultation with Shri Ravindra & Smt. Riddhi Jadhav." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
});

const SERVICE_OPTIONS = [
  "Vastu Consultancy — Residential",
  "Vastu Consultancy — Commercial",
  "Vastu Consultancy — Industrial",
  "Astrology",
  "Numerology",
  "Scientific Logo Design",
  "Muhurta Planning",
  "Other",
];

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setLoading(true);
    try {
      await fetch("https://formsubmit.co/ajax/vastusamruddhiweb@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      form.reset();
      setSent(true);
    } catch (err) {
      console.error(err);
      setSent(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="relative overflow-hidden pt-40 pb-16">
        <div className="absolute inset-0 -z-10 bg-gradient-soft" />
        <Mandala className="pointer-events-none absolute -left-40 top-24 h-[500px] w-[500px] text-primary/10 animate-spin-slow" />
        <div className="container-x text-center">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.35em] text-primary/80">Get in Touch</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mx-auto mt-4 max-w-3xl font-display text-4xl leading-[1.05] md:text-6xl">
              Let's begin your <em className="italic text-gradient-gold">Vastu journey</em>
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Reach out for a private consultation. We respond personally within one working day.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container-x pb-24">
        <div className="grid gap-8 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <div className="flex h-full flex-col gap-4 rounded-3xl bg-primary p-8 text-white shadow-glow md:p-10">
              <h2 className="font-display text-2xl md:text-3xl">Appointment Details</h2>
              <p className="text-sm text-white/75">Speak with our team directly.</p>

              <div className="mt-4 space-y-5">
                <ContactRow icon={Phone} title="Call us">
                  <a href="tel:+919987260919" className="block hover:underline">+91 99872 60919</a>
                  <a href="tel:+919967537718" className="block hover:underline">+91 99675 37718</a>
                </ContactRow>
                <ContactRow icon={Mail} title="Email">
                  <a href="mailto:vastusamruddhiweb@gmail.com" className="hover:underline">
                    vastusamruddhiweb@gmail.com
                  </a>
                </ContactRow>
                <ContactRow icon={MapPin} title="Office">
                  Shop No.3, Sai Sangat CHS,<br />Sector-3, Sanpada,<br />Navi Mumbai 400705
                </ContactRow>
              </div>

              <div className="mt-auto flex flex-wrap gap-3 pt-6">
                <a href="https://wa.me/919987260919" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2 text-sm font-medium">
                  <MessageCircle className="h-4 w-4" /> WhatsApp
                </a>
                <a href="https://www.instagram.com/_.vastusamruddhi" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium">
                  <Instagram className="h-4 w-4" /> Instagram
                </a>
                <a href="https://g.page/r/vastusamruddhi/review" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium">
                  ★ Google Reviews
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-3">
            <div className="relative overflow-hidden rounded-3xl border border-primary/10 bg-white p-8 shadow-card md:p-10">
              {sent ? (
                <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                  <div className="grid h-16 w-16 place-items-center rounded-full bg-primary/10 text-primary">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="mt-6 font-display text-2xl text-primary">Thank you</h3>
                  <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                    Your message has reached us. Our team will connect with you within one working day.
                  </p>
                  <button onClick={() => setSent(false)} className="mt-6 text-xs font-medium uppercase tracking-widest text-primary underline">
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="grid gap-4">
                  <input type="hidden" name="_subject" value="New Vastu Samruddhi enquiry" />
                  <input type="text" name="_honey" style={{ display: "none" }} />
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="Name" name="name" required />
                    <Field label="Surname" name="surname" required />
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="Email" name="email" type="email" required />
                    <Field label="WhatsApp Number" name="whatsapp" type="tel" required />
                  </div>
                  <div>
                    <label className="text-xs font-medium uppercase tracking-widest text-primary/80">Service Looking For</label>
                    <select name="service" required className="mt-2 w-full rounded-xl border border-primary/15 bg-white px-4 py-3 text-sm outline-none focus:border-primary">
                      <option value="">Select a service</option>
                      {SERVICE_OPTIONS.map((s) => <option key={s}>{s}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-medium uppercase tracking-widest text-primary/80">Message</label>
                    <textarea name="message" rows={4} required className="mt-2 w-full resize-none rounded-xl border border-primary/15 bg-white px-4 py-3 text-sm outline-none focus:border-primary" placeholder="Tell us a little about your space or intention…" />
                  </div>
                  <button type="submit" disabled={loading} className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-medium text-primary-foreground shadow-soft transition hover:bg-secondary disabled:opacity-70">
                    {loading ? "Sending…" : (<><Send className="h-4 w-4" /> Send Message</>)}
                  </button>
                  <p className="text-xs text-muted-foreground">
                    By submitting, you agree to be contacted regarding your enquiry.
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-8">
          <div className="overflow-hidden rounded-3xl border border-primary/10 shadow-card">
            <iframe
              title="Vastu Samruddhi Office"
              src="https://www.google.com/maps?q=Sai+Sangat+CHS+Sector+3+Sanpada+Navi+Mumbai&output=embed"
              width="100%"
              height="420"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block"
            />
          </div>
        </Reveal>

        <div className="mt-16">
          <SectionHeader eyebrow="Referrals" title={<>Trusted by <em className="italic text-gradient-gold">46,000+ families and enterprises</em></>} description="From first-time homeowners to established developers, industrialists and startups." />
          <div className="mt-6 flex justify-center">
            <a
              href="https://g.page/r/vastusamruddhi/review"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-white px-6 py-3 text-sm font-medium text-primary shadow-soft transition hover:shadow-glow"
            >
              ★ Review us on Google My Business
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-xs font-medium uppercase tracking-widest text-primary/80">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full rounded-xl border border-primary/15 bg-white px-4 py-3 text-sm outline-none focus:border-primary"
      />
    </div>
  );
}

function ContactRow({ icon: Icon, title, children }: { icon: React.ComponentType<{ className?: string }>; title: string; children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-4">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/10">
        <Icon className="h-5 w-5" />
      </span>
      <div className="min-w-0 text-sm">
        <p className="text-xs uppercase tracking-widest text-white/60">{title}</p>
        <div className="mt-1 text-white/95">{children}</div>
      </div>
    </div>
  );
}
