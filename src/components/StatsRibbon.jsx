import React from 'react';
import { 
  Building2, 
  Award, 
  Clock, 
  CheckCircle, 
  Users, 
  Coins 
} from 'lucide-react';

export default function StatsRibbon() {
  const stats = [
    {
      icon: <Building2 className="w-5 h-5 text-sky-500" />,
      number: '72+',
      label: 'Partner Universities',
      sub: 'Top Ranked in Istanbul & Ankara'
    },
    {
      icon: <Award className="w-5 h-5 text-amber-500" />,
      number: 'Up to 75%',
      label: 'Guaranteed Scholarships',
      sub: 'Direct Institutional Quotas'
    },
    {
      icon: <Clock className="w-5 h-5 text-indigo-500" />,
      number: '24 Hours',
      label: 'Express Offer Letters',
      sub: 'Fast-Track Official Admissions'
    },
    {
      icon: <CheckCircle className="w-5 h-5 text-emerald-500" />,
      number: '98.4%',
      label: 'Admission & Visa Success',
      sub: 'Pre-vetted Documentation'
    },
    {
      icon: <Users className="w-5 h-5 text-violet-500" />,
      number: '15,000+',
      label: 'International Students',
      sub: 'Enrolled from 85+ Nations'
    },
    {
      icon: <Award className="w-5 h-5 text-amber-500" />,
      number: '100%',
      label: 'Official Partner Quotas',
      sub: 'Direct University Accreditations'
    }
  ];

  return (
    <div className="bg-slate-900 border-y border-slate-800 py-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-sky-950/40 via-indigo-950/40 to-slate-950/40 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-4">
          {stats.map((st, idx) => (
            <div key={idx} className="flex flex-col items-center text-center p-3 rounded-xl bg-slate-800/40 border border-slate-700/50 hover:border-sky-500/40 transition">
              <div className="p-2 rounded-lg bg-slate-800 text-sky-400 mb-2">
                {st.icon}
              </div>
              <span className="font-heading font-black text-2xl sm:text-3xl text-white tracking-tight">
                {st.number}
              </span>
              <span className="text-xs font-bold text-sky-300 mt-0.5">
                {st.label}
              </span>
              <span className="text-[10px] text-slate-400 mt-0.5">
                {st.sub}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
