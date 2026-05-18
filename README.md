# Cleanora Landing Page

Cleanora Landing Page adalah website bisnis jasa cleaning service fiktif untuk demo portfolio/template Raamwhy Dev. Website dibuat seperti brand profesional sungguhan dengan visual custom, animasi scroll reveal, CTA WhatsApp, dan struktur konten yang mudah diedit.

## Tech Stack

- Vite + React
- Tailwind CSS
- Framer Motion
- Lucide React

## Fitur Utama

- Landing page responsive untuk desktop, tablet, dan mobile
- Navbar sticky dengan efek blur saat scroll
- Mobile hamburger menu dengan animasi
- Custom cleaning illustration berbasis SVG React
- Scroll reveal animation di hampir semua section
- Services, process, pricing, testimonials, FAQ, CTA, dan footer
- FAQ accordion menggunakan AnimatePresence
- Data konten tersimpan di `src/data/siteData.js`
- Siap deploy ke Vercel

## Install

```bash
npm install
```

## Run

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Deploy ke Vercel

1. Push project ke repository GitHub.
2. Login ke Vercel.
3. Pilih **Add New Project** dan import repository.
4. Gunakan konfigurasi default Vite:
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Klik **Deploy**.
