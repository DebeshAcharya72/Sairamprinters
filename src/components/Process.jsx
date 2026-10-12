import React from 'react';
import { ClipboardCheck, Palette, Cog, Truck, ArrowRight } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { processSteps } from '../data/processSteps';

export default function Process({ onOpenQuote }) {
  const iconMap = {
    ClipboardCheck,
    Palette,
    Cog,
    Truck
  };

  return (
    <section id="process" className="py-20 lg:py-28 bg-warm-bg relative overflow-hidden">
      {/* Background industrial dot accents */}
      <div className="absolute inset-0 bg-dot-pattern opacity-40 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeading
          eyebrow="OUR WORKFLOW"
          heading="From Design to Installation"
          description="A structured, quality-controlled process ensuring exact compliance, premium durability, and seamless site implementation."
          alignment="center"
        />

        {/* Desktop Horizontal / Mobile Vertical Connected Timeline */}
        <div className="relative mt-8 sm:mt-12">
          
          {/* Desktop Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-safety-orange/20 via-safety-orange to-safety-orange/20 -translate-y-8 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 relative z-10">
            {processSteps.map((step, idx) => {
              const IconComponent = iconMap[step.icon] || ClipboardCheck;
              return (
                <div
                  key={step.step}
                  className="bg-white rounded-2xl p-6 sm:p-7 border border-safety-orange/15 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group flex flex-col justify-between"
                >
                  <div>
                    {/* Step Number & Connected Icon Badge */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="relative">
                        <div className="w-13 h-13 rounded-2xl bg-warm-bg border border-safety-orange/30 flex items-center justify-center text-safety-orange group-hover:bg-safety-orange group-hover:text-white transition-colors duration-300 shadow-2xs">
                          <IconComponent className="w-6 h-6 stroke-[1.8]" />
                        </div>
                        {/* Numerical Step Tag */}
                        <span className="absolute -bottom-1.5 -right-1.5 w-6 h-6 rounded-full bg-charcoal text-white text-[10px] font-black flex items-center justify-center border-2 border-white shadow-xs">
                          {step.step}
                        </span>
                      </div>

                      {/* Small connecting arrow indicator */}
                      {idx < processSteps.length - 1 && (
                        <div className="hidden lg:flex text-safety-orange/30 group-hover:text-safety-orange transition-colors">
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      )}
                    </div>

                    {/* Step Title */}
                    <h3 className="text-lg font-bold text-charcoal mb-2 font-heading group-hover:text-safety-orange transition-colors">
                      {step.title}
                    </h3>

                    {/* Direct Prompt Description */}
                    <p className="text-xs sm:text-sm font-semibold text-industrial-grey leading-snug mb-3">
                      "{step.desc}"
                    </p>

                    {/* Deep Detail */}
                    <p className="text-xs text-muted leading-relaxed">
                      {step.detail}
                    </p>
                  </div>

                  {/* Bottom Milestone Check */}
                  <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-safety-orange" />
                    <span className="text-[11px] font-bold text-gray-400 group-hover:text-charcoal uppercase tracking-wider transition-colors">
                      Phase {idx + 1} Quality Sign-off
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Process Consultation Callout */}
        <div className="mt-14 max-w-2xl mx-auto text-center">
          <p className="text-xs sm:text-sm text-muted">
            Have questions about plant safety guidelines or custom material specifications?
          </p>
          <button
            type="button"
            onClick={onOpenQuote}
            className="mt-3 text-xs sm:text-sm font-bold text-safety-orange hover:text-safety-deep underline inline-flex items-center gap-1 cursor-pointer"
          >
            Schedule a Technical Consultation with our Production Engineers
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
