import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Ana Silva",
    text: "O atendimento é excelente! O Método Sllim mudou minha forma de ver a comida. Consegui emagrecer sem sofrimento.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop",
    role: "Empresária"
  },
  {
    name: "Mariana Costa",
    text: "Atendimento maravilhoso, 100% online. Consegui perder 8 quilos em 3 meses com as estratégias da Vanessa.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&h=200&auto=format&fit=crop",
    role: "Arquiteta"
  },
  {
    name: "Juliana Mendes",
    text: "Eu achava que não conseguiria foco no online, mas o suporte é incrível. O plano é super prático e realista.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&h=200&auto=format&fit=crop",
    role: "Advogada"
  },
  {
    name: "Paula Oliveira",
    text: "Excelente profissional! Finalmente entendi como emagrecer mantendo minha saúde e disposição no dia a dia.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&h=200&auto=format&fit=crop",
    role: "Publicitária"
  },
  {
    name: "Carla Ferreira (e Toby)",
    text: "O melhor investimento que fiz este ano. Até o Toby percebeu que estou muito mais disposta para nossas caminhadas!",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&h=200&auto=format&fit=crop",
    role: "Médica & Pet Lover"
  },
  {
    name: "Fernanda Souza",
    text: "Consegui emagrecer 12kg com o acompanhamento da Vanessa. Minha vida mudou completamente, recomendo muito!",
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=200&h=200&auto=format&fit=crop",
    role: "Professora"
  }
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="py-24 bg-brand/5 border-y border-brand/10 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-brand font-bold uppercase tracking-[0.2em] text-[11px] mb-4">Depoimentos Reais</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-brand-dark leading-tight uppercase">
            Transformações que inspiram
          </h2>
        </div>

        <div className="relative h-[400px] md:h-[350px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="absolute w-full bg-white p-10 md:p-16 rounded-[40px] shadow-sm border border-border flex flex-col md:flex-row items-center gap-10"
            >
              <div className="relative flex-shrink-0">
                <div className="absolute -top-4 -left-4 bg-brand text-white p-2 rounded-full z-10">
                  <Quote size={16} fill="currentColor" />
                </div>
                <img 
                  src={testimonials[index].image} 
                  alt={testimonials[index].name}
                  className="w-32 h-32 md:w-40 md:h-40 rounded-3xl object-cover shadow-lg border-2 border-brand/20"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="flex-1 text-center md:text-left">
                <div className="flex justify-center md:justify-start gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} size={16} className="text-brand" fill="currentColor" />
                  ))}
                </div>
                <p className="text-lg md:text-xl text-brand-dark italic leading-relaxed mb-6 font-medium">
                  "{testimonials[index].text}"
                </p>
                <div>
                  <h4 className="font-display font-bold text-lg text-brand-dark">{testimonials[index].name}</h4>
                  <p className="text-sm text-muted uppercase tracking-widest font-bold">{testimonials[index].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-12 flex items-center justify-center">
            <button 
              onClick={prev}
              className="w-12 h-12 rounded-full bg-white border border-border shadow-sm flex items-center justify-center text-brand-dark hover:bg-brand hover:text-white transition-all active:scale-95"
            >
              <ChevronLeft size={24} />
            </button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-12 flex items-center justify-center">
            <button 
              onClick={next}
              className="w-12 h-12 rounded-full bg-white border border-border shadow-sm flex items-center justify-center text-brand-dark hover:bg-brand hover:text-white transition-all active:scale-95"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-12">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 ${index === i ? 'w-8 bg-brand' : 'w-2 bg-brand/20'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
