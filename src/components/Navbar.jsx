import { AnimatePresence, motion } from 'framer-motion';
import { Home, Menu, MessageCircle, X } from 'lucide-react';
import { useState } from 'react';
import { navLinks, whatsappLink } from '../data/siteData.js';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 border-b border-sky-100 bg-white shadow-sm transition duration-300"
    >
      <nav className="container-section flex h-20 items-center justify-between">
        <a
          href="#beranda"
          className="flex items-center gap-2.5 text-2xl font-extrabold tracking-normal text-navy"
          onClick={closeMenu}
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-mint text-white shadow-card">
            <Home className="h-5 w-5" />
          </span>
          <span>
            Clean<span className="text-primaryDark">ora</span>
          </span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-brandSlate transition hover:text-primaryDark"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a href={whatsappLink} className="btn-primary hidden lg:inline-flex">
          <MessageCircle className="h-4 w-4" />
          Pesan Sekarang
        </a>

        <motion.button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-sky-100 text-navy transition hover:bg-softBlue lg:hidden"
          aria-label={isOpen ? 'Tutup menu' : 'Buka menu'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
          whileTap={{ scale: 0.94 }}
        >
          <AnimatePresence mode="wait" initial={false}>
            {isOpen ? (
              <motion.span
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.18 }}
              >
                <X className="h-5 w-5" />
              </motion.span>
            ) : (
              <motion.span
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.18 }}
              >
                <Menu className="h-5 w-5" />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="border-t border-sky-100 bg-white shadow-soft lg:hidden"
          >
            <div className="container-section flex flex-col gap-2 py-5">
              {navLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-2xl px-4 py-3 text-sm font-semibold text-brandSlate transition hover:bg-softBlue hover:text-primaryDark"
                  onClick={closeMenu}
                >
                  {item.label}
                </a>
              ))}
              <a
                href={whatsappLink}
                className="btn-primary mt-3 w-full"
                onClick={closeMenu}
              >
                <MessageCircle className="h-4 w-4" />
                Pesan Sekarang
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
