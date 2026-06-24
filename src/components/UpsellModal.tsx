import { motion, AnimatePresence } from 'motion/react';
import { Gift, X, AlertTriangle } from 'lucide-react';

interface UpsellModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAcceptUpsell: () => void; // accept Complete at 19,90
  onDeclineUpsell: () => void; // decline and keep Basic at 10,00
}

export default function UpsellModal({ isOpen, onClose, onAcceptUpsell, onDeclineUpsell }: UpsellModalProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div id="upsell-modal" className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Dark overlay backdrop with blur */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs"
        />

        {/* Modal Panel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ type: 'spring', damping: 25, stiffness: 350 }}
          className="relative bg-white text-slate-800 w-full max-w-md rounded-3xl overflow-hidden shadow-2xl border border-slate-100 z-10"
        >
          {/* Header Bar: Rich green background with gift icon */}
          <div className="bg-gradient-to-r from-[#0bae04] to-[#038f09] px-6 py-6 text-white text-center relative">
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white/80 hover:text-white hover:bg-white/10 p-1.5 rounded-full transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Gift icon within a round badge */}
            <div className="mx-auto w-12 h-12 rounded-2xl bg-white/15 backdrop-blur-xs flex items-center justify-center shadow-inner mb-3">
              <Gift className="w-6 h-6 text-white animate-pulse" />
            </div>

            <h3 className="text-lg md:text-xl font-black tracking-tight leading-tight flex items-center justify-center gap-2">
              <span>🎁 ESPERE!</span>
              <span className="font-extrabold text-white">Vai deixar esses bônus incríveis?</span>
            </h3>
          </div>

          {/* Modal Body */}
          <div className="p-6 space-y-6">
            
            {/* Excluded items box (Light red warning) */}
            <div className="bg-rose-50/70 border border-rose-100 rounded-2xl p-4.5 space-y-3">
              <p className="text-[11px] md:text-xs font-black text-rose-800 uppercase tracking-widest text-center font-mono">
                O Pacote Básico NÃO INCLUI:
              </p>
              
              <ul className="space-y-2 text-xs text-rose-900/90 font-medium">
                <li className="flex items-start gap-2.5">
                  <span className="text-rose-500 font-bold shrink-0 select-none text-sm leading-none">×</span>
                  <span>30 Aulas Prontas de Ciências (BNCC)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-rose-500 font-bold shrink-0 select-none text-sm leading-none">×</span>
                  <span>50 Atividades Práticas para Imprimir</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-rose-500 font-bold shrink-0 select-none text-sm leading-none">×</span>
                  <span>100 Avaliações Prontas (com Gabarito)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-rose-500 font-bold shrink-0 select-none text-sm leading-none">×</span>
                  <span>Guia Completo do Professor</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-rose-500 font-bold shrink-0 select-none text-sm leading-none">×</span>
                  <span>Atualizações Vitalícias Gratuitas</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-rose-500 font-bold shrink-0 select-none text-sm leading-none">×</span>
                  <span>Suporte VIP Prioritário 24/7</span>
                </li>
              </ul>
            </div>

            {/* Price Upgrade Indicator Block */}
            <div className="bg-emerald-50/60 border border-emerald-100 rounded-2xl p-4.5 text-center space-y-1">
              <p className="text-xs md:text-sm font-bold text-slate-700">
                Por apenas <span className="text-[#038f09] font-black">+ R$ 9,90</span>, destrave o
              </p>
              
              <p className="text-2xl md:text-3xl font-black text-[#038f09] tracking-tight font-display py-0.5">
                PACOTE COMPLETO
              </p>
              
              <p className="text-[11px] text-slate-500 font-medium">
                com todos os Bônus (economize R$ 222,00)
              </p>
            </div>

            {/* Interactive Action Buttons */}
            <div className="space-y-3 pt-1">
              <button
                onClick={onAcceptUpsell}
                className="w-full py-4 bg-[#30bb06] hover:bg-[#2aa305] text-white rounded-2xl font-black text-xs md:text-sm tracking-wider uppercase shadow-xl shadow-green-500/15 cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0 transition-all"
              >
                SIM! Quero o Pacote Completo Com Desconto (R$ 19,90)
              </button>
              
              <button
                onClick={onDeclineUpsell}
                className="w-full py-2 bg-transparent hover:bg-slate-50 text-slate-400 hover:text-slate-600 font-bold rounded-xl text-[11px] tracking-wider uppercase transition-colors cursor-pointer text-center"
              >
                Continuar apenas com o pacote básico (R$ 10,00)
              </button>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
