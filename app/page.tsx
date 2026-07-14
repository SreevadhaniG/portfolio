import Hero from "./sections/Hero";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Achievements from "./sections/Achievements";
import Certifications from "./sections/Certifications";
import Extracurricular from "./sections/Extracurricular";
import Footer from "./sections/Footer";
import ScrollReveal from "../components/ScrollReveal";

export default function Home() {
  return (
    <main className="relative">
      <ScrollReveal>
        <Hero />

        {/* Section dividers with unique transitions */}
        <div className="relative h-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-50/50 to-slate-50 dark:via-slate-950/50 dark:to-slate-950" />
        <svg className="absolute bottom-0 w-full" viewBox="0 0 1440 60" fill="none">
          <path d="M0 60L60 50C120 40 240 20 360 15C480 10 600 20 720 25C840 30 960 30 1080 25C1200 20 1320 10 1380 5L1440 0V60H1380C1320 60 1200 60 1080 60C960 60 840 60 720 60C600 60 480 60 360 60C240 60 120 60 60 60H0Z" 
            className="fill-white dark:fill-slate-950" />
        </svg>
      </div>
      
      <About />
      
      <div className="relative h-24">
        <svg className="absolute top-0 w-full rotate-180" viewBox="0 0 1440 60" fill="none">
          <path d="M0 60L60 50C120 40 240 20 360 15C480 10 600 20 720 25C840 30 960 30 1080 25C1200 20 1320 10 1380 5L1440 0V60H1380C1320 60 1200 60 1080 60C960 60 840 60 720 60C600 60 480 60 360 60C240 60 120 60 60 60H0Z" 
            className="fill-white dark:fill-slate-950" />
        </svg>
      </div>
      
      <Experience />
      <Projects />
      <Skills />
      <Achievements />
      <Certifications />
      <Extracurricular />
        <Footer />
      </ScrollReveal>
    </main>
  );
}