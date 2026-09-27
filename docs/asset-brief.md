# Asset brief — Scripta landing page

Tujuh aset hasil generate AI (GPT Image di ChatGPT). Nomor aset dipakai di komentar kode.

| # | Section | File di `public/` | Ukuran akhir | Slot di kode |
|---|---|---|---|---|
| 1 | Hero | `hero-mic.png` | ±1024 × 1536, PNG transparan | `app/components/hero.tsx`, `<Cutout>` |
| 2 | Fitur: Sudut | `fitur-sudut.png` | 1200 × 600 (2:1) | `app/components/features.tsx`, `lead[0].art` |
| 3 | Fitur: Draft | `fitur-draft.png` | 1200 × 600 (2:1) | `lead[1].art` |
| 4 | Fitur: Format | `fitur-format.png` | 800 × 600 (4:3) | `support[0].art` |
| 5 | Fitur: Salin | `fitur-salin.png` | 800 × 600 (4:3) | `support[1].art` |
| 6 | Fitur: Riwayat | `fitur-riwayat.png` | 800 × 600 (4:3) | `support[2].art` |
| 7 | Mulai (CTA) | `cta-macropad.png` | ±1024 × 1536, PNG transparan | `app/components/closing-cta.tsx`, `<Cutout>` |

## Konsep keseluruhan

Satu persona creator membuka dan menutup halaman. Tangannya yang sama muncul di hero dan di CTA: kulit terang, lengan sweater rajut hitam (`ink`), kuku pendek bersih, tanpa cincin, jam, atau gelang. Wajah dan badan tidak pernah terlihat; lengan keluar dari tepi bawah gambar supaya subjek berdiri di atas garis sel.

- **Hero (#1):** tangan memegang transmitter mic wireless kotak berbodi graphite dengan strip LED kobalt. Janjinya: naskah siap direkam.
- **Fitur (#2–#6):** diagram UI flat bergaya "kartu melayang di atas orbit". Alurnya mengikuti produk: ide jadi beberapa sudut, sudut jadi draft, draft jadi tiga format, lalu dihitung, disalin, dan disimpan.
- **CTA (#7):** telunjuk hampir menekan macro pad satu tombol berbodi graphite, cahaya kobalt merembes dari tepi tombol. Ini tombol "Buat draft" di dunia nyata: ketik ide seadanya, tekan, draft pertama jadi. Bentuknya sepadan dengan mic di hero, sama-sama perangkat kecil graphite dengan satu cahaya kobalt.

Kobalt (`#2B50FF`) hanya muncul sebagai satu titik cahaya atau fokus per gambar. Tidak ada warna lain selain netral hangat.

---

## Foto cutout (#1, #7)

Struktur prompt mengikuti template @AmirMushich. Bagian *Layout & UI Elements* (logo dan teks di sudut) dihapus karena background akan dibuang. Tiga bagian lain diadaptasi supaya hasilnya mudah dipotong:

- *AI Invention* diganti deskripsi objek yang sudah ditentukan. GPT Image tidak mengenal Scripta, jadi kosakata brand ditulis langsung di prompt.
- *Shallow depth of field / bokeh* diganti fokus tajam di seluruh subjek. Tepi yang blur akan berbayang setelah background dihapus.
- *Pastel cyclorama* diganti off-white netral. Background berwarna memantul ke kulit dan bodi graphite dan tersisa setelah background dihapus.

Generate dalam ukuran potret 1024 × 1536. Generate #1 dulu, lalu generate #7 di percakapan yang sama sambil melampirkan hasil #1 sebagai referensi tangan dan lengan.

### #1 Hero — tangan dan mic transmitter

```text
SCRIPTA:
A high-end, glossy concept art magazine editorial photograph of a compact wireless microphone transmitter designed by Scripta, a scriptwriting tool for short-form video creators. Scripta's visual language is a writer's desk: paper, ink and hairlines, strictly monochrome warm neutrals with a single cobalt blue accent.

**1. The Concept & Object:**
A single light-skinned human hand rises into the frame from the bottom edge and holds a small wireless clip-on microphone transmitter between the thumb, index and middle finger, presenting it slightly toward the camera. The transmitter is a rounded-square block about the size of a matchbox, soft-cornered and pebble-like, sculptural yet clearly functional. A thin LED strip along one side edge glows cobalt blue (#2B50FF); it is the only saturated color in the image. The wrist and forearm are covered by a black ribbed-knit sweater cuff, and the arm exits through the bottom edge of the frame. No face, no body, no other objects.

**2. Materials & Details (Hyper-Premium):**
The body is matte graphite anodized aluminium with a fine bead-blasted micro texture, precision-chamfered edges that catch the light, a finely perforated microphone grille on the top face and a hairline seam where the clip meets the body. The LED casts a faint cool glow on the nearest fingertip. The hand is natural and well kept: short clean nails, realistic skin texture and knuckle creases, no nail polish, no rings, no watch, no bracelet. The sleeve is fine black merino rib knit with visible yarn texture. There are absolutely no logos, letters, numbers, markings or engravings on anything.

**3. Photography & Lighting (Cinematic Studio):**
Shot on a medium format Phase One camera with a 100mm macro lens at f/11. The whole hand, sleeve and transmitter are in crisp focus from edge to edge, with no bokeh and no motion blur. The key light is a soft daylight-balanced studio softbox from the upper left with gentle enveloping fill. A precise rim light from behind on the right traces the contours of the fingers, sleeve and device so the silhouette separates cleanly from the background. Warm neutral color grade, low saturation.

**4. Environment:**
A seamless, impeccably clean studio cyclorama in flat neutral off-white (#F6F5F1), evenly lit, with no gradient, no props and no cast shadow on the background.

Vertical portrait composition. The hand is centered horizontally, the transmitter sits in the upper third of the frame, and the sleeve crosses the bottom edge. Leave clear margin above the device and on both sides.
```

### #7 Mulai — telunjuk dan macro pad satu tombol

```text
SCRIPTA:
A high-end, glossy concept art magazine editorial photograph of a single-key macro pad designed by Scripta, a scriptwriting tool for short-form video creators. The key is Scripta's "write the first draft" button made physical. Scripta's visual language is a writer's desk: paper, ink and hairlines, strictly monochrome warm neutrals with a single cobalt blue accent.

**1. The Concept & Object:**
A compact wireless macro pad with exactly one oversized key, a soft-cornered graphite block about 5 cm square, rests on the open palm of a light-skinned left hand that rises into the frame from the bottom edge. The index finger of the same person's right hand, also entering from the bottom edge, hovers a few millimetres above the key, about to press it. A cobalt blue (#2B50FF) backlight glows softly from the gap around the keycap and spills a faint halo onto the pad's top surface; it is the only saturated color in the image. Both wrists are covered by black ribbed-knit sweater cuffs, and both arms exit through the bottom edge of the frame. No face, no body, no cable, no other objects.

**2. Materials & Details (Hyper-Premium):**
The pad body is matte graphite anodized aluminium with a fine bead-blasted micro texture and precision-chamfered edges. The keycap is a slightly concave, blank, matte black PBT keycap with a subtle dry texture and no legend. The backlight glow is even and soft, not neon. The hands are natural and well kept: short clean nails, realistic skin texture and knuckle creases, no nail polish, no rings, no watch, no bracelet. The sleeves are fine black merino rib knit with visible yarn texture. There are absolutely no logos, letters, numbers, markings or engravings on anything.

**3. Photography & Lighting (Cinematic Studio):**
Shot on a medium format Phase One camera with a 100mm macro lens at f/11. Both hands, both sleeves and the macro pad are in crisp focus from edge to edge, with no bokeh and no motion blur. The key light is a soft daylight-balanced studio softbox from the upper left with gentle enveloping fill. A precise rim light from behind on the right traces the contours of the fingers, sleeves and device so the silhouette separates cleanly from the background. Warm neutral color grade, low saturation.

**4. Environment:**
A seamless, impeccably clean studio cyclorama in flat neutral off-white (#F6F5F1), evenly lit, with no gradient, no props and no cast shadow on the background.

Vertical portrait composition. The macro pad sits slightly above the center of the frame, the hovering finger comes in from the lower right, and both sleeves cross the bottom edge. Leave clear margin above the pad and on both sides. Match the hand, skin tone and sleeve of the attached reference image exactly.
```

Kalau anatomi dua tangan terus rusak, pakai varian satu tangan: ganti paragraf pertama bagian 1 menjadi *"…rests in the fingers of a single light-skinned hand rising from the bottom edge, and the thumb of the same hand hovers a few millimetres above the key, about to press it."* Sesuaikan juga kalimat komposisi di akhir.

### Pasca-edit foto

1. Hapus background (ChatGPT: "remove the background, transparent PNG"; atau remove.bg / Photoshop *Select Subject*). Periksa tepi rajutan sweater dan sela jari di zoom 200%.
2. Koreksi warna LED atau glow ke `#2B50FF`. Pastikan tidak ada pantulan kobalt yang terlalu lebar di kulit.
3. Pastikan tidak ada teks, logo, atau ukiran yang muncul di perangkat. Kalau ada, hapus dengan inpaint.
4. Potong tepi bawah tepat di lengan, tanpa sisa background di bawahnya. `Cutout` menempelkan gambar ke tepi bawah (`object-bottom`).
5. Kompres (Squoosh atau TinyPNG) sampai di bawah 400 KB, lalu simpan ke `public/`.

---

## Ilustrasi kartu fitur (#2–#6)

Format prompt teknis, tanpa gaya foto editorial. Ilustrasinya diagram UI flat, bukan objek 3D. Background dipanggang langsung (tidak dihapus), jadi warnanya harus sama dengan kertas halaman.

Gaya yang sama di kelima kartu:

- Background: flat `#F6F5F1` dengan dot grid halus `#E4E2DC` berjarak rapat.
- Garis orbit dan penghubung: hairline 1px `#CFCDC7`, dengan node kecil di sepanjang garis.
- Kartu: putih, radius kecil (±6px), shadow lembut dan lebar dengan opacity rendah, tanpa border tebal.
- Ikon: line icon tipis berwarna `#111111`.
- Label: sans-serif geometris mirip Manrope untuk nama; monospace mirip JetBrains Mono uppercase untuk label teknis. Hanya label yang tertulis di prompt yang boleh muncul.
- Kobalt `#2B50FF`: hanya untuk satu elemen terpilih per gambar.
- Tanpa logo platform, tanpa gradien, tanpa 3D, tanpa bokeh, tanpa tangan atau orang.

Generate di 1536 × 1024 (landscape), lalu crop:

- **#2, #3 (2:1):** crop tengah 1536 × 768, lalu resize ke 1200 × 600. Prompt meminta 12% atas dan bawah tetap kosong.
- **#4–#6 (4:3):** crop tengah 1365 × 1024, lalu resize ke 800 × 600. Di bawah `md` slot ini dipotong lagi jadi 2:1, jadi semua elemen penting harus ada di pita tengah (±67% tinggi gambar). Prompt meminta 18% atas dan bawah tetap kosong, dan 6% kiri dan kanan.

Generate kelima kartu di satu percakapan dan lampirkan hasil #2 saat membuat #3–#6, supaya gayanya konsisten.

### #2 Fitur: Sudut — satu ide, beberapa sudut

```text
Flat UI diagram illustration for a product feature card, 1536x1024 landscape.

Style: minimal, modern SaaS diagram in the style of an integrations orbit graphic. Flat warm off-white background #F6F5F1 with a fine, subtle dot grid in #E4E2DC. Hairline 1px orbit rings and connector lines in #CFCDC7 with small round nodes along them. Floating white cards with ~6px corner radius and a very soft, wide, low-opacity drop shadow. Thin line icons in #111111. Labels in a clean geometric sans-serif like Manrope, dark gray #111111. No gradients, no 3D, no bokeh, no people, no hands, no logos.

Composition: three concentric orbit rings centered in the frame. In the exact center, a slightly larger white card with a small lightbulb line icon and the label "Ide mentah". Five smaller white cards float on the rings around it, evenly spread, each with a tiny line icon and one label: "Perbandingan", "Cerita", "Eksperimen", "Tips", "Review". The "Cerita" card is the selected one: a 1.5px cobalt blue #2B50FF border and a small filled cobalt dot beside its label, with its connector node also cobalt. Cobalt appears nowhere else.

Keep every card fully inside the central band of the image; the top 12% and bottom 12% contain only background and faint orbit lines.

Text rules: render only these exact labels, spelled exactly: "Ide mentah", "Perbandingan", "Cerita", "Eksperimen", "Tips", "Review". No other text, numbers, watermarks or logos anywhere.
```

### #3 Fitur: Draft — sudut jadi draft

```text
Flat UI diagram illustration for a product feature card, 1536x1024 landscape.

Style: minimal, modern SaaS diagram, matching the attached reference exactly. Flat warm off-white background #F6F5F1 with a fine, subtle dot grid in #E4E2DC. Hairline 1px lines in #CFCDC7 with small round nodes. Floating white cards with ~6px corner radius and a very soft, wide, low-opacity drop shadow. Thin line icons in #111111. Labels in a clean geometric sans-serif like Manrope, technical labels in an uppercase monospace like JetBrains Mono, dark gray. No gradients, no 3D, no bokeh, no people, no hands, no logos.

Composition: on the left third, a small white card labelled "Cerita" with a 1.5px cobalt blue #2B50FF border and a small cobalt dot. A hairline connector with two small nodes runs from it to the right, where a large floating white document card fills the right half. The document card has three stacked sections separated by hairlines, each starting with a small uppercase monospace label: "HOOK", "[SHOT]", "PENUTUP". Under each label are two or three soft light-gray rounded placeholder bars of varying length, not real text. At the end of the last placeholder bar sits a thin vertical cobalt blue text caret. One faint orbit ring arc passes behind the document card.

Keep every card fully inside the central band of the image; the top 12% and bottom 12% contain only background.

Text rules: render only these exact labels, spelled exactly: "Cerita", "HOOK", "[SHOT]", "PENUTUP". The placeholder bars must stay abstract. No other text, numbers, watermarks or logos anywhere.
```

### #4 Fitur: Format — satu sudut, tiga format

```text
Flat UI diagram illustration for a product feature card, 1536x1024 landscape.

Style: minimal, modern SaaS diagram, matching the attached reference exactly. Flat warm off-white background #F6F5F1 with a fine, subtle dot grid in #E4E2DC. Hairline 1px lines in #CFCDC7 with small round nodes. Floating white cards with ~6px corner radius and a very soft, wide, low-opacity drop shadow. Labels in an uppercase monospace like JetBrains Mono, dark gray #111111. No gradients, no 3D, no bokeh, no people, no hands, no logos.

Composition: a small solid cobalt blue #2B50FF node sits centered near the top of the central band. Three hairline connectors branch down from it to three white cards in a horizontal row, whose shapes show the format: on the left, a tall vertical 9:16 card with a thin play-triangle line icon and the label "0:15"; in the middle, a stack of three slightly offset square 1:1 cards with the label "1/5" on the front card; on the right, a wide landscape 16:9 card with a thin timeline bar and the label "00:45". Inside each card, a few soft light-gray placeholder bars, not real text. Cobalt appears only on the top node.

Keep all elements inside the central band: the top 18% and bottom 18% of the image, and 6% on the left and right, contain only background.

Text rules: render only these exact labels: "0:15", "1/5", "00:45". No other text, numbers, watermarks or logos anywhere.
```

### #5 Fitur: Salin — hitung kata, salin sekali klik

```text
Flat UI diagram illustration for a product feature card, 1536x1024 landscape.

Style: minimal, modern SaaS diagram, matching the attached reference exactly. Flat warm off-white background #F6F5F1 with a fine, subtle dot grid in #E4E2DC. Hairline 1px lines in #CFCDC7. Floating white cards with ~6px corner radius and a very soft, wide, low-opacity drop shadow. Thin line icons in #111111. Labels in a clean geometric sans-serif like Manrope, technical labels in an uppercase monospace like JetBrains Mono, dark gray. No gradients, no 3D, no bokeh, no people, no hands, no cursor, no logos.

Composition: a white document card sits left of center, filled with several soft light-gray placeholder bars, not real text. Along its bottom edge runs a thin footer bar with a small outlined chip reading "142 KATA" on the left and a small solid cobalt blue #2B50FF button reading "Salin" with a tiny copy icon, in white text, on the right. To the right, a second, identical document card drifts out from behind the first, drawn with a dashed hairline outline and slightly lighter, as the copied version; a small round checkmark badge in #111111 sits on its top-right corner. Cobalt appears only on the "Salin" button.

Keep all elements inside the central band: the top 18% and bottom 18% of the image, and 6% on the left and right, contain only background.

Text rules: render only these exact labels, spelled exactly: "142 KATA", "Salin". No other text, numbers, watermarks or logos anywhere.
```

### #6 Fitur: Riwayat — draft lama tetap bisa dibuka

```text
Flat UI diagram illustration for a product feature card, 1536x1024 landscape.

Style: minimal, modern SaaS diagram, matching the attached reference exactly. Flat warm off-white background #F6F5F1 with a fine, subtle dot grid in #E4E2DC. Floating white cards with ~6px corner radius and a very soft, wide, low-opacity drop shadow. Labels in an uppercase monospace like JetBrains Mono, dark gray #111111. No gradients, no 3D, no bokeh, no people, no hands, no logos.

Composition: a stack of four white draft cards recedes diagonally toward the upper left, each one slightly smaller, higher and more faded than the one in front, like a history of saved drafts. Each card shows a few soft light-gray placeholder bars, not real text, and a small uppercase monospace date label in its top-left corner: from back to front "19 AGU", "28 AGU", "03 SEP". A fifth card, the frontmost, is pulled out toward the lower right, slightly raised with a stronger soft shadow; it carries the label "12 SEP" and a small solid cobalt blue #2B50FF dot next to it, marking the draft being reopened. Cobalt appears only on that dot.

Keep all elements inside the central band: the top 18% and bottom 18% of the image, and 6% on the left and right, contain only background.

Text rules: render only these exact labels, spelled exactly: "19 AGU", "28 AGU", "03 SEP", "12 SEP". No other text, watermarks or logos anywhere.
```

### Pasca-edit ilustrasi

1. Cek setiap label huruf per huruf dengan daftar di *Text rules*. Perbaiki typo dengan inpaint di ChatGPT ("fix the label to read exactly …") atau timpa manual di Figma memakai Manrope / JetBrains Mono.
2. Pastikan background tepat `#F6F5F1` (cek dengan eyedropper) dan hanya ada satu elemen kobalt, dikoreksi ke `#2B50FF`.
3. Crop dan resize sesuai rasio di atas. Untuk #4–#6, tarik guide pita tengah 2:1 dan pastikan tidak ada kartu yang terpotong.
4. Kompres sampai di bawah 200 KB, lalu simpan ke `public/`.

---

## Memasang aset di kode

Sambungkan hanya setelah file-nya ada di `public/`. Path yang belum ada akan tampil sebagai gambar rusak.

- #1: `app/components/hero.tsx` → `<Cutout src="/hero-mic.png" … />`
- #2–#6: `app/components/features.tsx` → isi `art: "/fitur-….png"` pada item `lead` dan `support` yang sesuai. `alt` tetap kosong, karena judul dan deskripsi kartu sudah menjelaskan isinya.
- #7: `app/components/closing-cta.tsx` → `<Cutout src="/cta-macropad.png" … />`
