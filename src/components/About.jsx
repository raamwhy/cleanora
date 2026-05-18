import { motion } from 'framer-motion';
import { CalendarClock, CheckCircle2, UsersRound } from 'lucide-react';
import { aboutHighlights } from '../data/siteData.js';
import {
  fadeLeft,
  fadeRight,
  fadeUp,
  staggerContainer,
  viewportOnce,
} from '../utils/animations.js';

const highlightIcons = {
  users: UsersRound,
  calendar: CalendarClock,
  check: CheckCircle2,
};

function About() {
  return (
    <section id="tentang" className="section-padding bg-white">
      <div className="container-section grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <motion.div
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <h2 className="section-title">Tentang Cleanora</h2>
          <p className="section-subtitle">
            Cleanora hadir untuk membantu kamu memiliki ruang yang lebih
            bersih, sehat, dan nyaman tanpa harus repot mengatur semuanya
            sendiri.
          </p>
          <p className="mt-6 text-base leading-8 text-brandSlate sm:text-lg">
            Kami memahami bahwa ruang yang bersih dapat membuat aktivitas
            harian terasa lebih nyaman dan produktif. Karena itu, Cleanora
            menyediakan layanan cleaning service untuk rumah, apartemen, kantor,
            dan ruang usaha dengan proses pemesanan yang mudah, tim yang
            profesional, serta hasil kerja yang rapi.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid gap-5 sm:grid-cols-3 lg:grid-cols-1"
        >
          {aboutHighlights.map((item) => {
            const Icon = highlightIcons[item.icon];

            return (
              <motion.article
                key={item.title}
                variants={fadeLeft}
                className="modern-card p-5"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-none items-center justify-center rounded-2xl bg-softMint text-emerald-600">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold tracking-normal text-navy">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-brandSlate">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default About;
