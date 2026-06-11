import { motion } from 'framer-motion'
import { Calendar, ShieldCheck, Clock, ArrowRight } from 'lucide-react'

const trust = [
  { icon: Clock, text: 'Consulta de 30 min sin compromiso' },
  { icon: ShieldCheck, text: 'Sin contratos de permanencia' },
  { icon: Calendar, text: 'Resultados visibles en 2 semanas' },
]

export function LeadCapture() {
  return (
    <section id="contacto" className="py-28 bg-slate-50">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-electric mb-4">
            Reserva tu Consulta
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-navy-800 leading-tight tracking-tight">
            Descubre cuánto puede ahorrar
            <br />
            <span className="text-electric">tu empresa este mes</span>
          </h2>
          <p className="mt-6 text-lg text-slate-500 font-light max-w-2xl mx-auto">
            En 30 minutos analizamos tus procesos y te presentamos un plan de automatización
            con ROI estimado. Personalizado. Sin compromiso.
          </p>
        </div>

        {/* Trust signals */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-14">
          {trust.map((t, i) => (
            <div key={i} className="flex items-center gap-2.5 text-sm text-slate-600">
              <t.icon className="w-4 h-4 text-electric flex-shrink-0" />
              <span>{t.text}</span>
            </div>
          ))}
        </div>

        {/* Tally iframe container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.07)]"
        >
          {/*
            ─────────────────────────────────────────────────────────
            INSTRUCCIONES: Sustituye el div de abajo por tu iframe de Tally:

            <iframe
              src="https://tally.so/r/TU-FORM-ID"
              width="100%"
              height="600"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              title="Reserva tu consulta con Zyntria"
            />

            Ajusta height según la longitud de tu formulario.
            ─────────────────────────────────────────────────────────
          */}
          <div className="w-full h-[560px] flex flex-col items-center justify-center bg-white gap-4">
            <div className="w-14 h-14 rounded-2xl bg-navy-900 flex items-center justify-center">
              <Calendar className="w-6 h-6 text-electric" />
            </div>
            <div className="text-center">
              <p className="text-base font-semibold text-navy-800">Formulario de Reserva</p>
              <p className="text-sm text-slate-400 mt-1 font-mono">Incrusta aquí tu iframe de Tally</p>
            </div>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 bg-electric text-navy-900 font-bold rounded-lg text-sm uppercase tracking-wider hover:bg-navy-800 hover:text-electric transition-all duration-300 mt-2"
            >
              Reservar Ahora
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

        {/* Disclaimer */}
        <p className="text-center text-xs text-slate-400 mt-6">
          Tus datos están protegidos conforme al RGPD. Sin spam, sin permanencia.
        </p>
      </div>
    </section>
  )
}
