---
version: 1
slug: "app-routes-home-tsx"
primary_target: "app/routes/home.tsx"
related_targets: ["app/components/hero.tsx","app/components/features.tsx","app/components/social-proof.tsx","app/components/pricing.tsx","app/components/closing-cta.tsx"]
---

# Landing page `/`

Mode: Persuade. Scope so far: hero, section fitur (`01 / Fitur`), section bukti sosial (`02 / Kata creator`), section harga (`03 / Harga`), CTA penutup (`04 / Mulai`). Extends the established Scripta world in DESIGN.md; no new identity.

- Audience: creator individu Indonesia yang menulis naskah sendiri (TikTok, Instagram, YouTube).
- Job: paham dalam beberapa detik bahwa Scripta membantu brainstorming dari ide mentah dan menulis draft script/caption lebih cepat.
- Action: satu CTA primary "Coba gratis" (belum terhubung ke aplikasi; produk fiktif).
- Proof (hero): DemoBox interaktif dengan contoh ide + tiga format draft, dilabeli sebagai contoh. Tidak ada klaim pembeda; testimoni hanya di section bukti sosial, dinyatakan contoh lewat caption.

## Direction contract

THESIS: Hero membuktikan mekanismenya di tempat, bukan menjanjikannya. Menolak hero standar "headline kiri + mockup gradien kanan"; di sini headline dua warna (draft → final) dan demo box yang bisa dipakai duduk di sel grid bergaris rambut.

OWN-WORLD: Kertas, tinta, garis 1px `line`, satu kobalt untuk CTA dan chip aktif. Frame 1200px dengan bingkai kiri-kanan terlihat, gutter nol, sel dipisah hairline. Manrope 500 untuk display, JetBrains Mono di demo box.

STORY: Pengunjung membaca "ide masih berantakan → naskah siap posting", melihat satu ide mentah berubah jadi hook, caption carousel, atau outline YouTube saat chip ditekan, lalu klik "Coba gratis".

FIRST VIEWPORT: Header (wordmark kiri, Masuk secondary kanan). Baris 1: headline display 12 kolom, bagian awal abu draft, penutup tinta. Baris 2: sel 5 kolom berisi body-l, CTA primary lg di dasar sel, catatan kecil; sel 7 kolom berisi DemoBox + caption contoh. Mobile: tumpuk berurutan, CTA sebelum demo.

FORM: Extension of the established world (no concept roll; local surface in an existing system). Signature interaction: memilih chip menulis ulang draft baris demi baris (stagger, ease-out, motion-safe).

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Section fitur (`app/components/features.tsx`)

- Job: menjabarkan dua kemampuan utama, ideation sudut konten dan menulis draft script/caption lebih cepat, dalam 4 poin dengan hierarki jelas (dipilih user: 2 utama + 2 pendukung).
- Constraint dari user: hanya token dan komponen yang tercatat di DESIGN.md; tidak ada token atau pola visual baru. Tidak ada CTA primary di section ini.
- Proof: sudut dan draft adalah contoh buatan (ide kopi yang sama dengan hero), dilabeli contoh. Tidak ada angka kecepatan.

THESIS: Fitur dibuktikan sebagai satu alur yang bisa dipakai, bukan grid kartu ikon. Dua sel utama terhubung: memilih sudut di sel Ideation menulis ulang draft di sel Script.

OWN-WORLD: Sel grid bergaris rambut 6/6, dua editor gelap dengan anatomi demo box (bar `ide:`, label kobalt-400, baris mono), chip untuk sudut, Badge untuk poin pendukung.

STORY: Pengunjung melihat satu ide mentah bercabang jadi tiga sudut, memilih satu, melihat draft hook-nya tertulis, lalu membaca bahwa format dan titik awal draft ikut dibantu.

FIRST VIEWPORT: Header section: label `01 / Fitur` kolom kiri, h2 dua warna kolom kanan. Baris 2: dua sel utama (h3, body, editor sejajar lewat subgrid). Baris 3: dua sel pendukung (h4, small, badge). Mobile: tumpuk urut.

FORM: Extension of an existing surface (no concept roll). Signature interaction: pilih chip sudut → draft ditulis ulang baris demi baris (`animate-line-in`, motion-safe).

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Section bukti sosial (`app/components/social-proof.tsx`)

- Job: menambah kepercayaan lewat testimoni creator, setelah pengunjung paham mekanismenya.
- Dipilih user (redesign 2026-09-25): versi pertama terlalu penuh dan hierarkinya kabur (lima elemen ukuran h2, enam penanda contoh, lima lapis metadata per kutipan). Sekarang hanya kutipan: statistik dihapus, tiga testimoni setara, tanpa badge; status contoh cukup dinyatakan satu caption penutup.
- Constraint: hanya token dan komponen DESIGN.md (sel hairline, Avatar, headline dua warna). Tidak ada CTA primary, tidak ada klaim pembeda atau angka kecepatan di kutipan, tidak ada angka pengguna.

THESIS: Headline section adalah satu-satunya fokus; tiga kutipan setara di bawahnya dibaca kiri ke kanan tanpa lapis label. Kaitan ke mekanisme produk cukup lewat nama format di baris atribusi, satu creator per format demo hero.

OWN-WORLD: Sel kertas bergaris rambut 4/4/4. Kutipan `body-l` tinta dengan tanda kutip lengkung, Avatar inisial 40 (ink, muted, paper), nama semibold `small`, baris "format · platform" `small` `neutral-600`. Satu-satunya mono adalah label section. Tanpa badge, tanpa editor gelap, tanpa kobalt.

STORY: Pengunjung membaca bahwa creator lain juga mulai dari catatan berantakan, memindai tiga kutipan (Hook, Carousel, Outline), lalu tahu semuanya contoh.

FIRST VIEWPORT: Header section: label `02 / Kata creator` kiri, h2 dua warna kanan. Baris 2: tiga sel kutipan (kutipan body-l, atribusi di dasar sel lewat `mt-auto` sehingga avatar sejajar). Baris 3: caption kejujuran. Di bawah `lg`: tumpuk urut Dinda, Raka, Sekar.

FORM: Extension of an existing surface (no concept roll). Section sengaja statis dan tenang setelah dua section interaktif; grammar motion halaman tetap `animate-line-in` milik hero dan fitur.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Section harga (`app/components/pricing.tsx`)

- Job: menunjukkan paket Free dan Pro dengan perbandingan yang jelas, Pro sebagai paket yang direkomendasikan.
- Dipilih user: harga angka contoh berlabel (Badge `Harga contoh` + caption kejujuran); pembeda hanya kuota fitur yang sudah ada (draft per bulan, sudut per ide, riwayat draft), tanpa fitur baru; bentuk dua kartu + tabel ledger.
- Constraint: hanya token dan komponen DESIGN.md (sel hairline, kartu `rounded.md` dengan anatomi demo box, Badge, Button). Satu CTA primary (Pro); Free memakai button outline.

THESIS: Harga dibaca sebagai ledger yang sejajar dengan kartunya, bukan tiga kartu mengambang dengan daftar centang. Kolom tabel jatuh tepat di bawah kartu paketnya, jadi baris Free dan Pro dibandingkan lurus ke bawah.

OWN-WORLD: Sel kertas 4/4/4. Kartu Free di atas kertas (border `neutral-300`), kartu Pro memakai permukaan editor gelap dengan border `accent`, Badge `new` "Direkomendasikan", dan satu-satunya button primary. Tabel bergaris rambut, label grup mono, angka tabular-nums, ikon centang SVG satu stroke.

STORY: Pengunjung membaca bahwa alurnya sama di kedua paket, melihat Pro disorot, membandingkan kuota baris demi baris, dan tahu semua angka contoh.

FIRST VIEWPORT: Header section: label `03 / Harga` kiri, h2 dua warna kanan. Baris 2: sel intro 4 kolom (h3, body, Badge `Harga contoh`), sel kartu Free 4 kolom, sel kartu Pro 4 kolom. Baris 3: tabel 12 kolom dengan kolom Free/Pro sejajar kartu. Baris 4: caption kejujuran. Mobile: tumpuk urut, Pro sebelum tabel.

FORM: Extension of an existing surface (no concept roll). Section statis; motion halaman tetap milik hero dan fitur.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## CTA penutup (`app/components/closing-cta.tsx`)

- Job: mendorong pengunjung mulai coba gratis, sambil menegaskan ulang value proposition utama secara singkat.
- Constraint: hanya token dan komponen DESIGN.md (sel hairline, headline dua warna, Button primary lg dengan ArrowRight). Satu CTA primary. Tidak ada klaim pembeda; catatan kecil mengingatkan harga/kuota masih contoh.

THESIS: Penutup mengulang mekanisme, bukan slogan. Alur ide → sudut/format → rapikan ditulis ulang sebagai tiga langkah bernomor, jadi klik terakhir tetap menempel pada cara kerja produk.

OWN-WORLD: Sel kertas 7/5. Headline dua warna naik ke `h1` dari `sm` ke atas sebagai klimaks halaman. Daftar langkah memakai nomor mono, judul `h4`, pemisah hairline seperti ledger bukti sosial; langkah pertama memakai baris `ide:` mono dengan ide kopi yang sama dengan hero.

FIRST VIEWPORT: Header section: label `04 / Mulai` kiri, headline dua warna kanan. Baris 2: sel 7 kolom (body-l, CTA primary lg di dasar sel, catatan kecil), sel 5 kolom tiga langkah. Mobile: tumpuk urut, CTA sebelum langkah.
