import { motion } from 'framer-motion';
import {
  BadgeCheck,
  Clock3,
  MessageCircle,
  SprayCan,
  ShieldCheck,
} from 'lucide-react';
import { advantages } from '../data/siteData.js';
import {
  fadeLeft,
  fadeRight,
  fadeUp,
  staggerContainer,
  viewportOnce,
} from '../utils/animations.js';

const advantageIcons = {
  badge: BadgeCheck,
  message: MessageCircle,
  clock: Clock3,
  spray: SprayCan,
};

const cleanoraStats = [
  { value: '500+', label: 'Ruangan Dibersihkan' },
  { value: '300+', label: 'Pelanggan Terbantu' },
  { value: '4.9', label: 'Rating Pelanggan' },
  { value: '98%', label: 'Tingkat Kepuasan' },
];

function WhyChooseUs() {
  return (
    <section id="keunggulan" className="section-padding bg-softMint/50">
      <div className="container-section grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <motion.div
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="relative"
        >
          <div className="absolute -inset-8 rounded-full bg-gradient-to-br from-mint/20 to-sky-200/30 blur-3xl" />
          <div className="relative rounded-3xl border border-sky-100 bg-white p-6 shadow-soft sm:p-8">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-mint text-white">
                <ShieldCheck className="h-7 w-7" />
              </div>
              <div>
                <p className="text-sm font-semibold text-brandSlate">
                  Cleanora Care Score
                </p>
                <h3 className="text-2xl font-extrabold tracking-normal text-navy">
                  Layanan rapi, cepat, dan mudah dipesan.
                </h3>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {cleanoraStats.map((item) => (
                <motion.div
                  key={item.label}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportOnce}
                  className="rounded-2xl bg-softBlue p-5"
                >
                  <p className="text-3xl font-extrabold tracking-normal text-navy">
                    {item.value}
                  </p>
                  <p className="mt-2 text-sm font-semibold text-brandSlate">
                    {item.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <div>
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <h2 className="section-title">Kenapa Memilih Cleanora?</h2>
            <p className="section-subtitle">
              Kami fokus pada hasil yang rapi, proses yang mudah, dan
              pengalaman layanan yang nyaman.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mt-8 grid gap-4 sm:grid-cols-2"
          >
            {advantages.map((item) => {
              const Icon = advantageIcons[item.icon];

              return (
                <motion.article
                  key={item.title}
                  variants={fadeLeft}
                  className="rounded-3xl border border-sky-100 bg-white p-5 shadow-sm"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-softMint text-emerald-600">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold tracking-normal text-navy">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-brandSlate">
                    {item.description}
                  </p>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
