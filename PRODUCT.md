# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Creator individu Indonesia yang menulis naskah kontennya sendiri untuk TikTok, Instagram (Reels, carousel), dan YouTube. Mereka datang dengan ide yang masih berantakan ("review kopi susu gula aren 15rb di Jaksel") dan butuh draft pertama yang bisa langsung dirapikan dan diposting, tanpa mulai dari halaman kosong.

## Product Purpose

Scripta mengubah ide konten mentah jadi naskah siap posting. Pengguna mengetik ide seadanya, memilih format, dan mendapat draft yang tinggal disesuaikan gaya bahasanya.

Scripta adalah proyek latihan/portfolio: produknya fiktif dan belum ada aplikasi yang berjalan. Yang dibangun adalah landing page beserta design system-nya. Keberhasilan diukur dari kualitas desain dan implementasi frontend, bukan dari konversi nyata.

## Positioning

Belum ditentukan. Pembeda Scripta dari ChatGPT atau generator caption lain masih keputusan terbuka. Pekerjaan berikutnya tidak boleh mengklaim pembeda (misalnya "paham bahasa gaul", "belajar gayamu") seolah sudah jadi fakta produk tanpa konfirmasi.

## Operating Context

- Alur inti yang sudah ada di demo: ide → pilih format → draft pertama → pengguna merapikan.
- Format draft yang sudah dicontohkan di repo: Hook 15 detik (termasuk arahan shot dalam kurung siku), Caption carousel per slide, Outline YouTube dengan timestamp.
- Platform tujuan konten: TikTok, Instagram, YouTube.

## Capabilities and Constraints

- Stack: React Router 8 (framework mode, SSR), Tailwind CSS 4, TypeScript, Vite. Font dari Google Fonts.
- Route yang ada: `/` (landing page, baru berisi hero), `/design-system`, `/cta-test`.
- Bahasa antarmuka dan copy: Bahasa Indonesia santai ("kamu", "nggak"). Atribut `lang` di `app/root.tsx` sudah `id`.
- Karena produknya fiktif, CTA seperti "Coba gratis" dan "Masuk" belum mengarah ke aplikasi apa pun.
- Belum diputuskan: harga/paket, fitur di luar tiga format di atas, dan apakah ada akun/login.

## Brand Commitments

- Nama: Scripta (wordmark huruf kecil `scripta` di design system).
- Nada: lugas, cepat, editorial. Scripta tampil sebagai alat kerja, bukan mainan.
- Identitas visual sudah dicatat di `DESIGN.md`; itu sumber otoritas visual, bukan file ini.

## Evidence on Hand

- Contoh ide dan draft (kopi susu gula aren 15rb di Jaksel) di `app/routes/design-system.tsx`.
- Persona contoh "Dinda Nur, @dindamasak · TikTok" dan inisial avatar (RA, DN, SK) adalah data placeholder, bukan pengguna nyata.
- Tidak ada testimoni, jumlah pengguna, logo pelanggan, liputan media, atau angka performa yang nyata. Jangan mengarangnya dan menyajikannya sebagai bukti asli; kalau sebuah section butuh bukti sosial, tandai jelas sebagai contoh atau tanyakan dulu.

## Product Principles

1. Ide mentah adalah titik awal yang sah. Produk menerima input seadanya dan tidak menuntut pengguna menulis rapi dulu.
2. Tunjukkan hasilnya, jangan hanya menjanjikannya. Draft nyata dalam format nyata lebih meyakinkan daripada klaim.
3. Draft, bukan naskah final. Scripta menyiapkan titik awal; suara akhir tetap milik creator.
4. Jujur soal status. Sebagai proyek portfolio, tidak ada angka, testimoni, atau klaim diferensiasi yang dikarang.
