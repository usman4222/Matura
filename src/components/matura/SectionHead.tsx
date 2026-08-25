import { Reveal } from "@/components/motion";
import { cn } from "@/lib/utils";

export function SectionHead({
  eyebrow,
  title,
  body,
  center,
}: {
  eyebrow: string;
  title: string;
  body?: string;
  center?: boolean;
}) {
  return (
    <div className={cn("max-w-2xl", center && "mx-auto text-center")}>
      <Reveal as="p" className="eyebrow">
        {eyebrow}
      </Reveal>
      <Reveal as="h2" delay={100} className="mt-5 text-3xl leading-tight sm:text-4xl">
        {title}
      </Reveal>
      {body ? (
        <Reveal as="p" delay={200} className="mt-6 text-base leading-relaxed text-foreground/70">
          {body}
        </Reveal>
      ) : null}
    </div>
  );
}
