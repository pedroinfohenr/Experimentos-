import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Pause, ArrowRight, Folder, Search, Grid, List, MoreVertical, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface MaterialPreviewProps {
  onCtaClick?: () => void;
}

export default function MaterialPreview({ onCtaClick }: MaterialPreviewProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeTab, setActiveTab] = useState<'drive' | 'preview'>('drive');
  const [currentSlide, setCurrentSlide] = useState(0);

  // Simulated screenshots of the premium science materials shown during playback
  const previewSlides = [
    {
      title: "Ficha Prática: Experimento do Vulcão",
      category: "Química Divertida",
      tags: ["Prático", "Visual", "BNCC"],
      image: "🌋",
      description: "Instruções passo a passo detalhadas para criar um vulcão químico seguro em sala de aula, com lista de materiais e perguntas norteadoras."
    },
    {
      title: "Flashcard: Sistema Solar",
      category: "Astronomia",
      tags: ["Cartões Ilustrativos", "Imprimir"],
      image: "🪐",
      description: "Cartões visuais de alta definição contendo curiosidades e dados sobre cada planeta para atividades de pareamento."
    },
    {
      title: "Slide Didático: Ecossistemas",
      category: "Biologia & Meio Ambiente",
      tags: ["Apresentação", "Slides"],
      image: "🌱",
      description: "Slides lindamente ilustrados prontos para projetar, explicando cadeias alimentares de forma simples e engajadora."
    },
    {
      title: "Ficha de Atividade: Estados da Água",
      category: "Física Prática",
      tags: ["Folha de Exercícios", "Avaliação"],
      image: "💧",
      description: "Atividade lúdica de colorir e associar para fixação dos estados físicos da matéria e ciclo hidrológico."
    }
  ];

  // Auto-play slideshow inside the phone screen when "video" is playing
  useEffect(() => {
    let interval: any;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % previewSlides.length);
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const togglePlay = () => {
    if (!isPlaying) {
      setActiveTab('preview');
    }
    setIsPlaying(!isPlaying);
  };

  const folders = [
    { id: 1, name: "1-COMECE POR AQUI!!", color: "text-amber-500", size: "12 KB" },
    { id: 2, name: "2-365 EXPERIMENTOS DE CIÊNCIAS", color: "text-emerald-500", size: "148 MB" },
    { id: 3, name: "3-ATIVIDADES PARA IMPRIMIR", color: "text-rose-500", size: "85 MB" },
    { id: 4, name: "4-FLASHCARDS DE CIÊNCIAS", color: "text-cyan-500", size: "42 MB" },
    { id: 5, name: "5-SLIDES INTERATIVOS", color: "text-purple-500", size: "110 MB" },
    { id: 6, name: "6-KIT CIÊNCIAS INTERATIVO", color: "text-indigo-500", size: "35 MB" },
    { id: 7, name: "7-GUIA DE PLANEJAMENTO BNCC", color: "text-teal-500", size: "18 MB" },
    { id: 8, name: "8-KIT AULAS DE EMERGÊNCIA", color: "text-rose-600", size: "24 MB" },
  ];

  return (
    <section id="demonstracao" className="py-20 bg-slate-50 border-b border-slate-100 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs md:text-sm font-extrabold text-[#039D1F] uppercase tracking-widest block mb-3 font-mono">
            — MATERIAL POR DENTRO
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#07b407] tracking-tight font-display leading-tight">
            Veja o que você vai receber
          </h2>
          <p className="mt-3 text-slate-500 text-sm md:text-base font-medium max-w-xl mx-auto">
            Acesso imediato e vitalício à nossa pasta organizada no Google Drive. Baixe tudo com um clique, de qualquer dispositivo.
          </p>
        </div>

        {/* Centerpiece Container with Phone Mockup */}
        <div className="flex flex-col items-center justify-center relative select-none">
          
          {/* Main Phone Container */}
          <div className="relative w-full max-w-[340px] md:max-w-[360px] aspect-[9/19.5] bg-black rounded-[48px] p-3 shadow-[0_25px_60px_-15px_rgba(3,157,31,0.25)] border-4 border-slate-800">
            
            {/* Speaker & Sensor Notch (Dynamic Island) */}
            <div className="absolute top-5 left-1/2 -translate-x-1/2 w-28 h-6 bg-black rounded-full z-40 flex items-center justify-end px-3">
              <div className="w-2.5 h-2.5 rounded-full bg-indigo-950 border border-indigo-900 mr-2"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-slate-900"></div>
            </div>

            {/* Inner Screen Canvas */}
            <div className="relative w-full h-full bg-slate-900 rounded-[38px] overflow-hidden flex flex-col text-white font-sans">
              
              {/* Phone Status Bar */}
              <div className="h-10 pt-4 px-6 flex justify-between items-center text-[11px] font-bold tracking-tight text-white z-30">
                <span>16:25</span>
                <div className="flex items-center gap-1.5">
                  {/* Signal bars */}
                  <div className="flex items-end gap-[1.5px] h-2">
                    <div className="w-[2px] h-1 bg-white rounded-2xs"></div>
                    <div className="w-[2px] h-[5px] bg-white rounded-2xs"></div>
                    <div className="w-[2px] h-1.5 bg-white rounded-2xs"></div>
                    <div className="w-[2px] h-2 bg-white rounded-2xs"></div>
                  </div>
                  <span>5G</span>
                  {/* Battery icon */}
                  <div className="w-5 h-2.5 border border-white/70 rounded-xs p-[1px] flex items-center">
                    <div className="h-full w-[85%] bg-white rounded-2xs"></div>
                  </div>
                </div>
              </div>

              {/* Simulated Google Drive Header */}
              <div className="px-4 py-3 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-md bg-white/10 flex items-center justify-center text-[10px] font-black text-emerald-400">
                    GD
                  </div>
                  <span className="text-xs font-semibold tracking-wide text-slate-200">
                    365 Exp. Ciências...
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Search className="w-4 h-4 text-slate-400" />
                  <MoreVertical className="w-4 h-4 text-slate-400" />
                </div>
              </div>

              {/* Sub-Header Actions */}
              <div className="px-4 py-2.5 bg-slate-900/60 border-b border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                <div className="flex items-center gap-1">
                  <span className="font-semibold text-slate-300">Pasta Principal</span>
                  <span className="text-[9px]">▼</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1">Nome ↑</span>
                  <Grid className="w-3.5 h-3.5 text-slate-400" />
                </div>
              </div>

              {/* Interactive Phone Content Container */}
              <div className="flex-1 overflow-y-auto px-3.5 py-4 space-y-4 bg-slate-950 scrollbar-thin">
                
                <AnimatePresence mode="wait">
                  {activeTab === 'drive' ? (
                    // GOOGLE DRIVE DIRECTORY VIEW
                    <motion.div
                      key="drive-view"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="grid grid-cols-2 gap-3 pb-8"
                    >
                      {folders.map((folder) => (
                        <div
                          key={folder.id}
                          onClick={() => {
                            setActiveTab('preview');
                            setIsPlaying(true);
                          }}
                          className="bg-slate-900/70 hover:bg-slate-900 border border-slate-800/60 rounded-xl p-3 flex flex-col items-start gap-2.5 transition-all cursor-pointer group active:scale-95"
                        >
                          <div className="flex items-center justify-between w-full">
                            <div className="p-2 bg-slate-950/80 rounded-lg group-hover:bg-emerald-950/25 transition-colors">
                              <Folder className={`w-5 h-5 ${folder.color}`} />
                            </div>
                            <MoreVertical className="w-3.5 h-3.5 text-slate-500 hover:text-white" />
                          </div>
                          
                          <div className="text-left">
                            <p className="text-[10px] font-bold leading-tight text-slate-200 line-clamp-2">
                              {folder.name}
                            </p>
                            <span className="text-[8px] text-slate-500 font-medium block mt-1">
                              {folder.size}
                            </span>
                          </div>
                        </div>
                      ))}
                    </motion.div>
                  ) : (
                    // SLIDESHOW WALKTHROUGH/VIDEO SIMULATOR VIEW
                    <motion.div
                      key="preview-view"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex flex-col h-full justify-between gap-4 py-2"
                    >
                      {/* Active material visual mock */}
                      <div className="bg-slate-900/90 border border-emerald-900/50 rounded-2xl p-4 flex flex-col gap-3 flex-1 justify-center relative overflow-hidden">
                        
                        {/* Science background grids */}
                        <div className="absolute inset-0 bg-radial from-emerald-900/10 to-transparent opacity-50"></div>
                        
                        <div className="text-center relative z-10">
                          <span className="text-[54px] block animate-bounce duration-1000 mb-1">
                            {previewSlides[currentSlide].image}
                          </span>
                          <span className="inline-block px-2 py-0.5 bg-emerald-950 text-emerald-400 rounded-full text-[8px] font-extrabold uppercase tracking-widest border border-emerald-800">
                            {previewSlides[currentSlide].category}
                          </span>
                          <h4 className="text-xs md:text-sm font-black text-white mt-2 leading-tight">
                            {previewSlides[currentSlide].title}
                          </h4>
                          <p className="text-[9px] text-slate-400 mt-1.5 leading-relaxed font-medium px-2">
                            {previewSlides[currentSlide].description}
                          </p>
                        </div>

                        {/* Interactive Slide indicators */}
                        <div className="flex justify-center gap-1 mt-2">
                          {previewSlides.map((_, i) => (
                            <button
                              key={i}
                              onClick={() => setCurrentSlide(i)}
                              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${i === currentSlide ? 'bg-emerald-400 w-3' : 'bg-slate-700'}`}
                            ></button>
                          ))}
                        </div>
                      </div>

                      {/* Video-style progress bar and toggle back to directories */}
                      <div className="space-y-2">
                        <div className="h-1 bg-slate-800 rounded-full overflow-hidden">
                          <motion.div
                            animate={{ width: isPlaying ? "100%" : "35%" }}
                            transition={{ duration: isPlaying ? 3 : 0.5, repeat: isPlaying ? Infinity : 0, ease: "linear" }}
                            className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400"
                          ></motion.div>
                        </div>
                        <div className="flex items-center justify-between text-[10px] text-slate-400 px-1">
                          <button 
                            onClick={() => {
                              setActiveTab('drive');
                              setIsPlaying(false);
                            }}
                            className="font-bold text-emerald-400 hover:underline cursor-pointer"
                          >
                            ← Voltar ao Drive
                          </button>
                          <span>Demonstração de Arquivos</span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>

              {/* iPhone simulated Home indicator & footer menu */}
              <div className="h-14 bg-slate-900 border-t border-slate-800/80 px-6 flex justify-between items-center text-[9px] text-slate-400 relative">
                <div className="flex flex-col items-center gap-0.5 text-slate-500">
                  <span>🏠</span>
                  <span>Início</span>
                </div>
                <div className="flex flex-col items-center gap-0.5 text-slate-500">
                  <span>⭐</span>
                  <span>Com estrela</span>
                </div>
                <div className="flex flex-col items-center gap-0.5 text-slate-500">
                  <span>👥</span>
                  <span>Compartilhados</span>
                </div>
                <div className="flex flex-col items-center gap-0.5 text-emerald-400">
                  <span>📁</span>
                  <span>Arquivos</span>
                </div>
                {/* Home Indicator line */}
                <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-32 h-1 bg-white rounded-full opacity-60"></div>
              </div>

            </div>

            {/* Pulsing BIG GREEN Play Button Over the Device Frame */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
              <motion.button
                onClick={togglePlay}
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
                className="w-16 h-16 rounded-full bg-[#0fc900] text-white flex items-center justify-center shadow-2xl border-4 border-white cursor-pointer hover:bg-emerald-500 active:scale-90 transition-all group"
              >
                {isPlaying ? (
                  <Pause className="w-6 h-6 text-white fill-white" />
                ) : (
                  <Play className="w-6 h-6 text-white fill-white translate-x-0.5 animate-pulse" />
                )}
              </motion.button>
              
              {/* Play Hint */}
              {!isPlaying && (
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-slate-900/90 text-white text-[10px] font-black px-3 py-1 rounded-full border border-slate-800 shadow-lg pointer-events-none tracking-wider uppercase font-mono">
                  Clique para assistir
                </div>
              )}
            </div>

          </div>

          {/* Secure / Delivery Badge Guarantee */}
          <div className="mt-8 flex flex-wrap justify-center gap-5 items-center text-xs text-slate-500 font-medium bg-white px-6 py-3 rounded-full border border-slate-100 shadow-xs">
            <span className="flex items-center gap-1.5 text-emerald-600 font-bold">
              <ShieldCheck className="w-4 h-4" />
              Acesso 100% Seguro
            </span>
            <span className="text-slate-300">|</span>
            <span className="flex items-center gap-1.5 text-slate-600 font-bold">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              Suporte WhatsApp
            </span>
            <span className="text-slate-300">|</span>
            <span className="text-slate-600 font-bold">Liberação Imediata</span>
          </div>

        </div>

      </div>

      {/* Transition block styled with our deep green palette */}
      <div className="relative bg-gradient-to-br from-[#039D1F] to-[#028018] text-white py-16 md:py-20 mt-20 overflow-hidden shadow-inner">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 w-28 h-28 border border-white rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 right-12 w-36 h-36 border-2 border-white/40 rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h3 className="text-xl md:text-3xl font-black tracking-wide text-white font-display">
              Pronto para transformar suas aulas?
            </h3>
            
            <p className="text-base md:text-lg max-w-2xl mx-auto text-emerald-50 font-medium leading-relaxed">
              Adquira hoje com desconto exclusivo e tenha em mãos o maior acervo prático do Brasil.
            </p>

            {/* Pulsing CTA button */}
            <div className="pt-4 flex justify-center w-full">
              <motion.button
                onClick={onCtaClick}
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                className="inline-flex items-center gap-2.5 px-8 py-4.5 bg-[#0fc900] text-white font-black rounded-2xl text-sm md:text-base tracking-wider uppercase shadow-xl hover:bg-[#0ebd00] transition-all duration-300 cursor-pointer hover:shadow-2xl active:scale-95 font-display"
              >
                QUERO COMEÇAR AGORA
                <ArrowRight className="w-5 h-5 text-white" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
