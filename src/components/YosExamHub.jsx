import React, { useState } from 'react';
import { 
  BookOpen, 
  CheckCircle2, 
  HelpCircle, 
  Sparkles, 
  BrainCircuit, 
  Calculator, 
  Shapes, 
  Globe2, 
  AlertCircle, 
  ArrowRight,
  FileCheck,
  Download
} from 'lucide-react';
import { YOS_FACTS } from '../data/futureLinkData';

export default function YosExamHub({ onOpenApplyModal }) {
  const [activeSection, setActiveSection] = useState('overview');
  const [showSampleQuestion, setShowSampleQuestion] = useState(false);

  return (
    <section id="yos-exam" className="py-16 sm:py-24 bg-gradient-to-b from-slate-900 via-sky-950 to-slate-900 text-white relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 border border-sky-400/30 text-xs font-bold uppercase tracking-wider mb-3">
            <BookOpen className="w-3.5 h-3.5 text-sky-400" />
            <span>Standardized International Testing</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-white tracking-tight">
            TR-YÖS 2026/2027 Examination Master Hub
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            Türkiye Yurt Dışından Öğrenci Kabul Sınavı — Everything international students must know 
            about the official ÖSYM examination, test syllabus, and exemptions.
          </p>
        </div>

        {/* Golden Rule Announcement Card (Crucial Clarity) */}
        <div className="mt-10 max-w-4xl mx-auto rounded-2xl bg-gradient-to-r from-amber-500/20 via-orange-500/20 to-amber-500/10 border-2 border-amber-400/50 p-6 sm:p-7 backdrop-blur-md shadow-2xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center font-black shrink-0 shadow-lg shadow-amber-400/30">
              <AlertCircle className="w-7 h-7" />
            </div>
            <div className="flex-1">
              <span className="text-xs font-black tracking-wider uppercase text-amber-300">
                CRITICAL ADMISSIONS NOTICE
              </span>
              <h3 className="font-heading font-black text-lg sm:text-xl text-white mt-0.5">
                Do You Need the YÖS Exam to Study in Turkey?
              </h3>
              <p className="text-xs sm:text-sm text-amber-100 mt-1.5 leading-relaxed">
                <strong className="text-white font-extrabold">NO for Foundation (Private) Universities!</strong> You can be admitted directly with your High School Diploma / National Exams (WAEC, GCSE, IB, SAT, Baccalaureate) with up to 75% institutional scholarships. TR-YÖS is only required if you target State (Public) Universities.
              </p>
            </div>
            <button
              onClick={() => onOpenApplyModal()}
              className="mt-2 sm:mt-0 px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-xs transition shadow-md shrink-0 cursor-pointer"
            >
              Apply Without YÖS Now
            </button>
          </div>
        </div>

        {/* TR-YÖS Exam Structure & Syllabus Breakdown */}
        <div className="mt-14">
          <div className="text-center mb-8">
            <h3 className="font-heading font-black text-2xl text-white">
              Official TR-YÖS Exam Structure (80 Questions • 100 Minutes)
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Administered simultaneously across 52 countries in 6 official languages by ÖSYM.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Subject 1: Basic Learning Skills / IQ */}
            <div className="rounded-2xl bg-slate-800/80 border border-slate-700/80 p-6 flex flex-col justify-between hover:border-sky-400/60 transition shadow-lg">
              <div>
                <div className="w-12 h-12 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center mb-4 border border-sky-500/30">
                  <BrainCircuit className="w-6 h-6" />
                </div>
                <div className="flex items-baseline justify-between mb-2">
                  <h4 className="font-heading font-black text-xl text-white">Basic Learning Skills</h4>
                  <span className="text-xs font-extrabold px-2 py-0.5 rounded-full bg-sky-400/20 text-sky-300">
                    40 Questions (50%)
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Abstract reasoning, spatial 3D shapes, numerical pattern sequences, matrix logic, and figure assembly.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-700/60 text-xs text-sky-300 font-medium">
                💡 <em>Requires zero Turkish language mastery — purely universal visual logic.</em>
              </div>
            </div>

            {/* Subject 2: Mathematics */}
            <div className="rounded-2xl bg-slate-800/80 border border-slate-700/80 p-6 flex flex-col justify-between hover:border-amber-400/60 transition shadow-lg">
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center mb-4 border border-amber-500/30">
                  <Calculator className="w-6 h-6" />
                </div>
                <div className="flex items-baseline justify-between mb-2">
                  <h4 className="font-heading font-black text-xl text-white">Mathematics (1 & 2)</h4>
                  <span className="text-xs font-extrabold px-2 py-0.5 rounded-full bg-amber-400/20 text-amber-300">
                    30 Questions (37.5%)
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Algebra, functions, factoring, polynomials, logarithms, complex numbers, trigonometry, limits, and derivatives.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-700/60 text-xs text-amber-300 font-medium">
                💡 <em>Directly comparable to SAT Math Level 2 & Cambridge A-Level Pure Mathematics.</em>
              </div>
            </div>

            {/* Subject 3: Geometry */}
            <div className="rounded-2xl bg-slate-800/80 border border-slate-700/80 p-6 flex flex-col justify-between hover:border-emerald-400/60 transition shadow-lg">
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4 border border-emerald-500/30">
                  <Shapes className="w-6 h-6" />
                </div>
                <div className="flex items-baseline justify-between mb-2">
                  <h4 className="font-heading font-black text-xl text-white">Geometry</h4>
                  <span className="text-xs font-extrabold px-2 py-0.5 rounded-full bg-emerald-400/20 text-emerald-300">
                    10 Questions (12.5%)
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Angles, triangle congruence, polygons, circles, analytic geometry, and 3D spatial solids.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-700/60 text-xs text-emerald-300 font-medium">
                💡 <em>Tested with high-precision diagrams and geometric proofs.</em>
              </div>
            </div>

          </div>
        </div>

        {/* Future Link YÖS Masterclass Support */}
        <div className="mt-12 rounded-2xl bg-slate-800/50 border border-slate-700 p-6 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3">
            <span className="text-xs font-black uppercase text-sky-400 tracking-wider">
              FUTURE LINK PREPARATION ACADEMY
            </span>
            <h3 className="font-heading font-black text-2xl text-white">
              Targeting State Universities? Master TR-YÖS with Future Link
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
              If your goal is public university admission (Cerrahpaşa, Hacettepe, Istanbul University, Ankara University), 
              Future Link provides complete prep materials, question banks, and live masterclasses.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
              {YOS_FACTS.futureLinkPrepPackage.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full lg:w-auto shrink-0">
            <button
              onClick={() => setShowSampleQuestion(!showSampleQuestion)}
              className="px-6 py-3 rounded-xl bg-slate-700 hover:bg-slate-600 text-white font-bold text-xs transition flex items-center justify-center gap-2 cursor-pointer"
            >
              <FileCheck className="w-4 h-4 text-sky-400" />
              <span>{showSampleQuestion ? 'Hide Sample Test' : 'View Sample YÖS Question'}</span>
            </button>
            <button
              onClick={() => onOpenApplyModal()}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-500 hover:from-sky-400 hover:to-indigo-400 text-white font-bold text-xs transition shadow-lg shadow-sky-500/20 flex items-center justify-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>Consult with YÖS Advisor</span>
            </button>
          </div>
        </div>

        {/* Sample Question Interactive Modal / Box */}
        {showSampleQuestion && (
          <div className="mt-6 p-6 rounded-2xl bg-slate-800 border border-sky-500/40 animate-slideDown">
            <div className="flex items-center justify-between pb-3 border-b border-slate-700">
              <span className="text-xs font-bold text-sky-400">
                SAMPLE TR-YÖS QUESTION • LOGIC & PATTERN SEQUENCE
              </span>
              <span className="text-[11px] text-slate-400">ÖSYM Standard</span>
            </div>
            
            <div className="mt-4 text-sm text-slate-200 font-mono bg-slate-900/80 p-4 rounded-xl border border-slate-700">
              <p className="text-slate-300 mb-2">Given the following numeric sequence transformation:</p>
              <p className="text-sky-300 font-bold">12 ➔ 144 ➔ 18</p>
              <p className="text-sky-300 font-bold">23 ➔ 529 ➔ 32</p>
              <p className="text-sky-300 font-bold">34 ➔ 1156 ➔ 26</p>
              <p className="text-amber-400 font-bold mt-2">What is the corresponding output for: 45 ➔ ?</p>
              <div className="mt-3 pt-3 border-t border-slate-800 text-xs text-emerald-400">
                <strong>Solution Tip:</strong> Square the number (45² = 2025), then sum the digits (2 + 0 + 2 + 5 = 9), multiplied by 2 = 18. Future Link Academy teaches rapid 30-second shortcut formulas for every TR-YÖS topic!
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
