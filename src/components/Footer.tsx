import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="footer" className="bg-slate-950 text-slate-500 py-10 border-t border-slate-900">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
        <div className="text-center sm:text-left">
          <p>© 2026 365 Experimentos de Ciências. Todos os direitos reservados.</p>
        </div>
        
        <button
          onClick={scrollToTop}
          className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors uppercase font-bold tracking-wider text-[10px] bg-slate-900 hover:bg-slate-850 px-3 py-1.5 rounded-full cursor-pointer"
        >
          Voltar ao topo <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
}
