import { stats } from '../data/siteData.js';

function CleaningIllustration() {
  return (
    <div className="relative mx-auto w-full max-w-xl">
      <div className="absolute -inset-8 rounded-full bg-gradient-to-br from-sky-200/50 via-mint/20 to-transparent blur-3xl" />

      <div className="relative rounded-3xl border border-sky-100 bg-white/90 p-5 shadow-soft backdrop-blur sm:p-6">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-softBlue via-white to-softMint p-6">
          <div className="absolute right-8 top-8 h-20 w-20 rounded-full bg-primary/20 blur-xl" />
          <div className="absolute bottom-10 left-10 h-24 w-24 rounded-full bg-mint/20 blur-xl" />

          <svg
            viewBox="0 0 520 390"
            className="relative h-auto w-full"
            role="img"
            aria-label="Ilustrasi abstrak layanan cleaning Cleanora"
          >
            <defs>
              <linearGradient id="cleanoraBlue" x1="0" x2="1" y1="0" y2="1">
                <stop offset="0%" stopColor="#38BDF8" />
                <stop offset="100%" stopColor="#34D399" />
              </linearGradient>
            </defs>

            <circle cx="92" cy="84" r="12" fill="#BAE6FD" />
            <circle cx="420" cy="74" r="16" fill="#BBF7D0" />
            <circle cx="455" cy="145" r="8" fill="#38BDF8" opacity="0.45" />
            <circle cx="72" cy="250" r="9" fill="#34D399" opacity="0.5" />

            <path
              d="M110 202L260 88l150 114v122a18 18 0 0 1-18 18H128a18 18 0 0 1-18-18V202Z"
              fill="#FFFFFF"
              stroke="#BAE6FD"
              strokeWidth="8"
            />
            <path
              d="M83 211L260 75l177 136"
              fill="none"
              stroke="url(#cleanoraBlue)"
              strokeWidth="18"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <rect x="152" y="226" width="72" height="92" rx="16" fill="#EFF6FF" />
            <rect x="282" y="220" width="86" height="58" rx="14" fill="#ECFDF5" />
            <path d="M305 249h40" stroke="#34D399" strokeWidth="8" strokeLinecap="round" />
            <path d="M172 268h32" stroke="#0284C7" strokeWidth="8" strokeLinecap="round" />

            <g transform="translate(318 118) rotate(-12)">
              <rect x="0" y="54" width="56" height="118" rx="20" fill="url(#cleanoraBlue)" />
              <rect x="11" y="76" width="34" height="46" rx="12" fill="#FFFFFF" opacity="0.78" />
              <path d="M16 54V30h42" stroke="#0F172A" strokeWidth="12" strokeLinecap="round" />
              <path d="M56 30h45" stroke="#0F172A" strokeWidth="12" strokeLinecap="round" />
              <path d="M99 30c20 0 26 10 26 23" stroke="#0F172A" strokeWidth="10" strokeLinecap="round" />
              <circle cx="118" cy="80" r="7" fill="#34D399" />
              <circle cx="148" cy="104" r="5" fill="#38BDF8" />
            </g>

            <g transform="translate(85 104)">
              <path d="M24 0v48" stroke="#34D399" strokeWidth="9" strokeLinecap="round" />
              <path d="M0 24h48" stroke="#34D399" strokeWidth="9" strokeLinecap="round" />
              <path d="M8 8l32 32M40 8L8 40" stroke="#38BDF8" strokeWidth="7" strokeLinecap="round" />
            </g>

            <g transform="translate(96 302)">
              <path d="M0 34h330" stroke="#0F172A" strokeWidth="14" strokeLinecap="round" opacity="0.12" />
              <path d="M38 6h166" stroke="#38BDF8" strokeWidth="12" strokeLinecap="round" opacity="0.7" />
              <path d="M222 6h72" stroke="#34D399" strokeWidth="12" strokeLinecap="round" opacity="0.75" />
            </g>
          </svg>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-sky-100 bg-white p-3 text-center"
            >
              <p className="text-lg font-extrabold tracking-normal text-navy">
                {item.value}
              </p>
              <p className="mt-1 text-[11px] font-semibold leading-4 text-brandSlate">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CleaningIllustration;
