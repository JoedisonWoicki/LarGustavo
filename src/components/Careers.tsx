import React, { useState } from 'react';
import { Users, Heart, Award, Upload, Send, CheckCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';

const Careers = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    education: '',
    motivation: '',
    availability: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setIsSubmitting(true);
    
    try {
      const { error } = await supabase
        .from('vagas')
        .insert([
          {
            nome: formData.name,
            email: formData.email,
            telefone: formData.phone,
            cargo_interesse: formData.position,
            formacao: formData.education,
            experiencia: formData.experience || null,
            disponibilidade: formData.availability,
            motivo: formData.motivation
          }
        ]);

      if (error) {
        throw error;
      }

      alert('Candidatura enviada com sucesso! Entraremos em contato em breve.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        position: '',
        experience: '',
        education: '',
        motivation: '',
        availability: ''
      });
    } catch (error) {
      console.error('Erro ao enviar candidatura:', error);
      alert('Erro ao enviar candidatura. Tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const positions = [
    'Enfermeiro(a)',
    'Técnico(a) de Enfermagem',
    'Auxiliar de Enfermagem',
    'Médico Geriatra',
    'Fisioterapeuta',
    'Psicólogo(a)',
    'Terapeuta Ocupacional',
    'Nutricionista',
    'Assistente Social',
    'Cuidador(a)',
    'Auxiliar de Limpeza',
    'Cozinheiro(a)',
    'Auxiliar de Cozinha',
    'Recepcionista',
    'Auxiliar Administrativo',
    'Outro'
  ];

  const benefits = [
    {
      icon: Heart,
      title: 'Ambiente Acolhedor',
      description: 'Trabalhe em um ambiente familiar e humanizado'
    },
    {
      icon: Award,
      title: 'Crescimento Profissional',
      description: 'Oportunidades de capacitação e desenvolvimento'
    },
    {
      icon: Users,
      title: 'Equipe Unida',
      description: 'Faça parte de uma equipe comprometida e colaborativa'
    },
    {
      icon: CheckCircle,
      title: 'Benefícios Completos',
      description: 'Pacote de benefícios competitivo e atrativo'
    }
  ];

  return (
    <section id="trabalhe-conosco" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-[#1f387f] mb-4 tracking-tight">
            Trabalhe Conosco
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Junte-se à nossa equipe e faça parte de uma tradição de mais de 70 anos 
            cuidando com amor e dedicação. Buscamos profissionais comprometidos com o bem-estar dos idosos.
          </p>
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center bg-gray-50 p-6 rounded-xl">
              <div className="bg-[#d7241f] w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="text-white" size={24} />
              </div>
              <h4 className="font-bold text-[#1f387f] mb-2">{benefit.title}</h4>
              <p className="text-gray-600 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Why Work With Us */}
          <div>
            <h3 className="text-3xl font-bold text-[#1f387f] mb-6">
              Por que Trabalhar Conosco?
            </h3>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="bg-[#d7241f] w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Heart className="text-white" size={16} />
                </div>
                <div>
                  <h4 className="font-bold text-[#1f387f] mb-2">Propósito Significativo</h4>
                  <p className="text-gray-600">
                    Trabalhe com propósito, fazendo a diferença na vida de idosos e suas famílias todos os dias.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-[#d7241f] w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Award className="text-white" size={16} />
                </div>
                <div>
                  <h4 className="font-bold text-[#1f387f] mb-2">Tradição e Estabilidade</h4>
                  <p className="text-gray-600">
                    Mais de 70 anos de história e solidez no mercado, oferecendo segurança e estabilidade profissional.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-[#d7241f] w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Users className="text-white" size={16} />
                </div>
                <div>
                  <h4 className="font-bold text-[#1f387f] mb-2">Equipe Multidisciplinar</h4>
                  <p className="text-gray-600">
                    Trabalhe ao lado de profissionais qualificados em um ambiente colaborativo e de aprendizado contínuo.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-[#1f387f] rounded-xl text-white">
              <h4 className="font-bold mb-2">Oportunidades Disponíveis</h4>
              <p className="text-blue-100 mb-4">
                Estamos sempre em busca de profissionais dedicados para integrar nossa equipe. 
                Envie seu currículo mesmo que não haja vagas abertas no momento.
              </p>
              <div className="text-sm text-blue-200">
                Áreas em constante recrutamento: Enfermagem, Cuidadores, Fisioterapia, Nutrição
              </div>
            </div>
          </div>

          {/* Application Form */}
          <div className="bg-gray-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-[#1f387f] mb-6">
              Candidate-se
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1f387f] focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1f387f] focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Telefone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1f387f] focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="position" className="block text-sm font-semibold text-gray-700 mb-2">
                    Cargo de Interesse *
                  </label>
                  <select
                    id="position"
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1f387f] focus:border-transparent"
                  >
                    <option value="">Selecione um cargo</option>
                    {positions.map((position, index) => (
                      <option key={index} value={position}>{position}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="education" className="block text-sm font-semibold text-gray-700 mb-2">
                  Formação Acadêmica *
                </label>
                <input
                  type="text"
                  id="education"
                  name="education"
                  value={formData.education}
                  onChange={handleChange}
                  required
                  placeholder="Ex: Técnico em Enfermagem, Graduação em Fisioterapia..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1f387f] focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="experience" className="block text-sm font-semibold text-gray-700 mb-2">
                  Experiência Profissional
                </label>
                <textarea
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Descreva sua experiência profissional relevante..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1f387f] focus:border-transparent resize-vertical"
                ></textarea>
              </div>

              <div>
                <label htmlFor="availability" className="block text-sm font-semibold text-gray-700 mb-2">
                  Disponibilidade de Horário *
                </label>
                <select
                  id="availability"
                  name="availability"
                  value={formData.availability}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1f387f] focus:border-transparent"
                >
                  <option value="">Selecione sua disponibilidade</option>
                  <option value="integral">Período Integral (8h)</option>
                  <option value="manha">Período da Manhã</option>
                  <option value="tarde">Período da Tarde</option>
                  <option value="noite">Período da Noite</option>
                  <option value="plantao">Plantão 12x36</option>
                  <option value="fins-semana">Fins de Semana</option>
                  <option value="flexivel">Horário Flexível</option>
                </select>
              </div>

              <div>
                <label htmlFor="motivation" className="block text-sm font-semibold text-gray-700 mb-2">
                  Por que deseja trabalhar conosco? *
                </label>
                <textarea
                  id="motivation"
                  name="motivation"
                  value={formData.motivation}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Conte-nos sobre sua motivação para trabalhar no cuidado de idosos..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1f387f] focus:border-transparent resize-vertical"
                ></textarea>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Upload className="text-[#1f387f]" size={20} />
                  <span className="font-semibold text-[#1f387f]">Anexar Currículo</span>
                </div>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  className="w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-[#1f387f] file:text-white file:font-semibold hover:file:bg-[#2d4a8f] file:cursor-pointer"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Formatos aceitos: PDF, DOC, DOCX (máx. 5MB)
                </p>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#d7241f] text-white py-4 px-6 rounded-lg hover:bg-[#b81e1b] transition-colors font-semibold flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={20} />
                {isSubmitting ? 'Enviando...' : 'Enviar Candidatura'}
              </button>

              <p className="text-xs text-gray-500 text-center">
                * Campos obrigatórios. Seus dados serão tratados com confidencialidade.
              </p>
            </form>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-[#1f387f] to-[#2d4a8f] rounded-2xl p-8 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">
            Faça Parte da Nossa Família
          </h3>
          <p className="text-xl text-blue-100 mb-6">
            Se você tem paixão pelo cuidado de idosos e quer fazer a diferença na vida das pessoas, 
            queremos conhecê-lo. Venha construir uma carreira com propósito conosco.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="bg-white/10 p-4 rounded-lg">
              <div className="font-bold text-[#d7241f] text-lg">Processo Seletivo</div>
              <div className="text-blue-100 text-sm">Análise de currículo → Entrevista → Integração</div>
            </div>
            <div className="bg-white/10 p-4 rounded-lg">
              <div className="font-bold text-[#d7241f] text-lg">Contato RH</div>
              <div className="text-blue-100 text-sm">rhrecrutamento@largustavonordlund.org.br</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Careers;