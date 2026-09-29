import { ArrowUp, ArrowUpRight } from "./ui/button";
import { Wordmark } from "./ui/wordmark";

const inset = "px-5 md:px-8 lg:px-12";

// Mirrors the numbered section labels above, so the footer reads as the page's table of contents.
const sections = [
  { no: "01", label: "Fitur", href: "#fitur" },
  { no: "02", label: "Kata creator", href: "#kata-creator" },
  { no: "03", label: "Harga", href: "#harga" },
  { no: "04", label: "Mulai", href: "#mulai" },
];

// TODO: /syarat and /privasi have no routes yet; add them before these links go live.
const legal = [
  { label: "Syarat & Ketentuan", href: "/syarat" },
  { label: "Kebijakan Privasi", href: "/privasi" },
];

const socials = [
  { platform: "TikTok", handle: "@scripta", href: "https://www.tiktok.com/@scripta" },
  { platform: "Instagram", handle: "@scripta", href: "https://www.instagram.com/scripta" },
  { platform: "YouTube", handle: "@scripta", href: "https://www.youtube.com/@scripta" },
];

const heading = "m-0 font-mono text-label font-medium text-neutral-600 uppercase";
const row = "border-t border-line first:border-t-0";
// min-h-11 keeps every row a 44px tap target on phones. Hover is a color change, so it eases with plain `ease`.
const link =
  "group flex min-h-11 items-center text-small text-ink transition-[color] duration-150 ease-[ease] hover:text-accent";
// Secondary text inside a row follows the row's hover so the whole line lights up as one target.
const meta = "font-mono text-label text-neutral-600 transition-[color] duration-150 ease-[ease] group-hover:text-accent";
// Arrows nudge toward where the link goes. Footer is visited rarely, so a small motion cue is earned here.
const nudge = "inline-flex transition-[translate,color] duration-200 ease-(--ease-out-strong) motion-reduce:transition-none";

export function Footer() {
  return (
    // Tablet: brand and page links share the first row; legal and social split the second.
    <footer className="grid gap-px bg-line md:grid-cols-2 lg:grid-cols-12">
      <div className={`flex flex-col gap-8 bg-paper py-10 md:justify-between md:py-12 lg:col-span-5 ${inset}`}>
        <div className="flex flex-col gap-4">
          <Wordmark />
          <p className="m-0 max-w-90 text-body text-pretty text-ink">Dari ide mentah jadi naskah siap posting.</p>
        </div>
        <p className="m-0 text-small text-neutral-600">
          Ada pertanyaan?{" "}
          <a
            href="mailto:halo@scripta.id"
            className="text-ink underline decoration-neutral-300 underline-offset-4 transition-[color,text-decoration-color] duration-150 ease-[ease] hover:text-ink hover:decoration-ink"
          >
            halo@scripta.id
          </a>
        </p>
      </div>

      <nav aria-labelledby="footer-halaman" className={`flex flex-col gap-3 bg-paper py-10 md:py-12 lg:col-span-4 ${inset}`}>
        <h2 id="footer-halaman" className={heading}>
          Halaman ini
        </h2>
        <ul className="m-0 list-none p-0">
          {sections.map((s) => (
            <li key={s.href} className={row}>
              <a href={s.href} className={`${link} gap-4`}>
                <span className={`${meta} tabular-nums`}>{s.no}</span>
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Legal and social are short lists, so they share one column instead of each taking a thin one. */}
      <div className="grid gap-px bg-line sm:grid-cols-2 md:col-span-2 lg:col-span-3 lg:grid-cols-1">
        <nav aria-labelledby="footer-legal" className={`flex flex-col gap-3 bg-paper py-10 md:py-12 ${inset}`}>
          <h2 id="footer-legal" className={heading}>
            Legal
          </h2>
          <ul className="m-0 list-none p-0">
            {legal.map((l) => (
              <li key={l.href} className={row}>
                <a href={l.href} className={`${link} gap-4`}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <section aria-labelledby="footer-sosial" className={`flex flex-col gap-3 bg-paper py-10 md:py-12 ${inset}`}>
          <h2 id="footer-sosial" className={heading}>
            Sosial
          </h2>
          <ul className="m-0 list-none p-0">
            {socials.map((s) => (
              <li key={s.platform} className={row}>
                <a href={s.href} className={`${link} justify-between gap-4`} target="_blank" rel="noopener noreferrer">
                  {s.platform}
                  <span className="flex items-center gap-1.5">
                    <span className={meta}>{s.handle}</span>
                    <span className={`text-neutral-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent ${nudge}`}>
                      <ArrowUpRight size={14} />
                    </span>
                    <span className="sr-only">(buka di tab baru)</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <div className={`flex flex-wrap items-center justify-between gap-x-6 gap-y-2 bg-paper py-3 md:col-span-2 lg:col-span-12 ${inset}`}>
        <p className="m-0 font-mono text-label text-neutral-600">© {new Date().getFullYear()} Scripta</p>
        <a href="#top" className={`${link} gap-1.5 font-semibold`}>
          Kembali ke atas
          <span className={`group-hover:-translate-y-0.5 ${nudge}`}>
            <ArrowUp />
          </span>
        </a>
      </div>
    </footer>
  );
}
