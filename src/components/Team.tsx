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
    <section id="equipe" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        <div className="absolute top-20 left-20 w-72 h-72 bg-[#6c70e5] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black gradient-text mb-4 tracking-tight animate-fade-in-up">
            Nossa Equipe Multidisciplinar
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Nossa equipe é composta por mais de 60 profissionais altamente qualificados e apaixonados
            pelo cuidado geriátrico. Trabalhamos de forma integrada e colaborativa, unindo diferentes
            especialidades para proporcionar assistência completa, humanizada e de excelência aos
            nossos residentes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {teamAreas.map((area, index) => (
            <div key={index} className="glass-dark p-8 rounded-xl shadow-2xl hover-lift interactive-card animate-scale-in" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-gradient-to-r from-[#0e28be] to-purple-500 w-16 h-16 rounded-full flex items-center justify-center animate-pulse-glow">
                  <area.icon className="text-white" size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white text-glow">
                    {area.title}
                  </h3>
                </div>
              </div>
              
              <p className="text-slate-300 mb-6 leading-relaxed">
                {area.description}
              </p>

              <div className="grid grid-cols-2 gap-2">
                {area.professionals.map((prof, profIndex) => (
                  <div key={profIndex} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-gradient-to-r from-[#0e28be] to-purple-400 rounded-full animate-pulse-glow"></div>
                    <span className="text-sm text-slate-400">{prof}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Team Stats */}
        <div className="glass-dark rounded-2xl p-8 text-white shadow-2xl hover-lift animate-fade-in-up">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold gradient-text mb-2">24h</div>
              <div className="text-slate-300">Assistência Contínua</div>
            </div>
            <div>
              <div className="text-3xl font-bold gradient-text mb-2">60+</div>
              <div className="text-slate-300">Profissionais</div>
            </div>
            <div>
              <div className="text-3xl font-bold gradient-text mb-2">8</div>
              <div className="text-slate-300">Especialidades</div>
            </div>
            <div>
              <div className="text-3xl font-bold gradient-text mb-2">70+</div>
              <div className="text-slate-300">Anos de Experiência</div>
            </div>
          </div>
        </div>

        {/* Commitment */}
        <div className="mt-16 text-center">
          <div className="glass-dark p-12 rounded-2xl shadow-2xl hover-lift animate-fade-in-up">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-r from-[#0e28be] to-purple-500 w-20 h-20 rounded-full flex items-center justify-center animate-pulse-glow">
                <Heart className="text-white" size={36} />
              </div>
            </div>
            <h3 className="text-3xl font-bold text-white mb-4 text-glow">
              Compromisso com a Excelência
            </h3>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Investimos continuamente no desenvolvimento de nossa equipe através de treinamentos,
              capacitações e atualizações nas melhores práticas em geriatria e gerontologia.
              Cada profissional é criteriosamente selecionado não apenas por sua excelência técnica,
              mas também por sua empatia, dedicação e compromisso com o cuidado humanizado. O bem-estar
              e a felicidade dos nossos residentes são nossa missão e inspiração diária.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;