import { useEffect, useRef, useState, type ReactElement } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion";
import heroProduct from "@/assets/hero-product.jpg";
import systemFlatlay from "@/assets/system-flatlay.jpg";
import flatlayBox from "@/assets/flatlay-box.jpg";
import lifestyle from "@/assets/lifestyle.jpg";
import portrait from "@/assets/portrait.jpg";

type Slide = {
  id: string;
  alt: string;
  caption?: string;
  image?: string;
  render?: () => ReactElement;
};

function DimensionDiagram() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-sand/30 p-10">
      <svg viewBox="0 0 400 260" className="draw-line is-visible h-full w-full" role="img" aria-label="Sheet dimension diagram: 16 cm by 4.5 cm">
        <rect x="60" y="105" width="280" height="80" rx="14" fill="var(--mint)" opacity="0.55" />
        <line x1="60" y1="70" x2="340" y2="70" stroke="var(--charcoal)" strokeWidth="1" />
        <line x1="60" y1="60" x2="60" y2="80" stroke="var(--charcoal)" strokeWidth="1" />
        <line x1="340" y1="60" x2="340" y2="80" stroke="var(--charcoal)" strokeWidth="1" />
        <text x="200" y="52" textAnchor="middle" fontSize="15" fill="var(--charcoal)">16 cm</text>
        <line x1="370" y1="105" x2="370" y2="185" stroke="var(--charcoal)" strokeWidth="1" />
        <text x="378" y="150" fontSize="14" fill="var(--charcoal)">4.5 cm</text>
      </svg>
    </div>
  );
}

function PhaseGraphic() {
  const phases = ["Introduction", "Active Treatment", "Completion"];
  return (
    <div className="flex h-full w-full flex-col justify-center gap-5 bg-mint/25 p-10">
      {phases.map((p, i) => (
        <div key={p} className="flex items-center gap-4">
          <span className="grid h-9 w-9 place-items-center rounded-full border border-foreground/20 text-xs">
            {i + 1}
          </span>
          <span className="text-sm tracking-wide">{p}</span>
        </div>
      ))}
    </div>
  );
}

function RitualIcons() {
  const steps = ["Clean", "Dry", "Apply", "Wear", "Wash", "Air-dry"];
  return (
    <div className="grid h-full w-full grid-cols-3 content-center gap-4 bg-card p-10">
      {steps.map((s) => (
        <div key={s} className="surface-card grid aspect-square place-items-center text-xs tracking-wide">
          {s}
        </div>
      ))}
    </div>
  );
}

function StandardsRow() {
  const badges = ["PDMS", "USP Class VI", "ISO 10993", "ISO 13485", "FDA Registered Facility"];
  return (
    <div className="flex h-full w-full flex-col justify-center gap-3 bg-sand/30 p-10">
      {badges.map((b) => (
        <div key={b} className="rounded-full border border-foreground/15 bg-background/70 px-5 py-2.5 text-center text-xs tracking-[0.18em] uppercase">
          {b}
        </div>
      ))}
      <p className="mt-2 text-[0.65rem] leading-relaxed text-muted-foreground">
        Manufacturing standards shown as documented by the facility. Not an FDA approval or clearance.
      </p>
    </div>
  );
}

const SLIDES: Slide[] = [
  { id: "hero", image: heroProduct, alt: "MATURA 90-day system box with one silicone sheet and storage pouch on soft ivory" },
  { id: "system", image: systemFlatlay, alt: "Complete MATURA system flat lay with box, sheets, pouch and protocol card", caption: "One guided 90-day routine." },
  { id: "fit", alt: "Diagram showing sheet dimensions of 16 cm by 4.5 cm", caption: "No measuring. No scissors.", render: () => <DimensionDiagram /> },
  { id: "discreet", image: lifestyle, alt: "Woman in soft everyday clothing in warm natural light", caption: "Translucent matte finish." },
  { id: "phases", alt: "Three-phase protocol graphic", caption: "Introduction → Active Treatment → Completion", render: () => <PhaseGraphic /> },
  { id: "ritual", alt: "Daily ritual steps", caption: "Clean → Dry → Apply → Wear → Wash → Air-dry", render: () => <RitualIcons /> },
  { id: "standards", alt: "Manufacturing standards badges", render: () => <StandardsRow /> },
  { id: "close", image: portrait, alt: "Warm postpartum lifestyle portrait in natural light", caption: "Care that keeps pace with your recovery." },
];

export function Gallery() {
  const [active, setActive] = useState(0);
  const touchX = useRef<number | null>(null);
  const [thumbFallback] = useState(flatlayBox);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") setActive((i) => Math.min(i + 1, SLIDES.length - 1));
      if (e.key === "ArrowLeft") setActive((i) => Math.max(i - 1, 0));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="flex min-w-0 flex-col gap-4 lg:gap-5">
      <div
        className="relative aspect-square w-full min-w-0 overflow-hidden rounded-[1.75rem] bg-card shadow-soft"
        onTouchStart={(e) => (touchX.current = e.touches[0]?.clientX ?? null)}
        onTouchEnd={(e) => {
          if (touchX.current === null) return;
          const dx = (e.changedTouches[0]?.clientX ?? touchX.current) - touchX.current;
          if (Math.abs(dx) > 45) {
            setActive((i) =>
              dx < 0 ? Math.min(i + 1, SLIDES.length - 1) : Math.max(i - 1, 0),
            );
          }
          touchX.current = null;
        }}
      >
        {SLIDES.map((s, i) => (
          <div
            key={s.id}
            aria-hidden={i !== active}
            className={cn(
              "absolute inset-0 transition-opacity duration-[350ms]",
              i === active ? "opacity-100" : "pointer-events-none opacity-0",
            )}
          >
            {s.image ? (
              <img
                src={s.image ?? thumbFallback}
                alt={s.alt}
                width={1200}
                height={1200}
                loading={i === 0 ? "eager" : "lazy"}
                className="h-full w-full object-cover"
              />
            ) : (
              s.render?.()
            )}
          </div>
        ))}

        {SLIDES[active]?.caption ? (
          <p
            key={SLIDES[active]?.id}
            className="absolute inset-x-0 bottom-0 animate-in fade-in duration-700 bg-gradient-to-t from-charcoal/70 to-transparent px-6 py-5 text-sm text-background"
          >
            {SLIDES[active]?.caption}
          </p>
        ) : null}
      </div>

      <ul
        className="-mx-1 flex shrink-0 gap-3 overflow-x-auto px-1 py-1"
        aria-label="Product image thumbnails"
      >
        {SLIDES.map((s, i) => (
          <li key={s.id} className="shrink-0">
            <button
              type="button"
              onClick={() => setActive(i)}
              aria-label={`View image ${i + 1}: ${s.alt}`}
              aria-current={i === active}
              className={cn(
                "h-16 w-16 overflow-hidden rounded-xl border transition-all duration-300 lg:h-20 lg:w-20",
                i === active ? "border-foreground/60 shadow-soft" : "border-border opacity-70 hover:opacity-100",
              )}
            >
              {s.image ? (
                <img src={s.image} alt="" loading="lazy" className="h-full w-full object-cover" />
              ) : (
                <span className="grid h-full w-full place-items-center bg-mint/40 text-[0.55rem] tracking-widest uppercase">
                  {s.id}
                </span>
              )}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export const galleryReveal = Reveal;
