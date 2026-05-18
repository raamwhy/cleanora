import { motion } from 'framer-motion';
import { Check, BadgeCheck } from 'lucide-react';
import { pricingPlans, whatsappLink } from '../data/siteData.js';
import SectionHeader from './SectionHeader.jsx';
import {
  fadeUp,
  staggerContainer,
  viewportOnce,
} from '../utils/animations.js';

function Pricing() {
  return (
    <section id="paket" className="section-padding bg-white">
      <div className="container-section">
        <SectionHeader
          title="Paket Cleaning"
          subtitle="Pilih paket yang sesuai dengan kebutuhan dan ukuran ruanganmu."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-12 grid gap-6 lg:grid-cols-3 lg:items-stretch"
        >
          {pricingPlans.map((plan) => (
            <motion.article
              key={plan.name}
              variants={fadeUp}
              className={`relative flex h-full flex-col overflow-hidden rounded-3xl border bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 sm:p-8 ${
                plan.popular
                  ? 'border-mint shadow-card ring-4 ring-emerald-50'
                  : 'border-sky-100 hover:border-primary hover:shadow-card'
              }`}
            >
              {plan.popular && (
                <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-primary to-mint" />
              )}

              {plan.popular && (
                <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full bg-primaryDark px-4 py-2 text-xs font-bold text-white">
                  <BadgeCheck className="h-3.5 w-3.5" />
                  {plan.label}
                </div>
              )}

              <h3 className="text-xl font-bold tracking-normal text-navy">
                {plan.name}
              </h3>
              <p className="mt-4 text-3xl font-extrabold tracking-normal text-navy">
                {plan.price}
              </p>
              <p className="mt-4 text-sm leading-7 text-brandSlate">
                {plan.description}
              </p>

              <ul className="mt-8 flex-1 space-y-4">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex gap-3 text-sm leading-6 text-brandSlate"
                  >
                    <Check className="mt-0.5 h-5 w-5 flex-none text-mint" />
                    {feature}
                  </li>
                ))}
              </ul>

              <motion.a
                href={whatsappLink}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className={plan.popular ? 'btn-primary mt-8' : 'btn-secondary mt-8'}
              >
                {plan.buttonLabel}
              </motion.a>
            </motion.article>
          ))}
        </motion.div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mx-auto mt-8 max-w-2xl text-center text-sm leading-7 text-brandSlate"
        >
          Harga dapat menyesuaikan luas ruangan, kondisi area, dan kebutuhan
          tambahan.
        </motion.p>
      </div>
    </section>
  );
}

export default Pricing;
