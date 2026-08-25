import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { Reveal, ScarLine } from "@/components/motion";

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
