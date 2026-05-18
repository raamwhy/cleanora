import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, MessageCircle } from 'lucide-react';
import CleaningIllustration from './CleaningIllustration.jsx';
import { whatsappLink } from '../data/siteData.js';
import {
  fadeUp,
  scaleIn,
  viewportOnce,
} from '../utils/animations.js';

function Hero() {
  return (
    <section
      id="beranda"
      className="relative overflow-hidden bg-gradient-to-b from-softBlue via-white to-softMint/40 pt-16 sm:pt-20 lg:pt-24"
    >
      <div className="absolute inset-x-0 top-0 h-80 bg-[radial-gradient(circle_at_top_right,rgba(52,211,153,0.24),transparent_32%),radial-gradient(circle_at_18%_18%,rgba(56,189,248,0.26),transparent_30%),linear-gradient(90deg,rgba(56,189,248,0.1)_1px,transparent_1px),linear-gradient(180deg,rgba(52,211,153,0.1)_1px,transparent_1px)] bg-[size:auto,auto,48px_48px,48px_48px]" />
      <motion.div
        animate={{
          y: [0, -12, 0],
          transition: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
        }}
        className="absolute left-[7%] top-32 hidden h-12 w-12 rounded-full bg-mint/20 lg:block"
      />

      <div className="container-section relative grid items-center gap-12 pb-16 sm:pb-20 lg:grid-cols-[0.95fr_1.05fr] lg:pb-24">
        <div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="section-badge"
          >
            Jasa Cleaning Service Profesional
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.1 }}
            className="mt-6 max-w-4xl text-4xl font-extrabold tracking-normal text-navy sm:text-5xl lg:text-6xl lg:leading-[1.08]"
          >
            Rumah & Kantor Bersih Tanpa Ribet
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.18 }}
            className="mt-6 max-w-2xl text-base leading-8 text-brandSlate sm:text-lg"
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
            <a href={whatsappLink} className="btn-primary">
              <MessageCircle className="h-4 w-4" />
              Pesan via WhatsApp
            </a>
            <a href="#layanan" className="btn-secondary">
              Lihat Layanan
              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.34 }}
            className="mt-8 grid gap-3 text-sm font-semibold text-brandSlate sm:grid-cols-3"
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
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="lg:pl-6"
        >
          <CleaningIllustration />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
