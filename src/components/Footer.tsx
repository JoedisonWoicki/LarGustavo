import React from 'react';
import { Heart, Phone, Mail, MapPin, Facebook, Instagram, Youtube, Linkedin } from 'lucide-react';
import { IMAGES } from '../config/images';

const Footer = () => {
  return (
    <footer className="relative py-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-purple-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M20%2020c0-11.046-8.954-20-20-20v20h20z%22/%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-[#0e28be] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float"></div>
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float" style={{animationDelay: '3s'}}></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2 animate-slide-in-left">
            <div className="flex items-center gap-3 mb-4">
              <img
                src={IMAGES.logo}
                alt="Lar Gustavo Nordlund"
                className="h-10 w-auto animate-pulse-glow"
              />
              <div className="text-2xl font-bold gradient-text">Lar Gustavo Nordlund</div>
            </div>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Há mais de 70 anos cuidando com amor e dedicação de idosos em Porto Alegre/RS. 
              Oferecemos um ambiente familiar com assistência integral e equipe multidisciplinar qualificada.
            </p>
            <div className="text-slate-300 mb-2">
              <div className="font-semibold gradient-text">Tradição em Cuidado</div>
              <div>Mais de 70 anos de experiência</div>
            </div>
          </div>

          {/* Social Media */}
          <div className="animate-slide-in-right">
            <h4 className="text-xl font-bold mb-4 text-glow">Redes Sociais</h4>
            <div className="space-y-3">
              <a 
                href="https://www.facebook.com/largustavonordlund" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-300 hover:text-[#0e28be] transition-all duration-300 group hover-lift hover-glow"
              >
                <div className="bg-gradient-to-r from-[#0e28be] to-purple-500 w-8 h-8 rounded-full flex items-center justify-center group-hover:from-blue-500 group-hover:to-blue-400 transition-all duration-300 animate-pulse-glow">
                  <Facebook size={16} className="text-white" />
                </div>
                <span>Facebook</span>
              </a>
              
              <a 
                href="https://www.instagram.com/largustavonordlund" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-300 hover:text-[#0e28be] transition-all duration-300 group hover-lift hover-glow"
              >
                <div className="bg-gradient-to-r from-[#0e28be] to-purple-500 w-8 h-8 rounded-full flex items-center justify-center group-hover:from-purple-400 group-hover:to-pink-400 transition-colors animate-pulse-glow">
                  <Instagram size={16} className="text-white" />
                </div>
                <span>Instagram</span>
              </a>
              
              <a 
                href="https://www.youtube.com/@largustavonordlund" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-300 hover:text-[#0e28be] transition-all duration-300 group hover-lift hover-glow"
              >
                <div className="bg-gradient-to-r from-[#0e28be] to-purple-500 w-8 h-8 rounded-full flex items-center justify-center group-hover:from-red-500 group-hover:to-red-400 transition-all duration-300 animate-pulse-glow">
                  <Youtube size={16} className="text-white" />
                </div>
                <span>YouTube</span>
              </a>
              
              <a 
                href="https://www.linkedin.com/company/largustavonordlund" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-300 hover:text-[#0e28be] transition-all duration-300 group hover-lift hover-glow"
              >
                <div className="bg-gradient-to-r from-[#0e28be] to-purple-500 w-8 h-8 rounded-full flex items-center justify-center group-hover:from-blue-600 group-hover:to-blue-500 transition-all duration-300 animate-pulse-glow">
                  <Linkedin size={16} className="text-white" />
                </div>
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
            
          {/* Quick Links */}
          <div className="md:col-span-1 animate-fade-in-up">
            <h4 className="text-xl font-bold mb-4 text-glow">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#inicio" className="text-slate-300 hover:text-[#0e28be] transition-colors hover-glow">Início</a></li>
              <li><a href="#sobre" className="text-slate-300 hover:text-[#0e28be] transition-colors hover-glow">Sobre Nós</a></li>
              <li><a href="#servicos" className="text-slate-300 hover:text-[#0e28be] transition-colors hover-glow">Serviços</a></li>
              <li><a href="#equipe" className="text-slate-300 hover:text-[#0e28be] transition-colors hover-glow">Equipe</a></li>
              <li><a href="#comunicacao" className="text-slate-300 hover:text-[#0e28be] transition-colors hover-glow">Comunicação</a></li>
              <li><a href="#apoiadores" className="text-slate-300 hover:text-[#0e28be] transition-colors hover-glow">Apoiadores</a></li>
              <li><a href="#doacoes" className="text-slate-300 hover:text-[#0e28be] transition-colors hover-glow">Como Doar</a></li>
              <li><a href="#trabalhe-conosco" className="text-slate-300 hover:text-[#0e28be] transition-colors hover-glow">Trabalhe Conosco</a></li>
              <li><a href="#transparencia" className="text-slate-300 hover:text-[#0e28be] transition-colors hover-glow">Transparência</a></li>
              <li><a href="#feedback" className="text-slate-300 hover:text-[#0e28be] transition-colors hover-glow">Feedback</a></li>
              <li><a href="#contato" className="text-slate-300 hover:text-[#0e28be] transition-colors hover-glow">Contato</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-1 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <h4 className="text-xl font-bold mb-4 text-glow">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-slate-300 hover-glow">
                <Phone size={16} className="text-[#0e28be] animate-pulse-glow" />
                <span>(51) 3386-1125</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300 hover-glow">
                <Mail size={16} className="text-[#0e28be] animate-pulse-glow" />
                <span>contato@largustavonordlund.com.br</span>
              </div>
              <div className="flex items-start gap-2 text-slate-300 hover-glow">
                <MapPin size={16} className="mt-1 text-[#0e28be] animate-pulse-glow" />
                <span>R. Dezenove de Fevereiro, 426  Rubem Berta
Porto Alegre, RS  CEP 91270-450</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8 text-center animate-fade-in-up">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-white">
              © 2025 Lar Gustavo Nordlund. Todos os direitos reservados.
            </div>
            <div className="text-white">
              Feito com <Heart className="inline text-[#0e28be] animate-pulse-glow" size={16} /> para cuidar de quem você ama
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;