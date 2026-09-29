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
        {/* The pseudo-element stretches the tap area to 44px without making the button look heavier. */}
        <Button variant="secondary" size="sm" className="relative ml-auto after:absolute after:inset-x-0 after:-inset-y-1.5">
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
