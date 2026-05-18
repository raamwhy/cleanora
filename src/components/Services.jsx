import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  Building2,
  Home,
  HousePlus,
  Paintbrush,
  SearchCheck,
  Waves,
} from 'lucide-react';
import { services } from '../data/siteData.js';
import SectionHeader from './SectionHeader.jsx';
import {
  fadeUp,
  staggerContainer,
  viewportOnce,
} from '../utils/animations.js';

const serviceIcons = {
  home: Home,
  building: Building2,
  apartment: HousePlus,
  detail: SearchCheck,
  move: Waves,
  brush: Paintbrush,
};

function Services() {
  return (
    <section id="layanan" className="section-padding bg-softBlue">
      <div className="container-section">
        <SectionHeader
          title="Layanan Kebersihan Kami"
          subtitle="Pilih layanan sesuai kebutuhan ruanganmu, mulai dari rumah pribadi hingga area kerja profesional."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => {
            const Icon = serviceIcons[service.icon];

            return (
              <motion.article
                key={service.title}
                variants={fadeUp}
                className="modern-card group p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-primaryDark shadow-sm transition duration-300 group-hover:bg-primaryDark group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-bold tracking-normal text-navy">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-brandSlate">
                  {service.description}
                </p>
                <div className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-primaryDark">
                  Detail layanan
                  <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default Services;
