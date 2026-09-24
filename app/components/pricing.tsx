import { Badge } from "./ui/badge";
import { ArrowRight, Button } from "./ui/button";
import { cx } from "./ui/cx";

const inset = "px-5 md:px-8 lg:px-12";

type Plan = {
  id: "free" | "pro";
  name: string;
  pitch: string;
  price: string;
  cta: string;
};

const plans: Plan[] = [
  {
    id: "free",
    name: "Free",
    pitch: "Buat mencoba alurnya dan menulis beberapa draft tiap minggu.",
    price: "Rp0",
    cta: "Coba gratis",
  },
  {
    id: "pro",
    name: "Pro",
    pitch: "Buat creator yang posting hampir tiap hari di lebih dari satu platform.",
    price: "Rp49.000",
    cta: "Pilih Pro",
  },
];

// true = included in both plans. Quota rows come first because that is the only difference.
type Row = { label: string; free: string | true; pro: string | true };

// The first group has no label row: its label sits in the header row's first column.
const groups: { label: string; rows: Row[] }[] = [
  {
    label: "Kuota",
    rows: [
      { label: "Draft pertama per bulan", free: "15", pro: "300" },
      { label: "Sudut konten per ide", free: "3", pro: "6" },
      { label: "Riwayat draft", free: "7 hari", pro: "90 hari" },
    ],
  },
  {
    label: "Format · sama di kedua paket",
    rows: [
      { label: "Hook 15 detik", free: true, pro: true },
      { label: "Caption carousel per slide", free: true, pro: true },
      { label: "Outline YouTube bertimestamp", free: true, pro: true },
    ],
  },
];

export function Pricing() {
  return (
    <section id="harga" aria-labelledby="harga-title" className="grid gap-px border-b border-line bg-line lg:grid-cols-12">
      <div className={`bg-paper pt-16 pb-10 md:pt-24 md:pb-12 lg:col-span-12 ${inset}`}>
        <div className="grid gap-4 lg:grid-cols-12 lg:items-baseline lg:gap-0">
          <span className="font-mono text-label text-neutral-600 uppercase lg:col-span-3">03 / Harga</span>
          <h2 id="harga-title" className="m-0 text-h2 text-balance text-draft lg:col-span-9">
            <span className="text-draft-fade">Coba dulu tanpa bayar.</span> <span className="text-ink">Naik ke Pro kalau jadwal postingmu makin padat.</span>
          </h2>
        </div>
      </div>

      <div className={`flex flex-col gap-6 bg-paper py-10 md:py-12 lg:col-span-4 ${inset}`}>
        <div className="flex flex-col gap-3">
          <h3 className="m-0 text-h3 text-balance">Alurnya sama, bedanya di kuota.</h3>
          <p className="m-0 max-w-120 text-body text-pretty text-neutral-600">
            Kedua paket menulis draft dari ide mentahmu dalam tiga format yang sama. Pro memberi lebih banyak draft,
            lebih banyak sudut per ide, dan riwayat yang lebih panjang.
          </p>
        </div>
      </div>

      {plans.map((p) => (
        <div key={p.id} className="flex bg-paper p-3 md:p-4 lg:col-span-4">
          <PlanCard plan={p} />
        </div>
      ))}

      {/* Three equal columns at lg, so Free and Pro values fall directly under their cards. */}
      <div className="overflow-x-auto bg-paper lg:col-span-12">
        <table className="w-full border-collapse text-left lg:table-fixed">
          <caption className="sr-only">Perbandingan paket Free dan Pro</caption>
          <colgroup>
            <col className="lg:w-1/3" />
            <col className="w-24 md:w-40 lg:w-1/3" />
            <col className="w-24 md:w-40 lg:w-1/3" />
          </colgroup>
          <thead>
            <tr>
              <th scope="col" className={cx(th, lead, "text-neutral-600")}>
                {groups[0].label}
              </th>
              <th scope="col" className={cx(th, col, "text-neutral-600")}>
                Free
              </th>
              <th scope="col" className={cx(th, col, "text-ink")}>
                Pro
              </th>
            </tr>
          </thead>
          {groups.map((g, gi) => (
            <tbody key={g.label}>
              {gi > 0 && (
                <tr>
                  {/* Empty value cells keep the column seams unbroken through the group label. */}
                  <th scope="rowgroup" className={cx(th, lead, "border-t pt-8 text-neutral-600")}>
                    {g.label}
                  </th>
                  <td className={cx(th, col, "border-t")} />
                  <td className={cx(th, col, "border-t")} />
                </tr>
              )}
              {g.rows.map((r) => (
                <tr key={r.label}>
                  <th scope="row" className={cx(td, lead, "font-normal text-ink")}>
                    {r.label}
                  </th>
                  <td className={cx(td, col, "text-neutral-600")}>
                    <Value v={r.free} />
                  </td>
                  <td className={cx(td, col, "font-semibold text-ink")}>
                    <Value v={r.pro} />
                  </td>
                </tr>
              ))}
            </tbody>
          ))}
        </table>
      </div>
    </section>
  );
}

// The header row has no top rule: the section's hairline gap already draws it.
const th = "border-line py-4 align-bottom font-mono text-label font-medium uppercase";
const td = "border-t border-line py-4 text-small tabular-nums";
// The label column shares the section inset; value columns carry the hairline on their left edge and line up
// with the card's inner padding at lg (cell p-4 + card px-4), so each value sits under its card's content.
const lead = inset;
const col = "border-l px-4 lg:px-8";

function PlanCard({ plan }: { plan: Plan }) {
  const pro = plan.id === "pro";
  return (
    <article
      aria-labelledby={`paket-${plan.id}`}
      className={cx(
        "flex flex-1 flex-col overflow-hidden rounded-md border",
        pro ? "border-accent bg-editor text-paper" : "border-neutral-300 bg-paper text-ink",
      )}
    >
      <div className="flex flex-1 flex-col gap-6 px-4 py-5">
        <div className="flex flex-col gap-2">
          <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-2">
            <h3 id={`paket-${plan.id}`} className="m-0 text-h3">
              {plan.name}
            </h3>
            {pro && <Badge variant="new">Direkomendasikan</Badge>}
          </div>
          <p className={cx("m-0 text-small text-pretty", pro ? "text-neutral-400" : "text-neutral-600")}>{plan.pitch}</p>
        </div>
        <p className="m-0 mt-auto flex flex-wrap items-baseline gap-x-1.5">
          <span className="text-h2 tabular-nums">{plan.price}</span>
          <span className={cx("text-small", pro ? "text-neutral-400" : "text-neutral-600")}>/bulan</span>
        </p>
      </div>
      <div className={cx("border-t px-4 py-4", pro ? "border-neutral-700" : "border-line")}>
        <Button size="lg" variant={pro ? "primary" : "outline"}>
          {plan.cta}
          <ArrowRight />
        </Button>
      </div>
    </article>
  );
}

function Value({ v }: { v: string | true }) {
  if (v !== true) return v;
  return (
    <>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="block">
        <path d="M20 6 9 17l-5-5" />
      </svg>
      <span className="sr-only">Termasuk</span>
    </>
  );
}
