import React from 'react';
import { Heart, Shield, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{animationDelay: '4s'}}></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="animate-slide-in-left">
            <h1 className="text-5xl lg:text-7xl font-black mb-6 leading-tight tracking-tight text-white">
              Mais de 70 Anos de 
              <span className="gradient-text font-black animate-pulse-glow"> Cuidado </span>
              e Carinho
            </h1>
            <p className="text-xl mb-8 text-slate-300 leading-relaxed animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              O Lar Gustavo Nordlund oferece um ambiente familiar e assistência integral 
              para mais de 70 residentes, com uma equipe multidisciplinar qualificada 
              em Porto Alegre/RS.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              <a 
                href="#contato" 
                className="btn-gradient text-white px-8 py-4 rounded-xl font-semibold text-center shadow-2xl hover-lift"
              >
                Entre em Contato
              </a>
              <a 
                href="#sobre" 
                className="glass text-white px-8 py-4 rounded-xl font-semibold text-center hover-lift hover-glow transition-all duration-300"
              >
                Conheça Nossa História
              </a>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
              <div className="text-center glass-dark p-4 rounded-xl hover-lift">
                <div className="flex justify-center mb-2 animate-pulse-glow">
                  <Heart className="text-pink-400" size={32} />
                </div>
                <div className="text-2xl font-bold text-white">70+</div>
                <div className="text-slate-300 text-sm">Anos de tradição</div>
              </div>
              <div className="text-center glass-dark p-4 rounded-xl hover-lift">
                <div className="flex justify-center mb-2 animate-pulse-glow" style={{animationDelay: '0.5s'}}>
                  <Users className="text-blue-400" size={32} />
                </div>
                <div className="text-2xl font-bold text-white">70+</div>
                <div className="text-slate-300 text-sm">Residentes</div>
              </div>
              <div className="text-center glass-dark p-4 rounded-xl hover-lift">
                <div className="flex justify-center mb-2 animate-pulse-glow" style={{animationDelay: '1s'}}>
                  <Shield className="text-green-400" size={32} />
                </div>
                <div className="text-2xl font-bold text-white">24h</div>
                <div className="text-slate-300 text-sm">Cuidado integral</div>
              </div>
            </div>
          </div>
          
          <div className="relative animate-slide-in-right">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur-2xl opacity-20 animate-pulse-glow"></div>
            <img 
              src="public/Captura de tela 2025-07-16 155103.png" 
              alt="Cuidado com idosos" 
              className="relative z-10 rounded-2xl shadow-2xl hover-lift"
            />
            <div className="absolute -bottom-6 -left-6 glass p-6 rounded-xl shadow-2xl animate-float">
              <div className="text-blue-400 text-sm font-semibold mb-1">Localização</div>
              <div className="text-white">Porto Alegre, RS</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;