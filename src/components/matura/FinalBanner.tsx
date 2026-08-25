import { Link } from "@tanstack/react-router";
import { Reveal } from "@/components/motion";

export function FinalBanner() {
  return (
    <section id="buy" className="mx-auto max-w-4xl px-5 pb-28 text-center lg:px-10">
      <Reveal as="h2" className="text-3xl leading-tight sm:text-[2.6rem]">
        Give Your Recovery the Same Care You Give Everything Else
      </Reveal>
      <Reveal as="p" delay={120} className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-foreground/70">
        Begin a clear, purpose-built 90-day scar-care routine with 12 pre-cut silicone sheets, a
        guided protocol and a premium storage pouch.
      </Reveal>
      <Reveal delay={220} className="mt-9">
        <Link
          to="/product"
          className="inline-block rounded-full bg-primary px-8 py-4 text-sm font-medium text-primary-foreground shadow-soft transition-all duration-200 hover:scale-[1.03] hover:shadow-lift"
        >
          Shop the 90-Day System
        </Link>
      </Reveal>
      <Reveal as="p" delay={300} className="mt-6 text-[0.68rem] text-muted-foreground">
        Begin only after the incision is fully closed and after clinician confirmation.
      </Reveal>
    </section>
  );
}
