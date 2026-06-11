import { motion } from 'framer-motion'
import { Building2, Scale, Briefcase, TrendingUp, Users, Home } from 'lucide-react'

const sectors = [
  { icon: Home, label: 'Inmobiliarias' },
  { icon: Scale, label: 'Despachos jurídicos' },
  { icon: Briefcase, label: 'Consultoras' },
  { icon: TrendingUp, label: 'Financieras' },
  { icon: Users, label: 'RRHH & Headhunting' },
  { icon: Building2, label: 'Corporaciones' },
]

export function Industries() {
  return (
    <section className="py-16 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-center text-xs font-semibold tracking-widest uppercase text-slate-400 mb-10">
          Sectores que transformamos
        </p>
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {sectors.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="flex items-center gap-2.5 px-5 py-3 rounded-xl border border-slate-200 hover:border-electric/40 hover:bg-electric/3 transition-all duration-300 group cursor-default"
            >
              <s.icon className="w-4 h-4 text-slate-400 group-hover:text-electric transition-colors duration-300" />
              <span className="text-sm font-medium text-slate-600 group-hover:text-navy-800 transition-colors duration-300">
                {s.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
