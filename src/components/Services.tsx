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
            Oferecemos assistência integral com uma abordagem multidisciplinar, 
            garantindo o melhor cuidado em todas as áreas da vida dos nossos residentes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="glass-dark p-8 rounded-xl shadow-2xl hover-lift interactive-card animate-scale-in" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="bg-gradient-to-r from-[#6c70e5] to-purple-500 w-16 h-16 rounded-full flex items-center justify-center mb-6 animate-pulse-glow">
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
                    <div className="w-2 h-2 bg-gradient-to-r from-[#6c70e5] to-purple-400 rounded-full animate-pulse-glow"></div>
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
            Cada residente recebe um plano de cuidados personalizado, desenvolvido 
            pela nossa equipe multidisciplinar para atender suas necessidades específicas.
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