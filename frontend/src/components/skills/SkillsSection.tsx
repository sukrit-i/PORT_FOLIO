import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolio';
import { SunRaysGraphic } from '../common/SunIcon';
import { Sparkles, Code2, Database, Cloud, ShieldCheck, Brain, Boxes, Terminal, Layers, Cpu } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const { skills } = portfolioData;

  const getToolIcon = (iconName: string) => {
    switch (iconName.toLowerCase()) {
      case 'react': return <Code2 size={22} className="text-[#F0BE3C] group-hover:text-[#231F20] transition-colors" />;
      case 'nodejs': return <Terminal size={22} className="text-[#F0BE3C] group-hover:text-[#231F20] transition-colors" />;
      case 'springboot': return <Layers size={22} className="text-[#F0BE3C] group-hover:text-[#231F20] transition-colors" />;
      case 'python': return <Code2 size={22} className="text-[#F0BE3C] group-hover:text-[#231F20] transition-colors" />;
      case 'cloud': return <Cloud size={22} className="text-[#F0BE3C] group-hover:text-[#231F20] transition-colors" />;
      case 'database': return <Database size={22} className="text-[#F0BE3C] group-hover:text-[#231F20] transition-colors" />;
      case 'shield': return <ShieldCheck size={22} className="text-[#F0BE3C] group-hover:text-[#231F20] transition-colors" />;
      case 'brain': return <Brain size={22} className="text-[#F0BE3C] group-hover:text-[#231F20] transition-colors" />;
      case 'docker': return <Boxes size={22} className="text-[#F0BE3C] group-hover:text-[#231F20] transition-colors" />;
      default: return <Cpu size={22} className="text-[#F0BE3C] group-hover:text-[#231F20] transition-colors" />;
    }
  };

  return (
    <div id="tools" className="bg-[#4B7897] text-[#FAF8F5] rounded-3xl p-8 sm:p-10 border border-[#231F20]/10 relative overflow-hidden flex flex-col justify-between shadow-editorial h-full">
      
      {/* Header */}
      <div className="relative z-10 mb-8">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#F0BE3C] mb-2">
          <Sparkles size={14} /> TECH STACK & CAPABILITIES
        </div>
        <h3 className="font-serif text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-[#FAF8F5]">
          CORE ENGINEERING SKILLS
        </h3>
      </div>

      {/* Tool Badges Grid */}
      <div className="relative z-10 grid grid-cols-3 sm:grid-cols-3 gap-4 mb-8">
        {skills.map((skill, idx) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.06 }}
            className="flex flex-col items-center group cursor-pointer text-center"
          >
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#FAF8F5]/10 backdrop-blur-md border border-[#FAF8F5]/20 flex items-center justify-center mb-2 group-hover:bg-[#F0BE3C] group-hover:border-[#231F20] group-hover:scale-110 transition-all duration-300 shadow-sm">
              {getToolIcon(skill.iconName)}
            </div>
            <span className="font-sans text-xs font-bold uppercase tracking-wider text-[#FAF8F5] group-hover:text-[#F0BE3C] transition-colors">
              {skill.name}
            </span>
            <span className="font-sans text-[10px] text-[#FAF8F5]/60 group-hover:text-[#FAF8F5]/80 transition-colors">
              {skill.category}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Bottom Sun Rays Graphic */}
      <div className="relative z-0 opacity-20 text-[#FAF8F5] -mb-10 max-w-xs mx-auto">
        <SunRaysGraphic />
      </div>

    </div>
  );
};
