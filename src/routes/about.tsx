import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, ArrowRight, Sparkles } from "lucide-react";
import foundersSrc from "@/assets/Profile Image.png";
import { Reveal, SectionHeader, Mandala } from "@/components/site/primitives";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About — VASTUSAMRUDDHI | Shri Ravindra & Smt. Riddhi Jadhav" },
      { name: "description", content: "Since 2008, VASTUSAMRUDDHI has served 46000+ clients across 5 countries with Vedic Vastu, Astrology, Numerology and scientific logo design." },
      { property: "og:title", content: "About VASTUSAMRUDDHI" },
      { property: "og:description", content: "Founded in 2008 by Shri Ravindra & Smt. Riddhi Jadhav." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
});

const FEATURES = [
  "Comprehensive Astro-Vastu-Numero Audits",
  "Non-Demolition Remedies",
  "Growth & Prosperity Focus",
  "Residential, Commercial & Industrial Consultation",
  "Astrology & Numerology Guidance",
  "Scientific Logo Design",
  "Lifetime Support",
];

const TIMELINE = [
  { year: "2008", title: "The Beginning", desc: "Vastu Samruddhi is founded in Navi Mumbai with a mission of harmony and prosperity." },
  { year: "2012", title: "Pan-India Reach", desc: "Consultations expand across India — from Mumbai and Pune to Bangalore and Delhi." },
  { year: "2016", title: "Going Global", desc: "First international clients served across 5 countries via remote consultations." },
  { year: "2020", title: "Scientific Logo Design", desc: "Launch of numerology-infused Vedic logo systems for startups and enterprises." },
  { year: "2026", title: "46,000+ Happy Clients", desc: "18+ years, thousands of aligned spaces and a thriving referral community across India and the globe." },
];

function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-40 pb-20">
        <div className="absolute inset-0 -z-10 bg-gradient-soft" />
        <Mandala className="pointer-events-none absolute -right-32 top-24 h-[500px] w-[500px] text-primary/10 animate-spin-slow" />
        <div className="container-x">
          <Reveal>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-primary/80">Our Journey</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="max-w-3xl font-display text-4xl leading-[1.05] md:text-6xl">
              Wisdom rooted in tradition, <em className="italic text-gradient-gold">delivered with modern grace.</em>
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Vastusamruddhi was founded in 2008 by Shri Ravindra Jadhav and Smt. Riddhi Jadhav. With
              their extensive expertise in Vedic Vastushastra, Astrology, and Numerology — combined
              with strong technical acumen and a passion for enhancing well-being — they have built
              a growing clientele across India and internationally.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container-x py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="relative">
              <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-gold opacity-25 blur-2xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white bg-white p-2 shadow-glow">
                <img src={foundersSrc} alt="Founders of Vastu Samruddhi" className="w-full rounded-[1.5rem] object-cover" />
              </div>
            </div>
          </Reveal>
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.35em] text-primary/80">Silent Features</p>
            <h2 className="mt-4 font-display text-3xl leading-tight md:text-4xl">
              What makes a VASTUSAMRUDDHI audit <em className="italic text-gradient-gold">quietly powerful.</em>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Beyond Vastu, we support startups and established businesses to achieve sustainable
              growth through scientifically designed logos infused with Vedic principles.
            </p>
            <ul className="mt-8 space-y-3">
              {FEATURES.map((f, i) => (
                <Reveal key={f} delay={i * 0.04}>
                  <li className="flex items-start gap-3 rounded-2xl border border-primary/10 bg-white p-4 shadow-card">
                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-sm font-medium">{f}</span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 -z-10 bg-[oklch(0.97_0.02_140)]" />
        <div className="container-x">
          <SectionHeader eyebrow="Journey Since 2008" title={<>A story of <em className="italic text-gradient-gold">quiet growth</em></>} />
          <ol className="relative mx-auto mt-16 max-w-3xl">
            <div aria-hidden className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent md:left-1/2" />
            {TIMELINE.map((t, i) => (
              <Reveal key={t.year} delay={i * 0.08}>
                <li className={`relative mb-10 grid md:grid-cols-2 md:gap-10 ${i % 2 ? "md:[&>*:first-child]:col-start-2" : ""}`}>
                  <div className={`ml-12 rounded-3xl border border-primary/10 bg-white p-6 shadow-card md:ml-0 ${i % 2 ? "md:col-start-2" : ""}`}>
                    <p className="text-xs font-medium uppercase tracking-[0.3em] text-[color:var(--gold)]">{t.year}</p>
                    <h3 className="mt-2 font-display text-xl text-primary">{t.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.desc}</p>
                  </div>
                  <span className="absolute left-4 top-6 grid h-4 w-4 -translate-x-1/2 place-items-center rounded-full bg-primary ring-4 ring-white md:left-1/2" />
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="container-x pb-24">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-hero px-8 py-16 text-center text-white md:px-16">
          <Sparkles className="mx-auto h-8 w-8 text-[color:var(--gold-soft)]" />
          <h2 className="mt-4 font-display text-3xl md:text-5xl">Let's walk this journey together</h2>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-medium text-primary">
            Book a Consultation <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
