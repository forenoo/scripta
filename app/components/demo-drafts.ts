import type { Draft } from "./ui/demo-box";

// Illustrative sample output, not real user content.
export const demoIdea = "review kopi susu gula aren 15rb di Jaksel";

export const demoDrafts: Draft[] = [
  {
    id: "hook",
    tab: "Hook",
    label: "Draft 01 · Hook 15 detik",
    lines: [
      "Kopi 15 ribu di Jaksel, rasanya kayak yang 40 ribuan?",
      "Aku cobain duluan biar kamu nggak zonk.",
      "[cut ke first sip, reaksi jujur 3 detik]",
    ],
  },
  {
    id: "caption",
    tab: "Carousel",
    label: "Draft 01 · Caption carousel",
    lines: [
      "Slide 1 — Kopi susu gula aren 15rb. Worth it nggak?",
      "Slide 2 — Manisnya pas, espresso-nya masih kerasa.",
      "Slide 3 — Minusnya: antre 20 menit pas jam makan siang.",
      "Slide 4 — Skor aku 8/10. Kamu udah pernah coba?",
    ],
  },
  {
    id: "outline",
    tab: "Outline",
    label: "Draft 01 · Outline YouTube",
    lines: [
      "00:00  Intro: kenapa aku penasaran sama kopi ini",
      "00:45  Lokasi, harga, dan suasana tempat",
      "02:10  First sip + bandingin sama kopi langganan",
      "05:30  Verdict dan rekomendasi buat kamu",
    ],
  },
];

export type Angle = { id: string; title: string; lines: string[] };

// Illustrative angles for the same idea, each with its own hook draft. Not real user content.
export const demoAngles: Angle[] = [
  {
    id: "blind-test",
    title: "Blind test: kopi 15rb vs 40rb",
    lines: [
      "Dua gelas kopi susu. Satu 15 ribu, satu 40 ribu.",
      "[close-up dua gelas tanpa label]",
      "Kalau aku salah tebak, kopi murah ini menang.",
      "Tebakanmu yang mana? Tulis di komen.",
    ],
  },
  {
    id: "antre",
    title: "Antre 20 menit, sebanding nggak?",
    lines: [
      "20 menit antre cuma buat kopi 15 ribu.",
      "[timelapse antrean dari luar kedai]",
      "Aku hitung: sebanding nggak sama rasanya?",
      "Jawabannya di detik terakhir.",
    ],
  },
  {
    id: "racik",
    title: "Racik versi rumahan, lebih hemat?",
    lines: [
      "Kopi susu gula aren 15 ribu. Bisa lebih murah di rumah?",
      "[flatlay: espresso, susu, gula aren]",
      "Aku tiru resepnya pakai alat seadanya.",
      "Hasilnya aku adu sama yang asli.",
    ],
  },
];
