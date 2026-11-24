import { Check } from 'lucide-react';
import { MISSION_PILLARS, MISSION_CREATORS_IMAGE } from '../data/agencyData';
import { ResilientImage } from './ResilientImage';

export function DepartmentsAndMission() {
  return (
    <section id="mission" className="bg-white py-20 lg:py-28 border-b border-[#E8E8E8]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <p className="text-xs font-semibold tracking-[0.18em] uppercase text-[#1685B8] mb-3">
                WHY WE EXIST.
              </p>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-tight text-[#111111] leading-[1.1] mb-6">
                TALENT IS EVERYWHERE. OPPORTUNITY SHOULD BE TOO.
              </h2>

              <div className="space-y-4 text-base text-[#666666] leading-relaxed mb-8">
                <p>
                  Many talented students have creative ideas and technical skills but lack a
                  platform to showcase their abilities, meet collaborators, and gain practical
                  experience.
                </p>
                <p className="text-[#111111] font-medium">
                  Young Agency.co aims to create that platform.
                </p>
              </div>
            </div>

            <div className="bg-[#F7F7F7] border border-[#E8E8E8] rounded-xl p-6 sm:p-8">
              <h3 className="font-display text-sm font-bold tracking-wider uppercase text-[#111111] mb-4">
                Our Mission Is To:
              </h3>
              <ul className="divide-y divide-[#E8E8E8]">
                {MISSION_PILLARS.map((pillar) => (
                  <li
                    key={pillar}
                    className="py-3 first:pt-0 last:pb-0 flex items-start gap-3 text-sm sm:text-base text-[#111111]"
                  >
                    <Check
                      className="w-4 h-4 text-[#1685B8] shrink-0 mt-1"
                      aria-hidden="true"
                    />
                    <span>{pillar}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col">
            <div className="relative flex-1 min-h-[340px] lg:min-h-full rounded-xl overflow-hidden border border-[#E8E8E8] bg-[#F7F7F7]">
              <ResilientImage
                src={MISSION_CREATORS_IMAGE}
                alt="Indian college students sketching app wireframes and collaborating together at a studio desk"
                className="w-full h-full lg:h-full object-cover"
                fallbackTitle="Student Creators Collaborating"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
