import { Star } from "lucide-react";
import { Reveal } from "@/components/motion";

const REVIEWS = [
  {
    name: "Danielle R.",
    quote:
      "Having the sheets pre-cut removed the one step I kept putting off. The protocol card told me exactly what week I was in.",
  },
  {
    name: "Amara K.",
    quote:
      "It sits flat under my leggings, so I stopped thinking about it. That's what finally made me consistent.",
  },
  {
    name: "Priya S.",
    quote:
      "The pouch sounds like a small thing until you're keeping track of one sheet for a week and a half.",
  },
];

export function Reviews() {
  return (
    <section id="reviews" className="mx-auto max-w-7xl px-5 py-24 lg:px-10 lg:py-32">
      <Reveal as="h2" className="max-w-2xl text-3xl leading-tight sm:text-4xl">
        Recovery, In Her Own Words
      </Reveal>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {REVIEWS.map((r, i) => (
          <Reveal key={r.name} delay={i * 130} variant="scale">
            <article className="surface-card h-full p-8">
              <div className="flex items-center gap-1" aria-label="Rated 5 out of 5">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="h-3.5 w-3.5 fill-accent text-accent" aria-hidden="true" />
                ))}
              </div>
              <p className="mt-6 text-sm leading-relaxed text-foreground/80">"{r.quote}"</p>
              <p className="mt-6 flex items-center gap-3 text-sm">
                <span className="font-medium">{r.name}</span>
                <span className="rounded-full bg-mint/50 px-2.5 py-1 text-[0.6rem] tracking-[0.14em] uppercase">
                  Verified
                </span>
              </p>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal as="p" delay={300} className="mt-8 text-[0.68rem] text-muted-foreground">
        Individual experiences vary.
      </Reveal>
      <Reveal as="p" delay={360} className="mt-3 text-sm text-foreground/60">
        The MATURA community is just beginning. Questions about fit, timing or the routine? Visit our{" "}
        <a href="#faq" className="link-underline text-foreground">
          FAQ
        </a>{" "}
        or contact support.
      </Reveal>
    </section>
  );
}
