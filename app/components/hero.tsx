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
      <div
        className={`relative bg-paper pt-12 pb-10 md:pt-20 md:pb-14 lg:pb-44 ${inset}`}
      >
        <HeroLines />
        {/* The pitch settles in line by line (100ms apart) while the linework draws. */}
        <div className="relative flex flex-col items-center text-center">
          <h1
            id="hero-title"
            className="m-0 max-w-250 text-h2 text-balance text-neutral-500 motion-safe:animate-rise sm:text-h1 lg:text-display"
          >
            {/* Each sentence gets its own line, so the draft-to-final color change never falls mid-line. */}
            Ide konten masih berantakan?{" "}
            <span className="block text-ink">Jadikan naskah siap posting.</span>
          </h1>
          <p className="mt-5 mb-0 max-w-140 text-body text-pretty text-neutral-600 motion-safe:animate-rise motion-safe:[animation-delay:100ms] md:mt-6 md:text-body-l">
            Ketik ide seadanya, Scripta tulis draft pertamanya. Kamu tinggal
            merapikan gaya bahasanya.
          </p>
          {/* Narrow screens: the pair splits the row evenly, and each button takes the full width once they wrap. */}
          <div className="mt-8 flex w-full flex-wrap justify-center gap-3 motion-safe:animate-rise motion-safe:[animation-delay:200ms] sm:w-auto">
            <Button size="lg" className="grow basis-36 justify-center sm:grow-0 sm:basis-auto">
              Coba gratis
              <ArrowRight />
            </Button>
            <a
              href="#fitur"
              className={buttonClass(
                "tonal",
                "lg",
                "grow basis-36 justify-center sm:grow-0 sm:basis-auto",
              )}
            >
              Lihat fitur
            </a>
          </div>
        </div>
      </div>

      {/* Showcase: the illustration is the largest thing in the hero. It stands on the section's bottom hairline and
          rises into the stage; its transparent top (~11% of the photo) lets the mic tip land just under the CTAs.
          Mobile and tablet: the demo rides up over the photo's sleeve, and the copy follows it.
          Desktop: they float over the photo's upper half, left and right of the hand. The demo caption moves above the
          box there, so it never lands on the dark sleeve. */}
      <div className="relative flow-root bg-paper">
        {/* Asset: /hero-mic.png (see docs/asset-brief.md, #1), 1122 × 1402. */}
        <Cutout
          src="/hero-mic.png"
          className="relative mx-auto -mt-6 aspect-1122/1402 w-full max-w-108 md:-mt-10 md:max-w-136 lg:-mt-56 lg:max-w-152"
        />

        <div className="relative -mt-24 grid gap-6 px-5 pb-8 md:-mt-32 md:px-8 md:pb-10 lg:contents">
          <div className="flex flex-col gap-4 lg:absolute lg:top-6 lg:left-12 lg:w-74">
            <p className="m-0 max-w-120 text-body text-pretty text-neutral-600 md:text-body-l">
              Scripta bantu kamu brainstorming sudut kontennya, lalu menulis
              draft hook video, caption carousel, atau outline YouTube.
            </p>
            <p className="m-0 max-w-90 text-small text-pretty text-neutral-600">
              Mulai dari draft pertama, bukan halaman kosong. Suara akhirnya
              tetap punyamu.
            </p>
          </div>

          <div className="order-first flex min-w-0 flex-col gap-4 lg:absolute lg:flex-col-reverse lg:top-0 lg:right-12 lg:w-100">
            <DemoBox idea={demoIdea} drafts={demoDrafts} />
            <p className="m-0 text-small text-pretty text-neutral-600 lg:max-w-72 lg:self-end lg:text-right">
              Contoh ide dan draft. Pilih format di atas draft untuk melihat
              hasil lainnya.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
