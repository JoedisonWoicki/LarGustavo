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
    <section id="contato" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-blue-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M20%2020c0-11.046-8.954-20-20-20v20h20z%22/%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-[#29478f] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float"></div>
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float" style={{animationDelay: '3s'}}></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black gradient-text mb-4 tracking-tight animate-fade-in-up">
            Entre em Contato
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Estamos à disposição para conversar, esclarecer dúvidas e apresentar nossos serviços e instalações.
            Nossa equipe está pronta para recebê-lo e sua família com todo carinho e atenção. Agende uma visita
            para conhecer pessoalmente o Lar Gustavo Nordlund e sentir o ambiente acolhedor que oferecemos.
            Você e sua família são sempre bem-vindos!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="glass-dark p-8 rounded-xl shadow-2xl hover-lift animate-slide-in-left">
            <h3 className="text-2xl font-bold text-white mb-8 text-glow">
              Informações de Contato
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-r from-[#29478f] to-blue-500 w-12 h-12 rounded-full flex items-center justify-center animate-pulse-glow">
                  <Phone className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1 text-glow">Telefone</h4>
                  <p className="text-slate-300">(51) 3386-1126</p>
                  <p className="text-slate-300">(51) 3386-1125</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-r from-[#29478f] to-blue-500 w-12 h-12 rounded-full flex items-center justify-center animate-pulse-glow">
                  <Mail className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1 text-glow">E-mail</h4>
                  <p className="text-slate-300">contato@largustavonordlund.com.br</p>
                  <p className="text-slate-300">rhrecrutamento@largustavonordlund.org.br</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-r from-[#29478f] to-blue-500 w-12 h-12 rounded-full flex items-center justify-center animate-pulse-glow">
                  <MapPin className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1 text-glow">Endereço</h4>
                  <p className="text-slate-300">
                     R. Dezenove de Fevereiro, 426 - Rubem Berta<br />
                    Porto Alegre, RS - CEP 91270-450
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-r from-[#29478f] to-blue-500 w-12 h-12 rounded-full flex items-center justify-center animate-pulse-glow">
                  <Clock className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1 text-glow">Horário de Visitas</h4>
                  <p className="text-slate-300">As visitas estão disponíveis nas terças, quintas e sábados, das 14h às 17h.
</p>
                  
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 glass rounded-xl text-white shadow-2xl hover-lift">
              <h4 className="font-bold mb-2">Agende uma Visita</h4>
              <p className="text-slate-300">
                Convidamos você e sua família para conhecer nossas instalações 
                e conversar com nossa equipe. Entre em contato para agendar.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-dark p-8 rounded-xl shadow-2xl hover-lift animate-slide-in-right">
            <h3 className="text-2xl font-bold text-white mb-6 text-glow">
              Envie uma Mensagem
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
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
                  required
                  className="w-full px-4 py-3 glass rounded-lg focus:ring-2 focus:ring-[#29478f] focus:border-transparent text-white placeholder-slate-400"
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
                  required
                  className="w-full px-4 py-3 glass rounded-lg focus:ring-2 focus:ring-[#29478f] focus:border-transparent text-white placeholder-slate-400"
                />
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
                  className="w-full px-4 py-3 glass rounded-lg focus:ring-2 focus:ring-[#29478f] focus:border-transparent text-white placeholder-slate-400"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-white mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 glass rounded-lg focus:ring-2 focus:ring-[#29478f] focus:border-transparent resize-vertical text-white placeholder-slate-400"
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