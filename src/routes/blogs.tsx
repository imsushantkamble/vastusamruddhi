import { createFileRoute, Link } from "@tanstack/react-router";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Reveal, Mandala } from "@/components/site/primitives";

export const Route = createFileRoute("/blogs")({
  component: BlogsPage,
  head: () => ({
    meta: [
      { title: "Blog — Vastu Tips, Insights & Guides | Vastu Samruddhi" },
      { name: "description", content: "Read expert articles on Vastu for home, office, bedroom, kitchen, business growth, colour energy, interior design and scientific logo design." },
      { property: "og:title", content: "Vastu Samruddhi Blog" },
      { property: "og:description", content: "Practical Vastu wisdom for modern homes and businesses." },
      { property: "og:url", content: "/blogs" },
    ],
    links: [{ rel: "canonical", href: "/blogs" }],
  }),
});

const POSTS = [
  { slug: "interior-design-and-vastu", title: "Interior Design and Vastu: A Harmonious Marriage", author: "Riddhi Jadhav", date: "May 12, 2026", excerpt: "How to weave Vastu into modern interior design without compromising aesthetics.", gradient: "from-emerald-100 to-teal-50" },
  { slug: "top-10-vastu-tips", title: "Top 10 Vastu Tips Every Homeowner Should Know", author: "Ravindra Jadhav", date: "Apr 28, 2026", excerpt: "Small, powerful adjustments that create lasting shifts in energy and outcomes.", gradient: "from-amber-100 to-lime-50" },
  { slug: "office-vastu", title: "Office Vastu: Design Workspaces That Attract Growth", author: "Ravindra Jadhav", date: "Apr 05, 2026", excerpt: "Seating, cabin direction and colour choices that quietly boost team performance.", gradient: "from-lime-100 to-emerald-50" },
  { slug: "bedroom-vastu", title: "Bedroom Vastu for Deep Rest and Loving Relationships", author: "Riddhi Jadhav", date: "Mar 18, 2026", excerpt: "The direction, décor and materials that transform your bedroom into a sanctuary.", gradient: "from-rose-100 to-amber-50" },
  { slug: "kitchen-vastu", title: "Kitchen Vastu: Cooking with Fire in the Right Direction", author: "Ravindra Jadhav", date: "Feb 22, 2026", excerpt: "The Agni zone deserves precision. Here's how to align it for health and abundance." },
  { slug: "business-growth-through-vastu", title: "Business Growth Through Vastu: A Founder's Playbook", author: "Ravindra Jadhav", date: "Feb 02, 2026", excerpt: "Case studies of founders who unlocked new revenue through targeted Vastu shifts." },
  { slug: "how-colours-affect-energy", title: "How Colours Affect the Energy of Your Space", author: "Riddhi Jadhav", date: "Jan 15, 2026", excerpt: "A designer's guide to Vastu-aligned palettes — from calm bedrooms to vibrant offices." },
  { slug: "scientific-logo-design", title: "Scientific Logo Design: The Vedic Blueprint for Brands", author: "Riddhi Jadhav", date: "Jan 04, 2026", excerpt: "How numerology, geometry and intent combine into logos that quietly compound growth." },
];

function BlogsPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-40 pb-16">
        <div className="absolute inset-0 -z-10 bg-gradient-soft" />
        <Mandala className="pointer-events-none absolute -right-40 top-24 h-[500px] w-[500px] text-primary/10 animate-spin-slow" />
        <div className="container-x text-center">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.35em] text-primary/80">Journal</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mx-auto mt-4 max-w-3xl font-display text-4xl leading-[1.05] md:text-6xl">
              Wisdom for <em className="italic text-gradient-gold">modern living</em>
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Practical, considered writing on Vastu, astrology, numerology and the science of aligned spaces.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container-x pb-24">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {POSTS.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 0.06}>
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-primary/10 bg-white shadow-card transition hover:-translate-y-1 hover:shadow-glow">
                <div className={`relative aspect-[4/3] overflow-hidden bg-gradient-to-br ${p.gradient ?? "from-emerald-50 to-lime-50"}`}>
                  <Mandala className="absolute inset-0 h-full w-full text-primary/25" />
                  <div className="absolute bottom-3 left-3 rounded-full bg-white/80 px-3 py-1 text-[10px] font-medium uppercase tracking-widest text-primary backdrop-blur">
                    Vastu Insight
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1"><User className="h-3 w-3" /> {p.author}</span>
                    <span className="inline-flex items-center gap-1"><Calendar className="h-3 w-3" /> {p.date}</span>
                  </div>
                  <h2 className="mt-3 font-display text-xl leading-snug text-primary">{p.title}</h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{p.excerpt}</p>
                  <Link to="/contact" className="mt-6 inline-flex items-center gap-1 text-xs font-medium uppercase tracking-widest text-primary">
                    Read more <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
