import React from 'react';
import { Award, Home, Heart, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-[#1f387f] mb-4 tracking-tight">
            Nossa História
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
           Lar Gustavo Nordlund

Fundado em 1949 pelo missionário sueco Gustavo Nordlund (in memoriam). 

O Lar foi reconhecido como ILPI (Instituição de Longa Permanência para Idosos) em 27 de setembro de 1976. 
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img 
              src="https://images.pexels.com/photos/3768131/pexels-photo-3768131.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Ambiente acolhedor" 
              className="rounded-2xl shadow-lg"
            />
          </div>
          <div>
            <h3 className="text-3xl font-bold text-[#1f387f] mb-6">
              Tradição em Cuidado
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Fundado há mais de 70 anos, o Lar Gustavo Nordlund nasceu do desejo 
              de oferecer um ambiente verdadeiramente familiar para idosos que necessitam 
              de cuidados especializados. Ao longo das décadas, nos tornamos referência 
              em assistência integral.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Nossa missão é proporcionar qualidade de vida, dignidade e carinho a 
              cada residente, mantendo sempre o compromisso com a excelência no atendimento 
              e o respeito pela individualidade de cada pessoa.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow">
                <Award className="text-[#d7241f]" size={20} />
                <span className="font-semibold text-[#1f387f]">70+ Anos</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow">
                <Home className="text-[#d7241f]" size={20} />
                <span className="font-semibold text-[#1f387f]">Ambiente Familiar</span>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-[#1f387f] mb-12 text-center">
            Missão, Visão e Valores
          </h3>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Missão */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="bg-[#d7241f] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="text-white" size={28} />
              </div>
              <h4 className="text-2xl font-bold text-[#1f387f] mb-4 text-center">Missão</h4>
              <p className="text-gray-600 leading-relaxed text-center">
                Acolher e manter idosos, com base nos valores cristãos, sem distinção à raça, cor ou credo, 
                através de serviços, programas, projetos e benefícios sociais, de caráter continuado, 
                permanente e planejado, de forma sustentável e com a garantia dos direitos conquistados por lei.
              </p>
            </div>

            {/* Visão */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="bg-[#d7241f] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="text-white" size={28} />
              </div>
              <h4 className="text-2xl font-bold text-[#1f387f] mb-4 text-center">Visão</h4>
              <p className="text-gray-600 leading-relaxed text-center">
                Ser reconhecido na prestação de serviços assistenciais e referência em acolhimento 
                à pessoa idosa, promovendo o bem-estar físico, emocional, material e espiritual.
              </p>
            </div>

            {/* Valores */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="bg-[#d7241f] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="text-white" size={28} />
              </div>
              <h4 className="text-2xl font-bold text-[#1f387f] mb-4 text-center">Valores</h4>
              <div className="text-gray-600 text-center">
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="flex items-center justify-center gap-1">
                    <div className="w-2 h-2 bg-[#d7241f] rounded-full"></div>
                    <span>Integridade</span>
                  </div>
                  <div className="flex items-center justify-center gap-1">
                    <div className="w-2 h-2 bg-[#d7241f] rounded-full"></div>
                    <span>Ética</span>
                  </div>
                  <div className="flex items-center justify-center gap-1">
                    <div className="w-2 h-2 bg-[#d7241f] rounded-full"></div>
                    <span>Legalidade</span>
                  </div>
                  <div className="flex items-center justify-center gap-1">
                    <div className="w-2 h-2 bg-[#d7241f] rounded-full"></div>
                    <span>Transparência</span>
                  </div>
                  <div className="flex items-center justify-center gap-1">
                    <div className="w-2 h-2 bg-[#d7241f] rounded-full"></div>
                    <span>Comprometimento</span>
                  </div>
                  <div className="flex items-center justify-center gap-1">
                    <div className="w-2 h-2 bg-[#d7241f] rounded-full"></div>
                    <span>Amor</span>
                  </div>
                  <div className="flex items-center justify-center gap-1">
                    <div className="w-2 h-2 bg-[#d7241f] rounded-full"></div>
                    <span>Segurança</span>
                  </div>
                  <div className="flex items-center justify-center gap-1">
                    <div className="w-2 h-2 bg-[#d7241f] rounded-full"></div>
                    <span>Evolução</span>
                  </div>
                  <div className="flex items-center justify-center gap-1">
                    <div className="w-2 h-2 bg-[#d7241f] rounded-full"></div>
                    <span>Resiliência</span>
                  </div>
                  <div className="flex items-center justify-center gap-1">
                    <div className="w-2 h-2 bg-[#d7241f] rounded-full"></div>
                    <span>Economicidade</span>
                  </div>
                  <div className="flex items-center justify-center gap-1">
                    <div className="w-2 h-2 bg-[#d7241f] rounded-full"></div>
                    <span>Espiritualidade</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Princípios Fundamentais */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center bg-white p-8 rounded-xl shadow-lg">
            <div className="bg-[#d7241f] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="text-white" size={28} />
            </div>
            <h4 className="text-xl font-bold text-[#1f387f] mb-3">Valores Cristãos</h4>
            <p className="text-gray-600">
              Baseamos nosso cuidado nos valores cristãos, acolhendo todos 
              sem distinção de raça, cor ou credo religioso.
            </p>
          </div>
          
          <div className="text-center bg-white p-8 rounded-xl shadow-lg">
            <div className="bg-[#d7241f] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="text-white" size={28} />
            </div>
            <h4 className="text-xl font-bold text-[#1f387f] mb-3">Equipe Qualificada</h4>
            <p className="text-gray-600">
              Nossa equipe multidisciplinar é composta por profissionais experientes 
              comprometidos com a excelência no cuidado integral.
            </p>
          </div>
          
          <div className="text-center bg-white p-8 rounded-xl shadow-lg">
            <div className="bg-[#d7241f] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Home className="text-white" size={28} />
            </div>
            <h4 className="text-xl font-bold text-[#1f387f] mb-3">Ambiente Acolhedor</h4>
            <p className="text-gray-600">
              Garantimos direitos conquistados por lei em um ambiente 
              familiar, seguro e sustentável.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;