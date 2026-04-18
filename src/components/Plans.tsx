import { motion } from 'motion/react';
import { Check, Star } from 'lucide-react';

const plans = [
  {
    name: "Trimestral",
    price: "R$ 180",
    period: "/mês",
    link: "https://invoice.infinitepay.io/plans/nessasadite/3q8EfYqiFD",
    features: [
      "Foco inicial em emagrecimento",
      "Consulta Online (45min)",
      "Plano Alimentar Individualizado",
      "Suporte via Aplicativo",
      "Ideal para mudanças pontuais"
    ],
    recommended: false
  },
  {
    name: "Semestral",
    price: "R$ 160",
    period: "/mês",
    link: "https://invoice.infinitepay.io/plans/nessasadite/6LiHdC0Kj",
    features: [
      "Consolidação de hábitos",
      "Consulta Online Premium (1h)",
      "Ajustes Mensais",
      "Guia de Receitas Praticas",
      "Suporte Prioritário WhatsApp",
      "Acompanhamento de Metas"
    ],
    recommended: true
  },
  {
    name: "Anual",
    price: "R$ 120",
    period: "/mês",
    link: "https://invoice.infinitepay.io/plans/nessasadite/7gGYMYrQjB",
    features: [
      "Transformação definitiva",
      "Melhor custo-benefício",
      "Consultas Periódicas",
      "Check-ins Mensais de Progresso",
      "E-book Premium de Nutrição",
      "Mentoria Direta"
    ],
    recommended: false
  }
];

export default function Plans() {
  return (
    <section id="plans" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="font-display text-4xl font-bold tracking-tight mb-4 text-brand-dark uppercase">Encontre seu equilíbrio</h2>
          <p className="text-muted max-w-xl mx-auto">Invista na sua saúde a longo prazo. O corpo que você deseja é construído dia após dia.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`p-10 rounded-[24px] border transition-all duration-300 ${plan.recommended ? 'border-brand bg-white shadow-xl relative scale-105 z-10' : 'border-border bg-white hover:border-brand/40'}`}
            >
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand text-white px-4 py-1.5 rounded-full text-[10px] font-bold flex items-center gap-1 uppercase tracking-widest leading-none shadow-lg">
                  Melhor Escolha
                </div>
              )}
              <h3 className="font-display font-bold text-xl mb-2 text-brand-dark tracking-tight uppercase">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-4xl font-bold text-brand-dark tracking-tighter">{plan.price}</span>
                <span className="text-muted text-sm font-medium">{plan.period}</span>
              </div>
              
              <ul className="space-y-4 mb-10">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-3 text-[13px] text-muted font-medium">
                    <Check size={16} className="text-brand mt-0.5 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a 
                href={plan.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-4 rounded-xl font-bold transition-all text-sm tracking-tight flex items-center justify-center ${plan.recommended ? 'bg-brand text-white hover:bg-brand-dark shadow-md' : 'bg-white border border-border text-brand-dark hover:bg-surface'}`}
              >
                Assinar Plano
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
