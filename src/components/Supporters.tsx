import React from 'react';
import { Heart, Handshake } from 'lucide-react';
import { IMAGES } from '../config/images';

const Supporters = () => {
  const supporters = [
    {
      logo: IMAGES.supporters.apoiador1,
      website: 'https://www.banrisul.com.br',
    },
    {
      logo: IMAGES.supporters.aelSistemas,
      website: 'https://www.aelsistemas.com.br',
    },
    {
      logo: IMAGES.supporters.apoiador2,
      website: 'https://institutojardimeuropa.com.br/?fbclid=PAZXh0bgNhZW0CMTEAAacwl6Lm7VYRuN-XJGmYY_uTjQyXYYbHT1s5DLYlEJfzxr5_cLD4k29Rj7rqwg_aem_xjHS5384NYHQtMu_2ypBuw',
    },
    {
      logo: IMAGES.supporters.apoiador3,
      website: 'https://www.marquespan.com.br/',
    },
    {
      logo: IMAGES.supporters.madaDoces,
      website: 'https://www.instagram.com/madadocesartesanais/',
    },
    {
      logo: IMAGES.supporters.apoiador4,
      website: 'https://www.instagram.com/petacolhe/',
    },
    {
      logo: IMAGES.supporters.apoiador5,
      website: 'https://doacoes.prefeitura.poa.br/fundoidoso/projetos',
    },
    {
      logo: IMAGES.supporters.apoiador6,
      website: 'https://www.atitus.edu.br',
    },
    {
      logo: IMAGES.supporters.frigelar,
      website: 'https://www.frigelar.com.br/?srsltid=AfmBOorFsi5oj9SF_-S3gZg1H2i6z5j3pKKZjvBmoNFhgRpSIYH70auo',
    },
    {
      logo: IMAGES.supporters.pestanaLeiloes,
      website: 'https://www.pestanaleiloes.com.br/',
    },
    {
      logo: IMAGES.supporters.apoiador7,
      website: 'https://www.instagram.com/divasdaalegria?igsh=M2l3dG5pZXRuOG40',
    }
  ];

  return (
    <section id="apoiadores" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-blue-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M20%2020c0-11.046-8.954-20-20-20v20h20z%22/%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-[#6c70e5] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float"></div>
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float" style={{animationDelay: '3s'}}></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black gradient-text mb-4 tracking-tight animate-fade-in-up">
            Nossos Apoiadores
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Nossa gratidão a todos os parceiros, apoiadores e amigos que acreditam em nossa missão
            e tornam possível continuar cuidando com amor, dedicação e excelência há mais de 70 anos.
            Cada parceria representa um compromisso compartilhado com a dignidade e qualidade de vida
            dos idosos. Juntos, construímos um futuro melhor para quem construiu a nossa sociedade.
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
                className="block glass-dark p-6 rounded-xl shadow-2xl hover-lift interactive-card animate-scale-in transition-all duration-300 hover:scale-105" 
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="aspect-square flex items-center justify-center mb-4">
                  <img 
                    src={supporter.logo}
                    alt={supporter.name}
                    className="max-w-full max-h-full object-contain filter group-hover:brightness-110 transition-all"
                  />
                </div>
                <h3 className="font-bold text-white text-center mb-2 group-hover:text-[#29478f] transition-colors text-glow">
                  {supporter.name}
                </h3>
                <p className="text-slate-300 text-sm text-center">
                  {supporter.description}
                </p>
              </a>
            </div>
          ))}
        </div>

        {/* Partnership Call to Action */}
        <div className="glass-dark rounded-2xl p-8 text-center text-white shadow-2xl hover-lift animate-fade-in-up">
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-r from-[#29478f] to-blue-500 w-20 h-20 rounded-full flex items-center justify-center animate-pulse-glow">
              <Handshake className="text-white" size={36} />
            </div>
          </div>
          
          <h3 className="text-3xl font-bold mb-4">
            Seja Nosso Parceiro
          </h3>
          <p className="text-xl text-slate-300 mb-6 max-w-3xl mx-auto">
            Empresas e organizações que desejam apoiar nossa causa são sempre bem-vindas. 
            Juntos, podemos fazer ainda mais pela qualidade de vida dos idosos.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 p-4 rounded-lg">
              <Heart className="text-[#29478f] mx-auto mb-2 animate-pulse-glow" size={24} />
              <div className="font-bold gradient-text mb-1">Responsabilidade Social</div>
              <div className="text-slate-300 text-sm">Demonstre o compromisso da sua empresa com causas sociais</div>
            </div>
            <div className="bg-white/10 p-4 rounded-lg">
              <Heart className="text-[#29478f] mx-auto mb-2 animate-pulse-glow" size={24} />
              <div className="font-bold gradient-text mb-1">Impacto Real</div>
              <div className="text-slate-300 text-sm">Sua parceria gera impacto direto na vida dos idosos</div>
            </div>
            <div className="bg-white/10 p-4 rounded-lg">
              <Heart className="text-[#29478f] mx-auto mb-2 animate-pulse-glow" size={24} />
              <div className="font-bold gradient-text mb-1">Reconhecimento</div>
              <div className="text-slate-300 text-sm">Sua marca associada a uma instituição respeitada</div>
            </div>
          </div>

          <a 
            href="#contato" 
            className="btn-gradient text-white px-8 py-4 rounded-lg font-semibold hover-lift"
          >
            Quero Ser Parceiro
          </a>
        </div>

        {/* Thank You Message */}
        <div className="mt-16 text-center">
          <div className="glass-dark p-8 rounded-xl shadow-2xl hover-lift animate-fade-in-up">
            <div className="flex justify-center mb-4">
              <Heart className="text-[#29478f] animate-pulse-glow" size={32} />
            </div>
            <h4 className="text-2xl font-bold text-white mb-4 text-glow">
              Gratidão aos Nossos Apoiadores
            </h4>
            <p className="text-slate-300 max-w-2xl mx-auto leading-relaxed">
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