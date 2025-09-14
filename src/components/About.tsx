import React from 'react';
import { Award, Home, Heart, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="sobre" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-purple-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M20%2020c0-11.046-8.954-20-20-20v20h20z%22/%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float"></div>
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float" style={{animationDelay: '3s'}}></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black gradient-text mb-4 tracking-tight animate-fade-in-up">
            Nossa História
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto animate-fade-in-up" style={{animationDelay: '0.2s'}}>
           Lar Gustavo Nordlund

Fundado em 1949 pelo missionário sueco Gustavo Nordlund (in memoriam). 

O Lar foi reconhecido como ILPI (Instituição de Longa Permanência para Idosos) em 27 de setembro de 1976. 
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16 relative z-10">
          <div className="animate-slide-in-left">
            <div className="glass-dark p-2 rounded-2xl hover-lift">
            <img 
              src="https://images.pexels.com/photos/3768131/pexels-photo-3768131.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Ambiente acolhedor" 
              className="rounded-xl shadow-2xl w-full"
            />
            </div>
          </div>
          <div className="animate-slide-in-right">
            <h3 className="text-3xl font-bold text-white mb-6 text-glow">
              Tradição em Cuidado
            </h3>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Fundado há mais de 70 anos, o Lar Gustavo Nordlund nasceu do desejo 
              de oferecer um ambiente verdadeiramente familiar para idosos que necessitam 
              de cuidados especializados. Ao longo das décadas, nos tornamos referência 
              em assistência integral.
            </p>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Nossa missão é proporcionar qualidade de vida, dignidade e carinho a 
              cada residente, mantendo sempre o compromisso com a excelência no atendimento 
              e o respeito pela individualidade de cada pessoa.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 glass px-4 py-2 rounded-lg shadow-lg hover-lift">
                <Award className="text-yellow-400" size={20} />
                <span className="font-semibold text-white">70+ Anos</span>
              </div>
              <div className="flex items-center gap-2 glass px-4 py-2 rounded-lg shadow-lg hover-lift">
                <Home className="text-blue-400" size={20} />
                <span className="font-semibold text-white">Ambiente Familiar</span>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16 relative z-10">
          <h3 className="text-3xl font-bold gradient-text mb-12 text-center animate-fade-in-up">
            Missão, Visão e Valores
          </h3>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Missão */}
            <div className="glass-dark p-8 rounded-xl shadow-2xl hover-lift interactive-card animate-scale-in">
              <div className="bg-gradient-to-r from-pink-500 to-red-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse-glow">
                <Heart className="text-white" size={28} />
              </div>
              <h4 className="text-2xl font-bold text-white mb-4 text-center text-glow">Missão</h4>
              <p className="text-slate-300 leading-relaxed text-center">
                Acolher e manter idosos, com base nos valores cristãos, sem distinção à raça, cor ou credo, 
                através de serviços, programas, projetos e benefícios sociais, de caráter continuado, 
                permanente e planejado, de forma sustentável e com a garantia dos direitos conquistados por lei.
              </p>
            </div>

            {/* Visão */}
            <div className="glass-dark p-8 rounded-xl shadow-2xl hover-lift interactive-card animate-scale-in" style={{animationDelay: '0.2s'}}>
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse-glow">
                <Award className="text-white" size={28} />
              </div>
              <h4 className="text-2xl font-bold text-white mb-4 text-center text-glow">Visão</h4>
              <p className="text-slate-300 leading-relaxed text-center">
                Ser reconhecido na prestação de serviços assistenciais e referência em acolhimento 
                à pessoa idosa, promovendo o bem-estar físico, emocional, material e espiritual.
              </p>
            </div>

            {/* Valores */}
            <div className="glass-dark p-8 rounded-xl shadow-2xl hover-lift interactive-card animate-scale-in" style={{animationDelay: '0.4s'}}>
              <div className="bg-gradient-to-r from-green-500 to-teal-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse-glow">
                <Users className="text-white" size={28} />
              </div>
              <h4 className="text-2xl font-bold text-white mb-4 text-center text-glow">Valores</h4>
              <div className="text-slate-300 text-center">
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="flex items-center justify-center gap-1">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse-glow"></div>
                    <span>Integridade</span>
                  </div>
                  <div className="flex items-center justify-center gap-1">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse-glow"></div>
                    <span>Ética</span>
                  </div>
                  <div className="flex items-center justify-center gap-1">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse-glow"></div>
                    <span>Legalidade</span>
                  </div>
                  <div className="flex items-center justify-center gap-1">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse-glow"></div>
                    <span>Transparência</span>
                  </div>
                  <div className="flex items-center justify-center gap-1">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse-glow"></div>
                    <span>Comprometimento</span>
                  </div>
                  <div className="flex items-center justify-center gap-1">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse-glow"></div>
                    <span>Amor</span>
                  </div>
                  <div className="flex items-center justify-center gap-1">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse-glow"></div>
                    <span>Segurança</span>
                  </div>
                  <div className="flex items-center justify-center gap-1">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse-glow"></div>
                    <span>Evolução</span>
                  </div>
                  <div className="flex items-center justify-center gap-1">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse-glow"></div>
                    <span>Resiliência</span>
                  </div>
                  <div className="flex items-center justify-center gap-1">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse-glow"></div>
                    <span>Economicidade</span>
                  </div>
                  <div className="flex items-center justify-center gap-1">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse-glow"></div>
                    <span>Espiritualidade</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Princípios Fundamentais */}
        <div className="grid md:grid-cols-3 gap-8 mt-16 relative z-10">
          <div className="text-center glass-dark p-8 rounded-xl shadow-2xl hover-lift interactive-card animate-fade-in-up">
            <div className="bg-gradient-to-r from-pink-500 to-red-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-glow">
              <Heart className="text-white" size={28} />
            </div>
            <h4 className="text-xl font-bold text-white mb-3 text-glow">Valores Cristãos</h4>
            <p className="text-slate-300">
              Baseamos nosso cuidado nos valores cristãos, acolhendo todos 
              sem distinção de raça, cor ou credo religioso.
            </p>
          </div>
          
          <div className="text-center glass-dark p-8 rounded-xl shadow-2xl hover-lift interactive-card animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-glow">
              <Users className="text-white" size={28} />
            </div>
            <h4 className="text-xl font-bold text-white mb-3 text-glow">Equipe Qualificada</h4>
            <p className="text-slate-300">
              Nossa equipe multidisciplinar é composta por profissionais experientes 
              comprometidos com a excelência no cuidado integral.
            </p>
          </div>
          
          <div className="text-center glass-dark p-8 rounded-xl shadow-2xl hover-lift interactive-card animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <div className="bg-gradient-to-r from-green-500 to-teal-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-glow">
              <Home className="text-white" size={28} />
            </div>
            <h4 className="text-xl font-bold text-white mb-3 text-glow">Ambiente Acolhedor</h4>
            <p className="text-slate-300">
              Garantimos direitos conquistados por lei em um ambiente 
              familiar, seguro e sustentável.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
  );
};

export default About;