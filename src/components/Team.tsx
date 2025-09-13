import React from 'react';
import { Stethoscope, Brain as Brain2, Utensils, Heart, Activity, Shield } from 'lucide-react';

const Team = () => {
  const teamAreas = [
    {
      icon: Stethoscope,
      title: 'Equipe Médica',
      description: 'Médicos geriatras e especialistas dedicados ao cuidado da saúde dos nossos residentes.',
      professionals: ['Médico Geriatra', 'Enfermeiros', 'Técnicos de Enfermagem', 'Farmacêutico']
    },
    {
      icon: Brain2,
      title: 'Saúde Mental',
      description: 'Profissionais especializados em saúde mental e bem-estar emocional.',
      professionals: ['Psicólogo', 'Terapeuta Ocupacional', 'Assistente Social']
    },
    {
      icon: Activity,
      title: 'Reabilitação',
      description: 'Equipe focada na manutenção e melhoria da qualidade de vida física.',
      professionals: ['Fisioterapeuta', 'Educador Físico', 'Recreacionista']
    },
    {
      icon: Utensils,
      title: 'Nutrição',
      description: 'Especialistas em nutrição geriátrica para uma alimentação saudável e balanceada.',
      professionals: ['Nutricionista', 'Chef', 'Auxiliares de Cozinha']
    }
  ];

  return (
    <section id="equipe" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-[#1f387f] mb-4 tracking-tight">
            Nossa Equipe Multidisciplinar
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Contamos com profissionais altamente qualificados e dedicados, 
            trabalhando em conjunto para proporcionar o melhor cuidado aos nossos residentes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {teamAreas.map((area, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-[#d7241f] w-16 h-16 rounded-full flex items-center justify-center">
                  <area.icon className="text-white" size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#1f387f]">
                    {area.title}
                  </h3>
                </div>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {area.description}
              </p>

              <div className="grid grid-cols-2 gap-2">
                {area.professionals.map((prof, profIndex) => (
                  <div key={profIndex} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#d7241f] rounded-full"></div>
                    <span className="text-sm text-gray-600">{prof}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Team Stats */}
        <div className="bg-[#1f387f] rounded-2xl p-8 text-white">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-[#d7241f] mb-2">24h</div>
              <div className="text-blue-100">Assistência Contínua</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#d7241f] mb-2">60+</div>
              <div className="text-blue-100">Profissionais</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#d7241f] mb-2">8</div>
              <div className="text-blue-100">Especialidades</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#d7241f] mb-2">70+</div>
              <div className="text-blue-100">Anos de Experiência</div>
            </div>
          </div>
        </div>

        {/* Commitment */}
        <div className="mt-16 text-center">
          <div className="bg-white p-12 rounded-2xl shadow-lg">
            <div className="flex justify-center mb-6">
              <div className="bg-[#d7241f] w-20 h-20 rounded-full flex items-center justify-center">
                <Heart className="text-white" size={36} />
              </div>
            </div>
            <h3 className="text-3xl font-bold text-[#1f387f] mb-4">
              Compromisso com a Excelência
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Nossa equipe passa por treinamentos constantes e está sempre atualizada 
              com as melhores práticas em geriatria e gerontologia. O bem-estar dos 
              nossos residentes é nossa maior prioridade.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;