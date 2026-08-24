import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { AnnouncementBar, Nav } from "@/components/matura/Nav";
import { Hero } from "@/components/matura/Hero";
import {
  BrandStory,
  Comparison,
  Features,
  HowItWorks,
  InTheBox,
  LifestyleBanner,
  ProblemSolution,
  Protocol,
  TrustStrip,
} from "@/components/matura/Sections";
import {
  EmailCapture,
  Faq,
  FinalBanner,
  Footer,
  Reviews,
} from "@/components/matura/Bottom";
import { ScrollProgress } from "@/components/matura/ScrollProgress";

const title = "MATURA | C-Section Scar Recovery Sheets — 90-Day System";
const description =
  "Twelve pre-cut medical-grade silicone sheets, a guided 90-day protocol and a premium storage pouch, purpose-built for C-section scar care.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <AnnouncementBar />
      <Nav />
      <main>
        <Hero />
        <TrustStrip />
        <ProblemSolution />
        <Features />
        <HowItWorks />
        <Protocol />
        <InTheBox />
        <LifestyleBanner />
        <Comparison />
        <BrandStory />
        <Reviews />
        <Faq />
        <EmailCapture />
        <FinalBanner />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
