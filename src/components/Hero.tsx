import React from 'react';
import { Heart, Shield, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section id="inicio" className="bg-gradient-to-br from-[#1f387f] to-[#2d4a8f] text-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl lg:text-6xl font-black mb-6 leading-tight tracking-tight">
              Mais de 70 Anos de 
              <span className="text-[#d7241f] font-black"> Cuidado </span>
              e Carinho
            </h1>
            <p className="text-xl mb-8 text-blue-100 leading-relaxed">
              O Lar Gustavo Nordlund oferece um ambiente familiar e assistência integral 
              para mais de 70 residentes, com uma equipe multidisciplinar qualificada 
              em Porto Alegre/RS.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a 
                href="#contato" 
                className="bg-[#d7241f] text-white px-8 py-4 rounded-lg hover:bg-[#b81e1b] transition-colors font-semibold text-center shadow-lg"
              >
                Entre em Contato
              </a>
              <a 
                href="#sobre" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-[#1f387f] transition-colors font-semibold text-center"
              >
                Conheça Nossa História
              </a>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-blue-400">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Heart className="text-[#d7241f]" size={32} />
                </div>
                <div className="text-2xl font-bold">70+</div>
                <div className="text-blue-200 text-sm">Anos de tradição</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Users className="text-[#d7241f]" size={32} />
                </div>
                <div className="text-2xl font-bold">70+</div>
                <div className="text-blue-200 text-sm">Residentes</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Shield className="text-[#d7241f]" size={32} />
                </div>
                <div className="text-2xl font-bold">24h</div>
                <div className="text-blue-200 text-sm">Cuidado integral</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="public/Captura de tela 2025-07-16 155103.png" 
              alt="Cuidado com idosos" 
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
              <div className="text-[#1f387f] text-sm font-semibold mb-1">Localização</div>
              <div className="text-gray-600">Porto Alegre, RS</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;