import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Home, Building2, Factory, ShieldCheck, Sofa, GraduationCap, Sparkles,
  Compass, CalendarClock, ArrowRight, CheckCircle2,
  TrendingUp, Briefcase, Users2, Heart, Landmark, Star,
  Palette, Layers, Target, Award,
} from "lucide-react";
import { Reveal, SectionHeader, Mandala } from "@/components/site/primitives";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Services — Vastu, Astrology, Numerology & Logo Design | VASTUSAMRUDDHI" },
      { name: "description", content: "Vastu consultancy, Astrology, Numerology, and Scientific Logo Design by VASTUSAMRUDDHI. 18+ years of expertise helping homeowners, businesses, and professionals." },
      { property: "og:title", content: "Services — VASTUSAMRUDDHI" },
      { property: "og:description", content: "Premium Vedic consultancy for homes, offices, industry and brands." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
});

/* ---------- Vastu Services ---------- */
const VASTU_SERVICES = [
  { icon: Home, title: "Vastu Consultancy", desc: "In-depth energy audits for homes, apartments, villas and plots — with prioritised, non-demolition remedies." },
  { icon: Building2, title: "Commercial Vastu", desc: "Offices, retail and hospitality spaces optimised for growth, productivity and client flow." },
  { icon: Factory, title: "Industrial Vastu", desc: "Factory layouts aligned for productivity, safety and operational efficiency." },
  { icon: ShieldCheck, title: "Vastu Compatible Certification", desc: "Official certification for builders, developers and homeowners after complete Vastu review." },
  { icon: Sofa, title: "Interior Designing", desc: "Interior planning aligned with Vastu — layouts, colours, materials and lighting in harmony." },
  { icon: GraduationCap, title: "Educational Services", desc: "Workshops, courses and mentoring for aspiring Vastu, astrology and numerology practitioners." },
  { icon: CalendarClock, title: "Muhurta Planning", desc: "Auspicious timing for weddings, business launches, house-warming and travel." },
  { icon: Compass, title: "Professional Guidance", desc: "Direction-based decisions for life events, relocation, career pivots and family harmony." },
];

/* ---------- Numerology Services ---------- */
const NUMEROLOGY_SERVICES = [
  "Name Correction",
  "Business Name Analysis",
  "Baby Name Selection",
  "Mobile Number Analysis",
  "Vehicle Number Selection",
  "Signature Analysis",
  "Business Launch Date",
];

const NUMEROLOGY_BENEFITS = [
  { icon: Briefcase, label: "Better Career Growth" },
  { icon: TrendingUp, label: "Business Expansion" },
  { icon: Star, label: "Improved Confidence" },
  { icon: Landmark, label: "Financial Stability" },
  { icon: Compass, label: "Positive Decision-Making" },
  { icon: Award, label: "Strong Personal Branding" },
];

/* ---------- Astrology Services ---------- */
const ASTROLOGY_SERVICES = [
  "Birth Chart Analysis",
  "Career Guidance",
  "Business Timing",
  "Marriage Compatibility",
  "Financial Planning",
  "Muhurat Selection",
  "Personalized Remedies",
];

const ASTROLOGY_BENEFITS = [
  { icon: Compass, label: "Better Decision Making" },
  { icon: Briefcase, label: "Career Clarity" },
  { icon: Heart, label: "Improved Relationships" },
  { icon: Landmark, label: "Financial Direction" },
  { icon: Target, label: "Life Planning" },
  { icon: Sparkles, label: "Greater Peace of Mind" },
];

/* ---------- Logo Design Services ---------- */
const LOGO_SERVICES = [
  "Brand Discovery",
  "Competitor Analysis",
  "Color Psychology",
  "Typography Selection",
  "Symbol & Icon Design",
  "Multiple Concept Options",
  "Professional Brand Files",
];

const LOGO_BENEFITS = [
  { icon: Award, label: "Strong Brand Recognition" },
  { icon: Users2, label: "Professional Market Presence" },
  { icon: Star, label: "Memorable Identity" },
  { icon: Layers, label: "Consistent Visual Branding" },
  { icon: ShieldCheck, label: "Better Customer Trust" },
  { icon: Palette, label: "Scalable Design for Digital & Print" },
];

/* ---------- Why VASTUSAMRUDDHI ---------- */
const WHY_CHOOSE = [
  "Personalized Consultation",
  "Practical Recommendations",
  "Comprehensive Reports",
  "Ethical & Transparent Approach",
  "Modern, Professional Methodology",
  "Ongoing Support",
];

function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-40 pb-16">
        <div className="absolute inset-0 -z-10 bg-gradient-soft" />
        <Mandala className="pointer-events-none absolute -left-40 top-24 h-[500px] w-[500px] text-primary/10 animate-spin-slow" />
        <div className="container-x text-center">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.35em] text-primary/80">Our Services</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mx-auto mt-4 max-w-3xl font-display text-4xl leading-[1.05] md:text-6xl">
              Ancient wisdom, <em className="italic text-gradient-gold">delivered with precision</em>
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Every service is grounded in Vedic principles, cross-verified with modern science and
              tailored to your unique space and intention.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Vastu Consultancy */}
      <section className="container-x py-16 md:py-20" id="vastu">
        <SectionHeader
          eyebrow="Vastu Consultancy"
          title={<>Harmonise Your Space,{" "}<em className="italic text-gradient-gold">Transform Your Life</em></>}
          description="In-depth energy audits for residential, commercial and industrial spaces — with prioritised, non-demolition remedies."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {VASTU_SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <article className="group relative h-full overflow-hidden rounded-3xl border border-primary/10 bg-white p-8 shadow-card transition hover:-translate-y-1 hover:border-primary/30 hover:shadow-glow">
                <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-gold transition-transform duration-500 group-hover:scale-x-100" />
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-primary/5 text-primary transition group-hover:bg-primary group-hover:text-white">
                  <s.icon className="h-6 w-6" />
                </div>
                <h2 className="mt-6 font-display text-xl text-primary">{s.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                <Link to="/contact" className="mt-6 inline-flex items-center gap-1 text-xs font-medium uppercase tracking-widest text-primary">
                  Enquire <ArrowRight className="h-3 w-3" />
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Numerology */}
      <section className="relative overflow-hidden py-20 md:py-28" id="numerology">
        <div className="absolute inset-0 -z-10 bg-[oklch(0.97_0.02_140)]" />
        <Mandala className="pointer-events-none absolute -right-32 top-1/2 h-[500px] w-[500px] -translate-y-1/2 text-primary/[0.06] animate-spin-slow" />
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <Reveal>
                <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-primary/80">
                  <span className="mr-2 inline-block h-px w-8 align-middle bg-gradient-gold" />
                  Numerology
                </p>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="font-display text-3xl leading-tight md:text-5xl">
                  Your Numbers <em className="italic text-gradient-gold">Shape Your Opportunities.</em>
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
                  Every name, mobile number, business name, and date of birth carries a unique vibration. Scientific Numerology helps align these vibrations with your goals for greater success and confidence.
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <Link
                  to="/contact"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-medium text-primary-foreground shadow-glow transition hover:bg-secondary"
                >
                  Unlock Your Lucky Numbers <ArrowRight className="h-4 w-4" />
                </Link>
              </Reveal>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <Reveal delay={0.1}>
                <div className="rounded-3xl border border-primary/10 bg-white p-8 shadow-card">
                  <h3 className="mb-5 font-display text-lg text-primary">Our Numerology Services</h3>
                  <ul className="space-y-3">
                    {NUMEROLOGY_SERVICES.map((s) => (
                      <li key={s} className="flex items-center gap-2.5 text-sm text-foreground/80">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" /> {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
              <Reveal delay={0.15}>
                <div className="rounded-3xl border border-primary/10 bg-white p-8 shadow-card">
                  <h3 className="mb-5 font-display text-lg text-primary">Benefits</h3>
                  <ul className="space-y-3">
                    {NUMEROLOGY_BENEFITS.map((b) => (
                      <li key={b.label} className="flex items-center gap-2.5 text-sm text-foreground/80">
                        <b.icon className="h-4 w-4 shrink-0 text-[color:var(--gold)]" /> {b.label}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Astrology */}
      <section className="container-x py-20 md:py-28" id="astrology">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="order-2 grid gap-6 sm:grid-cols-2 lg:order-1">
            <Reveal delay={0.1}>
              <div className="rounded-3xl border border-primary/10 bg-white p-8 shadow-card">
                <h3 className="mb-5 font-display text-lg text-primary">Our Astrology Services</h3>
                <ul className="space-y-3">
                  {ASTROLOGY_SERVICES.map((s) => (
                    <li key={s} className="flex items-center gap-2.5 text-sm text-foreground/80">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" /> {s}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="rounded-3xl border border-primary/10 bg-white p-8 shadow-card">
                <h3 className="mb-5 font-display text-lg text-primary">Benefits</h3>
                <ul className="space-y-3">
                  {ASTROLOGY_BENEFITS.map((b) => (
                    <li key={b.label} className="flex items-center gap-2.5 text-sm text-foreground/80">
                      <b.icon className="h-4 w-4 shrink-0 text-[color:var(--gold)]" /> {b.label}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
          <div className="order-1 lg:order-2">
            <Reveal>
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-primary/80">
                <span className="mr-2 inline-block h-px w-8 align-middle bg-gradient-gold" />
                Astrology
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-display text-3xl leading-tight md:text-5xl">
                Understand Your Life.{" "}
                <em className="italic text-gradient-gold">Plan Your Future with Confidence.</em>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
                Astrology provides a deeper understanding of your strengths, challenges, and opportunities. Our personalized consultations help you make informed decisions in career, relationships, finances, and life planning.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-medium text-primary-foreground shadow-glow transition hover:bg-secondary"
              >
                Book Your Astrology Consultation <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Scientific Logo Design */}
      <section className="relative overflow-hidden py-20 md:py-28" id="logo-design">
        <div className="absolute inset-0 -z-10 bg-gradient-soft" />
        <Mandala className="pointer-events-none absolute -left-32 top-1/2 h-[500px] w-[500px] -translate-y-1/2 text-primary/[0.06] animate-spin-slow" />
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <Reveal>
                <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-primary/80">
                  <span className="mr-2 inline-block h-px w-8 align-middle bg-gradient-gold" />
                  Scientific Logo Design
                </p>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="font-display text-3xl leading-tight md:text-5xl">
                  A Logo That Looks Great—{" "}
                  <em className="italic text-gradient-gold">and Aligns with Your Brand's Purpose.</em>
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
                  Your logo is the face of your business. We combine strategic branding, visual psychology, and design principles to create a distinctive identity that communicates trust, professionalism, and growth.
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <Link
                  to="/contact"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-medium text-primary-foreground shadow-glow transition hover:bg-secondary"
                >
                  Design Your Powerful Brand Identity <ArrowRight className="h-4 w-4" />
                </Link>
              </Reveal>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <Reveal delay={0.1}>
                <div className="rounded-3xl border border-primary/10 bg-white p-8 shadow-card">
                  <h3 className="mb-5 font-display text-lg text-primary">Our Logo Design Process</h3>
                  <ul className="space-y-3">
                    {LOGO_SERVICES.map((s) => (
                      <li key={s} className="flex items-center gap-2.5 text-sm text-foreground/80">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" /> {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
              <Reveal delay={0.15}>
                <div className="rounded-3xl border border-primary/10 bg-white p-8 shadow-card">
                  <h3 className="mb-5 font-display text-lg text-primary">Benefits</h3>
                  <ul className="space-y-3">
                    {LOGO_BENEFITS.map((b) => (
                      <li key={b.label} className="flex items-center gap-2.5 text-sm text-foreground/80">
                        <b.icon className="h-4 w-4 shrink-0 text-[color:var(--gold)]" /> {b.label}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Why VASTUSAMRUDDHI */}
      <section className="container-x py-20 md:py-28">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-primary px-8 py-16 text-white md:px-16">
          <Mandala className="pointer-events-none absolute -right-24 -top-16 h-[380px] w-[380px] text-white/10 animate-spin-slow" />
          <Mandala className="pointer-events-none absolute -bottom-16 -left-24 h-[320px] w-[320px] text-white/10 animate-spin-slow" />
          <div className="relative grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.35em] text-[color:var(--gold-soft)]">
                Why VASTUSAMRUDDHI?
              </p>
              <h2 className="mt-4 font-display text-3xl leading-snug md:text-5xl">
                18+ Years of Experience
              </h2>
              <p className="mt-5 text-base leading-relaxed text-white/80">
                Helping homeowners, entrepreneurs, professionals, and industries create spaces and identities that support their goals.
              </p>
            </div>
            <div>
              <h3 className="mb-6 font-display text-xl text-[color:var(--gold-soft)]">What Makes Us Different?</h3>
              <ul className="grid gap-3 sm:grid-cols-2">
                {WHY_CHOOSE.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-white/90">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-[color:var(--gold-soft)]" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="container-x pb-24">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-soft border border-primary/10 px-8 py-16 text-center md:px-16 shadow-card">
          <SectionHeader
            eyebrow="Get Started"
            title={<>Your Success Begins with the <em className="italic text-gradient-gold">Right Direction.</em></>}
            description="Whether you're building a home, growing a business, choosing a meaningful name, planning important life decisions, or creating a professional brand identity, we're here to help you move forward with clarity and confidence."
          />
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-medium text-primary-foreground shadow-glow transition hover:bg-secondary">
              Book a Consultation <ArrowRight className="h-4 w-4" />
            </Link>
            <a href="https://wa.me/919987260919" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-white px-7 py-4 text-sm font-medium text-primary shadow-soft transition hover:shadow-glow">
              WhatsApp Us <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
