import React from 'react';
import type { Project } from '../../types';
import { ExternalLink, Code2 } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-[#FAF8F5] border border-[#231F20]/12 rounded-3xl overflow-hidden p-5 flex flex-col justify-between hover:shadow-editorial-hover transition-all duration-500 group">
      
      {/* Thumbnail Container */}
      <div className="relative aspect-[16/10] overflow-hidden rounded-2xl mb-4 bg-[#231F20]/5">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        
        {/* Number Badge Overlay */}
        <div className="absolute bottom-3 left-3 bg-[#231F20] text-[#F0BE3C] w-9 h-9 rounded-full flex items-center justify-center font-serif text-sm font-extrabold shadow-md">
          {project.id}
        </div>
      </div>

      {/* Info Container */}
      <div className="flex flex-col flex-grow justify-between">
        <div>
          <div className="flex items-center justify-between gap-2 mb-1">
            <h3 className="font-sans text-xl font-black uppercase text-[#231F20] tracking-tight group-hover:text-[#4B7897] transition-colors">
              {project.title}
            </h3>
          </div>

          <p className="font-sans text-xs font-bold text-[#4B7897] uppercase tracking-wider mb-2">
            {project.category}
          </p>

          <p className="font-sans text-xs text-[#231F20]/75 line-clamp-2 leading-relaxed mb-4">
            {project.description}
          </p>
        </div>

        {/* Tech Tags & Links */}
        <div className="pt-3 border-t border-[#231F20]/08 flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-1.5 flex-wrap">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-0.5 bg-[#231F20]/05 text-[#231F20]/80 rounded-full text-[10px] font-semibold"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 text-[#231F20]/60 hover:text-[#231F20] hover:bg-[#231F20]/10 rounded-full transition-colors"
                aria-label={`View ${project.title} source code on GitHub`}
              >
                <Code2 size={15} />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 bg-[#F0BE3C] text-[#231F20] rounded-full hover:bg-[#231F20] hover:text-[#FAF8F5] transition-colors shadow-sm"
                aria-label={`Visit ${project.title} live website`}
              >
                <ExternalLink size={14} />
              </a>
            )}
          </div>
        </div>
      </div>

    </div>
  );
};
