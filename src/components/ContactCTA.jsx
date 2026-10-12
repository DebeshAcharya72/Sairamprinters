import React from 'react';
import { Phone, Mail, MapPin, Clock, ArrowRight, ShieldCheck, Factory } from 'lucide-react';
import ContactForm from './ContactForm';
import { siteConfig } from '../data/siteConfig';

export default function ContactCTA({ onOpenQuote }) {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-gradient-to-br from-safety-orange via-safety-deep to-safety-deep relative overflow-hidden text-white">
      {/* Subtle industrial background patterns */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      <div className="absolute -right-24 -bottom-24 w-96 h-96 rounded-full bg-white/5 pointer-events-none blur-2xl" />
      <div className="absolute -left-20 -top-20 w-80 h-80 rounded-full bg-black/10 pointer-events-none blur-xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Industrial Callout & Quick Contact Features */}
          <div className="lg:col-span-6">
            
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase mb-4 bg-white/20 text-white border border-white/30 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping"></span>
              GET IN TOUCH WITH SAIRAM PRINTER
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-5 font-heading">
              Let's Build a Safer Workplace Together
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg text-orange-100 leading-relaxed mb-8 max-w-xl">
              Get in touch with us for customized safety signage solutions for your industry.
            </p>

            {/* White Button with Orange Text */}
            <div className="mb-10">
              <button
                type="button"
                onClick={onOpenQuote}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-md bg-white hover:bg-orange-50 active:scale-95 text-safety-deep text-base font-extrabold shadow-xl hover:shadow-2xl transition-all duration-200 group"
              >
                <span>Get a Quote</span>
                <ArrowRight className="w-5 h-5 text-safety-orange group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Contact Feature Highlights */}
            <div className="space-y-4 pt-6 border-t border-white/20">
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-white/15 flex items-center justify-center flex-shrink-0 text-white">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-medium text-orange-200">Direct Phone Inquiries</p>
                  <a href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, '')}`} className="text-sm sm:text-base font-bold text-white hover:underline">
                    {siteConfig.contact.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-white/15 flex items-center justify-center flex-shrink-0 text-white">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-medium text-orange-200">Email for CAD / Tender Specs</p>
                  <a href={`mailto:${siteConfig.contact.email}`} className="text-sm sm:text-base font-bold text-white hover:underline">
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-white/15 flex items-center justify-center flex-shrink-0 text-white">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-medium text-orange-200">Fabrication Unit & Works</p>
                  <p className="text-sm font-semibold text-white">
                    {siteConfig.contact.address}, {siteConfig.contact.city}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-white/15 flex items-center justify-center flex-shrink-0 text-white">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-medium text-orange-200">Operating Hours</p>
                  <p className="text-sm font-semibold text-white">
                    {siteConfig.contact.businessHours}
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Side: Form Card */}
          <div className="lg:col-span-6">
            <ContactForm />
          </div>

        </div>
      </div>
    </section>
  );
}
