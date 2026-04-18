import { motion } from 'motion/react';
import { Award, BookOpen, HeartPulse, Instagram } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-brand rounded-[2.5rem] z-0" />
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[4/5] bg-surface">
              <img 
                src="/vanessa.jpg"
                alt="Vanessa Schmidt"
                className="w-full h-full object-cover grayscale-[0.2]"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1544717297-fa95b3ee51f3?q=80&w=2070&auto=format&fit=crop';
                }}
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-2xl shadow-xl border border-border z-20 hidden md:block">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand/10 rounded-full flex items-center justify-center text-brand">
                  <Award size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-muted">Registro</p>
                  <p className="text-brand-dark font-bold">CRN 9, 18829</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-between items-start mb-4">
              <span className="text-brand font-bold uppercase tracking-[0.2em] text-[11px] block">Quem é Vanessa Schmidt</span>
              <motion.a 
                href="https://www.instagram.com/nessahnutri/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="flex items-center gap-2 text-brand hover:text-brand-dark transition-colors"
                title="Siga no Instagram"
              >
                <Instagram size={20} />
                <span className="text-xs font-bold">@nessahnutri</span>
              </motion.a>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-brand-dark leading-tight mb-8">
              Paixão em Nutrir e <span className="text-brand">Transformar</span> Vidas
            </h2>
            
            <div className="space-y-6 text-muted leading-relaxed text-base">
              <p>
                "Olá! Sou Vanessa Schmidt, sua nutricionista há mais de 10 anos."
              </p>
              <p>
                Com mais de uma década de experiência clínica, possuo pós-graduação em <strong>Nutrição Esportiva</strong> e <strong>Endocrinologia</strong>, especializações que fundamentam meu trabalho focado em emagrecimento definitivo.
              </p>
              <p>
                Ao longo desses anos, acumulei diversos casos de sucesso, transformando a vida de centenas de pessoas que buscavam não apenas perder peso, mas reconquistar a saúde e o bem-estar.
              </p>
              <p>
                Atualmente, sigo aprimorando meu conhecimento como mestranda na <strong>UFMG (Minas Gerais)</strong>, integrando a pesquisa acadêmica de ponta à prática do <strong>Método Sllim</strong> para oferecer o que há de mais moderno e eficiente em nutrição.
              </p>
              
              <motion.a
                href="https://www.instagram.com/nessahnutri/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 text-brand font-bold hover:underline"
                whileHover={{ x: 5 }}
              >
                <Instagram size={18} />
                Acompanhe minha rotina no Instagram
              </motion.a>
            </div>

            <div className="grid grid-cols-2 gap-8 mt-12 pt-12 border-t border-border">
              <div className="flex gap-4">
                <div className="text-brand"><BookOpen size={24} /></div>
                <div>
                  <h4 className="font-bold text-brand-dark text-sm uppercase mb-1">Ciência</h4>
                  <p className="text-xs text-muted leading-tight">Protocolos baseados em evidência.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-brand"><HeartPulse size={24} /></div>
                <div>
                  <h4 className="font-bold text-brand-dark text-sm uppercase mb-1">Empatia</h4>
                  <p className="text-xs text-muted leading-tight">Atendimento humanizado e próximo.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
