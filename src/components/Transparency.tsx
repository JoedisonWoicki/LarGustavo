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
        { name: 'Parcerias Empresariais', value: 15, color: 'bg-purple-500' },
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
    <section id="transparencia" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-[#1f387f] mb-4 tracking-tight">
            Transparência
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            No Lar Gustavo Nordlund, acreditamos que a confiança da comunidade é construída com transparência, 
            responsabilidade e respeito. Por isso, colocamos à disposição de todos informações claras sobre 
            nossas receitas, despesas, fontes de recursos e convênios.
          </p>
        </div>

        {/* Transparency Areas */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {transparencyAreas.map((area, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-[#d7241f] w-16 h-16 rounded-full flex items-center justify-center">
                  <area.icon className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-[#1f387f]">
                  {area.title}
                </h3>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {area.description}
              </p>

              <div className="space-y-3">
                <h4 className="font-semibold text-[#1f387f] mb-3">Documentos Disponíveis:</h4>
                {area.documents.map((doc, docIndex) => (
                  <div key={docIndex} className="flex items-center justify-between bg-white p-3 rounded-lg shadow-sm">
                    <div className="flex items-center gap-2">
                      <FileText className="text-[#d7241f]" size={16} />
                      <span className="text-gray-700 text-sm">{doc}</span>
                    </div>
                    <button className="flex items-center gap-1 text-[#1f387f] hover:text-[#d7241f] transition-colors text-sm font-semibold">
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
        <div className="bg-gray-50 rounded-2xl p-8 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-[#1f387f] mb-4">
              Visão Geral Financeira 2024
            </h3>
            <p className="text-lg text-gray-600">
              Transparência na aplicação dos recursos recebidos
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {financialData.map((data, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <h4 className="text-xl font-bold text-[#1f387f] mb-6 text-center">
                  {data.category}
                </h4>
                
                <div className="space-y-4">
                  {data.items.map((item, itemIndex) => (
                    <div key={itemIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-700 text-sm font-medium">{item.name}</span>
                        <span className="text-[#1f387f] font-bold">{item.value}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
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
        <div className="bg-[#1f387f] rounded-2xl p-8 text-white mb-16">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="bg-[#d7241f] w-16 h-16 rounded-full flex items-center justify-center">
                <Eye className="text-white" size={28} />
              </div>
            </div>
            <h3 className="text-3xl font-bold mb-4">
              Dúvidas sobre Transparência?
            </h3>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
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
              <p className="text-blue-100">contato@largustavonordlund.org.br</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Phone className="text-white" size={20} />
              </div>
              <h4 className="font-bold mb-2">Telefone</h4>
              <p className="text-blue-100">(51) 3386-1126</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-white p-8 rounded-xl shadow-lg">
          <h3 className="text-3xl font-bold text-[#1f387f] mb-4">
            Compromisso com a Transparência
          </h3>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
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