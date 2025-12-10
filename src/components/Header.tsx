import React, { useState, useEffect } from 'react';
import { Menu, X, Scissors } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Scissors className="h-8 w-8 text-yellow-500" />
            <span className="text-xl font-bold text-white">Luck's Studio</span>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-white hover:text-yellow-500 transition-colors">
              Início
            </button>
            <button onClick={() => scrollToSection('about')} className="text-white hover:text-yellow-500 transition-colors">
              Sobre
            </button>
            <button onClick={() => scrollToSection('services')} className="text-white hover:text-yellow-500 transition-colors">
              Serviços
            </button>
            <button onClick={() => scrollToSection('booking')} className="text-white hover:text-yellow-500 transition-colors">
              Agendamento
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-white hover:text-yellow-500 transition-colors">
              Contato
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white hover:text-yellow-500 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <nav className="bg-black/95 backdrop-blur-sm px-4 py-4 space-y-4">
              <button onClick={() => scrollToSection('home')} className="block text-white hover:text-yellow-500 transition-colors">
                Início
              </button>
              <button onClick={() => scrollToSection('about')} className="block text-white hover:text-yellow-500 transition-colors">
                Sobre
              </button>
              <button onClick={() => scrollToSection('services')} className="block text-white hover:text-yellow-500 transition-colors">
                Serviços
              </button>
              <button onClick={() => scrollToSection('booking')} className="block text-white hover:text-yellow-500 transition-colors">
                Agendamento
              </button>
              <button onClick={() => scrollToSection('contact')} className="block text-white hover:text-yellow-500 transition-colors">
                Contato
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;