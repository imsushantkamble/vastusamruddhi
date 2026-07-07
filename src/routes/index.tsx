import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Sparkles, Home, Building2, Factory, Compass, Flame, Wind,
  Droplet, Mountain, Sun, Heart, Users2, TrendingUp, Briefcase,
  ShieldCheck, Handshake, Infinity as InfinityIcon, ArrowRight,
  Star, Phone, MessageCircle, PenLine, Calendar,
} from "lucide-react";
import { useEffect, useState } from "react";
import heroBg from "@/assets/hero-bg.jpg";
import foundersSrc from "@/assets/Profile Image.png";
import ravindraSrc from "@/assets/RAVINDRA SIR LATEST PHOTO 1.png";
import riddhiSrc from "@/assets/RIDDHI MAAM PHOTO.png";
import { Reveal, Counter, SectionHeader, Mandala } from "@/components/site/primitives";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: "Vastu Samruddhi — Vedic Vastu, Astrology & Numerology Experts" },
      {
        name: "description",
        content:
          "Book a premium Vastu consultation with Shri Ravindra & Smt. Riddhi Jadhav. 18+ years, 4600+ happy clients, 5 countries. Non-demolition remedies for home, office & industry.",
      },
      { property: "og:title", content: "Vastu Samruddhi — Vedic Vastu Consultation" },
      { property: "og:description", content: "Transform your home, office and business through ancient Vastu wisdom." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
});

const STATS = [
  { value: 4600, suffix: "+", label: "Happy Clients" },
  { value: 5, suffix: "", label: "Countries Served" },
  { value: 18, suffix: "+", label: "Years Experience" },
  { value: 85, suffix: "%", label: "Referral Business" },
];

const ELEMENTS = [
  { icon: Mountain, en: "Earth", hi: "पृथ्वी", desc: "Stability, foundations, structural weight" },
  { icon: Droplet, en: "Water", hi: "जल", desc: "Flow, purification, abundance" },
  { icon: Flame, en: "Fire", hi: "अग्नि", desc: "Energy, heat, transformation" },
  { icon: Wind, en: "Air", hi: "वायु", desc: "Ventilation, circulation, movement" },
  { icon: Sun, en: "Space", hi: "आकाश", desc: "Openness, connectivity, light" },
];

const WHY = [
  { icon: Heart, title: "Health", desc: "Balanced energies promote restful sleep, vitality and wellbeing." },
  { icon: Users2, title: "Relationships", desc: "Harmonious zones foster warmth, communication and trust." },
  { icon: Briefcase, title: "Career", desc: "Correct directions unlock clarity, focus and forward momentum." },
  { icon: TrendingUp, title: "Business", desc: "Aligned workspaces attract clients, deals and steady growth." },
  { icon: Sparkles, title: "Peace", desc: "Sacred proportions bring calm to home and mind alike." },
  { icon: Compass, title: "Financial Growth", desc: "Wealth zones activated for prosperity and stability." },
];

const CHOOSE = [
  { icon: ShieldCheck, title: "Deep Practical Experience", desc: "18+ years, 4600+ audits across residential, commercial and industrial spaces." },
  { icon: Compass, title: "Online / Offline Consultation", desc: "Personalised sessions at your site or remotely across India and abroad." },
  { icon: Sparkles, title: "Scientific Approach", desc: "Vedic principles cross-verified with modern architectural science." },
  { icon: PenLine, title: "Actionable Remedies", desc: "Clear, prioritised guidance you can implement without confusion." },
  { icon: Handshake, title: "Non-Demolition Solutions", desc: "Corrections without breaking walls or costly renovations." },
  { icon: InfinityIcon, title: "Lifetime Support", desc: "We remain by your side for every question, long after the audit." },
];

const SERVICES = [
  { icon: Home, title: "Vastu Consultancy", desc: "In-depth audits for homes, apartments and villas." },
  { icon: Building2, title: "Commercial Vastu", desc: "Offices, retail and hospitality spaces optimised for growth." },
  { icon: Factory, title: "Industrial Vastu", desc: "Factory layouts aligned for productivity and safety." },
  { icon: Sparkles, title: "Astrology", desc: "Vedic birth-chart guidance for life decisions." },
  { icon: Compass, title: "Numerology", desc: "Number harmonics for names, brands and dates." },
  { icon: PenLine, title: "Scientific Logo Design", desc: "Logos infused with Vastu, numerology & intent." },
];

const STEPS = [
  { n: "01", title: "Consultation & Property Details", desc: "Share your intent, floor plan and challenges. We map the current energy blueprint." },
  { n: "02", title: "Site Visit / Floor Plan Analysis", desc: "On-site or remote study of directions, zones, entrances and elements." },
  { n: "03", title: "Practical Guidance & Remedies", desc: "Actionable non-demolition corrections with lifetime support." },
];

const TESTIMONIALS = [
  { name: "Anjali Deshpande", role: "Residential Client, Pune", quote: "Within weeks of implementing the remedies, our home felt lighter and relationships warmer. Truly divine work." },
  { name: "Rohit Malhotra", role: "Builder, Mumbai", quote: "Ravindra Sir's guidance on our tower project was rooted in science. Sales velocity clearly reflected it." },
  { name: "Sneha Iyer", role: "Architect, Bengaluru", quote: "A rare consultant who respects design intent and offers non-demolition remedies. My clients love it." },
  { name: "Vikram Shah", role: "Business Owner, Ahmedabad", quote: "Our numerology-aligned logo and office Vastu transformed the energy of the entire team." },
  { name: "Kirti Rane", role: "Industrial Client, Nashik", quote: "Layout suggestions improved workflow, morale and quarterly output. Highly recommended." },
];

const FAQS = [
  { q: "Do I need to break walls to apply Vastu remedies?", a: "No. Our remedies are non-demolition. We use scientific placements, colours, metals, yantras and directional adjustments that align the energy without any construction changes." },
  { q: "How long does a consultation take?", a: "A typical residential audit takes 2–4 hours on site, followed by a detailed report. Commercial and industrial audits are scoped accordingly." },
  { q: "Can I consult with you online?", a: "Yes. We serve clients across India and in 5 countries via video consultations and floor-plan analysis." },
  { q: "How soon will I see results?", a: "Many clients report noticeable shifts in energy and outcomes within 30–90 days of implementing recommendations." },
  { q: "Do you offer support after the audit?", a: "Absolutely. Lifetime support is included — you can reach out anytime for follow-up questions." },
];

function HomePage() {
  return (
    <>
      <Hero />
      <Founders />
      <Panchamahabhoot />
      <WhyVastu />
      <WhyChoose />
      <ServicesPreview />
      <Process />
      <Achievements />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </>
  );
}

/* ---------------- Hero ---------------- */

function Hero() {
  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden pt-24">
      <div className="absolute inset-0 -z-10">
        <img
          src={heroBg}
          alt=""
          width={1920}
          height={1200}
          className="h-full w-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(249,252,248,0.5)_0%,rgba(249,252,248,0.85)_55%,rgba(249,252,248,1)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_30%,rgba(27,94,32,0.05),transparent)]" />
      </div>

      <Mandala className="pointer-events-none absolute -right-24 top-32 h-[560px] w-[560px] text-primary/10 animate-spin-slow" />
      <Mandala className="pointer-events-none absolute -left-40 bottom-0 h-[420px] w-[420px] text-[color:var(--gold)]/15 animate-spin-slow" />

      <div className="container-x relative grid gap-10 py-16 md:py-24 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-7">
          <Reveal>
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/70 px-4 py-1.5 text-xs font-medium tracking-[0.3em] text-primary uppercase backdrop-blur">
              <Sparkles className="h-3.5 w-3.5" /> Since 2008 · Vedic Vastu
            </p>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="font-display text-5xl leading-[1.02] text-foreground md:text-7xl">
              <span className="text-gradient-green">Vastu</span> Samruddhi
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-4 font-devanagari text-2xl text-[color:var(--gold)] md:text-3xl">
              ।। सर्वे भवन्तु सुखीनः ।।
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <h2 className="mt-8 font-display text-2xl leading-snug text-foreground/90 md:text-3xl">
              Transform your home, office and business through ancient Vastu wisdom.
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Founded by <strong className="font-medium text-foreground">Shri Ravindra Jadhav</strong> &
              <strong className="font-medium text-foreground"> Smt. Riddhi Jadhav</strong>, Vastu Samruddhi
              blends Vedic Vastu, Astrology, Numerology and scientific logo design to unlock harmony,
              prosperity and sustained business growth.
            </p>
          </Reveal>

          <Reveal delay={0.28}>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-medium text-primary-foreground shadow-glow transition hover:bg-secondary"
              >
                <Calendar className="h-4 w-4" />
                Book Consultation
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href="tel:+919987260919"
                className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-white/80 px-7 py-4 text-sm font-medium text-primary shadow-soft transition hover:bg-white"
              >
                <Phone className="h-4 w-4" /> Call Now
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.35}>
            <dl className="mt-14 grid max-w-2xl grid-cols-2 gap-6 md:grid-cols-4">
              {STATS.map((s) => (
                <div key={s.label}>
                  <dt className="font-display text-3xl text-gradient-green md:text-4xl">
                    <Counter to={s.value} suffix={s.suffix} />
                  </dt>
                  <dd className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                    {s.label}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <div className="relative lg:col-span-5">
          <Reveal delay={0.2}>
            <div className="relative mx-auto max-w-md">
              <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-gold opacity-30 blur-2xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-white/40 p-2 shadow-glow backdrop-blur">
                <img
                  src={foundersSrc}
                  alt="Shri Ravindra Jadhav and Smt. Riddhi Jadhav — founders of Vastu Samruddhi"
                  className="h-full w-full rounded-[1.5rem] object-cover"
                />
                <div className="absolute bottom-4 left-4 right-4 rounded-2xl glass px-4 py-3 text-sm">
                  <p className="font-display text-base leading-tight text-primary">
                    Shri Ravindra & Smt. Riddhi Jadhav
                  </p>
                  <p className="text-xs text-muted-foreground">Vastu Consultation Experts</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Founders ---------------- */

function Founders() {
  const experts = [
    { name: "Shri Ravindra Jadhav", role: "Founder · Vedic Vastu & Astrology", bio: "A pioneer bridging Vedic Vastu with modern architectural science, guiding 4600+ families and enterprises to prosperity.", img: ravindraSrc, exp: "18+ Years Experience" },
    { name: "Smt. Riddhi Jadhav", role: "Co-Founder · Numerology & Logo Design", bio: "Blends numerology and Vedic principles into scientific logo systems and brand strategy that amplify business growth.", img: riddhiSrc, exp: "15+ Years Experience" },
  ];
  return (
    <section className="container-x py-24 md:py-32">
      <SectionHeader eyebrow="Meet Our Experts" title={<>Guided by wisdom, <em className="font-display italic text-gradient-gold">delivered with grace.</em></>} description="Two decades of Vedic study, thousands of consultations, and one shared intention — to bring harmony to every space we touch." />
      <div className="mt-16 grid gap-8 md:grid-cols-2">
        {experts.map((e, i) => (
          <Reveal key={e.name} delay={i * 0.1}>
            <article className="group relative overflow-hidden rounded-3xl border border-primary/10 bg-gradient-soft p-8 shadow-card transition hover:-translate-y-1 hover:shadow-glow">
              <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-end">
                <div className="relative shrink-0">
                  <div className="absolute -inset-2 rounded-full bg-gradient-gold opacity-40 blur-lg" />
                  <div className="relative h-40 w-40 overflow-hidden rounded-full border-4 border-white shadow-soft">
                    <img src={e.img} alt={e.name} className="h-full w-full object-cover object-top" />
                  </div>
                </div>
                <div className="min-w-0 flex-1 text-center sm:text-left">
                  <p className="text-xs font-medium uppercase tracking-widest text-[color:var(--gold)]">
                    {e.exp}
                  </p>
                  <h3 className="mt-2 font-display text-2xl text-primary">{e.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{e.role}</p>
                </div>
              </div>
              <p className="mt-6 text-sm leading-relaxed text-foreground/80">{e.bio}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Panchamahabhoot ---------------- */

function Panchamahabhoot() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 -z-10 bg-gradient-soft" />
      <Mandala className="pointer-events-none absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 text-primary/[0.05] animate-spin-slow" />
      <div className="container-x">
        <SectionHeader eyebrow="पंचमहाभूत" title={<>The five elements that <em className="font-display italic text-gradient-gold">shape every space</em></>} description="Every Vastu audit begins with balance — the interplay of Earth, Water, Fire, Air and Space in perfect proportion." />
        <div className="mt-16 grid gap-6 md:grid-cols-3 lg:grid-cols-5">
          {ELEMENTS.map((el, i) => (
            <Reveal key={el.en} delay={i * 0.08}>
              <div className="group relative h-full overflow-hidden rounded-3xl border border-primary/10 bg-white p-8 text-center shadow-card transition hover:-translate-y-2 hover:border-primary/30 hover:shadow-glow">
                <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-gradient-gold text-white shadow-soft transition group-hover:scale-110">
                  <el.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-6 font-display text-xl text-primary">{el.en}</h3>
                <p className="mt-1 font-devanagari text-lg text-[color:var(--gold)]">{el.hi}</p>
                <p className="mt-3 text-sm text-muted-foreground">{el.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Why Vastu ---------------- */

function WhyVastu() {
  return (
    <section className="container-x py-24 md:py-32">
      <SectionHeader eyebrow="Why Vastu Matters" title={<>A living science for a <em className="font-display italic text-gradient-gold">flourishing life</em></>} description="Vastu is not superstition — it is the geometry of energy. When the space around you aligns, every part of life follows." />
      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {WHY.map((w, i) => (
          <Reveal key={w.title} delay={i * 0.06}>
            <div className="group h-full rounded-3xl border border-primary/10 bg-white p-8 shadow-card transition hover:-translate-y-1 hover:shadow-glow">
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-primary/5 text-primary transition group-hover:bg-primary group-hover:text-white">
                <w.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 font-display text-xl text-foreground">{w.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{w.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Why Choose ---------------- */

function WhyChoose() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 -z-10 bg-[oklch(0.97_0.02_140)]" />
      <div className="container-x">
        <SectionHeader eyebrow="Why Choose Us" title={<>The Vastu Samruddhi <em className="font-display italic text-gradient-gold">difference</em></>} />
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {CHOOSE.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.05}>
              <div className="group relative h-full overflow-hidden rounded-3xl bg-white p-8 shadow-card">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-gold opacity-70" />
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary text-primary-foreground">
                  <c.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-6 font-display text-lg text-primary">{c.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2}>
          <div className="mt-14 flex flex-wrap items-center justify-center gap-3 text-xs uppercase tracking-widest text-muted-foreground">
            {["Residential", "Commercial", "Industrial"].map((t) => (
              <span key={t} className="rounded-full border border-primary/20 bg-white px-5 py-2">{t}</span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Services preview ---------------- */

function ServicesPreview() {
  return (
    <section className="container-x py-24 md:py-32">
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div className="max-w-2xl">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-primary/80">
            <span className="mr-2 inline-block h-px w-8 align-middle bg-gradient-gold" />
            Our Services
          </p>
          <h2 className="font-display text-3xl leading-tight md:text-5xl">
            Consultations tailored to <em className="italic text-gradient-gold">every space</em>
          </h2>
        </div>
        <Link to="/services" className="group inline-flex items-center gap-2 text-sm font-medium text-primary">
          View all services <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.05}>
            <Link to="/services" className="group block h-full rounded-3xl border border-primary/10 bg-white p-8 shadow-card transition hover:-translate-y-1 hover:border-primary/30 hover:shadow-glow">
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-gold text-white shadow-soft">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 font-display text-xl text-primary">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              <span className="mt-6 inline-flex items-center gap-1 text-xs font-medium uppercase tracking-widest text-primary">
                Read more <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Process ---------------- */

function Process() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 -z-10 bg-gradient-soft" />
      <div className="container-x">
        <SectionHeader eyebrow="Consultation Process" title={<>A calm, considered <em className="italic text-gradient-gold">three-step journey</em></>} />
        <div className="relative mt-20 grid gap-10 md:grid-cols-3">
          <div aria-hidden className="pointer-events-none absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent md:block" />
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.12}>
              <div className="relative rounded-3xl border border-primary/10 bg-white p-8 shadow-card">
                <div className="absolute -top-8 left-8 grid h-16 w-16 place-items-center rounded-2xl bg-primary font-display text-2xl text-primary-foreground shadow-glow">
                  {s.n}
                </div>
                <h3 className="mt-8 font-display text-xl text-primary">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Achievements ---------------- */

function Achievements() {
  return (
    <section className="container-x py-24 md:py-32">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-primary px-8 py-16 text-white md:px-16">
        <Mandala className="pointer-events-none absolute -right-32 -top-24 h-[420px] w-[420px] text-white/10 animate-spin-slow" />
        <Mandala className="pointer-events-none absolute -bottom-32 -left-24 h-[380px] w-[380px] text-[color:var(--gold-soft)]/25 animate-spin-slow" />
        <div className="relative grid gap-10 md:grid-cols-4 md:gap-6">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display text-5xl text-[color:var(--gold-soft)] md:text-6xl">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <p className="mt-3 text-xs uppercase tracking-[0.3em] text-white/70">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Testimonials ---------------- */

function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % TESTIMONIALS.length), 5000);
    return () => clearInterval(t);
  }, []);
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 -z-10 bg-[oklch(0.97_0.02_140)]" />
      <div className="container-x">
        <SectionHeader eyebrow="Testimonials" title={<>Words from those we've <em className="italic text-gradient-gold">served</em></>} />
        <div className="relative mx-auto mt-16 max-w-3xl">
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl glass p-10 text-center shadow-card md:p-14"
          >
            <div className="mx-auto flex w-fit gap-1 text-[color:var(--gold)]">
              {Array.from({ length: 5 }).map((_, k) => (
                <Star key={k} className="h-5 w-5 fill-current" />
              ))}
            </div>
            <p className="mt-6 font-display text-xl leading-relaxed text-foreground md:text-2xl">
              “{TESTIMONIALS[i].quote}”
            </p>
            <p className="mt-6 font-medium text-primary">{TESTIMONIALS[i].name}</p>
            <p className="text-sm text-muted-foreground">{TESTIMONIALS[i].role}</p>
          </motion.div>
          <div className="mt-8 flex justify-center gap-2">
            {TESTIMONIALS.map((_, k) => (
              <button
                key={k}
                onClick={() => setI(k)}
                aria-label={`Testimonial ${k + 1}`}
                className={`h-1.5 rounded-full transition-all ${k === i ? "w-10 bg-primary" : "w-2 bg-primary/25"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="container-x py-24 md:py-32">
      <SectionHeader eyebrow="FAQ" title={<>Answers to <em className="italic text-gradient-gold">common questions</em></>} />
      <div className="mx-auto mt-14 max-w-3xl divide-y divide-primary/10 rounded-3xl border border-primary/10 bg-white shadow-card">
        {FAQS.map((f, idx) => {
          const isOpen = open === idx;
          return (
            <div key={f.q} className="px-6 md:px-8">
              <button
                onClick={() => setOpen(isOpen ? null : idx)}
                className="flex w-full items-center justify-between gap-4 py-6 text-left"
                aria-expanded={isOpen}
              >
                <span className="font-display text-lg text-foreground">{f.q}</span>
                <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border border-primary/20 text-primary transition-transform ${isOpen ? "rotate-45" : ""}`}>
                  +
                </span>
              </button>
              <motion.div
                initial={false}
                animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <p className="pb-6 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* ---------------- Final CTA ---------------- */

function FinalCTA() {
  return (
    <section className="container-x pb-24 md:pb-32">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-hero px-8 py-20 text-center text-white shadow-glow md:px-16">
        <Mandala className="pointer-events-none absolute -left-40 top-1/2 h-[520px] w-[520px] -translate-y-1/2 text-white/10 animate-spin-slow" />
        <Mandala className="pointer-events-none absolute -right-40 top-1/2 h-[520px] w-[520px] -translate-y-1/2 text-white/10 animate-spin-slow" />
        <p className="mx-auto mb-4 inline-block text-xs uppercase tracking-[0.35em] text-[color:var(--gold-soft)]">Begin your journey</p>
        <h2 className="mx-auto max-w-3xl font-display text-4xl leading-tight md:text-6xl">
          Ready to transform your space?
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-white/85">
          Book a personal consultation with Shri Ravindra & Smt. Riddhi Jadhav today.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-medium text-primary shadow-soft transition hover:bg-[color:var(--gold-soft)]">
            <Calendar className="h-4 w-4" /> Book Consultation
          </Link>
          <a href="https://wa.me/919987260919" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-4 text-sm font-medium text-white transition hover:bg-white/10">
            <MessageCircle className="h-4 w-4" /> WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}
