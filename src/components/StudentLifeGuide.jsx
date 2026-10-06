import React from 'react';
import { 
  Home, 
  Building, 
  Utensils, 
  Bus, 
  Wifi, 
  ShieldCheck, 
  FileCheck2, 
  Award, 
  CheckCircle2,
  DollarSign
} from 'lucide-react';
import { LIVING_COSTS, CURRENCIES } from '../data/futureLinkData';

export default function StudentLifeGuide({ currentCurrency }) {
  const iconMap = {
    Home: <Home className="w-5 h-5 text-sky-500" />,
    Building: <Building className="w-5 h-5 text-indigo-500" />,
    Utensils: <Utensils className="w-5 h-5 text-amber-500" />,
    Bus: <Bus className="w-5 h-5 text-emerald-500" />,
    Wifi: <Wifi className="w-5 h-5 text-blue-500" />,
    ShieldCheck: <ShieldCheck className="w-5 h-5 text-rose-500" />,
  };

  return (
    <section className="py-16 sm:py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-2">
            <Building className="w-3.5 h-3.5 text-emerald-600" />
            <span>Student Life & Practical Living</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-slate-900 tracking-tight">
            Useful Information About Living & Studying in Turkey
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            World-class European education at a fraction of the cost of the UK, EU, or North America. 
            Here is your realistic breakdown of monthly expenses and student rights in Istanbul.
          </p>
        </div>

        {/* Living Cost Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {LIVING_COSTS.map((cost, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-slate-50 border border-slate-200/90 flex items-center justify-between hover:border-sky-500/50 transition shadow-xs"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center shrink-0">
                  {iconMap[cost.icon]}
                </div>
                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-slate-900">{cost.item}</h4>
                  <span className="text-[11px] text-slate-500">Estimated Average</span>
                </div>
              </div>

              <div className="text-right">
                <span className="font-heading font-black text-sm sm:text-base text-sky-700 block">
                  {cost.cost}
                </span>
                <span className="text-[10px] text-emerald-600 font-semibold">Affordable</span>
              </div>
            </div>
          ))}
        </div>

        {/* 3 Pillars of Security: Bologna, Ikamet, Denklik */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="p-6 rounded-2xl bg-gradient-to-b from-sky-50 to-white border border-sky-200/80 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-sky-600 text-white flex items-center justify-center mb-4">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-black text-lg text-slate-900">
              European Bologna Process & ECTS
            </h3>
            <p className="mt-2 text-xs text-slate-600 leading-relaxed">
              Turkish university credits are 100% compatible with the European Credit Transfer System (ECTS). 
              Graduates receive the European Diploma Supplement, allowing seamless progression to Master/PhD in Germany, France, or UK.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-b from-indigo-50 to-white border border-indigo-200/80 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-black text-lg text-slate-900">
              Student Residence Permit (İkamet)
            </h3>
            <p className="mt-2 text-xs text-slate-600 leading-relaxed">
              Once enrolled, international students receive a legal Turkish Student Residence Card (İkametgah) 
              valid for the duration of studies, granting access to subsidized healthcare, banking, and border entry.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-b from-emerald-50 to-white border border-emerald-200/80 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center mb-4">
              <FileCheck2 className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-black text-lg text-slate-900">
              High School Equivalency (Denklik)
            </h3>
            <p className="mt-2 text-xs text-slate-600 leading-relaxed">
              Issued by the Turkish Ministry of National Education (MEB). Future Link handles the certified Turkish translation, 
              notarization, and appointment booking so your high school certification is recognized with zero hassle.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
