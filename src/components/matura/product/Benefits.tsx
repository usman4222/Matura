import { Reveal } from "@/components/motion";
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
