import React, { useState } from 'react';
import { Menu, X, Phone, MapPin } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="glass-dark shadow-2xl relative z-50 border-b border-white/10">
      {/* Contact Bar */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-700 text-white py-2">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <img 
              src="/logotipo lar.jpg" 
              alt="Lar Gustavo Nordlund" 
              className="h-6 w-auto animate-pulse-glow"
            />
            <div className="flex items-center gap-1 hover-glow transition-all duration-300">
              <Phone size={15} className="text-blue-400" />
              <span>(51) 3386-1125</span>
            </div>
            <div className="flex items-center gap-1 hover-glow transition-all duration-300">
              <MapPin size={15} className="text-green-400" />
              <span>Porto Alegre, RS</span>
            </div>
          </div>
          <div className="text-center sm:text-right">
            <span className="animate-shimmer">😍Mais de 70 anos cuidando com amor💞</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold gradient-text">
            Lar Gustavo Nordlund
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#inicio" className="text-white hover:text-blue-400 transition-all duration-300 font-medium hover-glow">
              Início
            </a>
            <a href="#sobre" className="text-white hover:text-blue-400 transition-all duration-300 font-medium hover-glow">
              Sobre Nós
            </a>
            <a href="#servicos" className="text-white hover:text-blue-400 transition-all duration-300 font-medium hover-glow">
              Serviços
            </a>
            <a href="#equipe" className="text-white hover:text-blue-400 transition-all duration-300 font-medium hover-glow">
              Equipe
            </a>
            <a href="#comunicacao" className="text-white hover:text-blue-400 transition-all duration-300 font-medium hover-glow">
              Comunicação
            </a>
            <a href="#apoiadores" className="text-white hover:text-blue-400 transition-all duration-300 font-medium hover-glow">
              Apoiadores
            </a>
            <a href="#doacoes" className="text-white hover:text-blue-400 transition-all duration-300 font-medium hover-glow">
              Como Doar
            </a>
            <a href="#trabalhe-conosco" className="text-white hover:text-blue-400 transition-all duration-300 font-medium hover-glow">
              Trabalhe Conosco
            </a>
            <a href="#transparencia" className="text-white hover:text-blue-400 transition-all duration-300 font-medium hover-glow">
              Transparência
            </a>
            <a href="#feedback" className="text-white hover:text-blue-400 transition-all duration-300 font-medium hover-glow">
              Feedback
            </a>
            <a href="#contato" className="btn-gradient text-white px-4 py-2 rounded-lg font-medium hover-lift">
              Contato
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white hover:text-blue-400 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-white/20 pt-4 glass-dark rounded-xl p-4 animate-fade-in-up">
            {/* Title in Mobile Menu */}
            <div className="text-center mb-4 pb-4 border-b">
              <div className="text-lg font-bold gradient-text">
                Lar Gustavo Nordlund
              </div>
            </div>
            <div className="flex flex-col space-y-3">
              <a href="#inicio" className="text-white hover:text-blue-400 transition-colors font-medium">
                Início
              </a>
              <a href="#sobre" className="text-white hover:text-blue-400 transition-colors font-medium">
                Sobre Nós
              </a>
              <a href="#servicos" className="text-white hover:text-blue-400 transition-colors font-medium">
                Serviços
              </a>
              <a href="#equipe" className="text-white hover:text-blue-400 transition-colors font-medium">
                Equipe
              </a>
              <a href="#comunicacao" className="text-white hover:text-blue-400 transition-colors font-medium">
                Comunicação
              </a>
              <a href="#apoiadores" className="text-white hover:text-blue-400 transition-colors font-medium">
                Apoiadores
              </a>
              <a href="#doacoes" className="text-white hover:text-blue-400 transition-colors font-medium">
                Como Doar
              </a>
              <a href="#trabalhe-conosco" className="text-white hover:text-blue-400 transition-colors font-medium">
                Trabalhe Conosco
              </a>
              <a href="#transparencia" className="text-white hover:text-blue-400 transition-colors font-medium">
                Transparência
              </a>
              <a href="#feedback" className="text-white hover:text-blue-400 transition-colors font-medium">
                Feedback
              </a>
              <a href="#contato" className="btn-gradient text-white px-4 py-2 rounded-lg font-medium text-center hover-lift">
                Contato
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;