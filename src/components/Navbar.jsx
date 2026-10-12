import React, { useState, useEffect } from 'react';
import { ArrowRight, Menu, X, ShieldAlert, PhoneCall, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export default function Navbar({ onOpenQuote }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Track active section based on scroll position
      const sections = ['home', 'about', 'products', 'why-choose-us', 'clients', 'projects', 'process', 'contact'];
      const scrollPosition = window.scrollY + 140;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About Us', href: '#about', id: 'about' },
    { label: 'Products', href: '#products', id: 'products' },
    { label: 'Our Clients', href: '#clients', id: 'clients' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      setMobileMenuOpen(false);
      const navOffset = 85;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* Top Modern Industrial Micro-Bar */}
      <div className="bg-charcoal text-white text-[11px] font-medium py-1.5 px-4 border-b border-white/10 hidden sm:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 text-safety-light">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              IS 9457 & OSHA Compliant Safety Signage
            </span>
            <span className="text-gray-500">•</span>
            <span className="text-gray-300">Fast Pan-India Dispatch to Steel Plants & Mines</span>
          </div>
          <div className="flex items-center gap-4">
            <a 
              href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, '')}`}
              className="text-gray-300 hover:text-safety-orange transition-colors flex items-center gap-1"
            >
              <span>Plant Helpline:</span>
              <strong className="text-white">{siteConfig.contact.phone}</strong>
            </a>
          </div>
        </div>
      </div>

      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-200/80 py-3' 
            : 'bg-white border-b border-gray-100 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Left: Industrial Logo & Brand Identity */}
            <a 
              href="#home" 
              onClick={(e) => handleLinkClick(e, '#home')}
              className="flex items-center gap-3 group text-left focus:outline-none"
              aria-label="Sairam Printer Home"
            >
              {/* Industrial-inspired orange geometric emblem */}
              <div className="relative flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-safety-orange to-safety-deep text-white shadow-orange-glow group-hover:scale-105 transition-transform duration-200">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 20h20L12 2z" />
                  <path d="M12 9v5" />
                  <path d="M12 17h.01" />
                </svg>
                {/* Precision industrial dot */}
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-charcoal border-2 border-white"></span>
              </div>

              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-lg sm:text-xl tracking-tight text-charcoal leading-none group-hover:text-safety-orange transition-colors">
                  {siteConfig.brand.name}
                </span>
                <span className="text-[10px] font-bold tracking-widest text-muted uppercase mt-1">
                  {siteConfig.brand.tagline}
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1" aria-label="Main Navigation">
              {navLinks.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleLinkClick(e, item.href)}
                    className={`px-3.5 py-2 text-sm font-semibold transition-all duration-150 rounded-md relative ${
                      isActive
                        ? 'text-safety-orange font-bold bg-safety-subtle/50'
                        : 'text-industrial-grey hover:text-safety-orange hover:bg-gray-50'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-1 left-3.5 right-3.5 h-0.5 bg-safety-orange rounded-full animate-fade-in" />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Right: Get a Quote CTA & Quick Contact */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, '')}`}
                className="hidden xl:flex items-center gap-2 text-xs font-semibold text-industrial-grey hover:text-safety-orange transition-colors px-2 py-1 rounded hover:bg-gray-50"
                title="Direct Phone Enquiry"
              >
                <div className="w-7 h-7 rounded-full bg-warm-bg flex items-center justify-center text-safety-orange">
                  <PhoneCall className="w-3.5 h-3.5" />
                </div>
                <span>{siteConfig.contact.phone}</span>
              </a>

              <button
                type="button"
                onClick={onOpenQuote}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-md bg-safety-orange hover:bg-safety-deep active:scale-95 text-white text-sm font-bold shadow-md hover:shadow-orange-glow transition-all duration-200 cursor-pointer"
              >
                <span>Get a Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                type="button"
                onClick={onOpenQuote}
                className="sm:inline-flex hidden items-center gap-1.5 px-3 py-1.5 rounded bg-safety-orange text-white text-xs font-bold"
              >
                Get Quote
              </button>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-charcoal hover:bg-light-grey focus:outline-none focus:ring-2 focus:ring-safety-orange"
                aria-label="Toggle menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation with backdrop */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-charcoal/60 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer content */}
          <div className="fixed top-0 right-0 w-5/6 max-w-sm h-full bg-white shadow-2xl z-50 flex flex-col justify-between p-6 overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-md bg-safety-orange flex items-center justify-center text-white">
                    <ShieldAlert className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-heading font-black text-lg text-charcoal block leading-none">
                      {siteConfig.brand.name}
                    </span>
                    <span className="text-[9px] font-bold text-muted tracking-wider uppercase">
                      INDUSTRIAL SAFETY
                    </span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-md text-gray-500 hover:text-charcoal hover:bg-gray-100"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <nav className="mt-6 flex flex-col space-y-1">
                {navLinks.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={(e) => handleLinkClick(e, item.href)}
                      className={`px-4 py-3 text-base font-semibold rounded-lg transition-colors flex items-center justify-between ${
                        isActive
                          ? 'bg-safety-subtle text-safety-orange font-bold'
                          : 'text-charcoal hover:bg-gray-50 hover:text-safety-orange'
                      }`}
                    >
                      <span>{item.label}</span>
                      {isActive && <div className="w-2 h-2 rounded-full bg-safety-orange" />}
                    </a>
                  );
                })}
              </nav>
            </div>

            <div className="pt-6 border-t border-gray-100 mt-6 space-y-4">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-safety-orange text-white font-bold text-base shadow-md hover:bg-safety-deep active:scale-98 transition-all"
              >
                <span>Get a Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="text-center text-xs text-muted">
                <p className="font-semibold text-charcoal">Direct Plant Helpline:</p>
                <a href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, '')}`} className="text-safety-orange font-bold mt-0.5 inline-block">
                  {siteConfig.contact.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
