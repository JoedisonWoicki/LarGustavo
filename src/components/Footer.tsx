import React from 'react';
import { Heart, Phone, Mail, MapPin, Facebook, Instagram, Youtube, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#1f387f] text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/logotipo lar.jpg" 
                alt="Lar Gustavo Nordlund" 
                className="h-10 w-auto"
              />
              <div className="text-2xl font-bold">Lar Gustavo Nordlund</div>
            </div>
            <p className="text-blue-100 mb-6 leading-relaxed">
              Há mais de 70 anos cuidando com amor e dedicação de idosos em Porto Alegre/RS. 
              Oferecemos um ambiente familiar com assistência integral e equipe multidisciplinar qualificada.
            </p>
            <div className="text-blue-200 mb-2">
              <div className="font-semibold text-[#d7241f]">Tradição em Cuidado</div>
              <div>Mais de 70 anos de experiência</div>
            </div>
          </div>

          {/* Social Media */}
          <div className="mt-2">
            <h4 className="text-xl font-bold mb-4">Redes Sociais</h4>
            <div className="space-y-3">
              <a 
                href="https://www.facebook.com/largustavonordlund" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-blue-100 hover:text-white transition-colors group"
              >
                <div className="bg-blue-600 w-8 h-8 rounded-full flex items-center justify-center group-hover:bg-blue-500 transition-colors">
                  <Facebook size={16} />
                </div>
                <span>Facebook</span>
              </a>
              
              <a 
                href="https://www.instagram.com/largustavonordlund" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-blue-100 hover:text-white transition-colors group"
              >
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-8 h-8 rounded-full flex items-center justify-center group-hover:from-purple-400 group-hover:to-pink-400 transition-colors">
                  <Instagram size={16} />
                </div>
                <span>Instagram</span>
              </a>
              
              <a 
                href="https://www.youtube.com/@largustavonordlund" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-blue-100 hover:text-white transition-colors group"
              >
                <div className="bg-red-600 w-8 h-8 rounded-full flex items-center justify-center group-hover:bg-red-500 transition-colors">
                  <Youtube size={16} />
                </div>
                <span>YouTube</span>
              </a>
              
              <a 
                href="https://www.linkedin.com/company/largustavonordlund" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-blue-100 hover:text-white transition-colors group"
              >
                <div className="bg-blue-700 w-8 h-8 rounded-full flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                  <Linkedin size={16} />
                </div>
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
            
          {/* Quick Links */}
          <div className="md:col-span-1">
            <h4 className="text-xl font-bold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#inicio" className="text-blue-100 hover:text-white transition-colors">Início</a></li>
              <li><a href="#sobre" className="text-blue-100 hover:text-white transition-colors">Sobre Nós</a></li>
              <li><a href="#servicos" className="text-blue-100 hover:text-white transition-colors">Serviços</a></li>
              <li><a href="#equipe" className="text-blue-100 hover:text-white transition-colors">Equipe</a></li>
              <li><a href="#comunicacao" className="text-blue-100 hover:text-white transition-colors">Comunicação</a></li>
              <li><a href="#apoiadores" className="text-blue-100 hover:text-white transition-colors">Apoiadores</a></li>
              <li><a href="#doacoes" className="text-blue-100 hover:text-white transition-colors">Como Doar</a></li>
              <li><a href="#trabalhe-conosco" className="text-blue-100 hover:text-white transition-colors">Trabalhe Conosco</a></li>
              <li><a href="#contato" className="text-blue-100 hover:text-white transition-colors">Contato</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-1">
            <h4 className="text-xl font-bold mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-blue-100">
                <Phone size={16} />
                <span>(51) 3386-1125</span>
              </div>
              <div className="flex items-center gap-2 text-blue-100">
                <Mail size={16} />
                <span>contato@largustavonordlund.com.br</span>
              </div>
              <div className="flex items-start gap-2 text-blue-100">
                <MapPin size={16} className="mt-1" />
                <span>Porto Alegre, RS</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-400 mt-12 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-blue-100">
              © 2025 Lar Gustavo Nordlund. Todos os direitos reservados.
            </div>
            <div className="text-blue-200">
              Feito com <Heart className="inline text-[#d7241f]" size={16} /> para cuidar de quem você ama
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;