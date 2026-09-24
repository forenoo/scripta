import { CtaButton } from "../components/cta-button";
import { ArrowRight } from "../components/ui/button";

export function meta() {
  return [{ title: "CTA test · Scripta" }];
}

export default function CtaTest() {
  return (
    <main className="mx-auto flex max-w-300 flex-col gap-8 p-12">
      <span className="font-mono text-label text-neutral-600 uppercase">CTA button · uji token</span>
      <div className="flex flex-wrap items-center gap-3">
        <CtaButton>
          Coba gratis
          <ArrowRight />
        </CtaButton>
        <CtaButton variant="secondary">Masuk</CtaButton>
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <CtaButton disabled>Coba gratis</CtaButton>
        <CtaButton variant="secondary" disabled>
          Masuk
        </CtaButton>
      </div>
    </main>
  );
}
