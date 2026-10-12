import React from 'react';
import { ShieldAlert, Phone, Mail, MapPin, Clock, ArrowUp, ChevronRight } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export default function Footer({ onSelectProductById }) {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const navOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-charcoal text-white pt-16 sm:pt-20 pb-12 border-t-4 border-safety-orange">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Four Column Grid on Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-white/10">
          
          {/* Column 1: Brand (lg:col-span-4) */}
          <div className="lg:col-span-4">
            <a 
              href="#home" 
              onClick={(e) => handleLinkClick(e, '#home')}
              className="flex items-center gap-3.5 mb-5 group"
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-safety-orange to-safety-deep flex items-center justify-center text-white shadow-orange-glow group-hover:scale-105 transition-transform">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M12 2L2 20h20L12 2z" />
                  <path d="M12 9v5" />
                  <path d="M12 17h.01" />
                </svg>
              </div>
              <div>
                <span className="font-heading font-black text-xl tracking-tight text-white block">
                  {siteConfig.brand.name}
                </span>
                <span className="text-[10px] font-bold tracking-widest text-safety-light uppercase">
                  {siteConfig.brand.tagline}
                </span>
              </div>
            </a>

            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-6 max-w-sm">
              {siteConfig.brand.description}
            </p>

            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 rounded bg-white/10 text-gray-300 text-[11px] font-bold">
                EST. {siteConfig.brand.established}
              </span>
              <span className="px-2.5 py-1 rounded bg-safety-orange/20 text-safety-light text-[11px] font-bold border border-safety-orange/30">
                INDUSTRIAL GRADE
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links (lg:col-span-2) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-black uppercase tracking-wider text-safety-orange mb-5 font-heading">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', href: '#home' },
                { label: 'About Us', href: '#about' },
                { label: 'Products', href: '#products' },
                { label: 'Our Clients', href: '#clients' },
                { label: 'Projects', href: '#projects' },
                { label: 'Our Process', href: '#process' },
                { label: 'Contact Us', href: '#contact' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-xs sm:text-sm text-gray-300 hover:text-safety-orange transition-colors flex items-center gap-1.5 group"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-gray-500 group-hover:text-safety-orange group-hover:translate-x-0.5 transition-all" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Products (lg:col-span-3) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-safety-orange mb-5 font-heading">
              Our Products
            </h4>
            <ul className="space-y-3">
              {[
                { name: 'Safety Boards', id: 'safety-boards' },
                { name: 'Flex Banners', id: 'flex-banners' },
                { name: 'MS Frame Boards', id: 'ms-frame-boards' },
                { name: 'Custom Signage', id: 'custom-signage' },
              ].map((product) => (
                <li key={product.name}>
                  <button
                    type="button"
                    onClick={() => {
                      if (onSelectProductById) {
                        onSelectProductById(product.id);
                      } else {
                        const target = document.querySelector('#products');
                        if (target) target.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-left text-xs sm:text-sm text-gray-300 hover:text-safety-orange transition-colors flex items-center gap-1.5 group"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-gray-500 group-hover:text-safety-orange group-hover:translate-x-0.5 transition-all" />
                    <span>{product.name}</span>
                  </button>
                </li>
              ))}
            </ul>

            <div className="mt-6 pt-5 border-t border-white/10">
              <span className="text-[11px] text-gray-400 block font-semibold mb-1">
                Substrates Handled:
              </span>
              <p className="text-[11px] text-gray-300 leading-tight">
                ACP Sheets, Mild Steel, Polycarbonate, Retro-Reflective Class 1/2, Heavy Vinyl.
              </p>
            </div>
          </div>

          {/* Column 4: Contact Us (lg:col-span-3) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-safety-orange mb-5 font-heading">
              Contact Us
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-gray-300">
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-safety-orange flex-shrink-0 mt-0.5" />
                <div>
                  <a href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-safety-orange font-semibold block">
                    {siteConfig.contact.phone}
                  </a>
                  <a href={`tel:${siteConfig.contact.phoneSecondary.replace(/[^0-9+]/g, '')}`} className="text-gray-400 text-xs hover:text-safety-orange block">
                    {siteConfig.contact.phoneSecondary}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-safety-orange flex-shrink-0 mt-0.5" />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-safety-orange break-all">
                  {siteConfig.contact.email}
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-safety-orange flex-shrink-0 mt-0.5" />
                <p className="leading-snug">
                  {siteConfig.contact.address}, {siteConfig.contact.city}
                </p>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-safety-orange flex-shrink-0 mt-0.5" />
                <p className="leading-snug text-gray-400">
                  {siteConfig.contact.businessHours}
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back-to-Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} <span className="text-white font-bold">{siteConfig.brand.name}</span>. All rights reserved. Industrial Safety Signage & Printing Solutions.
          </p>

          <div className="flex items-center gap-4">
            <span className="text-[11px] text-gray-400">
              Compliant with IS & OSHA Workplace Standards
            </span>
            <button
              type="button"
              onClick={handleScrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-white/10 hover:bg-safety-orange text-white text-xs font-bold transition-all"
              aria-label="Scroll to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
