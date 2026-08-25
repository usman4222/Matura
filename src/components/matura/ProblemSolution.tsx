import { Reveal } from "@/components/motion";
import { SectionHead } from "./SectionHead";
import clutter from "@/assets/clutter.jpg";
import flatlay from "@/assets/flatlay-box.jpg";

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
