import { cx } from "./ui/cx";

const inset = "px-5 md:px-8 lg:px-12";

type Feature = {
  id: string;
  title: string;
  body: string;
  // Illustration path under /public. Empty until the art is ready; the slot shows its export size instead.
  art?: string;
  alt: string;
};

// Lead cards take half the frame and a 2:1 slot; supporting cards take a third and a 4:3 slot.
// At the full frame both land at 300px tall, so each row's illustrations and headings line up.
const lead: Feature[] = [
  {
    id: "sudut",
    title: "Satu ide mentah jadi beberapa sudut konten.",
    body: "Topik yang sama bisa jadi perbandingan, cerita, atau eksperimen. Scripta menawarkan beberapa sudut dari idemu, kamu pilih yang paling cocok buat audiensmu.",
    alt: "",
  },
  {
    id: "draft",
    title: "Sudut yang kamu pilih langsung jadi draft.",
    body: "Hook pembuka, arahan shot dalam kurung siku, sampai kalimat penutup. Draft ditulis mengikuti sudut yang kamu pilih, jadi kamu nggak mulai dari nol.",
    alt: "",
  },
];

const support: Feature[] = [
  {
    id: "format",
    title: "Satu sudut, tiga format.",
    body: "Hook 15 detik untuk TikTok dan Reels, caption per slide untuk carousel Instagram, dan outline bertimestamp untuk YouTube.",
    alt: "",
  },
  {
    id: "mulai",
    title: "Mulai dari draft, bukan nol.",
    body: "Kalimat pertama yang paling berat sudah tertulis. Kamu tinggal memotong, menambah, dan menyesuaikan dengan gayamu sendiri.",
    alt: "",
  },
  {
    id: "riwayat",
    title: "Draft lama tetap bisa dibuka.",
    body: "Draft yang sudah kamu buat tersimpan di riwayat. Ide yang belum sempat diposting bisa kamu buka dan lanjutkan kapan saja.",
    alt: "",
  },
];

export function Features() {
  return (
    <section
      id="fitur"
      aria-labelledby="fitur-title"
      className="grid gap-px border-b border-line bg-line md:grid-cols-2 lg:grid-cols-12"
    >
      <div className={`bg-paper pt-16 pb-10 md:col-span-2 md:pt-24 md:pb-12 lg:col-span-12 ${inset}`}>
        <div className="grid gap-4 lg:grid-cols-12 lg:items-baseline lg:gap-0">
          <span className="font-mono text-label text-neutral-600 uppercase lg:col-span-3">01 / Fitur</span>
          <h2 id="fitur-title" className="m-0 text-h2 text-balance text-draft lg:col-span-9">
            Buntu ide atau buntu kalimat? <span className="text-ink">Scripta bantu dua-duanya.</span>
          </h2>
        </div>
      </div>

      {lead.map((f) => (
        <FeatureCell key={f.id} feature={f} size="lead" className="md:col-span-2 lg:col-span-6" />
      ))}

      {support.map((f, i) => (
        <FeatureCell
          key={f.id}
          feature={f}
          size="support"
          // At md the third card has no partner, so it spans the row and sets its slot beside the copy.
          className={cx("lg:col-span-4", i === support.length - 1 && "md:col-span-2 md:grid-cols-2 md:grid-rows-1 lg:grid-cols-1")}
        />
      ))}
    </section>
  );
}

// A cell split by one hairline: illustration above, copy below. The hairline is the gap-px over bg-line,
// so it follows the split whether the cell stacks or sits side by side. From lg, cells in one row share subgrid rows,
// so titles and descriptions start on the same line even when one title wraps further.
function FeatureCell({ feature, size, className }: { feature: Feature; size: "lead" | "support"; className?: string }) {
  const isLead = size === "lead";
  return (
    <article
      aria-labelledby={`fitur-${feature.id}`}
      className={cx("grid grid-rows-[auto_1fr] gap-px bg-line lg:row-span-3 lg:grid-rows-subgrid", className)}
    >
      <Illustration
        src={feature.art}
        alt={feature.alt}
        ratio={isLead ? "aspect-2/1" : "aspect-4/3"}
        exportSize={isLead ? "1200 × 600" : "800 × 600"}
      />
      <div
        className={cx(
          "flex flex-col bg-paper py-8 md:py-10 lg:row-span-2 lg:grid lg:grid-rows-subgrid",
          isLead ? "gap-3" : "gap-2",
          inset,
        )}
      >
        <h3 id={`fitur-${feature.id}`} className={cx("m-0 text-balance", isLead ? "text-h3" : "text-h4")}>
          {feature.title}
        </h3>
        <p className={cx("m-0 max-w-120 text-pretty text-neutral-600", isLead ? "text-body" : "text-small")}>
          {feature.body}
        </p>
      </div>
    </article>
  );
}

function Illustration({ src, alt, ratio, exportSize }: { src?: string; alt: string; ratio: string; exportSize: string }) {
  if (src) {
    return (
      <div className={cx("overflow-hidden bg-paper", ratio)}>
        <img src={src} alt={alt} loading="lazy" decoding="async" className="size-full object-cover" />
      </div>
    );
  }
  return (
    <div aria-hidden="true" className={cx("flex items-end bg-neutral-100 p-4", ratio)}>
      <span className="font-mono text-label text-neutral-600 uppercase">Ilustrasi · {exportSize}</span>
    </div>
  );
}
