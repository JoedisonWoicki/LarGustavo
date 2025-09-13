import React from 'react';
import { Heart, Brain, Utensils, Activity, Clock, Shield } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: 'Cuidados Médicos',
      description: 'Acompanhamento médico regular, administração de medicamentos e cuidados de enfermagem 24 horas.',
      features: ['Consultas regulares', 'Enfermagem 24h', 'Medicação controlada', 'Emergências']
    },
    {
      icon: Utensils,
      title: 'Nutrição Especializada',
      description: 'Cardápio balanceado e personalizado, elaborado por nutricionistas para cada necessidade.',
      features: ['Cardápio personalizado', 'Dietas especiais', 'Acompanhamento nutricional', 'Refeições regulares']
    },
    {
      icon: Brain,
      title: 'Suporte Psicológico',
      description: 'Acompanhamento psicológico individual e em grupo para bem-estar emocional.',
      features: ['Terapia individual', 'Atividades em grupo', 'Apoio familiar', 'Estimulação cognitiva']
    },
    {
      icon: Activity,
      title: 'Atividades Sociais',
      description: 'Programação diversificada de atividades recreativas, sociais e terapêuticas.',
      features: ['Atividades recreativas', 'Fisioterapia', 'Eventos sociais', 'Integração familiar']
    },
    {
      icon: Clock,
      title: 'Cuidado Integral 24h',
      description: 'Assistência completa em período integral com profissionais especializados.',
      features: ['Supervisão 24h', 'Cuidados pessoais', 'Segurança total', 'Monitoramento contínuo']
    },
    {
      icon: Shield,
      title: 'Ambiente Seguro',
      description: 'Instalações adaptadas e seguras, com equipamentos modernos e acessibilidade total.',
      features: ['Instalações adaptadas', 'Equipamentos modernos', 'Acessibilidade', 'Segurança total']
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-[#1f387f] mb-4 tracking-tight">
            Nossos Serviços
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos assistência integral com uma abordagem multidisciplinar, 
            garantindo o melhor cuidado em todas as áreas da vida dos nossos residentes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
              <div className="bg-[#d7241f] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <service.icon className="text-white" size={28} />
              </div>
              
              <h3 className="text-xl font-bold text-[#1f387f] mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-[#d7241f] rounded-full"></div>
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-[#1f387f] rounded-2xl p-8 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">
            Assistência Integral Personalizada
          </h3>
          <p className="text-xl text-blue-100 mb-6">
            Cada residente recebe um plano de cuidados personalizado, desenvolvido 
            pela nossa equipe multidisciplinar para atender suas necessidades específicas.
          </p>
          <a 
            href="#contato" 
            className="inline-block bg-[#d7241f] text-white px-8 py-4 rounded-lg hover:bg-[#b81e1b] transition-colors font-semibold"
          >
            Agende uma Visita
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;