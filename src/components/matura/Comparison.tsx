import { useInView } from "@/components/motion";
import { cn } from "@/lib/utils";
import { SectionHead } from "./SectionHead";

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
