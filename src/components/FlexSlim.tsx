import { motion } from 'motion/react';
import { ShoppingCart, Zap, Sparkles, Smartphone, ArrowRight } from 'lucide-react';

export default function FlexSlim() {
  return (
    <section id="flexslim" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-gradient-to-br from-brand/5 to-transparent rounded-[40px] border border-brand/10 p-8 md:p-16 relative overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-brand opacity-[0.03] rounded-full blur-3xl" />
          
          <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 bg-brand/10 text-brand px-4 py-2 rounded-full text-[11px] font-bold tracking-widest uppercase mb-6">
                <Sparkles size={14} />
                Versão Digital 100% Prática
              </div>
              
              <h2 className="font-display text-4xl md:text-5xl font-bold text-brand-dark leading-tight mb-6">
                Protocolo <span className="text-brand">FlexSlim</span>
              </h2>
              
              <p className="text-lg text-muted mb-8 leading-relaxed">
                Quer resultados rápidos sem a complexidade de um acompanhamento tradicional? O FlexSlim é um guia digital leve e descontraído, desenhado para quem tem pressa mas não abre mão da saúde.
              </p>
              
              <div className="space-y-4 mb-10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand/5 flex items-center justify-center text-brand">
                    <Zap size={20} />
                  </div>
                  <span className="text-brand-dark font-medium">Foco em queima de gordura acelerada</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand/5 flex items-center justify-center text-brand">
                    <Smartphone size={20} />
                  </div>
                  <span className="text-brand-dark font-medium">Acesso imediato no seu celular</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-6">
                <div className="flex flex-col">
                  <span className="text-sm text-muted line-through">De R$ 99,90</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs font-bold text-brand-dark uppercase">Apenas</span>
                    <span className="text-4xl font-bold text-brand-dark tracking-tighter text-brand">R$ 29,90</span>
                  </div>
                </div>
                
                <motion.a
                  href="https://invoice.infinitepay.io/plans/nessasadite/1HNQx5hclb"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-brand text-white px-10 py-5 rounded-2xl font-bold text-lg flex items-center gap-3 shadow-xl shadow-brand/20 grow sm:grow-0 justify-center"
                >
                  Adquira já
                  <ShoppingCart size={20} />
                </motion.a>
              </div>
            </div>
            
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative z-10 bg-white p-4 rounded-[2rem] shadow-2xl border border-brand/10"
              >
                <img 
                  src="https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=2070&auto=format&fit=crop"
                  alt="Protocolo FlexSlim Digital"
                  className="rounded-[1.5rem] w-full aspect-[4/3] object-cover"
                  referrerPolicy="no-referrer"
                />
                
                {/* Floating badge */}
                <div className="absolute -bottom-6 -right-6 bg-brand-dark text-white p-6 rounded-3xl shadow-2xl max-w-[200px]">
                  <p className="text-[10px] font-bold uppercase tracking-widest mb-1 opacity-70">Entrega via</p>
                  <p className="font-bold text-sm">Download imediato após a compra</p>
                </div>
              </motion.div>
              
              {/* Decorative dots/shapes */}
              <div className="absolute -top-10 -left-10 grid grid-cols-4 gap-2 opacity-20">
                {[...Array(16)].map((_, i) => (
                  <div key={i} className="w-2 h-2 bg-brand rounded-full" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
