import { motion, useScroll, useSpring } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Mentoria from './components/Mentoria';
import OnlineWorkflow from './components/OnlineWorkflow';
import SportsFocus from './components/SportsFocus';
import Plans from './components/Plans';
import FlexSlim from './components/FlexSlim';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen relative selection:bg-brand selection:text-brand-dark">
      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-brand z-[60] origin-left" 
        style={{ scaleX }}
      />
      
      <Navbar />
      
      <main>
        <Hero />
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <About />
          <Mentoria />
          <OnlineWorkflow />
          <SportsFocus />
          <Testimonials />
          <Plans />
          <FlexSlim />
          <CTA />
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}



