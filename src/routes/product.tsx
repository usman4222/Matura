import { useRef } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { ScrollProgress } from "@/components/matura/ScrollProgress";
import { Gallery } from "@/components/matura/product/Gallery";
import { BuyPanel, ProductNav, StickyBar, PRODUCT } from "@/components/matura/product/BuyPanel";
import { Benefits, Facts, HowToUse, Warnings } from "@/components/matura/product/Sections";
import { Footer } from "@/components/matura/Bottom";

const title = "MATURA C-Section Scar Recovery Sheets — 90-Day System";
const description =
  "12 pre-cut PDMS medical-grade silicone sheets, a three-phase 90-day protocol and a premium storage pouch for discreet daily C-section scar care.";

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: PRODUCT.name,
  description,
  brand: { "@type": "Brand", name: "MATURA" },
  category: "Scar care",
  offers: {
    "@type": "Offer",
    price: PRODUCT.price,
    priceCurrency: PRODUCT.currency,
    availability: "https://schema.org/InStock",
  },
};

export const Route = createFileRoute("/product")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "product" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(productSchema) },
    ],
  }),
  component: ProductPage,
});

function ProductPage() {
  const ctaRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="min-h-screen bg-background pb-20">
      <ScrollProgress />
      <ProductNav />
      <main>
        <section className="mx-auto grid max-w-7xl gap-12 px-5 pb-16 pt-10 lg:grid-cols-2 lg:gap-16 lg:px-10 lg:pb-24 lg:pt-16">
          <Gallery />
          <BuyPanel ctaRef={ctaRef} />
        </section>
        <Benefits />
        <Facts />
        <HowToUse />
        <Warnings />
      </main>
      <Footer />
      <StickyBar ctaRef={ctaRef} />
      <Toaster />
    </div>
  );
}
