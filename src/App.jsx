import About from './components/About.jsx';
import CTA from './components/CTA.jsx';
import FAQ from './components/FAQ.jsx';
import Footer from './components/Footer.jsx';
import Hero from './components/Hero.jsx';
import Navbar from './components/Navbar.jsx';
import Pricing from './components/Pricing.jsx';
import Process from './components/Process.jsx';
import Services from './components/Services.jsx';
import Testimonials from './components/Testimonials.jsx';
import WhyChooseUs from './components/WhyChooseUs.jsx';

function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-white text-navy">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Process />
        <WhyChooseUs />
        <Pricing />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
