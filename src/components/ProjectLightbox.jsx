import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Layers, Maximize2 } from 'lucide-react';

export default function ProjectLightbox({ project, onClose, onPrev, onNext }) {
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    window.addEventListener('keydown', handleKeyDown);

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = prevOverflow || '';
    };
  }, [project, onClose, onPrev, onNext]);

  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-6"
      onClick={onClose}
    >
      {/* Lightbox container */}
      <div 
        className="relative max-w-4xl w-full bg-charcoal rounded-2xl overflow-hidden shadow-2xl border border-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="flex items-center justify-between p-4 border-b border-white/10 bg-black/40">
          <div className="flex items-center gap-2 text-white">
            <span className="px-2.5 py-1 rounded bg-safety-orange text-[11px] font-bold tracking-wider uppercase">
              {project.category}
            </span>
            <span className="text-xs text-gray-300 hidden sm:inline">
              Industrial Signage Showcase
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close Lightbox (Esc)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Image Display Area with Navigation Arrows */}
        <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-black/60 flex items-center justify-center overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />

          {/* Left Arrow */}
          <button
            type="button"
            onClick={onPrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-charcoal/80 hover:bg-safety-orange text-white transition-all shadow-lg focus:outline-none"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Right Arrow */}
          <button
            type="button"
            onClick={onNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-charcoal/80 hover:bg-safety-orange text-white transition-all shadow-lg focus:outline-none"
            aria-label="Next Image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Bottom Details Panel */}
        <div className="p-5 sm:p-6 bg-charcoal-dark border-t border-white/10 text-white">
          <h3 className="text-lg sm:text-xl font-bold font-heading mb-2">
            {project.title}
          </h3>
          <p className="text-sm text-gray-300 leading-relaxed mb-4">
            {project.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t border-white/10 text-xs">
            <div>
              <span className="text-gray-400 block font-semibold">Substrate & Specs:</span>
              <span className="text-white font-medium">{project.specs}</span>
            </div>
            <div>
              <span className="text-gray-400 block font-semibold">Dimensions / Mounting:</span>
              <span className="text-white font-medium">{project.dimensions}</span>
            </div>
            <div>
              <span className="text-gray-400 block font-semibold">Performance Feature:</span>
              <span className="text-safety-light font-medium">{project.features}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
