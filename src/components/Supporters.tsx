import React from 'react';
import { Heart, Handshake } from 'lucide-react';

const Supporters = () => {
  const supporters = [
    {
    
      logo: '/public/01J2BW8W8WWSPYQPVF9YGZ6B8Z.jpg',
      website: 'https://www.banrisul.com.br',
 
     },
     {
      
      logo: '/public/ael_sistemas_logo.jpeg',
      website: 'https://www.aelsistemas.com.br',
    
    },
    {
      
      logo: 'public/Imagem do WhatsApp de 2025-06-18 à(s) 11.04.22_9973d740.jpg',
      website: 'https://institutojardimeuropa.com.br/?fbclid=PAZXh0bgNhZW0CMTEAAacwl6Lm7VYRuN-XJGmYY_uTjQyXYYbHT1s5DLYlEJfzxr5_cLD4k29Rj7rqwg_aem_xjHS5384NYHQtMu_2ypBuw',
    
     },    
     {
      
      logo: 'public/Imagem do WhatsApp de 2025-06-18 à(s) 10.42.15_0cf38c3e.jpg',
      website: 'https://www.marquespan.com.br/',
    
    },
    {
      
      logo: 'public/mada doces.jpg',
      website: 'https://www.instagram.com/madadocesartesanais/',
    
    },
    {
      
      logo: 'public/Imagem do WhatsApp de 2025-06-18 à(s) 11.04.40_c68254a2.jpg',
      website: 'https://www.instagram.com/petacolhe/',
    
    },
    {
      
      logo: '/public/image.jpg',
      website: 'https://doacoes.prefeitura.poa.br/fundoidoso/projetos',
      
    },
    {
     
      logo: '/public/Imagem do WhatsApp de 2025-06-18 à(s) 10.01.57_3b489ede.jpg',
      website: 'https://www.atitus.edu.br',
     },
     {
     
      logo: 'public/logo_frigelar_QERmNQ.png',
      website: 'https://www.frigelar.com.br/?srsltid=AfmBOorFsi5oj9SF_-S3gZg1H2i6z5j3pKKZjvBmoNFhgRpSIYH70auo',
     },
     {
   
      logo: 'public/pestana_leiloes_logo.jpeg',
      website: 'https://www.pestanaleiloes.com.br/',
     
    },
    {
      
      logo: '/public/Imagem do WhatsApp de 2025-06-18 à(s) 10.02.23_6f41c43f.jpg',
      website: 'https://www.instagram.com/divasdaalegria?igsh=M2l3dG5pZXRuOG40',
     
    }
    ];

  return (
    <section id="apoiadores" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-[#1f387f] mb-4 tracking-tight">
            Nossos Apoiadores
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Agradecemos a todos os parceiros e apoiadores que tornam possível 
            nossa missão de cuidar com amor e dedicação há mais de 70 anos.
          </p>
        </div>

        {/* Supporters Grid */}
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8 mb-16">
          {supporters.map((supporter, index) => (
            <div key={index} className="group">
              <a 
                href={supporter.website}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <div className="aspect-square flex items-center justify-center mb-4">
                  <img 
                    src={supporter.logo}
                    alt={supporter.name}
                    className="max-w-full max-h-full object-contain filter group-hover:brightness-110 transition-all"
                  />
                </div>
                <h3 className="font-bold text-[#1f387f] text-center mb-2 group-hover:text-[#d7241f] transition-colors">
                  {supporter.name}
                </h3>
                <p className="text-gray-600 text-sm text-center">
                  {supporter.description}
                </p>
              </a>
            </div>
          ))}
        </div>

        {/* Partnership Call to Action */}
        <div className="bg-gradient-to-r from-[#1f387f] to-[#2d4a8f] rounded-2xl p-8 text-center text-white">
          <div className="flex justify-center mb-6">
            <div className="bg-[#d7241f] w-20 h-20 rounded-full flex items-center justify-center">
              <Handshake className="text-white" size={36} />
            </div>
          </div>
          
          <h3 className="text-3xl font-bold mb-4">
            Seja Nosso Parceiro
          </h3>
          <p className="text-xl text-blue-100 mb-6 max-w-3xl mx-auto">
            Empresas e organizações que desejam apoiar nossa causa são sempre bem-vindas. 
            Juntos, podemos fazer ainda mais pela qualidade de vida dos idosos.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 p-4 rounded-lg">
              <Heart className="text-[#d7241f] mx-auto mb-2" size={24} />
              <div className="font-bold text-[#d7241f] mb-1">Responsabilidade Social</div>
              <div className="text-blue-100 text-sm">Demonstre o compromisso da sua empresa com causas sociais</div>
            </div>
            <div className="bg-white/10 p-4 rounded-lg">
              <Heart className="text-[#d7241f] mx-auto mb-2" size={24} />
              <div className="font-bold text-[#d7241f] mb-1">Impacto Real</div>
              <div className="text-blue-100 text-sm">Sua parceria gera impacto direto na vida dos idosos</div>
            </div>
            <div className="bg-white/10 p-4 rounded-lg">
              <Heart className="text-[#d7241f] mx-auto mb-2" size={24} />
              <div className="font-bold text-[#d7241f] mb-1">Reconhecimento</div>
              <div className="text-blue-100 text-sm">Sua marca associada a uma instituição respeitada</div>
            </div>
          </div>

          <a 
            href="#contato" 
            className="inline-block bg-[#d7241f] text-white px-8 py-4 rounded-lg hover:bg-[#b81e1b] transition-colors font-semibold"
          >
            Quero Ser Parceiro
          </a>
        </div>

        {/* Thank You Message */}
        <div className="mt-16 text-center">
          <div className="bg-gray-50 p-8 rounded-xl">
            <div className="flex justify-center mb-4">
              <Heart className="text-[#d7241f]" size={32} />
            </div>
            <h4 className="text-2xl font-bold text-[#1f387f] mb-4">
              Gratidão aos Nossos Apoiadores
            </h4>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Cada parceria representa muito mais que apoio financeiro ou material. 
              Representa a união de esforços para garantir dignidade, carinho e qualidade 
              de vida para quem dedicou suas vidas construindo nossa sociedade.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Supporters;