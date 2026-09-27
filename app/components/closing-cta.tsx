import { ArrowRight, Button } from "./ui/button";
import { Cutout } from "./ui/cutout";

const inset = "px-5 md:px-8 lg:px-12";

// The same idea → format → edit loop the hero demo shows, restated as the last thing before the click.
const steps = [
  { title: "Ketik ide seadanya", detail: "Cukup satu baris, misalnya “review kopi susu gula aren 15rb di Jaksel”." },
  { title: "Pilih sudut dan format", detail: "Hook 15 detik, caption carousel, atau outline YouTube." },
  { title: "Rapikan, lalu posting", detail: "Draft-nya titik awal. Suara akhirnya tetap punyamu." },
];

export function ClosingCta() {
  return (
    <section id="mulai" aria-labelledby="mulai-title" className="grid gap-px border-b border-line bg-line">
      {/* Vertical padding lives on the columns, not the cell, so the bookend photo can stand on the hairline
          below. It mirrors the hero cutout: the same hand, now pressing a one-key pad that stands in for "Buat draft". */}
      <div className={`bg-paper ${inset}`}>
        <div className="grid lg:grid-cols-12">
          <span className="pt-16 font-mono text-label text-neutral-600 uppercase md:pt-24 lg:col-span-3 lg:pt-27">
            04 / Mulai
          </span>
          <div className="flex flex-col items-start gap-6 pt-4 pb-10 md:pb-12 lg:col-span-5 lg:pt-24 lg:pb-16">
            <h2 id="mulai-title" className="m-0 max-w-200 text-h2 text-balance text-ink sm:text-h1">
              Draft pertamanya biar Scripta yang tulis.
            </h2>
            <p className="m-0 max-w-140 text-body text-pretty text-neutral-600 md:text-body-l">
              Idenya sudah ada di kepalamu, nggak perlu nunggu rapi. Ketik apa yang ada di catatan HP-mu dan dapatkan
              sudut konten plus draft yang tinggal dipoles.
            </p>
            <div className="flex flex-col items-start gap-3 pt-2 sm:flex-row sm:items-center sm:gap-5">
              <Button size="lg">
                Coba gratis
                <ArrowRight />
              </Button>
              <span className="text-small text-neutral-600">Mulai dari paket Free, tanpa kartu kredit.</span>
            </div>
          </div>
          {/* Narrow screens: after the CTA, before the steps. From lg: fills the column's height, anchored low.
              Asset: /cta-macropad.png (see docs/asset-brief.md, #7). */}
          <div className="lg:relative lg:col-span-4">
            <Cutout className="mx-auto aspect-3/4 w-full max-w-60 lg:absolute lg:top-12 lg:right-0 lg:bottom-0 lg:left-8 lg:aspect-auto lg:w-auto lg:max-w-none" />
          </div>
        </div>
      </div>

      <ol className="m-0 grid list-none gap-px p-0 md:grid-cols-3">
        {steps.map((s, i) => (
          <li key={s.title} className={`flex flex-col gap-2 bg-paper py-8 md:py-10 ${inset}`}>
            <span className="font-mono text-label text-neutral-600 tabular-nums">{String(i + 1).padStart(2, "0")}</span>
            <h3 className="m-0 text-h4 text-ink">{s.title}</h3>
            <p className="m-0 max-w-80 text-small text-pretty text-neutral-600">{s.detail}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
