import { motion } from 'framer-motion'
import { Workflow, Bot, MessageSquare, BarChart3, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: Workflow,
    title: 'Automatización de Flujos',
    description:
      'Eliminamos tareas repetitivas e ineficiencias en tus procesos operativos. La IA aprende cómo trabaja tu empresa y la optimiza continuamente.',
    features: ['Análisis de procesos', 'Automatización end-to-end', 'Reducción de errores 97%'],
    accent: 'from-blue-600/10 to-transparent',
  },
  {
    icon: Bot,
    title: 'Asistentes Virtuales IA',
    description:
      'Agentes inteligentes que gestionan tareas complejas, coordinan equipos y toman decisiones basadas en datos de tu negocio en tiempo real.',
    features: ['Disponibilidad 24/7', 'Integración nativa', 'Aprendizaje continuo'],
    accent: 'from-electric/10 to-transparent',
  },
  {
    icon: MessageSquare,
    title: 'Chatbots Corporativos',
    description:
      'Chatbots avanzados entrenados con el ADN de tu empresa. Atienden clientes, generan leads y cualifican prospects con precisión quirúrgica.',
    features: ['Entrenamiento personalizado', 'Multicanal', 'CRM integrado'],
    accent: 'from-cyan-500/10 to-transparent',
  },
  {
    icon: BarChart3,
    title: 'Reporting Inteligente',
    description:
      'Dashboards que procesan tus datos en tiempo real y generan informes ejecutivos con insights accionables. Cero fricción, máxima claridad.',
    features: ['Tiempo real', 'Alertas inteligentes', 'Exportación automática'],
    accent: 'from-indigo-600/10 to-transparent',
  },
]

export function Services() {
  return (
    <section id="servicios" className="relative py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-electric mb-4">
            Nuestros Servicios
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-navy-800 leading-tight tracking-tight">
            Tecnología que trabaja
            <br />
            <span className="text-electric">mientras tú creces</span>
          </h2>
          <p className="mt-6 text-lg text-slate-500 font-light">
            Soluciones de automatización IA diseñadas para empresas que exigen resultados medibles
            y retorno de inversión demostrable.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative p-8 rounded-2xl border border-slate-100 bg-white hover:border-electric/25 hover:shadow-[0_8px_40px_rgba(0,212,255,0.07)] transition-all duration-500 overflow-hidden"
            >
              {/* Background gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative z-10">
                {/* Icon */}
                <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-navy-900 group-hover:bg-electric transition-colors duration-300">
                  <service.icon className="w-5 h-5 text-electric group-hover:text-navy-900 transition-colors duration-300" />
                </div>

                <h3 className="text-xl font-bold text-navy-800 mb-3">{service.title}</h3>
                <p className="text-slate-500 font-light leading-relaxed mb-6">{service.description}</p>

                <ul className="space-y-2 mb-8">
                  {service.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2.5 text-sm text-slate-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-electric flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center gap-1.5 text-sm font-semibold text-slate-400 group-hover:text-electric transition-colors duration-300">
                  Saber más
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 rounded-b-2xl bg-gradient-to-r from-transparent via-electric/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
