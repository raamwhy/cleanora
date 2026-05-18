import { motion } from 'framer-motion';
import { CalendarCheck, CheckCircle2, ClipboardList, Truck } from 'lucide-react';
import { processSteps } from '../data/siteData.js';
import SectionHeader from './SectionHeader.jsx';
import {
  fadeUp,
  staggerContainer,
  viewportOnce,
} from '../utils/animations.js';

const processIcons = {
  clipboard: ClipboardList,
  calendar: CalendarCheck,
  truck: Truck,
  done: CheckCircle2,
};

function Process() {
  return (
    <section id="proses" className="section-padding bg-white">
      <div className="container-section">
        <SectionHeader
          title="Cara Pesan Layanan"
          subtitle="Hanya beberapa langkah sederhana sampai ruanganmu kembali bersih dan nyaman."
        />

        <div className="relative mt-12">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="absolute left-6 top-8 hidden h-0.5 w-[calc(100%-3rem)] origin-left bg-gradient-to-r from-primary via-mint to-primary lg:block"
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid gap-6 lg:grid-cols-4"
          >
            {processSteps.map((item) => {
              const Icon = processIcons[item.icon];

              return (
                <motion.article
                  key={item.step}
                  variants={fadeUp}
                  className="modern-card relative p-6"
                >
                  <div className="flex items-center gap-4">
                    <motion.div
                      whileHover={{ scale: 1.08 }}
                      className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primaryDark to-mint text-white shadow-card"
                    >
                      <Icon className="h-7 w-7" />
                    </motion.div>
                    <span className="text-sm font-extrabold text-primaryDark">
                      {item.step}
                    </span>
                  </div>
                  <h3 className="mt-6 text-xl font-bold tracking-normal text-navy">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-brandSlate">
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

export default Process;
