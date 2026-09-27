import { ArrowRight, Button, buttonClass } from "./ui/button";
import { Cutout } from "./ui/cutout";
import { DemoBox } from "./ui/demo-box";
import { demoDrafts, demoIdea } from "./demo-drafts";
import { HeroLines } from "./hero-lines";

const inset = "px-5 md:px-8 lg:px-12";

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="border-b border-line">
      {/* Stage: centered pitch. On desktop the bottom padding leaves room for the linework and the top of the illustration. */}
      <div className={`relative bg-paper pt-12 pb-10 md:pt-20 md:pb-14 lg:pb-44 ${inset}`}>
        <HeroLines />
        {/* The pitch settles in line by line (100ms apart) while the linework draws. */}
        <div className="relative flex flex-col items-center text-center">
          <h1
            id="hero-title"
            className="m-0 max-w-250 text-h2 text-balance text-neutral-500 motion-safe:animate-rise sm:text-h1 lg:text-display"
          >
            {/* Each sentence gets its own line, so the draft-to-final color change never falls mid-line. */}
            Ide konten masih berantakan? <span className="block text-ink">Jadikan naskah siap posting.</span>
          </h1>
          <p className="mt-5 mb-0 max-w-140 text-body text-pretty text-neutral-600 motion-safe:animate-rise motion-safe:[animation-delay:100ms] md:mt-6 md:text-body-l">
            Ketik ide seadanya, Scripta tulis draft pertamanya. Kamu tinggal merapikan gaya bahasanya.
          </p>
          {/* Narrow screens: the pair fills the row, and each button takes the full width once they wrap. */}
          <div className="mt-8 flex w-full flex-wrap justify-center gap-3 motion-safe:animate-rise motion-safe:[animation-delay:200ms] sm:w-auto">
            <Button size="lg" className="grow justify-center sm:grow-0">
              Coba gratis
              <ArrowRight />
            </Button>
            <a href="#fitur" className={buttonClass("tonal", "lg", "grow justify-center sm:grow-0")}>
              Lihat fitur
            </a>
          </div>
        </div>
      </div>

      <div className="grid gap-px border-t border-line bg-line lg:grid-cols-12">
        <div className={`flex flex-col gap-4 bg-paper py-8 md:py-10 lg:col-span-4 lg:py-12 ${inset}`}>
          <p className="m-0 max-w-120 text-body text-pretty text-neutral-600 md:text-body-l">
            Scripta bantu kamu brainstorming sudut kontennya, lalu menulis draft hook video, caption carousel, atau outline
            YouTube.
          </p>
          <p className="m-0 max-w-90 text-small text-pretty text-neutral-600">
            Mulai dari draft pertama, bukan halaman kosong. Suara akhirnya tetap punyamu.
          </p>
        </div>

        {/* Mobile: the illustration closes the hero, after the demo, so the product proof stays near the CTAs.
            Desktop: it anchors to this cell's bottom and rises into the stage. */}
        <div className="relative order-last bg-paper px-5 py-8 md:px-8 lg:order-none lg:col-span-3 lg:p-0">
          {/* Asset: /hero-mic.png (see docs/asset-brief.md, #1). */}
          <Cutout className="mx-auto aspect-3/4 w-full max-w-72 lg:absolute lg:-inset-x-6 lg:-top-36 lg:bottom-0 lg:aspect-auto lg:w-auto lg:max-w-none" />
        </div>

        <div className="flex min-w-0 flex-col gap-4 bg-paper px-5 py-8 md:px-8 md:py-10 lg:col-span-5 lg:py-12">
          <DemoBox idea={demoIdea} drafts={demoDrafts} />
          <p className="m-0 text-small text-neutral-600">
            Contoh ide dan draft. Pilih format di atas draft untuk melihat hasil lainnya.
          </p>
        </div>
      </div>
    </section>
  );
}
