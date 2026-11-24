import { Phone, Instagram, ArrowUpRight } from 'lucide-react';
import {
  NAV_ITEMS,
  OFFICIAL_INSTAGRAM_HANDLE,
  OFFICIAL_INSTAGRAM_URL,
  OFFICIAL_PHONE,
  OFFICIAL_PHONE_HREF,
} from '../data/agencyData';

interface VisionAndContactProps {
  highlightInstagram: boolean;
}

export function VisionAndContact({ highlightInstagram }: VisionAndContactProps) {
  const scrollToSection = (href: string) => {
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* 13. OUR VISION */}
      <section id="vision" className="bg-white py-24 lg:py-32 border-b border-[#E8E8E8]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="max-w-4xl">
            <p className="text-xs font-semibold tracking-[0.18em] uppercase text-[#1685B8] mb-5">
              OUR VISION FOR THE FUTURE.
            </p>

            <h2 className="font-display text-[clamp(2.25rem,4.5vw,4.25rem)] font-extrabold tracking-tight text-[#111111] leading-[1.06] mb-8">
              THE FUTURE IS BUILT BY THOSE WHO CREATE IT.
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-[#666666] leading-relaxed max-w-2xl">
              <p>
                We aim to build a connected network of talented young minds across India where
                students can learn, collaborate, create, compete, and turn their ideas into
                meaningful digital work.
              </p>
              <p className="text-[#111111] font-medium">
                We want to encourage a generation that does not just consume technology but builds
                with it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 14. CONTACT SECTION */}
      <section id="contact" className="bg-[#F7F7F7] py-20 lg:py-28 border-b border-[#E8E8E8]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-6">
              <p className="text-xs font-semibold tracking-[0.18em] uppercase text-[#1685B8] mb-3">
                LET&apos;S CONNECT.
              </p>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-tight text-[#111111] leading-[1.1] mb-5">
                BE PART OF SOMETHING CREATIVE.
              </h2>
              <p className="text-base text-[#666666] leading-relaxed max-w-xl mb-8">
                Have skills to showcase, ideas to share, or want to become part of the Young
                Agency.co community? Connect with us through our official channels.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={OFFICIAL_INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 bg-[#111111] text-white text-xs font-semibold tracking-wider uppercase px-7 py-4 rounded-md hover:bg-[#1685B8] transition-colors duration-200 whitespace-nowrap"
                >
                  <Instagram className="w-4 h-4" aria-hidden="true" />
                  <span>FOLLOW US ON INSTAGRAM</span>
                  <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                </a>

                <a
                  href={OFFICIAL_PHONE_HREF}
                  className="inline-flex items-center justify-center gap-2.5 bg-white text-[#111111] border border-[#111111] text-xs font-semibold tracking-wider uppercase px-7 py-4 rounded-md hover:bg-[#111111] hover:text-white transition-colors duration-200 whitespace-nowrap"
                >
                  <Phone className="w-4 h-4" aria-hidden="true" />
                  <span>CALL US</span>
                </a>
              </div>
            </div>

            {/* Official Channels Display */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <a
                href={OFFICIAL_INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`group bg-white rounded-xl p-7 border transition-all duration-300 flex flex-col justify-between ${
                  highlightInstagram
                    ? 'border-[#1685B8] ring-2 ring-[#1685B8]/25'
                    : 'border-[#E8E8E8] hover:border-[#111111]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-semibold tracking-[0.16em] uppercase text-[#666666]">
                      INSTAGRAM
                    </span>
                    <Instagram
                      className="w-5 h-5 text-[#111111] group-hover:text-[#1685B8] transition-colors"
                      aria-hidden="true"
                    />
                  </div>
                  <p className="font-display text-xl font-bold tracking-tight text-[#111111] mb-2">
                    {OFFICIAL_INSTAGRAM_HANDLE}
                  </p>
                  <p className="text-sm text-[#666666]">
                    Official community updates, project calls, and creative announcements.
                  </p>
                </div>

                <div className="pt-5 mt-6 border-t border-[#E8E8E8] flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-[#1685B8]">
                  <span>Open Instagram Profile</span>
                  <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                </div>
              </a>

              <a
                href={OFFICIAL_PHONE_HREF}
                className="group bg-white rounded-xl p-7 border border-[#E8E8E8] hover:border-[#111111] transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-semibold tracking-[0.16em] uppercase text-[#666666]">
                      PHONE
                    </span>
                    <Phone
                      className="w-5 h-5 text-[#111111] group-hover:text-[#1685B8] transition-colors"
                      aria-hidden="true"
                    />
                  </div>
                  <p className="font-display text-2xl font-bold tracking-tight text-[#111111] tabular-nums mb-2">
                    {OFFICIAL_PHONE}
                  </p>
                  <p className="text-sm text-[#666666]">
                    Direct official telephone line for student inquiries and collaborations.
                  </p>
                </div>

                <div className="pt-5 mt-6 border-t border-[#E8E8E8] flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-[#111111] group-hover:text-[#1685B8] transition-colors">
                  <span>Tap to Call</span>
                  <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 15. FOOTER */}
      <footer className="bg-white py-16">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#E8E8E8]">
            {/* Brand Column */}
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center gap-3.5">
                <span className="w-12 h-12 rounded-full bg-black border border-[#C0C0C0]/60 flex items-center justify-center overflow-hidden shrink-0">
                  <picture className="w-full h-full block">
                    <source srcSet="/assets/logo-256.webp" type="image/webp" />
                    <img
                      src="/assets/logo-256.png"
                      alt="Young Agency.co Official Logo"
                      width={48}
                      height={48}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-contain"
                    />
                  </picture>
                </span>
                <div>
                  <p className="font-display text-lg font-bold tracking-tight text-[#111111]">
                    Young Agency.co
                  </p>
                  <p className="text-xs text-[#666666]">Where Young Minds Build Their Future.</p>
                </div>
              </div>
              <p className="text-sm text-[#666666] leading-relaxed max-w-sm">
                LEARN. CREATE. COLLABORATE. EARN. GROW.
              </p>
            </div>

            {/* Quick Navigation */}
            <div className="lg:col-span-4">
              <h3 className="text-xs font-semibold tracking-[0.16em] uppercase text-[#111111] mb-4">
                Quick Navigation
              </h3>
              <ul className="space-y-2.5 text-sm text-[#666666]">
                {NAV_ITEMS.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(item.href);
                      }}
                      className="hover:text-[#111111] transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Official Contact */}
            <div className="lg:col-span-3">
              <h3 className="text-xs font-semibold tracking-[0.16em] uppercase text-[#111111] mb-4">
                Official Channels
              </h3>
              <div className="space-y-3 text-sm text-[#666666]">
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#666666] block mb-0.5">
                    Phone
                  </span>
                  <a
                    href={OFFICIAL_PHONE_HREF}
                    className="font-medium text-[#111111] hover:text-[#1685B8] transition-colors tabular-nums"
                  >
                    {OFFICIAL_PHONE}
                  </a>
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#666666] block mb-0.5">
                    Instagram
                  </span>
                  <a
                    href={OFFICIAL_INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-[#111111] hover:text-[#1685B8] transition-colors inline-flex items-center gap-1"
                  >
                    <span>{OFFICIAL_INSTAGRAM_HANDLE}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs text-[#666666]">
            <p>© 2026 Young Agency.co. All Rights Reserved.</p>
            <p>Where Young Minds Build Their Future.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
