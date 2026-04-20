import { motion } from 'motion/react';
import { CheckCircle2, Calendar, Monitor, Clock, Navigation, ArrowRight, UserCheck, Heart, Sparkles } from 'lucide-react';

export default function Mentoria() {
  const whatYouReceive = [
    "Sessão semanal online e individual",
    "Plano de metas simples para sua rotina",
    "Estratégias para ansiedade e compulsão",
    "Organização alimentar realista",
    "Apoio para manter foco",
    "Ajustes semanais conforme sua evolução",
    "Motivação e acompanhamento próximo"
  ];

  const idealFor = [
    "Vive no efeito sanfona",
    "Começa e para toda hora",
    "Come por ansiedade",
    "Não consegue manter dieta sozinha",
    "Quer emagrecer de forma leve"
  ];

  return (
    <section id="mentoria" className="py-24 bg-white overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-brand-dark rounded-[40px] overflow-hidden shadow-2xl relative">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-brand/10 -skew-x-12 translate-x-1/4 z-0" />
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none z-0">
            <div className="absolute top-10 right-10 w-64 h-64 bg-brand rounded-full blur-[120px]" />
            <div className="absolute bottom-10 left-10 w-64 h-64 bg-brand rounded-full blur-[120px]" />
          </div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-stretch">
            {/* Left Content */}
            <div className="p-8 md:p-16 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 bg-brand/20 text-brand-light px-4 py-2 rounded-full text-[11px] font-bold tracking-widest uppercase mb-8 w-fit backdrop-blur-sm">
                <Sparkles size={14} className="text-brand" />
                Destaque: Mentoria Semanal
              </div>
              
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                MENTORIA <span className="text-brand">EMAGREÇA SEM RECOMEÇAR</span>
              </h2>
              
              <p className="text-brand-light/80 text-xl mb-10 leading-relaxed font-light italic">
                "Mentoria semanal para mulheres que sabem o que fazer, mas não conseguem manter."
              </p>

              <div className="space-y-4 mb-12">
                <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-4 flex items-center gap-2">
                  <Heart size={18} className="text-brand" /> O que você vai receber:
                </h3>
                <div className="grid sm:grid-cols-1 gap-3">
                  {whatYouReceive.map((item, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-3 text-brand-light/90"
                    >
                      <CheckCircle2 size={18} className="text-brand flex-shrink-0" />
                      <span className="text-sm font-medium">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
                <p className="text-brand-light text-lg mb-6 leading-tight italic">
                  Talvez o que falta não seja força de vontade. <br className="hidden sm:block" />
                  <span className="text-brand font-bold">Falta acompanhamento certo.</span>
                </p>
                <a 
                  href="https://api.whatsapp.com/send/?phone=553182228501&text=Gostaria+de+saber+mais+sobre+a+Mentoria+Emagrecer+Sem+Recomecar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-brand hover:bg-brand-dark text-white px-8 py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 transition-all shadow-lg hover:shadow-brand/20 group"
                >
                  Quero começar agora
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Right Content */}
            <div className="bg-white/5 lg:bg-white/5 p-8 md:p-16 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-white/10">
              <div className="mb-12">
                <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-6 flex items-center gap-2">
                  <UserCheck size={18} className="text-brand" /> Ideal para você que:
                </h3>
                <ul className="space-y-4">
                  {idealFor.map((item, i) => (
                    <li key={i} className="flex items-center gap-4 text-brand-light/80 text-sm font-medium">
                      <div className="w-1.5 h-1.5 bg-brand rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-12">
                <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-6">Como funciona:</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/5 border border-white/5 p-4 rounded-2xl">
                    <Calendar size={20} className="text-brand mb-2" />
                    <p className="text-white font-bold text-xs">1 sessão por semana</p>
                  </div>
                  <div className="bg-white/5 border border-white/5 p-4 rounded-2xl">
                    <Monitor size={20} className="text-brand mb-2" />
                    <p className="text-white font-bold text-xs">100% online</p>
                  </div>
                  <div className="bg-white/5 border border-white/5 p-4 rounded-2xl">
                    <Clock size={20} className="text-brand mb-2" />
                    <p className="text-white font-bold text-xs">Atendimento objetivo</p>
                  </div>
                  <div className="bg-white/5 border border-white/5 p-4 rounded-2xl">
                    <Navigation size={20} className="text-brand mb-2" />
                    <p className="text-white font-bold text-xs">Acompanhamento contínuo</p>
                  </div>
                </div>
              </div>

              <div className="mt-auto">
                <div className="flex flex-col">
                  <p className="text-brand text-xs font-bold uppercase tracking-widest mb-2">Investimento</p>
                  <div className="flex items-baseline gap-2 text-white">
                    <span className="text-4xl font-bold">R$60</span>
                    <span className="text-brand-light/60 text-sm">por sessão semanal</span>
                  </div>
                  <p className="text-brand-light/60 text-xs mt-2 uppercase font-medium tracking-tighter">ou consulte plano mensal</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
