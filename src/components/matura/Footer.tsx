import { Monogram } from "@/components/motion";

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
