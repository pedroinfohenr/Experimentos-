import { ShieldCheck, Check, Sparkles, AlertCircle, ArrowRight } from 'lucide-react';
import { plans } from '../data';
import { PricingPlan } from '../types';
import { motion } from 'motion/react';

interface PricingSectionProps {
  onSelectPlan: (plan: PricingPlan) => void;
}

export default function PricingSection({ onSelectPlan }: PricingSectionProps) {
  return (
    <section id="planos" className="py-10 md:py-20 bg-white relative overflow-hidden grid-pattern">
      
      {/* Decorative colored blobs */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-amber-100/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16 space-y-2 md:space-y-3">
          <span className="text-xs md:text-sm font-extrabold text-[#138200] uppercase tracking-widest block mb-1 font-mono">
            — ESCOLHA SEU PLANO
          </span>
          <h2 className="text-2xl xs:text-3xl md:text-4xl lg:text-5xl font-black text-slate-800 tracking-tight font-display leading-tight">
            Um material que se paga logo na sua{' '}
            <span className="text-[#07ae00] relative inline-block">
              primeira aula
              <span className="absolute left-0 bottom-1 w-full h-1 bg-green-200 rounded-full"></span>
            </span>
          </h2>
          <p className="text-xs sm:text-sm md:text-base font-medium text-slate-500 max-w-2xl mx-auto">
            Recupere seus finais de semana e tenha um ano inteiro de experimentos prontos por menos de R$ 0,07 por dia.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto items-center">
          
          {plans.map((plan) => {
            const isPopular = plan.isPopular;
            if (!isPopular) {
              // BÁSICO (ESSENCIAL) - Significantly smaller but clean, premium and readable
              return (
                <motion.div
                  key={plan.id}
                  id={`plan-card-${plan.id}`}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 0.98 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="rounded-3xl p-5 md:p-8 bg-white border border-slate-200 text-slate-600 shadow-sm flex flex-col justify-between relative md:scale-95 transition-all duration-300"
                >
                  {/* Card Title & Desc */}
                  <div className="space-y-5">
                    <div className="space-y-1 text-center md:text-left">
                      <span className="text-[10px] bg-slate-100 text-slate-500 font-extrabold px-2.5 py-1 rounded-md uppercase tracking-wider font-mono">
                        PLANO BÁSICO
                      </span>
                      <h3 className="text-xl font-bold text-slate-800 tracking-tight font-display mt-2">
                        {plan.name}
                      </h3>
                      <p className="text-xs text-slate-500 font-medium">
                        {plan.description}
                      </p>
                    </div>

                    {/* Pricing Info block */}
                    <div className="border-y border-slate-100 py-4 text-center md:text-left space-y-1">
                      <span className="text-xs text-slate-400 line-through block">
                        de R$ {plan.originalPrice.toFixed(2).replace('.', ',')}
                      </span>
                      <div className="inline-flex items-baseline gap-1 text-slate-700">
                        <span className="text-xs font-bold uppercase tracking-wider">por R$</span>
                        <span className="text-4xl font-extrabold tracking-tighter text-slate-800">
                          {plan.promoPrice}
                        </span>
                        <span className="text-sm font-bold">
                          ,{plan.cents}
                        </span>
                      </div>
                      <span className="text-[9px] text-slate-400 block font-bold uppercase tracking-wider font-mono">
                        Acesso digital imediato
                      </span>
                    </div>

                    {/* Features List */}
                    <ul className="space-y-2.5 text-left text-xs text-slate-600">
                      {plan.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2">
                          <div className="w-4.5 h-4.5 rounded-full bg-slate-50 text-slate-400 flex items-center justify-center shrink-0">
                            <Check className="w-3 h-3 stroke-[3]" />
                          </div>
                          <span className="leading-tight font-medium">{feat.text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action CTA Trigger */}
                  <div className="pt-6 mt-6">
                    <button
                      onClick={() => onSelectPlan(plan)}
                      className="w-full py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <span>{plan.buttonText}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </motion.div>
              );
            } else {
              // COMPLETO (PREMIUM) - Golden, bigger, white background, continuous pulsing, green button
              return (
                <motion.div
                  key={plan.id}
                  id={`plan-card-${plan.id}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  animate={{ 
                    scale: [1, 1.015, 1],
                    boxShadow: [
                      "0 10px 25px -5px rgba(245, 158, 11, 0.2)",
                      "0 15px 35px 0px rgba(245, 158, 11, 0.35)",
                      "0 10px 25px -5px rgba(245, 158, 11, 0.2)"
                    ]
                  }}
                  transition={{ 
                    scale: { repeat: Infinity, duration: 3, ease: "easeInOut" },
                    boxShadow: { repeat: Infinity, duration: 3, ease: "easeInOut" }
                  }}
                  viewport={{ once: true }}
                  className="rounded-3xl p-5 md:p-8 flex flex-col justify-between relative bg-white text-slate-800 border-[3px] border-amber-400 shadow-2xl z-20 overflow-hidden"
                >
                  {/* Decorative diagonal shine effect */}
                  <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-amber-500/10 opacity-35 animate-pulse pointer-events-none" style={{ animationDuration: '4s' }}></div>

                  {/* Golden Header Banner */}
                  <div className="absolute -top-1 right-0 bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 text-[10px] font-black tracking-widest uppercase px-4 py-1.5 rounded-bl-xl shadow-md flex items-center gap-1 select-none z-10">
                    <Sparkles className="w-3 h-3 fill-slate-950" />
                    <span>👑 {plan.badge}</span>
                  </div>

                  {/* Card Title & Desc */}
                  <div className="space-y-6 relative z-10">
                    <div className="space-y-1 text-center md:text-left">
                      <h3 className="text-2xl font-black text-slate-900 tracking-tight font-display flex items-center gap-1.5 justify-center md:justify-start">
                        {plan.name}
                        <span className="bg-amber-400 text-slate-950 font-black text-[9px] px-1.5 py-0.5 rounded-md uppercase tracking-wider font-mono">
                          RECOMENDADO
                        </span>
                      </h3>
                      <p className="text-xs text-slate-500 font-medium">
                        {plan.description}
                      </p>
                    </div>

                    {/* Pricing Info block (Dourado e Maior!) */}
                    <div className="border-y border-amber-100 py-5 text-center md:text-left space-y-1 relative">
                      <span className="text-xs text-slate-400 line-through block">
                        de R$ {plan.originalPrice.toFixed(2).replace('.', ',')}
                      </span>
                      
                      <div className="inline-flex items-baseline gap-1 text-amber-500">
                        <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">por R$</span>
                        <span className="text-6xl font-black tracking-tighter text-gradient bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent font-display">
                          {plan.promoPrice}
                        </span>
                        <span className="text-lg font-black text-amber-500">
                          ,{plan.cents}
                        </span>
                      </div>

                      {/* Savings tag mathematically accurate: R$ 249,00 - R$ 27,00 = R$ 222,00 */}
                      <div className="mt-1 flex justify-center md:justify-start">
                        <span className="bg-emerald-500 text-white text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider animate-pulse flex items-center gap-1">
                          🔥 VOCÊ ECONOMIZA R$ 222,00!
                        </span>
                      </div>

                      <span className="text-[10px] text-slate-400 block pt-1.5 font-bold uppercase tracking-wider font-mono">
                        Pagamento único • Sem mensalidades
                      </span>
                    </div>

                    {/* Features List */}
                    <ul className="space-y-3 text-left text-slate-700">
                      {plan.features.map((feat, fIdx) => {
                        const isBonus = feat.text.startsWith('🎁');
                        const displayText = isBonus ? feat.text.replace('🎁', '').trim() : feat.text;
                        return (
                          <li
                            key={fIdx}
                            className={`text-xs md:text-sm flex items-start gap-2 ${
                              feat.included ? 'text-slate-700' : 'text-slate-400 line-through'
                            }`}
                          >
                            {isBonus ? (
                              <span className="text-base shrink-0 select-none mr-1">🎁</span>
                            ) : (
                              <div className="w-5 h-5 rounded-full bg-amber-50 text-amber-500 flex items-center justify-center shrink-0">
                                <Check className="w-3.5 h-3.5 stroke-[3]" />
                              </div>
                            )}
                            <span className="leading-tight font-semibold">{displayText}</span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                  {/* Action CTA Trigger (Vibrant Green Button!) */}
                  <div className="pt-8 mt-auto relative z-10">
                    <button
                      onClick={() => onSelectPlan(plan)}
                      className="w-full py-4.5 bg-[#30bb06] hover:bg-[#2aa305] text-white rounded-2xl font-black text-xs md:text-sm tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-xl shadow-green-500/10 border border-[#e6e2e2] transform hover:-translate-y-0.5"
                    >
                      <span>SIM, QUERO O PACOTE COMPLETO</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              );
            }
          })}

        </div>

        {/* Security / Guarantee assurances text below cards */}
        <div className="mt-12 text-center space-y-2">
          <p className="text-xs text-slate-400 font-medium flex items-center justify-center gap-1">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            Pagamento 100% seguro • 7 dias de garantia incondicional
          </p>
        </div>

      </div>
    </section>
  );
}
