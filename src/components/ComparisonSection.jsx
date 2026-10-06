import React, { useState } from 'react';
import { 
  Check, 
  X, 
  Sparkles, 
  AlertTriangle, 
  ShieldCheck, 
  ArrowRight,
  TrendingUp,
  Clock,
  Coins
} from 'lucide-react';
import { BENCHMARK_COMPARISON } from '../data/futureLinkData';

export default function ComparisonSection({ onOpenApplyModal }) {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <section id="why-turkey" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-sky-600" />
            <span>The Future Link Advantage</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-slate-900 tracking-tight">
            Why Apply with Future Link vs. Applying Alone?
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            Navigating university applications, Turkish consulate guidelines, and diploma equivalency can be costly and prone to bureaucratic rejection. 
            Here is why over 15,000 international students choose our official representation.
          </p>
        </div>

        {/* Side-by-Side Comparison Container */}
        <div className="mt-12 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
            
            {/* Solo Applicant Column (Risky) */}
            <div className="rounded-2xl border-2 border-rose-200/80 bg-rose-50/30 p-6 sm:p-8 flex flex-col justify-between shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2 w-28 h-28 bg-rose-200/20 rounded-full blur-xl pointer-events-none" />
              
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-rose-200">
                  <div>
                    <span className="text-xs font-bold text-rose-700 uppercase tracking-wider">Independent Route</span>
                    <h3 className="font-heading font-black text-2xl text-slate-900 mt-0.5">
                      Applying Alone
                    </h3>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center font-bold text-lg">
                    <X className="w-6 h-6" />
                  </div>
                </div>

                <p className="text-xs text-rose-800 mt-3 font-medium">
                  High rejection risk, zero tuition discounts, unguided embassy procedures.
                </p>

                {/* List of Pain Points */}
                <ul className="mt-6 space-y-4">
                  {BENCHMARK_COMPARISON.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                      <div className="w-5 h-5 rounded-full bg-rose-200/80 text-rose-700 flex items-center justify-center shrink-0 mt-0.5">
                        <X className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <strong className="block text-slate-900 font-semibold">{item.feature}</strong>
                        <span className="text-slate-600">{item.alone}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-rose-200/60">
                <div className="p-3.5 rounded-xl bg-white border border-rose-200 text-xs text-rose-900 flex items-center gap-3">
                  <AlertTriangle className="w-5 h-5 text-rose-600 shrink-0" />
                  <span>
                    Average student loses <strong className="font-bold">$2,000–$8,000/yr</strong> in missed institutional scholarship discounts when applying independently.
                  </span>
                </div>
              </div>
            </div>

            {/* With Future Link Column (Guaranteed & Discounted) */}
            <div className="rounded-2xl border-2 border-sky-500 bg-gradient-to-b from-sky-50/50 via-white to-sky-50/30 p-6 sm:p-8 flex flex-col justify-between shadow-xl shadow-sky-600/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2 w-32 h-32 bg-sky-400/20 rounded-full blur-xl pointer-events-none" />
              
              {/* Highlight ribbon */}
              <div className="absolute top-4 right-4">
                <span className="inline-flex items-center gap-1 bg-gradient-to-r from-sky-600 to-indigo-600 text-white text-[11px] font-extrabold px-3 py-1 rounded-full shadow-md">
                  <Sparkles className="w-3 h-3" />
                  OFFICIAL AGENCY
                </span>
              </div>

              <div>
                <div className="flex items-center justify-between pb-4 border-b border-sky-200">
                  <div>
                    <span className="text-xs font-bold text-sky-700 uppercase tracking-wider">Fast-Track Route</span>
                    <h3 className="font-heading font-black text-2xl text-slate-900 mt-0.5">
                      With Future Link
                    </h3>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-sky-600 text-white flex items-center justify-center font-bold text-lg shadow-md shadow-sky-500/30">
                    <Check className="w-6 h-6" />
                  </div>
                </div>

                <p className="text-xs text-sky-800 mt-3 font-semibold">
                  Guaranteed university quotas, up to 75% scholarships, express 24h offer letter.
                </p>

                {/* List of Future Link Superpowers */}
                <ul className="mt-6 space-y-4">
                  {BENCHMARK_COMPARISON.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-800">
                      <div className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <strong className="block text-slate-900 font-bold">{item.feature}</strong>
                        <span className="text-sky-950 font-medium">{item.futureLink}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-sky-200">
                <button
                  onClick={() => onOpenApplyModal()}
                  className="w-full py-3.5 bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 hover:from-sky-500 hover:to-indigo-500 text-white font-bold text-sm rounded-xl shadow-lg shadow-sky-600/25 transition transform hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Start Your Free Guaranteed Application</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <p className="text-[11px] text-center text-slate-500 mt-2">
                  No credit card required • Instant academic profile review within 24h
                </p>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
