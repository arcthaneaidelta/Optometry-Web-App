import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LoadingScreen } from './components/layout/LoadingScreen';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { ScrollToTop } from './components/layout/ScrollToTop';
import { AppointmentModal } from './components/ui/AppointmentModal';

import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Eyewear } from './pages/Eyewear';
import { PatientResources } from './pages/PatientResources';
import { Contact } from './pages/Contact';

export const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);
  const [appointmentInitialType, setAppointmentInitialType] = useState('Comprehensive Eye Exam');

  const handleOpenAppointment = (initialType?: string) => {
    if (initialType) {
      setAppointmentInitialType(initialType);
    }
    setIsAppointmentModalOpen(true);
  };

  return (
    <BrowserRouter>
      {/* Scroll restoration on route transitions */}
      <ScrollToTop />

      {/* Branded Loading Screen (fires once per session, ~800ms) */}
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}

      <div className="min-h-screen flex flex-col bg-ivory text-charcoal font-sans selection:bg-sage/40">
        {/* Sticky Global Navigation */}
        <Navbar onOpenAppointment={() => handleOpenAppointment('Comprehensive Eye Exam')} />

        {/* Page Content with smooth transition container */}
        <main className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={<Home onOpenAppointment={handleOpenAppointment} />}
            />
            <Route
              path="/about"
              element={<About onOpenAppointment={handleOpenAppointment} />}
            />
            <Route
              path="/services"
              element={<Services onOpenAppointment={handleOpenAppointment} />}
            />
            <Route
              path="/eyewear"
              element={<Eyewear onOpenAppointment={handleOpenAppointment} />}
            />
            <Route
              path="/patient-resources"
              element={<PatientResources onOpenAppointment={() => handleOpenAppointment('Comprehensive Eye Exam')} />}
            />
            <Route
              path="/contact"
              element={<Contact />}
            />
            {/* Fallback to home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer onOpenAppointment={() => handleOpenAppointment('Comprehensive Eye Exam')} />

        {/* Universal Quick Appointment Modal / Drawer */}
        <AppointmentModal
          isOpen={isAppointmentModalOpen}
          onClose={() => setIsAppointmentModalOpen(false)}
          initialType={appointmentInitialType}
        />
      </div>
    </BrowserRouter>
  );
};

export default App;
