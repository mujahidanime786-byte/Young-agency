import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { NAV_ITEMS } from '../data/agencyData';

interface NavbarProps {
  onJoinCommunity: () => void;
}

export function Navbar({ onJoinCommunity }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleLinkClick = (href: string) => {
    setMobileOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleJoinClick = () => {
    setMobileOpen(false);
    onJoinCommunity();
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#E8E8E8]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 h-16 flex items-center justify-between gap-6">
        {/* Zone 1: Brand Lockup (Logo + Wordmark only) */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick('#home');
          }}
          className="flex items-center gap-3 shrink-0 whitespace-nowrap group"
          aria-label="Young Agency.co Home"
        >
          <span className="w-10 h-10 rounded-full bg-black border border-[#C0C0C0]/60 flex items-center justify-center overflow-hidden shrink-0">
            <picture className="w-full h-full block">
              <source srcSet="/assets/logo-256.webp" type="image/webp" />
              <img
                src="/assets/logo-256.png"
                alt="Young Agency.co Official Logo"
                width={40}
                height={40}
                loading="eager"
                decoding="sync"
                fetchPriority="high"
                className="w-full h-full object-contain"
              />
            </picture>
          </span>
          <span className="font-display text-base sm:text-lg font-bold tracking-tight text-[#111111]">
            Young Agency.co
          </span>
        </a>

        {/* Zone 2: Navigation Links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden xl:flex items-center gap-7 text-sm font-medium text-[#666666]"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(item.href);
              }}
              className="whitespace-nowrap shrink-0 py-1 hover:text-[#111111] transition-colors duration-200 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[1.5px] after:bg-[#1685B8] hover:after:w-full after:transition-all after:duration-200"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary CTA + Mobile Toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={handleJoinClick}
            className="hidden sm:inline-flex items-center gap-2 bg-[#111111] text-white text-xs font-semibold tracking-wider uppercase px-5 py-2.5 rounded-md hover:bg-[#1685B8] transition-colors duration-200 whitespace-nowrap shrink-0"
          >
            <span>JOIN OUR COMMUNITY</span>
            <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="xl:hidden inline-flex items-center justify-center w-11 h-11 rounded-md border border-[#E8E8E8] text-[#111111] hover:bg-[#F7F7F7] transition-colors"
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {mobileOpen ? (
              <X className="w-5 h-5" aria-hidden="true" />
            ) : (
              <Menu className="w-5 h-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="xl:hidden bg-white border-t border-[#E8E8E8] px-4 sm:px-8 py-5">
          <nav aria-label="Mobile Navigation" className="flex flex-col divide-y divide-[#E8E8E8]">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(item.href);
                }}
                className="py-3.5 text-base font-medium text-[#111111] hover:text-[#1685B8] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="pt-4 mt-2 border-t border-[#E8E8E8]">
            <button
              type="button"
              onClick={handleJoinClick}
              className="w-full inline-flex items-center justify-center gap-2 bg-[#111111] text-white text-xs font-semibold tracking-wider uppercase px-5 py-3.5 rounded-md hover:bg-[#1685B8] transition-colors"
            >
              <span>JOIN OUR COMMUNITY</span>
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
