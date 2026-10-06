import React, { useState } from 'react';
import { 
  Globe, 
  Award, 
  Coins, 
  Sparkles, 
  Compass, 
  ShieldCheck, 
  Search, 
  CheckCircle2, 
  ArrowRight,
  BookOpen
} from 'lucide-react';
import { WHY_TURKEY_POINTS } from '../data/futureLinkData';

export default function StudyInTurkey({ onFindMyUniversity }) {
  const [studyLevel, setStudyLevel] = useState("Bachelor's");
  const [studyField, setStudyField] = useState('Medicine');
  const [studyLanguage, setStudyLanguage] = useState('English');

  const studyLevels = ["Bachelor's", "Master's", "PhD", "Language School"];
  const fields = [
    'Business', 'Engineering', 'Medicine', 'Nursing', 
    'Pharmacy', 'Computer Science', 'Architecture', 'Aviation / Pilotage'
  ];
  const languages = ['English', 'Turkish', 'Bilingual'];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onFindMyUniversity) {
      onFindMyUniversity({
        level: studyLevel,
        field: studyField,
        language: studyLanguage
      });
    }
  };

  const iconMap = {
    Award: <Award className="w-6 h-6 text-amber-400" />,
    Globe: <Globe className="w-6 h-6 text-sky-400" />,
    Coins: <Coins className="w-6 h-6 text-emerald-400" />,
    Sparkles: <Sparkles className="w-6 h-6 text-purple-400" />,
    Compass: <Compass className="w-6 h-6 text-rose-400" />,
    ShieldCheck: <ShieldCheck className="w-6 h-6 text-yellow-400" />,
  };

  return (
    <section id="study-in-turkey" className="py-20 sm:py-28 bg-slate-900/60 relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header (Exact text from PDF Page 3) */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Globe className="w-3.5 h-3.5" />
            <span>Destination Spotlight</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight">
            Your Future Starts in Turkey
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            Turkey is a higher education destination of choice for over 300,000 international students. 
            Enjoy internationally recognized degrees, English-taught curricula, and affordable tuition options at the crossroads of Europe and Asia.
          </p>
        </div>

        {/* 6 Core Reasons Why Turkey Grid (PDF Page 3) */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_TURKEY_POINTS.map((item, idx) => (
            <div
              key={idx}
              className="glass-panel glass-panel-hover rounded-2xl p-6 border border-white/10 flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 group-hover:scale-105 transition">
                  {iconMap[item.icon] || <Sparkles className="w-6 h-6 text-amber-400" />}
                </div>
                <h3 className="font-heading font-black text-lg text-white group-hover:text-amber-400 transition">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/10 text-[11px] text-slate-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Bologna & YÖK Certified Standard</span>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive "Find Your Program" Tool (Exact from PDF Page 3) */}
        <div className="mt-16 max-w-4xl mx-auto rounded-3xl glass-panel border border-amber-400/40 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-white/10 gap-3">
            <div>
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">
                Interactive Program Explorer
              </span>
              <h3 className="font-heading font-black text-2xl text-white mt-0.5">
                Find Your Program in Turkey
              </h3>
            </div>
            <span className="text-xs text-slate-400">
              Select your study level, field & language
            </span>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* 1. Study Level (Bachelor's • Master's • PhD • Language School) */}
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                1. Study Level:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {studyLevels.map((lvl) => (
                  <button
                    key={lvl}
                    type="button"
                    onClick={() => setStudyLevel(lvl)}
                    className={`py-2.5 px-3 rounded-xl text-xs font-bold transition cursor-pointer border ${
                      studyLevel === lvl
                        ? 'bg-amber-400 text-slate-950 border-amber-400 shadow-md shadow-amber-400/20'
                        : 'bg-white/5 text-slate-300 border-white/10 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    {lvl}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Field of Study */}
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                2. Field of Study:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {fields.map((fld) => (
                  <button
                    key={fld}
                    type="button"
                    onClick={() => setStudyField(fld)}
                    className={`py-2 px-3 rounded-xl text-xs font-semibold transition cursor-pointer border ${
                      studyField === fld
                        ? 'bg-sky-500 text-white border-sky-400 shadow-md shadow-sky-500/20'
                        : 'bg-white/5 text-slate-300 border-white/10 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    {fld}
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Instruction Language */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-end">
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                  3. Language of Instruction:
                </label>
                <div className="flex gap-2">
                  {languages.map((lng) => (
                    <button
                      key={lng}
                      type="button"
                      onClick={() => setStudyLanguage(lng)}
                      className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold transition cursor-pointer border ${
                        studyLanguage === lng
                          ? 'bg-white/20 text-white border-white/40'
                          : 'bg-white/5 text-slate-400 border-white/10 hover:bg-white/10'
                      }`}
                    >
                      {lng}
                    </button>
                  ))}
                </div>
              </div>

              {/* Exact CTA Button from PDF Page 3: "Find My University" */}
              <div>
                <button
                  type="submit"
                  className="w-full py-3.5 bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-400 hover:from-amber-400 hover:to-yellow-300 text-slate-950 font-black text-sm rounded-xl shadow-lg shadow-amber-500/25 transition transform hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Search className="w-4 h-4 text-slate-950" />
                  <span>Find My University</span>
                  <ArrowRight className="w-4 h-4 text-slate-950" />
                </button>
              </div>
            </div>

          </form>

        </div>

      </div>
    </section>
  );
}
