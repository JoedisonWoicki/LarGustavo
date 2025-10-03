import React, { useState } from 'react';
import { MessageSquare, ThumbsUp, AlertTriangle, Lightbulb, Send, Star, Mail, Phone, Clock } from 'lucide-react';
import { supabase } from '../lib/supabase';

const Feedback = () => {
  const [formData, setFormData] = useState({
    type: '',
    name: '',
    email: '',
    phone: '',
    message: '',
    rating: 0
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setIsSubmitting(true);
    
    try {
      const { error } = await supabase
        .from('feedbacks')
        .insert([
          {
            tipo: formData.type,
            mensagem: formData.message,
            nome: formData.name || null,
            email: formData.email || null,
            telefone: formData.phone || null,
            estrelas: formData.type === 'elogio' ? formData.rating : null
          }
        ]);

      if (error) {
        throw error;
      }

      alert('Feedback enviado com sucesso! Agradecemos sua colaboração.');
      setFormData({
        type: '',
        name: '',
        email: '',
        phone: '',
        message: '',
        rating: 0
      });
    } catch (error) {
      console.error('Erro ao enviar feedback:', error);
      alert('Erro ao enviar feedback. Tente novamente.');
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
    <section id="feedback" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-purple-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M20%2020c0-11.046-8.954-20-20-20v20h20z%22/%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-[#0e28be] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float"></div>
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float" style={{animationDelay: '3s'}}></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black gradient-text mb-4 tracking-tight animate-fade-in-up">
            Sugestões, Reclamações e Elogios
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Sua opinião é muito importante para nós! Utilize o formulário abaixo para enviar suas 
            sugestões de melhoria, relatar qualquer problema ou insatisfação, ou registrar um elogio 
            sobre nossos produtos e serviços.
          </p>
        </div>

        {/* Feedback Type Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {feedbackTypes.map((type, index) => (
            <div key={index} className="glass-dark p-6 rounded-xl shadow-2xl text-center hover-lift interactive-card animate-scale-in" style={{animationDelay: `${index * 0.1}s`}}>
              <div className={`${type.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                <type.icon className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 text-glow">
                {type.label}
              </h3>
              <p className="text-slate-300 text-sm">
                {type.description}
              </p>
            </div>
          ))}
        </div>

        {/* Feedback Form */}
        <div className="glass-dark rounded-2xl shadow-2xl p-8 hover-lift animate-fade-in-up">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-gradient-to-r from-[#0e28be] to-purple-500 w-12 h-12 rounded-full flex items-center justify-center animate-pulse-glow">
              <MessageSquare className="text-white" size={24} />
            </div>
            <h3 className="text-2xl font-bold text-white text-glow">
              Envie seu Feedback
            </h3>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Feedback Type Selection */}
            <div>
              <label htmlFor="type" className="block text-sm font-semibold text-white mb-2">
                Tipo de Feedback *
              </label>
              <select
                id="type"
                name="type"
                value={formData.type}
                onChange={handleChange}
                required
                className="w-full glass text-white py-4 px-6 rounded-lg font-semibold focus:ring-2 focus:ring-[#0e28be] focus:border-transparent"
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
                <label className="block text-sm font-semibold text-white mb-2">
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
                <label htmlFor="name" className="block text-sm font-semibold text-white mb-2">
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 glass rounded-lg focus:ring-2 focus:ring-[#0e28be] focus:border-transparent text-white placeholder-slate-400"
                  placeholder="Seu nome (opcional)"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 glass rounded-lg focus:ring-2 focus:ring-[#0e28be] focus:border-transparent text-white placeholder-slate-400"
                  placeholder="seu@email.com (opcional)"
                />
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-white mb-2">
                Telefone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 glass rounded-lg focus:ring-2 focus:ring-[#0e28be] focus:border-transparent text-white placeholder-slate-400"
                placeholder="(51) 99999-9999 (opcional)"
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-white mb-2">
                Mensagem *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 glass rounded-lg focus:ring-2 focus:ring-[#0e28be] focus:border-transparent resize-vertical text-white placeholder-slate-400"
                placeholder="Por favor, descreva sua sugestão, reclamação ou elogio de forma clara..."
              ></textarea>
            </div>

            {/* Contact Preference */}
            <div className="glass p-4 rounded-lg shadow-2xl">
              <p className="text-sm text-white mb-2">
                <strong>Deseja receber uma resposta?</strong>
              </p>
              <p className="text-xs text-slate-300">
                Caso queira receber uma resposta, deixe sua informação de contato (e-mail ou telefone). 
                Todas as mensagens são analisadas com atenção e ajudam no aprimoramento dos nossos processos e atendimento.
              </p>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full btn-gradient text-white py-4 px-6 rounded-lg font-semibold flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed hover-lift"
            >
              <Send size={20} />
              {isSubmitting ? 'Enviando...' : 'Enviar Feedback'}
            </button>

            <p className="text-xs text-slate-400 text-center">
              <strong>Importante:</strong> Ao enviar o formulário, seu cliente de email será aberto automaticamente 
              com a mensagem pré-formatada para envio ao administrador.
            </p>
          </form>
        </div>

        {/* Thank You Message */}
        <div className="mt-16 glass-dark rounded-2xl p-8 text-center text-white shadow-2xl hover-lift animate-fade-in-up">
          <div className="flex justify-center mb-4">
            <div className="bg-gradient-to-r from-[#0e28be] to-purple-500 w-20 h-20 rounded-full flex items-center justify-center animate-pulse-glow">
              <MessageSquare className="text-white" size={36} />
            </div>
          </div>
          <h3 className="text-3xl font-bold mb-4">
            Agradecemos sua Colaboração
          </h3>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Agradecemos sua colaboração, confiança e reconhecimento. Seu feedback é fundamental 
            para continuarmos oferecendo o melhor cuidado e atendimento aos nossos residentes e famílias.
          </p>
        </div>

        {/* Contact Information */}
        <div className="mt-12 glass-dark p-8 rounded-xl shadow-2xl hover-lift animate-fade-in-up">
          <div className="text-center mb-6">
            <h4 className="text-2xl font-bold text-white mb-2 text-glow">
              Informações de Contato
            </h4>
            <p className="text-slate-300">
              Entre em contato conosco através dos canais abaixo para esclarecimentos sobre seu feedback.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feedback;