import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StudyInTurkey from './components/StudyInTurkey';
import UniversityExplorer from './components/UniversityExplorer';
import ServicesSection from './components/ServicesSection';
import HowItWorksSection from './components/HowItWorksSection';
import AboutUsSection from './components/AboutUsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ApplicationModal from './components/ApplicationModal';
import UniversityDetailModal from './components/UniversityDetailModal';
import TalkToAdvisorModal from './components/TalkToAdvisorModal';
import WhatsAppFloating from './components/WhatsAppFloating';
import Toast from './components/Toast';

export default function App() {
  const [currentCurrency, setCurrentCurrency] = useState('USD');
  const [applyModalOpen, setApplyModalOpen] = useState(false);
  const [advisorModalOpen, setAdvisorModalOpen] = useState(false);
  const [selectedUniversity, setSelectedUniversity] = useState(null);
  const [preselectedUniversity, setPreselectedUniversity] = useState('');
  const [preselectedProgram, setPreselectedProgram] = useState('');
  const [searchFilter, setSearchFilter] = useState(null);
  const [toast, setToast] = useState(null);

  const showToast = (toastObj) => {
    setToast(toastObj);
    setTimeout(() => {
      setToast(null);
    }, 4500);
  };

  const handleOpenApplyModal = (uniName = '', progName = '') => {
    setPreselectedUniversity(uniName);
    setPreselectedProgram(progName);
    setApplyModalOpen(true);
  };

  const handleApplyFromExplorer = (uniName) => {
    handleOpenApplyModal(uniName, '');
  };

  const handleFindMyUniversity = (params) => {
    setSearchFilter(params);
    showToast({
      type: 'info',
      message: `Filtering universities for ${params.field} (${params.level}) in ${params.language}...`
    });
    const elem = document.getElementById('universities');
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  const handleCurrencyChange = (cur) => {
    setCurrentCurrency(cur);
    showToast({
      type: 'info',
      message: `Tuition currency set to ${cur}`
    });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-amber-400 selection:text-slate-950">
      
      {/* 1. Futuristic Navbar with Logo & Exact PDF Nav Links */}
      <Navbar
        currentCurrency={currentCurrency}
        onCurrencyChange={handleCurrencyChange}
        onOpenApplyModal={() => handleOpenApplyModal()}
        onOpenAdvisorModal={() => setAdvisorModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        
        {/* 1. Home Page: "Study in Turkey. Build Your Future." & "Why Students Choose Future Link" */}
        <Hero
          onOpenApplyModal={() => handleOpenApplyModal()}
          onOpenAdvisorModal={() => setAdvisorModalOpen(true)}
          onQuickSearch={handleFindMyUniversity}
        />

        {/* 2. Study in Turkey: "Your Future Starts in Turkey" & "Find Your Program" */}
        <StudyInTurkey
          onFindMyUniversity={handleFindMyUniversity}
        />

        {/* 3. Universities: Istanbul Okan University benchmark + partner catalog */}
        <UniversityExplorer
          onSelectUniversity={(uni) => setSelectedUniversity(uni)}
          onApplyUniversity={handleApplyFromExplorer}
          currentCurrency={currentCurrency}
          searchFilter={searchFilter}
        />

        {/* 5. Visa & Immigration + 6. Student Services: "From Admission to Arrival" */}
        <ServicesSection
          onOpenApplyModal={() => handleOpenApplyModal()}
        />

        {/* 8. Why Future Link? "More Than an Application" (6-Step Journey) */}
        <HowItWorksSection
          onOpenApplyModal={() => handleOpenApplyModal()}
        />

        {/* 7. About Future Link: Who We Are, Mission, Vision, and Values */}
        <AboutUsSection />

        {/* 9. Contact Page: "Let's Start Your Journey" & [ WhatsApp Us ] */}
        <ContactSection
          onShowToast={showToast}
        />

      </main>

      {/* Footer */}
      <Footer
        onOpenApplyModal={() => handleOpenApplyModal()}
      />

      {/* 4. Start Your Application Interactive Modal (Exact PDF Page 3 Fields) */}
      <ApplicationModal
        isOpen={applyModalOpen}
        onClose={() => setApplyModalOpen(false)}
        defaultUniversity={preselectedUniversity}
        defaultProgram={preselectedProgram}
        onShowToast={showToast}
      />

      {/* University Detail Dossier Modal (PDF Page 3) */}
      <UniversityDetailModal
        university={selectedUniversity}
        onClose={() => setSelectedUniversity(null)}
        onApply={(uniName) => handleOpenApplyModal(uniName, '')}
        currentCurrency={currentCurrency}
      />

      {/* Secondary CTA: Talk to an Advisor Modal (PDF Page 1, 2 & 5) */}
      <TalkToAdvisorModal
        isOpen={advisorModalOpen}
        onClose={() => setAdvisorModalOpen(false)}
        onShowToast={showToast}
      />

      {/* Floating WhatsApp Button [ Chat with Future Link ] (PDF Page 5) */}
      <WhatsAppFloating />

      {/* Toast Feedback */}
      <Toast
        toast={toast}
        onClose={() => setToast(null)}
      />

    </div>
  );
}
