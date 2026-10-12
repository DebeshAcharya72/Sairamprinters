import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, AlertCircle, Loader2, ShieldAlert } from 'lucide-react';
import { productsData } from '../data/products';

export default function QuoteModal({ isOpen, onClose, initialProduct = '' }) {
  const [formData, setFormData] = useState({
    productType: initialProduct || 'Safety Boards',
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    quantity: '50 - 200 units',
    notes: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (initialProduct) {
      setFormData(prev => ({ ...prev, productType: initialProduct }));
    }
  }, [initialProduct]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = prevOverflow || '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const validate = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
    if (!formData.companyName.trim()) newErrors.companyName = 'Company name is required';
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Enter a valid business email';
    }

    const phoneClean = formData.phone.replace(/[\s-]/g, '');
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^(\+91|91)?[6-9]\d{9}$/.test(phoneClean)) {
      newErrors.phone = 'Enter a valid 10-digit Indian phone number';
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  const handleReset = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-charcoal/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div 
        className="relative bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-gray-100 max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-gray-400 hover:text-charcoal hover:bg-gray-100 transition-colors"
          aria-label="Close quote modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 rounded-lg bg-safety-orange text-white flex items-center justify-center">
            <ShieldAlert className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-bold font-heading text-charcoal">
              Request an Industrial Quotation
            </h3>
            <p className="text-xs text-muted">
              Get customized pricing for your plant safety requirements within 24 hours.
            </p>
          </div>
        </div>

        {isSuccess ? (
          <div className="py-8 text-center">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h4 className="text-xl font-bold text-charcoal mb-2">
              Quotation Request Received!
            </h4>
            <p className="text-sm text-muted max-w-md mx-auto mb-6">
              Thank you, {formData.fullName}. Our technical sales engineer will review your requirements for <strong>{formData.productType}</strong> and provide a detailed BOQ estimate.
            </p>
            <button
              type="button"
              onClick={handleReset}
              className="px-6 py-2.5 rounded-lg bg-safety-orange hover:bg-safety-deep text-white text-sm font-bold shadow-md transition-colors"
            >
              Done & Return to Site
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="space-y-4">
            
            {/* Product Type Selection */}
            <div>
              <label htmlFor="productType" className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-1.5">
                Select Signage Category
              </label>
              <select
                id="productType"
                name="productType"
                value={formData.productType}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:border-safety-orange focus:ring-2 focus:ring-safety-orange/20"
              >
                <option value="Safety Boards">Safety Boards (Mandatory / Cautionary)</option>
                <option value="Flex Banners">Flex Banners (Heavy Duty Star Flex)</option>
                <option value="MS Frame Boards">MS Frame Boards (Structural Gantry)</option>
                <option value="Custom Signage">Custom Signage (Wayfinding & Plant Schematics)</option>
                <option value="Full Plant Safety Package">Full Plant Safety Turnkey Package</option>
              </select>
            </div>

            {/* Full Name & Company */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="modalFullName" className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-1.5">
                  Full Name <span className="text-safety-orange">*</span>
                </label>
                <input
                  type="text"
                  id="modalFullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="e.g., Alok Verma"
                  className={`w-full px-4 py-2.5 rounded-lg border text-sm focus:ring-2 focus:ring-safety-orange/20 ${
                    errors.fullName ? 'border-red-500 bg-red-50/20' : 'border-gray-200 focus:border-safety-orange'
                  }`}
                />
                {errors.fullName && (
                  <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.fullName}</span>
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="modalCompanyName" className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-1.5">
                  Company / Plant <span className="text-safety-orange">*</span>
                </label>
                <input
                  type="text"
                  id="modalCompanyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  placeholder="e.g., Jindal Steel Complex"
                  className={`w-full px-4 py-2.5 rounded-lg border text-sm focus:ring-2 focus:ring-safety-orange/20 ${
                    errors.companyName ? 'border-red-500 bg-red-50/20' : 'border-gray-200 focus:border-safety-orange'
                  }`}
                />
                {errors.companyName && (
                  <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.companyName}</span>
                  </p>
                )}
              </div>
            </div>

            {/* Email & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="modalEmail" className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-1.5">
                  Email Address <span className="text-safety-orange">*</span>
                </label>
                <input
                  type="email"
                  id="modalEmail"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@company.com"
                  className={`w-full px-4 py-2.5 rounded-lg border text-sm focus:ring-2 focus:ring-safety-orange/20 ${
                    errors.email ? 'border-red-500 bg-red-50/20' : 'border-gray-200 focus:border-safety-orange'
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
                <label htmlFor="modalPhone" className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-1.5">
                  Phone (India +91) <span className="text-safety-orange">*</span>
                </label>
                <input
                  type="tel"
                  id="modalPhone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="9876543210"
                  className={`w-full px-4 py-2.5 rounded-lg border text-sm focus:ring-2 focus:ring-safety-orange/20 ${
                    errors.phone ? 'border-red-500 bg-red-50/20' : 'border-gray-200 focus:border-safety-orange'
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

            {/* Approximate Quantity */}
            <div>
              <label htmlFor="modalQuantity" className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-1.5">
                Estimated Volume / Quantity
              </label>
              <select
                id="modalQuantity"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:border-safety-orange"
              >
                <option value="1 - 25 units">Small Batch (1 – 25 units)</option>
                <option value="25 - 100 units">Medium Batch (25 – 100 units)</option>
                <option value="100 - 500 units">Major Facility Overhaul (100 – 500 units)</option>
                <option value="500+ units / Plant Turnkey">Turnkey Plant-wide / Mining Site (500+ units)</option>
              </select>
            </div>

            {/* Specifications & Notes */}
            <div>
              <label htmlFor="modalNotes" className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-1.5">
                Specific Sizes or Substrate Requirements (Optional)
              </label>
              <textarea
                id="modalNotes"
                name="notes"
                rows={2}
                value={formData.notes}
                onChange={handleChange}
                placeholder="Mention sizes (e.g. 4x3 ft, 8x4 ft), substrate (ACP, MS frame, reflective class), or delivery timeline."
                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:border-safety-orange focus:ring-2 focus:ring-safety-orange/20 resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-lg bg-safety-orange hover:bg-safety-deep active:scale-98 text-white font-bold text-sm shadow-md hover:shadow-orange-glow transition-all disabled:opacity-60 cursor-pointer"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Preparing Quote Request...</span>
                </>
              ) : (
                <>
                  <span>Submit Quotation Request</span>
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>

            <p className="text-[10px] text-gray-400 text-center">
              Confidentiality assured. Technical specifications are used exclusively for quotation modeling.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
