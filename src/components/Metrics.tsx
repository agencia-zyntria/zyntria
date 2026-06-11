import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const metrics = [
  { value: 87, suffix: '%', label: 'Ahorro de tiempo operativo' },
  { value: 3, suffix: 'x', label: 'Velocidad de respuesta' },
  { value: 150, suffix: '+', label: 'Procesos automatizados' },
  { value: 97, suffix: '%', label: 'Reducción de errores' },
]

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    const duration = 1600
    const steps = 60
    const increment = value / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)
    return () => clearInterval(timer)
  }, [inView, value])

  return (
    <span ref={ref} className="text-5xl md:text-6xl font-black text-navy-800 tabular-nums">
      {count}
      <span className="text-electric">{suffix}</span>
    </span>
  )
}

export function Metrics() {
  return (
    <section id="resultados" className="py-24 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-6">
          {metrics.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center text-center gap-3"
            >
              <Counter value={m.value} suffix={m.suffix} />
              <div className="w-8 h-0.5 bg-electric/40 rounded-full" />
              <p className="text-sm text-slate-500 font-medium leading-snug">{m.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
