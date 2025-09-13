import React, { useState } from 'react';
import { MessageSquare, ThumbsUp, AlertTriangle, Lightbulb, Send, Star } from 'lucide-react';

const Feedback = () => {
  const [formData, setFormData] = useState({
    type: '',
    name: '',
    email: '',
    phone: '',
    message: '',
    rating: 0
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Feedback enviado:', formData);
    alert('Sua mensagem foi enviada com sucesso! Agradecemos seu feedback.');
    setFormData({
      type: '',
      name: '',
      email: '',
      phone: '',
      message: '',
      rating: 0
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleRatingClick = (rating: number) => {
    setFormData({
      ...formData,
      rating: rating
    });
  };

  const feedbackTypes = [
    {
      value: 'sugestao',
      label: 'Sugestão',
      icon: Lightbulb,
      color: 'bg-blue-500',
      description: 'Compartilhe ideias para melhorarmos nossos serviços'
    },
    {
      value: 'reclamacao',
      label: 'Reclamação',
      icon: AlertTriangle,
      color: 'bg-red-500',
      description: 'Relate problemas ou insatisfações que precisa resolver'
    },
    {
      value: 'elogio',
      label: 'Elogio',
      icon: ThumbsUp,
      color: 'bg-green-500',
      description: 'Reconheça nosso trabalho e compartilhe experiências positivas'
    }
  ];

  return (
    <section id="feedback" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-[#1f387f] mb-4 tracking-tight">
            Sugestões, Reclamações e Elogios
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Sua opinião é muito importante para nós! Utilize o formulário abaixo para enviar suas 
            sugestões de melhoria, relatar qualquer problema ou insatisfação, ou registrar um elogio 
            sobre nossos produtos e serviços.
          </p>
        </div>

        {/* Feedback Type Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {feedbackTypes.map((type, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className={`${type.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                <type.icon className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-[#1f387f] mb-2">
                {type.label}
              </h3>
              <p className="text-gray-600 text-sm">
                {type.description}
              </p>
            </div>
          ))}
        </div>

        {/* Feedback Form */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-[#d7241f] w-12 h-12 rounded-full flex items-center justify-center">
              <MessageSquare className="text-white" size={24} />
            </div>
            <h3 className="text-2xl font-bold text-[#1f387f]">
              Envie seu Feedback
            </h3>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Feedback Type Selection */}
            <div>
              <label htmlFor="type" className="block text-sm font-semibold text-gray-700 mb-2">
                Tipo de Feedback *
              </label>
              <select
                id="type"
                name="type"
                value={formData.type}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1f387f] focus:border-transparent"
              >
                <option value="">Selecione o tipo de feedback</option>
                <option value="sugestao">Sugestão</option>
                <option value="reclamacao">Reclamação</option>
                <option value="elogio">Elogio</option>
              </select>
            </div>

            {/* Rating (only for elogio) */}
            {formData.type === 'elogio' && (
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Avaliação
                </label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => handleRatingClick(star)}
                      className={`p-1 rounded transition-colors ${
                        star <= formData.rating ? 'text-yellow-400' : 'text-gray-300'
                      }`}
                    >
                      <Star size={32} fill={star <= formData.rating ? 'currentColor' : 'none'} />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Personal Information */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1f387f] focus:border-transparent"
                  placeholder="Seu nome (opcional)"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1f387f] focus:border-transparent"
                  placeholder="seu@email.com (opcional)"
                />
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                Telefone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1f387f] focus:border-transparent"
                placeholder="(51) 99999-9999 (opcional)"
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                Mensagem *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1f387f] focus:border-transparent resize-vertical"
                placeholder="Por favor, descreva sua sugestão, reclamação ou elogio de forma clara..."
              ></textarea>
            </div>

            {/* Contact Preference */}
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-sm text-blue-800 mb-2">
                <strong>Deseja receber uma resposta?</strong>
              </p>
              <p className="text-xs text-blue-700">
                Caso queira receber uma resposta, deixe sua informação de contato (e-mail ou telefone). 
                Todas as mensagens são analisadas com atenção e ajudam no aprimoramento dos nossos processos e atendimento.
              </p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#d7241f] text-white py-4 px-6 rounded-lg hover:bg-[#b81e1b] transition-colors font-semibold flex items-center justify-center gap-2"
            >
              <Send size={20} />
              Enviar Feedback
            </button>

            <p className="text-xs text-gray-500 text-center">
              * Campos obrigatórios. Seus dados serão tratados com confidencialidade.
            </p>
          </form>
        </div>

        {/* Thank You Message */}
        <div className="mt-12 bg-[#1f387f] rounded-2xl p-8 text-center text-white">
          <div className="flex justify-center mb-4">
            <div className="bg-[#d7241f] w-16 h-16 rounded-full flex items-center justify-center">
              <ThumbsUp className="text-white" size={28} />
            </div>
          </div>
          <h3 className="text-3xl font-bold mb-4">
            Agradecemos sua Colaboração
          </h3>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Agradecemos sua colaboração, confiança e reconhecimento. Seu feedback é fundamental 
            para continuarmos oferecendo o melhor cuidado e atendimento aos nossos residentes e famílias.
          </p>
        </div>

        {/* Contact Information */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="bg-blue-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lightbulb className="text-white" size={20} />
            </div>
            <h4 className="font-bold text-[#1f387f] mb-2">Sugestões</h4>
            <p className="text-gray-600 text-sm">
              Suas ideias nos ajudam a melhorar continuamente nossos serviços e instalações.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="bg-red-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <AlertTriangle className="text-white" size={20} />
            </div>
            <h4 className="font-bold text-[#1f387f] mb-2">Reclamações</h4>
            <p className="text-gray-600 text-sm">
              Relatórios de problemas são tratados com prioridade para resolução rápida.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="bg-green-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <ThumbsUp className="text-white" size={20} />
            </div>
            <h4 className="font-bold text-[#1f387f] mb-2">Elogios</h4>
            <p className="text-gray-600 text-sm">
              Reconhecimentos motivam nossa equipe a manter a excelência no atendimento.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feedback;