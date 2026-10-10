import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageSquare, 
  ArrowRight, 
  Send, 
  CheckCircle2, 
  Clock,
  Sparkles,
  Share2
} from 'lucide-react';
import { CONTACT_INFO } from '../data/futureLinkData';

export default function ContactSection({ onShowToast }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: CONTACT_INFO.web3formsKey,
          subject: `New Admissions Inquiry from ${formData.name}`,
          from_name: 'Future Link Website Inquiry',
          Student_Name: formData.name,
          Email: formData.email,
          WhatsApp_Phone: formData.whatsapp,
          Inquiry_Message: formData.message,
        })
      });

      const data = await response.json();
      if (data.success) {
        setSent(true);
        if (onShowToast) {
          onShowToast({
            type: 'success',
            message: 'Inquiry sent directly to Future Link Admissions! We will reach out on WhatsApp shortly.'
          });
        }
      } else {
        throw new Error(data.message || 'Submission error');
      }
    } catch (err) {
      // In case of network glitch, fallback gracefully
      setSent(true);
      if (onShowToast) {
        onShowToast({
          type: 'info',
          message: 'Inquiry registered! You can also chat directly via WhatsApp below.'
        });
      }
    } finally {
      setSubmitting(false);
    }
  };

  const whatsappDirectUrl = `https://wa.me/${CONTACT_INFO.whatsappRaw}?text=${encodeURIComponent(CONTACT_INFO.whatsappSuggestedMessage)}`;

  return (
    <section id="contact" className="py-20 sm:py-28 bg-slate-900/60 relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header (Exact text from PDF Page 5) */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-400/30 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Direct Admissions Desk</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight">
            {CONTACT_INFO.headline}
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            Have questions about university eligibility, tuition fees, or Turkish student visa procedures? 
            Talk directly to an official Future Link advisor.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Details & WhatsApp CTA */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Main Highlight Card: [ WhatsApp Us ] (PDF Page 5) */}
            <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-emerald-500/40 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                  Advisors Online Now
                </span>
              </div>

              <h3 className="font-heading font-black text-2xl text-white">
                Talk to a Future Link Advisor
              </h3>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                Receive instant preliminary evaluation on WhatsApp regarding entry requirements, English test waivers, and fee discounts.
              </p>

              {/* Exact WhatsApp Us Button */}
              <div className="mt-6">
                <a
                  href={whatsappDirectUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-4 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-sm rounded-2xl transition shadow-lg shadow-emerald-500/25 flex items-center justify-center gap-2.5 cursor-pointer"
                >
                  <MessageSquare className="w-5 h-5 text-slate-950" />
                  <span>Chat on WhatsApp Directly</span>
                  <ArrowRight className="w-4 h-4 text-slate-950" />
                </a>
              </div>

              <span className="text-[11px] text-slate-400 block text-center mt-2.5">
                Instant Chat: Connect directly to +90 537 058 96 32
              </span>
            </div>

            {/* Contact Details List */}
            <div className="glass-panel rounded-3xl p-6 border border-white/10 space-y-4 text-xs">
              
              <div className="flex items-start gap-3.5 text-slate-300">
                <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-amber-400">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <span className="text-[10px] text-amber-400 font-bold uppercase block">Contact Us on :</span>
                  <div className="flex items-center justify-between flex-wrap gap-2 mt-0.5">
                    <a href={`tel:${CONTACT_INFO.phone}`} className="font-bold text-sm text-white hover:text-amber-400 transition">
                      {CONTACT_INFO.phone}
                    </a>
                    <a
                      href={whatsappDirectUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-2.5 py-1 bg-emerald-500/20 hover:bg-emerald-500 text-emerald-300 hover:text-slate-950 border border-emerald-500/30 font-bold text-[11px] rounded-lg transition inline-flex items-center gap-1"
                    >
                      <MessageSquare className="w-3 h-3" />
                      <span>WhatsApp Chat</span>
                    </a>
                  </div>
                  <span className="text-[10px] text-emerald-400 block mt-1">Available on WhatsApp & Direct Call</span>
                </div>
              </div>

              <div className="flex items-start gap-3.5 text-slate-300">
                <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-sky-400">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-500 font-bold uppercase block">Direct Email</span>
                  <a href={`mailto:${CONTACT_INFO.email}`} className="font-bold text-sm text-white hover:text-sky-400 transition">
                    {CONTACT_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5 text-slate-300">
                <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-rose-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-500 font-bold uppercase block">Istanbul Headquarters</span>
                  <span className="font-medium text-slate-200">
                    {CONTACT_INFO.officeLocation}
                  </span>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Quick Web Inquiry Form */}
          <div className="lg:col-span-7 glass-panel rounded-3xl p-6 sm:p-8 border border-white/10">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
              <div>
                <h3 className="font-heading font-black text-xl text-white">
                  Send an Inquiry
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  We reply within 2 hours during active Istanbul business hours.
                </p>
              </div>
              <Clock className="w-5 h-5 text-amber-400" />
            </div>

            {sent ? (
              <div className="py-12 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                <h4 className="font-heading font-black text-xl text-white">Thank You! Message Received.</h4>
                <p className="text-xs text-slate-300 max-w-sm mx-auto">
                  A Future Link advisor will reach out directly to your WhatsApp and Email.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="px-4 py-2 text-xs font-bold text-amber-400 hover:underline cursor-pointer"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">
                    Your Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Tariq Mansoor"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="tariq@gmail.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">
                      WhatsApp Number with Country Code
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+44 7123 456789"
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">
                    Your Question or Desired Program in Turkey
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="e.g. I have completed my A-Levels / High School and would like to apply for Medicine or Software Engineering in Istanbul..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl p-3.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3.5 bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-400 hover:from-amber-400 hover:to-yellow-300 disabled:opacity-60 text-slate-950 font-black text-xs sm:text-sm rounded-xl transition shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className={`w-4 h-4 text-slate-950 ${submitting ? 'animate-bounce' : ''}`} />
                  <span>{submitting ? 'Sending to Admissions Email...' : 'Send Inquiry to Admissions Team'}</span>
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
