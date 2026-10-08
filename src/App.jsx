import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StudyInTurkey from './components/StudyInTurkey';
import UniversityExplorer from './components/UniversityExplorer';
import ServicesSection from './components/ServicesSection';
import AboutUsSection from './components/AboutUsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import WelcomePromptModal from './components/WelcomePromptModal';
import ApplicationModal from './components/ApplicationModal';
import UniversityDetailModal from './components/UniversityDetailModal';
import TalkToAdvisorModal from './components/TalkToAdvisorModal';
import WhatsAppFloating from './components/WhatsAppFloating';
import Toast from './components/Toast';

export default function App() {
  const [welcomeModalOpen, setWelcomeModalOpen] = useState(true);
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

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-amber-400 selection:text-slate-950">
      
      {/* 1. Futuristic Navbar with Logo & Exact Nav Links */}
      <Navbar
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

        {/* 3. Universities: Catalog featuring Kent, Topkapi, Beykoz, Dogus, Gelisim, Okan, Medipol */}
        <UniversityExplorer
          onSelectUniversity={(uni) => setSelectedUniversity(uni)}
          onApplyUniversity={handleApplyFromExplorer}
          searchFilter={searchFilter}
        />

        {/* 4. Visa & Immigration + Student Services: "From Admission to Arrival" */}
        <ServicesSection
          onOpenApplyModal={() => handleOpenApplyModal()}
        />

        {/* 5. About Future Link: Who We Are, Mission, Vision, and Values */}
        <AboutUsSection />

        {/* 6. Contact Page: "Contact Us on :" & [ Chat on WhatsApp Directly ] */}
        <ContactSection
          onShowToast={showToast}
        />

      </main>

      {/* Footer */}
      <Footer
        onOpenApplyModal={() => handleOpenApplyModal()}
      />

      {/* Welcome Prompt Modal (Prompts registration or WhatsApp contact right upon entry) */}
      <WelcomePromptModal
        isOpen={welcomeModalOpen}
        onClose={() => setWelcomeModalOpen(false)}
        onStartRegistration={() => handleOpenApplyModal()}
      />

      {/* Start Your Application Interactive Modal */}
      <ApplicationModal
        isOpen={applyModalOpen}
        onClose={() => setApplyModalOpen(false)}
        defaultUniversity={preselectedUniversity}
        defaultProgram={preselectedProgram}
        onShowToast={showToast}
      />

      {/* University Detail Dossier Modal */}
      <UniversityDetailModal
        university={selectedUniversity}
        onClose={() => setSelectedUniversity(null)}
        onApply={(uniName) => handleOpenApplyModal(uniName, '')}
      />

      {/* Secondary CTA: Talk to an Advisor Modal */}
      <TalkToAdvisorModal
        isOpen={advisorModalOpen}
        onClose={() => setAdvisorModalOpen(false)}
        onShowToast={showToast}
      />

      {/* Floating WhatsApp Button */}
      <WhatsAppFloating />

      {/* Toast Feedback */}
      <Toast
        toast={toast}
        onClose={() => setToast(null)}
      />

    </div>
  );
}
