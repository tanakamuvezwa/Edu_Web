import React, { useState } from 'react';
import { 
  X, 
  Sparkles, 
  Upload, 
  CheckCircle2, 
  Building2, 
  ArrowRight, 
  Phone, 
  Mail, 
  User, 
  Globe2, 
  Calendar,
  FileText,
  Send,
  MessageSquare
} from 'lucide-react';
import { UNIVERSITIES, CONTACT_INFO } from '../data/futureLinkData';

export default function ApplicationModal({ 
  isOpen, 
  onClose, 
  defaultUniversity = '', 
  defaultProgram = '', 
  onShowToast 
}) {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [appReference, setAppReference] = useState('');

  // Exact fields specified in PDF Page 3:
  const [formData, setFormData] = useState({
    // Personal Information
    fullName: '',
    dateOfBirth: '',
    nationality: 'Nigeria',
    countryOfResidence: 'Nigeria',
    fatherName: '',
    motherName: '',

    // Contact
    whatsappNumber: '',
    email: '',

    // Education
    highestQualification: 'High School / Secondary Diploma',
    graduationYear: '2025',
    gpaGrade: '82%',

    // Study Preference
    studyLevel: "Bachelor's",
    preferredField: defaultProgram || 'Medicine',
    preferredCity: 'Istanbul',
    preferredLanguage: 'English',
    preferredUniversity: defaultUniversity || 'Istanbul Okan University',

    // Documents
    passportUploaded: false,
    passportFileName: '',
    certificateUploaded: false,
    certificateFileName: '',
    transcriptUploaded: false,
    transcriptFileName: '',
    otherDocumentsUploaded: false,
    otherFileName: ''
  });

  const [submitting, setSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    const randomCode = 'FL-' + Math.floor(100000 + Math.random() * 900000);
    setAppReference(randomCode);

    try {
      await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: CONTACT_INFO.web3formsKey,
          subject: `[NEW APPLICATION] ${randomCode} - ${formData.fullName} (${formData.preferredUniversity})`,
          from_name: 'Future Link Admissions Portal',
          Application_Reference: randomCode,
          Full_Name: formData.fullName,
          Email: formData.email,
          Phone_WhatsApp: formData.phone,
          Date_of_Birth: formData.dob || 'Not provided',
          Nationality: formData.nationality,
          Passport_Number: formData.passportNumber || 'Pending',
          Target_University: formData.preferredUniversity,
          Study_Level: formData.studyLevel,
          Preferred_Program: formData.preferredField,
          Language_of_Instruction: formData.preferredLanguage,
          High_School_Grade: formData.highSchoolGrade || 'Pending',
          Graduation_Year: formData.graduationYear || '2025/2026',
          Passport_File: formData.passportUploaded ? formData.passportFileName : 'Pending via WhatsApp',
          Certificate_File: formData.certificateUploaded ? formData.certificateFileName : 'Pending via WhatsApp',
          Transcript_File: formData.transcriptUploaded ? formData.transcriptFileName : 'Pending via WhatsApp',
          Other_File: formData.otherDocumentsUploaded ? formData.otherFileName : 'None',
        })
      });
    } catch (err) {
      console.warn('Web3Forms background dispatch:', err);
    } finally {
      setSubmitting(false);
      setSubmitted(true);
      if (onShowToast) {
        onShowToast({
          type: 'success',
          message: 'Application Submitted & Dispatched to Admissions! Ref: ' + randomCode
        });
      }
    }
  };

  const resetForm = () => {
    setSubmitted(false);
    setStep(1);
    onClose();
  };

  const handleDocUpload = (field, e) => {
    if (e.target.files && e.target.files[0]) {
      const fileName = e.target.files[0].name;
      setFormData(prev => ({
        ...prev,
        [`${field}Uploaded`]: true,
        [`${field}FileName`]: fileName
      }));
      if (onShowToast) {
        onShowToast({
          type: 'success',
          message: `${fileName} attached successfully.`
        });
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div className="bg-slate-900 w-full max-w-3xl rounded-3xl shadow-2xl border border-white/15 overflow-hidden relative animate-slideUp text-white">
        
        {/* Header with Official Logo */}
        <div className="p-6 sm:p-7 bg-gradient-to-r from-slate-950 via-slate-900 to-sky-950 border-b border-white/10 relative">
          <button
            onClick={resetForm}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3 mb-2">
            <div className="w-9 h-9 rounded-xl overflow-hidden bg-white border border-amber-400/40 p-0.5 flex items-center justify-center">
              <img src="/logo.png" alt="Logo" className="w-full h-full object-contain rounded-lg" />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
              Future Link Education Application Portal
            </span>
          </div>

          <h2 className="font-heading font-black text-2xl sm:text-3xl text-white">
            Start Your Future Link Application
          </h2>
          <p className="text-slate-400 text-xs mt-1">
            Official university admissions in Turkey • 24–48h fast-track offer turnaround.
          </p>

          {!submitted && (
            <div className="mt-4 flex items-center gap-2">
              <div className={`h-1.5 flex-1 rounded-full ${step >= 1 ? 'bg-amber-400' : 'bg-white/20'}`} />
              <div className={`h-1.5 flex-1 rounded-full ${step >= 2 ? 'bg-amber-400' : 'bg-white/20'}`} />
              <div className={`h-1.5 flex-1 rounded-full ${step >= 3 ? 'bg-amber-400' : 'bg-white/20'}`} />
            </div>
          )}
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto">
          {submitted ? (
            /* Confirmation Screen (Exact Confirmation from PDF Page 3) */
            <div className="text-center py-8 space-y-6 animate-fadeIn">
              <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-xl">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block">
                  Application Successfully Filed
                </span>
                <h3 className="font-heading font-black text-2xl text-white mt-1">
                  Thank you! Your application has been received.
                </h3>
                <p className="text-slate-300 text-sm max-w-lg mx-auto mt-2 leading-relaxed">
                  The Future Link Admissions Team will contact you shortly to review your admission dossier and program options.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 max-w-sm mx-auto">
                <span className="text-[10px] text-slate-400 uppercase font-bold block">Application Tracking ID</span>
                <span className="font-heading font-black text-2xl text-amber-400 tracking-wider block mt-0.5">
                  {appReference}
                </span>
                <span className="text-[11px] text-slate-400 block mt-1">
                  Applicant: <strong>{formData.fullName}</strong>
                </span>
                <span className="text-[10px] text-emerald-400 block mt-1">
                  Contact Us on : {CONTACT_INFO.phone}
                </span>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={`https://wa.me/${CONTACT_INFO.whatsappRaw}?text=${encodeURIComponent(
                    `Hello Future Link, my name is ${formData.fullName} and my application reference is ${appReference}. I applied for ${formData.preferredField} (${formData.studyLevel}).`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition shadow-lg flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 text-slate-950" />
                  <span>Notify Us on WhatsApp Now</span>
                </a>

                <button
                  onClick={resetForm}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl border border-white/10 hover:bg-white/5 text-slate-300 font-bold text-xs transition cursor-pointer"
                >
                  Close & Back to Site
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* STEP 1: Personal Information & Contact (PDF Page 3) */}
              {step === 1 && (
                <div className="space-y-4 animate-fadeIn">
                  <div className="flex items-center justify-between pb-2 border-b border-white/10">
                    <h3 className="font-heading font-bold text-base text-white">
                      Part 1: Personal & Contact Information
                    </h3>
                    <span className="text-xs text-amber-400 font-bold">Step 1 of 3</span>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">
                      Full Name (as in International Passport) <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Tanaka Muvezwa"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">
                        Date of Birth <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="date"
                        required
                        value={formData.dateOfBirth}
                        onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">
                        Nationality <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Zimbabwean / Nigerian / Canadian"
                        value={formData.nationality}
                        onChange={(e) => setFormData({ ...formData, nationality: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">
                        Country of Residence <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Zimbabwe / UAE"
                        value={formData.countryOfResidence}
                        onChange={(e) => setFormData({ ...formData, countryOfResidence: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">
                        Father Name
                      </label>
                      <input
                        type="text"
                        placeholder="Father's full name"
                        value={formData.fatherName}
                        onChange={(e) => setFormData({ ...formData, fatherName: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">
                        Mother Name
                      </label>
                      <input
                        type="text"
                        placeholder="Mother's full name"
                        value={formData.motherName}
                        onChange={(e) => setFormData({ ...formData, motherName: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400"
                      />
                    </div>
                  </div>

                  {/* Contact Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">
                        WhatsApp Number with Country Code <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+263 77 123 4567"
                        value={formData.whatsappNumber}
                        onChange={(e) => setFormData({ ...formData, whatsappNumber: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">
                        Email Address <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="student@gmail.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400"
                      />
                    </div>
                  </div>

                  <div className="pt-4 flex justify-end">
                    <button
                      type="button"
                      disabled={!formData.fullName || !formData.whatsappNumber || !formData.email}
                      onClick={() => setStep(2)}
                      className="px-6 py-2.5 bg-gradient-to-r from-amber-500 to-yellow-400 disabled:opacity-40 text-slate-950 font-black text-xs sm:text-sm rounded-xl transition flex items-center gap-2 cursor-pointer shadow-md"
                    >
                      <span>Continue to Education & Preferences</span>
                      <ArrowRight className="w-4 h-4 text-slate-950" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2: Education & Study Preferences (PDF Page 3) */}
              {step === 2 && (
                <div className="space-y-4 animate-fadeIn">
                  <div className="flex items-center justify-between pb-2 border-b border-white/10">
                    <h3 className="font-heading font-bold text-base text-white">
                      Part 2: Education Background & Study Preference
                    </h3>
                    <span className="text-xs text-amber-400 font-bold">Step 2 of 3</span>
                  </div>

                  {/* Education */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">
                        Highest Qualification
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. High School Diploma / A-Levels / WAEC"
                        value={formData.highestQualification}
                        onChange={(e) => setFormData({ ...formData, highestQualification: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">
                        Graduation Year
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. 2025"
                        value={formData.graduationYear}
                        onChange={(e) => setFormData({ ...formData, graduationYear: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">
                        GPA / Average Grade
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. 80% or 3.5/4.0"
                        value={formData.gpaGrade}
                        onChange={(e) => setFormData({ ...formData, gpaGrade: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400"
                      />
                    </div>
                  </div>

                  {/* Study Preference */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">
                        Study Level <span className="text-rose-400">*</span>
                      </label>
                      <select
                        value={formData.studyLevel}
                        onChange={(e) => setFormData({ ...formData, studyLevel: e.target.value })}
                        className="w-full bg-slate-800 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
                      >
                        <option value="Bachelor's">Bachelor's Degree (Undergraduate 4-6 yrs)</option>
                        <option value="Master's">Master's Degree (1.5-2 yrs)</option>
                        <option value="PhD">Doctorate / PhD (3-4 yrs)</option>
                        <option value="Language School">Turkish / English Language School (TÖMER)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">
                        Preferred Field of Study <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Medicine, Software Eng, Business, Pilotage"
                        value={formData.preferredField}
                        onChange={(e) => setFormData({ ...formData, preferredField: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">
                        Preferred City in Turkey
                      </label>
                      <select
                        value={formData.preferredCity}
                        onChange={(e) => setFormData({ ...formData, preferredCity: e.target.value })}
                        className="w-full bg-slate-800 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
                      >
                        <option value="Istanbul">Istanbul (Bosphorus & Hub)</option>
                        <option value="Ankara">Ankara (Capital)</option>
                        <option value="Izmir">Izmir (Aegean)</option>
                        <option value="Antalya">Antalya (Mediterranean)</option>
                        <option value="Any">Any Top Partner University</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">
                        Preferred Language of Instruction
                      </label>
                      <select
                        value={formData.preferredLanguage}
                        onChange={(e) => setFormData({ ...formData, preferredLanguage: e.target.value })}
                        className="w-full bg-slate-800 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
                      >
                        <option value="English">100% English</option>
                        <option value="Turkish">Turkish (with 1-Yr TÖMER Prep)</option>
                        <option value="Either">Either English or Turkish</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">
                      Preferred University (or Future Link Recommendation)
                    </label>
                    <select
                      value={formData.preferredUniversity}
                      onChange={(e) => setFormData({ ...formData, preferredUniversity: e.target.value })}
                      className="w-full bg-slate-800 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
                    >
                      <option value="Istanbul Okan University">★ Istanbul Okan University (Featured Partner)</option>
                      <option value="Istanbul Medipol University">Istanbul Medipol University (Top Medicine)</option>
                      <option value="Bahçeşehir University (BAU)">Bahçeşehir University (BAU - Bosphorus Campus)</option>
                      <option value="Istanbul Bilgi University">Istanbul Bilgi University (WASC / English)</option>
                      <option value="Istanbul Aydın University">Istanbul Aydın University (Top International)</option>
                      <option value="İstinye University">İstinye University (Liv Hospital Network)</option>
                      <option value="Altınbaş University">Altınbaş University (75% Scholarship Quotas)</option>
                      <option value="Recommend Best Match">✨ Recommend Best Scholarship Match for Me</option>
                    </select>
                  </div>

                  <div className="pt-4 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="px-4 py-2 text-xs font-bold text-slate-400 hover:text-white cursor-pointer"
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="px-6 py-2.5 bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 font-black text-xs sm:text-sm rounded-xl transition flex items-center gap-2 cursor-pointer shadow-md"
                    >
                      <span>Continue to Documents</span>
                      <ArrowRight className="w-4 h-4 text-slate-950" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3: Document Uploads (PDF Page 3: Passport • Certificate • Transcript • Other Documents) */}
              {step === 3 && (
                <div className="space-y-4 animate-fadeIn">
                  <div className="flex items-center justify-between pb-2 border-b border-white/10">
                    <h3 className="font-heading font-bold text-base text-white">
                      Part 3: Document Attachments
                    </h3>
                    <span className="text-xs text-emerald-400 font-bold">Step 3 of 3</span>
                  </div>

                  <p className="text-xs text-slate-400">
                    Attach scans or photos of your documents. You can also submit your application now and send documents directly to your assigned advisor on WhatsApp.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    
                    {/* 1. Passport */}
                    <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs font-bold text-white">1. International Passport</span>
                          {formData.passportUploaded && (
                            <span className="text-[10px] text-emerald-400 font-bold">Attached ✓</span>
                          )}
                        </div>
                        <p className="text-[10px] text-slate-400">Photo page scan (PDF, JPG)</p>
                      </div>
                      <label className="mt-3 py-1.5 px-3 rounded-lg bg-white/10 hover:bg-white/20 text-[11px] font-semibold text-center cursor-pointer transition">
                        {formData.passportUploaded ? formData.passportFileName : 'Select Passport File'}
                        <input
                          type="file"
                          className="hidden"
                          onChange={(e) => handleDocUpload('passport', e)}
                        />
                      </label>
                    </div>

                    {/* 2. Certificate */}
                    <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs font-bold text-white">2. High School Certificate</span>
                          {formData.certificateUploaded && (
                            <span className="text-[10px] text-emerald-400 font-bold">Attached ✓</span>
                          )}
                        </div>
                        <p className="text-[10px] text-slate-400">Diploma or graduation slip</p>
                      </div>
                      <label className="mt-3 py-1.5 px-3 rounded-lg bg-white/10 hover:bg-white/20 text-[11px] font-semibold text-center cursor-pointer transition">
                        {formData.certificateUploaded ? formData.certificateFileName : 'Select Certificate File'}
                        <input
                          type="file"
                          className="hidden"
                          onChange={(e) => handleDocUpload('certificate', e)}
                        />
                      </label>
                    </div>

                    {/* 3. Transcript */}
                    <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs font-bold text-white">3. Academic Transcript</span>
                          {formData.transcriptUploaded && (
                            <span className="text-[10px] text-emerald-400 font-bold">Attached ✓</span>
                          )}
                        </div>
                        <p className="text-[10px] text-slate-400">Grade sheet / examination results</p>
                      </div>
                      <label className="mt-3 py-1.5 px-3 rounded-lg bg-white/10 hover:bg-white/20 text-[11px] font-semibold text-center cursor-pointer transition">
                        {formData.transcriptUploaded ? formData.transcriptFileName : 'Select Transcript File'}
                        <input
                          type="file"
                          className="hidden"
                          onChange={(e) => handleDocUpload('transcript', e)}
                        />
                      </label>
                    </div>

                    {/* 4. Other Documents */}
                    <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs font-bold text-white">4. Other Documents</span>
                          {formData.otherDocumentsUploaded && (
                            <span className="text-[10px] text-emerald-400 font-bold">Attached ✓</span>
                          )}
                        </div>
                        <p className="text-[10px] text-slate-400">Recommendation letter, CV, etc.</p>
                      </div>
                      <label className="mt-3 py-1.5 px-3 rounded-lg bg-white/10 hover:bg-white/20 text-[11px] font-semibold text-center cursor-pointer transition">
                        {formData.otherDocumentsUploaded ? formData.otherFileName : 'Select Additional File'}
                        <input
                          type="file"
                          className="hidden"
                          onChange={(e) => handleDocUpload('otherDocuments', e)}
                        />
                      </label>
                    </div>

                  </div>

                  <div className="pt-4 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="px-4 py-2 text-xs font-bold text-slate-400 hover:text-white cursor-pointer"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      disabled={submitting}
                      className="px-8 py-3.5 bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-400 hover:from-amber-400 hover:to-yellow-300 disabled:opacity-60 text-slate-950 font-black text-xs sm:text-sm rounded-xl transition flex items-center gap-2 cursor-pointer shadow-xl shadow-amber-500/25 glow-gold"
                    >
                      <Sparkles className={`w-4 h-4 text-slate-950 ${submitting ? 'animate-spin' : ''}`} />
                      <span>{submitting ? 'Sending to Admissions Email...' : 'Submit Application'}</span>
                      <Send className="w-4 h-4 text-slate-950" />
                    </button>
                  </div>
                </div>
              )}

            </form>
          )}
        </div>

      </div>
    </div>
  );
}
