import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolio';
import { SunIcon } from '../common/SunIcon';
import { Briefcase, GraduationCap, Award, Users, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  const { experience = [], education = [], certifications = [], community = [] } = portfolioData;

  return (
    <section id="experience" className="py-12 bg-[#F6F4EE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Editorial Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 pb-4 border-b border-[#231F20]/15"
        >
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#4B7897] mb-2">
              <SunIcon size={16} className="text-[#F0BE3C]" /> CAREER & ACADEMIC BACKGROUND
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-[#231F20]">
              EXPERIENCE & EDUCATION
            </h2>
          </div>
          <div className="text-xs font-bold uppercase tracking-wider text-[#231F20]/60">
            INDUSTRY INTERNSHIPS • COMMUNITY IMPACT • ACADEMICS
          </div>
        </motion.div>

        {/* Main Grid: Experience (Col-7) + Education & Leadership (Col-5) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Professional Industry Experience (Col-7) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-full bg-[#231F20] text-[#FAF8F5] flex items-center justify-center">
                <Briefcase size={15} />
              </div>
              <h3 className="font-serif text-xl font-black uppercase text-[#231F20] tracking-tight">
                INDUSTRY EXPERIENCE
              </h3>
            </div>

            {experience.map((exp, idx) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="bg-[#FAF8F5] border border-[#231F20]/12 rounded-3xl p-6 sm:p-8 shadow-editorial hover:shadow-editorial-hover transition-all duration-300 relative overflow-hidden group"
              >
                {/* Header: Role, Company & Dates */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-4 border-b border-[#231F20]/08">
                  <div>
                    <h4 className="font-sans text-lg font-black uppercase text-[#231F20] tracking-tight group-hover:text-[#4B7897] transition-colors">
                      {exp.role}
                    </h4>
                    <p className="font-sans text-xs font-bold uppercase tracking-wider text-[#4B7897] mt-0.5">
                      {exp.company}
                    </p>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#F0BE3C]/30 text-[#231F20] rounded-full text-[11px] font-bold uppercase tracking-wider self-start sm:self-auto">
                    <Calendar size={12} /> {exp.period}
                  </div>
                </div>

                {/* Bullet Points */}
                <ul className="space-y-2.5 mb-6 text-xs sm:text-sm text-[#231F20]/80 leading-relaxed font-sans">
                  {exp.points.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2.5">
                      <CheckCircle2 size={15} className="text-[#4B7897] flex-shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Skills Pills */}
                <div className="flex items-center gap-1.5 flex-wrap pt-3 border-t border-[#231F20]/08">
                  <span className="text-[10px] font-black uppercase tracking-wider text-[#231F20]/60 mr-1">TECH:</span>
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-0.5 bg-[#231F20]/05 text-[#231F20] rounded-full text-[10px] font-semibold"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right: Education, Community & Certifications (Col-5) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Education Card */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#FAF8F5] border border-[#231F20]/12 rounded-3xl p-6 sm:p-7 shadow-editorial"
            >
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#231F20]/08">
                <div className="w-8 h-8 rounded-full bg-[#4B7897] text-[#FAF8F5] flex items-center justify-center">
                  <GraduationCap size={16} />
                </div>
                <h3 className="font-serif text-lg font-black uppercase text-[#231F20] tracking-tight">
                  EDUCATION
                </h3>
              </div>

              <div className="space-y-4">
                {education.map((edu, idx) => (
                  <div key={idx} className={idx < education.length - 1 ? 'pb-4 border-b border-[#231F20]/08' : ''}>
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h4 className="font-sans text-sm font-bold uppercase text-[#231F20]">
                        {edu.institution}
                      </h4>
                      <span className="text-[10px] font-bold text-[#4B7897] uppercase">
                        {edu.period}
                      </span>
                    </div>
                    <p className="font-sans text-xs text-[#231F20]/80 font-medium mb-1">
                      {edu.degree}
                    </p>
                    <p className="font-sans text-[11px] text-[#231F20]/60 flex items-center gap-1">
                      <MapPin size={11} /> {edu.location}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Community Leadership Card */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-[#231F20] text-[#FAF8F5] rounded-3xl p-6 sm:p-7 shadow-editorial border border-[#231F20]"
            >
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#FAF8F5]/10">
                <div className="w-8 h-8 rounded-full bg-[#F0BE3C] text-[#231F20] flex items-center justify-center">
                  <Users size={16} />
                </div>
                <h3 className="font-serif text-lg font-black uppercase text-[#FAF8F5] tracking-tight">
                  COMMUNITY LEADERSHIP
                </h3>
              </div>

              <div className="space-y-4">
                {community.map((comm, idx) => (
                  <div key={idx} className={idx < community.length - 1 ? 'pb-3 border-b border-[#FAF8F5]/10' : ''}>
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="font-sans text-xs font-bold uppercase text-[#F0BE3C]">
                        {comm.organization}
                      </h4>
                      <span className="text-[10px] text-[#FAF8F5]/60 font-semibold uppercase">
                        {comm.period}
                      </span>
                    </div>
                    <p className="font-sans text-xs text-[#FAF8F5]/80 mt-0.5">
                      {comm.role}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Certifications Card */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-[#F0BE3C] text-[#231F20] rounded-3xl p-6 sm:p-7 shadow-editorial border border-[#231F20]"
            >
              <div className="flex items-center gap-2 mb-3">
                <Award size={18} className="text-[#231F20]" />
                <h3 className="font-serif text-base font-black uppercase tracking-tight">
                  CERTIFICATION & RECOGNITION
                </h3>
              </div>

              {certifications.map((cert, idx) => (
                <div key={idx} className="bg-[#FAF8F5] rounded-2xl p-4 border border-[#231F20]/15">
                  <h4 className="font-sans text-xs font-extrabold uppercase text-[#231F20] leading-snug">
                    {cert.name}
                  </h4>
                  <div className="flex items-center justify-between gap-2 mt-2 text-[11px] font-bold text-[#4B7897]">
                    <span>{cert.issuer}</span>
                    <span>{cert.period}</span>
                  </div>
                </div>
              ))}
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
};
