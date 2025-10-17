import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
import WhatsAppButton from './components/WhatsAppButton';
import GalleryPage from './pages/GalleryPage'; // Importando a nova página da galeria

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
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
            </>
          } />
          <Route path="/galeria" element={<GalleryPage />} />
        </Routes>
        <Footer />
        <WhatsAppButton />
      </div>
    </BrowserRouter>
  );
}

export default App;