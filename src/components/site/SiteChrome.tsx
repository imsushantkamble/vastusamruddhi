import { type ReactNode, useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, Phone, MessageCircle, ArrowUp } from "lucide-react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import logoSrc from "@/assets/Logo.jpeg";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/blogs", label: "Blogs" },
  { to: "/contact", label: "Contact" },
] as const;

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { location } = useRouterState();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "glass shadow-soft" : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logoSrc}
            alt="Vastu Samruddhi logo"
            width={220}
            height={72}
            className="h-14 w-auto md:h-16"
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV.map((item) => {
            const active =
              item.to === "/"
                ? location.pathname === "/"
                : location.pathname.startsWith(item.to);
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`relative text-sm font-medium tracking-wide transition-colors ${
                  active ? "text-primary" : "text-foreground/80 hover:text-primary"
                }`}
              >
                {item.label}
                {active && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-2 left-0 right-0 mx-auto h-px w-8 bg-gradient-gold"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="tel:+919987260919"
            className="hidden items-center gap-2 rounded-full border border-primary/20 bg-white/60 px-4 py-2 text-sm font-medium text-primary shadow-soft transition hover:bg-white md:inline-flex"
          >
            <Phone className="h-4 w-4" />
            +91 99872 60919
          </a>
          <Link
            to="/contact"
            className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-soft transition hover:bg-secondary md:inline-flex"
          >
            Book Consultation
          </Link>
          <button
            onClick={() => setOpen((s) => !s)}
            className="rounded-full p-2 text-primary lg:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="glass border-t border-white/40 lg:hidden"
          >
            <div className="container-x flex flex-col gap-1 py-4">
              {NAV.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="rounded-lg px-3 py-3 text-base font-medium hover:bg-primary/5"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="mt-2 rounded-full bg-primary px-5 py-3 text-center text-sm font-medium text-primary-foreground"
              >
                Book Consultation
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.2 });
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-0.5 origin-left bg-gradient-gold"
    />
  );
}

function FloatingActions() {
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Mobile sticky call bar */}
      <div className="fixed inset-x-3 bottom-3 z-40 flex gap-2 md:hidden">
        <a
          href="tel:+919987260919"
          className="flex flex-1 items-center justify-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-medium text-primary-foreground shadow-glow"
        >
          <Phone className="h-4 w-4" /> Call
        </a>
        <a
          href="https://wa.me/919987260919"
          target="_blank"
          rel="noreferrer"
          className="flex flex-1 items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-medium text-white shadow-glow"
        >
          <MessageCircle className="h-4 w-4" /> WhatsApp
        </a>
      </div>

      {/* Desktop floating buttons */}
      <div className="fixed bottom-6 right-6 z-40 hidden flex-col gap-3 md:flex">
        <a
          href="https://wa.me/919987260919"
          target="_blank"
          rel="noreferrer"
          aria-label="Chat on WhatsApp"
          className="grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-glow transition hover:scale-110"
        >
          <MessageCircle className="h-6 w-6" />
        </a>
        <AnimatePresence>
          {showTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              aria-label="Back to top"
              className="grid h-12 w-12 place-items-center rounded-full bg-white text-primary shadow-soft"
            >
              <ArrowUp className="h-5 w-5" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}

function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden bg-[oklch(0.25_0.06_148)] text-white/90">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, white 1px, transparent 1px), radial-gradient(circle at 80% 60%, white 1px, transparent 1px)",
          backgroundSize: "40px 40px, 60px 60px",
        }}
      />
      <div className="container-x relative grid gap-12 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <img src={logoSrc} alt="VASTUSAMRUDDHI" className="h-12 w-auto rounded-md bg-white/95 p-1" />
          </div>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-white/70">
            Vedic Vastu, Astrology & Numerology consultancy since 2008. Non-demolition remedies
            crafted with scientific precision and spiritual wisdom by Shri Ravindra & Smt. Riddhi
            Jadhav.
          </p>
          <p className="mt-6 font-devanagari text-lg text-[color:var(--gold-soft)]">
            । सर्वे भवन्तु सुखीनः ।।
          </p>
        </div>

        <div>
          <h4 className="font-display text-lg text-white">Quick Links</h4>
          <ul className="mt-5 space-y-3 text-sm text-white/70">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="transition hover:text-[color:var(--gold-soft)]">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg text-white">Get in touch</h4>
          <ul className="mt-5 space-y-3 text-sm text-white/70">
            <li>
              Shop No.3, Sai Sangat CHS,<br />Sector-3, Sanpada,<br />Navi Mumbai 400705
            </li>
            <li><a href="tel:+919987260919">+91 99872 60919</a></li>
            <li><a href="tel:+919967537718">+91 99675 37718</a></li>
            <li><a href="mailto:vastusamruddhiweb@gmail.com">vastusamruddhiweb@gmail.com</a></li>
          </ul>
          <div className="mt-5 flex gap-3">
            <a
              href="https://www.instagram.com/_.vastusamruddhi"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/20 px-3 py-1 text-xs uppercase tracking-widest hover:bg-white/10"
            >
              Instagram
            </a>
            <a
              href="https://wa.me/919987260919"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/20 px-3 py-1 text-xs uppercase tracking-widest hover:bg-white/10"
            >
              WhatsApp
            </a>
            <a
              href="https://g.page/r/vastusamruddhi/review"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/20 px-3 py-1 text-xs uppercase tracking-widest hover:bg-white/10"
            >
              Google
            </a>
          </div>
        </div>
      </div>
      <div className="container-x relative flex flex-col items-center justify-between gap-3 border-t border-white/10 py-6 text-xs text-white/60 md:flex-row">
        <p>© 2026 VASTUSAMRUDDHI. All rights reserved.</p>
        <p>
          Made with <span className="text-red-400">❤</span> by{" "}
          <a
            href="https://www.linkedin.com/in/iamsushantkamble"
            target="_blank"
            rel="noreferrer"
            className="font-medium text-[color:var(--gold-soft)] hover:underline"
          >
            Sushant Kamble
          </a>
        </p>
      </div>
    </footer>
  );
}

export function SiteChrome({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen overflow-x-clip">
      <ScrollProgress />
      <Navbar />
      <main className="relative">{children}</main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
