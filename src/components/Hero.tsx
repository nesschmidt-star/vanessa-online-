import { motion } from 'motion/react';
import { ArrowRight, Globe2, Zap, Target } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block bg-brand/10 text-brand px-3 py-1.5 rounded-full text-[11px] font-bold tracking-wider mb-6 border border-brand/20">
            EMAGRECIMENTO 100% ONLINE
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-bold leading-[1.1] mb-6 tracking-tight text-brand-dark text-balance">
            Reconquiste sua <span className="text-brand">autoestima</span> e saúde
          </h1>
          <p className="text-lg text-muted mb-12 max-w-lg leading-relaxed">
            Nutrição humanizada para um emagrecimento sustentável e definitivo. Sem dietas restritivas, com resultados que permanecem.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.a
              href="https://api.whatsapp.com/send/?phone=553182228501&text=gostaria+de+saber+mais+informacoes&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-brand text-white px-8 py-4 rounded-lg font-semibold text-[15px] flex items-center justify-center gap-2 shadow-lg shadow-brand/20"
            >
              Começar Agora
              <ArrowRight size={18} />
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="border border-brand/20 text-brand-dark px-8 py-4 rounded-lg font-semibold text-[15px] hover:bg-brand/5 transition-colors"
            >
              Conhecer Método
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand rounded-full blur-3xl opacity-10 animate-pulse" />
          <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden border border-border shadow-soft">
            <img 
              src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=2053&auto=format&fit=crop"
              alt="Alimentação Saudável"
              className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            {/* Overlay stats */}
            <div className="absolute bottom-6 left-6 right-6 grid grid-cols-2 gap-4">
              <div className="bg-white/90 backdrop-blur-md border border-white/20 p-4 rounded-2xl text-brand-dark">
                <p className="text-brand font-display font-bold text-2xl uppercase leading-none">Saúde</p>
                <p className="text-[10px] uppercase font-bold tracking-widest opacity-60">Equilíbrio Real</p>
              </div>
              <div className="bg-brand text-white p-4 rounded-2xl shadow-lg">
                <p className="text-sm font-bold uppercase leading-tight">Resultados</p>
                <p className="text-[10px] font-medium opacity-80">Sem restrições</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
