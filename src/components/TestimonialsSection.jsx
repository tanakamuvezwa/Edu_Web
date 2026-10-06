import React from 'react';
import { Quote, Star, CheckCircle, Award, Sparkles } from 'lucide-react';
import { TESTIMONIALS } from '../data/futureLinkData';

export default function TestimonialsSection() {
  return (
    <section className="py-16 sm:py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider mb-2">
            <Star className="w-3.5 h-3.5 text-amber-600 fill-amber-500" />
            <span>Verified Student Success</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-slate-900 tracking-tight">
            Trusted by 15,000+ Students Worldwide
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Read real feedback from students across Canada, Central Asia, the Middle East, and Africa 
            who secured their medical, dental, and engineering degrees in Turkey through Future Link.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Rating & Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400 gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold border border-emerald-200">
                    {t.scholarship}
                  </span>
                </div>

                <Quote className="w-8 h-8 text-sky-200 mb-2" />

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-slate-900">
                    {t.name}
                  </h4>
                  <span className="text-[11px] text-slate-500 block">
                    {t.country}
                  </span>
                </div>

                <div className="text-right">
                  <span className="text-[11px] font-bold text-sky-700 block">
                    {t.university.split(' ')[1] || t.university}
                  </span>
                  <span className="text-[10px] text-slate-400 block">
                    {t.program.split('(')[0]}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
