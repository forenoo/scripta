import type { Route } from "./+types/home";
import { ClosingCta } from "../components/closing-cta";
import { Features } from "../components/features";
import { Footer } from "../components/footer";
import { Hero } from "../components/hero";
import { Pricing } from "../components/pricing";
import { SocialProof } from "../components/social-proof";
import { Button } from "../components/ui/button";
import { Wordmark } from "../components/ui/wordmark";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Scripta · Dari ide mentah jadi naskah siap posting" },
    {
      name: "description",
      content:
        "Ketik ide konten seadanya, Scripta bantu brainstorming dan menulis draft hook video, caption carousel, atau outline YouTube.",
    },
  ];
}

export default function Home() {
  return (
    <div className="mx-auto min-h-screen max-w-300 border-x border-line">
      <header className="flex items-center gap-6 border-b border-line px-5 py-4 md:px-8 lg:px-12">
        <a href="/" aria-label="Scripta, beranda" className="text-ink hover:text-ink">
          <Wordmark />
        </a>
        <Button variant="secondary" size="sm" className="ml-auto">
          Masuk
        </Button>
      </header>
      <main>
        <Hero />
        <Features />
        <SocialProof />
        <Pricing />
        <ClosingCta />
      </main>
      <Footer />
    </div>
  );
}
