import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { ShieldCheck, Clock, Zap } from 'lucide-react'

const trust = [
  { icon: Clock, text: 'Consulta de 30 min sin compromiso' },
  { icon: ShieldCheck, text: 'Sin contratos de permanencia' },
  { icon: Zap, text: 'Resultados visibles en 2 semanas' },
]

export function LeadCapture() {
  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).Tally) {
      (window as any).Tally.loadEmbeds()
    }
  }, [])

  return (
    <section id="contacto" className="py-28 bg-navy-900 relative overflow-hidden">
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,212,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.05) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />
      {/* Glow */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[600px] h-[300px] bg-electric/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-electric mb-4">
            Solicita tu Auditoría
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight tracking-tight">
            Descubre cuánto puede ahorrar
            <br />
            <span className="text-electric">tu empresa este mes</span>
          </h2>
          <p className="mt-6 text-lg text-slate-400 font-light max-w-2xl mx-auto">
            En 30 minutos analizamos tus procesos y te presentamos un plan de automatización
            con ROI estimado. Personalizado. Sin compromiso.
          </p>
        </div>

        {/* Trust signals */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-14">
          {trust.map((t, i) => (
            <div key={i} className="flex items-center gap-2.5 text-sm text-slate-400">
              <t.icon className="w-4 h-4 text-electric flex-shrink-0" />
              <span>{t.text}</span>
            </div>
          ))}
        </div>

        {/* Tally form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden"
        >
          <iframe
            data-tally-src="https://tally.so/embed/NpbNJl?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
            loading="lazy"
            width="100%"
            height={553}
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            title="Solicitud de Auditoría - ZYNTRIA"
          />
        </motion.div>

        <p className="text-center text-xs text-slate-600 mt-6">
          Tus datos están protegidos conforme al RGPD. Sin spam, sin permanencia.
        </p>
      </div>
    </section>
  )
}
