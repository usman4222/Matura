import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { toast } from "sonner";
import { Check, Lock, Ruler, ShieldCheck, ShoppingBag, Truck } from "lucide-react";
import { Reveal, Monogram } from "@/components/motion";
import { cn } from "@/lib/utils";
import heroProduct from "@/assets/hero-product.jpg";

export const PRODUCT = {
  name: "MATURA C-Section Scar Recovery Sheets — 90-Day System",
  price: 89,
  currency: "USD",
};

const BULLETS = [
  { icon: Ruler, text: "Pre-cut to 16 cm x 4.5 cm" },
  { icon: Check, text: "12 sheets designed to support a 90-day routine" },
  { icon: ShieldCheck, text: "Translucent matte finish" },
  { icon: Check, text: "Minimum 12 hours daily" },
  { icon: ShoppingBag, text: "Premium storage pouch included" },
];

function flashWhenToStart() {
  const el = document.getElementById("when-to-start");
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "center" });
  el.classList.remove("is-flashing");
  void el.offsetWidth;
  el.classList.add("is-flashing");
}

export function useAddToCart() {
  const [pulse, setPulse] = useState(false);
  const add = () => {
    setPulse(true);
    window.setTimeout(() => setPulse(false), 600);
    toast.success("Added to cart", { description: PRODUCT.name });
  };
  return { pulse, add };
}

export function BuyPanel({ ctaRef }: { ctaRef: React.RefObject<HTMLDivElement | null> }) {
  const { pulse, add } = useAddToCart();

  return (
    <div className="lg:sticky lg:top-28">
      <Reveal as="p" className="eyebrow">
        90-Day System
      </Reveal>
      <Reveal as="h1" delay={80} className="mt-5 text-[2rem] leading-[1.12] sm:text-[2.6rem]">
        {PRODUCT.name}
      </Reveal>
      <Reveal as="p" delay={160} className="mt-6 text-base leading-relaxed text-foreground/70">
        A complete C-section scar-care system with 12 pre-cut PDMS silicone sheets, a three-phase
        90-day protocol and a premium storage pouch. Designed for discreet, comfortable daily wear
        after the incision has fully closed.
      </Reveal>

      <ul className="mt-8 space-y-3.5">
        {BULLETS.map((b, i) => (
          <Reveal as="li" key={b.text} delay={220 + i * 90} className="flex items-center gap-3 text-sm text-foreground/85">
            <b.icon className="h-4 w-4 shrink-0 text-foreground/60" aria-hidden="true" />
            {b.text}
          </Reveal>
        ))}
      </ul>

      <Reveal delay={620} className="mt-9" >
        <div ref={ctaRef} className="flex flex-wrap items-center gap-5">
          <p className="text-2xl">${PRODUCT.price}</p>
          <button
            type="button"
            onClick={add}
            className="inline-flex min-h-12 items-center gap-2.5 rounded-full bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground shadow-soft transition-all duration-200 hover:scale-[1.03] hover:shadow-lift"
          >
            <ShoppingBag className={cn("h-4 w-4", pulse && "animate-bounce")} aria-hidden="true" />
            Add to Cart
          </button>
        </div>
        <button
          type="button"
          onClick={flashWhenToStart}
          className="link-underline mt-5 inline-block text-sm text-foreground/75"
        >
          When can I start?
        </button>
      </Reveal>

      <Reveal delay={700} className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-xs text-muted-foreground">
        <span className="inline-flex items-center gap-2">
          <Truck className="h-3.5 w-3.5" aria-hidden="true" /> Free U.S. shipping over $75
        </span>
        <span className="inline-flex items-center gap-2">
          <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" /> 30-day returns on unopened boxes
        </span>
        <span className="inline-flex items-center gap-2">
          <Lock className="h-3.5 w-3.5" aria-hidden="true" /> Secure checkout
        </span>
      </Reveal>
    </div>
  );
}

export function StickyBar({ ctaRef }: { ctaRef: React.RefObject<HTMLDivElement | null> }) {
  const [show, setShow] = useState(false);
  const { pulse, add } = useAddToCart();
  const observed = useRef(false);

  useEffect(() => {
    const el = ctaRef.current;
    if (!el || observed.current) return;
    observed.current = true;
    const io = new IntersectionObserver(
      ([entry]) => setShow(!!entry && !entry.isIntersecting && entry.boundingClientRect.top < 0),
      { threshold: 0 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [ctaRef]);

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 backdrop-blur-md transition-transform duration-500",
        show ? "translate-y-0" : "translate-y-full",
      )}
      aria-hidden={!show}
    >
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-5 py-3 lg:px-10">
        <img src={heroProduct} alt="" width={64} height={64} loading="lazy" className="h-12 w-12 rounded-xl object-cover" />
        <div className="min-w-0 flex-1">
          <p className="truncate text-xs text-foreground/80">{PRODUCT.name}</p>
          <p className="text-sm">${PRODUCT.price}</p>
        </div>
        <button
          type="button"
          onClick={add}
          tabIndex={show ? 0 : -1}
          className="inline-flex min-h-11 items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-soft transition-all duration-200 hover:scale-[1.03] hover:shadow-lift"
        >
          <ShoppingBag className={cn("h-4 w-4", pulse && "animate-bounce")} aria-hidden="true" />
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export function ProductNav() {
  return (
    <header className="sticky top-0 z-40 bg-background/92 shadow-soft backdrop-blur-md">
      <nav
        aria-label="Primary"
        className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 py-3 sm:gap-4 sm:px-5 sm:py-4 lg:px-10"
      >
        <Link to="/" className="flex min-w-0 items-center gap-2 sm:gap-3">
          <Monogram />
          <span className="truncate text-base font-medium tracking-[0.28em] sm:text-lg sm:tracking-[0.32em]">
            MATURA
          </span>
        </Link>
        <Link to="/" className="link-underline shrink-0 text-xs text-foreground/70 sm:text-sm">
          Back to home
        </Link>
      </nav>
    </header>
  );
}
