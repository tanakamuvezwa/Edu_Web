import React from 'react';
import { 
  GraduationCap, 
  MapPin, 
  Phone, 
  Mail, 
  MessageSquare, 
  ShieldCheck, 
  Sparkles, 
  ArrowUp,
  ArrowRight
} from 'lucide-react';
import { CONTACT_INFO } from '../data/futureLinkData';

export default function Footer({ onOpenApplyModal }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Study in Turkey', href: '#study-in-turkey' },
    { label: 'Universities', href: '#universities' },
    { label: 'Our Services', href: '#services' },
    { label: 'About Us', href: '#about-us' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-white/10 text-xs">
      
      {/* High-Impact Futuristic Banner */}
      <div className="bg-gradient-to-r from-slate-950 via-sky-950/70 to-slate-950 py-12 px-4 sm:px-6 lg:px-8 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-1">
            <span className="text-amber-400 font-bold uppercase tracking-wider text-[11px] block">
              Study in Turkey • Build Your Future
            </span>
            <h3 className="font-heading font-black text-2xl sm:text-3xl text-white">
              Ready to take the next step toward your degree?
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm max-w-xl">
              Start your official application today or talk with our educational advisors on WhatsApp.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <button
              onClick={() => onOpenApplyModal()}
              className="px-6 py-3.5 bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-400 hover:from-amber-400 hover:to-yellow-300 text-slate-950 font-black text-xs sm:text-sm rounded-xl transition shadow-lg shadow-amber-500/20 flex items-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-slate-950" />
              <span>Start Your Application</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-950" />
            </button>

            <a
              href={`https://wa.me/${CONTACT_INFO.whatsappRaw}?text=${encodeURIComponent(CONTACT_INFO.whatsappSuggestedMessage)}`}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-3.5 glass-panel hover:bg-white/10 text-white font-bold text-xs rounded-xl border border-white/15 transition flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Column 1: Brand & Logo */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl overflow-hidden bg-white border border-amber-400/40 p-1 flex items-center justify-center shadow-md">
                <img src="/logo.png" alt="Logo" className="w-full h-full object-contain rounded-lg" />
              </div>
              <div>
                <span className="font-heading font-black text-lg text-white tracking-tight block">
                  FUTURE LINK
                </span>
                <span className="text-[10px] text-amber-400 font-bold uppercase tracking-widest block">
                  EDUCATION
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed">
              Future Link Education is an international education consultancy helping students take the next step toward studying and building their future in Turkey.
            </p>

            <div className="text-[11px] text-slate-400 flex items-center gap-1.5 pt-1">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Simple • Attractive • Professional • Student-Focused</span>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4">
              Website Navigation
            </h4>
            <ul className="space-y-2.5 text-slate-400 text-xs">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-amber-400 transition">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Core Services */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4">
              Our Services
            </h4>
            <ul className="space-y-2.5 text-slate-400 text-xs">
              <li><a href="#services" className="hover:text-white transition">University Admissions</a></li>
              <li><a href="#services" className="hover:text-white transition">Turkish Student Visa Guidance</a></li>
              <li><a href="#services" className="hover:text-white transition">Student Accommodation</a></li>
              <li><a href="#services" className="hover:text-white transition">Airport Welcome & Transfer</a></li>
              <li><a href="#services" className="hover:text-white transition">Residence Permit (İkamet)</a></li>
              <li><a href="#services" className="hover:text-white transition">Bank & SIM Card Assistance</a></li>
            </ul>
          </div>

          {/* Column 4: Contact & Office */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4">
              Contact Us on :
            </h4>
            <div className="space-y-3 text-slate-400 text-xs">
              <div className="text-amber-400 font-bold text-xs">
                Future Link Admissions Desk
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{CONTACT_INFO.officeLocation}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-white transition">{CONTACT_INFO.phone}</a>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={`https://wa.me/${CONTACT_INFO.whatsappRaw}?text=${encodeURIComponent(CONTACT_INFO.whatsappSuggestedMessage)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-emerald-400 transition"
                >
                  WhatsApp: {CONTACT_INFO.whatsappNumber}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-white transition">{CONTACT_INFO.email}</a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © 2026 Future Link Education. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Integrity • Student First • Professionalism • Transparency • Growth</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition cursor-pointer"
              title="Scroll to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
