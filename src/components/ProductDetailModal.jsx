import React, { useEffect } from 'react';
import { X, CheckCircle2, ShieldCheck, ArrowRight, Layers, FileCheck } from 'lucide-react';

export default function ProductDetailModal({ product, onClose, onOpenQuoteWithProduct }) {
  useEffect(() => {
    if (!product) return;

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
  }, [product, onClose]);

  if (!product) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-charcoal/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div 
        className="relative bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-100 animate-scale-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/90 text-charcoal hover:bg-gray-100 shadow-sm transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Product Banner Image */}
        <div className="relative aspect-[16/8] sm:aspect-[21/9] w-full overflow-hidden bg-gray-900">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent" />
          
          <div className="absolute bottom-4 left-6 right-6 text-white">
            <span className="px-3 py-1 rounded bg-safety-orange text-[10px] font-bold tracking-wider uppercase inline-block mb-1.5">
              {product.category}
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
              {product.title}
            </h3>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8">
          
          {/* Detailed Overview */}
          <div className="mb-6">
            <h4 className="text-xs font-bold uppercase tracking-wider text-safety-orange mb-2">
              Product Overview & Application
            </h4>
            <p className="text-sm sm:text-base text-industrial-grey leading-relaxed">
              {product.fullDesc}
            </p>
          </div>

          {/* Technical Specifications Grid */}
          <div className="mb-6">
            <h4 className="text-xs font-bold uppercase tracking-wider text-charcoal mb-3 flex items-center gap-2">
              <FileCheck className="w-4 h-4 text-safety-orange" />
              <span>Engineering Specifications</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-light-grey p-4 rounded-xl border border-gray-200">
              {product.specs.map((spec, i) => (
                <div key={i} className="text-xs">
                  <span className="font-bold text-charcoal block">{spec.label}:</span>
                  <span className="text-muted">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Features */}
          <div className="mb-6">
            <h4 className="text-xs font-bold uppercase tracking-wider text-charcoal mb-3 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-safety-orange" />
              <span>Durability & Compliance Features</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {product.features.map((feat, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-industrial-grey">
                  <CheckCircle2 className="w-4 h-4 text-safety-orange flex-shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Typical Industrial Use Cases */}
          <div className="mb-8 p-4 rounded-xl bg-warm-bg border border-safety-orange/20">
            <h4 className="text-xs font-bold uppercase tracking-wider text-charcoal mb-2">
              Common Plant Installations:
            </h4>
            <div className="flex flex-wrap gap-2">
              {product.examples.map((ex, i) => (
                <span key={i} className="px-2.5 py-1 rounded bg-white text-xs font-medium text-charcoal border border-gray-200 shadow-2xs">
                  {ex}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom Actions */}
          <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              type="button"
              onClick={onClose}
              className="w-full sm:w-auto px-5 py-2.5 rounded-md bg-gray-100 hover:bg-gray-200 text-charcoal text-sm font-semibold transition-colors"
            >
              Back to Catalog
            </button>

            <button
              type="button"
              onClick={() => {
                onClose();
                onOpenQuoteWithProduct(product.title);
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-md bg-safety-orange hover:bg-safety-deep text-white text-sm font-bold shadow-md hover:shadow-orange-glow transition-all"
            >
              <span>Request Quote for {product.title}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
