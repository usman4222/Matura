import { useEffect, useRef, useState } from "react";
import {
  Droplets,
  Layers,
  Ruler,
  ShieldCheck,
  Sparkles,
  Package,
  CalendarCheck,
  EyeOff,
} from "lucide-react";
import { CountUp, Reveal, ScarLine, useInView } from "@/components/motion";
import { cn } from "@/lib/utils";
import clutter from "@/assets/clutter.jpg";
import flatlay from "@/assets/flatlay-box.jpg";
import lifestyle from "@/assets/lifestyle.jpg";
import portrait from "@/assets/portrait.jpg";

function SectionHead({
  eyebrow,
  title,
  body,
  center,
}: {
  eyebrow: string;
  title: string;
  body?: string;
  center?: boolean;
}) {
  return (
    <div className={cn("max-w-2xl", center && "mx-auto text-center")}>
      <Reveal as="p" className="eyebrow">
        {eyebrow}
      </Reveal>
      <Reveal as="h2" delay={100} className="mt-5 text-3xl leading-tight sm:text-4xl">
        {title}
      </Reveal>
      {body ? (
        <Reveal as="p" delay={200} className="mt-6 text-base leading-relaxed text-foreground/70">
          {body}
        </Reveal>
      ) : null}
    </div>
  );
}

/* 3 — Trust strip */
const PROOF = [
  { label: "Purpose-built fit", value: "Pre-cut to 16 cm x 4.5 cm" },
  { label: "Material", value: "PDMS medical-grade silicone" },
  { label: "Wear", value: "Designed for 12+ hours daily" },
  { label: "System", value: "12 sheets + 90-day protocol" },
  { label: "Manufacturing", value: "Made in an ISO 13485 certified, FDA registered facility*" },
];

export function TrustStrip() {
  return (
    <section className="border-y border-border/70 bg-card/60">
      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-10">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {PROOF.map((p, i) => (
            <Reveal key={p.label} delay={i * 90}>
              <p className="eyebrow">{p.label}</p>
              <p className="mt-3 text-sm leading-relaxed text-foreground/80">{p.value}</p>
            </Reveal>
          ))}
        </div>
        <Reveal as="p" delay={400} className="mt-10 text-[0.68rem] leading-relaxed text-muted-foreground">
          *Facility registration does not mean FDA approval, clearance or authorization of MATURA.
        </Reveal>
      </div>
    </section>
  );
}

/* 4 — Problem → solution */
export function ProblemSolution() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 lg:px-10 lg:py-32">
      <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <SectionHead
            eyebrow="Scar care should not feel improvised"
            title="You Have Enough to Figure Out. Your Scar-Care Routine Should Be Clear."
            body="Generic rolls can require measuring and cutting, while unclear routines make consistency harder. MATURA brings the essentials together in one C-section-specific system: pre-cut silicone sheets, a storage pouch and a guided 90-day protocol."
          />
          <Reveal delay={300} className="mt-9">
            <a href="#how-it-works" className="link-underline text-sm font-medium">
              Why MATURA Is Different
            </a>
          </Reveal>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          <Reveal variant="scale" className="relative">
            <img
              src={clutter}
              loading="lazy"
              width={1008}
              height={1008}
              alt="Scattered scissors beside an untidy roll of clear silicone sheeting"
              className="h-full w-full rounded-[1.25rem] object-cover opacity-80 grayscale-[0.25]"
            />
            <span className="eyebrow absolute bottom-4 left-4 text-foreground/70">Improvised</span>
          </Reveal>
          <Reveal variant="scale" delay={160} className="relative">
            <img
              src={flatlay}
              loading="lazy"
              width={1408}
              height={1008}
              alt="Ordered flat lay of one pre-cut MATURA silicone sheet, protocol card and storage pouch"
              className="h-full w-full rounded-[1.25rem] object-cover shadow-soft"
            />
            <span className="eyebrow absolute bottom-4 left-4 text-foreground/70">MATURA</span>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* 5 — Feature grid */
const FEATURES = [
  {
    icon: Ruler,
    title: "Pre-Cut to Your Incision",
    body: "Each 16 cm x 4.5 cm sheet is ready to apply—no measuring or scissors required.",
  },
  {
    icon: Layers,
    title: "Stays With Your Routine",
    body: "Designed for the movement and clothing friction of the lower abdomen. Each sheet is intended for 7 to 10 days of use when cared for as directed.*",
  },
  {
    icon: EyeOff,
    title: "Matte and Discreet",
    body: "The translucent matte finish is designed to sit quietly under leggings, jeans and underwear.",
  },
  {
    icon: CalendarCheck,
    title: "A Guided 90 Days",
    body: "The included protocol organizes the routine into Introduction, Active Treatment and Completion phases.",
  },
  {
    icon: Package,
    title: "Storage Pouch Included",
    body: "A dedicated place to keep a clean, dry sheet between applications.",
  },
  {
    icon: ShieldCheck,
    title: "Documented Standards",
    body: "PDMS silicone with supplier documentation for USP Class VI and ISO 10993 biocompatibility testing; manufactured in an ISO 13485 certified facility.*",
  },
];

export function Features() {
  return (
    <section className="bg-card/50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={(i % 3) * 110} variant="scale">
              <article className="surface-card h-full p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                <span
                  className="grid h-11 w-11 place-items-center rounded-full"
                  style={{ background: "var(--gradient-mint)" }}
                >
                  <f.icon className="h-5 w-5 text-foreground/80" strokeWidth={1.4} aria-hidden="true" />
                </span>
                <h3 className="mt-6 text-lg">{f.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/70">{f.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal as="p" className="mt-10 text-[0.68rem] text-muted-foreground">
          *Individual results and sheet life vary. Facility registration does not mean FDA approval,
          clearance or authorization of MATURA.
        </Reveal>
      </div>
    </section>
  );
}

/* 6 — How it works */
const STEPS = [
  { n: "01", icon: Layers, t: "A flexible silicone layer", d: "Sheeting forms a soft, occlusive layer over fully closed skin." },
  { n: "02", icon: Droplets, t: "Supported moisture balance", d: "The layer helps support moisture balance at the scar surface." },
  { n: "03", icon: Sparkles, t: "Softer, flatter-looking over time", d: "With consistent use, the appearance of scar tissue may improve." },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="mx-auto max-w-7xl px-5 py-24 lg:px-10 lg:py-32">
      <SectionHead
        center
        eyebrow="The science, made simple"
        title="A Supportive Moisture Environment for the Appearance of Scar Tissue"
        body="Silicone sheeting forms a flexible, occlusive layer over fully closed skin. This can help support moisture balance at the scar surface and, with consistent use, may improve the appearance, softness and flatness of raised or discolored scar tissue over time. Individual results vary."
      />

      <ScarLine className="mx-auto mt-16 h-24 w-full max-w-4xl" />

      <div className="mt-4 grid gap-6 md:grid-cols-3">
        {STEPS.map((s, i) => (
          <Reveal key={s.n} delay={i * 140} variant="scale">
            <div className="surface-card h-full p-8 text-center">
              <p className="eyebrow">{s.n}</p>
              <s.icon className="mx-auto mt-5 h-7 w-7 text-foreground/60" strokeWidth={1.2} aria-hidden="true" />
              <h3 className="mt-5 text-base">{s.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/70">{s.d}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={300} className="mt-12 text-center">
        <a href="#protocol" className="link-underline text-sm font-medium">
          Explore How It Works
        </a>
      </Reveal>
    </section>
  );
}

/* 7 — Protocol timeline */
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

/* 8 — In the box */
const BOX_ITEMS = [
  "12 pre-cut medical-grade silicone sheets (16 cm x 4.5 cm)",
  "90-day recovery protocol card",
  "Premium storage pouch",
  "Instructions for safe application, cleaning and replacement",
];

export function InTheBox() {
  return (
    <section id="shop" className="mx-auto max-w-7xl px-5 py-24 lg:px-10 lg:py-32">
      <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal variant="scale">
          <img
            src={flatlay}
            loading="lazy"
            width={1408}
            height={1008}
            alt="Flat lay of the MATURA system: stacked pre-cut silicone sheets, protocol card and fabric storage pouch"
            className="w-full rounded-[1.5rem] object-cover shadow-lift"
          />
        </Reveal>
        <div>
          <SectionHead eyebrow="What's in the box" title="Everything the 90 Days Requires, Nothing It Doesn't" />
          <ul className="mt-10 space-y-4">
            {BOX_ITEMS.map((item, i) => (
              <Reveal key={item} as="li" variant="scale" delay={i * 130}>
                <div className="flex items-start gap-4 rounded-2xl border border-border/70 bg-card p-5 shadow-soft">
                  <span className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-mint text-[0.65rem] font-medium">
                    {i + 1}
                  </span>
                  <p className="text-sm leading-relaxed text-foreground/80">{item}</p>
                </div>
              </Reveal>
            ))}
          </ul>
          <Reveal as="p" delay={400} className="mt-8 text-sm leading-relaxed text-foreground/70">
            Twelve sheets at an intended 7 to 10 days per sheet provide enough product to support a
            90-day routine when used and cared for as directed. Actual sheet life may vary.
          </Reveal>
          <Reveal delay={500} className="mt-8">
            <a
              href="#buy"
              className="inline-block rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-soft transition-all duration-200 hover:scale-[1.03] hover:shadow-lift"
            >
              Shop MATURA
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* 9 — Lifestyle banner */
export function LifestyleBanner() {
  return (
    <section className="bg-sand/40 py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:gap-20 lg:px-10">
        <Reveal variant="scale">
          <img
            src={lifestyle}
            loading="lazy"
            width={1200}
            height={1408}
            alt="Postpartum woman resting at home in soft loungewear and high-waist leggings by a sunlit window"
            className="w-full rounded-[1.5rem] object-cover shadow-lift"
          />
        </Reveal>
        <div>
          <SectionHead
            eyebrow="Made for real postpartum days"
            title="Comfortable Under the Clothes You Already Live In"
            body="The flexible, translucent matte sheet is designed for discreet 12+ hour daily wear beneath underwear, leggings and everyday clothing—so the routine can fit around feeding, rest, work and life with a newborn."
          />
          <Reveal delay={300} className="mt-9">
            <a href="#shop" className="link-underline text-sm font-medium">
              See Product Details
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* 10 — Comparison */
const ROWS = [
  ["Format", "May require measuring and cutting", "12 pre-cut sheets, 16 cm x 4.5 cm"],
  ["Product focus", "Often designed for multiple scar types", "Designed specifically around C-section scar care"],
  ["Finish", "Varies by product", "Translucent matte finish"],
  ["Routine guidance", "Varies by brand", "Included three-phase 90-day protocol"],
  ["Storage", "Varies by brand", "Premium storage pouch included"],
  [
    "Documentation",
    "Varies; review each product",
    "Specific material, biocompatibility and facility documentation available after verification",
  ],
] as const;

export function Comparison() {
  const { ref, inView } = useInView<HTMLDivElement>(0.15);
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 lg:px-10 lg:py-32">
      <SectionHead center eyebrow="A closer look" title="MATURA vs. a Typical Cut-to-Fit Roll" />

      <div ref={ref} className="mt-14 overflow-hidden rounded-[1.5rem] border border-border bg-card shadow-soft">
        <div className="hidden grid-cols-[1.1fr_1fr_1fr] border-b border-border md:grid">
          <div className="p-5 eyebrow">Feature</div>
          <div className="p-5 eyebrow">Typical cut-to-fit roll</div>
          <div className={cn("p-5 eyebrow transition-colors duration-700", inView && "bg-mint/45")}>
            MATURA
          </div>
        </div>
        {ROWS.map(([feature, typical, matura], i) => (
          <div
            key={feature}
            className={cn(
              "reveal grid gap-1 border-b border-border/70 last:border-b-0 md:grid-cols-[1.1fr_1fr_1fr] md:gap-0",
              inView && "is-visible",
            )}
            style={{ "--reveal-delay": `${i * 110}ms` } as React.CSSProperties}
          >
            <div className="px-5 pt-5 text-sm font-medium md:py-5">{feature}</div>
            <div className="px-5 text-sm text-foreground/65 md:py-5">
              <span className="eyebrow mr-2 md:hidden">Typical roll:</span>
              {typical}
            </div>
            <div
              className={cn(
                "px-5 pb-5 text-sm text-foreground/85 transition-colors duration-700 md:py-5",
                inView && "bg-mint/25",
              )}
            >
              <span className="eyebrow mr-2 md:hidden">MATURA:</span>
              {matura}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* 11 — Brand story */
export function BrandStory() {
  return (
    <section className="bg-card/50 py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-[1fr_0.9fr] lg:gap-20 lg:px-10">
        <div>
          <SectionHead
            eyebrow="Built for her"
            title="Recovery Should Never Be an Afterthought"
            body="MATURA takes its name from maturatio—the final phase of wound healing and scar maturation. Nearly one in three U.S. deliveries is by Cesarean, yet many women leave the hospital without a clear scar-care plan. MATURA was created to bring intention, clarity and dignity to this stage of recovery."
          />

          <Reveal delay={250} className="mt-12 flex flex-wrap gap-10">
            <div>
              <p className="text-4xl">
                <CountUp to={1} />
                <span className="text-foreground/40"> in </span>
                <CountUp to={3} />
              </p>
              <p className="eyebrow mt-2">U.S. deliveries by Cesarean</p>
            </div>
            <div>
              <p className="text-4xl">
                <CountUp to={12} />
              </p>
              <p className="eyebrow mt-2">Pre-cut sheets</p>
            </div>
            <div>
              <p className="text-4xl">
                <CountUp to={90} />
              </p>
              <p className="eyebrow mt-2">Days of guided routine</p>
            </div>
          </Reveal>

          <ScarLine variant="straight" className="mt-12 h-6 w-full max-w-md" />

          <Reveal as="p" delay={300} className="mt-8 max-w-lg text-lg leading-relaxed">
            Everything in her life may feel centered on the baby. MATURA is built for her.
          </Reveal>
          <Reveal delay={400} className="mt-8">
            <a href="#faq" className="link-underline text-sm font-medium">
              Read Our Story
            </a>
          </Reveal>
        </div>

        <Reveal variant="scale" delay={150}>
          <img
            src={portrait}
            loading="lazy"
            width={1200}
            height={1200}
            alt="Warm portrait of a mother resting with a mug in soft window light"
            className="w-full rounded-[1.5rem] object-cover shadow-lift"
          />
        </Reveal>
      </div>
    </section>
  );
}
