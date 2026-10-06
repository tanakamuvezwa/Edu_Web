import React from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  Compass, 
  Search, 
  FileCheck, 
  Plane, 
  Home, 
  GraduationCap, 
  CheckCircle2 
} from 'lucide-react';
import { WHY_FUTURE_LINK_JOURNEY } from '../data/futureLinkData';

export default function HowItWorksSection({ onOpenApplyModal }) {
  const stepIcons = [
    <Search className="w-6 h-6 text-amber-400" />,
    <Compass className="w-6 h-6 text-sky-400" />,
    <FileCheck className="w-6 h-6 text-emerald-400" />,
    <Plane className="w-6 h-6 text-purple-400" />,
    <Home className="w-6 h-6 text-rose-400" />,
    <GraduationCap className="w-6 h-6 text-yellow-400" />,
  ];

  return (
    <section id="how-it-works" className="py-20 sm:py-28 bg-slate-900/40 relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header (Exact text from PDF Page 4: "Why Future Link? More Than an Application") */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Complete Admissions Journey</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight">
            Why Future Link? More Than an Application
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            A student shouldn’t feel that Future Link simply takes their documents and sends them to a university. 
            We walk with you every single step from your very first question until you are thriving on campus.
          </p>
        </div>

        {/* 6-Step Journey Grid (PDF Pages 4–5) */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_FUTURE_LINK_JOURNEY.map((item, idx) => (
            <div
              key={item.step}
              className="glass-panel glass-panel-hover rounded-3xl p-6 sm:p-7 border border-white/10 flex flex-col justify-between group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-28 h-28 bg-white/5 rounded-full blur-2xl pointer-events-none" />

              <div>
                {/* Step Pill & Number */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono-num font-black text-2xl text-amber-400/80 group-hover:text-amber-400 transition">
                    {item.step}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition">
                    {stepIcons[idx]}
                  </div>
                </div>

                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">
                  {item.name}
                </span>

                <h3 className="font-heading font-black text-xl text-white mt-1 group-hover:text-amber-300 transition">
                  {item.role}
                </h3>

                <p className="mt-2.5 text-xs text-slate-400 leading-relaxed">
                  {item.details}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                <span className="text-slate-500 font-semibold">Future Link Role</span>
                <span className="text-emerald-400 font-bold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Guaranteed</span>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <button
            onClick={() => onOpenApplyModal()}
            className="px-8 py-4 bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-400 hover:from-amber-400 hover:to-yellow-300 text-slate-950 rounded-2xl font-black text-sm shadow-xl shadow-amber-500/20 transition transform hover:-translate-y-0.5 inline-flex items-center gap-2 cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-slate-950" />
            <span>Start Step 01: Discover Your Opportunities</span>
            <ArrowRight className="w-4 h-4 text-slate-950" />
          </button>
        </div>

      </div>
    </section>
  );
}
