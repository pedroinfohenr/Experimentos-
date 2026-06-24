import { Star, CheckCircle } from 'lucide-react';
import { testimonials } from '../data';
import { motion } from 'motion/react';

export default function TestimonialsSection() {
  return (
    <section id="depoimentos" className="py-20 bg-[#0bae04] border-y border-[#215d01]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs md:text-sm font-extrabold text-[#061c01] uppercase tracking-widest block mb-3 font-mono">
            — QUEM JÁ USA, RECOMENDA
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight font-display leading-tight">
            +12 mil professores{' '}
            <span className="text-[#024402] relative inline-block">
              transformaram
              <span className="absolute left-0 bottom-1 w-full h-1 bg-green-400/20 rounded-full"></span>
            </span>{' '}
            suas aulas
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((test, idx) => (
            <motion.div
              key={test.id}
              id={`testimonial-card-${idx}`}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm flex flex-col justify-between space-y-6 hover:shadow-md transition-shadow"
            >
              <div className="space-y-4">
                {/* 5 Stars */}
                <div className="flex gap-1">
                  {[...Array(test.stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-sm md:text-base text-slate-600 italic leading-relaxed">
                  "{test.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3 border-t border-slate-50 pt-4">
                <img
                  src={test.avatar}
                  alt={test.name}
                  className="w-11 h-11 rounded-full object-cover border border-brand-green/20"
                  referrerPolicy="no-referrer"
                />
                <div className="text-left">
                  <h4 className="text-sm font-bold text-slate-800 flex items-center gap-1">
                    {test.name}
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-500 fill-emerald-50" />
                  </h4>
                  <p className="text-[11px] text-slate-400 font-medium">
                    {test.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
