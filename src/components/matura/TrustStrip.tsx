import { Reveal } from "@/components/motion";

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
