import React from 'react';
import { ArrowRight, ChevronRight, Check, Sparkles } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { productsData } from '../data/products';

export default function Products({ onSelectProduct, onOpenQuote }) {
  return (
    <section id="products" className="py-20 lg:py-28 bg-warm-bg relative">
      {/* Subtle blueprint grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Right-Aligned "View All Products" CTA */}
        <SectionHeading
          eyebrow="OUR PRODUCTS"
          heading="Safety Signage for Every Need"
          description="Reliable, high-visibility signage engineered for demanding industrial environments."
          alignment="left"
          action={
            <a
              href="#projects"
              className="inline-flex items-center gap-1.5 text-sm sm:text-base font-bold text-safety-orange hover:text-safety-deep group"
            >
              <span>View All Products in Action</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          }
        />

        {/* 4 Product Cards in Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {productsData.map((product) => (
            <div
              key={product.id}
              onClick={() => onSelectProduct(product)}
              className="group bg-white rounded-xl overflow-hidden border border-gray-200/80 hover:border-safety-orange/50 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between"
            >
              {/* Image Section - ~4:3 aspect ratio */}
              <div>
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  {/* Subtle dark gradient scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Modern Floating Badge */}
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md text-charcoal text-[11px] font-bold px-2.5 py-1 rounded shadow-sm border border-gray-100/80">
                    {product.badge}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-5">
                  <span className="text-[10px] font-bold tracking-wider uppercase text-safety-orange block mb-1">
                    {product.category}
                  </span>
                  <h3 className="text-xl font-bold text-charcoal group-hover:text-safety-orange transition-colors duration-200 mb-2 font-heading">
                    {product.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted leading-relaxed line-clamp-3 mb-4">
                    {product.shortDesc}
                  </p>

                  {/* Minimal Substrate Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-gray-100">
                    {product.specs.slice(0, 2).map((s, idx) => (
                      <span key={idx} className="text-[10px] font-semibold text-gray-500 bg-gray-100 px-2 py-0.5 rounded">
                        {s.label}: {s.value.split(',')[0]}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Card Footer with Small Orange Arrow & Explore Link */}
              <div className="px-5 pb-5 pt-3 border-t border-gray-50 flex items-center justify-between">
                <span className="text-xs font-bold text-safety-orange group-hover:underline">
                  Explore Product
                </span>
                <div className="w-7 h-7 rounded-full bg-safety-subtle group-hover:bg-safety-orange text-safety-orange group-hover:text-white flex items-center justify-center transition-colors duration-200">
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Minimalist Modern Custom Signage Consultation Banner */}
        <div className="mt-12 sm:mt-16 bg-white rounded-2xl p-6 sm:p-8 border border-safety-orange/20 shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-safety-orange text-white flex items-center justify-center flex-shrink-0 shadow-sm">
              <Check className="w-6 h-6 stroke-[2.5]" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-charcoal font-heading">
                Need Custom Sizes, Specific Languages, or Plant Standard Colors?
              </h4>
              <p className="text-xs sm:text-sm text-muted mt-0.5">
                We manufacture bespoke industrial signage according to your site engineering blueprints and IS/OSHA standards.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onOpenQuote}
            className="flex-shrink-0 px-6 py-3 rounded-lg bg-charcoal hover:bg-black text-white text-sm font-bold shadow transition-colors cursor-pointer"
          >
            Request Custom Quotation
          </button>
        </div>

      </div>
    </section>
  );
}
