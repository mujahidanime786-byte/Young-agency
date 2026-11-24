import { Suspense, lazy, useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';

const loadAboutAndServices = () =>
  import('./components/AboutAndServices').then((m) => ({ default: m.AboutAndServices }));
const loadDepartmentsAndMission = () =>
  import('./components/DepartmentsAndMission').then((m) => ({
    default: m.DepartmentsAndMission,
  }));
const loadProcessAndEarning = () =>
  import('./components/ProcessAndEarning').then((m) => ({ default: m.ProcessAndEarning }));
const loadEventsAndPortfolio = () =>
  import('./components/EventsAndPortfolio').then((m) => ({ default: m.EventsAndPortfolio }));
const loadVisionAndContact = () =>
  import('./components/VisionAndContact').then((m) => ({ default: m.VisionAndContact }));

const AboutAndServices = lazy(loadAboutAndServices);
const DepartmentsAndMission = lazy(loadDepartmentsAndMission);
const ProcessAndEarning = lazy(loadProcessAndEarning);
const EventsAndPortfolio = lazy(loadEventsAndPortfolio);
const VisionAndContact = lazy(loadVisionAndContact);

export default function App() {
  const [highlightInstagram, setHighlightInstagram] = useState(false);

  useEffect(() => {
    const prefetch = () => {
      void loadAboutAndServices();
      void loadDepartmentsAndMission();
      void loadProcessAndEarning();
      void loadEventsAndPortfolio();
      void loadVisionAndContact();
    };

    if (typeof window.requestIdleCallback === 'function') {
      const id = window.requestIdleCallback(prefetch, { timeout: 300 });
      return () => window.cancelIdleCallback(id);
    }

    const timer = globalThis.setTimeout(prefetch, 50);
    return () => globalThis.clearTimeout(timer);
  }, []);

  const handleJoinCommunity = () => {
    const scrollAndHighlight = () => {
      const contactEl = document.querySelector('#contact');
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: 'smooth' });
        setHighlightInstagram(true);
        window.setTimeout(() => {
          setHighlightInstagram(false);
        }, 2800);
        return true;
      }
      return false;
    };

    if (!scrollAndHighlight()) {
      void loadVisionAndContact().then(() => {
        requestAnimationFrame(() => {
          scrollAndHighlight();
        });
      });
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#111111] flex flex-col">
      <Navbar onJoinCommunity={handleJoinCommunity} />
      <main className="flex-1">
        <Hero onJoinCommunity={handleJoinCommunity} />
        <Suspense fallback={<div className="min-h-screen bg-white" aria-hidden="true" />}>
          <AboutAndServices />
          <DepartmentsAndMission />
          <ProcessAndEarning />
          <EventsAndPortfolio />
          <VisionAndContact highlightInstagram={highlightInstagram} />
        </Suspense>
      </main>
    </div>
  );
}
