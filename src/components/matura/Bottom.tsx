import { useState, type FormEvent } from "react";
import { Star } from "lucide-react";
import { toast } from "sonner";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "@tanstack/react-router";
import { Reveal, ScarLine, Monogram } from "@/components/motion";

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

export function EmailCapture() {
  const [email, setEmail] = useState("");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) {
      toast.error("Please enter a valid email address.");
      return;
    }
    setEmail("");
    toast.success("Thank you — the guide is on its way.");
  };

  return (
    <section className="mx-auto max-w-7xl px-5 py-24 lg:px-10 lg:py-32">
      <div className="relative overflow-hidden rounded-[2rem] bg-mint/35 px-6 py-16 sm:px-14">
        <ScarLine className="absolute inset-x-0 top-0 h-24 opacity-60" />
        <div className="relative mx-auto max-w-2xl text-center">
          <Reveal as="h2" className="text-3xl leading-tight sm:text-4xl">
            Guidance for the Recovery No One Fully Explained
          </Reveal>
          <Reveal as="p" delay={120} className="mt-6 text-base leading-relaxed text-foreground/75">
            Receive calm, practical education about C-section scar care, product use and the 90-day
            routine. No pressure. No impossible promises.
          </Reveal>
          <Reveal delay={220} className="mt-9">
            <form onSubmit={onSubmit} className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row">
              <label htmlFor="email" className="sr-only">
                Your email address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="w-full rounded-full border border-foreground/10 bg-background px-5 py-3.5 text-sm outline-none transition-shadow focus:ring-2 focus:ring-ring"
              />
              <button
                type="submit"
                className="shrink-0 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-soft transition-all duration-200 hover:scale-[1.03] hover:shadow-lift"
              >
                Send Me the Guide
              </button>
            </form>
          </Reveal>
          <Reveal as="p" delay={300} className="mt-6 text-[0.68rem] leading-relaxed text-foreground/55">
            By subscribing, you agree to receive MATURA emails. Unsubscribe anytime. See Privacy
            Policy.
          </Reveal>
        </div>
      </div>
    </section>
  );
}

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

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/60">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-[1fr_auto] lg:px-10">
        <div className="min-w-0">
          <div className="flex items-center gap-3">
            <Monogram />
            <span className="text-lg font-medium tracking-[0.32em]">MATURA</span>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-foreground/65">
            Everything in her life may feel centered on the baby. MATURA is built for her.
          </p>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-foreground/65">
          <a href="#shop" className="link-underline">
            Shop
          </a>
          <a href="#how-it-works" className="link-underline">
            How It Works
          </a>
          <a href="#faq" className="link-underline">
            FAQ
          </a>
          <a href="#top" className="link-underline">
            Privacy Policy
          </a>
          <a href="#top" className="link-underline">
            Terms
          </a>
        </nav>
      </div>
      <div className="border-t border-border/70 px-5 py-6 text-center text-[0.68rem] text-muted-foreground lg:px-10">
        © {new Date().getFullYear()} MATURA. These statements have not been evaluated by the FDA.
        This product is not intended to diagnose, treat, cure or prevent any disease.
      </div>
    </footer>
  );
}
