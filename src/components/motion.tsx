import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type ElementType,
  type ReactNode,
} from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

export function useInView<T extends HTMLElement>(threshold = 0.2) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setInView(true);
            observer.disconnect();
          }
        }
      },
      { threshold, rootMargin: "0px 0px -8% 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

export function prefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: ElementType;
  variant?: "rise" | "scale";
  /** Animate word by word — auto-enabled for string headings. */
  split?: boolean;
  /** Smooth GSAP hover lift, for cards. */
  lift?: boolean;
  id?: string;
};

const HEADINGS = new Set(["h1", "h2", "h3"]);

export function Reveal({
  children,
  delay = 0,
  className,
  as: Tag = "div",
  variant = "rise",
  split,
  lift,
  id,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  const autoSplit =
    split ?? (typeof children === "string" && typeof Tag === "string" && HEADINGS.has(Tag));
  const words = autoSplit && typeof children === "string" ? children.split(" ") : null;

  useIsomorphicLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (prefersReducedMotion()) {
      gsap.set(el, { opacity: 1, y: 0, scale: 1 });
      return;
    }

    const ctx = gsap.context(() => {
      const targets = words ? el.querySelectorAll<HTMLElement>("[data-word]") : [el];
      const from =
        variant === "scale"
          ? { opacity: 0, y: 14, scale: 0.965, filter: "blur(6px)" }
          : { opacity: 0, y: 26, filter: "blur(5px)" };

      gsap.set(el, { opacity: 1 });
      gsap.fromTo(targets, from, {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        duration: variant === "scale" ? 1.15 : 0.95,
        ease: "power3.out",
        delay: delay / 1000,
        stagger: words ? 0.055 : 0,
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
          once: true,
        },
      });
    }, el);

    return () => ctx.revert();
  }, [delay, variant, words?.length]);

  useEffect(() => {
    const el = ref.current;
    if (!el || !lift || prefersReducedMotion()) return;
    const enter = () =>
      gsap.to(el, { y: -6, scale: 1.015, duration: 0.45, ease: "power3.out", overwrite: "auto" });
    const leave = () =>
      gsap.to(el, { y: 0, scale: 1, duration: 0.55, ease: "power3.out", overwrite: "auto" });
    el.addEventListener("mouseenter", enter);
    el.addEventListener("mouseleave", leave);
    return () => {
      el.removeEventListener("mouseenter", enter);
      el.removeEventListener("mouseleave", leave);
    };
  }, [lift]);

  return (
    <Tag id={id} ref={ref} className={cn("gsap-reveal", className)}>
      {words
        ? words.map((word, i) => (
            <span key={`${word}-${i}`} className="inline-block overflow-hidden align-bottom">
              <span data-word className="inline-block will-change-transform">
                {word}
                {i < words.length - 1 ? "\u00a0" : ""}
              </span>
            </span>
          ))
        : children}
    </Tag>
  );
}

export function CountUp({
  to,
  duration = 1400,
  suffix = "",
  prefix = "",
  className,
}: {
  to: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (prefersReducedMotion()) {
      setValue(to);
      return;
    }
    const counter = { v: 0 };
    const ctx = gsap.context(() => {
      gsap.to(counter, {
        v: to,
        duration: duration / 1000,
        ease: "power2.out",
        onUpdate: () => setValue(Math.round(counter.v)),
        scrollTrigger: { trigger: el, start: "top 90%", once: true },
      });
    }, el);
    return () => ctx.revert();
  }, [to, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {value}
      {suffix}
    </span>
  );
}

/** The recurring thin mint "scar-line" arc that draws itself in on scroll. */
export function ScarLine({
  className,
  variant = "arc",
}: {
  className?: string;
  variant?: "arc" | "straight";
}) {
  const ref = useRef<HTMLDivElement | null>(null);

  useIsomorphicLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const path = el.querySelector("path");
    if (!path) return;

    if (prefersReducedMotion()) {
      gsap.set(path, { strokeDasharray: "none", strokeDashoffset: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      const length = path.getTotalLength() || 1200;
      gsap.fromTo(
        path,
        { strokeDasharray: length, strokeDashoffset: length },
        {
          strokeDashoffset: 0,
          duration: 1.9,
          ease: "power2.inOut",
          scrollTrigger: { trigger: el, start: "top 92%", once: true },
        },
      );
    }, el);

    return () => ctx.revert();
  }, [variant]);

  return (
    <div ref={ref} className={cn("pointer-events-none", className)}>
      <svg
        viewBox="0 0 1200 120"
        fill="none"
        preserveAspectRatio="none"
        className="h-full w-full"
        aria-hidden="true"
      >
        <path
          d={variant === "arc" ? "M0 110 C 300 10, 900 10, 1200 110" : "M0 60 L 1200 60"}
          stroke="var(--aqua)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

/** Adds a smooth GSAP lift + tilt on hover for cards. */
export function useGsapLift<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;

    const to = (vars: gsap.TweenVars) =>
      gsap.to(el, { duration: 0.45, ease: "power3.out", ...vars });

    const enter = () => to({ y: -6, scale: 1.015 });
    const leave = () => to({ y: 0, scale: 1 });

    el.addEventListener("mouseenter", enter);
    el.addEventListener("mouseleave", leave);
    return () => {
      el.removeEventListener("mouseenter", enter);
      el.removeEventListener("mouseleave", leave);
      gsap.killTweensOf(el);
    };
  }, []);

  return ref;
}

export function Monogram({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-grid h-9 w-9 shrink-0 place-items-center rounded-full border border-foreground/15 text-[0.7rem] font-medium tracking-[0.14em]",
        className,
      )}
      style={{ background: "var(--gradient-mint)" }}
      aria-hidden="true"
    >
      AA
    </span>
  );
}
