import React, { useState } from 'react';
import { 
  PiggyBank, 
  Sparkles, 
  ShieldCheck, 
  TrendingDown, 
  CheckCircle2, 
  ArrowRight,
  Lock,
  DollarSign
} from 'lucide-react';
import { CURRENCIES } from '../data/futureLinkData';

export default function OneTimePaymentCalculator({ onOpenApplyModal, currentCurrency }) {
  const [programType, setProgramType] = useState('engineering');
  const [expectedHike, setExpectedHike] = useState(12); // 12% yearly tuition increase in regular route

  const cur = CURRENCIES[currentCurrency] || CURRENCIES.USD;

  // Presets in USD base
  const presets = {
    engineering: { name: 'Computer / Software Engineering', years: 4, baseAnnualUsd: 4500, upfrontDiscountPct: 18 },
    medicine: { name: 'Human Medicine (MD)', years: 6, baseAnnualUsd: 16000, upfrontDiscountPct: 15 },
    dentistry: { name: 'Dentistry (DDS)', years: 5, baseAnnualUsd: 12000, upfrontDiscountPct: 15 },
    business: { name: 'Business & Management', years: 4, baseAnnualUsd: 3800, upfrontDiscountPct: 20 },
  };

  const selected = presets[programType];
  const years = selected.years;
  const baseAnnual = selected.baseAnnualUsd * cur.rate;

  // Calculate Pay Per Year with expected tuition hikes
  let regularTotal = 0;
  for (let i = 0; i < years; i++) {
    regularTotal += baseAnnual * Math.pow(1 + expectedHike / 100, i);
  }
  regularTotal = Math.round(regularTotal);

  // Calculate One-Time Payment with Future Link upfront discount & 0% inflation lock
  const discountedAnnual = baseAnnual * (1 - selected.upfrontDiscountPct / 100);
  const oneTimeTotal = Math.round(discountedAnnual * years);
  const totalSavings = regularTotal - oneTimeTotal;

  return (
    <section id="one-time-payment" className="py-16 sm:py-24 bg-gradient-to-b from-white via-sky-50/40 to-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-2">
            <PiggyBank className="w-3.5 h-3.5 text-emerald-600" />
            <span>Exclusive Institutional Savings</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-slate-900 tracking-tight">
            One-Time Payment Discount Packages
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            The single most cost-effective way to study in Turkey. Pay once for all years of your degree upfront, 
            lock in your tuition against currency devaluation and annual price increases, and secure additional institutional discounts.
          </p>
        </div>

        {/* Interactive Calculator Card */}
        <div className="mt-12 max-w-5xl mx-auto bg-white rounded-3xl shadow-xl shadow-slate-200/80 border border-slate-200 overflow-hidden">
          
          <div className="p-6 sm:p-8 border-b border-slate-100 bg-gradient-to-r from-sky-900 to-indigo-950 text-white">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-sky-300 uppercase tracking-wider">
                  Interactive 4-Year Tuition & Lock-In Simulator
                </span>
                <h3 className="font-heading font-black text-2xl text-white mt-1">
                  Calculate Your Guaranteed Family Savings
                </h3>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/10 backdrop-blur-md text-xs font-bold text-amber-300 border border-white/20">
                <Lock className="w-4 h-4 text-amber-400" />
                <span>Price Locked for All Years</span>
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Interactive Inputs */}
            <div className="lg:col-span-6 space-y-6">
              
              {/* Program Selector */}
              <div>
                <label className="block text-xs font-bold text-slate-600 mb-2 uppercase tracking-wider">
                  Select Study Discipline & Duration:
                </label>
                <div className="grid grid-cols-2 gap-2.5">
                  {Object.keys(presets).map((key) => {
                    const item = presets[key];
                    return (
                      <button
                        key={key}
                        onClick={() => setProgramType(key)}
                        className={`p-3 rounded-xl border text-left transition cursor-pointer ${
                          programType === key
                            ? 'border-sky-600 bg-sky-50 text-sky-950 ring-2 ring-sky-500/30'
                            : 'border-slate-200 hover:border-slate-300 bg-slate-50/50 text-slate-700'
                        }`}
                      >
                        <span className="font-bold text-xs block">{item.name}</span>
                        <span className="text-[10px] text-slate-500">{item.years} Years Degree</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Annual Inflation Slider */}
              <div>
                <div className="flex items-center justify-between text-xs font-bold text-slate-600 mb-1.5">
                  <span>Estimated Annual Tuition Increase (Regular Route):</span>
                  <span className="text-rose-600 font-extrabold">{expectedHike}% / year</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="25"
                  step="1"
                  value={expectedHike}
                  onChange={(e) => setExpectedHike(Number(e.target.value))}
                  className="w-full accent-sky-600 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                  <span>5% (Conservative)</span>
                  <span>12% (Standard in Turkey)</span>
                  <span>25% (High Inflation)</span>
                </div>
              </div>

              {/* Benchmark Guarantees List */}
              <div className="pt-4 border-t border-slate-100 space-y-2.5 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span><strong>Zero Foreign Exchange Shock:</strong> Tuition locked in {currentCurrency}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span><strong>Priority Dormitory Allocation:</strong> Guaranteed university dorm slot</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span><strong>Official Direct Escrow:</strong> Payment sent directly to university bank account</span>
                </div>
              </div>

            </div>

            {/* Right Column: Comparison Breakdown */}
            <div className="lg:col-span-6 bg-slate-50 rounded-2xl p-6 sm:p-7 border border-slate-200/90 flex flex-col justify-between">
              
              <div className="space-y-4">
                
                {/* Regular Route Cost */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                  <div>
                    <span className="text-xs text-slate-500 font-semibold block">Pay Yearly (Standard)</span>
                    <span className="text-[11px] text-rose-500 font-medium">Subject to {expectedHike}% annual hikes</span>
                  </div>
                  <span className="font-heading font-bold text-lg text-slate-600 line-through">
                    {cur.symbol}{regularTotal.toLocaleString()}
                  </span>
                </div>

                {/* One Time Route Cost */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                  <div>
                    <span className="text-xs font-bold text-sky-900 block flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-sky-600" />
                      Future Link One-Time Payment
                    </span>
                    <span className="text-[11px] text-emerald-600 font-bold">
                      Extra {selected.upfrontDiscountPct}% Institutional Upfront Discount
                    </span>
                  </div>
                  <span className="font-heading font-black text-2xl text-sky-700">
                    {cur.symbol}{oneTimeTotal.toLocaleString()}
                  </span>
                </div>

                {/* Net Savings Box */}
                <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-md">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[11px] font-extrabold tracking-wider uppercase text-emerald-100 block">
                        TOTAL MONEY SAVED
                      </span>
                      <span className="font-heading font-black text-3xl sm:text-4xl text-white">
                        {cur.symbol}{totalSavings.toLocaleString()}
                      </span>
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center font-bold text-xl">
                      🎉
                    </div>
                  </div>
                  <p className="text-[11px] text-emerald-100 mt-2">
                    Locked in for all {years} years. Available exclusively for Future Link applicants.
                  </p>
                </div>

              </div>

              {/* Action Button */}
              <div className="mt-6">
                <button
                  onClick={() => onOpenApplyModal()}
                  className="w-full py-3.5 bg-slate-900 hover:bg-sky-600 text-white rounded-xl font-bold text-xs sm:text-sm transition shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-sky-400" />
                  <span>Lock in One-Time Payment Discount</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
