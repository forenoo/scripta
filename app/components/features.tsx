import { useEffect, useRef, useState } from "react";
import { cx } from "./ui/cx";

const inset = "px-5 md:px-8 lg:px-12";

type Feature = {
  id: string;
  // Lead cards only: which half of the headline's question this card answers.
  eyebrow?: string;
  title: string;
  body: string;
  // Illustration path under /public (docs/asset-brief.md, #2–#6). Empty until the art is ready; the slot shows its export size instead.
  art?: string;
  alt: string;
};

// Lead cards take half the frame and a 2:1 slot; supporting cards take a third and a 4:3 slot.
// At the full frame both land at 300px tall, so each row's illustrations and headings line up.
// Below md every card is full width, so supporting slots crop to 2:1 as well; otherwise their art would stand
// taller than the lead art above it. Keep supporting art's subject inside the middle 2:1 band.
const lead: Feature[] = [
  {
    id: "sudut",
    eyebrow: "Buntu ide",
    title: "Satu ide mentah jadi beberapa sudut konten.",
    body: "Topik yang sama bisa jadi perbandingan, cerita, atau eksperimen. Scripta menawarkan beberapa sudut dari idemu, kamu pilih yang paling cocok buat audiensmu.",
    alt: "",
  },
  {
    id: "draft",
    eyebrow: "Buntu kalimat",
    title: "Sudut yang kamu pilih langsung jadi draft.",
    body: "Hook pembuka, arahan shot dalam kurung siku, sampai kalimat penutup. Semuanya ditulis mengikuti sudut yang kamu pilih, tinggal kamu sesuaikan dengan gayamu.",
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
    id: "salin",
    title: "Hitung kata, salin sekali klik.",
    body: "Jumlah kata terlihat selagi kamu mengedit, jadi kamu tahu naskahnya muat di durasi. Selesai, tinggal salin ke caption atau teleprompter.",
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
        <div className="grid gap-4 lg:grid-cols-12 lg:items-start lg:gap-0">
          {/* pt-1.5 lines the label's cap height up with the heading's first line (44px line box vs 16px). */}
          <span className="font-mono text-label text-neutral-600 uppercase lg:col-span-3 lg:pt-1.5">01 / Fitur</span>
          <h2 id="fitur-title" className="m-0 text-h2 text-balance text-neutral-500 lg:col-span-9">
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
        ratio={isLead ? "aspect-2/1" : "aspect-2/1 md:aspect-4/3"}
        exportSize={isLead ? "1200 × 600" : "800 × 600"}
      />
      <div
        className={cx(
          "flex flex-col bg-paper py-8 md:py-10 lg:row-span-2 lg:grid lg:grid-rows-subgrid",
          isLead ? "gap-3" : "gap-2",
          inset,
        )}
      >
        {/* The eyebrow rides with the title so the subgrid still sees two rows: title, then description. */}
        <div className="flex flex-col gap-2">
          {feature.eyebrow && (
            <span className="font-mono text-label text-neutral-600 uppercase">{feature.eyebrow}</span>
          )}
          <h3 id={`fitur-${feature.id}`} className={cx("m-0 text-balance", isLead ? "text-h3" : "text-h4")}>
            {feature.title}
          </h3>
        </div>
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
      <div className={cx("overflow-hidden bg-neutral-100", ratio)}>
        <FadeImage src={src} alt={alt} />
      </div>
    );
  }
  return (
    <div aria-hidden="true" className={cx("flex items-end bg-neutral-100 p-4", ratio)}>
      <span className="font-mono text-label text-neutral-600 uppercase">Ilustrasi · {exportSize}</span>
    </div>
  );
}

// Lazy art fades in once decoded instead of popping onto the placeholder. Opacity only, so it stays on under
// reduced motion. The pending state is hidden only when scripting is on (app.css), so no-JS still shows the art.
function FadeImage({ src, alt }: { src: string; alt: string }) {
  const ref = useRef<HTMLImageElement>(null);
  const [pending, setPending] = useState(true);

  // An image already in cache can finish before hydration attaches onLoad.
  useEffect(() => {
    if (ref.current?.complete) setPending(false);
  }, []);

  return (
    <img
      ref={ref}
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      onLoad={() => setPending(false)}
      onError={() => setPending(false)}
      data-img-pending={pending || undefined}
      className="size-full object-cover transition-opacity duration-200 ease-out"
    />
  );
}
