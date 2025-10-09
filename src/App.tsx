import { ThemeProvider } from './components/ThemeProvider';
import { ThemeSwitcher } from './components/ThemeSwitcher';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ProjectsSection } from './components/ProjectsSection';
import { OpenSourceSection } from './components/OpenSourceSection';
import { PublicationsSection } from './components/PublicationsSection';
import { SkillsSection } from './components/SkillsSection';
import { FuturePlansSection } from './components/FuturePlansSection';
import { ContactSection } from './components/ContactSection';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen w-full overflow-x-hidden">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <OpenSourceSection />
        <PublicationsSection />
        <SkillsSection />
        <FuturePlansSection />
        <ContactSection />
      </div>
    </ThemeProvider>
  );
}
