import { useState, type ReactNode } from "react";
import type { Route } from "./+types/design-system";
import { ArrowRight, Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Field, Input } from "../components/ui/input";
import { Avatar, AvatarStack } from "../components/ui/avatar";
import { DemoBox } from "../components/ui/demo-box";
import { Wordmark } from "../components/ui/wordmark";
import { demoDrafts, demoIdea } from "../components/demo-drafts";
import { cx } from "../components/ui/cx";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Scripta Design System" },
    { name: "description", content: "Token, tipografi, dan komponen dasar untuk landing page Scripta." },
  ];
}

const gutter = "px-[clamp(20px,4vw,48px)]";
const cells = "grid gap-px border border-line bg-line";
const monoLabel = "font-mono text-[12px] tracking-[0.04em] text-neutral-600 uppercase";
const note = "text-small text-pretty text-neutral-600";

const sections = [
  { id: "warna", num: "01", title: "Warna" },
  { id: "tipografi", num: "02", title: "Tipografi" },
  { id: "spacing", num: "03", title: "Spacing & grid" },
  { id: "radius", num: "04", title: "Radius" },
  { id: "komponen", num: "05", title: "Komponen" },
];

const swatches = [
  { name: "Kertas", token: "--paper", hex: "#F6F5F1", bg: "bg-paper border-b border-line", use: "Latar halaman dan permukaan terang." },
  { name: "Tinta", token: "--ink", hex: "#111111", bg: "bg-ink", use: "Teks final, tombol sekunder, ikon." },
  { name: "Abu draft", token: "--draft", hex: "#A3A3A3", bg: "bg-draft", use: "Bagian awal headline dua warna. Display saja." },
  { name: "Grid line", token: "--line", hex: "#E4E2DC", bg: "bg-line", use: "Garis struktur halaman dan border sel." },
  { name: "Demo box", token: "--editor", hex: "#1C1C1C", bg: "bg-editor", use: "Permukaan editor gelap di hero." },
  { name: "Kobalt", token: "--accent", hex: "#2B50FF", bg: "bg-accent", use: "CTA, state aktif, LED di foto. Satu-satunya aksen." },
];

const neutralRamp = [
  ["50", "bg-neutral-50"], ["100", "bg-neutral-100"], ["200", "bg-neutral-200"], ["300", "bg-neutral-300"], ["400", "bg-neutral-400"],
  ["500", "bg-neutral-500"], ["600", "bg-neutral-600"], ["700", "bg-neutral-700"], ["800", "bg-neutral-800"], ["900", "bg-neutral-900"],
];

const cobaltRamp = [
  ["100", "bg-cobalt-100"], ["200", "bg-cobalt-200"], ["300", "bg-cobalt-300"], ["400", "bg-cobalt-400"], ["500", "bg-cobalt-500"],
  ["600", "bg-cobalt-600"], ["700", "bg-cobalt-700"], ["800", "bg-cobalt-800"], ["900", "bg-cobalt-900"],
];

const contrast = [
  ["Tinta di kertas", "18,2 : 1"],
  ["Netral 600 di kertas", "6,1 : 1"],
  ["Kertas di kobalt", "5,2 : 1"],
  ["Abu draft di demo box", "6,7 : 1"],
];

const typeScale = [
  { name: "display", spec: "72 / 76 · 500 · −3.5%", className: "text-display", sample: "Tulis sekali, posting hari ini." },
  { name: "h1", spec: "56 / 60 · 500 · −3%", className: "text-h1", sample: "Ide mentah masuk, draft keluar." },
  { name: "h2", spec: "40 / 44 · 500 · −2.5%", className: "text-h2", sample: "Hook, caption, outline. Satu tempat." },
  { name: "h3", spec: "28 / 34 · 600 · −2%", className: "text-h3", sample: "Nggak perlu belajar tool baru" },
  { name: "h4", spec: "20 / 28 · 600 · −1%", className: "text-h4", sample: "Outline YouTube 10 menit" },
  { name: "body-l", spec: "18 / 28 · 400", className: "text-body-l max-w-160", sample: "Ketik idemu seadanya. Scripta bikin draft pertama, kamu tinggal rapikan gaya bahasanya." },
  { name: "body", spec: "16 / 26 · 400", className: "text-body max-w-160", sample: "Semua draft tersimpan per proyek, jadi kamu bisa balik ke versi kemarin kalau yang baru kurang nendang." },
  { name: "small", spec: "14 / 22 · 400", className: "text-small text-neutral-600", sample: "Bisa dibatalkan kapan saja." },
  { name: "mono", spec: "14 / 22 · 400", className: "font-mono text-small", sample: "ide: review kopi susu gula aren 15rb" },
  { name: "label", spec: "12 / 16 · 500 · +4% · caps", className: "font-mono text-label uppercase", sample: "Draft 02 · Caption carousel" },
];

const spaceScale = [4, 8, 12, 16, 24, 32, 48, 64, 96, 128];

const radii = [
  { name: "radius-0 · 0", className: "rounded-none", use: "Sel grid, section, gambar." },
  { name: "radius-xs · 2", className: "rounded-xs", use: "Badge, tag." },
  { name: "radius-sm · 4", className: "rounded-sm", use: "Button, input, chip." },
  { name: "radius-md · 6", className: "rounded-md", use: "Demo box, kartu fitur." },
  { name: "radius-full · 999", className: "rounded-full border-accent!", use: "Avatar saja." },
];


export default function DesignSystem() {
  const [showGrid, setShowGrid] = useState(false);

  return (
    <div className="relative mx-auto min-h-screen max-w-300 border-x border-line">
      {showGrid && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-5 bg-[repeating-linear-gradient(90deg,rgba(43,80,255,0.07)_0_calc(100%/12-1px),rgba(43,80,255,0.35)_calc(100%/12-1px)_calc(100%/12))]"
        />
      )}

      <header className={cx("flex items-center gap-6 border-b border-line py-4.5", gutter)}>
        <Wordmark />
        <button
          type="button"
          aria-pressed={showGrid}
          onClick={() => setShowGrid((v) => !v)}
          className="ml-auto cursor-pointer font-mono text-[12px] text-neutral-600 hover:text-ink"
        >
          grid {showGrid ? "on" : "off"}
        </button>
      </header>

      <section className={cx("border-b border-line pt-22 pb-18", gutter)}>
        <h1 className="m-0 max-w-225 text-[clamp(44px,7vw,80px)] leading-[1.02] font-medium tracking-[-0.035em] text-balance text-neutral-500">
          Dari ide yang masih berantakan, <span className="text-ink">jadi naskah siap posting.</span>
        </h1>
        <p className="mt-7 max-w-140 text-body-l text-pretty text-neutral-600">
          Token, tipografi, dan komponen dasar untuk landing page Scripta. Monokrom seperti meja kerja penulis naskah,
          dengan satu aksen biru untuk hal yang harus kamu klik.
        </p>
        <div className="mt-8 flex flex-wrap gap-2">
          {["lugas", "cepat", "editorial", "zine", "meja kerja penulis", "alat kerja, bukan mainan"].map((t) => (
            <span key={t} className="rounded-xs border border-neutral-300 px-2 py-1 font-mono text-[12px] text-neutral-700">
              {t}
            </span>
          ))}
        </div>
      </section>

      <nav className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-px border-b border-line bg-line">
        {sections.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className="flex flex-col gap-1.5 bg-paper px-6 py-5 text-ink hover:bg-neutral-100 hover:text-ink"
          >
            <span className="font-mono text-[12px] text-draft">{s.num}</span>
            <span className="text-body font-semibold">{s.title}</span>
          </a>
        ))}
      </nav>

      <Section id="warna" num="01" label="Warna" draft="Kertas, tinta, dan garis." final="Biru cuma untuk yang penting.">
        <div className={cx(cells, "grid-cols-[repeat(auto-fit,minmax(170px,1fr))]")}>
          {swatches.map((s) => (
            <div key={s.token} className="flex flex-col bg-paper">
              <div className={cx("h-30", s.bg)} />
              <div className="flex flex-col gap-1 p-4">
                <span className="text-body font-semibold">{s.name}</span>
                <span className="font-mono text-[12px] text-neutral-600">
                  {s.token} · {s.hex}
                </span>
                <span className="mt-1.5 text-small text-neutral-600">{s.use}</span>
              </div>
            </div>
          ))}
        </div>

        <div className={cx(cells, "grid-cols-[repeat(auto-fit,minmax(min(100%,340px),1fr))] border-t-0")}>
          <Cell className="gap-5">
            <span className={monoLabel}>Ramp netral</span>
            <Ramp steps={neutralRamp} />
            <p className={note}>
              200 = grid line, 400 = abu draft, 800 = demo box, 900 = tinta. Untuk teks sekunder di atas kertas pakai 600
              (#5C5C5C), karena abu draft terlalu pucat untuk ukuran body.
            </p>
          </Cell>
          <Cell className="gap-5">
            <span className={monoLabel}>Ramp kobalt</span>
            <Ramp steps={cobaltRamp} base="500" />
            <p className={note}>
              500 = base untuk ring fokus dan LED di foto. 600 untuk fill button primary, 700 untuk hover dan teks di atas fill 100, 800 untuk pressed. 100–200 untuk tint badge dan
              seleksi teks.
            </p>
          </Cell>
        </div>

        <div className={cx(cells, "grid-cols-[repeat(auto-fit,minmax(min(100%,340px),1fr))] border-t-0")}>
          <Cell className="gap-4">
            <span className={monoLabel}>Warna di foto</span>
            <div className="flex h-24 items-center justify-center border border-line bg-neutral-100">
              <span className="size-2 rounded-full bg-accent shadow-[0_0_12px_4px_var(--color-cobalt-300)]" />
            </div>
            <p className={note}>
              Foto di-grade netral hangat mengikuti kertas, saturasi rendah. Kobalt hanya muncul dari LED atau UI di
              layar, dan dikoreksi ke #2B50FF saat editing.
            </p>
          </Cell>
          <Cell className="gap-3">
            <span className={monoLabel}>Kontras</span>
            {contrast.map(([label, ratio]) => (
              <div key={label} className="flex justify-between gap-4 border-b border-line py-2.5 text-[14px]">
                <span>{label}</span>
                <span className="font-mono text-[13px]">{ratio}</span>
              </div>
            ))}
            <div className="flex justify-between gap-4 py-2.5 text-[14px]">
              <span>Abu draft di kertas</span>
              <span className="font-mono text-[13px] text-cobalt-700">2,3 : 1 · display ≥ 32px</span>
            </div>
          </Cell>
        </div>
      </Section>

      <Section
        id="tipografi"
        num="02"
        label="Tipografi"
        draft="Grotesk yang rapat untuk bicara."
        final="Mono untuk kerja di editor."
      >
        <div className={cx(cells, "grid-cols-[repeat(auto-fit,minmax(min(100%,340px),1fr))]")}>
          <FontCard token="--font-sans" name="Manrope" glyphClass="font-sans font-medium">
            Headline dan body. Weight 500 untuk headline, 600 untuk judul kecil, 400 untuk body. Tracking negatif mulai
            20px ke atas.
          </FontCard>
          <FontCard token="--font-mono" name="JetBrains Mono" glyphClass="font-mono font-normal">
            Demo box, chip, badge, label kecil. Weight 400 dan 500. Label pakai uppercase dengan tracking +4%.
          </FontCard>
        </div>

        <div className="mt-12 border-t border-ink">
          {typeScale.map((t) => (
            <div key={t.name} className="flex flex-wrap items-baseline gap-x-8 gap-y-2 border-b border-line py-6">
              <div className="flex flex-[1_1_180px] flex-col gap-0.5 font-mono text-[12px] text-neutral-600">
                <span className="text-ink">{t.name}</span>
                <span>{t.spec}</span>
              </div>
              <div className={cx("min-w-0 flex-[4_1_480px]", t.className)}>{t.sample}</div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-x-12 gap-y-6 rounded-md bg-neutral-100 p-10">
          <div className={cx(monoLabel, "flex flex-[1_1_160px] flex-col gap-2")}>
            <span className="text-ink">Mekanik teks</span>
            <span>draft #7A7A7A</span>
            <span>→ final #111111</span>
          </div>
          <p className="m-0 flex-[4_1_480px] text-[32px] leading-10 font-medium tracking-[-0.02em] text-pretty text-neutral-500">
            Kamu nggak harus mulai dari halaman kosong. Tulis poin-poinnya, biarkan Scripta menyusun alurnya.{" "}
            <span className="text-ink">Yang tersisa tinggal suaramu sendiri.</span>
          </p>
        </div>
      </Section>

      <Section
        id="spacing"
        num="03"
        label="Spacing & grid"
        draft="Basis 4px."
        final="Halaman dibaca seperti lembar storyboard."
      >
        <div className={cx(cells, "grid-cols-[repeat(auto-fit,minmax(min(100%,400px),1fr))]")}>
          <Cell className="gap-3.5">
            {spaceScale.map((px, i) => (
              <div key={px} className="grid grid-cols-[80px_44px_1fr] items-center gap-3 font-mono text-[12px]">
                <span>space-{i + 1}</span>
                <span className="text-neutral-600">{px}</span>
                <div className="h-3 bg-accent" style={{ width: px }} />
              </div>
            ))}
            <p className={cx(note, "mt-2")}>4–12 di dalam komponen, 16–32 antar elemen dalam satu sel, 48–128 antar section.</p>
          </Cell>
          <Cell className="gap-4">
            <span className={monoLabel}>Grid halaman</span>
            <div className="grid h-30 grid-cols-12 border border-r-0 border-line">
              {Array.from({ length: 12 }, (_, i) => (
                <div key={i} className="border-r border-line" />
              ))}
            </div>
            <div className={cx(cells, "grid-cols-12 font-mono text-[11px] text-neutral-600 *:bg-paper *:p-2.5")}>
              <div className="col-span-3">3 · label</div>
              <div className="col-span-9">9 · konten</div>
              <div className="col-span-4">4</div>
              <div className="col-span-4">4</div>
              <div className="col-span-4">4</div>
            </div>
            <p className={note}>
              12 kolom, lebar maks 1200px, garis 1px #E4E2DC. Gutter nol: konten duduk di dalam sel dan garis yang
              memisahkan, bukan whitespace. Bingkai kiri-kanan halaman selalu terlihat. Nyalakan overlay grid lewat
              tombol “grid” di header.
            </p>
          </Cell>
        </div>
      </Section>

      <Section id="radius" num="04" label="Radius" draft="Sudut hampir tajam." final="Bulat penuh hanya untuk avatar.">
        <div className={cx(cells, "grid-cols-[repeat(auto-fit,minmax(170px,1fr))]")}>
          {radii.map((r) => (
            <Cell key={r.name} className="gap-4">
              <div className={cx("size-18 border-[1.5px] border-ink", r.className)} />
              <div className="flex flex-col gap-0.5">
                <span className="font-mono text-[12px]">{r.name}</span>
                <span className="text-small text-neutral-600">{r.use}</span>
              </div>
            </Cell>
          ))}
        </div>
      </Section>

      <Section
        id="komponen"
        num="05"
        label="Komponen"
        draft="Alat kerja, bukan mainan."
        final="Datar, jelas, langsung dipakai."
      >
        <div className="flex flex-col gap-px border border-line bg-line">
          <ComponentRow name="Button" desc="Satu primary per section. Label rata kiri, ikon di belakang.">
            <div className="flex flex-col gap-7">
              <div className="flex flex-wrap items-center gap-3">
                <Button>
                  Coba gratis
                  <ArrowRight />
                </Button>
                <Button variant="secondary">Masuk</Button>
                <Button variant="outline">Lihat contoh</Button>
                <Button variant="tonal">Lihat fitur</Button>
                <Button variant="link">Harga</Button>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <Button size="sm">Small · 32</Button>
                <Button size="md">Medium · 40</Button>
                <Button size="lg">Large · 48</Button>
                <Button disabled>Disabled</Button>
              </div>
              <Notes items={["fill → kobalt 600", "hover → kobalt 700", "pressed → kobalt 800", "focus → ring 2px kobalt", "disabled → 40%"]} />
            </div>
          </ComponentRow>

          <ComponentRow name="Badge" desc="Mono, radius 2. Status naskah dan jenis konten.">
            <div className="flex flex-wrap items-center gap-3">
              <Badge variant="draft">Draft</Badge>
              <Badge variant="final">Final</Badge>
              <Badge variant="new">Baru</Badge>
              <Badge>TikTok</Badge>
              <Badge>YouTube</Badge>
              <Badge variant="accent">Hook · 15 dtk</Badge>
            </div>
          </ComponentRow>

          <ComponentRow
            name="Input"
            desc="Label mono, tinggi 40, border garis. Fokus berubah kobalt. Kolom pertama bisa kamu ketik."
          >
            <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-6">
              <Field label="Ide konten" hint="Tulis seadanya, nggak usah rapi.">
                <Input type="text" placeholder="Mau bikin konten apa hari ini?" />
              </Field>
              <Field label="Fokus" hint="Border + ring kobalt 200.">
                <div className="flex h-10 items-center rounded-sm border border-accent bg-paper px-3 text-[15px] shadow-[0_0_0_3px_var(--color-cobalt-200)]">
                  review kopi 15rb
                  <span className="ml-px h-4.5 w-[1.5px] bg-accent" />
                </div>
              </Field>
              <Field label="Disabled" hint="Aktif setelah pilih format." disabled>
                <Input type="text" disabled defaultValue="Durasi video" />
              </Field>
            </div>
          </ComponentRow>

          <ComponentRow name="Avatar" desc="Inisial, atau foto potret grayscale hangat lewat src. Satu-satunya elemen bulat.">
            <div className="flex flex-wrap items-center gap-10">
              <div className="flex items-center gap-3">
                <Avatar size={24} initials="RA" />
                <Avatar size={32} initials="RA" />
                <Avatar size={40} initials="RA" />
                <Avatar size={56} initials="RA" />
              </div>
              <div className="flex items-center gap-3">
                <Avatar tone="accent" initials="DN" />
                <Avatar tone="paper" initials="SK" />
                <Avatar tone="muted" initials="RA" />
              </div>
              <AvatarStack>
                <Avatar initials="RA" />
                <Avatar tone="accent" initials="DN" />
                <Avatar tone="muted" initials="SK" />
              </AvatarStack>
              <div className="flex items-center gap-3">
                <Avatar initials="DN" />
                <div className="flex flex-col">
                  <span className="text-[15px] font-semibold">Dinda Nur</span>
                  <span className="font-mono text-[12px] text-neutral-600">@dindamasak · TikTok</span>
                </div>
              </div>
            </div>
          </ComponentRow>

          <ComponentRow name="Demo box" desc="Komponen inti hero. Pilih format atau tekan Buat draft, draft ditulis ulang.">
            <div className="flex min-w-0 flex-col gap-4">
              <DemoBox idea={demoIdea} drafts={demoDrafts} />
              <Notes
                items={[
                  "title bar → wordmark + nama dokumen",
                  "format → segmented control, segmen aktif fill kobalt",
                  "draft ditulis per huruf · reduced motion langsung lengkap",
                  "kobalt hanya di Buat draft dan segmen aktif",
                ]}
              />
            </div>
          </ComponentRow>
        </div>
      </Section>

      <footer className={cx("flex flex-wrap justify-between gap-x-6 gap-y-3 py-6 font-mono text-[12px] text-neutral-600", gutter)}>
        <span>Scripta Design System · v0.1</span>
        <span>24.09.2026</span>
      </footer>
    </div>
  );
}

function Section({
  id,
  num,
  label,
  draft,
  final,
  children,
}: {
  id: string;
  num: string;
  label: string;
  draft: string;
  final: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={cx("border-b border-line py-20", gutter)}>
      <div className="mb-12 flex flex-wrap items-baseline gap-x-12 gap-y-4">
        <div className={cx(monoLabel, "flex-[1_1_160px]")}>
          {num} / {label}
        </div>
        <h2 className="m-0 flex-[4_1_520px] text-h2 text-pretty text-neutral-500">
          {draft} <span className="text-ink">{final}</span>
        </h2>
      </div>
      {children}
    </section>
  );
}

function Cell({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cx("flex flex-col bg-paper p-6", className)}>{children}</div>;
}

function Ramp({ steps, base }: { steps: string[][]; base?: string }) {
  return (
    <div
      className="grid border border-line"
      style={{ gridTemplateColumns: `repeat(${steps.length}, minmax(0, 1fr))` }}
    >
      {steps.map(([step, bg]) => (
        <div key={step} className="flex flex-col">
          <div className={cx("h-14", bg)} />
          <span
            className={cx(
              "px-1 py-1.5 font-mono text-[10px]",
              step === base ? "font-medium text-ink" : "text-neutral-600",
            )}
          >
            {step}
          </span>
        </div>
      ))}
    </div>
  );
}

function FontCard({
  token,
  name,
  glyphClass,
  children,
}: {
  token: string;
  name: string;
  glyphClass: string;
  children: ReactNode;
}) {
  return (
    <Cell className="gap-3">
      <span className={monoLabel}>{token}</span>
      <div className={cx("text-[120px] leading-none tracking-[-0.04em]", glyphClass)}>Aa</div>
      <div className="text-[20px] font-semibold tracking-[-0.01em]">{name}</div>
      <p className={cx(note, "m-0")}>{children}</p>
    </Cell>
  );
}

function ComponentRow({ name, desc, children }: { name: string; desc: string; children: ReactNode }) {
  return (
    <div className="flex flex-wrap gap-x-12 gap-y-6 bg-paper px-6 py-8">
      <div className="flex flex-[1_1_160px] flex-col gap-1.5">
        <span className="text-h4">{name}</span>
        <span className="text-small text-neutral-600">{desc}</span>
      </div>
      <div className="min-w-0 flex-[4_1_480px]">{children}</div>
    </div>
  );
}

function Notes({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-[12px] text-neutral-600">
      {items.map((i) => (
        <span key={i}>{i}</span>
      ))}
    </div>
  );
}
