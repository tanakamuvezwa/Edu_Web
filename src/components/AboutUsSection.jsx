import React from 'react';
import { 
  Building2, 
  Target, 
  Eye, 
  Heart, 
  ShieldCheck, 
  Users, 
  CheckCircle2, 
  TrendingUp,
  Sparkles
} from 'lucide-react';
import { ABOUT_FUTURE_LINK } from '../data/futureLinkData';

export default function AboutUsSection() {
  const valueIcons = {
    'Integrity': <ShieldCheck className="w-5 h-5 text-amber-400" />,
    'Student First': <Heart className="w-5 h-5 text-rose-400" />,
    'Professionalism': <Building2 className="w-5 h-5 text-sky-400" />,
    'Transparency': <CheckCircle2 className="w-5 h-5 text-emerald-400" />,
    'Growth': <TrendingUp className="w-5 h-5 text-purple-400" />,
  };

  return (
    <section id="about-us" className="py-20 sm:py-28 bg-slate-950 relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Building2 className="w-3.5 h-3.5" />
            <span>7. About Future Link</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight">
            Who We Are
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            {ABOUT_FUTURE_LINK.whoWeAre}
          </p>
        </div>

        {/* Mission & Vision Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Mission */}
          <div className="glass-panel rounded-3xl p-8 border border-white/10 relative overflow-hidden group">
            <div className="w-12 h-12 rounded-2xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 mb-5 group-hover:scale-110 transition">
              <Target className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block">
              Our Purpose
            </span>
            <h3 className="font-heading font-black text-2xl text-white mt-1">
              Our Mission
            </h3>
            <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
              {ABOUT_FUTURE_LINK.mission}
            </p>
          </div>

          {/* Vision */}
          <div className="glass-panel rounded-3xl p-8 border border-white/10 relative overflow-hidden group">
            <div className="w-12 h-12 rounded-2xl bg-sky-400/10 border border-sky-400/30 flex items-center justify-center text-sky-400 mb-5 group-hover:scale-110 transition">
              <Eye className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold text-sky-400 uppercase tracking-widest block">
              Global Vision
            </span>
            <h3 className="font-heading font-black text-2xl text-white mt-1">
              Our Vision
            </h3>
            <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
              {ABOUT_FUTURE_LINK.vision}
            </p>
          </div>

        </div>

        {/* Our Values (Integrity | Student First | Professionalism | Transparency | Growth) */}
        <div className="mt-16">
          <div className="text-center mb-10">
            <h3 className="font-heading font-black text-2xl text-white">
              Our Core Values
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Integrity • Student First • Professionalism • Transparency • Growth
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {ABOUT_FUTURE_LINK.values.map((val) => (
              <div
                key={val.title}
                className="glass-panel glass-panel-hover rounded-2xl p-5 border border-white/10 text-center flex flex-col items-center justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-3 group-hover:scale-110 transition">
                    {valueIcons[val.title] || <Sparkles className="w-5 h-5 text-amber-400" />}
                  </div>
                  <h4 className="font-heading font-bold text-base text-white group-hover:text-amber-400 transition">
                    {val.title}
                  </h4>
                  <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
