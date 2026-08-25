import { Droplets, Layers, Sparkles } from "lucide-react";
import { Reveal, ScarLine } from "@/components/motion";
import { SectionHead } from "./SectionHead";

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
