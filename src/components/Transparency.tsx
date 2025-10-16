import React from 'react';
import { FileText, DollarSign, Users, Shield, Download, Mail, Phone, Eye } from 'lucide-react';

const Transparency = () => {
  const transparencyAreas = [
    {
      icon: FileText,
      title: 'Prestação de Contas',
      description: 'Todos os relatórios financeiros, demonstrações de receitas e despesas e balanços anuais estão disponíveis para consulta.',
      documents: ['Balanço Anual 2024', 'Relatório de Receitas 2024', 'Demonstração de Despesas 2024', 'Auditoria Externa 2024']
    },
    {
      icon: DollarSign,
      title: 'Fontes de Recursos',
      description: 'Detalhamos de onde vêm os recursos que mantêm nossas atividades, incluindo doações, convênios, parcerias e campanhas.',
      documents: ['Relatório de Doações', 'Convênios Públicos', 'Parcerias Privadas', 'Campanhas de Arrecadação']
    },
    {
      icon: Users,
      title: 'Destinação dos Recursos',
      description: 'Explicamos como cada valor recebido é empregado para garantir o bem-estar e desenvolvimento dos residentes acolhidos.',
      documents: ['Aplicação de Recursos', 'Investimentos em Infraestrutura', 'Gastos com Pessoal', 'Atividades e Programas']
    },
    {
      icon: Shield,
      title: 'Relatórios e Documentos',
      description: 'Aqui você pode acessar nossos relatórios anuais, auditorias e outros documentos pertinentes à prestação de contas da instituição.',
      documents: ['Relatório Anual 2024', 'Certificações', 'Licenças e Alvarás', 'Estatuto Social']
    }
  ];

  const financialData = [
    {
      category: 'Receitas',
      percentage: 100,
      items: [
        { name: 'Doações Privadas', value: 45, color: 'bg-blue-500' },
        { name: 'Convênios Públicos', value: 30, color: 'bg-green-500' },
        { name: 'Parcerias Empresariais', value: 15, color: 'bg-blue-500' },
        { name: 'Eventos e Campanhas', value: 10, color: 'bg-orange-500' }
      ]
    },
    {
      category: 'Despesas',
      percentage: 100,
      items: [
        { name: 'Cuidados Médicos e Enfermagem', value: 40, color: 'bg-red-500' },
        { name: 'Alimentação e Nutrição', value: 25, color: 'bg-yellow-500' },
        { name: 'Infraestrutura e Manutenção', value: 20, color: 'bg-indigo-500' },
        { name: 'Administração', value: 15, color: 'bg-gray-500' }
      ]
    }
  ];

  return (
    <section id="transparencia" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-blue-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M20%2020c0-11.046-8.954-20-20-20v20h20z%22/%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-[#6c70e5] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float"></div>
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float" style={{animationDelay: '3s'}}></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black gradient-text mb-4 tracking-tight animate-fade-in-up">
            Transparência
          </h2>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            A confiança é a base de nossa relação com a comunidade, famílias e parceiros. Por isso,
            praticamos a transparência total em todas as nossas ações. Disponibilizamos publicamente
            informações detalhadas sobre receitas, despesas, aplicação de recursos, convênios e relatórios
            de atividades. Acreditamos que prestação de contas clara e acessível fortalece nossa missão
            e demonstra nosso compromisso com a responsabilidade social e ética.
          </p>
        </div>

        {/* Transparency Areas */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {transparencyAreas.map((area, index) => (
            <div key={index} className="glass-dark p-8 rounded-xl shadow-2xl hover-lift interactive-card animate-scale-in" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-gradient-to-r from-[#29478f] to-blue-500 w-16 h-16 rounded-full flex items-center justify-center animate-pulse-glow">
                  <area.icon className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-white text-glow">
                  {area.title}
                </h3>
              </div>
              
              <p className="text-slate-300 mb-6 leading-relaxed">
                {area.description}
              </p>

              <div className="space-y-3">
                <h4 className="font-semibold text-white mb-3 text-glow">Documentos Disponíveis:</h4>
                {area.documents.map((doc, docIndex) => (
                  <div key={docIndex} className="flex items-center justify-between glass p-3 rounded-lg shadow-sm hover-lift">
                    <div className="flex items-center gap-2">
                      <FileText className="text-[#29478f] animate-pulse-glow" size={16} />
                      <span className="text-white text-sm">{doc}</span>
                    </div>
                    <button className="flex items-center gap-1 text-[#29478f] hover:text-blue-400 transition-colors text-sm font-semibold">
                      <Download size={14} />
                      <span>Baixar</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Financial Overview */}
        <div className="glass-dark rounded-2xl p-8 mb-16 shadow-2xl hover-lift animate-fade-in-up">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4 text-glow">
              Visão Geral Financeira 2024
            </h3>
            <p className="text-lg text-slate-300">
              Transparência na aplicação dos recursos recebidos
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {financialData.map((data, index) => (
              <div key={index} className="glass p-6 rounded-xl shadow-2xl hover-lift">
                <h4 className="text-xl font-bold text-white mb-6 text-center text-glow">
                  {data.category}
                </h4>
                
                <div className="space-y-4">
                  {data.items.map((item, itemIndex) => (
                    <div key={itemIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-white text-sm font-medium">{item.name}</span>
                        <span className="gradient-text font-bold">{item.value}%</span>
                      </div>
                      <div className="w-full bg-white/20 rounded-full h-3">
                        <div 
                          className={`${item.color} h-3 rounded-full transition-all duration-500`}
                          style={{ width: `${item.value}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="glass-dark rounded-2xl p-8 text-white mb-16 shadow-2xl hover-lift animate-fade-in-up">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="bg-gradient-to-r from-[#29478f] to-blue-500 w-16 h-16 rounded-full flex items-center justify-center animate-pulse-glow">
                <Eye className="text-white" size={28} />
              </div>
            </div>
            <h3 className="text-3xl font-bold mb-4">
              Dúvidas sobre Transparência?
            </h3>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Ficou com alguma dúvida ou gostaria de informações adicionais? 
              Entre em contato conosco pelos canais abaixo.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="bg-white/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Mail className="text-white" size={20} />
              </div>
              <h4 className="font-bold mb-2">E-mail</h4>
              <p className="text-slate-300">contato@largustavonordlund.org.br</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Phone className="text-white" size={20} />
              </div>
              <h4 className="font-bold mb-2">Telefone</h4>
              <p className="text-slate-300">(51) 3386-1126</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center glass-dark p-8 rounded-xl shadow-2xl hover-lift animate-fade-in-up">
          <h3 className="text-3xl font-bold text-white mb-4 text-glow">
            Compromisso com a Transparência
          </h3>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Nosso compromisso é fortalecer a relação com a sociedade e nossos parceiros, 
            incentivando sempre a participação e o diálogo. Participe, acompanhe, sugira 
            e nos ajude a construir um Lar cada vez mais transparente!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Transparency;