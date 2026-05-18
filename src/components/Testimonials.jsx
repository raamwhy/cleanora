import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import { testimonials } from '../data/siteData.js';
import SectionHeader from './SectionHeader.jsx';
import {
  fadeUp,
  staggerContainer,
  viewportOnce,
} from '../utils/animations.js';

function Testimonials() {
  return (
    <section className="section-padding bg-softBlue">
      <div className="container-section">
        <SectionHeader
          title="Apa Kata Pelanggan?"
          subtitle="Kepuasan pelanggan menjadi alasan kami terus menjaga kualitas layanan."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-12 grid gap-6 lg:grid-cols-3"
        >
          {testimonials.map((item) => (
            <motion.article
              key={item.name}
              variants={fadeUp}
              className="modern-card relative p-6"
            >
              <Quote className="absolute right-6 top-6 h-8 w-8 text-sky-100" />
              <div className="flex gap-1 text-amber-400">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    className="h-5 w-5 fill-current"
                    aria-hidden="true"
                  />
                ))}
              </div>
              <p className="mt-6 text-base leading-8 text-brandSlate">
                "{item.quote}"
              </p>
              <div className="mt-8 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-mint text-sm font-bold text-white shadow-card">
                  {item.name
                    .split(' ')
                    .map((name) => name[0])
                    .join('')}
                </div>
                <div>
                  <h3 className="font-bold tracking-normal text-navy">
                    {item.name}
                  </h3>
                  <p className="text-sm text-brandSlate">{item.role}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Testimonials;
