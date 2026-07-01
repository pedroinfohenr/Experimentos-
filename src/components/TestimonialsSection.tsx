import { useState } from 'react';
import { Star, CheckCircle, MessageSquare, ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials } from '../data';
import { motion, AnimatePresence } from 'motion/react';
import whatsappTestimonial1 from '../assets/images/IMG_9820.PNG';
import whatsappTestimonial2 from '../assets/images/IMG_9822.PNG';

export default function TestimonialsSection() {
  const [activeTab, setActiveTab] = useState<number>(0); // 0: WhatsApp Chats, 1: Text Testimonials
  const [waIndex, setWaIndex] = useState<number>(0); // Active WhatsApp slide
  const [textIndex, setTextIndex] = useState<number>(0); // Active text testimonial slide

  // WhatsApp images array
  const whatsappImages = [
    {
      img: whatsappTestimonial1,
      alt: "Conversa Real WhatsApp - Amanda",
      name: "Amanda (Professora)"
    },
    {
      img: whatsappTestimonial2,
      alt: "Conversa Real WhatsApp - Ricardo",
      name: "Ricardo (Professor)"
    }
  ];

  const handleNextWa = () => {
    setWaIndex((prev) => (prev + 1) % whatsappImages.length);
  };

  const handlePrevWa = () => {
    setWaIndex((prev) => (prev - 1 + whatsappImages.length) % whatsappImages.length);
  };

  const handleNextText = () => {
    setTextIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrevText = () => {
    setTextIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="depoimentos" className="py-12 md:py-20 bg-[#0bae04] border-y border-[#215d01] relative overflow-hidden">
      {/* Subtle green ambient light bubbles */}
      <div className="absolute top-0 left-10 w-72 h-72 bg-emerald-400/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-10 w-72 h-72 bg-green-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
          <span className="text-[10px] md:text-xs font-extrabold text-[#061c01] uppercase tracking-widest bg-white/10 px-3.5 py-1.5 rounded-full inline-block mb-3.5 font-mono">
            — QUEM JÁ USA, RECOMENDA
          </span>
          <h2 className="text-2xl xs:text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight font-display leading-tight">
            +12 mil professores{' '}
            <span className="text-[#033b03] relative inline-block">
              transformaram
              <span className="absolute left-0 bottom-1.5 w-full h-1 bg-green-300/40 rounded-full"></span>
            </span>{' '}
            suas aulas
          </h2>
          <p className="mt-3 text-emerald-100 font-medium text-xs sm:text-sm md:text-base max-w-xl mx-auto">
            Veja as mensagens enviadas por professores no WhatsApp e confira o carrossel de depoimentos do nosso portal.
          </p>
        </div>

        {/* Tab Selector Segment Control */}
        <div className="flex justify-center mb-8 md:mb-12">
          <div className="bg-[#035102]/60 p-1 rounded-2xl flex items-center gap-1 border border-white/5 shadow-inner">
            <button
              onClick={() => setActiveTab(0)}
              className={`flex items-center gap-2 px-4 py-2.5 md:px-6 md:py-3 rounded-xl font-bold text-xs md:text-sm transition-all duration-300 cursor-pointer ${
                activeTab === 0 
                  ? 'bg-white text-[#0bae04] shadow-md' 
                  : 'text-white hover:bg-white/10'
              }`}
            >
              <MessageSquare className="w-4 h-4" />
              Prints do WhatsApp
            </button>
            <button
              onClick={() => setActiveTab(1)}
              className={`flex items-center gap-2 px-4 py-2.5 md:px-6 md:py-3 rounded-xl font-bold text-xs md:text-sm transition-all duration-300 cursor-pointer ${
                activeTab === 1 
                  ? 'bg-white text-[#0bae04] shadow-md' 
                  : 'text-white hover:bg-white/10'
              }`}
            >
              <Star className="w-4 h-4 fill-current" />
              Avaliações Detalhadas
            </button>
          </div>
        </div>

        {/* Interactive Carousels Container */}
        <div className="min-h-[480px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            {activeTab === 0 ? (
              <motion.div
                key="whatsapp-tab"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                className="w-full max-w-lg mx-auto flex flex-col items-center"
              >
                {/* Carousel Container */}
                <div className="relative w-full flex items-center justify-center px-4">
                  
                  {/* Left Navigation Arrow */}
                  <button
                    onClick={handlePrevWa}
                    className="absolute left-[-20px] md:left-[-50px] z-20 w-10 h-10 md:w-12 md:h-12 bg-white/25 hover:bg-white/40 active:scale-95 text-white rounded-full flex items-center justify-center transition-all cursor-pointer backdrop-blur-xs border border-white/10 shadow-lg"
                    aria-label="Anterior"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>

                  {/* Active Slide Image */}
                  <div className="w-full max-w-[340px] bg-slate-950 rounded-[32px] p-2.5 shadow-2xl border-4 border-slate-800/90 overflow-hidden relative">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={waIndex}
                        initial={{ opacity: 0, x: 25 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -25 }}
                        transition={{ duration: 0.25 }}
                        className="w-full h-auto"
                      >
                        <img
                          src={whatsappImages[waIndex].img}
                          alt={whatsappImages[waIndex].alt}
                          className="w-full h-auto rounded-[22px] shadow-inner select-none"
                          referrerPolicy="no-referrer"
                        />
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Right Navigation Arrow */}
                  <button
                    onClick={handleNextWa}
                    className="absolute right-[-20px] md:right-[-50px] z-20 w-10 h-10 md:w-12 md:h-12 bg-white/25 hover:bg-white/40 active:scale-95 text-white rounded-full flex items-center justify-center transition-all cursor-pointer backdrop-blur-xs border border-white/10 shadow-lg"
                    aria-label="Próximo"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>

                {/* Subtitle / Description of current feedback */}
                <div className="text-center mt-5 text-white font-bold text-xs md:text-sm bg-[#035102]/30 px-4 py-1.5 rounded-full">
                  Feedback de {whatsappImages[waIndex].name}
                </div>

                {/* Carousel Pagination Dots */}
                <div className="flex gap-2 mt-4">
                  {whatsappImages.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setWaIndex(idx)}
                      className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                        waIndex === idx 
                          ? 'bg-white scale-125' 
                          : 'bg-white/40 hover:bg-white/60'
                      }`}
                      aria-label={`Ir para slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="text-testimonials-tab"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                className="w-full max-w-2xl mx-auto flex flex-col items-center"
              >
                {/* Carousel Container */}
                <div className="relative w-full flex items-center justify-center px-4">
                  
                  {/* Left Navigation Arrow */}
                  <button
                    onClick={handlePrevText}
                    className="absolute left-[-20px] md:left-[-60px] z-20 w-10 h-10 md:w-12 md:h-12 bg-white/25 hover:bg-white/40 active:scale-95 text-white rounded-full flex items-center justify-center transition-all cursor-pointer backdrop-blur-xs border border-white/10 shadow-lg"
                    aria-label="Anterior"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>

                  {/* Active Slide Card */}
                  <div className="w-full min-h-[250px] md:min-h-[230px] flex items-stretch">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={textIndex}
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -30 }}
                        transition={{ duration: 0.25 }}
                        className="w-full bg-white border border-slate-100 rounded-[32px] p-6 md:p-10 shadow-xl flex flex-col justify-between space-y-6 hover:shadow-2xl transition-shadow duration-300"
                      >
                        <div className="space-y-4">
                          {/* 5 Stars */}
                          <div className="flex gap-1 justify-start">
                            {[...Array(testimonials[textIndex].stars)].map((_, i) => (
                              <Star key={i} className="w-4.5 h-4.5 fill-amber-400 text-amber-400" />
                            ))}
                          </div>

                          {/* Quote */}
                          <p className="text-base md:text-lg text-slate-700 italic leading-relaxed text-left font-medium">
                            "{testimonials[textIndex].quote}"
                          </p>
                        </div>

                        {/* Author Info */}
                        <div className="flex items-center gap-3 border-t border-slate-100 pt-5">
                          <img
                            src={testimonials[textIndex].avatar}
                            alt={testimonials[textIndex].name}
                            className="w-12 h-12 rounded-full object-cover border-2 border-[#0bae04]/30"
                            referrerPolicy="no-referrer"
                          />
                          <div className="text-left">
                            <h4 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-1">
                              {testimonials[textIndex].name}
                              <CheckCircle className="w-4 h-4 text-emerald-500 fill-emerald-50" />
                            </h4>
                            <p className="text-xs text-slate-400 font-medium">
                              {testimonials[textIndex].role}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Right Navigation Arrow */}
                  <button
                    onClick={handleNextText}
                    className="absolute right-[-20px] md:right-[-60px] z-20 w-10 h-10 md:w-12 md:h-12 bg-white/25 hover:bg-white/40 active:scale-95 text-white rounded-full flex items-center justify-center transition-all cursor-pointer backdrop-blur-xs border border-white/10 shadow-lg"
                    aria-label="Próximo"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>

                {/* Carousel Pagination Dots */}
                <div className="flex gap-2 mt-8">
                  {testimonials.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setTextIndex(idx)}
                      className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                        textIndex === idx 
                          ? 'bg-white scale-125' 
                          : 'bg-white/40 hover:bg-white/60'
                      }`}
                      aria-label={`Ir para slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
