import { Reveal } from "@/components/motion";

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
