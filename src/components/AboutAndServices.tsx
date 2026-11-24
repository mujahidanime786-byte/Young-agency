import {
  Film,
  Globe,
  Smartphone,
  Palette,
  type LucideIcon,
} from 'lucide-react';
import { CORE_VALUES, SERVICE_AREAS, type ServiceArea } from '../data/agencyData';
import { ResilientImage } from './ResilientImage';

const SERVICE_ICONS: Record<ServiceArea['iconName'], LucideIcon> = {
  Film,
  Globe,
  Smartphone,
  Palette,
};

export function AboutAndServices() {
  return (
    <>
      {/* 5. ABOUT US — WHO WE ARE */}
      <section id="about" className="bg-white py-20 lg:py-28 border-b border-[#E8E8E8]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-16">
            <div className="lg:col-span-5">
              <p className="text-xs font-semibold tracking-[0.18em] uppercase text-[#1685B8] mb-3">
                WHO WE ARE
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#111111] leading-[1.12]">
                A NEW GENERATION OF CREATORS AND INNOVATORS.
              </h2>
            </div>

            <div className="lg:col-span-7 space-y-5 text-base text-[#666666] leading-relaxed">
              <p className="text-[#111111] text-lg font-medium leading-relaxed">
                Young Agency.co is an India-wide student-led creative technology community bringing
                together ambitious and talented students who are passionate about technology,
                creativity, innovation, and entrepreneurship.
              </p>
              <p>
                We connect people with different skills so they can learn from each other,
                collaborate on real projects, participate in competitions, explore startup ideas,
                and grow together.
              </p>
              <p>
                We believe talent should have opportunities, regardless of where a student comes
                from.
              </p>
            </div>
          </div>

          {/* Three Core Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 border-t border-[#E8E8E8]">
            {CORE_VALUES.map((value, idx) => (
              <div
                key={value.title}
                className={`py-8 md:py-10 ${
                  idx > 0 ? 'border-t md:border-t-0 md:border-l border-[#E8E8E8] md:pl-8' : ''
                } ${idx < CORE_VALUES.length - 1 ? 'md:pr-8' : ''}`}
              >
                <span className="font-mono text-xs text-[#666666] tracking-wider block mb-3 tabular-nums">
                  {value.index}
                </span>
                <h3 className="font-display text-xl font-bold tracking-tight text-[#111111] mb-2">
                  {value.title}
                </h3>
                <p className="text-sm sm:text-base text-[#666666] leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. WHAT WE DO */}
      <section id="what-we-do" className="bg-[#F7F7F7] py-20 lg:py-28 border-b border-[#E8E8E8]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-14">
            <div className="lg:col-span-7">
              <p className="text-xs font-semibold tracking-[0.18em] uppercase text-[#1685B8] mb-3">
                WHAT WE DO
              </p>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-tight text-[#111111] leading-[1.1]">
                FROM CREATIVE IDEAS TO DIGITAL SOLUTIONS.
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-sm sm:text-base text-[#666666] leading-relaxed">
                Our team brings together students with different skills—combining creative
                storytelling, visual craft, and software engineering to work on suitable projects.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SERVICE_AREAS.map((service) => {
              const Icon = SERVICE_ICONS[service.iconName];
              const hasImage = Boolean(service.image);

              if (!hasImage) {
                return (
                  <article
                    key={service.id}
                    className="group bg-white border border-[#E8E8E8] rounded-xl p-6 sm:p-8 md:col-span-3 flex flex-col md:flex-row md:items-center md:justify-between gap-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#C0C0C0]"
                  >
                    <div className="flex items-start sm:items-center gap-5">
                      <div className="w-12 h-12 rounded-lg bg-[#F7F7F7] border border-[#E8E8E8] flex items-center justify-center text-[#111111] shrink-0 group-hover:border-[#1685B8] group-hover:text-[#1685B8] transition-colors">
                        <Icon className="w-5 h-5" aria-hidden="true" />
                      </div>
                      <div>
                        <span className="font-mono text-xs font-medium text-[#666666] tabular-nums block mb-1">
                          {service.index}
                        </span>
                        <h3 className="font-display text-lg sm:text-xl font-bold tracking-tight text-[#111111]">
                          {service.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-sm sm:text-base text-[#666666] leading-relaxed md:max-w-xl">
                      {service.description}
                    </p>
                  </article>
                );
              }

              return (
                <article
                  key={service.id}
                  className="group bg-white border border-[#E8E8E8] rounded-xl overflow-hidden flex flex-col transition-all duration-200 hover:-translate-y-0.5 hover:border-[#C0C0C0]"
                >
                  {service.image && (
                    <div className="aspect-[16/10] w-full overflow-hidden bg-[#F7F7F7] border-b border-[#E8E8E8]">
                      <ResilientImage
                        src={service.image}
                        alt={service.imageAlt || service.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        fallbackTitle={service.title}
                      />
                    </div>
                  )}

                  <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-4 mb-5">
                        <span className="font-mono text-xs font-medium text-[#666666] tabular-nums">
                          {service.index}
                        </span>
                        <div className="w-10 h-10 rounded-lg bg-[#F7F7F7] border border-[#E8E8E8] flex items-center justify-center text-[#111111] group-hover:border-[#1685B8] group-hover:text-[#1685B8] transition-colors">
                          <Icon className="w-5 h-5" aria-hidden="true" />
                        </div>
                      </div>

                      <h3 className="font-display text-lg sm:text-xl font-bold tracking-tight text-[#111111] mb-2.5">
                        {service.title}
                      </h3>
                      <p className="text-sm text-[#666666] leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
