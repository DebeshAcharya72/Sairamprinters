import React from 'react';

export default function SectionHeading({
  eyebrow,
  heading,
  description,
  alignment = 'center',
  action = null,
  light = false
}) {
  const alignClass = alignment === 'left' 
    ? 'text-left items-start' 
    : alignment === 'right' 
      ? 'text-right items-end' 
      : 'text-center items-center';

  return (
    <div className={`flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 lg:mb-16 ${alignment === 'center' ? 'text-center' : ''}`}>
      <div className={`flex flex-col ${alignClass} ${action ? 'md:max-w-2xl' : 'max-w-3xl mx-auto'}`}>
        {eyebrow && (
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase mb-3 bg-safety-orange/10 text-safety-orange border border-safety-orange/20">
            <span className="w-1.5 h-1.5 rounded-full bg-safety-orange"></span>
            {eyebrow}
          </div>
        )}
        <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight ${light ? 'text-white' : 'text-charcoal'}`}>
          {heading}
        </h2>
        {description && (
          <p className={`mt-4 text-base sm:text-lg leading-relaxed ${light ? 'text-gray-300' : 'text-muted'}`}>
            {description}
          </p>
        )}
      </div>

      {action && (
        <div className="flex-shrink-0 mt-4 md:mt-0">
          {action}
        </div>
      )}
    </div>
  );
}
