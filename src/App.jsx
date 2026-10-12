import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import WhyChooseUs from './components/WhyChooseUs';
import Clients from './components/Clients';
import Projects from './components/Projects';
import Process from './components/Process';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import QuoteModal from './components/QuoteModal';
import ProductDetailModal from './components/ProductDetailModal';
import { productsData } from './data/products';

export default function App() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [quoteInitialProduct, setQuoteInitialProduct] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleOpenQuote = (initialProduct = '') => {
    setQuoteInitialProduct(typeof initialProduct === 'string' ? initialProduct : '');
    setIsQuoteOpen(true);
  };

  const handleCloseQuote = () => {
    setIsQuoteOpen(false);
  };

  const handleSelectProduct = (product) => {
    setSelectedProduct(product);
  };

  const handleSelectProductById = (id) => {
    const found = productsData.find(p => p.id === id);
    if (found) {
      setSelectedProduct(found);
    } else {
      const prodSection = document.getElementById('products');
      if (prodSection) prodSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-charcoal font-sans selection:bg-safety-orange selection:text-white">
      {/* Sticky Header & Navigation */}
      <Navbar onOpenQuote={() => handleOpenQuote('')} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero 
          onOpenQuote={() => handleOpenQuote('')} 
        />

        {/* About Us Section */}
        <About 
          onOpenQuote={() => handleOpenQuote('')} 
        />

        {/* Products Section */}
        <Products 
          onSelectProduct={handleSelectProduct}
          onOpenQuote={() => handleOpenQuote('')}
        />

        {/* Why Choose Us Section */}
        <WhyChooseUs />

        {/* Our Clients Section */}
        <Clients />

        {/* Projects and Installation Gallery */}
        <Projects 
          onOpenQuote={() => handleOpenQuote('')} 
        />

        {/* Our Process Section */}
        <Process 
          onOpenQuote={() => handleOpenQuote('')} 
        />

        {/* Call to Action and Contact Section */}
        <ContactCTA 
          onOpenQuote={() => handleOpenQuote('')} 
        />
      </main>

      {/* Footer */}
      <Footer onSelectProductById={handleSelectProductById} />

      {/* Floating Back to Top Control */}
      <BackToTop />

      {/* Interactive Quotation Modal */}
      {isQuoteOpen && (
        <QuoteModal
          isOpen={isQuoteOpen}
          onClose={handleCloseQuote}
          initialProduct={quoteInitialProduct}
        />
      )}

      {/* Interactive Product Details Deep-Dive Modal */}
      {selectedProduct && (
        <ProductDetailModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onOpenQuoteWithProduct={(title) => handleOpenQuote(title)}
        />
      )}
    </div>
  );
}
