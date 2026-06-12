import { Workflow, Bot, MessageSquare, BarChart3 } from 'lucide-react'
import { ContainerScroll } from './ui/container-scroll-animation'

const services = [
  {
    icon: Workflow,
    title: 'Automatización de Flujos',
    features: ['Análisis de procesos', 'Automatización end-to-end', 'Reducción de errores 97%'],
  },
  {
    icon: Bot,
    title: 'Asistentes Virtuales IA',
    features: ['Disponibilidad 24/7', 'Integración nativa', 'Aprendizaje continuo'],
  },
  {
    icon: MessageSquare,
    title: 'Chatbots Corporativos',
    features: ['Entrenamiento personalizado', 'Multicanal', 'CRM integrado'],
  },
  {
    icon: BarChart3,
    title: 'Reporting Inteligente',
    features: ['Tiempo real', 'Alertas inteligentes', 'Exportación automática'],
  },
]

export function Services() {
  return (
    <section id="servicios" className="relative bg-navy-900 overflow-hidden">
      <ContainerScroll
        titleComponent={
          <div className="mb-2">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-electric mb-4">
              Nuestros Servicios
            </span>
            <h2 className="text-4xl md:text-[4.5rem] font-extrabold text-white leading-tight tracking-tight">
              Tecnología que trabaja
              <br />
              <span className="text-electric">mientras tú creces</span>
            </h2>
            <p className="mt-4 text-base md:text-lg text-slate-400 font-light max-w-2xl mx-auto">
              Soluciones de automatización IA para empresas que exigen resultados medibles
              y retorno de inversión demostrable.
            </p>
          </div>
        }
      >
        <div className="h-full w-full p-4 md:p-8">
          <div className="grid grid-cols-2 gap-3 md:gap-5 h-full content-start">
            {services.map((service, i) => (
              <div
                key={i}
                className="group flex flex-col gap-2 md:gap-4 p-3 md:p-6 rounded-xl border border-white/5 bg-white/[0.03] hover:border-electric/25 hover:bg-electric/[0.03] transition-all duration-300"
              >
                <div className="w-8 h-8 md:w-11 md:h-11 rounded-lg bg-electric/10 flex items-center justify-center flex-shrink-0">
                  <service.icon className="w-4 h-4 md:w-5 md:h-5 text-electric" />
                </div>
                <h3 className="text-white font-bold text-xs md:text-sm leading-tight">
                  {service.title}
                </h3>
                <ul className="space-y-1">
                  {service.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-1.5 text-xs text-slate-500">
                      <span className="w-1 h-1 rounded-full bg-electric flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </ContainerScroll>
    </section>
  )
}
