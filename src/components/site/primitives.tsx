import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Counter({
  to,
  suffix = "",
  duration = 2,
}: {
  to: number;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / (duration * 1000));
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);

  return (
    <span ref={ref}>
      {value.toLocaleString()}
      {suffix}
    </span>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  center = true,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  center?: boolean;
}) {
  return (
    <div className={`mx-auto max-w-2xl ${center ? "text-center" : ""}`}>
      {eyebrow && (
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-primary/80">
          <span className="mr-2 inline-block h-px w-8 align-middle bg-gradient-gold" />
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-3xl leading-tight text-foreground md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}

/** Decorative sacred-geometry SVG (Sri Yantra / mandala inspired) */
export function Mandala({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 400"
      aria-hidden
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="0.6"
    >
      <circle cx="200" cy="200" r="180" />
      <circle cx="200" cy="200" r="150" />
      <circle cx="200" cy="200" r="120" />
      <circle cx="200" cy="200" r="90" />
      <circle cx="200" cy="200" r="60" />
      {Array.from({ length: 12 }).map((_, i) => {
        const a = (i * Math.PI) / 6;
        return (
          <line
            key={i}
            x1={200 + Math.cos(a) * 40}
            y1={200 + Math.sin(a) * 40}
            x2={200 + Math.cos(a) * 180}
            y2={200 + Math.sin(a) * 180}
          />
        );
      })}
      <polygon points="200,60 340,280 60,280" />
      <polygon points="200,340 60,120 340,120" />
      <polygon points="200,110 300,270 100,270" />
      <polygon points="200,290 100,130 300,130" />
    </svg>
  );
}
