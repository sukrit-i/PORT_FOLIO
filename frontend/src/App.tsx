import React from 'react';
import { Header } from './components/layout/Header';
import { HeroSection } from './components/hero/HeroSection';
import { ExperienceSection } from './components/experience/ExperienceSection';
import { ProjectsSection } from './components/projects/ProjectsSection';
import { SkillsSection } from './components/skills/SkillsSection';
import { ProcessSection } from './components/process/ProcessSection';
import { ContactSection } from './components/contact/ContactSection';
import { Footer } from './components/layout/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F6F4EE] text-[#231F20] selection:bg-[#F0BE3C] selection:text-[#231F20]">
      {/* Editorial Header */}
      <Header />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <HeroSection />

        {/* Experience & Education — before projects */}
        <ExperienceSection />

        {/* Selected Projects Section */}
        <ProjectsSection />

        {/* Skills & Process Side-by-Side */}
        <section className="py-10 bg-[#F6F4EE]">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
              <div className="lg:col-span-4 flex flex-col">
                <SkillsSection />
              </div>
              <div className="lg:col-span-8 flex flex-col">
                <ProcessSection />
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <ContactSection />
      </main>

      {/* Editorial Footer */}
      <Footer />
    </div>
  );
};

export default App;
