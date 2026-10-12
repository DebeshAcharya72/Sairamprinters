import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    requirement: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  const validate = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required';
    }

    if (!formData.companyName.trim()) {
      newErrors.companyName = 'Company / Plant Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid business email address';
    }

    // Indian phone number validation (+91 or 10 digits)
    const phoneClean = formData.phone.replace(/[\s-]/g, '');
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^(\+91|91)?[6-9]\d{9}$/.test(phoneClean)) {
      newErrors.phone = 'Please enter a valid 10-digit Indian phone number (e.g., 9876543210)';
    }

    if (!formData.requirement.trim()) {
      newErrors.requirement = 'Please describe your signage requirement';
    } else if (formData.requirement.trim().length < 10) {
      newErrors.requirement = 'Requirement description must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    // Mock API submission simulation
    // In production: Connect to actual backend endpoint (e.g., fetch('/api/enquiry', { method: 'POST', body: JSON.stringify(formData) }))
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        fullName: '',
        companyName: '',
        email: '',
        phone: '',
        requirement: ''
      });
    }, 1200);
  };

  return (
    <div className="bg-white rounded-2xl p-6 sm:p-8 lg:p-9 shadow-2xl border border-gray-100 text-charcoal">
      <div className="mb-6">
        <h3 className="text-2xl font-bold font-heading text-charcoal">
          Send Us a Message
        </h3>
        <p className="text-xs sm:text-sm text-muted mt-1">
          Fill out your plant signage requirements and our team will prepare a technical quote.
        </p>
      </div>

      {submitStatus === 'success' ? (
        <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-200 text-center animate-fade-in">
          <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h4 className="text-lg font-bold text-emerald-900 mb-1">
            Enquiry Prepared Successfully!
          </h4>
          <p className="text-xs text-emerald-700 leading-relaxed max-w-sm mx-auto mb-4">
            Thank you for reaching out. (Frontend demonstration: Connect backend endpoint to dispatch real customer emails/SMS).
          </p>
          <button
            type="button"
            onClick={() => setSubmitStatus(null)}
            className="px-5 py-2 rounded-md bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-700 transition-colors"
          >
            Submit Another Enquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-4">
          {/* Full Name */}
          <div>
            <label htmlFor="fullName" className="block text-xs font-bold uppercase tracking-wider text-industrial-grey mb-1.5">
              Full Name <span className="text-safety-orange">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="e.g., Rajesh Sharma"
              className={`w-full px-4 py-2.5 rounded-lg border text-sm transition-all focus:ring-2 focus:ring-safety-orange/20 ${
                errors.fullName ? 'border-red-500 bg-red-50/30' : 'border-gray-200 hover:border-gray-300 focus:border-safety-orange'
              }`}
            />
            {errors.fullName && (
              <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>{errors.fullName}</span>
              </p>
            )}
          </div>

          {/* Company Name */}
          <div>
            <label htmlFor="companyName" className="block text-xs font-bold uppercase tracking-wider text-industrial-grey mb-1.5">
              Company / Facility Name <span className="text-safety-orange">*</span>
            </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              placeholder="e.g., Acme Steel & Power Ltd."
              className={`w-full px-4 py-2.5 rounded-lg border text-sm transition-all focus:ring-2 focus:ring-safety-orange/20 ${
                errors.companyName ? 'border-red-500 bg-red-50/30' : 'border-gray-200 hover:border-gray-300 focus:border-safety-orange'
              }`}
            />
            {errors.companyName && (
              <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>{errors.companyName}</span>
              </p>
            )}
          </div>

          {/* Email & Phone Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-industrial-grey mb-1.5">
                Work Email <span className="text-safety-orange">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="name@company.com"
                className={`w-full px-4 py-2.5 rounded-lg border text-sm transition-all focus:ring-2 focus:ring-safety-orange/20 ${
                  errors.email ? 'border-red-500 bg-red-50/30' : 'border-gray-200 hover:border-gray-300 focus:border-safety-orange'
                }`}
              />
              {errors.email && (
                <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.email}</span>
                </p>
              )}
            </div>

            <div>
              <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-industrial-grey mb-1.5">
                Phone Number (India) <span className="text-safety-orange">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 98765 43210"
                className={`w-full px-4 py-2.5 rounded-lg border text-sm transition-all focus:ring-2 focus:ring-safety-orange/20 ${
                  errors.phone ? 'border-red-500 bg-red-50/30' : 'border-gray-200 hover:border-gray-300 focus:border-safety-orange'
                }`}
              />
              {errors.phone && (
                <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.phone}</span>
                </p>
              )}
            </div>
          </div>

          {/* Your Requirement */}
          <div>
            <label htmlFor="requirement" className="block text-xs font-bold uppercase tracking-wider text-industrial-grey mb-1.5">
              Your Signage Requirement <span className="text-safety-orange">*</span>
            </label>
            <textarea
              id="requirement"
              name="requirement"
              rows={3}
              value={formData.requirement}
              onChange={handleChange}
              placeholder="Describe signage type (Safety boards, MS frame, flex banner), estimated quantity, plant area, dimensions, etc."
              className={`w-full px-4 py-2.5 rounded-lg border text-sm transition-all focus:ring-2 focus:ring-safety-orange/20 resize-none ${
                errors.requirement ? 'border-red-500 bg-red-50/30' : 'border-gray-200 hover:border-gray-300 focus:border-safety-orange'
              }`}
            />
            {errors.requirement && (
              <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>{errors.requirement}</span>
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-lg bg-safety-orange hover:bg-safety-deep active:scale-98 text-white font-bold text-sm sm:text-base shadow-lg hover:shadow-orange-glow transition-all duration-200 disabled:opacity-60 cursor-pointer"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Processing Enquiry...</span>
              </>
            ) : (
              <>
                <span>Submit Enquiry</span>
                <Send className="w-4 h-4" />
              </>
            )}
          </button>

          <p className="text-[11px] text-gray-400 text-center mt-2">
            * Frontend demonstration with validation. In production, connect your backend API endpoint.
          </p>
        </form>
      )}
    </div>
  );
}
