import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import CTA from './components/CTA.jsx';
import Differentials from './components/Differentials.jsx';
import Environments from './components/Environments.jsx';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Process from './components/Process.jsx';
import Testimonials from './components/Testimonials.jsx';
import FloatingWhatsApp from './components/FloatingWhatsApp.jsx';
import { useScrollReveal } from './hooks/useScrollReveal.js';

export default function App() {
  useScrollReveal();

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Environments />
        <Process />
        <Differentials />
        <Testimonials />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
