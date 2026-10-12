import React, { useState, useEffect } from 'react';
import { Award, Layers, Clock, CheckCircle2, ChevronRight, X, ShieldAlert, Sparkles, Building2 } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export default function About({ onOpenQuote }) {
  const [showDetailModal, setShowDetailModal] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setShowDetailModal(false);
    };
    if (showDetailModal) {
      window.addEventListener('keydown', handleKeyDown);
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
        document.body.style.overflow = prev || '';
      };
    }
  }, [showDetailModal]);

  const features = [
    {
      icon: Award,
      title: "Trusted by Leading Industries",
      desc: "Preferred signage fabrication vendor for heavy manufacturing, mining setups, and integrated steel complexes across eastern India."
    },
    {
      icon: Layers,
      title: "Customized Solutions",
      desc: "Tailor-made dimensions, multi-substrate choices (ACP, retro-reflective, MS), and multilingual safety content adapted to site requirements."
    },
    {
      icon: Clock,
      title: "On-Time Delivery",
      desc: "Dedicated fabrication schedules ensuring stringent shutdown deadlines and critical plant commissionings are met without delay."
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Industrial Photography */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-industrial border border-gray-100 group">
              <img
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80"
                alt="Industrial safety signage installation inside modern fabrication plant"
                className="w-full h-[380px] sm:h-[460px] lg:h-[500px] object-cover group-hover:scale-104 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              {/* Subtle gradient vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-transparent to-transparent" />

              {/* Floating Modern Compliance Badge */}
              <div className="absolute bottom-6 left-6 right-6 sm:right-auto bg-charcoal/90 backdrop-blur-md p-4 sm:p-5 rounded-xl border border-white/10 text-white shadow-xl flex items-center gap-4">
                <div className="w-11 h-11 rounded-lg bg-safety-orange flex items-center justify-center text-white flex-shrink-0">
                  <ShieldAlert className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xl sm:text-2xl font-black font-heading text-white leading-none">
                      100%
                    </span>
                    <span className="px-2 py-0.5 rounded bg-white/10 text-[10px] font-bold text-safety-light uppercase tracking-wider">
                      IS 9457 Norms
                    </span>
                  </div>
                  <p className="text-xs font-semibold text-gray-300 mt-1">
                    Industrial Safety & Quality Compliant
                  </p>
                  <p className="text-[11px] text-gray-400 mt-0.5">
                    Engineered for high-hazard plant zones
                  </p>
                </div>
              </div>
            </div>

            {/* Modern Subtle Decorative Accents */}
            <div className="hidden sm:block absolute -top-4 -left-4 w-20 h-20 bg-safety-orange/10 rounded-2xl -z-10" />
            <div className="hidden sm:block absolute -bottom-4 -right-4 w-24 h-24 bg-warm-bg rounded-2xl -z-10 border border-safety-orange/20" />
          </div>

          {/* Right Column: Narrative & Feature Highlights */}
          <div className="lg:col-span-6 flex flex-col items-start">
            
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase mb-3.5 bg-safety-orange/10 text-safety-orange border border-safety-orange/20">
              <span className="w-1.5 h-1.5 rounded-full bg-safety-orange"></span>
              ABOUT SAIRAM PRINTER
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-charcoal tracking-tight leading-tight mb-5 font-heading">
              Your Partner in Industrial Safety Signage
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg text-muted leading-relaxed mb-8">
              Sairam Printer is a trusted manufacturer and supplier of safety boards, signage and industrial printing solutions. We serve major steel plants, mines and heavy industries with durable, high-visibility and customized signage solutions.
            </p>

            {/* Three Feature Highlights with Minimal Orange Line Icons */}
            <div className="space-y-4 w-full mb-8">
              {features.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div 
                    key={index} 
                    className="flex items-start gap-4 p-3.5 rounded-xl bg-gray-50/80 hover:bg-warm-bg/60 transition-colors duration-200 border border-gray-100 hover:border-safety-orange/30 group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-white shadow-2xs border border-gray-200 group-hover:border-safety-orange/40 text-safety-orange flex items-center justify-center flex-shrink-0 mt-0.5">
                      <IconComponent className="w-5 h-5 stroke-[2]" />
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-base font-bold text-charcoal mb-0.5 group-hover:text-safety-orange transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-muted leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5">
              <button
                type="button"
                onClick={() => setShowDetailModal(true)}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-safety-orange hover:bg-safety-deep active:scale-95 text-white font-bold text-sm shadow-md hover:shadow-orange-glow transition-all duration-200 cursor-pointer"
              >
                <span>Know More About Us</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={onOpenQuote}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-light-grey hover:bg-gray-200 text-charcoal font-bold text-sm transition-all duration-200 cursor-pointer"
              >
                <span>Request Plant Assessment</span>
              </button>
            </div>

          </div>

        </div>
      </div>

      {/* Know More Modal with Clean Backdrop & Scroll Safety */}
      {showDetailModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal/70 backdrop-blur-sm"
          onClick={() => setShowDetailModal(false)}
        >
          <div 
            className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowDetailModal(false)}
              className="absolute top-5 right-5 p-2 rounded-full text-gray-400 hover:text-charcoal hover:bg-gray-100 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-safety-orange text-white flex items-center justify-center">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-heading text-charcoal">About Sairam Printer</h3>
                <p className="text-xs text-muted">Specialized Industrial Manufacturing & Printing</p>
              </div>
            </div>

            <p className="text-sm text-muted leading-relaxed mb-5">
              {siteConfig.brand.description}
            </p>

            <h4 className="text-xs font-bold text-charcoal uppercase tracking-wider mb-3">Our Core Industrial Capabilities:</h4>
            <div className="space-y-2.5 mb-6">
              {[
                "Direct flatbed UV printing on aluminum composite panels (ACP)",
                "Class 1 and Class 2 retro-reflective signage conforming to road & factory norms",
                "Mild Steel structural frame fabrication with dual anti-corrosive primer",
                "High-volume flex banners with double-stitched perimeter reinforcement",
                "Hazard identification and color coding conforming to IS & OSHA codes"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-industrial-grey p-2 rounded bg-gray-50">
                  <CheckCircle2 className="w-4 h-4 text-safety-orange flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-gray-100 flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setShowDetailModal(false)}
                className="px-4 py-2 rounded-lg bg-gray-100 text-charcoal text-sm font-semibold hover:bg-gray-200 transition-colors"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => {
                  setShowDetailModal(false);
                  onOpenQuote();
                }}
                className="px-5 py-2 rounded-lg bg-safety-orange text-white text-sm font-bold hover:bg-safety-deep transition-colors"
              >
                Contact Our Team
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
