import { ArrowUp } from "./ui/button";
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

// TODO: Scripta has no social accounts yet. Fill in handle and href; rows render as plain text until href is set.
const socials: { platform: string; handle: string | null; href: string | null }[] = [
  { platform: "TikTok", handle: null, href: null },
  { platform: "Instagram", handle: null, href: null },
  { platform: "YouTube", handle: null, href: null },
];

const heading = "m-0 font-mono text-label font-medium text-neutral-600 uppercase";
const row = "border-t border-line first:border-t-0";
// min-h-11 keeps every row a 44px tap target on phones.
const link = "flex min-h-11 items-center gap-4 text-small text-ink hover:text-accent";

export function Footer() {
  return (
    <footer className="grid gap-px bg-line lg:grid-cols-12">
      <div className={`flex flex-col gap-8 bg-paper py-10 md:py-12 lg:col-span-5 lg:justify-between ${inset}`}>
        <div className="flex flex-col gap-4">
          <Wordmark />
          <p className="m-0 max-w-90 text-body text-pretty text-ink">Dari ide mentah jadi naskah siap posting.</p>
        </div>
        <p className="m-0 max-w-90 text-small text-pretty text-neutral-600">
          Scripta adalah proyek portfolio. Produk, harga, dan persona creator di halaman ini masih contoh.
        </p>
      </div>

      <nav aria-labelledby="footer-halaman" className={`flex flex-col gap-3 bg-paper py-10 md:py-12 lg:col-span-4 ${inset}`}>
        <h2 id="footer-halaman" className={heading}>
          Halaman ini
        </h2>
        <ul className="m-0 list-none p-0">
          {sections.map((s) => (
            <li key={s.href} className={row}>
              <a href={s.href} className={link}>
                <span className="font-mono text-label text-neutral-600 tabular-nums">{s.no}</span>
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Legal and social are short lists, so they share one column instead of each taking a thin one. */}
      <div className="grid gap-px bg-line sm:grid-cols-2 lg:col-span-3 lg:grid-cols-1">
        <nav aria-labelledby="footer-legal" className={`flex flex-col gap-3 bg-paper py-10 md:py-12 ${inset}`}>
          <h2 id="footer-legal" className={heading}>
            Legal
          </h2>
          <ul className="m-0 list-none p-0">
            {legal.map((l) => (
              <li key={l.href} className={row}>
                <a href={l.href} className={link}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={`flex flex-col gap-3 bg-paper py-10 md:py-12 ${inset}`}>
          <h2 className={heading}>Sosial</h2>
          <ul className="m-0 list-none p-0">
            {socials.map((s) => (
              <li key={s.platform} className={row}>
                {s.href ? (
                  <a href={s.href} className={link} target="_blank" rel="noreferrer">
                    {s.platform}
                    <span className="font-mono text-label text-neutral-600">{s.handle}</span>
                  </a>
                ) : (
                  <span className="flex min-h-11 items-center gap-4 text-small text-ink">
                    {s.platform}
                    <span className="font-mono text-label text-neutral-600">[@handle]</span>
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={`flex flex-wrap items-center justify-between gap-x-6 gap-y-2 bg-paper py-3 lg:col-span-12 ${inset}`}>
        <p className="m-0 font-mono text-label text-neutral-600">© {new Date().getFullYear()} Scripta</p>
        <a href="#top" className="flex min-h-11 items-center gap-1.5 text-small font-semibold text-ink hover:text-accent">
          Kembali ke atas
          <ArrowUp />
        </a>
      </div>
    </footer>
  );
}
