import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolio';
import { SunIcon, SunRaysGraphic } from '../common/SunIcon';
import { useContactForm } from '../../hooks/useContactForm';
import { Mail, Globe, Phone, MapPin, ArrowRight, Sparkles, Send, CheckCircle2, AlertCircle, X } from 'lucide-react';

const LinkedinIcon: React.FC<{ size?: number; className?: string }> = ({ size = 15, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const ContactSection: React.FC = () => {
  const { contactInfo } = portfolioData;
  const [showFormModal, setShowFormModal] = useState<boolean>(false);

  const { formData, loading, responseStatus, errors, handleChange, handleSubmit, resetForm } = useContactForm();

  return (
    <section id="contact" className="py-12 bg-[#F6F4EE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Split Bottom CTA Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch mb-12">
          
          {/* Left Block - Golden Yellow CTA (Col-5) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 bg-[#F0BE3C] border border-[#231F20] rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-editorial relative overflow-hidden"
          >
            <div className="relative z-10">
              <span className="font-sans text-xs font-black uppercase tracking-wider text-[#231F20]/80 mb-3 block">
                HAVE A PROJECT IN MIND?
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl font-extrabold uppercase text-[#231F20] leading-tight mb-6">
                LET'S BUILD SOMETHING AMAZING
              </h2>

              <button
                onClick={() => setShowFormModal(true)}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#231F20] text-[#FAF8F5] text-xs font-bold uppercase tracking-wider rounded-full hover:bg-[#4B7897] transition-all duration-300 shadow-md group"
              >
                Send A Direct Message <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Bottom Availability Pill */}
            <div className="relative z-10 mt-8 pt-6 border-t border-[#231F20]/15 flex items-center gap-2 text-xs font-bold uppercase text-[#231F20]">
              <Sparkles size={14} /> SLOTS OPEN FOR NEW PROJECTS
            </div>

            {/* Sun Rays Background Graphic */}
            <div className="absolute -bottom-8 -right-8 w-44 opacity-20 text-[#231F20] pointer-events-none">
              <SunRaysGraphic />
            </div>
          </motion.div>

          {/* Middle Block - Blue Contact Info Card (Col-4) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-4 bg-[#4B7897] border border-[#231F20]/10 rounded-3xl p-8 sm:p-10 text-[#FAF8F5] flex flex-col justify-between shadow-editorial"
          >
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#F0BE3C] mb-4">
                <SunIcon size={16} /> GET IN TOUCH
              </div>

              <div className="space-y-3.5 text-xs font-semibold">
                <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-3 hover:text-[#F0BE3C] transition-colors">
                  <div className="w-8 h-8 rounded-full bg-[#FAF8F5]/10 flex items-center justify-center">
                    <Mail size={15} />
                  </div>
                  <span className="truncate">{contactInfo.email}</span>
                </a>

                {contactInfo.phone && (
                  <a href={`tel:${contactInfo.phone}`} className="flex items-center gap-3 hover:text-[#F0BE3C] transition-colors">
                    <div className="w-8 h-8 rounded-full bg-[#FAF8F5]/10 flex items-center justify-center">
                      <Phone size={15} />
                    </div>
                    <span>{contactInfo.phone}</span>
                  </a>
                )}

                <a href="https://linkedin.com/in/sukriti-sonam-pattnaik" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-[#F0BE3C] transition-colors">
                  <div className="w-8 h-8 rounded-full bg-[#FAF8F5]/10 flex items-center justify-center">
                    <LinkedinIcon size={15} />
                  </div>
                  <span className="truncate">linkedin.com/in/sukriti-sonam-pattnaik</span>
                </a>

                <a href="https://github.com/sukrit-i" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-[#F0BE3C] transition-colors">
                  <div className="w-8 h-8 rounded-full bg-[#FAF8F5]/10 flex items-center justify-center">
                    <Globe size={15} />
                  </div>
                  <span>github.com/sukrit-i</span>
                </a>

                <div className="flex items-center gap-3 text-[#FAF8F5]/80">
                  <div className="w-8 h-8 rounded-full bg-[#FAF8F5]/10 flex items-center justify-center">
                    <MapPin size={15} />
                  </div>
                  <span>{contactInfo.location}</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#FAF8F5]/15 text-[10px] uppercase font-bold text-[#FAF8F5]/60">
              Response time: Within 24 Hours
            </div>
          </motion.div>

          {/* Right Block - Cream Thank You Sign-off (Col-3) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-3 bg-[#FAF8F5] border border-[#231F20]/12 rounded-3xl p-8 flex flex-col justify-between items-center text-center shadow-editorial"
          >
            <div className="my-auto py-4">
              <SunIcon size={36} className="text-[#F0BE3C] mb-4 mx-auto animate-spin-slow" />
              <h3 className="font-serif text-lg font-black uppercase text-[#231F20] tracking-tight mb-2">
                THANK YOU FOR VISITING!
              </h3>
              <p className="font-sans text-xs text-[#231F20]/70 italic leading-relaxed">
                Keep shining and stay inspired.
              </p>
              <div className="text-[#F0BE3C] text-sm mt-3 font-bold">
                ★★★★★
              </div>
            </div>
          </motion.div>

        </div>

        {/* Embedded / Modal Interactive Contact Form */}
        {showFormModal && (
          <div className="fixed inset-0 z-50 bg-[#231F20]/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-[#FAF8F5] border border-[#231F20] rounded-3xl p-6 sm:p-8 max-w-lg w-full relative shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={() => { setShowFormModal(false); resetForm(); }}
                className="absolute top-5 right-5 text-[#231F20]/60 hover:text-[#231F20] p-1 rounded-full border border-[#231F20]/10"
              >
                <X size={20} />
              </button>

              <div className="flex items-center gap-2 mb-2">
                <SunIcon size={20} className="text-[#F0BE3C]" />
                <h3 className="font-serif text-xl font-black uppercase text-[#231F20]">SEND A MESSAGE</h3>
              </div>
              <p className="font-sans text-xs text-[#231F20]/70 mb-6">
                Fill out the fields below to connect directly with Marino Valerie.
              </p>

              {responseStatus && (
                <div
                  className={`p-4 rounded-2xl mb-6 text-xs font-semibold flex items-start gap-2 ${
                    responseStatus.success
                      ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                      : 'bg-rose-50 text-rose-800 border border-rose-200'
                  }`}
                >
                  {responseStatus.success ? <CheckCircle2 size={16} className="mt-0.5" /> : <AlertCircle size={16} className="mt-0.5" />}
                  <div>
                    <p>{responseStatus.message}</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#231F20] mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Jane Doe"
                    className="w-full px-4 py-2.5 rounded-xl border border-[#231F20]/20 bg-white text-xs text-[#231F20] focus:outline-none focus:border-[#4B7897]"
                  />
                  {errors.name && <p className="text-[11px] text-rose-600 mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#231F20] mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="jane@example.com"
                    className="w-full px-4 py-2.5 rounded-xl border border-[#231F20]/20 bg-white text-xs text-[#231F20] focus:outline-none focus:border-[#4B7897]"
                  />
                  {errors.email && <p className="text-[11px] text-rose-600 mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#231F20] mb-1">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry"
                    className="w-full px-4 py-2.5 rounded-xl border border-[#231F20]/20 bg-white text-xs text-[#231F20] focus:outline-none focus:border-[#4B7897]"
                  />
                  {errors.subject && <p className="text-[11px] text-rose-600 mt-1">{errors.subject}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#231F20] mb-1">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project scope, goals, and timeline..."
                    className="w-full px-4 py-2.5 rounded-xl border border-[#231F20]/20 bg-white text-xs text-[#231F20] focus:outline-none focus:border-[#4B7897]"
                  />
                  {errors.message && <p className="text-[11px] text-rose-600 mt-1">{errors.message}</p>}
                </div>

                <div className="pt-2 flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => { setShowFormModal(false); resetForm(); }}
                    className="px-4 py-2 rounded-full text-xs font-bold uppercase text-[#231F20]/70 hover:bg-[#231F20]/05"
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#231F20] text-[#FAF8F5] text-xs font-bold uppercase rounded-full hover:bg-[#F0BE3C] hover:text-[#231F20] transition-colors disabled:opacity-50"
                  >
                    {loading ? 'Sending...' : 'Submit Inquiry'} <Send size={13} />
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}

      </div>
    </section>
  );
};
