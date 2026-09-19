import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolio';
import { Sparkles, ArrowRight } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const { process } = portfolioData;

  return (
    <div id="process" className="bg-[#231F20] text-[#FAF8F5] rounded-3xl p-8 sm:p-10 border border-[#231F20] flex flex-col justify-between shadow-editorial h-full">
      
      {/* Header */}
      <div className="mb-8">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#F0BE3C] mb-2">
          <Sparkles size={14} /> METHODOLOGY & LIFECYCLE
        </div>
        <h3 className="font-serif text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-[#FAF8F5]">
          ENGINEERING METHODOLOGY
        </h3>
      </div>

      {/* Process Steps Horizon Flow */}
      <div className="grid grid-cols-1 sm:grid-cols-5 gap-6 sm:gap-4 relative">
        {process.map((step, idx) => (
          <motion.div
            key={step.step}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="flex flex-col items-center sm:items-start text-center sm:text-left relative group"
          >
            {/* Circle Step Badge */}
            <div className="flex items-center gap-2 mb-3">
              <div className="w-12 h-12 rounded-full border-2 border-[#FAF8F5]/30 group-hover:border-[#F0BE3C] group-hover:bg-[#F0BE3C] group-hover:text-[#231F20] text-[#FAF8F5] font-serif text-sm font-bold flex items-center justify-center transition-all duration-300 shadow-sm">
                {step.step}
              </div>
              {idx < process.length - 1 && (
                <ArrowRight size={14} className="hidden sm:block text-[#FAF8F5]/30 group-hover:text-[#F0BE3C] transition-colors" />
              )}
            </div>

            {/* Title */}
            <h4 className="font-sans text-sm font-black uppercase tracking-wider text-[#FAF8F5] mb-1.5 group-hover:text-[#F0BE3C] transition-colors">
              {step.title}
            </h4>

            {/* Description */}
            <p className="font-sans text-xs text-[#FAF8F5]/70 leading-relaxed max-w-[180px]">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>

    </div>
  );
};
