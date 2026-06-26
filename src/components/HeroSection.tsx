import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroSectionProps {
  onCtaClick: () => void;
  onExploreLibraryClick: () => void;
  isUnlocked: boolean;
}

export default function HeroSection({ onCtaClick, onExploreLibraryClick, isUnlocked }: HeroSectionProps) {
  return (
    <section 
      id="hero" 
      className="relative flex flex-col items-center justify-center pt-3 md:pt-8 pb-10 md:pb-16 overflow-hidden bg-white"
    >
      {/* Floating abstract decorative background elements with science green smoke and experiment effects */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Dynamic rising green experiment smoke / large glowing bubbles */}
        {[...Array(10)].map((_, i) => {
          const size = Math.random() * 60 + 30; // 30px to 90px
          const delay = Math.random() * 8;
          const duration = Math.random() * 14 + 12;
          const left = Math.random() * 100;
          return (
            <motion.div
              key={`smoke-${i}`}
              className="absolute rounded-full bg-brand-green/5"
              style={{
                left: `${left}%`,
                width: size,
                height: size,
                bottom: '-12%',
                filter: 'blur(16px)',
                boxShadow: '0 0 24px rgba(3, 157, 31, 0.15)',
              }}
              animate={{
                y: ['0vh', '-115vh'],
                x: [0, Math.sin(i) * 50, 0],
                scale: [0.7, 1.3, 0.4],
                opacity: [0, 0.45, 0.3, 0],
              }}
              transition={{
                duration: duration,
                repeat: Infinity,
                delay: delay,
                ease: "easeInOut",
              }}
            />
          );
        })}

        {/* Small crisp rising experiment bubbles */}
        {[...Array(12)].map((_, i) => {
          const size = Math.random() * 6 + 4; // 4px to 10px
          const delay = Math.random() * 6;
          const duration = Math.random() * 9 + 7;
          const left = Math.random() * 100;
          return (
            <motion.div
              key={`bubble-${i}`}
              className="absolute rounded-full border border-brand-green/20 bg-emerald-50/10"
              style={{
                left: `${left}%`,
                width: size,
                height: size,
                bottom: '-5%',
              }}
              animate={{
                y: ['0vh', '-105vh'],
                x: [0, Math.sin(i) * 25, Math.cos(i) * 25],
                opacity: [0, 0.7, 0],
              }}
              transition={{
                duration: duration,
                repeat: Infinity,
                delay: delay,
                ease: "linear",
              }}
            />
          );
        })}

        {/* Left Side Science Elements */}
        <motion.div 
          className="absolute left-[4%] top-[18%] w-12 h-12 select-none"
          animate={{ y: [0, -15, 0], rotate: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full text-brand-green/20">
            <path d="M9 3h6M10 3v5c0 .5-.2 1-.6 1.4L5.4 15.6c-.6.6-.9 1.4-.9 2.2C4.5 19.4 5.6 20 7 20h10c1.4 0 2.5-.6 2.5-2.2 0-.8-.3-1.6-.9-2.2l-4-6.2c-.4-.4-.6-.9-.6-1.4V3" />
          </svg>
        </motion.div>

        <motion.div 
          className="absolute left-[10%] top-[62%] w-10 h-10 select-none"
          animate={{ y: [0, 12, 0], rotate: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 8.5, ease: "easeInOut", delay: 1 }}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full text-brand-green/15">
            <ellipse cx="12" cy="12" rx="3" ry="9" transform="rotate(45 12 12)" />
            <ellipse cx="12" cy="12" rx="3" ry="9" transform="rotate(-45 12 12)" />
            <circle cx="12" cy="12" r="2" fill="currentColor" className="text-brand-green/5" />
          </svg>
        </motion.div>

        {/* Right Side Science Elements */}
        <motion.div 
          className="absolute right-[5%] top-[24%] w-14 h-14 select-none"
          animate={{ y: [0, 18, 0], rotate: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 9, ease: "easeInOut", delay: 0.5 }}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full text-brand-green/15">
            <circle cx="12" cy="5" r="3" />
            <circle cx="5" cy="12" r="3" />
            <circle cx="19" cy="12" r="3" />
            <circle cx="12" cy="19" r="3" />
            <line x1="12" y1="8" x2="12" y2="16" />
            <line x1="8" y1="12" x2="16" y2="12" />
          </svg>
        </motion.div>

        <motion.div 
          className="absolute right-[9%] top-[68%] w-11 h-11 select-none"
          animate={{ y: [0, -12, 0], rotate: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 6.5, ease: "easeInOut", delay: 1.5 }}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full text-brand-green/20">
            <path d="M4.5 10.5C7.8 14 11.2 14 14.5 10.5s6.7-3.5 10 0" />
            <path d="M4.5 13.5C7.8 10 11.2 10 14.5 13.5s6.7 3.5 10 0" />
          </svg>
        </motion.div>
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center space-y-4 md:space-y-6 z-10 flex flex-col items-center">
        
        {/* 1. Verified Badges Row matching Image */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-1 px-3 py-1 bg-blue-50/60 text-slate-700 text-[10px] md:text-sm font-semibold rounded-full border border-blue-100 shadow-sm"
        >
          <span className="text-amber-400">⭐⭐⭐⭐⭐</span>
          <span>Aprovado por <strong className="text-brand-green font-bold">+1.200 professores</strong> de Ciências</span>
        </motion.div>

        {/* 2. Headline with specific brand coloring matching the requested palette */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-2xl sm:max-w-3xl mx-auto px-1"
        >
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight font-display leading-[1.15] md:leading-[1.1] drop-shadow-xs text-slate-800">
            Pare de <span className="text-[#039D1F] font-black">perder horas</span> procurando experimentos e planejando aulas de Ciências <span className="text-[#039D1F] font-black">do zero</span>.
          </h1>
        </motion.div>

        {/* 3. Subtitle matching Screenshot */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="max-w-2xl mx-auto text-xs sm:text-sm md:text-lg text-slate-500 font-medium leading-relaxed"
        >
          Receba <span className="text-[#039D1F] font-black">365 experimentos</span>, <span className="text-[#039D1F] font-black">100 avaliações</span> e <span className="text-[#039D1F] font-black">50 atividades prontas</span> para praticamente um ano inteiro de aulas mais práticas.
        </motion.p>

        {/* 4. Small video pointer text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-[10px] sm:text-sm font-bold text-slate-700 flex items-center gap-1 bg-amber-50 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full border border-amber-100"
        >
          <span>👇 Assista o vídeo abaixo</span>
        </motion.div>

        {/* 5. Premium Cinematic VSL Player - Sized down dynamically for mobile and desktop first-fold view */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="relative w-full max-w-[170px] xs:max-w-[190px] sm:max-w-[215px] md:max-w-[250px] aspect-[9/17.5] bg-slate-950 rounded-[20px] xs:rounded-[24px] md:rounded-[32px] p-1.5 md:p-2.5 shadow-2xl border-2 md:border-4 border-slate-200 overflow-hidden"
        >
          <div className="w-full h-full rounded-[14px] xs:rounded-[18px] md:rounded-[22px] overflow-hidden">
            <div 
              className="w-full h-full"
              dangerouslySetInnerHTML={{
                __html: `<wistia-player media-id="u1cm2sej87" aspect="0.514" style="display: block; width: 100%; height: 100%;"></wistia-player>`
              }}
            />
          </div>
        </motion.div>

        {/* 6. Green CTA Button sized exactly to match the width of the video player above */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="pt-1 w-full max-w-[170px] xs:max-w-[190px] sm:max-w-[215px] md:max-w-[250px]"
        >
          <motion.button
            onClick={onCtaClick}
            animate={{ scale: [1, 1.03, 1] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-full py-2.5 md:py-3.5 bg-[#05b41b] hover:bg-[#049e18] text-white rounded-xl md:rounded-2xl font-black text-[9px] xs:text-[10px] sm:text-xs md:text-sm tracking-wide uppercase transition-all duration-300 shadow-xl shadow-emerald-700/20 flex items-center justify-center gap-1.5 cursor-pointer active:scale-95 font-display"
          >
            Quero meus 365 experimentos
            <ArrowRight className="w-3.5 h-3.5 md:w-4.5 md:h-4.5 animate-pulse shrink-0" />
          </motion.button>
          
          <span className="text-[9px] md:text-[10px] text-slate-400 font-semibold mt-2 block">
            ✓ Acesso imediato • Pagamento Único • Garantia de 7 dias
          </span>
        </motion.div>

      </div>
    </section>
  );
}
