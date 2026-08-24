import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Reveal, ScarLine, prefersReducedMotion } from "@/components/motion";
import heroProduct from "@/assets/hero-product.jpg";

export function Hero() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const onScroll = () => setOffset(Math.min(window.scrollY, 900) * 0.28);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="top" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{ transform: `translate3d(0, ${offset}px, 0)` }}
      >
        <div className="absolute -right-40 -top-32 h-[38rem] w-[38rem] rounded-full bg-mint/35 blur-3xl" />
        <div className="absolute -left-52 top-72 h-[30rem] w-[30rem] rounded-full bg-sand/50 blur-3xl" />
      </div>

      <ScarLine className="absolute inset-x-0 top-40 -z-10 h-40 opacity-70" />

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 pb-24 pt-16 lg:grid-cols-[1.05fr_1fr] lg:gap-20 lg:px-10 lg:pb-36 lg:pt-24">
        <div>
          <Reveal as="p" className="eyebrow">
            C-Section Scar Care, Reimagined
          </Reveal>
          <Reveal
            as="h1"
            delay={100}
            className="mt-6 text-[2.35rem] leading-[1.08] sm:text-5xl lg:text-[3.9rem]"
          >
            C-Section Scar Recovery Sheets, Designed for Your 90-Day Routine
          </Reveal>
          <Reveal as="p" delay={200} className="mt-7 max-w-xl text-base leading-relaxed text-foreground/70">
            Twelve pre-cut medical-grade silicone sheets, a step-by-step 90-day protocol and a premium
            storage pouch—purpose-built to support the appearance of your C-section scar after the
            incision has fully closed.
          </Reveal>
          <Reveal delay={300} className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              to="/product"
              className="rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-soft transition-all duration-200 hover:scale-[1.03] hover:shadow-lift"
            >
              Shop the 90-Day System
            </Link>
            <a
              href="#how-it-works"
              className="link-underline text-sm font-medium text-foreground/80"
            >
              See How It Works
            </a>
          </Reveal>
          <Reveal as="p" delay={400} className="mt-8 text-xs tracking-wide text-muted-foreground">
            12 pre-cut sheets &nbsp;•&nbsp; 16 cm x 4.5 cm &nbsp;•&nbsp; Minimum 12 hours daily
          </Reveal>
        </div>

        <Reveal variant="scale" delay={200} className="relative">
          <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-mint/25 blur-2xl" />
          <img
            src={heroProduct}
            width={1200}
            height={1408}
            alt="MATURA 90-day system box beside its premium fabric storage pouch in soft natural light"
            className="w-full rounded-[1.75rem] object-cover shadow-lift"
          />
        </Reveal>
      </div>
    </section>
  );
}
