import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const phoneNumber = '5551999999999'; // Substitua pelo número de telefone do WhatsApp
  const message = 'Olá, gostaria de mais informações sobre o Lar Gustavo Nordlund.'; // Mensagem pré-definida

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 flex items-center justify-center z-50 animate-float hover-lift"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <MessageCircle size={32} />
    </a>
  );
};

export default WhatsAppButton;