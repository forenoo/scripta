import { ArrowRight, Button } from "./ui/button";

const inset = "px-5 md:px-8 lg:px-12";

// The same idea → format → edit loop the hero demo shows, restated as the last thing before the click.
const steps = [
  { title: "Ketik ide seadanya", detail: "review kopi susu gula aren 15rb di Jaksel", mono: true },
  { title: "Pilih sudut dan format", detail: "Hook 15 detik, caption carousel, atau outline YouTube." },
  { title: "Rapikan, lalu posting", detail: "Draft-nya titik awal. Suara akhirnya tetap punyamu." },
];

export function ClosingCta() {
  return (
    <section id="mulai" aria-labelledby="mulai-title" className="grid gap-px border-b border-line bg-line lg:grid-cols-12">
      <div className={`bg-paper pt-16 pb-10 md:pt-24 md:pb-12 lg:col-span-12 ${inset}`}>
        <div className="grid gap-4 lg:grid-cols-12 lg:items-baseline lg:gap-0">
          <span className="font-mono text-label text-neutral-600 uppercase lg:col-span-3">04 / Mulai</span>
          <h2 id="mulai-title" className="m-0 text-h2 text-balance text-draft sm:text-h1 lg:col-span-9">
            Idenya sudah ada di kepalamu. <span className="text-ink">Draft pertamanya biar Scripta yang tulis.</span>
          </h2>
        </div>
      </div>

      <div className={`flex flex-col gap-8 bg-paper py-10 md:gap-10 md:py-12 lg:col-span-7 lg:justify-between ${inset}`}>
        <p className="m-0 max-w-120 text-body text-pretty text-neutral-600 md:text-body-l">
          Nggak perlu nunggu idenya rapi. Ketik apa yang ada di catatan HP-mu, dan dalam satu alur kamu dapat sudut
          konten plus draft yang tinggal dipoles.
        </p>
        <div className="flex flex-col items-start gap-4">
          <Button size="lg">
            Coba gratis
            <ArrowRight />
          </Button>
          <p className="m-0 max-w-90 text-small text-pretty text-neutral-600">Mulai dari paket Free. Harga dan kuotanya masih contoh.</p>
        </div>
      </div>

      <div className={`bg-paper py-10 md:py-12 lg:col-span-5 ${inset}`}>
        <ol className="m-0 flex list-none flex-col p-0">
          {steps.map((s, i) => (
            <li key={s.title} className="grid grid-cols-[auto_1fr] gap-x-4 border-t border-line py-5 first:border-t-0 first:pt-0 last:pb-0">
              <span className="pt-1 font-mono text-label text-neutral-600 tabular-nums">{String(i + 1).padStart(2, "0")}</span>
              <div className="flex min-w-0 flex-col gap-1">
                <span className="text-h4">{s.title}</span>
                {s.mono ? (
                  <span className="font-mono text-small text-pretty text-ink">
                    <span className="text-neutral-600">ide:</span> {s.detail}
                  </span>
                ) : (
                  <span className="text-small text-pretty text-neutral-600">{s.detail}</span>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
