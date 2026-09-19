import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolio';
import { SunIcon } from '../common/SunIcon';
import { MapPin, Sparkles, ArrowUpRight } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const { personalInfo, categories, stats } = portfolioData;

  return (
    <section className="relative pt-6 pb-12 overflow-hidden bg-[#F6F4EE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Massive Editorial PORTFOLIO Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-6"
        >
          <h1 className="portfolio-hero-title text-[#231F20] tracking-tighter select-none">
            PORTFOLIO
          </h1>
        </motion.div>

        {/* Categories Blue Pill Bar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-10"
        >
          <div className="inline-flex items-center gap-3 px-6 py-2 bg-[#4B7897] text-[#FAF8F5] rounded-full shadow-sm">
            {categories.map((cat, idx) => (
              <React.Fragment key={cat}>
                <span className="text-xs font-bold uppercase tracking-widest">{cat}</span>
                {idx < categories.length - 1 && <span className="text-[#F0BE3C] font-bold">•</span>}
              </React.Fragment>
            ))}
          </div>
        </motion.div>

        {/* Main Hero Asymmetric Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          
          {/* Left Bio Card (Col-7) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-7 bg-[#FAF8F5] border border-[#231F20]/10 rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-editorial relative overflow-hidden"
          >
            <div className="relative z-10">
              {/* Hello Badge */}
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#4B7897] mb-4">
                <Sparkles size={14} className="text-[#F0BE3C]" /> HELLO, I'M
              </div>

              {/* Name */}
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#231F20] uppercase tracking-tight mb-3 leading-none">
                {personalInfo.name}
              </h2>

              {/* Headline */}
              <h3 className="font-sans text-base sm:text-lg font-bold uppercase tracking-tight text-[#231F20]/90 mb-4 max-w-xl leading-snug">
                {personalInfo.headline}
              </h3>

              {/* Bio Paragraph */}
              <p className="font-sans text-xs sm:text-sm text-[#231F20]/75 leading-relaxed max-w-lg mb-6">
                {personalInfo.bio}
              </p>

              {/* Direct Actions: Resume Download & GitHub */}
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  download="Sukriti_Sonam_Resume.pdf"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#231F20] text-[#FAF8F5] text-xs font-bold uppercase tracking-wider rounded-full hover:bg-[#F0BE3C] hover:text-[#231F20] transition-all duration-300 shadow-sm"
                >
                  Download Resume / CV <ArrowUpRight size={14} />
                </a>

                <a
                  href="https://github.com/sukrit-i"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#FAF8F5] border border-[#231F20]/20 text-[#231F20] text-xs font-bold uppercase tracking-wider rounded-full hover:bg-[#4B7897] hover:text-[#FAF8F5] hover:border-[#4B7897] transition-all duration-300 shadow-sm"
                >
                  GitHub @sukrit-i <ArrowUpRight size={14} />
                </a>
              </div>
            </div>

            {/* Bottom Badges */}
            <div className="flex flex-wrap items-center gap-3 relative z-10">
              <span className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#FAF8F5] border border-[#231F20]/20 rounded-full text-xs font-semibold text-[#231F20]">
                <MapPin size={13} className="text-[#4B7897]" /> {personalInfo.location}
              </span>

              <span className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#F0BE3C] text-[#231F20] rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#231F20] animate-pulse"></span>
                {personalInfo.availability}
              </span>
            </div>

            {/* Subtle Sun Ray Background Overlay */}
            <div className="absolute -bottom-10 -right-10 w-48 h-48 opacity-10 pointer-events-none text-[#F0BE3C]">
              <SunIcon size={180} />
            </div>
          </motion.div>

          {/* Right Profile Frame Card (Col-5) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative bg-[#4B7897] rounded-3xl p-3 sm:p-4 h-full min-h-[380px] sm:min-h-[440px] flex items-end justify-center overflow-hidden shadow-editorial border border-[#231F20]/10">
              
              {/* Profile Image */}
              <img
                src={personalInfo.profileImage}
                alt={personalInfo.name}
                className="w-full h-full object-cover object-top rounded-2xl hover:scale-105 transition-transform duration-700"
              />

              {/* Floating Top Right Stamp Badge */}
              <div className="absolute top-6 right-6 bg-[#F0BE3C] text-[#231F20] p-3 rounded-2xl border-2 border-[#231F20] shadow-md flex flex-col items-center justify-center transform rotate-6 hover:rotate-0 transition-transform duration-300">
                <span className="font-sans text-[10px] font-black uppercase tracking-wider">CLOUD &</span>
                <SunIcon size={18} className="my-0.5" />
                <span className="font-sans text-[10px] font-black uppercase tracking-wider">CODE</span>
              </div>

              {/* Floating Bottom Right Circular Badge */}
              <div className="absolute bottom-6 right-6 bg-[#FAF8F5]/90 backdrop-blur-sm text-[#231F20] p-3 rounded-full border border-[#231F20]/20 shadow-md flex items-center justify-center text-center w-24 h-24 transform -rotate-6 hover:rotate-0 transition-transform duration-300">
                <span className="font-sans text-[9px] font-extrabold uppercase tracking-tight leading-tight">
                  BUILT WITH PURPOSE ⚡
                </span>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Dark Espresso Stats Counter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-[#231F20] text-[#FAF8F5] rounded-3xl py-6 px-8 sm:px-12 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 border border-[#231F20] shadow-editorial"
        >
          {stats.map((stat, idx) => (
            <div
              key={stat.label}
              className={`flex flex-col items-start ${
                idx < stats.length - 1 ? 'lg:border-r lg:border-[#FAF8F5]/15 lg:pr-6' : ''
              }`}
            >
              <span className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F0BE3C] mb-1">
                {stat.value}
              </span>
              <span className="font-sans text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#FAF8F5]/70">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
