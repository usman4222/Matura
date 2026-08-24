import { Reveal, ScarLine, useInView } from "@/components/motion";
import { cn } from "@/lib/utils";
import { Droplets, Heart, ShieldCheck, Sparkles } from "lucide-react";

const BENEFITS = [
  {
    icon: Sparkles,
    title: "Supports a softer, flatter-looking scar",
    body: "With consistent use over fully closed skin, silicone sheeting may improve the visible texture and appearance of scar tissue over time.",
  },
  {
    icon: Droplets,
    title: "Helps maintain moisture balance",
    body: "The occlusive silicone layer supports a hydrated surface environment at the scar.",
  },
  {
    icon: Heart,
    title: "Designed for everyday comfort",
    body: "Flexible material and a C-section-specific format support discreet wear beneath everyday clothing.",
  },
  {
    icon: ShieldCheck,
    title: "Simplifies the full journey",
    body: "A pre-cut format, storage pouch and guided protocol make the routine easier to understand and repeat.",
  },
];

export function Benefits() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 lg:px-10 lg:py-28">
      <Reveal as="h2" className="max-w-2xl text-3xl leading-tight sm:text-4xl">
        Consistency Is the Heart of the Routine
      </Reveal>
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {BENEFITS.map((b, i) => (
          <Reveal key={b.title} delay={i * 110} lift className="surface-card p-7 shadow-soft">
            <b.icon className="h-5 w-5 text-foreground/70" aria-hidden="true" />
            <h3 className="mt-5 text-base leading-snug">{b.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-foreground/70">{b.body}</p>
          </Reveal>
        ))}
      </div>
      <Reveal as="p" delay={200} className="mt-6 text-xs text-muted-foreground">
        Individual results vary.
      </Reveal>
    </section>
  );
}

const FACTS: [string, string][] = [
  ["Material", "PDMS medical-grade silicone"],
  ["Sheet size", "16 cm x 4.5 cm"],
  ["Quantity", "12 reusable sheets"],
  ["Daily wear", "Minimum 12 hours, or as directed by your clinician and the Instructions for Use"],
  ["Intended sheet life", "7 to 10 days with proper care; actual life may vary"],
  ["Included", "90-day protocol card and premium storage pouch"],
  ["Use area", "Fully closed C-section scar only"],
  ["Do not use", "On open, scabbed, draining, infected or irritated skin"],
];

export function Facts() {
  return (
    <section className="border-y border-border/70 bg-card/60">
      <div className="mx-auto max-w-5xl px-5 py-20 lg:px-10 lg:py-28">
        <Reveal as="p" className="eyebrow">
          Product Facts
        </Reveal>
        <Reveal as="h2" delay={100} className="mt-5 text-3xl leading-tight sm:text-4xl">
          Everything In The System
        </Reveal>
        <dl className="mt-12 divide-y divide-border">
          {FACTS.map(([term, value], i) => (
            <Reveal
              key={term}
              delay={i * 80}
              className="grid gap-2 py-5 sm:grid-cols-[14rem_1fr] sm:gap-8"
            >
              <dt className="eyebrow pt-1">{term}</dt>
              <dd className="text-sm leading-relaxed text-foreground/80">{value}</dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}

const STEPS = [
  "Confirm the incision is fully closed and ask your doctor or qualified clinician if silicone sheeting is appropriate for you.",
  "Clean and completely dry the scar area.",
  "Peel away the protective liner from the adhesive side.",
  "Place the sheet directly over the scar and press gently along every edge.",
  "Wear for at least 12 hours daily, building tolerance gradually if directed.",
  "Remove once daily to check the skin and wash the sheet gently with mild, fragrance-free soap.",
  "Rinse thoroughly and air-dry adhesive side up before reapplying.",
  "Store the clean, dry sheet in the included pouch when it is not being worn.",
  "Replace after 7 to 10 days, or sooner if damaged, soiled or no longer adhering well.",
];

function Step({ index, text }: { index: number; text: string }) {
  const { ref, inView } = useInView<HTMLLIElement>(0.4);
  return (
    <li ref={ref} className="relative pl-14">
      <span
        className={cn(
          "absolute left-0 top-0 grid h-10 w-10 place-items-center rounded-full border text-xs transition-all duration-700",
          inView
            ? "border-foreground/25 bg-mint/60 opacity-100"
            : "border-border bg-background opacity-0",
        )}
      >
        {String(index + 1).padStart(2, "0")}
      </span>
      <p
        className={cn(
          "pb-9 text-sm leading-relaxed text-foreground/80 transition-all duration-700",
          inView ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0",
        )}
      >
        {text}
      </p>
    </li>
  );
}

export function HowToUse() {
  return (
    <section id="how-to-use" className="mx-auto max-w-4xl px-5 py-20 lg:px-10 lg:py-28">
      <ScarLine className="mb-14 h-24 opacity-70" />
      <Reveal as="p" className="eyebrow">
        The Daily Ritual
      </Reveal>
      <Reveal as="h2" delay={100} className="mt-5 text-3xl leading-tight sm:text-4xl">
        How To Use
      </Reveal>
      <ol className="relative mt-12 border-l border-border pl-0">
        <span className="absolute left-5 top-0 h-full w-px bg-border" aria-hidden="true" />
        {STEPS.map((s, i) => (
          <Step key={s} index={i} text={s} />
        ))}
      </ol>

      <div
        id="when-to-start"
        className="highlight-target mt-8 rounded-[1.5rem] border border-aqua/60 bg-mint/45 p-8"
      >
        <h3 className="text-lg">When To Start</h3>
        <p className="mt-3 text-sm leading-relaxed text-foreground/80">
          Do not start based on the calendar alone. Begin only when the incision is fully closed,
          with no open areas, scabs, drainage or signs of infection, and after your clinician
          confirms it is appropriate.
        </p>
      </div>
    </section>
  );
}

const WARNINGS = [
  "For external use only.",
  "Do not use on open wounds or infected, irritated or actively draining skin.",
  "Stop use if a rash, persistent redness, swelling, pain or irritation develops, and contact a healthcare professional.",
  "Keep out of reach of children.",
  "If you have a history of adhesive or silicone sensitivity, ask a clinician before use.",
  "Always follow the final product label and Instructions for Use; they take priority over website summaries.",
];

export function Warnings() {
  return (
    <section className="mx-auto max-w-4xl px-5 pb-24 lg:px-10 lg:pb-32">
      <div className="rounded-[1.5rem] border border-border bg-sand/40 p-8 lg:p-10">
        <h2 className="text-xl">Warnings &amp; Support</h2>
        <ul className="mt-6 space-y-3">
          {WARNINGS.map((w) => (
            <li key={w} className="flex gap-3 text-sm leading-relaxed text-foreground">
              <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-foreground" />
              {w}
            </li>
          ))}
        </ul>
        <p className="mt-6 text-xs leading-relaxed text-foreground/70">
          Questions about your recovery? Speak with your doctor or qualified clinician. For product
          support, contact care@matura.example.
        </p>
      </div>
    </section>
  );
}
