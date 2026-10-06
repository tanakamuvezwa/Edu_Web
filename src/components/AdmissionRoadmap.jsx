import React from 'react';
import { 
  FileText, 
  MessageSquare, 
  Mail, 
  CreditCard, 
  Compass, 
  Plane, 
  Sparkles, 
  ArrowRight,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { ADMISSION_STEPS } from '../data/futureLinkData';

export default function AdmissionRoadmap({ onOpenApplyModal }) {
  const stepIcons = [
    <FileText className="w-5 h-5 text-sky-500" />,
    <MessageSquare className="w-5 h-5 text-indigo-500" />,
    <Mail className="w-5 h-5 text-emerald-500" />,
    <CreditCard className="w-5 h-5 text-amber-500" />,
    <Compass className="w-5 h-5 text-rose-500" />,
    <Plane className="w-5 h-5 text-purple-500" />
  ];

  return (
    <section id="roadmap" className="py-16 sm:py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider mb-2">
            <Compass className="w-3.5 h-3.5 text-sky-600" />
            <span>Clear 6-Step Admission Journey</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-slate-900 tracking-tight">
            How to Start Your Application with Future Link 🇹🇷
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            From initial document evaluation to arriving on campus in Istanbul. We handle the paperwork, 
            secure your institutional scholarship, and guide you every step until you are settled.
          </p>
        </div>

        {/* 6-Step Timeline Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ADMISSION_STEPS.map((step, idx) => (
            <div
              key={step.step}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-xl hover:border-sky-500/60 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Top Step Number Badge */}
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center font-heading font-black text-base group-hover:bg-sky-600 group-hover:text-white transition">
                  0{step.step}
                </div>
                <span className="px-2.5 py-1 rounded-full bg-sky-50 text-sky-700 text-[11px] font-bold border border-sky-100">
                  {step.time}
                </span>
              </div>

              <div>
                <div className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center mb-3">
                  {stepIcons[idx]}
                </div>
                <h3 className="font-heading font-black text-lg text-slate-900 group-hover:text-sky-600 transition">
                  {step.title}
                </h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] text-emerald-600 font-bold">
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                <span>Future Link Handled & Monitored</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 text-center">
          <button
            onClick={() => onOpenApplyModal()}
            className="px-8 py-4 bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 hover:from-sky-500 hover:to-indigo-500 text-white rounded-xl font-bold text-sm shadow-xl shadow-sky-600/30 transition transform hover:-translate-y-0.5 inline-flex items-center gap-2 cursor-pointer"
          >
            <Sparkles className="w-4 h-4" />
            <span>Begin Step 1: Submit Free Application Now</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
