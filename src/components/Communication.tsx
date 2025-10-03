import React from 'react';
import { useState } from 'react';
import { Quote, Star, Phone, Calendar, Users, ArrowRight, X } from 'lucide-react';
import { supabase } from '../lib/supabase';

const Communication = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubmittingNewsletter, setIsSubmittingNewsletter] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState<number | null>(null);

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
      image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800',
      fullContent: `
        <p>Estamos muito felizes em anunciar a inauguração da nossa nova sala de fisioterapia, um espaço moderno e totalmente equipado para proporcionar ainda mais qualidade de vida aos nossos residentes.</p>

        <h3>Investimento em Infraestrutura</h3>
        <p>O novo espaço conta com mais de 80m² dedicados exclusivamente à reabilitação e manutenção da saúde física dos nossos residentes. Investimos em equipamentos de última geração, incluindo:</p>
        <ul>
          <li>Esteiras ergométricas com sistema de segurança</li>
          <li>Aparelhos de fortalecimento muscular adaptados</li>
          <li>Mesa de fisioterapia elétrica</li>
          <li>Equipamentos para terapia ocupacional</li>
          <li>Barras paralelas para treino de marcha</li>
        </ul>

        <h3>Benefícios para os Residentes</h3>
        <p>Com este novo espaço, poderemos oferecer sessões de fisioterapia mais frequentes e personalizadas, contribuindo para:</p>
        <ul>
          <li>Melhoria da mobilidade e equilíbrio</li>
          <li>Prevenção de quedas</li>
          <li>Fortalecimento muscular</li>
          <li>Manutenção da autonomia</li>
          <li>Recuperação pós-cirúrgica mais eficiente</li>
        </ul>

        <p>A inauguração contou com a presença de toda a equipe, residentes e seus familiares, em um momento de celebração e gratidão por mais esta conquista.</p>
      `
    },
    {
      title: 'Festa de Ano Novo com as Famílias',
      date: '31 de Dezembro, 2024',
      category: 'Eventos',
      excerpt: 'Celebramos a chegada de 2025 com uma festa especial reunindo residentes, famílias e equipe.',
      image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800',
      fullContent: `
        <p>A virada do ano de 2024 para 2025 foi celebrada com muito amor, alegria e união no Lar Gustavo Nordlund. Nossa tradicional festa de Réveillon reuniu residentes, familiares e toda a equipe em uma noite inesquecível.</p>

        <h3>Uma Celebração Especial</h3>
        <p>O evento começou às 20h com um jantar especial preparado pela nossa equipe de nutrição e cozinha. O cardápio incluiu pratos tradicionais da data, todos adaptados para as necessidades dietéticas de nossos residentes:</p>
        <ul>
          <li>Peru assado com molho de frutas</li>
          <li>Arroz à grega</li>
          <li>Farofa especial</li>
          <li>Saladas variadas</li>
          <li>Sobremesas: rabanada, salada de frutas e sorvete</li>
        </ul>

        <h3>Atividades e Diversão</h3>
        <p>Durante a noite, promovemos diversas atividades que encantaram a todos:</p>
        <ul>
          <li>Música ao vivo com repertório de clássicos brasileiros</li>
          <li>Karaokê com os residentes</li>
          <li>Dança e confraternização</li>
          <li>Contagem regressiva especial para a meia-noite</li>
          <li>Brinde com espumante (sem álcool) e uvas</li>
        </ul>

        <h3>Momentos de Emoção</h3>
        <p>A meia-noite foi marcada por abraços, lágrimas de alegria e muitas mensagens de esperança para o novo ano. Familiares puderam compartilhar este momento especial com seus entes queridos, renovando votos de amor e cuidado.</p>

        <p>Agradecemos a todos que participaram e tornaram esta celebração tão especial. Que 2025 seja um ano repleto de saúde, amor e realizações para todos!</p>
      `
    },
    {
      title: 'Campanha de Natal Arrecada Mais de R$ 50 mil',
      date: '20 de Dezembro, 2024',
      category: 'Doações',
      excerpt: 'Nossa campanha natalina foi um sucesso, permitindo melhorias nas instalações e atividades.',
      image: 'https://images.pexels.com/photos/1303081/pexels-photo-1303081.jpeg?auto=compress&cs=tinysrgb&w=800',
      fullContent: `
        <p>A Campanha de Natal 2024 do Lar Gustavo Nordlund superou todas as expectativas, arrecadando mais de R$ 50 mil em doações financeiras, além de inúmeros itens materiais. Este resultado extraordinário demonstra a generosidade e o compromisso da nossa comunidade com o bem-estar dos idosos.</p>

        <h3>Resultados da Campanha</h3>
        <p>Durante os meses de novembro e dezembro, realizamos uma campanha intensa de arrecadação com os seguintes resultados:</p>
        <ul>
          <li><strong>R$ 52.350,00</strong> em doações financeiras</li>
          <li><strong>850 kg</strong> de alimentos não perecíveis</li>
          <li><strong>450 unidades</strong> de produtos de higiene pessoal</li>
          <li><strong>320 peças</strong> de roupas de cama e banho</li>
          <li><strong>150 presentes</strong> individualizados para os residentes</li>
        </ul>

        <h3>Aplicação dos Recursos</h3>
        <p>Os recursos arrecadados serão aplicados em melhorias prioritárias:</p>
        <ul>
          <li>Reforma e climatização de quartos (R$ 25.000)</li>
          <li>Aquisição de equipamentos médicos (R$ 15.000)</li>
          <li>Melhorias nas áreas de convivência (R$ 8.000)</li>
          <li>Programação de atividades para 2025 (R$ 4.350)</li>
        </ul>

        <h3>Agradecimentos</h3>
        <p>Expressamos nossa profunda gratidão a todos que contribuíram:</p>
        <ul>
          <li>Empresas parceiras e patrocinadores</li>
          <li>Voluntários que dedicaram seu tempo</li>
          <li>Doadores individuais</li>
          <li>Comunidade local</li>
        </ul>

        <p>Cada doação, independente do valor, fez a diferença e trouxe mais alegria e conforto para nossos residentes neste Natal. Muito obrigado a todos!</p>
      `
    },
    {
      title: 'Novos Talentos a Bordo: Começa a Jornada de Estágios na Saúde!',
      date: '1 de Setembro, 2025',
      category: 'Parcerias',
      excerpt: 'É com grande entusiasmo que anunciamos a chegada de novas turmas para o nosso programa de estágios em setembro!',
      image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800',
      fullContent: `
        <p>É com grande entusiasmo que anunciamos a chegada de novas turmas para o nosso programa de estágios em setembro! Desta vez, demos as boas-vindas a estudantes dedicados das áreas técnicas de Enfermagem e Fisioterapia.</p>

        <h3>A Importância da Prática na Formação em Saúde</h3>
        <p>Acreditamos que a prática é o pilar da formação em saúde, e estamos muito felizes em abrir as portas para esses futuros profissionais. Aqui, eles terão a chance de aplicar o conhecimento teórico, desenvolver habilidades essenciais e vivenciar o dia a dia da área com o suporte de nossa equipe experiente.</p>

        <h3>Informações sobre o Estágio</h3>
        <p>Nosso programa de estágios foi estruturado para proporcionar uma experiência completa e enriquecedora:</p>
        <ul>
          <li><strong>Duração inicial:</strong> 3 a 6 meses</li>
          <li><strong>Áreas contempladas:</strong> Técnico de Enfermagem e Fisioterapia</li>
          <li><strong>Possibilidade de renovação:</strong> Para estagiários que se destacarem e demonstrarem grande potencial</li>
          <li><strong>Supervisão:</strong> Acompanhamento direto de profissionais experientes</li>
          <li><strong>Aprendizado prático:</strong> Vivência real do cotidiano em cuidado geriátrico</li>
        </ul>

        <h3>Uma Excelente Oportunidade</h3>
        <p>Esta é uma excelente oportunidade para um mergulho profundo e contínuo no universo da saúde! Os estagiários terão acesso a experiências práticas que farão diferença em suas carreiras profissionais.</p>

        <h3>Boas-Vindas aos Novos Talentos</h3>
        <p>Desejamos muito sucesso aos nossos novos estagiários nesta fase importante de suas carreiras! Que esta experiência seja transformadora e enriquecedora.</p>

        <p><strong>Fique ligado no nosso blog para acompanhar as novidades e o desenvolvimento desses novos talentos!</strong></p>
      `
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
            Mantemos uma comunicação transparente, constante e acolhedora com as famílias e a comunidade.
            Compartilhamos novidades, eventos, conquistas e histórias que demonstram nosso compromisso diário
            com o bem-estar de cada residente. Acreditamos que famílias bem informadas são parceiras essenciais
            no cuidado de qualidade.
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
                  
                  <button
                    onClick={() => setSelectedArticle(index)}
                    className="flex items-center gap-2 text-[#0e28be] font-semibold hover:gap-3 transition-all hover-glow"
                  >
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

      {/* Modal for Full Article */}
      {selectedArticle !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-80"
          onClick={() => setSelectedArticle(null)}
        >
          <div
            className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-4 right-4 bg-red-500 hover:bg-red-600 text-white p-2 rounded-full transition-colors z-10"
            >
              <X size={24} />
            </button>

            {/* Article Header */}
            <div className="relative">
              <img
                src={news[selectedArticle].image}
                alt={news[selectedArticle].title}
                className="w-full h-64 object-cover rounded-t-2xl"
              />
              <div className="absolute top-4 left-4">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  news[selectedArticle].category === 'Infraestrutura' ? 'bg-blue-100 text-blue-800' :
                  news[selectedArticle].category === 'Eventos' ? 'bg-green-100 text-green-800' :
                  news[selectedArticle].category === 'Doações' ? 'bg-red-100 text-red-800' :
                  'bg-purple-100 text-purple-800'
                }`}>
                  {news[selectedArticle].category}
                </span>
              </div>
            </div>

            {/* Article Content */}
            <div className="p-8">
              <div className="flex items-center gap-2 text-slate-400 text-sm mb-4">
                <Calendar size={16} className="text-[#0e28be]" />
                <span>{news[selectedArticle].date}</span>
              </div>

              <h2 className="text-4xl font-black text-white mb-6 gradient-text">
                {news[selectedArticle].title}
              </h2>

              <div
                className="prose prose-invert prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: news[selectedArticle].fullContent }}
                style={{
                  color: '#cbd5e1',
                }}
              />

              <div className="mt-8 pt-8 border-t border-white/20">
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="btn-gradient text-white px-8 py-3 rounded-lg font-semibold hover-lift"
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Communication;