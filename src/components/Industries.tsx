import { Building2, Scale, Briefcase, TrendingUp, Users, Home } from 'lucide-react'

const sectors = [
  { icon: Home, label: 'Inmobiliarias' },
  { icon: Scale, label: 'Despachos jurídicos' },
  { icon: Briefcase, label: 'Consultoras' },
  { icon: TrendingUp, label: 'Financieras' },
  { icon: Users, label: 'RRHH & Headhunting' },
  { icon: Building2, label: 'Corporaciones' },
]

const allSectors = [...sectors, ...sectors]

export function Industries() {
  return (
    <section className="py-16 bg-white border-b border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-10">
        <p className="text-center text-xs font-semibold tracking-widest uppercase text-slate-400">
          Sectores que transformamos
        </p>
      </div>
      <div className="relative overflow-hidden">
        <div className="animate-marquee">
          {allSectors.map((s, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex items-center gap-2.5 px-5 py-3 mx-3 rounded-xl border border-slate-200 hover:border-electric/40 hover:bg-electric/5 transition-all duration-300 group cursor-default"
            >
              <s.icon className="w-4 h-4 text-slate-400 group-hover:text-electric transition-colors duration-300" />
              <span className="text-sm font-medium text-slate-600 group-hover:text-navy-800 transition-colors duration-300 whitespace-nowrap">
                {s.label}
              </span>
            </div>
          ))}
        </div>
        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />
      </div>
    </section>
  )
}
