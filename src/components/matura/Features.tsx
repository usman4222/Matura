import {
  Layers,
  Ruler,
  ShieldCheck,
  Package,
  CalendarCheck,
  EyeOff,
} from "lucide-react";
import { Reveal } from "@/components/motion";

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
