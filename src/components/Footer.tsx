import React from 'react';
import { Heart, Phone, Mail, MapPin, Facebook, Instagram, Youtube, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative py-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        <div className="absolute top-20 left-20 w-72 h-72 bg-[#6c70e5] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/logotipo lar.jpg" 
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
          <div>
            <h4 className="text-xl font-bold mb-4">Redes Sociais</h4>
            <div className="space-y-3">
              <a 
                href="https://www.facebook.com/largustavonordlund" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors group hover-lift"
              >
                <div className="bg-gradient-to-r from-blue-600 to-blue-500 w-8 h-8 rounded-full flex items-center justify-center group-hover:from-blue-500 group-hover:to-blue-400 transition-colors animate-pulse-glow">
                  <Facebook size={16} />
                </div>
                <span>Facebook</span>
              </a>
              
              <a 
                href="https://www.instagram.com/largustavonordlund" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors group hover-lift"
              >
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-8 h-8 rounded-full flex items-center justify-center group-hover:from-purple-400 group-hover:to-pink-400 transition-colors animate-pulse-glow">
                  <Instagram size={16} />
                </div>
                <span>Instagram</span>
              </a>
              
              <a 
                href="https://www.youtube.com/@largustavonordlund" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors group hover-lift"
              >
                <div className="bg-gradient-to-r from-red-600 to-red-500 w-8 h-8 rounded-full flex items-center justify-center group-hover:from-red-500 group-hover:to-red-400 transition-colors animate-pulse-glow">
                  <Youtube size={16} />
                </div>
                <span>YouTube</span>
              </a>
              
              <a 
                href="https://www.linkedin.com/company/largustavonordlund" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors group hover-lift"
              >
                <div className="bg-gradient-to-r from-blue-700 to-blue-600 w-8 h-8 rounded-full flex items-center justify-center group-hover:from-blue-600 group-hover:to-blue-500 transition-colors animate-pulse-glow">
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
              <li><a href="#inicio" className="text-slate-300 hover:text-[#6c70e5] transition-colors hover-glow">Início</a></li>
              <li><a href="#sobre" className="text-slate-300 hover:text-[#6c70e5] transition-colors hover-glow">Sobre Nós</a></li>
              <li><a href="#servicos" className="text-slate-300 hover:text-[#6c70e5] transition-colors hover-glow">Serviços</a></li>
              <li><a href="#equipe" className="text-slate-300 hover:text-[#6c70e5] transition-colors hover-glow">Equipe</a></li>
              <li><a href="#comunicacao" className="text-slate-300 hover:text-[#6c70e5] transition-colors hover-glow">Comunicação</a></li>
              <li><a href="#apoiadores" className="text-slate-300 hover:text-[#6c70e5] transition-colors hover-glow">Apoiadores</a></li>
              <li><a href="#doacoes" className="text-slate-300 hover:text-[#6c70e5] transition-colors hover-glow">Como Doar</a></li>
              <li><a href="#trabalhe-conosco" className="text-slate-300 hover:text-[#6c70e5] transition-colors hover-glow">Trabalhe Conosco</a></li>
              <li><a href="#transparencia" className="text-slate-300 hover:text-[#6c70e5] transition-colors hover-glow">Transparência</a></li>
              <li><a href="#feedback" className="text-slate-300 hover:text-[#6c70e5] transition-colors hover-glow">Feedback</a></li>
              <li><a href="#contato" className="text-slate-300 hover:text-[#6c70e5] transition-colors hover-glow">Contato</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-1">
            <h4 className="text-xl font-bold mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-slate-300 hover-glow">
                <Phone size={16} className="text-[#6c70e5] animate-pulse-glow" />
                <span>(51) 3386-1125</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300 hover-glow">
                <Mail size={16} className="text-[#6c70e5] animate-pulse-glow" />
                <span>contato@largustavonordlund.com.br</span>
              </div>
              <div className="flex items-start gap-2 text-slate-300 hover-glow">
                <MapPin size={16} className="mt-1 text-[#6c70e5] animate-pulse-glow" />
                <span>Porto Alegre, RS</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-slate-300">
              © 2025 Lar Gustavo Nordlund. Todos os direitos reservados.
            </div>
            <div className="text-slate-300">
              Feito com <Heart className="inline text-[#6c70e5] animate-pulse-glow" size={16} /> para cuidar de quem você ama
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;