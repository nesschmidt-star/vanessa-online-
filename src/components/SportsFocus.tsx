import { motion } from 'motion/react';
import { Heart, Scale, Brain, Utensils } from 'lucide-react';

const specialties = [
  {
    icon: <Scale />,
    title: "Emagrecimento",
    desc: "Redução de gordura corporal com preservação de massa magra."
  },
  {
    icon: <Heart />,
    title: "Saúde Metabólica",
    desc: "Controle de exames, diabetes, hipertensão e colesterol."
  },
  {
    icon: <Brain />,
    title: "Comportamento",
    desc: "Lidando com a ansiedade e compulsão através da nutrição."
  },
  {
    icon: <Utensils />,
    title: "Reeducação",
    desc: "Aprenda a comer de tudo sem culpa e com inteligência."
  }
];

export default function SportsFocus() {
  return (
    <section id="specialties" className="py-24 bg-white overflow-hidden relative border-y border-border">
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-8 tracking-tight text-brand-dark">
              RESULTADOS REAIS PARA <span className="text-brand">VIDAS</span> REAIS
            </h2>
            <p className="text-base text-muted mb-12 leading-relaxed">
              Não acredito em fórmulas mágicas. Acredito em ciência aplicada à sua rotina. Transformamos seus hábitos para que o emagrecimento seja a consequência natural do seu novo estilo de vida.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              {specialties.map((item, i) => (
                <div key={i} className="space-y-4 p-6 border border-border rounded-2xl bg-surface/50">
                  <div className="text-brand w-8 h-8 flex items-center justify-center bg-brand/10 rounded-lg">{item.icon}</div>
                  <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-brand-dark">{item.title}</h4>
                  <p className="text-xs text-muted leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative aspect-square">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="w-full h-full rounded-[2.5rem] overflow-hidden border border-border shadow-soft"
            >
              <img 
                src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=2080&auto=format&fit=crop"
                className="w-full h-full object-cover grayscale-[0.5] hover:grayscale-0 transition-all duration-1000"
                alt="Alimentação Equilibrada"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
