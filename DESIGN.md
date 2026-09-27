---
version: alpha
name: Scripta
description: Landing page Scripta — monokrom seperti meja kerja penulis naskah, dengan satu aksen kobalt untuk hal yang harus diklik.
colors:
  paper: "#F6F5F1"
  ink: "#111111"
  draft: "#A3A3A3"
  line: "#E4E2DC"
  editor: "#1C1C1C"
  accent: "#2B50FF"
  neutral-50: "#F6F5F1"
  neutral-100: "#EDEBE5"
  neutral-200: "#E4E2DC"
  neutral-300: "#CFCDC7"
  neutral-400: "#A3A3A3"
  neutral-500: "#7A7A7A"
  neutral-600: "#5C5C5C"
  neutral-700: "#2E2E2E"
  neutral-800: "#1C1C1C"
  neutral-900: "#111111"
  cobalt-100: "#EEF1FF"
  cobalt-200: "#D9DFFF"
  cobalt-300: "#B3C0FF"
  cobalt-400: "#7D93FF"
  cobalt-500: "#2B50FF"
  cobalt-600: "#1F3FE0"
  cobalt-700: "#1831B3"
  cobalt-800: "#142785"
  cobalt-900: "#0F1C57"
typography:
  sans:
    fontFamily: Manrope
  mono:
    fontFamily: JetBrains Mono
  display:
    fontFamily: Manrope
    fontSize: 72px
    lineHeight: 76px
    fontWeight: 500
    letterSpacing: -0.035em
  h1:
    fontFamily: Manrope
    fontSize: 56px
    lineHeight: 60px
    fontWeight: 500
    letterSpacing: -0.03em
  h2:
    fontFamily: Manrope
    fontSize: 40px
    lineHeight: 44px
    fontWeight: 500
    letterSpacing: -0.025em
  h3:
    fontFamily: Manrope
    fontSize: 28px
    lineHeight: 34px
    fontWeight: 600
    letterSpacing: -0.02em
  h4:
    fontFamily: Manrope
    fontSize: 20px
    lineHeight: 28px
    fontWeight: 600
    letterSpacing: -0.01em
  body-l:
    fontFamily: Manrope
    fontSize: 18px
    lineHeight: 28px
    fontWeight: 400
  body:
    fontFamily: Manrope
    fontSize: 16px
    lineHeight: 26px
    fontWeight: 400
  small:
    fontFamily: Manrope
    fontSize: 14px
    lineHeight: 22px
    fontWeight: 400
  label:
    fontFamily: JetBrains Mono
    fontSize: 12px
    lineHeight: 16px
    fontWeight: 500
    letterSpacing: 0.04em
rounded:
  xs: 2px
  sm: 4px
  md: 6px
components:
  button-primary:
    backgroundColor: "{colors.cobalt-600}"
    textColor: "{colors.paper}"
    rounded: "{rounded.sm}"
  button-primary-hover:
    backgroundColor: "{colors.cobalt-700}"
  button-primary-active:
    backgroundColor: "{colors.cobalt-800}"
  button-secondary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.sm}"
  button-secondary-hover:
    backgroundColor: "{colors.neutral-700}"
  button-secondary-active:
    backgroundColor: "{colors.neutral-600}"
  button-tonal:
    backgroundColor: transparent
    textColor: "{colors.neutral-700}"
    borderColor: "{colors.neutral-300}"
    rounded: "{rounded.sm}"
  button-tonal-hover:
    backgroundColor: "{colors.neutral-100}"
  button-tonal-active:
    backgroundColor: "{colors.neutral-200}"
  badge:
    typography: "{typography.label}"
    rounded: "{rounded.xs}"
  input:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    height: 40px
  chip:
    textColor: "{colors.draft}"
    rounded: "{rounded.sm}"
    height: 30px
  chip-active:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.paper}"
  segmented:
    textColor: "{colors.draft}"
    rounded: "{rounded.sm}"
    height: 32px
  segmented-active:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.paper}"
    rounded: "{rounded.xs}"
  demo-box:
    backgroundColor: "{colors.editor}"
    textColor: "{colors.paper}"
    rounded: "{rounded.md}"
omitted:
  - section: spacing
    reason: "Spacing memakai skala bawaan Tailwind (kelipatan 4px); belum ada token spacing bernama."
---

## Overview

Scripta mengubah ide konten yang masih berantakan jadi naskah siap posting. Tampilannya monokrom seperti meja kerja penulis naskah: kertas, tinta, dan garis. Kobalt hanya muncul pada hal yang harus diklik. Nadanya lugas, cepat, dan editorial. Scripta tampil sebagai alat kerja, bukan mainan.

## Colors

- Kobalt (`accent`) adalah satu-satunya aksen. Pakai hanya untuk CTA, state aktif, LED di foto, dan satu elemen terpilih di ilustrasi fitur.
- Bagian awal headline dua warna memakai `neutral-500` (3.9:1 di atas kertas, lolos syarat 3:1 teks besar). Abu draft (`draft`, 2.3:1) terlalu pucat untuk teks apa pun di atas kertas; pakai hanya di permukaan gelap (label nonaktif di demo box, chip). Teks sekunder di atas kertas memakai `neutral-600`.
- Ramp kobalt: 600 untuk hover, 700 untuk pressed dan untuk teks di atas fill 100. Step 100–200 untuk tint badge dan seleksi teks.
- Ramp netral: `neutral-100` untuk hover di permukaan terang, `neutral-300` untuk border input dan badge outline, `neutral-700` untuk border di dalam demo box.

## Typography

- Manrope untuk headline dan body. Weight 500 untuk headline, 600 untuk judul kecil, 400 untuk body. Tracking negatif untuk `h4` ke atas.
- JetBrains Mono untuk demo box, chip, badge, dan label kecil. Label selalu uppercase dengan tracking positif.
- Headline memakai dua warna. Kalimat pertama berwarna `neutral-500`, kalimat penutup berwarna `ink`, seperti draft yang menjadi final. Di headline hero, kalimat penutup selalu mulai di baris baru supaya pergantian warna tidak jatuh di tengah baris.

## Layout

- Halaman memakai grid 12 kolom dengan lebar maksimum tetap. Bingkai kiri dan kanan halaman selalu terlihat sebagai garis `line`.
- Gutter nol. Konten duduk di dalam sel, dan antarsel dipisahkan garis `line` setipis rambut, bukan whitespace.
- Spacing memakai kelipatan basis yang sama: paling rapat di dalam komponen, sedang antarelemen dalam satu sel, paling lebar antarsection.
- Header section memakai label mono bernomor (`01 / Warna`) di kolom kiri dan headline dua warna di kolom kanan.

## Shapes

- `rounded.xs` untuk badge, tag, dan segmen di dalam segmented control. `rounded.sm` untuk button, input, chip, dan track segmented control. `rounded.md` untuk demo box dan kartu fitur.
- Sel grid, section, dan gambar tidak diberi radius.
- Sudut bulat penuh hanya untuk avatar.

## Components

- Button: label rata kiri, ikon di belakang label. State fokus berupa ring `accent` yang diberi jarak dari tepi tombol. State disabled dipudarkan tanpa mengganti warna.
- Input: label mono uppercase di atasnya. Saat fokus, border berubah `accent` dengan ring `cobalt-200`.
- Demo box: jendela editor gelap. Urutannya mengikuti alur produk: title bar (wordmark kecil + nama dokumen), field ide read-only dengan tombol kobalt "Buat draft", segmented control format, draft, lalu baris aksi (jumlah kata + Salin). Kobalt di dalamnya hanya untuk "Buat draft" dan segmen aktif.
- Draft ditulis per huruf dengan caret kobalt: sekali saat demo box pertama terlihat, lalu setiap format diganti atau "Buat draft" ditekan. Tinggi box tetap setinggi draft terpanjang. Reduced motion langsung menampilkan teks lengkap.
- Segmented control: satu track border `neutral-700`, label pendek (`Hook`, `Carousel`, `Outline`). Nama lengkap format ada di label draft.
- Chip: dipakai untuk daftar pilihan bebas panjang, misalnya sudut konten di dalam produk. Default memakai border `neutral-700`, aktif fill kobalt.
- Avatar berisi inisial, atau foto potret grayscale hangat bila ada. Avatar yang ditumpuk dipisahkan cincin `paper`.
- Foto: render realistis bergaya editorial studio, di-grade netral hangat mengikuti `paper` dengan saturasi rendah, softbox dari kiri atas dan rim light dari belakang. Seluruh subjek tajam, tanpa bokeh, supaya tepinya bersih saat dipotong. Kobalt di foto hanya dari LED atau cahaya perangkat, dikoreksi ke `accent` saat editing.
- Foto tidak memuat teks, logo, ukiran, atau tulisan tangan.
- Manusia hanya muncul di foto potong transparan (hero dan penutup CTA): satu persona creator dengan tangan kulit terang, lengan sweater rajut `ink`, tanpa aksesori, wajah tidak terlihat. Hero memegang transmitter mic graphite; penutup CTA menekan macro pad satu tombol graphite. Subjeknya keluar dari tepi bawah dan berdiri di atas garis sel.
- Ilustrasi kartu fitur adalah diagram UI flat, bukan foto: dot grid di atas `paper`, orbit dan garis penghubung `neutral-300`, kartu putih melayang dengan shadow lembut, ikon garis `ink`. Kobalt hanya untuk satu elemen terpilih per ilustrasi. Tanpa logo platform. Label pendek yang tercantum di `docs/asset-brief.md` boleh muncul dan wajib dicek ejaannya.

## Do's and Don'ts

- Do: pakai satu button primary per section.
- Don't: memakai abu draft untuk teks di atas kertas; kontrasnya terlalu rendah bahkan di ukuran display.
- Don't: menambah warna aksen kedua selain kobalt.
- Don't: membiarkan teks hasil generate AI di foto cutout. Di ilustrasi fitur, hanya label dari asset brief yang boleh muncul.
- Don't: membulatkan penuh elemen apa pun selain avatar.
