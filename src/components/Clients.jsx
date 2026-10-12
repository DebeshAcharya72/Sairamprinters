import React, { useState } from 'react';
import { Building2, Pause, Play, Info } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { clientsData } from '../data/clients';

export default function Clients() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section id="clients" className="py-20 lg:py-24 bg-white border-y border-gray-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeading
          eyebrow="OUR CLIENTS"
          heading="Trusted by Leading Steel Plants & Industries"
          description="Providing certified industrial signage and safety printing solutions for major heavy manufacturing facilities across India."
          alignment="center"
        />

        {/* Informative transparency note */}
        <div className="max-w-xl mx-auto mb-8 p-3 rounded-lg bg-warm-bg/70 border border-safety-orange/20 flex items-center justify-between text-xs text-muted">
          <div className="flex items-center gap-2">
            <Info className="w-4 h-4 text-safety-orange flex-shrink-0" />
            <span>Illustrative client placeholders (representative of heavy industry sectors served).</span>
          </div>
          <button
            type="button"
            onClick={() => setIsPaused(!isPaused)}
            className="flex items-center gap-1 text-[11px] font-semibold text-industrial-grey hover:text-safety-orange ml-2 px-2.5 py-1 rounded bg-white shadow-2xs border border-gray-200 cursor-pointer"
            title={isPaused ? "Resume Marquee" : "Pause Marquee"}
          >
            {isPaused ? <Play className="w-3 h-3" /> : <Pause className="w-3 h-3" />}
            <span className="hidden sm:inline">{isPaused ? "Play" : "Pause"}</span>
          </button>
        </div>

        {/* Clean Horizontal Grid of Minimalist Corporate Tiles */}
        <div className="relative overflow-hidden py-2">
          {/* Subtle gradient edge scrims */}
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none hidden md:block" />
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none hidden md:block" />

          <div 
            className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 ${
              !isPaused ? 'transition-all duration-300' : ''
            }`}
          >
            {clientsData.map((client) => (
              <div
                key={client.id}
                className="bg-white p-6 rounded-2xl border border-gray-200/80 hover:border-safety-orange/50 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col items-center justify-center text-center group min-h-[145px]"
              >
                {/* Tasteful Industrial Typography Monogram */}
                <div className="w-12 h-12 rounded-xl bg-light-grey group-hover:bg-warm-bg border border-gray-200 group-hover:border-safety-orange/30 flex items-center justify-center mb-3 transition-colors duration-200">
                  <span className="font-heading font-black text-sm tracking-wider text-charcoal group-hover:text-safety-orange">
                    {client.initials}
                  </span>
                </div>

                {/* Company Name */}
                <h4 className="text-sm font-bold text-charcoal group-hover:text-safety-orange transition-colors">
                  {client.name}
                </h4>

                {/* Industry Sector */}
                <span className="text-[11px] text-muted mt-1 font-medium">
                  {client.industry}
                </span>

                {/* Subtle location tag */}
                <span className="text-[10px] text-gray-400 mt-2 uppercase tracking-wider">
                  {client.location}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Endorsement Metric Bar */}
        <div className="mt-12 pt-8 border-t border-gray-100 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <p className="text-2xl sm:text-3xl font-black font-heading text-charcoal">Pan-India</p>
            <p className="text-xs text-muted uppercase tracking-wider font-semibold mt-1">Delivery & Dispatch</p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl font-black font-heading text-safety-orange">Heavy-Duty</p>
            <p className="text-xs text-muted uppercase tracking-wider font-semibold mt-1">Industrial Substrates</p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl font-black font-heading text-charcoal">100%</p>
            <p className="text-xs text-muted uppercase tracking-wider font-semibold mt-1">Regulatory Standards</p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl font-black font-heading text-safety-orange">Turnkey</p>
            <p className="text-xs text-muted uppercase tracking-wider font-semibold mt-1">Fabrication to Site</p>
          </div>
        </div>

      </div>
    </section>
  );
}
