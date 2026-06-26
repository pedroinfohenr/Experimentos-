import { ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

// Import images as ES modules so Vite compiles and resolves them correctly
import imagePressao from '../assets/images/pressao_card_1.png';
import imageSentidos from '../assets/images/sentidos_card_5_termocepcao.png';
import imagePoluicao from '../assets/images/poluicao_card_1.png';
import imageCirculatorio from '../assets/images/circulatorio_card_1_bombacoracao.png';
import imageCardAr from '../assets/images/card_ar_6.png';

interface MaterialPreviewProps {
  onCtaClick?: () => void;
}

export default function MaterialPreview({ onCtaClick }: MaterialPreviewProps) {
  const premiumMaterials = [
    {
      title: "A Água que não Cai",
      description: "Experimento lúdico de pressão atmosférica que desafia a gravidade e fascina os alunos.",
      image: imagePressao
    },
    {
      title: "Água Confusa (Termocepção)",
      description: "Investigação prática sobre percepção térmica relativa e como nossos sentidos funcionam.",
      image: imageSentidos
    },
    {
      title: "Chuva Ácida na Prática",
      description: "Atividade demonstrativa mostrando o efeito do vinagre (ácido) no giz escolar.",
      image: imagePoluicao
    },
    {
      title: "Bomba Cardíaca Caseira",
      description: "Construção de modelo prático para entender o bombeamento muscular do coração.",
      image: imageCirculatorio
    },
    {
      title: "A Fonte na Garrafa!",
      description: "Experimento de pressão do ar demonstrando como forças empurram a água para fora.",
      image: imageCardAr
    }
  ];

  // Triplicating to ensure seamless infinite looping on wider screens
  const duplicatedMaterials = [...premiumMaterials, ...premiumMaterials, ...premiumMaterials];

  return (
    <section id="demonstracao" className="py-10 md:py-20 bg-slate-50 border-b border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14 px-8">
          <span className="text-xs md:text-sm font-extrabold text-[#039D1F] uppercase tracking-widest block mb-2 md:mb-3 font-mono">
            — PRÉVIA DOS MATERIAIS
          </span>
          <h2 className="text-2xl xs:text-3xl md:text-4xl lg:text-5xl font-black text-[#07b407] tracking-tight font-display leading-tight">
            Veja uma prévia do que você vai receber
          </h2>
          <p className="mt-2 md:mt-3 text-slate-500 text-xs sm:text-sm md:text-base font-medium max-w-xl mx-auto">
            Abra os arquivos prontos, imprima e aplique em minutos. Nossos roteiros e recursos são totalmente ilustrados e alinhados à BNCC.
          </p>
        </div>

        {/* Centerpiece Container with Infinite Auto-scrolling Carousel */}
        <div className="flex flex-col items-center justify-center relative select-none">
          
          {/* Main Carrossel Container */}
          <div className="relative w-full overflow-hidden py-4 md:py-6">
            
            {/* Soft faded edges overlay to make the carousel transition beautifully on the margins */}
            <div className="absolute left-0 top-0 bottom-0 w-12 md:w-20 bg-gradient-to-r from-slate-50 via-slate-50/80 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-12 md:w-20 bg-gradient-to-l from-slate-50 via-slate-50/80 to-transparent z-10 pointer-events-none"></div>

            {/* Seamless Infinite Marquee Track */}
            <div className="w-full overflow-hidden">
              <motion.div
                className="flex gap-4 md:gap-6 w-max"
                animate={{ x: ["0%", "-33.333%"] }}
                transition={{
                  ease: "linear",
                  duration: 35,
                  repeat: Infinity,
                }}
              >
                {duplicatedMaterials.map((material, idx) => (
                  <div
                    key={idx}
                    className="w-[230px] xs:w-[260px] md:w-[380px] aspect-[3/4] flex-shrink-0 bg-white rounded-3xl overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.08)] border border-slate-100 hover:shadow-[0_20px_50px_rgba(3,157,31,0.15)] transition-all duration-300 transform hover:-translate-y-1.5 hover:border-[#07b407]/30"
                  >
                    <img
                      src={material.image}
                      alt={material.title}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ))}
              </motion.div>
            </div>

          </div>

          {/* Secure / Delivery Badge Guarantee */}
          <div className="mt-6 md:mt-8 mx-4 md:mx-6 flex flex-wrap justify-center gap-3 md:gap-5 items-center text-[10px] md:text-xs text-slate-500 font-medium bg-white px-4 md:px-6 py-2 md:py-3 rounded-full border border-slate-100 shadow-sm">
            <span className="flex items-center gap-1.5 text-emerald-600 font-bold">
              <ShieldCheck className="w-3.5 h-3.5 md:w-4 md:h-4" />
              Acesso 100% Seguro
            </span>
            <span className="text-slate-300 hidden xs:inline">|</span>
            <span className="flex items-center gap-1.5 text-slate-600 font-bold">
              <CheckCircle2 className="w-3.5 h-3.5 md:w-4 md:h-4 text-emerald-500" />
              Suporte WhatsApp
            </span>
            <span className="text-slate-300 hidden xs:inline">|</span>
            <span className="text-slate-600 font-bold">Liberação Imediata</span>
          </div>

        </div>

      </div>

      {/* Transition block styled with our deep green palette */}
      <div className="relative bg-gradient-to-br from-[#039D1F] to-[#028018] text-white py-12 md:py-20 mt-14 md:mt-20 overflow-hidden shadow-inner">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 w-28 h-28 border border-white rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 right-12 w-36 h-36 border-2 border-white/40 rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto px-8 text-center relative z-10 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4 md:space-y-6"
          >
            <h3 className="text-lg xs:text-xl md:text-3xl font-black tracking-wide text-white font-display">
              Pronto para transformar suas aulas?
            </h3>
            
            <p className="text-xs sm:text-sm md:text-lg max-w-2xl mx-auto text-emerald-50 font-medium leading-relaxed">
              Adquira hoje com desconto exclusivo e tenha em mãos o maior acervo prático do Brasil.
            </p>

            {/* Pulsing CTA button */}
            <div className="pt-2 md:pt-4 flex justify-center w-full">
              <motion.button
                onClick={onCtaClick}
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                className="inline-flex items-center gap-2 px-6 py-3.5 md:px-8 md:py-4.5 bg-[#0fc900] text-white font-black rounded-2xl text-xs md:text-base tracking-wider uppercase shadow-xl hover:bg-[#0ebd00] transition-all duration-300 cursor-pointer hover:shadow-2xl active:scale-95 font-display"
              >
                QUERO COMEÇAR AGORA
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-white" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
