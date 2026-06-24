import { Star, CheckCircle, Flame } from 'lucide-react';

export default function StatsBar() {
  return (
    <div id="stats-section" className="bg-[#039D1F] border-y border-emerald-600/20 py-10 md:py-12 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          
          <div id="stat-recursos" className="flex flex-col items-center justify-center space-y-1">
            <span className="text-4xl md:text-5xl font-extrabold text-white font-display tracking-tight flex items-center">
              +365
            </span>
            <span className="text-xs md:text-sm font-bold text-emerald-100 tracking-wider uppercase">
              Experimentos Prontos
            </span>
          </div>

          <div id="stat-professores" className="flex flex-col items-center justify-center space-y-1 border-y md:border-y-0 md:border-x border-white/20 py-6 md:py-0">
            <span className="text-4xl md:text-5xl font-extrabold text-white font-display tracking-tight flex items-center">
              +1.200
            </span>
            <span className="text-xs md:text-sm font-bold text-emerald-100 tracking-wider uppercase">
              Professores Ativos
            </span>
          </div>

          <div id="stat-avaliacao" className="flex flex-col items-center justify-center space-y-1">
            <span className="text-4xl md:text-5xl font-extrabold text-white font-display tracking-tight flex items-center gap-1">
              4,9
              <Star className="w-8 h-8 fill-amber-400 text-amber-400 inline-block align-middle" />
            </span>
            <span className="text-xs md:text-sm font-bold text-emerald-100 tracking-wider uppercase">
              Avaliação Média
            </span>
          </div>

        </div>
      </div>
    </div>
  );
}
