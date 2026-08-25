const WARNINGS = [
  "For external use only.",
  "Do not use on open wounds or infected, irritated or actively draining skin.",
  "Stop use if a rash, persistent redness, swelling, pain or irritation develops, and contact a healthcare professional.",
  "Keep out of reach of children.",
  "If you have a history of adhesive or silicone sensitivity, ask a clinician before use.",
  "Always follow the final product label and Instructions for Use; they take priority over website summaries.",
];

export function Warnings() {
  return (
    <section className="mx-auto max-w-4xl px-5 pb-24 lg:px-10 lg:pb-32">
      <div className="rounded-[1.5rem] border border-border bg-sand/40 p-8 lg:p-10">
        <h2 className="text-xl">Warnings &amp; Support</h2>
        <ul className="mt-6 space-y-3">
          {WARNINGS.map((w) => (
            <li key={w} className="flex gap-3 text-sm leading-relaxed text-foreground">
              <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-foreground" />
              {w}
            </li>
          ))}
        </ul>
        <p className="mt-6 text-xs leading-relaxed text-foreground/70">
          Questions about your recovery? Speak with your doctor or qualified clinician. For product
          support, contact care@matura.example.
        </p>
      </div>
    </section>
  );
}
