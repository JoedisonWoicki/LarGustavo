import React from 'react';
import { useState } from 'react';
import { Quote, Star, Phone, Calendar, Users, ArrowRight } from 'lucide-react';
import { supabase } from '../lib/supabase';

const Communication = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubmittingNewsletter, setIsSubmittingNewsletter] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newsletterEmail.trim()) {
      alert('Por favor, digite um e-mail válido.');
      return;
    }
    
    setIsSubmittingNewsletter(true);
    
    try {
      const { error } = await supabase
        .from('newsletter')
        .insert([
          {
            email: newsletterEmail.trim()
          }
        ]);

      if (error) {
        if (error.code === '23505') { // Unique constraint violation
          alert('Este e-mail já está cadastrado em nossa newsletter!');
        } else {
          throw error;
        }
      } else {
        alert('E-mail cadastrado com sucesso! Você receberá nossas atualizações.');
        setNewsletterEmail('');
      }
    } catch (error) {
      console.error('Erro ao cadastrar e-mail:', error);
      alert('Erro ao cadastrar e-mail. Tente novamente.');
    } finally {
      setIsSubmittingNewsletter(false);
    }
  };

  const testimonials = [
    {
      name: 'Maria Silva',
      relationship: 'Filha de residente',
      content: 'Há 3 anos minha mãe vive no Lar Gustavo Nordlund e não poderia estar mais satisfeita. O cuidado é exemplar e ela se sente verdadeiramente em casa. A equipe é atenciosa e profissional.',
      rating: 5
    },
    {
      name: 'João Santos',
      relationship: 'Filho de residente',
      content: 'A tradição de 70 anos fala por si só. Meu pai recebe o melhor cuidado possível, com atenção personalizada e muito carinho. Recomendo de olhos fechados.',
      rating: 5
    },
    {
      name: 'Ana Costa',
      relationship: 'Neta de residente',
      content: 'O ambiente familiar e acolhedor fez toda a diferença para minha avó. Ela participa das atividades, fez novos amigos e está muito bem cuidada. Gratidão eterna à equipe.',
      rating: 5
    }
  ];

  const news = [
    {
      title: 'Inauguração da Nova Sala de Fisioterapia',
      date: '15 de Janeiro, 2025',
      category: 'Infraestrutura',
      excerpt: 'Inauguramos uma nova sala de fisioterapia com equipamentos modernos para melhor atender nossos residentes.',
      image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Festa de Ano Novo com as Famílias',
      date: '31 de Dezembro, 2024',
      category: 'Eventos',
      excerpt: 'Celebramos a chegada de 2025 com uma festa especial reunindo residentes, famílias e equipe.',
      image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Campanha de Natal Arrecada Mais de R$ 50 mil',
      date: '20 de Dezembro, 2024',
      category: 'Doações',
      excerpt: 'Nossa campanha natalina foi um sucesso, permitindo melhorias nas instalações e atividades.',
      image: 'https://images.pexels.com/photos/1303081/pexels-photo-1303081.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Nova Parceria com Universidade Local',
      date: '10 de Dezembro, 2024',
      category: 'Parcerias',
      excerpt: 'Firmamos parceria para estágios supervisionados em geriatria e gerontologia.',
      image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  return (
    <section id="comunicacao" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-purple-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M20%2020c0-11.046-8.954-20-20-20v20h20z%22/%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-[#0e28be] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float"></div>
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float" style={{animationDelay: '3s'}}></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black gradient-text mb-4 tracking-tight animate-fade-in-up">
            Comunicação
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Mantemos uma comunicação transparente e constante com as famílias, 
            garantindo que todos estejam sempre informados sobre o bem-estar dos residentes.
          </p>
        </div>

        {/* News Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold gradient-text mb-4 animate-fade-in-up">
              Notícias e Atualizações
            </h3>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              Fique por dentro das novidades, eventos e melhorias do Lar Gustavo Nordlund.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {news.map((article, index) => (
              <div key={index} className="glass-dark rounded-xl shadow-2xl overflow-hidden hover-lift interactive-card animate-scale-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="relative">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      article.category === 'Infraestrutura' ? 'bg-blue-100 text-blue-800' :
                      article.category === 'Eventos' ? 'bg-green-100 text-green-800' :
                      article.category === 'Doações' ? 'bg-red-100 text-red-800' :
                      'bg-purple-100 text-purple-800'
                    }`}>
                      {article.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                    <Calendar size={16} className="text-[#0e28be] animate-pulse-glow" />
                    <span>{article.date}</span>
                  </div>
                  
                  <h4 className="text-xl font-bold text-white mb-3 leading-tight text-glow">
                    {article.title}
                  </h4>
                  
                  <p className="text-slate-300 mb-4 leading-relaxed">
                    {article.excerpt}
                  </p>
                  
                  <button className="flex items-center gap-2 text-[#0e28be] font-semibold hover:gap-3 transition-all hover-glow">
                    <span>Leia mais</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="glass-dark rounded-xl p-8 text-white text-center shadow-2xl hover-lift">
            <h4 className="text-2xl font-bold mb-4">
              Receba Nossas Atualizações
            </h4>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              Cadastre-se para receber notícias, eventos e informações importantes 
              sobre o Lar Gustavo Nordlund diretamente no seu e-mail.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Seu e-mail"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                required
                className="flex-1 px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#0e28be]"
              />
              <button 
                type="submit"
                disabled={isSubmittingNewsletter}
                className="btn-gradient px-6 py-3 rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover-lift"
              >
                {isSubmittingNewsletter ? 'Cadastrando...' : 'Cadastrar'}
              </button>
            </form>
          </div>
        </div>
        {/* Testimonials Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold gradient-text mb-4 animate-fade-in-up">
              Depoimentos das Famílias
            </h3>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              A confiança das famílias é nosso maior patrimônio. 
              Veja o que dizem sobre nosso cuidado e dedicação.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="glass-dark p-8 rounded-xl shadow-2xl relative hover-lift interactive-card animate-scale-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="absolute -top-4 left-8">
                  <div className="bg-gradient-to-r from-[#0e28be] to-purple-500 w-12 h-12 rounded-full flex items-center justify-center animate-pulse-glow">
                    <Quote className="text-white" size={24} />
                  </div>
                </div>
                
                <div className="pt-6">
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="text-yellow-400 fill-current" size={20} />
                    ))}
                  </div>
                  
                  <p className="text-slate-300 mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="border-t border-white/20 pt-4">
                    <div className="font-bold text-white text-glow">{testimonial.name}</div>
                    <div className="text-slate-400 text-sm">{testimonial.relationship}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Communication CTA */}
        <div className="glass-dark rounded-2xl p-8 text-center text-white shadow-2xl hover-lift animate-fade-in-up">
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-r from-[#0e28be] to-purple-500 w-20 h-20 rounded-full flex items-center justify-center animate-pulse-glow">
              <Phone className="text-white" size={36} />
            </div>
          </div>
          <h3 className="text-3xl font-bold mb-4">
            Mantenha-se Sempre Informado
          </h3>
          <p className="text-xl text-slate-300 mb-6">
            Nossa equipe está sempre disponível para conversar com você sobre o bem-estar 
            do seu familiar. Agende uma conversa ou visita quando desejar.
          </p>
          <a 
            href="#contato" 
            className="btn-gradient text-white px-8 py-4 rounded-lg font-semibold hover-lift"
          >
            Entre em Contato
          </a>
        </div>
      </div>
    </section>
  );
};

export default Communication;