import { motion } from 'motion/react';
import { ArrowRight, Check } from 'lucide-react';

export default function BonusesSection() {
  const bonuses = [
    {
      id: 'b1',
      title: '30 Aulas Prontas',
      description: 'Um mês inteiro de aulas já estruturadas utilizando os experimentos da biblioteca, prontas para aplicar em sala.',
      illustration: (
        <svg className="w-16 h-16" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Blackboard / Lesson backdrop */}
          <rect x="20" y="22" width="80" height="58" rx="8" fill="#1E293B" stroke="#475569" strokeWidth="2.5" />
          <rect x="25" y="27" width="70" height="48" rx="4" fill="#064E3B" /> {/* Dark Green chalkboard */}
          
          {/* chalk text lines */}
          <rect x="34" y="36" width="30" height="3" rx="1.5" fill="#A7F3D0" />
          <rect x="34" y="44" width="48" height="2.5" rx="1.25" fill="#FFFFFF" opacity="0.8" />
          <rect x="34" y="51" width="40" height="2.5" rx="1.25" fill="#FFFFFF" opacity="0.8" />
          
          {/* Chalk drawing of atom */}
          <circle cx="82" cy="42" r="6" stroke="#FBBF24" strokeWidth="1.5" strokeDasharray="2 2" />
          <circle cx="82" cy="42" r="2" fill="#FBBF24" />

          {/* Wooden Easel stand */}
          <path d="M40 80L32 102" stroke="#94A3B8" strokeWidth="3" strokeLinecap="round" />
          <path d="M80 80L88 102" stroke="#94A3B8" strokeWidth="3" strokeLinecap="round" />
          <path d="M60 80V105" stroke="#64748B" strokeWidth="3" strokeLinecap="round" />
          <rect x="14" y="78" width="92" height="4" rx="2" fill="#F59E0B" /> {/* chalk ledge */}
          <rect x="38" y="74" width="8" height="3" rx="1" fill="#FFFFFF" /> {/* piece of chalk */}
        </svg>
      )
    },
    {
      id: 'b2',
      title: '50 Atividades Prontas para Imprimir',
      description: 'Atividades e exercícios alinhados aos experimentos para reforçar o aprendizado de forma prática e divertida.',
      illustration: (
        <svg className="w-16 h-16" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Stacked printable sheets in back */}
          <rect x="34" y="16" width="60" height="80" rx="6" fill="#F1F5F9" stroke="#CBD5E1" strokeWidth="2" transform="rotate(-6 64 56)" />
          <rect x="32" y="18" width="60" height="80" rx="6" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="2" transform="rotate(-2 62 58)" />
          {/* Primary front paper */}
          <g className="shadow-xs">
            <rect x="26" y="22" width="68" height="84" rx="6" fill="#FFFFFF" stroke="#10B981" strokeWidth="2.5" />
            
            {/* Header / Badge on sheet */}
            <rect x="36" y="32" width="22" height="8" rx="2" fill="#D1FAE5" />
            <rect x="40" y="35" width="14" height="2" rx="1" fill="#10B981" />
            
            {/* Printable Scissors icon indicator */}
            <path d="M72 34 L82 34" stroke="#D1D5DB" strokeWidth="1" strokeDasharray="2 2" />
            
            {/* Circle drawing / Science graphic on page */}
            <circle cx="74" cy="54" r="10" fill="#ECFDF5" stroke="#34D399" strokeWidth="1.5" />
            <path d="M71 54L73 56L77 52" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />

            {/* Simulated text lines */}
            <rect x="36" y="50" width="26" height="3" rx="1.5" fill="#E2E8F0" />
            <rect x="36" y="58" width="48" height="3" rx="1.5" fill="#E2E8F0" />
            <rect x="36" y="66" width="48" height="3" rx="1.5" fill="#E2E8F0" />
            <rect x="36" y="74" width="34" height="3" rx="1.5" fill="#E2E8F0" />

            {/* Print symbol badge */}
            <rect x="36" y="84" width="48" height="12" rx="4" fill="#10B981" />
            <rect x="44" y="88" width="32" height="4" rx="2" fill="#FFFFFF" />
          </g>
        </svg>
      )
    },
    {
      id: 'b3',
      title: '100 Avaliações de Ciências Prontas',
      description: 'Avaliações prontas baseadas nos temas e experimentos, com aplicação simples e imediata.',
      illustration: (
        <svg className="w-16 h-16" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Exam document */}
          <rect x="25" y="16" width="70" height="90" rx="8" fill="#FFFFFF" stroke="#3B82F6" strokeWidth="2.5" className="shadow-xs" />
          
          {/* Exam Header */}
          <rect x="36" y="28" width="48" height="5" rx="2.5" fill="#3B82F6" />
          <rect x="36" y="37" width="24" height="3" rx="1.5" fill="#93C5FD" />
          
          {/* "Nota 10" or "A+" badge on top-right */}
          <circle cx="80" cy="38" r="12" fill="#FEF2F2" stroke="#EF4444" strokeWidth="1.5" />
          <text x="80" y="42" fill="#EF4444" fontSize="11" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">10</text>

          {/* Test Questions & Options */}
          <rect x="36" y="50" width="35" height="3" rx="1.5" fill="#E2E8F0" />
          {/* Question 1 Option list with check */}
          <circle cx="39" cy="62" r="3" fill="#3B82F6" />
          <rect x="47" y="61" width="30" height="2" fill="#94A3B8" />
          
          <circle cx="39" cy="70" r="3" stroke="#94A3B8" strokeWidth="1" />
          <rect x="47" y="69" width="22" height="2" fill="#CBD5E1" />

          {/* Question 2 */}
          <rect x="36" y="80" width="40" height="3" rx="1.5" fill="#E2E8F0" />
          <circle cx="39" cy="91" r="3" stroke="#94A3B8" strokeWidth="1" />
          <rect x="47" y="90" width="26" height="2" fill="#CBD5E1" />
        </svg>
      )
    },
    {
      id: 'b4',
      title: 'Guia de Planejamento de Ciências',
      description: 'Um guia prático para organizar suas aulas e aproveitar os experimentos ao longo de todo o ano letivo.',
      illustration: (
        <svg className="w-16 h-16" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g transform="translate(5, 0)">
            {/* Planner Notebook Back shadow */}
            <rect x="28" y="20" width="62" height="80" rx="8" fill="#047857" opacity="0.1" />
            {/* Planner cover */}
            <rect x="24" y="16" width="62" height="80" rx="8" fill="#10B981" stroke="#047857" strokeWidth="2.5" />
            
            {/* White elegant label on cover */}
            <rect x="36" y="32" width="38" height="44" rx="4" fill="#FFFFFF" />
            
            {/* Calendar grid/schedule lines inside label */}
            <rect x="42" y="40" width="26" height="4" rx="2" fill="#34D399" />
            <rect x="42" y="50" width="22" height="3" rx="1.5" fill="#E2E8F0" />
            <rect x="42" y="57" width="24" height="3" rx="1.5" fill="#E2E8F0" />
            <rect x="42" y="64" width="16" height="3" rx="1.5" fill="#E2E8F0" />

            {/* Tiny science atom symbol in corner of label */}
            <circle cx="64" cy="65" r="4" stroke="#10B981" strokeWidth="1" />

            {/* Notebook Spiral Rings */}
            <g transform="translate(18, 16)">
              {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
                <path
                  key={i}
                  d={`M0 ${10 + i * 9} C3 ${10 + i * 9} 7 ${8 + i * 9} 7 ${10 + i * 9} C7 ${12 + i * 9} 3 ${12 + i * 9} 0 ${12 + i * 9}`}
                  fill="none"
                  stroke="#94A3B8"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              ))}
            </g>
          </g>

          {/* Pencil */}
          <g transform="translate(94, 46) rotate(35)">
            <rect x="0" y="0" width="6" height="38" rx="1" fill="#FBBF24" />
            <polygon points="0,0 3,-6 6,0" fill="#FDBA74" />
            <polygon points="2,-4 3,-6 4,-4" fill="#1E293B" />
            <rect x="0" y="34" width="6" height="4" fill="#FDA4AF" />
          </g>
        </svg>
      )
    }
  ];

  return (
    <section id="bonuses-section" className="py-20 bg-slate-50/50 border-y border-slate-100">
      <div className="max-w-4xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 text-blue-600 border border-blue-100 text-[10px] md:text-xs font-black rounded-full mb-3 uppercase tracking-wider">
            <span className="text-xs">🎁</span>
            <span>BÔNUS EXCLUSIVOS</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-slate-800 tracking-tight font-display">
            E tem mais! Leve também:
          </h2>
        </div>

        {/* Bonuses Vertical Stack matching screenshot perfectly */}
        <div className="space-y-4 md:space-y-5">
          {bonuses.map((bonus, idx) => (
            <motion.div
              key={bonus.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.4 }}
              className="bg-white border border-slate-200/60 rounded-2xl p-5 md:p-6 shadow-xs flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-5 md:gap-6 hover:shadow-md transition-all duration-300"
            >
              {/* Illustration Thumbnail Box */}
              <div className="w-24 h-24 md:w-28 md:h-28 shrink-0 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center p-2 relative overflow-hidden">
                {bonus.illustration}
              </div>

              {/* Title & Description Text Block */}
              <div className="flex-1 space-y-1.5">
                <h3 className="text-base md:text-lg font-black text-slate-800 leading-snug font-display">
                  {bonus.title}
                </h3>
                <p className="text-xs md:text-sm text-slate-500 leading-relaxed font-medium">
                  {bonus.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Highlighted Value Banner matching color palette and design */}
        <div className="mt-10 md:mt-12">
          <div className="bg-[#038f09] rounded-2xl p-6 md:p-8 text-center text-white font-sans relative overflow-hidden shadow-xl shadow-emerald-950/10">
            {/* Background glowing circle decorator */}
            <div className="absolute -top-12 -right-12 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
            
            <div className="relative z-10 space-y-2">
              <span className="text-[10px] md:text-xs font-black tracking-widest text-emerald-100 uppercase block font-mono">
                VALOR TOTAL DOS BÔNUS
              </span>
              <span className="text-2xl md:text-3xl font-extrabold text-white/50 line-through tracking-tight block">
                R$ 205,00
              </span>
              <div className="text-lg md:text-xl font-bold tracking-tight text-white flex flex-wrap items-center justify-center gap-1.5">
                <span>Inclusos</span>
                <span className="bg-white text-[#038f09] px-2.5 py-1 rounded-lg font-black text-xs md:text-sm shadow-xs uppercase tracking-wider">
                  GRÁTIS
                </span>
                <span>no Pacote Completo!</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
