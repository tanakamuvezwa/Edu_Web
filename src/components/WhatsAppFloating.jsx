import React, { useState } from 'react';
import { MessageSquare, X, Send, Sparkles, PhoneCall } from 'lucide-react';
import { CONTACT_INFO } from '../data/futureLinkData';

export default function WhatsAppFloating() {
  const [isOpen, setIsOpen] = useState(false);

  const directUrl = `https://wa.me/${CONTACT_INFO.whatsappRaw}?text=${encodeURIComponent(CONTACT_INFO.whatsappSuggestedMessage)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      
      {/* Expanded Quick Chat Window */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 glass-panel rounded-3xl shadow-2xl border border-emerald-500/40 overflow-hidden animate-slideUp text-white">
          <div className="p-4 bg-gradient-to-r from-emerald-600 to-teal-700 text-white flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl overflow-hidden bg-white/10 p-1 border border-white/20">
                <img src="/logo.jpg" alt="Logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <h4 className="font-heading font-black text-sm text-white">Chat with Future Link</h4>
                <span className="text-[10px] text-emerald-100 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-300 animate-ping" />
                  <span>Advisors Online • Avg reply: &lt; 5 mins</span>
                </span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full hover:bg-white/20 text-white transition cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="p-4 bg-slate-900/95 space-y-3">
            <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-xs text-slate-300">
              <span className="text-[10px] text-amber-400 font-bold uppercase block mb-1">
                Suggested Inquiry:
              </span>
              "{CONTACT_INFO.whatsappSuggestedMessage}"
            </div>

            <a
              href={directUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full py-3.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs rounded-xl transition shadow-lg shadow-emerald-500/25 flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-slate-950" />
              <span>Open in WhatsApp</span>
              <Send className="w-3.5 h-3.5 text-slate-950" />
            </a>

            <div className="text-[10px] text-slate-400 text-center">
              Official Admissions Line: {CONTACT_INFO.whatsappNumber}
            </div>
          </div>
        </div>
      )}

      {/* Floating Button (Exact label from PDF Page 5: [ Chat with Future Link ]) */}
      <div className="flex items-center gap-2">
        <a
          href={directUrl}
          target="_blank"
          rel="noreferrer"
          className="hidden sm:inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-black text-xs shadow-xl shadow-emerald-500/30 transition transform hover:scale-105 cursor-pointer glow-blue"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-slate-950 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-slate-950" />
          </span>
          <span>Chat with Future Link</span>
          <MessageSquare className="w-4 h-4 text-slate-950" />
        </a>

        {/* Mobile circular trigger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="sm:hidden w-14 h-14 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center shadow-xl cursor-pointer"
          aria-label="Open chat"
        >
          <MessageSquare className="w-6 h-6" />
        </button>
      </div>

    </div>
  );
}
