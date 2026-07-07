import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Home, Building2, ShieldCheck, Sofa, GraduationCap, Sparkles,
  Compass, PenLine, CalendarClock, ArrowRight,
} from "lucide-react";
import { Reveal, SectionHeader, Mandala } from "@/components/site/primitives";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Services — Vastu, Astrology, Numerology & Logo Design" },
      { name: "description", content: "Vastu consultancy, Vastu compatible certification, interior design, astrology, numerology, scientific logo design and muhurta planning by Vastu Samruddhi." },
      { property: "og:title", content: "Services — Vastu Samruddhi" },
      { property: "og:description", content: "Premium Vedic consultancy for homes, offices, industry and brands." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
});

const SERVICES = [
  { icon: Home, title: "Vastu Consultancy", desc: "In-depth energy audits for homes, apartments, villas and plots — with prioritised, non-demolition remedies." },
  { icon: Compass, title: "Professional Guidance", desc: "Direction-based decisions for life events, relocation, career pivots and family harmony." },
  { icon: ShieldCheck, title: "Vastu Compatible Certification", desc: "Official certification for builders, developers and homeowners after complete Vastu review." },
  { icon: Sofa, title: "Interior Designing", desc: "Interior planning aligned with Vastu — layouts, colours, materials and lighting in harmony." },
  { icon: GraduationCap, title: "Educational Services", desc: "Workshops, courses and mentoring for aspiring Vastu, astrology and numerology practitioners." },
  { icon: Sparkles, title: "Astrology", desc: "Vedic birth-chart guidance for life decisions, timing, relationships and remedies." },
  { icon: PenLine, title: "Numerology", desc: "Name, brand and date harmonics calibrated for prosperity, alignment and clarity." },
  { icon: Building2, title: "Scientific Logo Design", desc: "Logos infused with Vastu, numerology and Vedic geometry for lasting business impact." },
  { icon: CalendarClock, title: "Muhurta Planning", desc: "Auspicious timing for weddings, business launches, house-warming and travel." },
];

function ServicesPage() {
  return (
    <>
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

      <section className="container-x py-16 md:py-24">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
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

      <section className="container-x pb-24">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-primary px-8 py-16 text-center text-white md:px-16">
          <SectionHeader eyebrow="Get Started" title="Not sure where to begin?" description={<span className="text-white/80">Speak with our team — we'll recommend the right service for your goals.</span>} />
          <div className="mt-8">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-medium text-primary">
              Book a Consultation <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
