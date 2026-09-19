import React from 'react';
import { portfolioData } from '../../data/portfolio';
import { SunIcon } from '../common/SunIcon';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const { personalInfo, socialLinks } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#231F20] text-[#FAF8F5] pt-12 pb-8 border-t border-[#231F20]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#FAF8F5]/10">
          
          {/* Brand Mark */}
          <div className="flex items-center gap-3">
            <SunIcon size={24} className="text-[#F0BE3C]" />
            <div>
              <h4 className="font-serif text-lg font-black uppercase tracking-tight text-[#FAF8F5]">
                {personalInfo.name}
              </h4>
              <p className="font-sans text-[11px] text-[#FAF8F5]/60 uppercase tracking-widest font-semibold">
                {personalInfo.roleTag}
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-xs font-bold uppercase tracking-wider text-[#FAF8F5]/70 hover:text-[#F0BE3C] transition-colors"
              >
                {social.platform}
              </a>
            ))}
          </div>

          {/* Back To Top Button */}
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full border border-[#FAF8F5]/20 flex items-center justify-center hover:bg-[#F0BE3C] hover:text-[#231F20] hover:border-[#F0BE3C] transition-all duration-300 shadow-sm"
            aria-label="Scroll to top of page"
          >
            <ArrowUp size={16} />
          </button>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-sans text-[#FAF8F5]/50 font-semibold">
          <p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
          <p>Designed & Developed with Editorial Precision.</p>
        </div>

      </div>
    </footer>
  );
};
