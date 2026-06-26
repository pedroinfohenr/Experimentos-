import { motion } from 'motion/react';
import { Beaker, ClipboardCheck, Award, ArrowRight } from 'lucide-react';

interface DeliverablesSectionProps {
  onCtaClick: () => void;
}

export default function DeliverablesSection({ onCtaClick }: DeliverablesSectionProps) {
  const items = [
    {
      icon: <Beaker className="w-6 h-6 md:w-7 md:h-7 text-[#039D1F]" />,
      quantity: "365",
      label: "Experimentos Práticos",
      description: "Roteiros passo a passo fáceis de aplicar em sala, usando materiais simples de baixo custo.",
      badge: "Um para cada dia"
    },
    {
      icon: <ClipboardCheck className="w-6 h-6 md:w-7 md:h-7 text-[#039D1F]" />,
      quantity: "100",
      label: "Avaliações Prontas",
      description: "Provas, testes e fichas avaliativas já prontas para imprimir, com gabarito completo.",
      badge: "100% Gabaritado"
    },
    {
      icon: <Award className="w-6 h-6 md:w-7 md:h-7 text-[#039D1F]" />,
      quantity: "50",
      label: "Atividades Práticas",
      description: "Atividades dinâmicas de fixação, dinâmicas de grupo e desafios científicos estruturados.",
      badge: "100% BNCC"
    }
  ];

  return (
    <section id="conteudo-completo" className="py-10 md:py-16 bg-slate-50 border-y border-slate-100">
      <div className="max-w-5xl mx-auto px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
          <span className="text-xs md:text-sm font-extrabold text-[#039D1F] uppercase tracking-widest block mb-2 font-mono">
            — O QUE VOCÊ VAI RECEBER
          </span>
          <h2 className="text-2xl xs:text-3xl md:text-4xl font-black text-slate-800 tracking-tight font-display leading-tight">
            Praticamente um <span className="text-[#039D1F]">ano inteiro</span> de aulas práticas prontas
          </h2>
          <p className="mt-2 md:mt-3 text-slate-500 text-xs sm:text-sm md:text-base font-medium max-w-xl mx-auto">
            Receba 365 experimentos, 100 avaliações e 50 atividades prontas para praticamente um ano inteiro de aulas mais práticas.
          </p>
        </div>

        {/* Deliverables Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              className="bg-white border border-slate-100 rounded-3xl p-5 md:p-6 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-emerald-50 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="text-[9px] md:text-[10px] font-black text-[#039D1F] bg-emerald-50 px-2.5 py-1 rounded-full uppercase tracking-wider">
                    {item.badge}
                  </span>
                </div>
                
                <div className="space-y-1">
                  <div className="text-2xl md:text-3.5xl font-black text-slate-800 font-display">
                    {item.quantity}
                  </div>
                  <h3 className="text-sm md:text-base font-black text-slate-800 font-display">
                    {item.label}
                  </h3>
                  <p className="text-xs md:text-sm text-slate-400 leading-relaxed font-medium pt-1">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Small Highlight */}
        <div className="mt-8 text-center">
          <motion.button
            onClick={onCtaClick}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-5 py-3 md:px-7 md:py-3.5 bg-[#05b41b] hover:bg-[#049e18] text-white rounded-xl font-black text-xs md:text-sm tracking-wider uppercase shadow-md transition-all duration-300 cursor-pointer"
          >
            Quero garantir meus materiais
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </div>

      </div>
    </section>
  );
}
