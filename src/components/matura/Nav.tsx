import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Monogram } from "@/components/motion";

const LINKS = [
  
  { label: "How It Works", href: "#how-it-works" },
  { label: "The Protocol", href: "#protocol" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
];

const MESSAGES = [
  "Free U.S. shipping on orders over $75.",
  "Designed for the full 90-day scar-care routine.",
];

export function AnnouncementBar() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v === 0 ? 1 : 0)), 7000);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="bg-foreground/95 px-4 py-2.5 text-center">
      <p
        key={i}
        className="eyebrow animate-in fade-in duration-700 text-[0.65rem] text-background/85"
      >
        {MESSAGES[i]}
      </p>
    </div>
  );
}

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-500",
        scrolled || open ? "bg-background/92 shadow-soft backdrop-blur-md" : "bg-transparent",
      )}
    >
      <nav
        aria-label="Primary"
        className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 py-3 sm:gap-4 sm:px-5 sm:py-4 lg:px-10"
      >
        <a href="#top" className="flex min-w-0 items-center gap-2 sm:gap-3">
          <Monogram />
          <span className="truncate text-base font-medium tracking-[0.28em] sm:text-lg sm:tracking-[0.32em]">
            MATURA
          </span>
        </a>

        <div className="flex shrink-0 items-center gap-4 lg:gap-8">
          <ul className="hidden items-center gap-7 lg:flex">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="link-underline text-sm text-foreground/70 transition-colors hover:text-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <Link
            to="/product"
            className="hidden rounded-full bg-primary px-5 py-2.5 text-xs font-medium tracking-wide text-primary-foreground shadow-soft transition-all duration-200 hover:scale-[1.03] hover:shadow-lift sm:inline-flex sm:text-sm"
          >
            Shop the 90-Day System
          </Link>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-border/70 text-foreground transition-colors hover:bg-muted lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border/60 bg-background/97 px-4 pb-6 pt-3 backdrop-blur-md lg:hidden">
          <ul className="flex flex-col">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-border/50 py-3.5 text-sm text-foreground/75 transition-colors hover:text-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <Link
            to="/product"
            onClick={() => setOpen(false)}
            className="mt-5 block rounded-full bg-primary px-5 py-3 text-center text-sm font-medium tracking-wide text-primary-foreground shadow-soft"
          >
            Shop the 90-Day System
          </Link>
        </div>
      )}
    </header>
  );
}

