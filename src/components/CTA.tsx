import { motion } from 'motion/react';
import { Share2 } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-5xl md:text-6xl font-bold tracking-tight text-brand-dark mb-8 leading-[1.1]">
            Pronto para a sua melhor versão?
          </h2>
          <p className="text-lg text-muted mb-12 max-w-xl mx-auto leading-relaxed">
            O emagrecimento definitivo começa com uma decisão. Vamos trilhar juntos o caminho para a sua saúde e autoestima recuperada.
          </p>
          
          <a 
            href="https://api.whatsapp.com/send/?phone=553182228501&text=gostaria+de+saber+mais+informacoes&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand text-white px-10 py-5 rounded-lg font-bold text-base hover:bg-brand-dark transition-all flex items-center gap-3 mx-auto shadow-lg shadow-brand/20 w-fit"
          >
            Agendar Agora
            <Share2 size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
