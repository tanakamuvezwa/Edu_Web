import React from 'react';
import { 
  X, 
  MapPin, 
  Award, 
  Calendar, 
  Home, 
  CheckCircle2, 
  Sparkles, 
  DollarSign, 
  Building2, 
  ArrowRight,
  ShieldCheck,
  Globe2,
  MessageSquare
} from 'lucide-react';
import { CONTACT_INFO } from '../data/futureLinkData';

export default function UniversityDetailModal({ 
  university, 
  onClose, 
  onApply
}) {
  if (!university) return null;

  const directWhatsAppUrl = `https://wa.me/${CONTACT_INFO.whatsappRaw}?text=${encodeURIComponent(
    `Hello Future Link, I would like to inquire about tuition fees, scholarships, and admissions for ${university.name}.`
  )}`;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div className="bg-slate-900 w-full max-w-3xl rounded-3xl shadow-2xl border border-white/15 overflow-hidden relative animate-slideUp text-white">
        
        {/* Banner with University Photo */}
        <div className="relative h-56 sm:h-64 overflow-hidden">
          <img
            src={university.imageUrl}
            alt={university.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />

          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-slate-950/70 hover:bg-slate-950 text-white transition cursor-pointer border border-white/20"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-5 left-6 right-6">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-full bg-amber-400 text-slate-950 text-[11px] font-black">
                {university.ranking}
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-md text-white text-[11px] font-semibold">
                {university.city}, Türkiye 🇹🇷
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[11px] font-bold">
                {university.scholarshipRate}
              </span>
            </div>

            <h2 className="font-heading font-black text-2xl sm:text-3xl text-white">
              {university.name}
            </h2>
            <span className="text-xs text-slate-300 flex items-center gap-1.5 mt-1">
              <MapPin className="w-3.5 h-3.5 text-rose-400 shrink-0" />
              <span>Campus: {university.locationType}</span>
            </span>
          </div>
        </div>

        {/* Modal Body (Exact items from PDF Page 3) */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[65vh] overflow-y-auto text-xs">
          
          {/* 1. Introduction */}
          <div>
            <h4 className="text-[11px] font-bold text-amber-400 uppercase tracking-wider mb-1.5">
              Introduction
            </h4>
            <p className="text-slate-300 text-sm leading-relaxed">
              {university.tagline}
            </p>
          </div>

          {/* 2. Campus & Location */}
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
            <div className="flex items-start gap-2 text-slate-200">
              <Building2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block">Campus Infrastructure:</strong>
                <span className="text-slate-400">{university.campus}</span>
              </div>
            </div>
          </div>

          {/* 3. Programs & Degrees */}
          <div>
            <h4 className="text-[11px] font-bold text-amber-400 uppercase tracking-wider mb-2">
              Featured Programs & Degree Levels ({university.programsCount}+ Total)
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {university.popularPrograms.map((prog, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-slate-200 font-semibold"
                >
                  {prog}
                </span>
              ))}
            </div>
          </div>

          {/* 4. Tuition Fees & Deadlines */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-between">
              <div>
                <span className="text-[10px] text-amber-400 font-bold uppercase block mb-1">Tuition Fees & Scholarships</span>
                <div className="flex items-baseline gap-1">
                  <span className="font-heading font-black text-xl text-white">
                    Contact for more
                  </span>
                </div>
                <span className="text-[11px] text-emerald-400 font-semibold block mt-1">
                  Institutional scholarship quotas available via Future Link
                </span>
              </div>

              <div className="pt-3 mt-3 border-t border-white/10">
                <a
                  href={directWhatsAppUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 hover:text-emerald-300 transition"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Inquire Fees on WhatsApp →</span>
                </a>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <span className="text-[10px] text-slate-400 uppercase font-bold block mb-1">Application Deadlines</span>
              <div className="flex items-center gap-2 text-white font-bold text-sm">
                <Calendar className="w-4 h-4 text-sky-400 shrink-0" />
                <span>{university.deadlines}</span>
              </div>
              <span className="text-[11px] text-slate-400 block mt-1">
                Fast-track offer letters in 24–48 hours
              </span>
            </div>
          </div>

          {/* 5. Admission Requirements */}
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
            <h4 className="text-[11px] font-bold text-sky-400 uppercase tracking-wider mb-1">
              Admission Requirements
            </h4>
            <p className="text-slate-300 leading-relaxed">
              {university.requirements}
            </p>
          </div>

          {/* 6. Accommodation Information */}
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
            <h4 className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <Home className="w-4 h-4" />
              <span>Accommodation Information</span>
            </h4>
            <p className="text-slate-300 leading-relaxed">
              {university.accommodation}
            </p>
          </div>

        </div>

        {/* Modal Actions (Exact button: "Apply through Future Link") */}
        <div className="p-6 bg-slate-950 border-t border-white/10 flex items-center justify-between gap-4">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl border border-white/10 text-slate-400 hover:text-white hover:bg-white/5 text-xs font-bold transition cursor-pointer"
          >
            Close
          </button>

          <button
            onClick={() => {
              onClose();
              onApply(university.name);
            }}
            className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-400 text-slate-950 font-black text-xs sm:text-sm transition flex items-center gap-2 cursor-pointer shadow-lg shadow-amber-500/20"
          >
            <Sparkles className="w-4 h-4 text-slate-950" />
            <span>Apply through Future Link</span>
            <ArrowRight className="w-4 h-4 text-slate-950" />
          </button>
        </div>

      </div>
    </div>
  );
}
