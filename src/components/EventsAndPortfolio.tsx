import { useState, useEffect } from 'react';
import {
  Trophy,
  Award,
  Presentation,
  GitBranch,
  Lightbulb,
  Compass,
  ArrowUpRight,
  X,
  type LucideIcon,
} from 'lucide-react';
import {
  ORGANIZED_PROGRAMS,
  PORTFOLIO_CATEGORIES,
  PORTFOLIO_PROJECTS,
  type EventProgram,
  type PortfolioCategory,
  type PortfolioProject,
} from '../data/agencyData';
import { ResilientImage } from './ResilientImage';

const PROGRAM_ICONS: Record<EventProgram['iconName'], LucideIcon> = {
  Trophy,
  Award,
  Presentation,
  GitBranch,
  Lightbulb,
  Compass,
};

export function EventsAndPortfolio() {
  const [selectedCategory, setSelectedCategory] = useState<PortfolioCategory>('All');
  const [activeProject, setActiveProject] = useState<PortfolioProject | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveProject(null);
      }
    };
    if (activeProject) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [activeProject]);

  const filteredProjects =
    selectedCategory === 'All'
      ? PORTFOLIO_PROJECTS
      : PORTFOLIO_PROJECTS.filter((project) => project.category === selectedCategory);

  return (
    <>
      {/* 11. WHAT WE ORGANIZE */}
      <section id="events" className="bg-white py-20 lg:py-28 border-b border-[#E8E8E8]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-14">
            <div className="lg:col-span-6">
              <p className="text-xs font-semibold tracking-[0.18em] uppercase text-[#1685B8] mb-3">
                MORE THAN A COMMUNITY.
              </p>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-tight text-[#111111] leading-[1.1]">
                LEARNING, COMPETITION, AND INNOVATION.
              </h2>
            </div>

            <div className="lg:col-span-6">
              <p className="text-base text-[#666666] leading-relaxed">
                Young Agency.co aims to organize and support practical programs across India. The
                initiatives below represent our planned community activities and upcoming formats
                currently in development—not past events.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ORGANIZED_PROGRAMS.map((program) => {
              const Icon = PROGRAM_ICONS[program.iconName];
              return (
                <article
                  key={program.index}
                  className="bg-[#F7F7F7] border border-[#E8E8E8] rounded-xl p-6 sm:p-8 flex flex-col justify-between transition-colors duration-200 hover:bg-white hover:border-[#C0C0C0]"
                >
                  <div>
                    <div className="flex items-center justify-between gap-4 mb-6">
                      <div className="flex items-center gap-2 text-xs text-[#666666]">
                        <span className="font-mono tabular-nums">{program.index}</span>
                        <span aria-hidden="true">·</span>
                        <span>{program.status}</span>
                      </div>
                      <Icon className="w-5 h-5 text-[#111111]" aria-hidden="true" />
                    </div>

                    <h3 className="font-display text-lg font-bold tracking-tight text-[#111111] mb-2.5">
                      {program.title}
                    </h3>
                    <p className="text-sm text-[#666666] leading-relaxed">
                      {program.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 12. OUR WORK AND PORTFOLIO */}
      <section id="portfolio" className="bg-[#F7F7F7] py-20 lg:py-28 border-b border-[#E8E8E8]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-10">
            <div>
              <p className="text-xs font-semibold tracking-[0.18em] uppercase text-[#1685B8] mb-3">
                OUR CREATIVE WORK.
              </p>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-tight text-[#111111] leading-[1.1]">
                IDEAS BUILT INTO REAL PROJECTS.
              </h2>
            </div>

            <p className="text-xs sm:text-sm text-[#666666] max-w-md">
              Clearly marked example project showcases illustrating each department&apos;s output
              format until live community releases are published.
            </p>
          </div>

          {/* Filter Tabs */}
          <div
            role="tablist"
            aria-label="Filter projects by category"
            className="flex flex-wrap items-center gap-2 mb-10 pb-6 border-b border-[#E8E8E8]"
          >
            {PORTFOLIO_CATEGORIES.map((category) => {
              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2.5 text-xs font-semibold tracking-wide rounded-md transition-colors duration-200 whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'bg-[#111111] text-white'
                      : 'bg-white text-[#666666] border border-[#E8E8E8] hover:text-[#111111] hover:border-[#C0C0C0]'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {/* Project Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {filteredProjects.map((project) => (
              <article
                key={project.id}
                className="group bg-white border border-[#E8E8E8] rounded-xl overflow-hidden flex flex-col justify-between transition-all duration-200 hover:-translate-y-0.5 hover:border-[#111111]"
              >
                <div>
                  <div className="aspect-[4/3] w-full overflow-hidden bg-[#F7F7F7] border-b border-[#E8E8E8]">
                    <ResilientImage
                      src={project.image}
                      alt={project.imageAlt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      fallbackTitle={project.title}
                    />
                  </div>

                  <div className="p-6 sm:p-7">
                    <div className="flex items-center gap-2 text-xs text-[#666666] mb-3">
                      <span className="font-medium text-[#1685B8]">{project.category}</span>
                      <span aria-hidden="true">·</span>
                      <span>Example Project</span>
                    </div>

                    <h3 className="font-display text-xl font-bold tracking-tight text-[#111111] mb-2.5">
                      {project.title}
                    </h3>

                    <p className="text-sm text-[#666666] leading-relaxed">
                      {project.shortDescription}
                    </p>
                  </div>
                </div>

                <div className="px-6 sm:px-7 pb-6 pt-3 border-t border-[#E8E8E8]">
                  <button
                    type="button"
                    onClick={() => setActiveProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-[#111111] hover:text-[#1685B8] transition-colors"
                  >
                    <span>View Project</span>
                    <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      {activeProject && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-project-title"
          onClick={() => setActiveProject(null)}
        >
          <div
            className="bg-white border border-[#E8E8E8] rounded-xl max-w-2xl w-full overflow-hidden shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/9] bg-[#F7F7F7] border-b border-[#E8E8E8]">
              <ResilientImage
                src={activeProject.image}
                alt={activeProject.imageAlt}
                className="w-full h-full object-cover"
                fallbackTitle={activeProject.title}
              />
              <button
                type="button"
                onClick={() => setActiveProject(null)}
                aria-label="Close project details"
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white text-[#111111] border border-[#E8E8E8] flex items-center justify-center hover:bg-[#111111] hover:text-white transition-colors"
              >
                <X className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>

            <div className="p-6 sm:p-8">
              <div className="flex flex-wrap items-center gap-2 text-xs text-[#666666] mb-3">
                <span className="font-semibold text-[#1685B8]">{activeProject.category}</span>
                <span aria-hidden="true">·</span>
                <span>{activeProject.departmentLead}</span>
                <span aria-hidden="true">·</span>
                <span>Example Showcase</span>
              </div>

              <h3
                id="modal-project-title"
                className="font-display text-2xl font-bold tracking-tight text-[#111111] mb-3"
              >
                {activeProject.title}
              </h3>

              <p className="text-sm sm:text-base text-[#666666] leading-relaxed mb-6">
                {activeProject.fullBrief}
              </p>

              <div className="pt-4 border-t border-[#E8E8E8] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="text-xs text-[#666666]">
                  <span className="font-semibold text-[#111111] block mb-1">
                    Illustrative Deliverables:
                  </span>
                  <span>{activeProject.deliverables.join(' · ')}</span>
                </div>

                <button
                  type="button"
                  onClick={() => setActiveProject(null)}
                  className="bg-[#111111] text-white text-xs font-semibold tracking-wider uppercase px-5 py-2.5 rounded-md hover:bg-[#1685B8] transition-colors whitespace-nowrap shrink-0"
                >
                  Close Preview
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
