import React, { useState } from 'react';
import { SunIcon } from '../common/SunIcon';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#F6F4EE]/90 backdrop-blur-md border-b border-[#231F20]/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
        {/* Left Sub-brand */}
        <div className="flex items-center gap-2">
          <span className="font-sans text-xs sm:text-sm font-black tracking-wider text-[#231F20] uppercase">
            SUKRITI SONAM <span className="font-serif italic text-xs font-normal text-[#4B7897]">& Software Engineer</span>
          </span>
        </div>

        {/* Middle Sun Graphic */}
        <div className="hidden md:flex items-center justify-center">
          <SunIcon size={22} className="text-[#F0BE3C] hover:rotate-90 transition-transform duration-700 cursor-pointer" />
        </div>

        {/* Right CTA / Tagline */}
        <div className="hidden md:flex items-center gap-6">
          <nav className="flex items-center gap-5 text-xs font-semibold uppercase tracking-wider text-[#231F20]/80">
            <button onClick={() => scrollToSection('works')} className="hover:text-[#4B7897] transition-colors">Works</button>
            <button onClick={() => scrollToSection('experience')} className="hover:text-[#4B7897] transition-colors">Experience</button>
            <button onClick={() => scrollToSection('tools')} className="hover:text-[#4B7897] transition-colors">Skills</button>
            <button onClick={() => scrollToSection('process')} className="hover:text-[#4B7897] transition-colors">Process</button>
            <button onClick={() => scrollToSection('reviews')} className="hover:text-[#4B7897] transition-colors">Reviews</button>
          </nav>

          <button
            onClick={() => scrollToSection('contact')}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-[#231F20] text-[#FAF8F5] text-xs font-bold uppercase tracking-wider rounded-full hover:bg-[#F0BE3C] hover:text-[#231F20] transition-all duration-300 shadow-sm"
          >
            Let's Connect <ArrowUpRight size={14} />
          </button>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#231F20] hover:text-[#4B7897] focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF8F5] border-b border-[#231F20]/10 px-6 py-5 flex flex-col gap-4 shadow-lg animate-fadeIn">
          <button onClick={() => scrollToSection('works')} className="text-left font-sans text-sm font-bold uppercase tracking-wider text-[#231F20] py-1 border-b border-[#231F20]/05">Works</button>
          <button onClick={() => scrollToSection('experience')} className="text-left font-sans text-sm font-bold uppercase tracking-wider text-[#231F20] py-1 border-b border-[#231F20]/05">Experience & Education</button>
          <button onClick={() => scrollToSection('tools')} className="text-left font-sans text-sm font-bold uppercase tracking-wider text-[#231F20] py-1 border-b border-[#231F20]/05">Skills & Tools</button>
          <button onClick={() => scrollToSection('process')} className="text-left font-sans text-sm font-bold uppercase tracking-wider text-[#231F20] py-1 border-b border-[#231F20]/05">Engineering Process</button>
          <button onClick={() => scrollToSection('reviews')} className="text-left font-sans text-sm font-bold uppercase tracking-wider text-[#231F20] py-1 border-b border-[#231F20]/05">Mentors & Feedback</button>
          <button onClick={() => scrollToSection('contact')} className="text-left font-sans text-sm font-bold uppercase tracking-wider text-[#4B7897] py-1">Contact Me →</button>
        </div>
      )}
    </header>
  );
};
