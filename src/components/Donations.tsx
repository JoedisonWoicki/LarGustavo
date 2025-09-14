import React from 'react';
import { Heart, Gift, CreditCard, Receipt, Users, CheckCircle } from 'lucide-react';

const Donations = () => {
  const donationMethods = [
    {
      icon: CreditCard,
      title: 'Doação Financeira',
      description: 'Contribua mensalmente ou com doação única para manter nossos serviços.',
      details: ['PIX: (51) 9818-41594', 'Transferência bancária', 'Depósito no BANRISUL', 'Cartão de crédito/débito']
    },
    {
      icon: Gift,
      title: 'Doação de Materiais',
      description: 'Itens de higiene, roupas, medicamentos e equipamentos são sempre bem-vindos.',
      details: ['Fraldas geriátricas', 'Produtos de higiene', 'Roupas de cama', 'Medicamentos']
    },
    {
      icon: Users,
      title: 'Voluntariado',
      description: 'Doe seu tempo e talento para atividades recreativas e de apoio.',
      details: ['Atividades recreativas', 'Apoio administrativo', 'Eventos especiais', 'Companhia aos idosos']
    },
    {
      icon: Receipt,
      title: 'Nota Fiscal Gaúcha',
      description: 'Participe do programa e destine parte dos valores para o Lar.',
      details: ['Cadastre seu CPF', 'Escolha nossa instituição', 'Ajude automaticamente', 'Concorra a prêmios']
    }
  ];

  return (
    <section id="doacoes" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        <div className="absolute top-20 left-20 w-72 h-72 bg-[#6c70e5] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black gradient-text mb-4 tracking-tight animate-fade-in-up">
            Como Doar
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Sua generosidade faz a diferença na vida dos nossos residentes. 
            Conheça as diferentes formas de contribuir com o Lar Gustavo Nordlund.
          </p>
        </div>

        {/* Donation Methods */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {donationMethods.map((method, index) => (
            <div key={index} className="glass-dark p-6 rounded-xl shadow-2xl hover-lift interactive-card animate-scale-in" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="bg-gradient-to-r from-[#0e28be] to-purple-500 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-glow">
                <method.icon className="text-white" size={24} />
              </div>
              
              <h3 className="text-lg font-bold text-white mb-3 text-center text-glow">
                {method.title}
              </h3>
              
              <p className="text-slate-300 mb-4 text-center text-sm">
                {method.description}
              </p>

              <ul className="space-y-1">
                {method.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="flex items-center gap-2 text-xs">
                    <div className="w-1.5 h-1.5 bg-gradient-to-r from-[#0e28be] to-purple-400 rounded-full flex-shrink-0 animate-pulse-glow"></div>
                    <span className="text-slate-400">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Banking Information */}
        <div className="glass-dark rounded-2xl p-8 shadow-2xl mb-16 hover-lift animate-fade-in-up">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-4 text-glow">
              Dados Bancários para Doação
            </h3>
            <p className="text-lg text-slate-300">
              Use os dados abaixo para fazer sua doação via PIX, transferência ou depósito bancário.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* PIX */}
            <div className="glass p-6 rounded-xl text-white shadow-2xl hover-lift">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-gradient-to-r from-[#0e28be] to-purple-500 w-12 h-12 rounded-full flex items-center justify-center animate-pulse-glow">
                  <CreditCard className="text-white" size={24} />
                </div>
                <h4 className="text-xl font-bold">PIX</h4>
              </div>
              
              {/* QR Code PIX */}
              <div className="bg-white p-4 rounded-lg mb-4 text-center">
                <img 
                  src="/pix LAr.png" 
                  alt="QR Code PIX para doação"
                  className="w-32 h-32 mx-auto mb-2"
                />
                <p className="text-[#0e28be] text-sm font-semibold">
                  Escaneie o QR Code para doar via PIX
                </p>
              </div>
              
              <div className="space-y-2">
                <div>
                  <span className="text-slate-300 text-sm">Chave PIX:</span>
                  <div className="font-mono text-lg font-bold gradient-text">(51) 9818-41594</div>
                </div>
                <div>
                  <span className="text-slate-300 text-sm">Favorecido:</span>
                  <div className="font-semibold">LAR GUSTAVO NORDLUND</div>
                </div>
                <div>
                  <span className="text-slate-300 text-sm">CNPJ:</span>
                  <div className="font-mono">88.173.968/000-60</div>
                </div>
              </div>
            </div>

            {/* Bank Transfer */}
            <div className="glass-dark p-6 rounded-xl shadow-2xl hover-lift">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-gradient-to-r from-[#0e28be] to-purple-500 w-12 h-12 rounded-full flex items-center justify-center animate-pulse-glow">
                  <Receipt className="text-white" size={24} />
                </div>
                <h4 className="text-xl font-bold text-white text-glow">Dados Bancários</h4>
              </div>
              <div className="space-y-2">
                <div>
                  <span className="text-slate-400 text-sm">Banco:</span>
                  <div className="font-semibold text-white">BANRISUL</div>
                </div>
                <div>
                  <span className="text-slate-400 text-sm">Agência:</span>
                  <div className="font-mono text-lg text-white">0027</div>
                </div>
                <div>
                  <span className="text-slate-400 text-sm">Conta Corrente:</span>
                  <div className="font-mono text-lg text-white">06.006551.2-6</div>
                </div>
                <div>
                  <span className="text-slate-400 text-sm">Favorecido:</span>
                  <div className="font-semibold text-white">LAR GUSTAVO NORDLUND</div>
                </div>
                <div>
                  <span className="text-slate-400 text-sm">CNPJ:</span>
                  <div className="font-mono text-white">88.173.968/000-60</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg">
            <p className="text-black-200 text-sm">
              <strong>Importante:</strong> Após realizar sua doação, entre em contato conosco para confirmarmos o recebimento 
              e emitirmos o comprovante para dedução no Imposto de Renda, se aplicável.
            </p>
          </div>
        </div>

        {/* Nota Fiscal Gaúcha Section */}
        <div className="glass-dark rounded-2xl p-8 shadow-2xl mb-16 hover-lift animate-fade-in-up">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-gradient-to-r from-[#0e28be] to-purple-500 w-16 h-16 rounded-full flex items-center justify-center animate-pulse-glow">
                  <Receipt className="text-white" size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white text-glow">Fundo do Idoso</h3>
                  <p className="gradient-text font-semibold">📌 Nota Fiscal Gaúcha: participe e ajude quem precisa</p>
                </div>
              </div>
              
              <p className="text-slate-300 mb-4 leading-relaxed">
                Você sabia que ao solicitar para incluir seu CPF na nota fiscal, além de concorrer a prêmios, 
                você também ajuda instituições sociais como o Lar Gustavo Nordlund? O programa Nota Fiscal Gaúcha 
                foi criado para incentivar esse gesto simples, que faz toda a diferença.
              </p>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                <div className="flex items-start gap-2">
                  <span className="text-breaklack-600 font-bold">⚠️</span>
                  <div>
                    <p className="font-semibold text-yellow-200 mb-1">Importante:</p>
                    <p className="text-black-100 text-sm">
                      Sempre confira se o seu CPF foi registrado corretamente na nota. 
                      Sem ele, você pode ficar de fora dos sorteios e das doações às entidades.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-slate-300 leading-relaxed">
                Com esse programa, você apoia causas importantes e ainda pode ser premiado. 
                É uma forma de contribuir com a sociedade gaúcha e fazer valer seus direitos como consumidor.
              </p>
            </div>

            <div className="glass p-8 rounded-xl text-white shadow-2xl hover-lift">
              <h4 className="text-xl font-bold mb-6 text-center">Como Participar</h4>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-gradient-to-r from-[#0e28be] to-purple-500 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold animate-pulse-glow">
                    1
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Solicite o CPF na nota</p>
                    <p className="text-slate-300 text-sm">Sempre peça para incluir seu CPF nas compras</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-gradient-to-r from-[#0e28be] to-purple-500 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold animate-pulse-glow">
                    2
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Acesse o site da NFG</p>
                    <p className="text-slate-300 text-sm">Entre no portal da Nota Fiscal Gaúcha</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-gradient-to-r from-[#0e28be] to-purple-500 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold animate-pulse-glow">
                    3
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Escolha nossa instituição</p>
                    <p className="text-slate-300 text-sm">Destine parte dos valores para o Lar Gustavo Nordlund</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-gradient-to-r from-[#0e28be] to-purple-500 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold animate-pulse-glow">
                    4
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Ajude automaticamente</p>
                    <p className="text-slate-300 text-sm">Suas compras passam a gerar doações automáticas</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-white/20 text-center">
                <p className="gradient-text font-bold">CNPJ: 88.173.968/000-60</p>
                <p className="text-slate-300 text-sm">Use este CNPJ para nos encontrar no sistema</p>
              </div>
            </div>
          </div>
        </div>

        {/* Impact Section */}
        <div className="glass-dark rounded-2xl p-8 text-white text-center shadow-2xl hover-lift animate-fade-in-up">
          <h3 className="text-3xl font-bold mb-4">
            Sua Doação Transforma Vidas
          </h3>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Cada contribuição, por menor que seja, faz uma diferença real na vida dos nossos residentes. 
            Juntos, continuamos nossa missão de cuidar com amor há mais de 70 anos.
          </p>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white/10 p-4 rounded-lg">
              <div className="text-2xl font-bold gradient-text mb-1">R$ 50</div>
              <div className="text-slate-300 text-sm">Produtos de higiene para 1 mês</div>
            </div>
            <div className="bg-white/10 p-4 rounded-lg">
              <div className="text-2xl font-bold gradient-text mb-1">R$ 100</div>
              <div className="text-slate-300 text-sm">Medicamentos essenciais</div>
            </div>
            <div className="bg-white/10 p-4 rounded-lg">
              <div className="text-2xl font-bold gradient-text mb-1">R$ 200</div>
              <div className="text-slate-300 text-sm">Alimentação balanceada por 1 semana</div>
            </div>
            <div className="bg-white/10 p-4 rounded-lg">
              <div className="text-2xl font-bold gradient-text mb-1">R$ 500</div>
              <div className="text-slate-300 text-sm">Atividades recreativas mensais</div>
            </div>
          </div>

          <div className="mt-8">
            <a 
              href="#doacoes" 
              className="btn-gradient text-white px-8 py-4 rounded-lg font-semibold hover-lift"
            >
              Quero Doar Agora
            </a>
          </div>
        </div>

        {/* Contact for Donations */}
        <div className="mt-16 glass-dark p-8 rounded-xl shadow-2xl hover-lift animate-fade-in-up">
          <div className="text-center mb-6">
            <h4 className="text-2xl font-bold text-white mb-2 text-glow">
              Precisa de Mais Informações?
            </h4>
            <p className="text-slate-300">
              Nossa equipe está pronta para esclarecer dúvidas sobre doações e parcerias.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="bg-gradient-to-r from-[#0e28be] to-purple-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 animate-pulse-glow">
                <Heart className="text-white" size={20} />
              </div>
              <h5 className="font-bold text-white mb-1 text-glow">Doações</h5>
              <p className="text-slate-300 text-sm">doacoes@largustavonordlund.org.br</p>
            </div>
            
            <div>
              <div className="bg-gradient-to-r from-[#0e28be] to-purple-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 animate-pulse-glow">
                <Users className="text-white" size={20} />
              </div>
              <h5 className="font-bold text-white mb-1 text-glow">Voluntariado</h5>
              <p className="text-slate-300 text-sm">voluntarios@largustavonordlund.org.br</p>
            </div>
            
            <div>
              <div className="bg-gradient-to-r from-[#0e28be] to-purple-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 animate-pulse-glow">
                <CheckCircle className="text-white" size={20} />
              </div>
              <h5 className="font-bold text-white mb-1 text-glow">Parcerias</h5>
              <p className="text-slate-300 text-sm">parcerias@largustavonordlund.org.br</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donations;