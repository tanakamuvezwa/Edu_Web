import React, { useState } from 'react';
import { X, MessageSquare, Phone, Mail, ArrowRight, CheckCircle2, Sparkles, Send } from 'lucide-react';
import { CONTACT_INFO } from '../data/futureLinkData';

export default function TalkToAdvisorModal({ isOpen, onClose, onShowToast }) {
  const [studentName, setStudentName] = useState('');
  const [studentPhone, setStudentPhone] = useState('');
  const [topic, setTopic] = useState('Choosing a University & Major');
  const [sent, setSent] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    if (onShowToast) {
      onShowToast({
        type: 'success',
        message: 'Advisor request submitted! An educational counselor will WhatsApp you.'
      });
    }
  };

  const directWhatsAppUrl = `https://wa.me/${CONTACT_INFO.whatsappRaw}?text=${encodeURIComponent(CONTACT_INFO.whatsappSuggestedMessage)}`;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div className="bg-slate-900 w-full max-w-lg rounded-3xl shadow-2xl border border-white/15 overflow-hidden relative animate-slideUp text-white">
        
        {/* Header */}
        <div className="p-6 bg-gradient-to-r from-slate-950 via-slate-900 to-sky-950 border-b border-white/10 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 mb-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
              Future Link Admissions Desk
            </span>
          </div>

          <h3 className="font-heading font-black text-2xl text-white">
            Talk to an Advisor
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            Free 1-on-1 personalized educational guidance for international students.
          </p>
        </div>

        {/* Body */}
        <div className="p-6 space-y-5">
          
          {/* Quick 1-Click WhatsApp Option */}
          <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30">
            <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider block mb-1">
              Fastest Option • Instant Response
            </span>
            <h4 className="font-heading font-bold text-base text-white">
              Connect Directly on WhatsApp
            </h4>
            <p className="text-xs text-slate-300 mt-1">
              "{CONTACT_INFO.whatsappSuggestedMessage}"
            </p>

            <a
              href={directWhatsAppUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-3 w-full py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs rounded-xl transition flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20"
            >
              <MessageSquare className="w-4 h-4 text-slate-950" />
              <span>Open Chat on WhatsApp Now</span>
              <ArrowRight className="w-4 h-4 text-slate-950" />
            </a>
          </div>

          <div className="relative flex py-1 items-center">
            <div className="flex-grow border-t border-white/10"></div>
            <span className="flex-shrink mx-4 text-slate-500 text-[10px] uppercase font-bold tracking-wider">Or Request a Callback</span>
            <div className="flex-grow border-t border-white/10"></div>
          </div>

          {sent ? (
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center space-y-2">
              <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
              <h4 className="font-bold text-base text-white">Callback Request Confirmed</h4>
              <p className="text-xs text-slate-400">
                Our educational advisor will message you on WhatsApp at <strong>{studentPhone}</strong>.
              </p>
              <button
                onClick={onClose}
                className="mt-2 text-xs font-bold text-amber-400 hover:underline"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Tanaka"
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">WhatsApp / Phone Number</label>
                <input
                  type="tel"
                  required
                  placeholder="+263 77 123 4567"
                  value={studentPhone}
                  onChange={(e) => setStudentPhone(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">What would you like help with?</label>
                <select
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  className="w-full bg-slate-800 border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
                >
                  <option value="Choosing a University & Major">Choosing a University & Major</option>
                  <option value="Scholarship Evaluation">Scholarship Evaluation (Up to 75%)</option>
                  <option value="Turkish Student Visa Guidance">Turkish Student Visa Guidance</option>
                  <option value="Accommodation & Dormitories">Accommodation & Dormitories</option>
                  <option value="Document Requirements">Document Requirements</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-400 hover:to-yellow-300 text-slate-950 font-black text-xs rounded-xl transition shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-3.5 h-3.5 text-slate-950" />
                <span>Request Free Advisory Call</span>
              </button>
            </form>
          )}

        </div>

      </div>
    </div>
  );
}
