import { ArrowRight, Button, buttonClass } from "./ui/button";
import { DemoBox } from "./ui/demo-box";
import { demoDrafts, demoIdea } from "./demo-drafts";
import { HeroLines } from "./hero-lines";

const inset = "px-5 md:px-8 lg:px-12";

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="border-b border-line">
      {/* Stage: centered pitch. On desktop the bottom padding leaves room for the linework and the top of the illustration. */}
      <div className={`relative bg-paper pt-12 pb-10 md:pt-20 md:pb-14 lg:pb-60 ${inset}`}>
        <HeroLines />
        <div className="relative flex flex-col items-center text-center">
          <h1
            id="hero-title"
            className="m-0 max-w-250 text-h2 text-balance text-draft sm:text-h1 lg:text-display"
          >
            Ide konten masih berantakan? <span className="text-ink">Jadikan naskah siap posting.</span>
          </h1>
          <p className="mt-5 mb-0 max-w-140 text-body text-pretty text-neutral-600 md:mt-6 md:text-body-l">
            Ketik ide seadanya. Kamu tinggal merapikan gaya bahasanya.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button size="lg">
              Coba gratis
              <ArrowRight />
            </Button>
            <a href="#fitur" className={buttonClass("outline", "lg")}>
              Lihat fitur
            </a>
          </div>
        </div>
      </div>

      <div className="grid gap-px border-t border-line bg-line lg:grid-cols-12">
        <div className={`flex flex-col gap-4 bg-paper py-8 md:py-10 lg:col-span-4 lg:justify-end lg:py-12 ${inset}`}>
          <p className="m-0 max-w-120 text-body text-pretty text-neutral-600 md:text-body-l">
            Scripta bantu kamu brainstorming sudut kontennya, lalu menulis draft hook video, caption carousel, atau outline
            YouTube.
          </p>
          <p className="m-0 max-w-90 text-small text-pretty text-neutral-600">
            Draft pertama, bukan naskah final. Suara akhirnya tetap punyamu.
          </p>
        </div>

        {/* Mobile: the illustration follows the CTAs. Desktop: it anchors to this cell's bottom and rises into the stage. */}
        <div className="relative order-first bg-paper px-5 pt-2 pb-8 md:px-8 lg:order-none lg:col-span-3 lg:p-0">
          <HeroIllustration className="mx-auto aspect-3/4 w-full max-w-72 lg:absolute lg:-inset-x-6 lg:-top-52 lg:bottom-0 lg:aspect-auto lg:w-auto lg:max-w-none" />
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

// Pass `src` once the generated asset lands in public/ (a transparent PNG/WebP, subject anchored to the bottom edge).
// Until then the slot renders a placeholder so the layout keeps its final proportions.
function HeroIllustration({ src, className }: { src?: string; className?: string }) {
  return (
    <div className={className}>
      {src ? (
        <img src={src} alt="" className="size-full object-contain object-bottom" />
      ) : (
        <div className="grid size-full place-items-center border border-dashed border-neutral-300 bg-paper">
          <div className="flex flex-col items-center gap-1 px-4 text-center">
            <span className="text-small text-neutral-600">Ruang ilustrasi</span>
            <span className="font-mono text-label text-neutral-600 uppercase">PNG transparan · potret</span>
          </div>
        </div>
      )}
    </div>
  );
}
