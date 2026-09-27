import { Avatar } from "./ui/avatar";

const inset = "px-5 md:px-8 lg:px-12";

type Quote = {
  initials: string;
  name: string;
  platform: string;
  used: string;
  quote: string;
  // Portrait path under /public (160 × 160, warm grayscale). Initials show until it is set.
  photo?: string;
};

// One creator per format the hero demo shows, so the three quotes cover the product without extra labels.
const quotes: Quote[] = [
  {
    initials: "DN",
    name: "Dinda Nur",
    platform: "TikTok",
    used: "Hook 15 detik",
    quote: "Dulu satu hook aku tulis ulang lima kali sebelum berani rekam. Sekarang tinggal aku ubah ke gaya ngomongku sendiri.",
  },
  {
    initials: "RA",
    name: "Raka Aditya",
    platform: "Instagram",
    used: "Caption carousel",
    quote:
      "Caption carousel paling makan waktu buatku. Sekarang tiap slide sudah ada draft-nya, aku tinggal potong yang kepanjangan.",
  },
  {
    initials: "SK",
    name: "Sekar Kinanti",
    platform: "YouTube",
    used: "Outline YouTube",
    quote: "Outline bertimestamp bikin aku tahu mau bahas apa di menit berapa. Waktu rekam aku jadi nggak ngelantur.",
  },
];

export function SocialProof() {
  return (
    <section id="kata-creator" aria-labelledby="bukti-title" className="grid gap-px border-b border-line bg-line lg:grid-cols-12">
      <div className={`bg-paper pt-16 pb-10 md:pt-24 md:pb-12 lg:col-span-12 ${inset}`}>
        <div className="grid gap-4 lg:grid-cols-12 lg:items-start lg:gap-0">
          <span className="font-mono text-label text-neutral-600 uppercase lg:col-span-3 lg:pt-1.5">02 / Kata creator</span>
          <h2 id="bukti-title" className="m-0 text-h2 text-balance text-neutral-500 lg:col-span-9">
            Semua mulai dari catatan di HP. <span className="text-ink">Sekarang mereka mulai dari draft.</span>
          </h2>
        </div>
      </div>

      {/* Cells in one grid row share a height, so mt-auto on the caption keeps the three avatars level. */}
      {quotes.map((q) => (
        <figure key={q.name} className={`m-0 flex flex-col gap-4 bg-paper py-10 md:py-12 lg:col-span-4 ${inset}`}>
          <span className="font-mono text-label text-neutral-600 uppercase">{q.used}</span>
          {/* Negative indent hangs the opening mark so the letters, not the quote, align with the label. */}
          <blockquote className="m-0">
            <p className="m-0 -indent-[0.4em] text-body-l text-pretty text-ink">“{q.quote}”</p>
          </blockquote>
          <figcaption className="mt-auto flex items-center gap-3 pt-4">
            <Avatar size={40} tone="muted" initials={q.initials} src={q.photo} aria-hidden />
            <div className="flex min-w-0 flex-col">
              <span className="text-small font-semibold text-ink">{q.name}</span>
              <span className="text-small text-neutral-600">{q.platform}</span>
            </div>
          </figcaption>
        </figure>
      ))}
    </section>
  );
}
