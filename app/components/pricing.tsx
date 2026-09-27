import { ArrowRight, Button } from "./ui/button";
import { cx } from "./ui/cx";

const inset = "px-5 md:px-8 lg:px-12";

type Plan = {
  id: "free" | "pro";
  name: string;
  pitch: string;
  // Split so "Rp" can sit small beside the figure, the way a printed price list sets currency.
  amount: string;
  cta: string;
  quota: { label: string; value: string }[];
};

const plans: Plan[] = [
  {
    id: "free",
    name: "Free",
    pitch: "Buat mencoba alurnya dan menulis beberapa draft tiap minggu.",
    amount: "0",
    cta: "Coba gratis",
    quota: [
      { label: "Draft per bulan", value: "15" },
      { label: "Sudut per ide", value: "3" },
      { label: "Riwayat draft", value: "7 hari" },
    ],
  },
  {
    id: "pro",
    name: "Pro",
    pitch: "Buat creator yang posting hampir tiap hari di lebih dari satu platform.",
    amount: "49.000",
    cta: "Pilih Pro",
    quota: [
      { label: "Draft per bulan", value: "300" },
      { label: "Sudut per ide", value: "6" },
      { label: "Riwayat draft", value: "90 hari" },
    ],
  },
];

// Identical in both plans, so it is said once in the intro instead of repeated as checkmarks.
const formats = ["Hook 15 detik", "Caption carousel per slide", "Outline YouTube bertimestamp"];

export function Pricing() {
  return (
    <section id="harga" aria-labelledby="harga-title" className="grid gap-px border-b border-line bg-line lg:grid-cols-12">
      <div className={`bg-paper pt-16 pb-10 md:pt-24 md:pb-12 lg:col-span-12 ${inset}`}>
        <div className="grid gap-4 lg:grid-cols-12 lg:items-start lg:gap-0">
          <span className="font-mono text-label text-neutral-600 uppercase lg:col-span-3 lg:pt-1.5">03 / Harga</span>
          <h2 id="harga-title" className="m-0 text-h2 text-balance text-neutral-500 lg:col-span-9">
            Coba dulu tanpa bayar. <span className="text-ink">Naik ke Pro kalau jadwal postingmu makin padat.</span>
          </h2>
        </div>
      </div>

      <div className={`flex flex-col gap-8 bg-paper py-10 md:py-12 lg:col-span-4 ${inset}`}>
        <div className="flex flex-col gap-3">
          <h3 className="m-0 text-h4 text-balance">Alurnya sama, bedanya di kuota.</h3>
          <p className="m-0 max-w-100 text-small text-pretty text-neutral-600">
            Kedua paket menulis draft dari ide mentahmu dalam tiga format yang sama. Pro memberi ruang lebih untuk
            jadwal yang padat.
          </p>
        </div>
        {/* At lg, mb-20 (the CTA's 48px + gap-8) sits these rows on the same hairlines as the plans' quota rows. */}
        <ul className="m-0 flex list-none flex-col p-0 lg:mt-auto lg:mb-20">
          {formats.map((f) => (
            <li key={f} className="flex items-baseline gap-3 border-t border-line py-3 text-small last:border-b">
              <span aria-hidden="true" className="font-mono text-label text-neutral-500">
                —
              </span>
              {f}
            </li>
          ))}
        </ul>
      </div>

      {plans.map((p) => (
        <PlanCell key={p.id} plan={p} />
      ))}
    </section>
  );
}

function PlanCell({ plan }: { plan: Plan }) {
  const pro = plan.id === "pro";
  return (
    <article
      aria-labelledby={`paket-${plan.id}`}
      className={cx(
        "relative flex flex-col gap-10 bg-paper py-10 md:py-12 lg:col-span-4",
        inset,
        // A heavier rule over the recommended plan, like the lead column on a printed page. Drawn over the hairline gap.
        pro && "before:absolute before:inset-x-0 before:-top-px before:h-0.5 before:bg-ink",
      )}
    >
      <div className="flex flex-col gap-5">
        <div className="flex items-baseline justify-between gap-3">
          <h3 id={`paket-${plan.id}`} className="m-0 font-mono text-label text-ink uppercase">
            {plan.name}
          </h3>
          {pro && <span className="font-mono text-label text-neutral-600 uppercase">Direkomendasikan</span>}
        </div>
        <p className="m-0 flex items-start gap-1.5">
          <span className="pt-2 text-body font-medium text-neutral-500">Rp</span>
          <span className="text-h1 tabular-nums">{plan.amount}</span>
          <span className="self-end pb-1.5 text-small text-neutral-600">/bulan</span>
        </p>
        <p className="m-0 max-w-80 text-small text-pretty text-neutral-600">{plan.pitch}</p>
      </div>

      {/* mt-auto pins quota and CTA to the bottom so both plans' rows line up whatever the pitch length. */}
      <div className="mt-auto flex flex-col gap-8">
        <dl className="m-0 flex flex-col">
          {plan.quota.map((q) => (
            <div key={q.label} className="flex items-baseline justify-between gap-4 border-t border-line py-3 last:border-b">
              <dt className="text-small text-neutral-600">{q.label}</dt>
              <dd className="m-0 text-small font-semibold tabular-nums">{q.value}</dd>
            </div>
          ))}
        </dl>
        <Button size="lg" variant={pro ? "primary" : "outline"} className="self-start">
          {plan.cta}
          <ArrowRight />
        </Button>
      </div>
    </article>
  );
}
