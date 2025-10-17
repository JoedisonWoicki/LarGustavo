import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Team from './components/Team';
import Communication from './components/Communication';
import Supporters from './components/Supporters';
import Donations from './components/Donations';
import Careers from './components/Careers';
import Transparency from './components/Transparency';
import Contact from './components/Contact';
import Feedback from './components/Feedback';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton'; // Importando o novo componente

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <Team />
      <Communication />
      <Supporters />
      <Donations />
      <Careers />
      <Transparency />
      <Contact />
      <Feedback />
      <Footer />
      <WhatsAppButton /> {/* Adicionando o botão flutuante do WhatsApp */}
    </div>
  );
}

export default App;