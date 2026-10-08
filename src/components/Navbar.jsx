import React, { useState } from 'react';
import { 
  Sparkles, 
  Menu, 
  X, 
  PhoneCall, 
  ArrowRight,
  MessageSquare
} from 'lucide-react';
import { CONTACT_INFO } from '../data/futureLinkData';

export default function Navbar({ 
  onOpenApplyModal, 
  onOpenAdvisorModal 
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Exact navigation (Without "How It Works" as requested)
  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Study in Turkey', href: '#study-in-turkey' },
    { label: 'Universities', href: '#universities' },
    { label: 'Our Services', href: '#services' },
    { label: 'About Us', href: '#about-us' },
    { label: 'Contact', href: '#contact' },
  ];

  const whatsappDirectUrl = `https://wa.me/${CONTACT_INFO.whatsappRaw}?text=${encodeURIComponent(CONTACT_INFO.whatsappSuggestedMessage)}`;

  return (
    <header className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-xl border-b border-white/10 transition-all duration-300">
      
      {/* Top Futuristic Micro-Bar */}
      <div className="bg-gradient-to-r from-slate-950 via-sky-950/80 to-slate-950 border-b border-white/5 py-1.5 px-4 text-xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
            <span className="text-slate-400 text-[11px]">
              Simple • Attractive • Professional • Student-Focused
            </span>
          </div>

          <div className="flex items-center gap-4 text-slate-300 text-[11px]">
            <a
              href={whatsappDirectUrl}
              target="_blank"
              rel="noreferrer"
              className="hover:text-amber-400 flex items-center gap-1.5 transition text-[11px] font-semibold"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Contact Us on : {CONTACT_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo with official user-uploaded brand image fitted precisely */}
          <a href="#home" className="flex items-center gap-3 group py-1">
            <div className="relative flex items-center justify-center shrink-0">
              <div className="h-13 w-13 rounded-xl overflow-hidden bg-white p-1 border border-amber-400/40 group-hover:border-amber-400 transition-all duration-300 shadow-lg shadow-amber-400/15 flex items-center justify-center">
                <img
                  src="/logo.png"
                  alt="Future Link Education Logo"
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
              <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-slate-950 shadow-sm" />
            </div>

            <div className="flex flex-col justify-center">
              <span className="font-heading font-black text-xl tracking-tight text-white group-hover:text-amber-400 transition flex items-center gap-1.5 leading-none">
                FUTURE LINK
                <span className="text-[10px] uppercase font-black tracking-widest text-amber-400 bg-amber-400/10 border border-amber-400/30 px-1.5 py-0.5 rounded">
                  EDUCATION
                </span>
              </span>
              <span className="text-[10px] text-slate-400 font-semibold tracking-wide mt-1">
                Build Your Future in Turkey 🇹🇷
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs xl:text-sm font-semibold text-slate-300 hover:text-amber-400 transition tracking-tight hover:translate-y-[-1px]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Controls & Actions */}
          <div className="hidden md:flex items-center gap-3">
            
            {/* Talk to an Advisor Secondary Button */}
            <button
              onClick={onOpenAdvisorModal}
              className="px-3.5 py-2.5 rounded-xl text-xs font-bold text-slate-300 hover:text-white hover:bg-white/10 border border-white/10 transition cursor-pointer flex items-center gap-1.5"
            >
              <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
              <span>Talk to Advisor</span>
            </button>

            {/* Start Your Application Primary Button */}
            <button
              onClick={() => onOpenApplyModal()}
              className="px-5 py-2.5 bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-400 hover:from-amber-400 hover:to-yellow-300 text-slate-950 font-black text-xs sm:text-sm rounded-xl shadow-lg shadow-amber-500/25 transition transform hover:-translate-y-0.5 flex items-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-slate-950" />
              <span>Start Your Application</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-950" />
            </button>

          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => onOpenApplyModal()}
              className="px-3 py-1.5 bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 text-xs font-black rounded-lg"
            >
              Apply Now
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-300 hover:text-white bg-white/5 border border-white/10"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden glass-panel border-t border-white/10 px-5 pt-3 pb-6 space-y-4 shadow-2xl animate-slideDown">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-semibold text-slate-300 hover:text-amber-400 hover:bg-white/5 rounded-xl transition"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2 space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenApplyModal();
              }}
              className="w-full py-3 bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 font-black text-sm rounded-xl shadow-lg flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>Start Your Application</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAdvisorModal();
              }}
              className="w-full py-2.5 bg-white/5 border border-white/10 text-slate-200 font-bold text-xs rounded-xl flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
              <span>Talk to an Advisor</span>
            </button>
          </div>
        </div>
      )}

    </header>
  );
}
