import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolio';
import { TestimonialCard } from './TestimonialCard';
import { SunIcon } from '../common/SunIcon';

export const TestimonialsSection: React.FC = () => {
  const { testimonials } = portfolioData;

  return (
    <section id="reviews" className="py-12 bg-[#F6F4EE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-8">
          <SunIcon size={22} className="text-[#F0BE3C]" />
          <h2 className="font-serif text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-[#231F20]">
            CLIENT FEEDBACK
          </h2>
        </div>

        {/* 3 Column Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
            >
              <TestimonialCard testimonial={item} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
