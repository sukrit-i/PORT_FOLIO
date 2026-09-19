import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolio';
import { ProjectCard } from './ProjectCard';
import { SunIcon } from '../common/SunIcon';
import { ArrowUpRight } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const { projects } = portfolioData;
  const [selectedFilter, setSelectedFilter] = useState<string>('ALL');

  const filterOptions = ['ALL', 'FULL-STACK', 'AI & ML', 'CLOUD & SECURITY'];

  const filteredProjects = selectedFilter === 'ALL'
    ? projects
    : projects.filter((p) => {
        const cat = p.category.toUpperCase();
        if (selectedFilter === 'FULL-STACK') return cat.includes('FULL-STACK');
        if (selectedFilter === 'AI & ML') return cat.includes('AI') || cat.includes('ML');
        if (selectedFilter === 'CLOUD & SECURITY') return cat.includes('CLOUD') || cat.includes('SECURITY') || cat.includes('IAM');
        return cat.includes(selectedFilter);
      });

  return (
    <section id="works" className="py-12 bg-[#F6F4EE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Yellow Header Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#F0BE3C] border border-[#231F20] rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 shadow-sm"
        >
          <div className="flex items-center gap-3">
            <SunIcon size={24} className="text-[#231F20]" />
            <h2 className="font-serif text-xl sm:text-2xl font-black uppercase text-[#231F20] tracking-tight">
              SELECTED PROJECTS ⁕
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 flex-wrap">
            {filterOptions.map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-3.5 py-1 rounded-full text-xs font-bold uppercase transition-all duration-300 ${
                  selectedFilter === filter
                    ? 'bg-[#231F20] text-[#FAF8F5]'
                    : 'bg-[#FAF8F5]/60 text-[#231F20] hover:bg-[#FAF8F5]'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <a
            href="https://github.com/sukrit-i"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs font-black uppercase tracking-wider text-[#231F20] hover:underline"
          >
            Explore GitHub Repos <ArrowUpRight size={15} />
          </a>
        </motion.div>

        {/* 2x2 Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <ProjectCard project={project} index={idx} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
