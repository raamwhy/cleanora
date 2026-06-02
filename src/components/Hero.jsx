import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, MessageCircle, Sparkles } from 'lucide-react';
import cleanImage from '../../images/clean.webp';
import { stats, whatsappLink } from '../data/siteData.js';
import { fadeUp } from '../utils/animations.js';

function Hero() {
  return (
    <section
      id="beranda"
      className="relative isolate overflow-hidden bg-navy"
    >
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{ backgroundImage: `url(${cleanImage})` }}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy via-navy/82 to-navy/25" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-navy/78 via-transparent to-navy/18" />

      <div className="container-section relative flex min-h-svh flex-col justify-center pb-8 pt-28 sm:pb-10 sm:pt-32 lg:min-h-[720px] lg:pb-12">
        <div className="max-w-3xl py-10 sm:py-14 lg:py-16">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-sky-50 shadow-sm backdrop-blur-md"
          >
            <Sparkles className="h-4 w-4 text-mint" />
            Jasa Cleaning Service Profesional
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.1 }}
            className="mt-6 max-w-4xl text-4xl font-extrabold tracking-normal text-white sm:text-5xl lg:text-6xl lg:leading-[1.08]"
          >
            Rumah & Kantor Bersih Tanpa Ribet
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.18 }}
            className="mt-6 max-w-2xl text-base leading-8 text-sky-50/90 sm:text-lg"
          >
            Cleanora membantu menjaga kebersihan rumah, apartemen, kantor, dan
            ruang usahamu dengan layanan yang rapi, tepat waktu, dan mudah
            dipesan kapan saja.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.26 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <a href={whatsappLink} className="btn-primary bg-primary hover:bg-sky-500">
              <MessageCircle className="h-4 w-4" />
              Pesan via WhatsApp
            </a>
            <a
              href="#layanan"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 py-3 text-sm font-bold text-white backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:scale-[1.03] hover:bg-white/18 focus:outline-none focus:ring-4 focus:ring-white/20"
            >
              Lihat Layanan
              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.34 }}
            className="mt-8 grid gap-3 text-sm font-semibold text-sky-50 sm:grid-cols-3"
          >
            {['Tim terlatih', 'Booking cepat', 'Hasil rapi'].map((item) => (
              <span key={item} className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-mint" />
                {item}
              </span>
            ))}
          </motion.div>
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.42 }}
          className="grid gap-3 sm:grid-cols-2 lg:max-w-4xl lg:grid-cols-4"
        >
          {stats.map((item) => (
            <div
              key={item.label}
              className="rounded-lg border border-white/15 bg-white/10 px-5 py-4 shadow-sm backdrop-blur-md"
            >
              <p className="text-3xl font-extrabold tracking-normal text-white">
                {item.value}
              </p>
              <p className="mt-1 text-sm font-medium leading-6 text-sky-50/80">
                {item.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
