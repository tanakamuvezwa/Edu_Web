import React, { useState } from 'react';
import { 
  X, 
  Briefcase, 
  Sparkles, 
  TrendingUp, 
  ShieldCheck, 
  Award, 
  Users, 
  Building2, 
  CheckCircle2, 
  FileDown, 
  PhoneCall, 
  Send
} from 'lucide-react';
import { PARTNER_PITCH_METRICS } from '../data/futureLinkData';

export default function AgencyPitchModal({ isOpen, onClose, onShowToast }) {
  const [partnerType, setPartnerType] = useState('agent');
  const [formData, setFormData] = useState({
    agencyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    country: '',
    annualStudents: '10–50'
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (onShowToast) {
      onShowToast({
        type: 'success',
        message: 'Partnership Inquiry Received! Our Agency Director will reach out within 12 hours.'
      });
    }
  };

  const handleDownloadDeck = () => {
    if (onShowToast) {
      onShowToast({
        type: 'info',
        message: 'Downloading Future Link 2026/2027 Institutional Partnership Prospectus (PDF)...'
      });
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div className="bg-white w-full max-w-4xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden relative animate-slideUp">
        
        {/* Header */}
        <div className="p-6 sm:p-8 bg-gradient-to-r from-slate-900 via-sky-950 to-indigo-950 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 border border-sky-400/30 text-xs font-bold uppercase tracking-wider mb-2">
            <Briefcase className="w-3.5 h-3.5 text-sky-400" />
            <span>Institutional & B2B Partner Dossier</span>
          </div>

          <h2 className="font-heading font-black text-2xl sm:text-3xl text-white">
            Future Link Partner Pitch & Agency Ecosystem
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm mt-1 max-w-2xl">
            Partner with Turkeys leading university admissions representative. Connect your students to 70+ top accredited universities with guaranteed partial scholarships and fastest turnarounds.
          </p>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[75vh] overflow-y-auto">
          
          {/* Executive Metrics Grid */}
          <div>
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
              Platform Traction & Representative Performance
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center">
                <span className="text-xs text-slate-500 font-semibold block">Partner Unis</span>
                <span className="font-heading font-black text-2xl text-slate-900">{PARTNER_PITCH_METRICS.partnerUniversities}</span>
                <span className="text-[10px] text-slate-400">Direct MOUs</span>
              </div>
              <div className="p-4 rounded-xl bg-sky-50 border border-sky-200 text-center">
                <span className="text-xs text-sky-700 font-semibold block">Acceptance Rate</span>
                <span className="font-heading font-black text-2xl text-sky-700">{PARTNER_PITCH_METRICS.visaSuccessRate}</span>
                <span className="text-[10px] text-sky-600">Pre-vetted Filings</span>
              </div>
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-center">
                <span className="text-xs text-emerald-700 font-semibold block">Grant Funds</span>
                <span className="font-heading font-black text-2xl text-emerald-700">{PARTNER_PITCH_METRICS.scholarshipFundsAllocated}</span>
                <span className="text-[10px] text-emerald-600">Total Awarded</span>
              </div>
              <div className="p-4 rounded-xl bg-purple-50 border border-purple-200 text-center">
                <span className="text-xs text-purple-700 font-semibold block">Offer SLA</span>
                <span className="font-heading font-black text-2xl text-purple-700">{PARTNER_PITCH_METRICS.avgOfferTurnaroundHours}</span>
                <span className="text-[10px] text-purple-600">Direct Board Link</span>
              </div>
            </div>
          </div>

          {/* 3 Core Value Propositions for Partners */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="w-9 h-9 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center mb-3">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h4 className="font-heading font-bold text-sm text-slate-900">Highest Commission Payouts</h4>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Generous institutional revenue sharing on enrolled students, deposited promptly to your international agency account upon student deposit confirmation.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center mb-3">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="font-heading font-bold text-sm text-slate-900">Dedicated Portal & White-Label</h4>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Real-time tracking dashboard for your counselors. Monitor application stages from document upload to official letter issuance within seconds.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="w-9 h-9 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center mb-3">
                <Users className="w-5 h-5" />
              </div>
              <h4 className="font-heading font-bold text-sm text-slate-900">Ground Support in Istanbul</h4>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Protect your agency reputation: we provide airport pick-up, student dormitory placement, Turkish residency permit (İkamet), and MEB diploma equivalency.
              </p>
            </div>
          </div>

          {/* Partner Registration Form */}
          <div className="rounded-2xl bg-slate-50 border border-slate-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h4 className="font-heading font-bold text-base text-slate-900">
                  Become a Future Link Certified Partner Agency
                </h4>
                <p className="text-xs text-slate-500">
                  Register your educational consultancy or school counseling office.
                </p>
              </div>
              <button
                type="button"
                onClick={handleDownloadDeck}
                className="px-3.5 py-1.5 rounded-xl bg-white border border-slate-300 text-xs font-bold text-slate-700 hover:bg-slate-100 transition flex items-center gap-1.5 cursor-pointer shadow-xs"
              >
                <FileDown className="w-4 h-4 text-sky-600" />
                <span>Download Prospectus</span>
              </button>
            </div>

            {submitted ? (
              <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-2">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                <h5 className="font-bold text-base text-emerald-950">Partnership Registration Submitted</h5>
                <p className="text-xs text-emerald-800 max-w-md mx-auto">
                  Thank you! Our Institutional Partnerships Team will contact you via WhatsApp and email to complete contract signing and agency portal onboarding.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-[11px] font-bold text-slate-600 mb-1">Agency / School Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Global Scholars Consultancy"
                    value={formData.agencyName}
                    onChange={(e) => setFormData({ ...formData, agencyName: e.target.value })}
                    className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-600 mb-1">Director / Contact Person</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Elena Rostova"
                    value={formData.contactPerson}
                    onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                    className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-600 mb-1">Official Email</label>
                  <input
                    type="email"
                    required
                    placeholder="director@agency.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-600 mb-1">WhatsApp / Phone with Country Code</label>
                  <input
                    type="tel"
                    required
                    placeholder="+44 7911 123456"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-600 mb-1">Operating Country</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Kazakhstan, Nigeria, UAE, UK"
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-600 mb-1">Estimated Annual Student Placements</label>
                  <select
                    value={formData.annualStudents}
                    onChange={(e) => setFormData({ ...formData, annualStudents: e.target.value })}
                    className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  >
                    <option value="5–15">5 – 15 Students / Year</option>
                    <option value="15–50">15 – 50 Students / Year</option>
                    <option value="50–150">50 – 150 Students / Year</option>
                    <option value="150+">150+ Students (Tier-1 Partner)</option>
                  </select>
                </div>

                <div className="sm:col-span-2 pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 bg-gradient-to-r from-sky-600 to-indigo-600 hover:from-sky-500 hover:to-indigo-500 text-white font-bold text-xs sm:text-sm rounded-xl shadow-md transition flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Agency Partnership Application</span>
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

        {/* Footer */}
        <div className="p-5 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          <span className="text-xs text-slate-500 font-medium">
            Future Link International Education Agency Portal • ICEF Certified Agency
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-700 text-xs font-bold transition cursor-pointer"
          >
            Close Dossier
          </button>
        </div>

      </div>
    </div>
  );
}
