import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/motion";

const FAQS = [
  [
    "When can I begin using MATURA?",
    "Use only after the incision is fully closed, with no open areas, scabs, drainage or signs of infection, and after your doctor or qualified clinician confirms it is appropriate.",
  ],
  [
    "How long should I wear each sheet?",
    "Follow the included protocol. The product is designed for a minimum of 12 hours daily. Introduce wear gradually if your clinician advises it.",
  ],
  [
    "Can I shower with the sheet on?",
    "Follow the final Instructions for Use. If removed for showering, clean and air-dry the sheet before reapplication.",
  ],
  [
    "How long does one sheet last?",
    "Each sheet is intended for 7 to 10 days when cleaned and cared for as directed. Replace sooner if adhesion declines, the sheet is damaged or hygiene cannot be maintained.",
  ],
  [
    "What if my skin becomes irritated?",
    "Stop use and contact your healthcare professional. Do not apply over open, irritated or infected skin.",
  ],
] as const;

export function Faq() {
  return (
    <section id="faq" className="bg-card/50 py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-5 lg:px-10">
        <Reveal as="p" className="eyebrow">
          Questions, answered
        </Reveal>
        <Reveal as="h2" delay={100} className="mt-5 text-3xl leading-tight sm:text-4xl">
          Before You Begin
        </Reveal>

        <Reveal delay={200} className="mt-10">
          <Accordion type="single" collapsible className="w-full">
            {FAQS.map(([q, a]) => (
              <AccordionItem key={q} value={q} className="border-border">
                <AccordionTrigger className="py-6 text-left text-base font-medium hover:no-underline">
                  {q}
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-sm leading-relaxed text-foreground/70">
                  {a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>

        <Reveal delay={300} className="mt-10">
          <a href="#top" className="link-underline text-sm font-medium">
            Read All FAQs
          </a>
        </Reveal>
      </div>
    </section>
  );
}
