import { CountUp, Reveal, ScarLine } from "@/components/motion";
import { SectionHead } from "./SectionHead";
import portrait from "@/assets/portrait.jpg";

export function BrandStory() {
  return (
    <section className="bg-card/50 py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-[1fr_0.9fr] lg:gap-20 lg:px-10">
        <div>
          <SectionHead
            eyebrow="Built for her"
            title="Recovery Should Never Be an Afterthought"
            body="MATURA takes its name from maturatio—the final phase of wound healing and scar maturation. Nearly one in three U.S. deliveries is by Cesarean, yet many women leave the hospital without a clear scar-care plan. MATURA was created to bring intention, clarity and dignity to this stage of recovery."
          />

          <Reveal delay={250} className="mt-12 flex flex-wrap gap-10">
            <div>
              <p className="text-4xl">
                <CountUp to={1} />
                <span className="text-foreground/40"> in </span>
                <CountUp to={3} />
              </p>
              <p className="eyebrow mt-2">U.S. deliveries by Cesarean</p>
            </div>
            <div>
              <p className="text-4xl">
                <CountUp to={12} />
              </p>
              <p className="eyebrow mt-2">Pre-cut sheets</p>
            </div>
            <div>
              <p className="text-4xl">
                <CountUp to={90} />
              </p>
              <p className="eyebrow mt-2">Days of guided routine</p>
            </div>
          </Reveal>

          <ScarLine variant="straight" className="mt-12 h-6 w-full max-w-md" />

          <Reveal as="p" delay={300} className="mt-8 max-w-lg text-lg leading-relaxed">
            Everything in her life may feel centered on the baby. MATURA is built for her.
          </Reveal>
          <Reveal delay={400} className="mt-8">
            <a href="#faq" className="link-underline text-sm font-medium">
              Read Our Story
            </a>
          </Reveal>
        </div>

        <Reveal variant="scale" delay={150}>
          <img
            src={portrait}
            loading="lazy"
            width={1200}
            height={1200}
            alt="Warm portrait of a mother resting with a mug in soft window light"
            className="w-full rounded-[1.5rem] object-cover shadow-lift"
          />
        </Reveal>
      </div>
    </section>
  );
}
