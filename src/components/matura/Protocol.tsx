import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/motion";
import { cn } from "@/lib/utils";
import { SectionHead } from "./SectionHead";

const PHASES = [
  {
    n: "01 — Introduction",
    when: "Weeks 1–2",
    body: "Begin only after the incision is fully closed and your clinician confirms it is appropriate. Introduce wear gradually if advised and learn the clean–dry–apply routine.",
  },
  {
    n: "02 — Active Treatment",
    when: "Weeks 3–8",
    body: "Build consistency with at least 12 hours of daily wear. Remove once daily for gentle cleaning and skin checks.",
  },
  {
    n: "03 — Completion",
    when: "Weeks 9–12",
    body: "Continue the routine, document visible changes and complete the full protocol. Results and timing vary by person.",
  },
];

export function Protocol() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = rect.height + window.innerHeight * 0.5;
      const p = (window.innerHeight * 0.85 - rect.top) / total;
      setProgress(Math.max(0, Math.min(1, p)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="protocol" className="bg-card/50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <SectionHead
          eyebrow="The 90-day protocol"
          title="Three Calm Phases, One Clear Routine"
          body="The included protocol card breaks the routine into phases so consistency is easier to keep."
        />

        <div ref={sectionRef} className="mt-16">
          <div className="relative mb-10 hidden h-px w-full bg-border md:block" aria-hidden="true">
            <div
              className="absolute inset-y-0 left-0 origin-left transition-[width] duration-300 ease-out"
              style={{ width: `${progress * 100}%`, background: "var(--gradient-mint)", height: "2px", top: "-0.5px" }}
            />
            {PHASES.map((_, i) => (
              <span
                key={i}
                className={cn(
                  "absolute -top-[5px] h-2.5 w-2.5 rounded-full border transition-colors duration-500",
                  progress > i / PHASES.length
                    ? "border-foreground/30 bg-accent"
                    : "border-border bg-background",
                )}
                style={{ left: `calc(${(i / (PHASES.length - 1)) * 100}% - 5px)` }}
              />
            ))}
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {PHASES.map((p, i) => (
              <Reveal key={p.n} delay={i * 150}>
                <article className="surface-card h-full p-8">
                  <p className="eyebrow">{p.n}</p>
                  <p className="mt-4 text-xl">{p.when}</p>
                  <p className="mt-4 text-sm leading-relaxed text-foreground/70">{p.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={200} className="mt-12">
          <a href="#faq" className="link-underline text-sm font-medium">
            View the Full Protocol
          </a>
        </Reveal>
      </div>
    </section>
  );
}
