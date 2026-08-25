import { Reveal } from "@/components/motion";
import { SectionHead } from "./SectionHead";
import flatlay from "@/assets/flatlay-box.jpg";

const BOX_ITEMS = [
  "12 pre-cut medical-grade silicone sheets (16 cm x 4.5 cm)",
  "90-day recovery protocol card",
  "Premium storage pouch",
  "Instructions for safe application, cleaning and replacement",
];

export function InTheBox() {
  return (
    <section id="shop" className="mx-auto max-w-7xl px-5 py-24 lg:px-10 lg:py-32">
      <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal variant="scale">
          <img
            src={flatlay}
            loading="lazy"
            width={1408}
            height={1008}
            alt="Flat lay of the MATURA system: stacked pre-cut silicone sheets, protocol card and fabric storage pouch"
            className="w-full rounded-[1.5rem] object-cover shadow-lift"
          />
        </Reveal>
        <div>
          <SectionHead eyebrow="What's in the box" title="Everything the 90 Days Requires, Nothing It Doesn't" />
          <ul className="mt-10 space-y-4">
            {BOX_ITEMS.map((item, i) => (
              <Reveal key={item} as="li" variant="scale" delay={i * 130}>
                <div className="flex items-start gap-4 rounded-2xl border border-border/70 bg-card p-5 shadow-soft">
                  <span className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-mint text-[0.65rem] font-medium">
                    {i + 1}
                  </span>
                  <p className="text-sm leading-relaxed text-foreground/80">{item}</p>
                </div>
              </Reveal>
            ))}
          </ul>
          <Reveal as="p" delay={400} className="mt-8 text-sm leading-relaxed text-foreground/70">
            Twelve sheets at an intended 7 to 10 days per sheet provide enough product to support a
            90-day routine when used and cared for as directed. Actual sheet life may vary.
          </Reveal>
          <Reveal delay={500} className="mt-8">
            <a
              href="#buy"
              className="inline-block rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-soft transition-all duration-200 hover:scale-[1.03] hover:shadow-lift"
            >
              Shop MATURA
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
