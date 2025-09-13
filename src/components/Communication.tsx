import React from 'react';
import { Quote, Star, Phone, Calendar, Users, ArrowRight } from 'lucide-react';

const Communication = () => {
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
    <section id="comunicacao" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-[#1f387f] mb-4 tracking-tight">
            Comunicação
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mantemos uma comunicação transparente e constante com as famílias, 
            garantindo que todos estejam sempre informados sobre o bem-estar dos residentes.
          </p>
        </div>

        {/* News Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-[#1f387f] mb-4">
              Notícias e Atualizações
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Fique por dentro das novidades, eventos e melhorias do Lar Gustavo Nordlund.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {news.map((article, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
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
                    <Calendar size={16} />
                    <span>{article.date}</span>
                  </div>
                  
                  <h4 className="text-xl font-bold text-[#1f387f] mb-3 leading-tight">
                    {article.title}
                  </h4>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {article.excerpt}
                  </p>
                  
                  <button className="flex items-center gap-2 text-[#d7241f] font-semibold hover:gap-3 transition-all">
                    <span>Leia mais</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="bg-[#1f387f] rounded-xl p-8 text-white text-center">
            <h4 className="text-2xl font-bold mb-4">
              Receba Nossas Atualizações
            </h4>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Cadastre-se para receber notícias, eventos e informações importantes 
              sobre o Lar Gustavo Nordlund diretamente no seu e-mail.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Seu e-mail"
                className="flex-1 px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#d7241f]"
              />
              <button className="bg-[#d7241f] px-6 py-3 rounded-lg hover:bg-[#b81e1b] transition-colors font-semibold">
                Cadastrar
              </button>
            </div>
          </div>
        </div>
        {/* Testimonials Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-[#1f387f] mb-4">
              Depoimentos das Famílias
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A confiança das famílias é nosso maior patrimônio. 
              Veja o que dizem sobre nosso cuidado e dedicação.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg relative">
                <div className="absolute -top-4 left-8">
                  <div className="bg-[#d7241f] w-12 h-12 rounded-full flex items-center justify-center">
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
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="border-t pt-4">
                    <div className="font-bold text-[#1f387f]">{testimonial.name}</div>
                    <div className="text-gray-500 text-sm">{testimonial.relationship}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Communication CTA */}
        <div className="bg-[#1f387f] rounded-2xl p-8 text-center text-white">
          <div className="flex justify-center mb-6">
            <div className="bg-[#d7241f] w-20 h-20 rounded-full flex items-center justify-center">
              <Phone className="text-white" size={36} />
            </div>
          </div>
          <h3 className="text-3xl font-bold mb-4">
            Mantenha-se Sempre Informado
          </h3>
          <p className="text-xl text-blue-100 mb-6">
            Nossa equipe está sempre disponível para conversar com você sobre o bem-estar 
            do seu familiar. Agende uma conversa ou visita quando desejar.
          </p>
          <a 
            href="#contato" 
            className="inline-block bg-[#d7241f] text-white px-8 py-4 rounded-lg hover:bg-[#b81e1b] transition-colors font-semibold"
          >
            Entre em Contato
          </a>
        </div>
      </div>
    </section>
  );
};

export default Communication;