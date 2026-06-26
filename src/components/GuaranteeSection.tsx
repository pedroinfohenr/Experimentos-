import { motion } from 'motion/react';
import { ShieldCheck, RefreshCw, HelpCircle, Zap } from 'lucide-react';

export default function GuaranteeSection() {
  return (
    <section id="garantia-incondicional" className="py-10 md:py-16 bg-emerald-50/40 border-y border-emerald-100/60 relative overflow-hidden">
      {/* Decorative subtle gradient background blobs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-emerald-100/25 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-8 relative z-10 flex flex-col items-center text-center">
        
        {/* 'Compre sem medo' Tag */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-100/80 text-[#039D1F] border border-emerald-200 text-[10px] md:text-xs font-black rounded-full mb-5 uppercase tracking-wider"
        >
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>COMPRE SEM MEDO</span>
        </motion.div>

        {/* Premium SVG 7-Day Guarantee Seal using Green Palette */}
        <motion.div
          initial={{ opacity: 0, rotate: -12, scale: 0.85 }}
          whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          className="w-28 h-28 md:w-32 md:h-32 mb-5 drop-shadow-[0_8px_20px_rgba(3,157,31,0.12)] flex items-center justify-center relative select-none"
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs>
              <path id="circlePath" d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
              <linearGradient id="sealGreen" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#05b41b" />
                <stop offset="100%" stopColor="#026b15" />
              </linearGradient>
            </defs>
            
            {/* Outer dotted decorative ring */}
            <circle cx="50" cy="50" r="46" fill="none" stroke="#039D1F" strokeWidth="1" strokeDasharray="3 2" opacity="0.6" />
            
            {/* Scalloped edge style or solid filled seal circle */}
            <circle cx="50" cy="50" r="41" fill="url(#sealGreen)" />
            <circle cx="50" cy="50" r="35" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="1.2" />
            
            {/* Circular curved label text inside seal */}
            <text fill="white" fontSize="5.8" fontWeight="900" letterSpacing="1.1">
              <textPath href="#circlePath" startOffset="50%" textAnchor="middle">
                GARANTIA INCONDICIONAL • 7 DIAS
              </textPath>
            </text>
          </svg>

          {/* Center inner badge with large bold '7' and 'DIAS' */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white pointer-events-none">
            <span className="text-2xl md:text-3xl font-black leading-none tracking-tight font-display drop-shadow-sm">7</span>
            <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest leading-none mt-0.5">DIAS</span>
          </div>
        </motion.div>

        {/* Copy / Text Content */}
        <div className="max-w-2xl space-y-3.5 mb-6 md:mb-8">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl lg:text-3xl font-black text-slate-800 tracking-tight font-display"
          >
            Garantia Incondicional de 7 Dias
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xs sm:text-sm md:text-base text-slate-500 font-medium leading-relaxed"
          >
            Se por qualquer motivo você não ficar satisfeito com o material, basta enviar um e-mail em até 7 dias que devolvemos 100% do seu dinheiro. Sem perguntas, sem burocracia.
          </motion.p>
        </div>

        {/* Highlights Row: Reembolso total | Sem perguntas | Processo rápido */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-lg pt-5 border-t border-emerald-200/40">
          
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.12 }}
            className="flex items-center justify-center gap-2 bg-white px-3.5 py-2.5 rounded-xl border border-emerald-100/60 shadow-xs"
          >
            <div className="w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center">
              <RefreshCw className="w-3 h-3 text-[#039D1F]" />
            </div>
            <span className="text-xs md:text-sm font-black text-slate-700">Reembolso total</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.18 }}
            className="flex items-center justify-center gap-2 bg-white px-3.5 py-2.5 rounded-xl border border-emerald-100/60 shadow-xs"
          >
            <div className="w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center">
              <HelpCircle className="w-3 h-3 text-[#039D1F]" />
            </div>
            <span className="text-xs md:text-sm font-black text-slate-700">Sem perguntas</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.24 }}
            className="flex items-center justify-center gap-2 bg-white px-3.5 py-2.5 rounded-xl border border-emerald-100/60 shadow-xs"
          >
            <div className="w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center">
              <Zap className="w-3 h-3 text-[#039D1F]" />
            </div>
            <span className="text-xs md:text-sm font-black text-slate-700">Processo rápido</span>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
