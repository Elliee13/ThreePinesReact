import SiteHeader from "./components/SiteHeader.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Divisions from "./components/Divisions.jsx";
import Capabilities from "./components/Capabilities.jsx";
import Contact from "./components/Contact.jsx";
import SiteFooter from "./components/SiteFooter.jsx";
import { useSmoothScroll } from "./hooks/useSmoothScroll";
import { useReveal } from "./hooks/useReveal";
import { useParallax } from "./hooks/useParallax";

export default function App() {
  useSmoothScroll("#siteHeader");
  useReveal();
  useParallax();
  return (
    <>
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-basalt-900"
      >
        Skip to content
      </a>

      <SiteHeader />

      <main className="pt-23 md:pt-26">
        <Hero />
        <About />
        <Divisions />
        <Capabilities />
        <Contact />
        <SiteFooter />
      </main>
    </>
  );
}
