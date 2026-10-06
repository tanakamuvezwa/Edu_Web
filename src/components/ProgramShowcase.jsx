import React from 'react';
import { 
  Stethoscope, 
  Sparkles, 
  Pill, 
  Code, 
  Compass, 
  TrendingUp, 
  Plane, 
  HeartPulse, 
  ArrowRight,
  ShieldCheck,
  Clock,
  Globe2
} from 'lucide-react';
import { PROGRAMS } from '../data/futureLinkData';

export default function ProgramShowcase({ onApplyProgram }) {
  const iconMap = {
    Stethoscope: <Stethoscope className="w-6 h-6 text-rose-500" />,
    Sparkles: <Sparkles className="w-6 h-6 text-amber-500" />,
    Pill: <Pill className="w-6 h-6 text-emerald-500" />,
    Code: <Code className="w-6 h-6 text-sky-500" />,
    Compass: <Compass className="w-6 h-6 text-purple-500" />,
    TrendingUp: <TrendingUp className="w-6 h-6 text-blue-500" />,
    Plane: <Plane className="w-6 h-6 text-cyan-500" />,
    HeartPulse: <HeartPulse className="w-6 h-6 text-pink-500" />,
  };

  return (
    <section id="programs" className="py-16 sm:py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-100 text-indigo-800 text-xs font-bold uppercase tracking-wider mb-2">
            <Globe2 className="w-3.5 h-3.5 text-indigo-600" />
            <span>High-Demand Disciplines</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-slate-900 tracking-tight">
            Most Chosen Programs in Turkey
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Turkey is a global hub for medical, dental, and engineering education with world-recognized 
            European Diploma Supplements and state-of-the-art research laboratories.
          </p>
        </div>

        {/* Program Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROGRAMS.map((prog) => (
            <div
              key={prog.id}
              className="rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-white p-6 shadow-xs hover:shadow-xl hover:border-sky-500/50 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header Icon + Degree */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white shadow-sm border border-slate-200 flex items-center justify-center group-hover:scale-105 transition">
                    {iconMap[prog.icon] || <Sparkles className="w-6 h-6 text-sky-500" />}
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-slate-200/80 text-slate-700 text-[11px] font-bold">
                    {prog.languages.join(' / ')}
                  </span>
                </div>

                <span className="text-[11px] font-bold text-sky-700 uppercase tracking-wide block">
                  {prog.degree}
                </span>

                <h3 className="font-heading font-black text-xl text-slate-900 mt-0.5 group-hover:text-sky-600 transition">
                  {prog.name}
                </h3>

                <p className="mt-2.5 text-xs text-slate-600 line-clamp-3 leading-relaxed">
                  {prog.description}
                </p>

                {/* Savings highlight */}
                <div className="mt-4 p-3 rounded-xl bg-emerald-50 border border-emerald-200/80 text-[11px] text-emerald-900">
                  <span className="font-bold block text-emerald-950">Future Link Grant:</span>
                  <span>{prog.futureLinkSavings}</span>
                </div>
              </div>

              {/* Bottom CTA */}
              <div className="mt-6 pt-4 border-t border-slate-200">
                <button
                  onClick={() => onApplyProgram(prog.name)}
                  className="w-full py-2.5 rounded-xl bg-slate-900 group-hover:bg-sky-600 text-white font-bold text-xs transition flex items-center justify-center gap-1.5 shadow-sm cursor-pointer"
                >
                  <span>Info & Free Application</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
