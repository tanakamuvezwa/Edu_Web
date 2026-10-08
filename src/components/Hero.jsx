import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  PhoneCall, 
  ShieldCheck, 
  GraduationCap, 
  Home, 
  Plane, 
  Users, 
  CheckCircle2, 
  Search,
  MessageSquare
} from 'lucide-react';
import { CORE_SERVICES_TABLE, CONTACT_INFO } from '../data/futureLinkData';

export default function Hero({ onOpenApplyModal, onOpenAdvisorModal, onQuickSearch }) {
  const [level, setLevel] = useState("Bachelor's");
  const [field, setField] = useState('Medicine');
  const [language, setLanguage] = useState('English');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (onQuickSearch) {
      onQuickSearch({ level, field, language });
    }
    const elem = document.getElementById('universities');
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  const serviceIconMap = {
    GraduationCap: <GraduationCap className="w-5 h-5 text-amber-400" />,
    ShieldCheck: <ShieldCheck className="w-5 h-5 text-sky-400" />,
    Home: <Home className="w-5 h-5 text-emerald-400" />,
    Plane: <Plane className="w-5 h-5 text-yellow-400" />,
    Users: <Users className="w-5 h-5 text-purple-400" />,
  };

  return (
    <section id="home" className="relative pt-6 pb-20 lg:pt-12 lg:pb-28 overflow-hidden bg-grid">
      {/* Futuristic Background Glows */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-6xl h-96 bg-gradient-to-tr from-sky-500/10 via-amber-500/10 to-indigo-500/10 blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-40 left-10 w-72 h-72 bg-sky-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Floating Futuristic Pill */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border border-amber-400/30 text-xs font-semibold text-slate-200 shadow-md">
            <span className="flex h-2 w-2 rounded-full bg-amber-400 animate-ping" />
            <span className="text-amber-400 font-bold uppercase tracking-wider text-[11px]">Official Education Consultancy</span>
            <span className="text-slate-500">•</span>
            <span className="text-slate-300">Simple • Attractive • Professional • Student-Focused</span>
          </div>
        </div>

        {/* Hero Grid: Left Copy & Right High-Tech Visual with Logo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Core Headlines (Exact from PDF Page 2) */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            <h1 className="font-heading font-black text-4xl sm:text-6xl lg:text-7xl text-white tracking-tight leading-[1.08]">
              Study in Turkey.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-200">
                Build Your Future.
              </span>
            </h1>

            <p className="text-base sm:text-xl text-slate-300 font-medium max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Your trusted partner for university admission, visa assistance and student support in Turkey.
            </p>

            {/* Exact Primary & Secondary CTAs from Page 2 */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={() => onOpenApplyModal()}
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-400 hover:from-amber-400 hover:to-yellow-300 text-slate-950 rounded-2xl font-black text-base shadow-xl shadow-amber-500/25 transition transform hover:-translate-y-0.5 flex items-center justify-center gap-2.5 cursor-pointer glow-gold"
              >
                <Sparkles className="w-5 h-5 text-slate-950" />
                <span>Start Your Application</span>
                <ArrowRight className="w-5 h-5 text-slate-950" />
              </button>

              <button
                onClick={onOpenAdvisorModal}
                className="w-full sm:w-auto px-7 py-4 glass-panel hover:bg-white/10 text-white border border-white/15 rounded-2xl font-bold text-base transition flex items-center justify-center gap-2 cursor-pointer"
              >
                <PhoneCall className="w-5 h-5 text-amber-400" />
                <span>Talk to an Advisor</span>
              </button>
            </div>

            {/* Quick Guarantees Micro-Pills */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs text-slate-300">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/5 border border-white/10">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Direct Partner Admissions</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/5 border border-white/10">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                <span>Scholarships up to 75%</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/5 border border-white/10">
                <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" />
                <span>Offer Letter in 24–48 Hours</span>
              </span>
            </div>

          </div>

          {/* Right Column: Hero Visual with Logo & Campus Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Futuristic Hologram Container */}
              <div className="relative rounded-3xl overflow-hidden glass-panel border border-amber-400/30 p-2 shadow-2xl shadow-sky-950/50">
                
                {/* Background Istanbul / Campus Photo */}
                <div className="relative h-80 sm:h-96 rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=1200&q=80"
                    alt="Istanbul Bosphorus & University Campus"
                    className="w-full h-full object-cover brightness-75 scale-105 hover:scale-100 transition-all duration-700"
                  />
                  
                  {/* Subtle Gradient Readability Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                  {/* Centered Futuristic Glass Brand Emblem featuring Official Logo */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                    <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl bg-white p-2 border-2 border-amber-400/80 shadow-2xl shadow-amber-400/30 flex items-center justify-center animate-float">
                      <img
                        src="/logo.png"
                        alt="Future Link Education Emblem"
                        className="w-full h-full object-contain rounded-xl"
                      />
                    </div>
                    
                    <div className="mt-3 px-4 py-1.5 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/20 text-xs font-bold text-white shadow-lg">
                      <span className="text-amber-400 font-extrabold">FUTURE LINK</span> EDUCATION
                    </div>
                    <span className="text-[11px] text-slate-300 mt-1">Official University Representation</span>
                  </div>

                  {/* Floating Badges */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-slate-950/85 backdrop-blur-md text-[11px] font-bold text-amber-300 border border-amber-400/30">
                      🇹🇷 Study in Turkey
                    </span>
                  </div>

                  <div className="absolute bottom-4 right-4">
                    <div className="px-3 py-1.5 rounded-xl bg-emerald-950/85 backdrop-blur-md border border-emerald-500/40 text-[11px] font-bold text-emerald-300 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                      <span>Admissions Active 2026/27</span>
                    </div>
                  </div>

                </div>

              </div>

            </div>
          </div>

        </div>

        {/* 1. HOME PAGE: "Why Students Choose Future Link" Table (PDF Page 2) */}
        <div className="mt-16 sm:mt-24">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="font-heading font-black text-2xl sm:text-3xl text-white">
              Why Students Choose Future Link
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              End-to-end guidance from initial admission consultation to your final graduation day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {CORE_SERVICES_TABLE.map((item) => (
              <div
                key={item.id}
                className="glass-panel glass-panel-hover rounded-2xl p-5 border border-white/10 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-3 group-hover:scale-110 transition">
                    {serviceIconMap[item.icon]}
                  </div>
                  <h3 className="font-heading font-bold text-base text-white group-hover:text-amber-400 transition">
                    {item.service}
                  </h3>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/10 text-[11px] font-semibold text-amber-400">
                  {item.highlight}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
