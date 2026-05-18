import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { whatsappLink } from '../data/siteData.js';
import {
  floatingAnimation,
  scaleIn,
  viewportOnce,
} from '../utils/animations.js';

function CTA() {
  return (
    <section id="kontak" className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="container-section">
        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primaryDark via-primary to-mint px-6 py-12 text-center shadow-soft sm:px-10 sm:py-16 lg:px-16"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(255,255,255,0.34),transparent_28%),radial-gradient(circle_at_82%_70%,rgba(255,255,255,0.25),transparent_30%)]" />
          <motion.div
            animate={floatingAnimation}
            className="absolute left-8 top-8 hidden h-16 w-16 rounded-full bg-white/20 sm:block"
          />

          <div className="relative mx-auto max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/20">
              <MessageCircle className="h-4 w-4" />
              Respon cepat melalui WhatsApp
            </div>
            <h2 className="mt-6 text-3xl font-extrabold tracking-normal text-white sm:text-4xl lg:text-5xl">
              Siap Menikmati Ruangan yang Lebih Bersih?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/90 sm:text-lg">
              Pesan layanan Cleanora sekarang dan buat rumah, kantor, atau ruang
              usahamu terasa lebih nyaman.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href={whatsappLink}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-primaryDark shadow-card transition duration-300 hover:-translate-y-0.5 hover:scale-[1.03] hover:bg-sky-50 focus:outline-none focus:ring-4 focus:ring-white/25"
              >
                Pesan Sekarang
                <MessageCircle className="h-4 w-4" />
              </a>
              <a
                href="#paket"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/35 bg-white/10 px-6 py-3 text-sm font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:scale-[1.03] hover:bg-white/15 focus:outline-none focus:ring-4 focus:ring-white/20"
              >
                Lihat Paket
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default CTA;
