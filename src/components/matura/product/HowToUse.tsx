import { Reveal, ScarLine, useInView } from "@/components/motion";
import { cn } from "@/lib/utils";

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
