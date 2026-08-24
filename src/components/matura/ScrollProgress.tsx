import { useEffect, useState } from "react";

/** Thin mint scar-line that traces down the page as the reader scrolls. */
export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? window.scrollY / max : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed right-5 top-1/2 z-40 hidden h-40 w-px -translate-y-1/2 bg-border/70 lg:block"
    >
      <div
        className="w-px origin-top transition-[height] duration-200 ease-out"
        style={{ height: `${progress * 100}%`, background: "var(--gradient-mint)" }}
      />
    </div>
  );
}
