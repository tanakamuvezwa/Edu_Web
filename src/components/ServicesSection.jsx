import React, { useState } from 'react';
import { 
  ShieldCheck, 
  FileText, 
  CheckCircle2, 
  Calendar, 
  Receipt, 
  HeartHandshake, 
  Home, 
  Plane, 
  Smartphone, 
  CreditCard, 
  Shield, 
  Navigation, 
  Compass, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { VISA_IMMIGRATION_SERVICES, STUDENT_SERVICES } from '../data/futureLinkData';

export default function ServicesSection({ onOpenApplyModal }) {
  const [activeTab, setActiveTab] = useState('visa');

  const visaIcons = {
    FileText: <FileText className="w-5 h-5 text-sky-400" />,
    ShieldCheck: <ShieldCheck className="w-5 h-5 text-amber-400" />,
    CheckCircle2: <CheckCircle2 className="w-5 h-5 text-emerald-400" />,
    Calendar: <Calendar className="w-5 h-5 text-purple-400" />,
    HeartHandshake: <HeartHandshake className="w-5 h-5 text-rose-400" />,
    Receipt: <Receipt className="w-5 h-5 text-yellow-400" />,
  };

  const studentIcons = {
    Home: <Home className="w-5 h-5 text-emerald-400" />,
    Plane: <Plane className="w-5 h-5 text-amber-400" />,
    Smartphone: <Smartphone className="w-5 h-5 text-sky-400" />,
    CreditCard: <CreditCard className="w-5 h-5 text-purple-400" />,
    Shield: <Shield className="w-5 h-5 text-rose-400" />,
    Navigation: <Navigation className="w-5 h-5 text-cyan-400" />,
    Compass: <Compass className="w-5 h-5 text-indigo-400" />,
  };

  return (
    <section id="services" className="py-20 sm:py-28 bg-slate-950 relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-400/30 text-sky-400 text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Comprehensive Student Support</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight">
            Our Services: From Admission to Arrival
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            We don't just secure your acceptance letter — Future Link stands by your side with 
            dedicated visa preparation and comprehensive on-ground settlement services in Turkey.
          </p>

          {/* Interactive Toggle Pills */}
          <div className="mt-8 inline-flex p-1.5 rounded-2xl bg-white/5 border border-white/10">
            <button
              onClick={() => setActiveTab('visa')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition cursor-pointer flex items-center gap-2 ${
                activeTab === 'visa'
                  ? 'bg-amber-400 text-slate-950 shadow-lg shadow-amber-400/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>5. Visa & Immigration</span>
            </button>
            <button
              onClick={() => setActiveTab('student')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition cursor-pointer flex items-center gap-2 ${
                activeTab === 'student'
                  ? 'bg-amber-400 text-slate-950 shadow-lg shadow-amber-400/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Plane className="w-4 h-4" />
              <span>6. Student Settlement Services</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Visa & Immigration (PDF Page 4) */}
        {activeTab === 'visa' && (
          <div className="mt-14 animate-fadeIn">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">
                  Visa & Immigration
                </span>
                <h3 className="font-heading font-black text-2xl text-white mt-0.5">
                  From Admission to Arrival — We’re With You
                </h3>
              </div>
              <span className="text-xs text-slate-400 hidden sm:inline">
                98.4% Consulate Approval Success
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {VISA_IMMIGRATION_SERVICES.map((srv, idx) => (
                <div
                  key={idx}
                  className="glass-panel glass-panel-hover rounded-2xl p-6 border border-white/10 flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition">
                      {visaIcons[srv.icon] || <ShieldCheck className="w-6 h-6 text-amber-400" />}
                    </div>
                    <h4 className="font-heading font-bold text-lg text-white group-hover:text-amber-400 transition">
                      {srv.title}
                    </h4>
                    <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                      {srv.desc}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/10 text-[11px] text-emerald-400 font-semibold flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Future Link Supported</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 2: Student Services (PDF Page 4) */}
        {activeTab === 'student' && (
          <div className="mt-14 animate-fadeIn">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-sky-400 uppercase tracking-wider block">
                  Student Services
                </span>
                <h3 className="font-heading font-black text-2xl text-white mt-0.5">
                  Everything You Need Before You Arrive
                </h3>
              </div>
              <span className="text-xs text-slate-400 hidden sm:inline">
                On-the-ground support in Istanbul & Ankara
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {STUDENT_SERVICES.map((srv, idx) => (
                <div
                  key={idx}
                  className="glass-panel glass-panel-hover rounded-2xl p-6 border border-white/10 flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition">
                      {studentIcons[srv.icon] || <Home className="w-6 h-6 text-emerald-400" />}
                    </div>
                    <h4 className="font-heading font-bold text-base text-white group-hover:text-amber-400 transition">
                      {srv.title}
                    </h4>
                    <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                      {srv.desc}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/10 text-[11px] text-sky-400 font-semibold flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Verified Arrangement</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl glass-panel border border-amber-400/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h3 className="font-heading font-black text-xl text-white">
              Ready to secure your place with full student support?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Apply now to receive your university acceptance letter and complete arrival package.
            </p>
          </div>

          <button
            onClick={() => onOpenApplyModal()}
            className="px-6 py-3.5 bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-400 hover:to-yellow-300 text-slate-950 font-black text-xs sm:text-sm rounded-xl transition shadow-lg shrink-0 flex items-center gap-2 cursor-pointer"
          >
            <Sparkles className="w-4 h-4" />
            <span>Start Your Application</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
