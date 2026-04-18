import { motion } from 'motion/react';
import { Menu, X, Instagram, Youtube } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-brand-dark/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2"
        >
          <span className="font-display font-bold text-xl tracking-tighter uppercase whitespace-nowrap">
            VANESSA <span className="text-brand">SCHMIDT</span>
          </span>
        </motion.div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-sm font-medium text-muted hover:text-brand transition-colors">Sobre</a>
          <a href="#online" className="text-sm font-medium text-muted hover:text-brand transition-colors">Método Sllim</a>
          <a href="#specialties" className="text-sm font-medium text-muted hover:text-brand transition-colors">Diferenciais</a>
          <a href="#testimonials" className="text-sm font-medium text-muted hover:text-brand transition-colors">Resultados</a>
          <a href="#plans" className="text-sm font-medium text-muted hover:text-brand transition-colors">Planos</a>
          <a href="#flexslim" className="text-sm font-medium text-brand font-bold hover:text-brand-dark transition-colors">FlexSlim</a>
          <motion.a
            href="https://api.whatsapp.com/send/?phone=553182228501&text=gostaria+de+saber+mais+informacoes&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-brand text-white px-6 py-2.5 rounded-lg text-sm font-semibold tracking-tight shadow-sm"
          >
            Agendar Consulta
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-brand-dark/5 p-6 space-y-4"
        >
          <a href="#about" onClick={() => setIsOpen(false)} className="block text-lg font-bold">Sobre</a>
          <a href="#specialties" onClick={() => setIsOpen(false)} className="block text-lg font-bold">Especialidades</a>
          <a href="#online" onClick={() => setIsOpen(false)} className="block text-lg font-bold">Como funciona</a>
          <a href="#flexslim" onClick={() => setIsOpen(false)} className="block text-lg font-bold text-brand">FlexSlim</a>
          <a 
            href="https://api.whatsapp.com/send/?phone=553182228501&text=gostaria+de+saber+mais+informacoes&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-brand-dark text-brand py-4 rounded-xl font-bold flex items-center justify-center"
          >
            AGENDAR CONSULTA
          </a>
        </motion.div>
      )}
    </nav>
  );
}
