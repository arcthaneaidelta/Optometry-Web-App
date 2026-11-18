import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Calendar, Clock, User, Mail, Phone, MessageSquare, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

interface AppointmentFormProps {
  initialType?: string;
  onSuccess?: () => void;
  isModal?: boolean;
}

interface FormState {
  fullName: string;
  email: string;
  phone: string;
  serviceType: string;
  date: string;
  timeSlot: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  serviceType?: string;
  date?: string;
  timeSlot?: string;
}

export const AppointmentForm: React.FC<AppointmentFormProps> = ({
  initialType = 'Comprehensive Eye Exam',
  onSuccess,
  isModal = false,
}) => {
  const [formData, setFormData] = useState<FormState>({
    fullName: '',
    email: '',
    phone: '',
    serviceType: initialType,
    date: '',
    timeSlot: 'Morning (9:00 AM – 12:00 PM)',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const serviceOptions = [
    'Comprehensive Eye Exam',
    'Contact Lens Fitting',
    'Prescription Eyewear Consultation',
    'Digital Eye Strain Consultation',
    'General Eye Health Inquiry',
  ];

  const timeOptions = [
    'Morning (9:00 AM – 12:00 PM)',
    'Mid-day (12:00 PM – 2:30 PM)',
    'Afternoon (2:30 PM – 4:30 PM)',
    'Late Afternoon (4:30 PM – 6:00 PM)',
  ];

  // Get tomorrow's date formatted as YYYY-MM-DD for min date
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDateStr = tomorrow.toISOString().split('T')[0];

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name.';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Name must be at least 2 characters.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please provide an email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email address.';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Please provide a contact phone number.';
    } else if (formData.phone.replace(/\D/g, '').length < 7) {
      newErrors.phone = 'Please enter a valid phone number.';
    }

    if (!formData.date) {
      newErrors.date = 'Please select a preferred date.';
    } else if (new Date(formData.date) < new Date(minDateStr)) {
      newErrors.date = 'Please choose a future date.';
    }

    if (!formData.timeSlot) {
      newErrors.timeSlot = 'Please select a preferred time window.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate realistic frontend processing delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);

      // Trigger celebratory aesthetic confetti
      try {
        confetti({
          particleCount: 40,
          spread: 60,
          origin: { y: 0.6 },
          colors: ['#52665B', '#A9B6A5', '#B8A18A', '#26332D'],
        });
      } catch (err) {
        // Safe fallback
      }

      if (onSuccess) {
        onSuccess();
      }
    }, 850);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      serviceType: initialType,
      date: '',
      timeSlot: 'Morning (9:00 AM – 12:00 PM)',
      message: '',
    });
    setErrors({});
    setIsSuccess(false);
  };

  if (isSuccess) {
    return (
      <div className="bg-white p-8 sm:p-10 rounded-2xl border border-stone-border shadow-sm text-center animate-fade-in">
        <div className="w-14 h-14 bg-sage/20 text-forest rounded-full flex items-center justify-center mx-auto mb-5">
          <CheckCircle2 className="w-8 h-8 stroke-[1.75]" />
        </div>

        <span className="text-[11px] font-semibold tracking-widest uppercase text-forest block mb-2">
          Request Prepared
        </span>

        <h3 className="text-2xl sm:text-3xl font-serif text-charcoal mb-3">
          Thank you, {formData.fullName.split(' ')[0]}!
        </h3>

        <p className="text-sm text-olive leading-relaxed max-w-md mx-auto mb-6">
          Your appointment request has been prepared successfully. Our concierge team would review your schedule and contact you shortly.
        </p>

        {/* Appointment Confirmation Summary Card */}
        <div className="bg-ivory p-5 rounded-xl border border-stone-border text-left max-w-md mx-auto mb-6 space-y-2.5 text-xs text-charcoal">
          <div className="flex justify-between border-b border-stone-border/60 pb-2">
            <span className="text-olive">Service</span>
            <span className="font-medium text-forest-dark">{formData.serviceType}</span>
          </div>
          <div className="flex justify-between border-b border-stone-border/60 pb-2">
            <span className="text-olive">Preferred Date</span>
            <span className="font-medium">{formData.date}</span>
          </div>
          <div className="flex justify-between border-b border-stone-border/60 pb-2">
            <span className="text-olive">Preferred Time</span>
            <span className="font-medium">{formData.timeSlot}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-olive">Contact Email</span>
            <span className="font-medium">{formData.email}</span>
          </div>
        </div>

        {/* Demonstration Disclaimer */}
        <div className="p-3.5 bg-stone-soft rounded-lg text-[11px] text-olive/90 max-w-md mx-auto mb-6 border border-stone-border/70 leading-normal">
          <strong className="font-medium text-forest">Demonstration Notice:</strong> This is a frontend interactive preview. No actual booking has occurred and your personal information has not been transmitted to any server.
        </div>

        <button
          onClick={handleReset}
          className="inline-flex items-center justify-center px-6 py-2.5 rounded-full text-xs uppercase tracking-wider bg-forest text-ivory hover:bg-forest-dark transition-all"
        >
          Book Another Appointment
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className={`bg-white rounded-2xl border border-stone-border shadow-sm p-6 sm:p-8 ${
        isModal ? 'max-h-[80vh] overflow-y-auto' : ''
      }`}
    >
      <div className="mb-6">
        <span className="text-[11px] uppercase tracking-widest text-forest font-semibold block mb-1">
          Reserve Your Visit
        </span>
        <h3 className="text-2xl sm:text-3xl font-serif text-charcoal">
          Request an <span className="italic text-forest">Appointment</span>
        </h3>
        <p className="text-xs sm:text-sm text-olive mt-1.5 font-light">
          Fill in your details below and we will tailor your time with our optometrists.
        </p>
      </div>

      <div className="space-y-4">
        {/* Full Name */}
        <div>
          <label className="block text-xs uppercase tracking-wider text-charcoal font-medium mb-1.5 flex items-center">
            <User className="w-3.5 h-3.5 mr-1.5 text-olive" />
            Full Name <span className="text-forest ml-0.5">*</span>
          </label>
          <input
            type="text"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            placeholder="e.g. Clara Montgomery"
            className={`w-full px-4 py-2.5 text-sm bg-ivory/50 rounded-lg border transition-colors focus:bg-white focus:outline-none focus:ring-1 ${
              errors.fullName
                ? 'border-red-400 focus:ring-red-400'
                : 'border-stone-border focus:border-forest focus:ring-forest'
            }`}
          />
          {errors.fullName && (
            <p className="text-[11px] text-red-600 mt-1 flex items-center">
              <AlertCircle className="w-3 h-3 mr-1 shrink-0" />
              {errors.fullName}
            </p>
          )}
        </div>

        {/* Email & Phone Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs uppercase tracking-wider text-charcoal font-medium mb-1.5 flex items-center">
              <Mail className="w-3.5 h-3.5 mr-1.5 text-olive" />
              Email Address <span className="text-forest ml-0.5">*</span>
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="name@domain.com"
              className={`w-full px-4 py-2.5 text-sm bg-ivory/50 rounded-lg border transition-colors focus:bg-white focus:outline-none focus:ring-1 ${
                errors.email
                  ? 'border-red-400 focus:ring-red-400'
                  : 'border-stone-border focus:border-forest focus:ring-forest'
              }`}
            />
            {errors.email && (
              <p className="text-[11px] text-red-600 mt-1 flex items-center">
                <AlertCircle className="w-3 h-3 mr-1 shrink-0" />
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider text-charcoal font-medium mb-1.5 flex items-center">
              <Phone className="w-3.5 h-3.5 mr-1.5 text-olive" />
              Phone Number <span className="text-forest ml-0.5">*</span>
            </label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="(555) 000-0000"
              className={`w-full px-4 py-2.5 text-sm bg-ivory/50 rounded-lg border transition-colors focus:bg-white focus:outline-none focus:ring-1 ${
                errors.phone
                  ? 'border-red-400 focus:ring-red-400'
                  : 'border-stone-border focus:border-forest focus:ring-forest'
              }`}
            />
            {errors.phone && (
              <p className="text-[11px] text-red-600 mt-1 flex items-center">
                <AlertCircle className="w-3 h-3 mr-1 shrink-0" />
                {errors.phone}
              </p>
            )}
          </div>
        </div>

        {/* Appointment Type */}
        <div>
          <label className="block text-xs uppercase tracking-wider text-charcoal font-medium mb-1.5">
            Appointment Type <span className="text-forest ml-0.5">*</span>
          </label>
          <select
            value={formData.serviceType}
            onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
            className="w-full px-4 py-2.5 text-sm bg-ivory/50 rounded-lg border border-stone-border focus:bg-white focus:outline-none focus:border-forest focus:ring-1 focus:ring-forest text-charcoal"
          >
            {serviceOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>

        {/* Preferred Date & Preferred Time */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs uppercase tracking-wider text-charcoal font-medium mb-1.5 flex items-center">
              <Calendar className="w-3.5 h-3.5 mr-1.5 text-olive" />
              Preferred Date <span className="text-forest ml-0.5">*</span>
            </label>
            <input
              type="date"
              min={minDateStr}
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              className={`w-full px-4 py-2.5 text-sm bg-ivory/50 rounded-lg border transition-colors focus:bg-white focus:outline-none focus:ring-1 ${
                errors.date
                  ? 'border-red-400 focus:ring-red-400'
                  : 'border-stone-border focus:border-forest focus:ring-forest'
              }`}
            />
            {errors.date && (
              <p className="text-[11px] text-red-600 mt-1 flex items-center">
                <AlertCircle className="w-3 h-3 mr-1 shrink-0" />
                {errors.date}
              </p>
            )}
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider text-charcoal font-medium mb-1.5 flex items-center">
              <Clock className="w-3.5 h-3.5 mr-1.5 text-olive" />
              Preferred Time Window
            </label>
            <select
              value={formData.timeSlot}
              onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
              className="w-full px-4 py-2.5 text-sm bg-ivory/50 rounded-lg border border-stone-border focus:bg-white focus:outline-none focus:border-forest focus:ring-1 focus:ring-forest text-charcoal"
            >
              {timeOptions.map((slot) => (
                <option key={slot} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Additional Message */}
        <div>
          <label className="block text-xs uppercase tracking-wider text-charcoal font-medium mb-1.5 flex items-center">
            <MessageSquare className="w-3.5 h-3.5 mr-1.5 text-olive" />
            Additional Notes (Optional)
          </label>
          <textarea
            rows={3}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="Tell us about any specific visual concerns, current prescription details, or eyewear preferences..."
            className="w-full px-4 py-2.5 text-sm bg-ivory/50 rounded-lg border border-stone-border focus:bg-white focus:outline-none focus:border-forest focus:ring-1 focus:ring-forest text-charcoal resize-none"
          />
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3.5 px-6 rounded-full text-xs sm:text-sm font-medium tracking-wider uppercase bg-forest text-ivory hover:bg-forest-dark transition-all duration-200 active:scale-[0.99] flex items-center justify-center space-x-2 disabled:opacity-70 shadow-sm"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin text-ivory" />
                <span>Preparing Request...</span>
              </>
            ) : (
              <span>Confirm Appointment Request</span>
            )}
          </button>
        </div>

        <p className="text-[11px] text-center text-olive/80 pt-1">
          No payment required. We will confirm your visit by phone or email.
        </p>
      </div>
    </form>
  );
};
