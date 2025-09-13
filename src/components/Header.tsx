import React, { useState } from 'react';
import { Menu, X, Phone, MapPin } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg relative z-50">
      {/* Contact Bar */}
      <div className="bg-[#1f387f] text-white py-2">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <img 
              src="/logotipo lar.jpg" 
              alt="Lar Gustavo Nordlund" 
              className="h-6 w-auto"
            />
            <div className="flex items-center gap-1">
              <Phone size={15} />
              <span>(51) 3386-1125</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin size={15} />
              <span>Porto Alegre, RS</span>
            </div>
          </div>
          <div className="text-center sm:text-right">
            <span>😍Mais de 70 anos cuidando com amor💞</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img 
              src="/logotipo lar.jpg" 
              alt="Lar Gustavo Nordlund" 
              className="h-12 w-auto"
            />
            <div className="text-2xl font-bold text-[#1f387f]">
              Lar Gustavo Nordlund
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#inicio" className="text-gray-700 hover:text-[#d7241f] transition-colors font-medium">
              Início
            </a>
            <a href="#sobre" className="text-gray-700 hover:text-[#d7241f] transition-colors font-medium">
              Sobre Nós
            </a>
            <a href="#servicos" className="text-gray-700 hover:text-[#d7241f] transition-colors font-medium">
              Serviços
            </a>
            <a href="#equipe" className="text-gray-700 hover:text-[#d7241f] transition-colors font-medium">
              Equipe
            </a>
            <a href="#comunicacao" className="text-gray-700 hover:text-[#d7241f] transition-colors font-medium">
              Comunicação
            </a>
            <a href="#apoiadores" className="text-gray-700 hover:text-[#d7241f] transition-colors font-medium">
              Apoiadores
            </a>
            <a href="#doacoes" className="text-gray-700 hover:text-[#d7241f] transition-colors font-medium">
              Como Doar
            </a>
            <a href="#trabalhe-conosco" className="text-gray-700 hover:text-[#d7241f] transition-colors font-medium">
              Trabalhe Conosco
            </a>
            <a href="#contato" className="bg-[#d7241f] text-white px-4 py-2 rounded-lg hover:bg-[#b81e1b] transition-colors font-medium">
              Contato
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-[#1f387f]"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t pt-4">
            {/* Logo in Mobile Menu */}
            <div className="flex items-center justify-center gap-2 mb-4 pb-4 border-b">
              <img 
                src="/logotipo lar.jpg" 
                alt="Lar Gustavo Nordlund" 
                className="h-8 w-auto"
              />
              <div className="text-lg font-bold text-[#1f387f]">
                Lar Gustavo Nordlund
              </div>
            </div>
            <div className="flex flex-col space-y-3">
              <a href="#inicio" className="text-gray-700 hover:text-[#d7241f] transition-colors font-medium">
                Início
              </a>
              <a href="#sobre" className="text-gray-700 hover:text-[#d7241f] transition-colors font-medium">
                Sobre Nós
              </a>
              <a href="#servicos" className="text-gray-700 hover:text-[#d7241f] transition-colors font-medium">
                Serviços
              </a>
              <a href="#equipe" className="text-gray-700 hover:text-[#d7241f] transition-colors font-medium">
                Equipe
              </a>
              <a href="#comunicacao" className="text-gray-700 hover:text-[#d7241f] transition-colors font-medium">
                Comunicação
              </a>
              <a href="#apoiadores" className="text-gray-700 hover:text-[#d7241f] transition-colors font-medium">
                Apoiadores
              </a>
              <a href="#doacoes" className="text-gray-700 hover:text-[#d7241f] transition-colors font-medium">
                Como Doar
              </a>
              <a href="#trabalhe-conosco" className="text-gray-700 hover:text-[#d7241f] transition-colors font-medium">
                Trabalhe Conosco
              </a>
              <a href="#contato" className="bg-[#d7241f] text-white px-4 py-2 rounded-lg hover:bg-[#b81e1b] transition-colors font-medium text-center">
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