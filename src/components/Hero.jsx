import React from 'react';
import { ArrowRight, ShieldCheck, Award, Truck, Factory, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero({ onOpenQuote, onExploreProducts }) {
  const trustHighlights = [
    {
      icon: ShieldCheck,
      text: "Durable & Weather Resistant",
      desc: "Monsoon & UV Proof Substrates"
    },
    {
      icon: Award,
      text: "Industrial Grade Quality",
      desc: "IS 9457 & OSHA Compliant"
    },
    {
      icon: Truck,
      text: "Pan India Supply & Installation",
      desc: "Turnkey Site Support"
    },
    {
      icon: Factory,
      text: "Trusted by Leading Steel Plants",
      desc: "Heavy Industry Proven"
    }
  ];

  const handleExploreClick = (e) => {
    e.preventDefault();
    const productsEl = document.getElementById('products');
    if (productsEl) {
      const navOffset = 85;
      const elementPosition = productsEl.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-[580px] lg:min-h-[660px] flex items-center bg-charcoal overflow-hidden"
    >
      {/* Background Factory Photography with Realistic Industrial Lighting & Safety Signs */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=2000&q=85"
          alt="Modern steel manufacturing plant with industrial machinery and safety signage infrastructure"
          className="w-full h-full object-cover object-center lg:object-right filter brightness-95 contrast-105"
          loading="eager"
        />
        
        {/* Left Dark Industrial Scrim Overlay for Extreme Readability + Preserving Factory Architecture */}
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/90 to-charcoal/40 lg:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-black/30 lg:hidden" />
        
        {/* Modern technical architectural grid overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      </div>

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="max-w-2xl lg:max-w-3xl"
        >
          
          {/* Eyebrow Label with Modern Status Pulse */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-safety-orange/15 border border-safety-orange/40 text-safety-orange text-xs sm:text-sm font-bold tracking-wider uppercase mb-5 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-safety-orange animate-ping" />
            <span>INDUSTRIAL SAFETY SIGNAGE SOLUTIONS</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.14] mb-5 font-heading">
            Creating Safer <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-orange-50 to-safety-orange">
              Workplaces
            </span> Across Industries
          </h1>

          {/* Supporting Description */}
          <p className="text-base sm:text-lg lg:text-xl text-gray-200 leading-relaxed mb-8 max-w-2xl font-normal">
            High-quality safety boards, signage and custom printing solutions for steel plants, mines and industrial facilities across India.
          </p>

          {/* Primary and Secondary CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12 sm:mb-14">
            <button
              type="button"
              onClick={onOpenQuote}
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-lg bg-safety-orange hover:bg-safety-deep active:scale-95 text-white text-base font-bold shadow-lg hover:shadow-orange-glow transition-all duration-200 group cursor-pointer"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="#products"
              onClick={handleExploreClick}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-white/10 hover:bg-white/15 active:scale-95 text-white border border-white/20 hover:border-white/40 text-base font-semibold backdrop-blur-md transition-all duration-200 cursor-pointer"
            >
              <span>Explore Our Products</span>
              <ChevronRight className="w-4 h-4 text-safety-orange" />
            </a>
          </div>

          {/* Under-the-buttons Trust Highlights - Modern Minimalist Frosted Tiles */}
          <div className="pt-6 border-t border-white/15">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
              {trustHighlights.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div 
                    key={index} 
                    className="flex flex-col p-3 rounded-lg bg-white/[0.04] border border-white/10 hover:border-safety-orange/40 backdrop-blur-sm transition-all duration-200 group"
                  >
                    <div className="flex items-center gap-2 mb-1.5">
                      <div className="w-6 h-6 rounded bg-safety-orange/20 text-safety-orange flex items-center justify-center group-hover:bg-safety-orange group-hover:text-white transition-colors">
                        <IconComponent className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-xs sm:text-sm font-bold text-white leading-tight">
                        {item.text}
                      </span>
                    </div>
                    <p className="text-[11px] text-gray-400 font-medium pl-8 hidden sm:block">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

        </motion.div>
      </div>

      {/* Decorative Bottom Industrial Angle Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-safety-orange via-safety-deep to-industrial-grey" />
    </section>
  );
}
