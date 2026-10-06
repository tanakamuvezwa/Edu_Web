import React, { useState } from 'react';
import { 
  Award, 
  Sparkles, 
  GraduationCap, 
  CheckCircle2, 
  ArrowRight, 
  HelpCircle,
  TrendingUp,
  FileText
} from 'lucide-react';
import { CURRENCIES } from '../data/futureLinkData';

export default function ScholarshipCalculator({ onOpenApplyModal, currentCurrency }) {
  const [curriculum, setCurriculum] = useState('alevel');
  const [score, setScore] = useState(82);
  const [targetField, setTargetField] = useState('engineering');

  const cur = CURRENCIES[currentCurrency] || CURRENCIES.USD;

  const curriculumOptions = [
    { id: 'alevel', name: 'British System (A-Levels / IGCSE)', maxScore: 100, label: 'Average Grade / %' },
    { id: 'ib', name: 'International Baccalaureate (IB)', maxScore: 45, label: 'IB Points (out of 45)' },
    { id: 'american', name: 'American High School / AP / SAT', maxScore: 100, label: 'GPA Percentage (or 4.0 scale %)' },
    { id: 'waec', name: 'WAEC / WASSCE (West Africa)', maxScore: 100, label: 'Average Grade Equivalent %' },
    { id: 'cbse', name: 'CBSE / ICSE / Indian State Board', maxScore: 100, label: '12th Standard Board Score %' },
    { id: 'french', name: 'French Baccalauréat', maxScore: 20, label: 'Baccalauréat Grade (out of 20)' },
    { id: 'tawjihi', name: 'Arab General Secondary (Tawjihi)', maxScore: 100, label: 'Tawjihi Percentage %' },
    { id: 'attestat', name: 'Attestat (Central Asia / CIS)', maxScore: 5, label: 'Attestat GPA (out of 5.0)' },
  ];

  // Normalized score out of 100
  let normalized = 80;
  if (curriculum === 'ib') normalized = (score / 45) * 100;
  else if (curriculum === 'french') normalized = (score / 20) * 100;
  else if (curriculum === 'attestat') normalized = (score / 5) * 100;
  else normalized = score;

  // Determine scholarship bracket
  let scholarshipPct = 50;
  let statusBadge = 'High Placement Probability';
  let badgeColor = 'text-sky-600 bg-sky-50 border-sky-200';

  if (normalized >= 90) {
    scholarshipPct = targetField === 'medicine' ? 60 : 75;
    statusBadge = 'Elite Merit Scholarship Tier (99% Acceptance)';
    badgeColor = 'text-emerald-700 bg-emerald-50 border-emerald-200';
  } else if (normalized >= 80) {
    scholarshipPct = targetField === 'medicine' ? 50 : 65;
    statusBadge = 'Preferred Institutional Quota (98% Acceptance)';
    badgeColor = 'text-sky-700 bg-sky-50 border-sky-200';
  } else if (normalized >= 70) {
    scholarshipPct = targetField === 'medicine' ? 40 : 50;
    statusBadge = 'Guaranteed Partner Admission (95% Acceptance)';
    badgeColor = 'text-indigo-700 bg-indigo-50 border-indigo-200';
  } else {
    scholarshipPct = 35;
    statusBadge = 'Standard Foundation Admission Eligible';
    badgeColor = 'text-amber-700 bg-amber-50 border-amber-200';
  }

  // Base tuition estimates by field
  const baseFees = {
    medicine: 22000,
    dentistry: 15000,
    engineering: 6500,
    business: 5500,
    architecture: 6000,
  };

  const selectedBase = baseFees[targetField] || 6500;
  const estimatedDiscountedAnnual = Math.round(selectedBase * (1 - scholarshipPct / 100) * cur.rate);

  return (
    <section id="scholarship-calc" className="py-16 sm:py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider mb-2">
            <Award className="w-3.5 h-3.5 text-amber-600" />
            <span>Instant Pre-Assessment</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-slate-900 tracking-tight">
            Institutional Scholarship Eligibility Calculator
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Discover what scholarship discount you qualify for at our partner universities. 
            Future Link evaluates your high school curriculum directly — no application fee required.
          </p>
        </div>

        {/* Calculator Card */}
        <div className="mt-12 max-w-4xl mx-auto rounded-3xl border border-slate-200 shadow-xl bg-slate-50/60 p-6 sm:p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            
            {/* Input Form Column */}
            <div className="space-y-5">
              
              {/* Curriculum Selector */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase">
                  1. High School Curriculum System:
                </label>
                <select
                  value={curriculum}
                  onChange={(e) => {
                    const val = e.target.value;
                    setCurriculum(val);
                    if (val === 'ib') setScore(34);
                    else if (val === 'french') setScore(14);
                    else if (val === 'attestat') setScore(4.5);
                    else setScore(80);
                  }}
                  className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500"
                >
                  {curriculumOptions.map((opt) => (
                    <option key={opt.id} value={opt.id}>{opt.name}</option>
                  ))}
                </select>
              </div>

              {/* Score Input Slider */}
              <div>
                <div className="flex items-center justify-between text-xs font-bold text-slate-700 mb-1.5">
                  <span>2. Your Grade / Score:</span>
                  <span className="text-sky-600 font-extrabold text-sm">
                    {score} {curriculum === 'ib' ? '/ 45' : curriculum === 'french' ? '/ 20' : curriculum === 'attestat' ? '/ 5.0' : '%'}
                  </span>
                </div>
                <input
                  type="range"
                  min={curriculum === 'ib' ? 24 : curriculum === 'french' ? 10 : curriculum === 'attestat' ? 3.0 : 50}
                  max={curriculum === 'ib' ? 45 : curriculum === 'french' ? 20 : curriculum === 'attestat' ? 5.0 : 100}
                  step={curriculum === 'attestat' ? 0.1 : 1}
                  value={score}
                  onChange={(e) => setScore(Number(e.target.value))}
                  className="w-full accent-sky-600 cursor-pointer"
                />
              </div>

              {/* Target Field */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase">
                  3. Desired Faculty / Discipline:
                </label>
                <select
                  value={targetField}
                  onChange={(e) => setTargetField(e.target.value)}
                  className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500"
                >
                  <option value="engineering">Computer / Software Engineering (ABET)</option>
                  <option value="medicine">Human Medicine (MD - 6 Years)</option>
                  <option value="dentistry">Dentistry (DDS - 5 Years)</option>
                  <option value="business">Business & Economics</option>
                  <option value="architecture">Architecture & Design</option>
                </select>
              </div>

            </div>

            {/* Results Output Column */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-md flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    Instant Assessment Result
                  </span>
                  <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full border ${badgeColor}`}>
                    {statusBadge}
                  </span>
                </div>

                <div className="mt-4 p-4 rounded-xl bg-gradient-to-tr from-sky-500 to-indigo-600 text-white shadow-md">
                  <span className="text-xs text-sky-100 font-semibold block">
                    Estimated Institutional Scholarship:
                  </span>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="font-heading font-black text-4xl sm:text-5xl text-white">
                      {scholarshipPct}% OFF
                    </span>
                    <span className="text-xs text-sky-200 font-bold">Standard Tuition</span>
                  </div>
                  <p className="text-[11px] text-sky-100 mt-2">
                    Guaranteed for the entire normal duration of your degree program.
                  </p>
                </div>

                <div className="mt-4 p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <span className="text-[10px] text-slate-400 font-bold uppercase block">
                    Estimated Annual Tuition After Scholarship:
                  </span>
                  <div className="flex items-baseline gap-1">
                    <span className="font-heading font-black text-2xl text-slate-900">
                      {cur.symbol}{estimatedDiscountedAnnual.toLocaleString()}
                    </span>
                    <span className="text-xs text-slate-500">/ academic year</span>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <button
                  onClick={() => onOpenApplyModal()}
                  className="w-full py-3.5 bg-sky-600 hover:bg-sky-500 text-white rounded-xl font-bold text-xs sm:text-sm shadow-md transition flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Claim This Scholarship Quota</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <span className="text-[10px] text-slate-400 text-center block mt-2">
                  Official offer letter processed within 24 hours with your transcripts
                </span>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
