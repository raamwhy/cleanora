import { motion } from 'framer-motion';
import { fadeUp, viewportOnce } from '../utils/animations.js';

function SectionHeader({ title, subtitle, align = 'center' }) {
  const isCenter = align === 'center';

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className={isCenter ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}
    >
      <h2 className="section-title">{title}</h2>
      {subtitle && (
        <p className={`section-subtitle ${isCenter ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

export default SectionHeader;
