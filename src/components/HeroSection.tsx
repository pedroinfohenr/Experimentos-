import { ArrowRight, CheckCircle, Play, Sparkles, Volume2 } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';

interface HeroSectionProps {
  onCtaClick: () => void;
  onExploreLibraryClick: () => void;
  isUnlocked: boolean;
}

export default function HeroSection({ onCtaClick, onExploreLibraryClick, isUnlocked }: HeroSectionProps) {
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);

  return (
    <section 
      id="hero" 
      className="relative flex flex-col items-center justify-center pt-6 md:pt-10 pb-16 overflow-hidden bg-white"
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

      <div className="max-w-4xl mx-auto px-6 text-center space-y-6 z-10 flex flex-col items-center">
        
        {/* 1. Verified Badges Row matching Image */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-blue-50/60 text-slate-700 text-xs md:text-sm font-semibold rounded-full border border-blue-100 shadow-sm"
        >
          <span className="text-amber-400">⭐⭐⭐⭐⭐</span>
          <span>Aprovado por <strong className="text-brand-green font-bold">+1.200 professores</strong> de Ciências</span>
        </motion.div>

        {/* 2. Headline with specific brand coloring matching the requested palette */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight font-display leading-[1.1] drop-shadow-xs" style={{ color: '#7d7c7c' }}>
            <span className="text-brand-green font-display">+365 Experimentos de Ciências Prontos</span> para Aplicar em Sala de Aula
          </h1>
        </motion.div>

        {/* 3. Subtitle matching Screenshot */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-slate-500 font-medium leading-relaxed"
        >
          Experimentos <span className="text-brand-green font-bold">Prontos</span> para um <span className="text-brand-green font-bold">Ano Inteiro de Aulas</span><br />Mais Práticas e Divertidas.
        </motion.p>

        {/* 4. Small video pointer text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xs sm:text-sm font-bold text-slate-700 flex items-center gap-1 bg-amber-50 px-3 py-1 rounded-full border border-amber-100"
        >
          <span>👇 Assista o vídeo abaixo</span>
        </motion.div>

        {/* 5. Classroom Video Mockup Player */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="relative w-full max-w-[340px] aspect-[9/16] bg-slate-100 rounded-[32px] p-2.5 shadow-2xl border-4 border-slate-200 overflow-hidden group/mock"
        >
          <div className="relative w-full h-full bg-slate-950 rounded-[22px] overflow-hidden flex flex-col justify-between">
            
            {!isPlayingVideo ? (
              <>
                {/* Backdrop image of a teacher presenting interactive materials */}
                <img 
                  src="https://images.unsplash.com/photo-1544535830-9d5a477db533?w=500&h=880&fit=crop&q=80" 
                  alt="Professora ensinando Ciências" 
                  className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-80"
                  referrerPolicy="no-referrer"
                />

                {/* Subtle dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/40 z-10"></div>

                {/* Top decorative element */}
                <div className="z-20 p-4 w-full flex justify-between items-center">
                  <span className="text-[10px] bg-brand-green/90 text-white font-extrabold px-2.5 py-1 rounded-full font-mono uppercase tracking-widest">
                    DEMO 100% PRÁTICA
                  </span>
                </div>

                {/* Play Button Trigger */}
                <div className="z-20 my-auto mx-auto text-center space-y-3">
                  <button 
                    onClick={() => setIsPlayingVideo(true)}
                    className="w-16 h-16 rounded-full bg-brand-green hover:bg-brand-green-hover text-white flex items-center justify-center shadow-xl shadow-brand-green/40 transform hover:scale-110 active:scale-95 transition-all mx-auto border-4 border-white/20 cursor-pointer"
                  >
                    <Play className="w-7 h-7 fill-white translate-x-0.5" />
                  </button>
                  <p className="text-[11px] text-white/90 font-black max-w-[200px] mx-auto drop-shadow uppercase tracking-wider">
                    Clique para iniciar demonstração
                  </p>
                </div>

                {/* Interactive Player Controls mimicking Wistia style in the screenshot */}
                <div className="z-20 p-4 w-full space-y-2">
                  
                  {/* Captions/Subtitles overlay */}
                  <div className="text-center px-2 py-1.5 bg-black/60 backdrop-blur-xs rounded-lg border border-white/10">
                    <p className="text-[11px] text-white font-bold tracking-tight">
                      SE TODA SEMANA SUA AULA FOR ASSIM...
                    </p>
                  </div>

                  {/* Wistia bar mockup */}
                  <div className="flex items-center gap-2 bg-brand-green text-white px-3 py-2 rounded-xl text-[10px] font-bold shadow-md">
                    <span>0:02</span>
                    <div className="flex-1 h-1 bg-white/30 rounded-full relative overflow-hidden">
                      <div className="absolute left-0 top-0 bottom-0 w-[15%] bg-white rounded-full"></div>
                    </div>
                    <span className="font-black italic text-emerald-100 tracking-tighter text-xs">wistia</span>
                  </div>
                </div>
              </>
            ) : (
              // Playing simulated video demo
              <div className="w-full h-full relative bg-slate-950 z-20 flex flex-col justify-between p-4">
                <div className="absolute inset-0 grid-pattern opacity-10"></div>
                
                <div className="z-10 flex justify-between items-center">
                  <span className="text-[9px] bg-emerald-800 text-emerald-100 font-mono px-2 py-0.5 rounded">
                    EF06CI05 • Célula 3D
                  </span>
                  <button
                    onClick={() => setIsPlayingVideo(false)}
                    className="text-[10px] font-bold text-slate-400 hover:text-white bg-slate-900 px-2.5 py-1 rounded-md border border-slate-800 cursor-pointer"
                  >
                    Voltar
                  </button>
                </div>

                <div className="z-10 relative w-full aspect-square bg-emerald-950/80 border border-emerald-800 rounded-2xl p-4 flex flex-col justify-between overflow-hidden shadow-xl my-auto">
                  <div className="absolute inset-4 border-2 border-dashed border-emerald-500/30 rounded-xl flex items-center justify-center">
                    <motion.div 
                      animate={{ scale: [1, 1.08, 1], rotate: [0, 8, -8, 0] }}
                      transition={{ repeat: Infinity, duration: 3 }}
                      className="text-5xl"
                    >
                      ✂️
                    </motion.div>
                  </div>
                  <span className="text-[9px] text-emerald-300 font-mono">Atividade Prática #23</span>
                  <p className="text-xs font-bold text-white text-center z-10 uppercase tracking-wider">Montando Organelas</p>
                  <span className="text-[8px] text-slate-400 font-mono self-end">BNCC Alinhado</span>
                </div>

                {/* Interactive captions and timeline controls playing */}
                <div className="z-10 space-y-2">
                  <div className="text-center px-2 py-1.5 bg-emerald-950/90 border border-emerald-800 rounded-lg">
                    <p className="text-[10px] text-emerald-300 font-black tracking-tight">
                      "Olha como encaixa perfeitamente a mitocôndria!"
                    </p>
                  </div>

                  <div className="flex items-center gap-2 bg-emerald-600 text-white px-3 py-2 rounded-xl text-[10px] font-bold">
                    <span>0:14</span>
                    <div className="flex-1 h-1 bg-white/30 rounded-full relative overflow-hidden">
                      <motion.div 
                        animate={{ width: ['0%', '100%'] }} 
                        transition={{ repeat: Infinity, duration: 8, ease: 'linear' }} 
                        className="absolute left-0 top-0 bottom-0 bg-white rounded-full"
                      />
                    </div>
                    <span className="font-black italic text-emerald-200 tracking-tighter text-xs animate-pulse">wistia</span>
                  </div>
                </div>
              </div>
            )}

          </div>
        </motion.div>

        {/* 6. Green CTA Button styled exactly like the screenshot button below the video card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="pt-2 w-full max-w-sm"
        >
          <motion.button
            onClick={onCtaClick}
            animate={{ scale: [1, 1.03, 1] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-full py-4.5 bg-[#05b41b] hover:bg-[#049e18] text-white rounded-2xl font-black text-sm md:text-base tracking-wide uppercase transition-all duration-300 shadow-xl shadow-emerald-700/20 flex items-center justify-center gap-2 cursor-pointer active:scale-95 font-display"
          >
            Quero Acessar Agora
            <ArrowRight className="w-5 h-5 animate-pulse" />
          </motion.button>
          
          <span className="text-[11px] text-slate-400 font-semibold mt-2.5 block">
            ✓ Acesso imediato • Pagamento Único • Garantia de 7 dias
          </span>
        </motion.div>

      </div>
    </section>
  );
}
