import React from 'react';
import type { Testimonial } from '../../types';
import { Star, ArrowUpRight } from 'lucide-react';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="bg-[#FAF8F5] border border-[#231F20]/12 rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-editorial hover:shadow-editorial-hover transition-all duration-500 relative group">
      
      {/* Top Expand Icon */}
      <div className="absolute top-5 right-5 text-[#231F20]/30 group-hover:text-[#4B7897] transition-colors">
        <ArrowUpRight size={18} />
      </div>

      {/* Quote Text */}
      <div className="mb-6">
        <p className="font-sans text-xs sm:text-sm text-[#231F20]/85 italic leading-relaxed mb-4">
          "{testimonial.quote}"
        </p>

        {/* Stars */}
        <div className="flex items-center gap-1 text-[#F0BE3C]">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} size={14} fill="currentColor" />
          ))}
        </div>
      </div>

      {/* Client Profile Footer */}
      <div className="flex items-center gap-3 pt-4 border-t border-[#231F20]/08">
        <img
          src={testimonial.avatar}
          alt={testimonial.author}
          className="w-11 h-11 rounded-full object-cover border border-[#231F20]/15"
        />
        <div>
          <h4 className="font-sans text-xs font-black uppercase tracking-wider text-[#231F20]">
            — {testimonial.author}
          </h4>
          <p className="font-sans text-[11px] text-[#231F20]/60 font-semibold">
            {testimonial.role}, {testimonial.company}
          </p>
        </div>
      </div>

    </div>
  );
};
