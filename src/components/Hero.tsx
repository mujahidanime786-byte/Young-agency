import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { HERO_WORKSPACE_IMAGE } from '../data/agencyData';
import { ResilientImage } from './ResilientImage';

interface HeroProps {
  onJoinCommunity: () => void;
}

export function Hero({ onJoinCommunity }: HeroProps) {
  const scrollToServices = () => {
    const el = document.querySelector('#what-we-do');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="bg-white border-b border-[#E8E8E8] min-h-[calc(100vh-4rem)] flex flex-col justify-between"
    >
      <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-8 lg:px-12 pt-10 pb-12 lg:pt-16 lg:pb-16 flex-1 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch w-full">
          {/* Left Column: Editorial Typographic Statement */}
          <div className="lg:col-span-6 flex flex-col justify-center animate-hero-enter">
            <p className="text-xs font-semibold tracking-[0.18em] uppercase text-[#1685B8] mb-5">
              WELCOME TO YOUNG AGENCY.CO
            </p>

            <h1 className="font-display text-[clamp(2.35rem,4.3vw,4rem)] font-extrabold leading-[1.04] tracking-tight text-[#111111] mb-6">
              YOUNG MINDS.
              <br />
              BIG IDEAS.
              <br />
              REAL POSSIBILITIES.
            </h1>

            <p className="text-base sm:text-lg text-[#666666] leading-relaxed max-w-xl mb-9">
              We connect talented students across India to learn, create, collaborate, build
              digital projects, participate in competitions, and turn their skills into
              opportunities.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={scrollToServices}
                className="inline-flex items-center justify-center gap-2.5 bg-[#111111] text-white text-xs font-semibold tracking-wider uppercase px-7 py-4 rounded-md hover:bg-[#1685B8] transition-colors duration-200 whitespace-nowrap"
              >
                <span>EXPLORE WHAT WE DO</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={onJoinCommunity}
                className="inline-flex items-center justify-center gap-2 bg-white text-[#111111] border border-[#111111] text-xs font-semibold tracking-wider uppercase px-7 py-4 rounded-md hover:bg-[#F7F7F7] transition-colors duration-200 whitespace-nowrap"
              >
                <span>JOIN OUR COMMUNITY</span>
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
          </div>

          {/* Right Column: Dominant Visual Workspace Carrier */}
          <div className="lg:col-span-6 flex flex-col animate-hero-enter-delay">
            <div className="relative flex-1 min-h-[300px] sm:min-h-[380px] lg:min-h-[460px] rounded-xl overflow-hidden border border-[#E8E8E8] bg-[#F7F7F7]">
              <ResilientImage
                src={HERO_WORKSPACE_IMAGE}
                alt="Young student creators and developers collaborating in a bright modern creative technology workspace"
                className="w-full h-full lg:h-full object-cover"
                fallbackTitle="Young Agency.co Studio Workspace"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Full-Width Brand Statement & Identity Strip */}
      <div className="bg-[#F7F7F7] border-t border-[#E8E8E8]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 py-5 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <p className="font-display text-xs sm:text-sm font-bold tracking-[0.16em] text-[#111111] uppercase">
            LEARN. CREATE. COLLABORATE. EARN. GROW.
          </p>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs sm:text-sm text-[#666666]">
            <span>Where Young Minds Build Their Future.</span>
            <span aria-hidden="true" className="text-[#C0C0C0]">
              ·
            </span>
            <span>India-Wide Student-Led Creative Technology Community</span>
          </div>
        </div>
      </div>
    </section>
  );
}
