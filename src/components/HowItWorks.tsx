import { motion } from 'framer-motion'
import { Search, Cpu, TrendingUp } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Análisis de Procesos',
    description:
      'Mapeamos tus flujos de trabajo actuales e identificamos los puntos exactos donde la IA puede generar mayor impacto y ahorro medible.',
  },
  {
    number: '02',
    icon: Cpu,
    title: 'Implementación Precisa',
    description:
      'Desplegamos soluciones personalizadas integradas con tus sistemas existentes. Sin interrupciones, con resultados visibles desde la primera semana.',
  },
  {
    number: '03',
    icon: TrendingUp,
    title: 'Optimización Continua',
    description:
      'Monitorizamos, ajustamos y escalamos cada solución para que el rendimiento mejore de forma autónoma mes a mes.',
  },
]

export function HowItWorks() {
  return (
    <section id="como-funciona" className="py-28 bg-navy-900 relative overflow-hidden">
      {/* Grid bg */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,212,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.04) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      {/* Glow left */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-electric/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-electric mb-4">
            Metodología
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight tracking-tight">
            Resultados en{' '}
            <span className="text-electric">tres fases</span>
          </h2>
          <p className="mt-6 text-lg text-slate-400 font-light">
            Un proceso estructurado que garantiza ROI desde el primer mes.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {/* Connector line desktop */}
          <div
            className="hidden md:block absolute top-[4.5rem] left-[calc(16.6%+2rem)] right-[calc(16.6%+2rem)] h-px"
            style={{
              background: 'linear-gradient(90deg, rgba(0,212,255,0.1), rgba(0,212,255,0.4), rgba(0,212,255,0.1))',
            }}
          />

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative flex flex-col items-center text-center p-8 rounded-2xl border border-white/5 bg-white/2 hover:border-electric/20 hover:bg-white/3 transition-all duration-500"
            >
              {/* Giant number */}
              <div
                className="text-8xl font-black leading-none mb-2 select-none"
                style={{ color: 'rgba(0,212,255,0.08)' }}
              >
                {step.number}
              </div>

              {/* Icon */}
              <div className="relative -mt-8 mb-6 w-14 h-14 rounded-2xl bg-navy-800 border border-electric/20 flex items-center justify-center shadow-[0_0_20px_rgba(0,212,255,0.1)]">
                <step.icon className="w-6 h-6 text-electric" />
              </div>

              <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
              <p className="text-slate-400 font-light leading-relaxed text-sm">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
