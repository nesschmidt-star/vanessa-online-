import { motion } from 'motion/react';
import { Video, ClipboardCheck, Apple, MessageCircleHeart } from 'lucide-react';

const steps = [
  {
    icon: "💻",
    title: "Vídeo-Consultas",
    desc: "Atendimento humanizado sem barreiras geográficas, no seu tempo.",
  },
  {
    icon: "📈",
    title: "Foco em Resultados",
    desc: "Otimização de composição corporal para alta performance esportiva.",
  },
  {
    icon: "📱",
    title: "App Exclusivo",
    desc: "Acesse seu plano, receitas e métricas na palma da sua mão.",
  },
  {
    icon: "💬",
    title: "Suporte via WhatsApp",
    desc: "Canal direto para dúvidas e ajustes imediatos na sua rotina.",
  }
];

export default function OnlineWorkflow() {
  return (
    <section id="online" className="py-24 bg-surface translate-y-[-1px]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-muted font-bold uppercase tracking-widest text-[11px] mb-4">Acompanhamento Digital Personalizado</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-brand-dark leading-tight uppercase">Método Sllim</h2>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-[20px] border border-border transition-all duration-300 hover:border-brand/30"
            >
              <div className="w-10 h-10 bg-[#F3F4F6] rounded-lg flex items-center justify-center mb-5 text-xl">
                {step.icon}
              </div>
              <h3 className="font-display font-bold text-base mb-3 text-brand-dark tracking-tight">{step.title}</h3>
              <p className="text-muted leading-relaxed text-[13px]">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
