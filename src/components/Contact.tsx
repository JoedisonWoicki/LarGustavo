import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { supabase } from '../lib/supabase';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setIsSubmitting(true);
    
    try {
      const { error } = await supabase
        .from('contatos')
        .insert([
          {
            nome: formData.name,
            email: formData.email,
            telefone: formData.phone,
            mensagem: formData.message
          }
        ]);

      if (error) {
        throw error;
      }

      alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error);
      alert('Erro ao enviar mensagem. Tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contato" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-[#1f387f] mb-4 tracking-tight">
            Entre em Contato
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos aqui para esclarecer suas dúvidas e ajudá-lo a conhecer 
            melhor nossos serviços. Entre em contato conosco.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-[#1f387f] mb-8">
              Informações de Contato
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-[#d7241f] w-12 h-12 rounded-full flex items-center justify-center">
                  <Phone className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-[#1f387f] mb-1">Telefone</h4>
                  <p className="text-gray-600">(51) 3386-1126</p>
                  <p className="text-gray-600">(51) 99999-8888</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#d7241f] w-12 h-12 rounded-full flex items-center justify-center">
                  <Mail className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-[#1f387f] mb-1">E-mail</h4>
                  <p className="text-gray-600">contato@largustavonordlund.com.br</p>
                  <p className="text-gray-600">rhrecrutamento@largustavonordlund.org.br</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#d7241f] w-12 h-12 rounded-full flex items-center justify-center">
                  <MapPin className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-[#1f387f] mb-1">Endereço</h4>
                  <p className="text-gray-600">
                     R. Dezenove de Fevereiro, 426 - Rubem Berta<br />
                    Porto Alegre, RS - CEP 91270-450
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#d7241f] w-12 h-12 rounded-full flex items-center justify-center">
                  <Clock className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-[#1f387f] mb-1">Horário de Visitas</h4>
                  <p className="text-gray-600">As visitas estão disponíveis nas terças, quintas e sábados, das 14h às 17h.
</p>
                  
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-[#1f387f] rounded-xl text-white">
              <h4 className="font-bold mb-2">Agende uma Visita</h4>
              <p className="text-blue-100">
                Convidamos você e sua família para conhecer nossas instalações 
                e conversar com nossa equipe. Entre em contato para agendar.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-[#1f387f] mb-6">
              Envie uma Mensagem
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
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
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1f387f] focus:border-transparent"
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
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1f387f] focus:border-transparent"
                />
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
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1f387f] focus:border-transparent resize-vertical"
                  placeholder="Como podemos ajudá-lo?"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-gradient text-white py-4 px-6 rounded-lg font-semibold flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed hover-lift"
              >
                <Send size={20} />
                {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;