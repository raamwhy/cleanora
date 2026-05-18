import { Mail, MapPin, Phone } from 'lucide-react';
import { footerLinks, whatsappLink } from '../data/siteData.js';

function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="container-section py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_1fr_1fr]">
          <div>
            <a
              href="#beranda"
              className="text-2xl font-extrabold tracking-normal"
            >
              Clean<span className="text-primary">ora</span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-7 text-sky-100">
              Cleanora membantu menjaga kebersihan rumah, apartemen, kantor,
              dan ruang usaha dengan layanan yang rapi, profesional, dan mudah
              dipesan.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-sky-100">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.quickLinks.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-slate-300 transition hover:text-primary"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-sky-100">
              Services
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.services.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm text-slate-300 transition hover:text-primary"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-sky-100">
              Contact
            </h3>
            <ul className="mt-4 space-y-4 text-sm text-slate-300">
              <li className="flex gap-3">
                <Phone className="h-5 w-5 flex-none text-primary" />
                <a href={whatsappLink} className="transition hover:text-primary">
                  +62 812-3456-7890
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="h-5 w-5 flex-none text-primary" />
                hello@cleanora.id
              </li>
              <li className="flex gap-3">
                <MapPin className="h-5 w-5 flex-none text-primary" />
                Indonesia
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-slate-400">
          © 2026 Cleanora. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
