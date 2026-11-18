import React, { useEffect } from 'react';
import { AppointmentForm } from '../appointment/AppointmentForm';
import { X } from 'lucide-react';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialType?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  initialType = 'Comprehensive Eye Exam',
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-charcoal/60 backdrop-blur-sm transition-opacity"
      role="dialog"
      aria-modal="true"
    >
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative z-10 w-full max-w-xl animate-fade-up">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 z-20 p-2.5 rounded-full bg-white shadow-md text-charcoal hover:bg-ivory transition-colors border border-stone-border"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        <AppointmentForm
          initialType={initialType}
          onSuccess={() => {}}
          isModal={true}
        />
      </div>
    </div>
  );
};
