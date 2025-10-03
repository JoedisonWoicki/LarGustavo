import React from 'react';
import { Heart, Brain, Utensils, Activity, Clock, Shield } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: 'Cuidados Médicos',
      description: 'Acompanhamento médico geriátrico especializado, administração segura de medicamentos e assistência de enfermagem 24 horas por dia, 7 dias por semana. Nossa equipe garante cuidado clínico de excelência para todas as necessidades de saúde.',
      features: ['Médico geriatra', 'Enfermagem 24h', 'Gestão de medicamentos', 'Pronto atendimento']
    },
    {
      icon: Utensils,
      title: 'Nutrição Especializada',
      description: 'Nutrição geriátrica especializada com cardápios elaborados por nutricionistas, adaptados às necessidades individuais de cada residente. Oferecemos refeições balanceadas, saborosas e adequadas para condições específicas de saúde.',
      features: ['Avaliação nutricional', 'Dietas terapêuticas', 'Consistência adaptada', '5 refeições diárias']
    },
    {
      icon: Brain,
      title: 'Suporte Psicológico',
      description: 'Cuidado emocional e mental com psicólogos especializados em gerontologia. Oferecemos terapia individual, suporte para adaptação, gestão de emoções e estimulação cognitiva para preservar memória e capacidades mentais.',
      features: ['Avaliação psicológica', 'Terapia individual', 'Grupos terapêuticos', 'Estimulação cognitiva']
    },
    {
      icon: Activity,
      title: 'Atividades Sociais',
      description: 'Programação rica e diversificada que promove socialização, estimulação física e mental. Incluindo fisioterapia, terapia ocupacional, música, arte, jogos e celebrações especiais que mantivem os residentes ativos e engajados.',
      features: ['Fisioterapia', 'Terapia ocupacional', 'Atividades recreativas', 'Eventos festivos']
    },
    {
      icon: Clock,
      title: 'Cuidado Integral 24h',
      description: 'Cuidado integral ininterrupto com equipe multidisciplinar presente 24 horas. Assistência em todas as atividades da vida diária, higiene, mobilidade, alimentação e conforto, garantindo segurança e bem-estar constante.',
      features: ['Cuidadores 24h', 'Higiene e conforto', 'Mobilidade assistida', 'Suporte noturno']
    },
    {
      icon: Shield,
      title: 'Ambiente Seguro',
      description: 'Infraestrutura completamente adaptada para idosos com acessibilidade universal, equipamentos modernos, sistemas de segurança e ambientes confortáveis. Quartos privativos ou compartilhados, áreas de convivência e jardins.',
      features: ['Acessibilidade total', 'Sistema de emergência', 'Quartos adaptados', 'Áreas de lazer']
    }
  ];

  return (
    <section id="servicos" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-purple-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M20%2020c0-11.046-8.954-20-20-20v20h20z%22/%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-[#6c70e5] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float"></div>
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float" style={{animationDelay: '3s'}}></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black gradient-text mb-4 tracking-tight animate-fade-in-up">
            Nossos Serviços
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Oferecemos assistência integral com abordagem multidisciplinar que engloba saúde física,
            mental, emocional e social. Cada residente recebe cuidado personalizado desenvolvido
            por nossa equipe especializada, garantindo qualidade de vida, dignidade e bem-estar.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="glass-dark p-8 rounded-xl shadow-2xl hover-lift interactive-card animate-scale-in" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="bg-gradient-to-r from-[#0e28be] to-purple-500 w-16 h-16 rounded-full flex items-center justify-center mb-6 animate-pulse-glow">
                <service.icon className="text-white" size={28} />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4 text-glow">
                {service.title}
              </h3>
              
              <p className="text-slate-300 mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-gradient-to-r from-[#0e28be] to-purple-400 rounded-full animate-pulse-glow"></div>
                    <span className="text-slate-400">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 glass-dark rounded-2xl p-8 text-center text-white shadow-2xl hover-lift animate-fade-in-up">
          <h3 className="text-3xl font-bold mb-4">
            Assistência Integral Personalizada
          </h3>
          <p className="text-xl text-slate-300 mb-6">
            Cada residente passa por uma avaliação completa ao chegar, e nossa equipe
            multidisciplinar desenvolve um Plano de Cuidado Individual (PCI) personalizado.
            Este plano é revisado regularmente e ajustado conforme as necessidades evoluem,
            garantindo atenção especializada e humanizada em todas as etapas.
          </p>
          <a 
            href="#contato" 
            className="btn-gradient text-white px-8 py-4 rounded-lg font-semibold hover-lift"
          >
            Agende uma Visita
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;