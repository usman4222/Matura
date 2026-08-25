import { Reveal } from "@/components/motion";
import { SectionHead } from "./SectionHead";
import lifestyle from "@/assets/lifestyle.jpg";

export function LifestyleBanner() {
  return (
    <section className="bg-sand/40 py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:gap-20 lg:px-10">
        <Reveal variant="scale">
          <img
            src={lifestyle}
            loading="lazy"
            width={1200}
            height={1408}
            alt="Postpartum woman resting at home in soft loungewear and high-waist leggings by a sunlit window"
            className="w-full rounded-[1.5rem] object-cover shadow-lift"
          />
        </Reveal>
        <div>
          <SectionHead
            eyebrow="Made for real postpartum days"
            title="Comfortable Under the Clothes You Already Live In"
            body="The flexible, translucent matte sheet is designed for discreet 12+ hour daily wear beneath underwear, leggings and everyday clothing—so the routine can fit around feeding, rest, work and life with a newborn."
          />
          <Reveal delay={300} className="mt-9">
            <a href="#shop" className="link-underline text-sm font-medium">
              See Product Details
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
