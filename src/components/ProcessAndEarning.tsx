import { ShieldCheck, ArrowUpRight } from 'lucide-react';
import { PROCESS_STEPS, EARNING_AREAS, EARNING_STEPS } from '../data/agencyData';

export function ProcessAndEarning() {
  return (
    <>
      {/* 9. HOW OUR COMMUNITY WORKS */}
      <section id="process" className="bg-white py-20 lg:py-28 border-b border-[#E8E8E8]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="max-w-2xl mb-14">
            <p className="text-xs font-semibold tracking-[0.18em] uppercase text-[#1685B8] mb-3">
              HOW OUR COMMUNITY WORKS
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#111111] leading-[1.12]">
              HOW WE BRING IDEAS TO LIFE.
            </h2>
          </div>

          {/* Horizontal timeline on desktop, vertical timeline on mobile */}
          <div className="relative">
            {/* Desktop connecting hairline */}
            <div
              className="hidden lg:block absolute top-5 left-0 right-0 h-[1px] bg-[#C0C0C0]"
              aria-hidden="true"
            />

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-6 relative">
              {PROCESS_STEPS.map((item, index) => (
                <div
                  key={item.step}
                  className="relative pl-8 lg:pl-0 lg:pt-12 border-l lg:border-l-0 border-[#E8E8E8]"
                >
                  {/* Step node indicator */}
                  <div className="absolute -left-[9px] top-0 lg:left-0 lg:top-[11px] w-4 h-4 rounded-full bg-white border-2 border-[#111111] flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1685B8]" />
                  </div>

                  <p className="font-mono text-xs font-medium text-[#1685B8] tracking-wider mb-2 tabular-nums">
                    {item.step}
                  </p>
                  <h3 className="font-display text-lg font-bold tracking-tight text-[#111111] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#666666] leading-relaxed">{item.description}</p>

                  {index < PROCESS_STEPS.length - 1 && (
                    <div className="lg:hidden h-2" aria-hidden="true" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 10. HOW STUDENTS CAN EARN */}
      <section
        id="opportunities"
        className="bg-[#F7F7F7] py-20 lg:py-28 border-b border-[#E8E8E8]"
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-14">
            <div className="lg:col-span-6">
              <p className="text-xs font-semibold tracking-[0.18em] uppercase text-[#1685B8] mb-3">
                TURN YOUR SKILLS INTO OPPORTUNITIES.
              </p>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-tight text-[#111111] leading-[1.1] mb-6">
                CREATE. CONTRIBUTE. EARN.
              </h2>
              <p className="text-base text-[#666666] leading-relaxed mb-4">
                Young Agency.co aims to connect talented students with suitable paid creative and
                technology projects. When genuine client projects become available, suitable
                contributors may be selected based on their skills, experience, availability, and
                project requirements.
              </p>

              <div className="mt-8 bg-white border border-[#E8E8E8] rounded-xl p-6 sm:p-7">
                <p className="text-xs font-semibold tracking-[0.16em] uppercase text-[#666666] mb-4">
                  Potential Project Contribution Areas
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {EARNING_AREAS.map((area) => (
                    <div
                      key={area}
                      className="flex items-center gap-2 text-sm font-medium text-[#111111]"
                    >
                      <ArrowUpRight
                        className="w-4 h-4 text-[#1685B8] shrink-0"
                        aria-hidden="true"
                      />
                      <span>{area}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 6-Step Earning Process */}
            <div className="lg:col-span-6 bg-white border border-[#E8E8E8] rounded-xl p-6 sm:p-9">
              <h3 className="font-display text-xl font-bold tracking-tight text-[#111111] mb-6">
                How the Earning Process Works
              </h3>
              <ol className="divide-y divide-[#E8E8E8]">
                {EARNING_STEPS.map((step) => (
                  <li key={step.number} className="py-4 first:pt-0 last:pb-0 flex items-start gap-4">
                    <span className="font-mono text-xs font-medium text-[#1685B8] pt-1 shrink-0 tabular-nums">
                      {step.number}
                    </span>
                    <span className="text-sm sm:text-base text-[#111111] leading-relaxed">
                      {step.text}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Visual Statement Banner + Transparent Fair-Work Policy */}
          <div className="bg-white border border-[#E8E8E8] rounded-xl p-8 sm:p-10 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-5">
                <p className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-[#111111] leading-tight">
                  YOUR SKILLS CAN CREATE YOUR OPPORTUNITIES.
                </p>
              </div>

              <div className="lg:col-span-7 space-y-3 text-sm text-[#666666] leading-relaxed">
                <div className="flex items-center gap-2 text-[#111111] font-semibold">
                  <ShieldCheck className="w-4 h-4 text-[#1685B8] shrink-0" aria-hidden="true" />
                  <span>Transparency &amp; Ethical Collaboration Policy</span>
                </div>
                <p>
                  Paid work strictly depends on available client projects and project fit—we never
                  promise guaranteed income, fixed salaries, or guaranteed project assignments.
                  Responsibilities, deadlines, and payment terms are agreed upon transparently
                  before any paid work begins.
                </p>
                <p>
                  Voluntary community learning activities, workshops, and peer collaborations are
                  distinct from paid client assignments. Any paid project involving minors requires
                  appropriate parent or guardian involvement and adult supervision.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
