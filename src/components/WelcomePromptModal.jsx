import React from 'react';
import { 
  Sparkles, 
  X, 
  ArrowRight, 
  GraduationCap, 
  PhoneCall, 
  CheckCircle2, 
  ShieldCheck 
} from 'lucide-react';
import { CONTACT_INFO } from '../data/futureLinkData';
import WhatsAppIcon from './WhatsAppIcon';

export default function WelcomePromptModal({ isOpen, onClose, onStartRegistration }) {
  if (!isOpen) return null;

  const directWhatsAppUrl = `https://wa.me/${CONTACT_INFO.whatsappRaw}?text=${encodeURIComponent(
    "Hello Future Link, I would like to inquire about university admissions and register to study in Turkey."
  )}`;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div className="bg-slate-900 border border-amber-400/40 w-full max-w-lg rounded-3xl shadow-2xl shadow-amber-400/10 overflow-hidden relative animate-slideUp text-white">
        
        {/* Glow Ambient Highlights */}
        <div className="absolute top-0 right-0 w-44 h-44 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-44 h-44 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Top Header Bar */}
        <div className="p-6 sm:p-7 pb-0 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition cursor-pointer border border-white/10"
            aria-label="Close welcome prompt"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3">
            <div className="h-14 w-14 rounded-2xl bg-white p-1 border border-amber-400/50 shadow-lg shadow-amber-400/20 flex items-center justify-center shrink-0">
              <img
                src="/logo.png"
                alt="Future Link Education"
                className="w-full h-full object-contain rounded-xl"
              />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-400/30 text-emerald-400 text-[10px] font-black uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                <span>Official Admissions Desk</span>
              </div>
              <h3 className="font-heading font-black text-xl sm:text-2xl text-white mt-1">
                Study in Turkey
              </h3>
              <span className="text-[11px] text-amber-300 font-serif italic tracking-wide block mt-0.5">
                Your Future, Our Link
              </span>
            </div>
          </div>
        </div>

        {/* Modal Main Body */}
        <div className="p-6 sm:p-7 space-y-5">
          <div>
            <h4 className="text-base sm:text-lg font-bold text-slate-100">
              Welcome to Future Link Education!
            </h4>
            <p className="mt-1.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
              Ready to take the next step toward your degree in Turkey? Register now for direct admissions or chat with our advisors today on WhatsApp.
            </p>
          </div>

          {/* Quick Perks */}
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span className="text-slate-200 text-[11px] font-medium">70+ Partner Universities</span>
            </div>
            <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
              <span className="text-slate-200 text-[11px] font-medium">100% English Programs</span>
            </div>
            <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
              <span className="text-slate-200 text-[11px] font-medium">Fast-Track Offer Letters</span>
            </div>
            <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
              <span className="text-slate-200 text-[11px] font-medium">Full Visa & Dorm Support</span>
            </div>
          </div>

          {/* Action 1: Register for Admissions */}
          <button
            onClick={() => {
              onClose();
              onStartRegistration();
            }}
            className="w-full py-3.5 bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-400 hover:from-amber-400 hover:to-yellow-300 text-slate-950 font-black text-sm rounded-2xl shadow-lg shadow-amber-500/25 transition transform hover:-translate-y-0.5 flex items-center justify-center gap-2.5 cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-slate-950" />
            <span>Register for Admissions Now</span>
            <ArrowRight className="w-4 h-4 text-slate-950" />
          </button>

          {/* Action 2: Direct WhatsApp Chat */}
          <a
            href={directWhatsAppUrl}
            target="_blank"
            rel="noreferrer"
            className="w-full py-3.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-sm rounded-2xl shadow-lg shadow-emerald-500/20 transition flex items-center justify-center gap-2.5"
          >
            <WhatsAppIcon className="w-4 h-4 text-slate-950" />
            <span>Chat with us on WhatsApp</span>
            <ArrowRight className="w-4 h-4 text-slate-950" />
          </a>

          {/* Contact Details Footnote */}
          <div className="pt-2 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400 gap-2">
            <div className="flex items-center gap-2">
              <span className="text-slate-400">Contact to:</span>
              <a 
                href={directWhatsAppUrl} 
                target="_blank" 
                rel="noreferrer" 
                title="Open WhatsApp (+90 537 058 96 32)"
                className="p-1.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition hover:scale-110 shadow-md inline-flex items-center justify-center cursor-pointer"
                aria-label="Contact on WhatsApp"
              >
                <WhatsAppIcon className="w-4 h-4 text-slate-950" />
              </a>
            </div>

            <button
              onClick={onClose}
              className="text-slate-400 hover:text-white transition font-medium cursor-pointer"
            >
              Explore Universities First →
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
