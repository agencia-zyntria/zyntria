import { Suspense, lazy, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Zap } from 'lucide-react'
import { Spotlight } from './ui/spotlight'

const Spline = lazy(() => import('@splinetool/react-spline'))

function useIsDesktop() {
  const [isDesktop] = useState(() => typeof window !== 'undefined' && window.innerWidth >= 1024)
  return isDesktop
}

export function Hero() {
  const isDesktop = useIsDesktop()
  return (
    <section className="relative w-full min-h-screen bg-navy-900 overflow-hidden flex items-center">
      {/* Spotlight beam */}
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,212,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.05) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      {/* Radial glow center-right */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-electric/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-0">
          {/* LEFT: Text */}
          <div className="flex-1 flex flex-col items-start justify-center space-y-7 lg:pr-12">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-electric/30 bg-electric/5"
            >
              <Zap className="w-3.5 h-3.5 text-electric" />
              <span className="text-xs font-semibold text-electric tracking-widest uppercase">
                IA Corporativa de Élite
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl xl:text-[5.5rem] font-extrabold text-white leading-[1.04] tracking-tight"
            >
              Tu empresa
              <br />
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: 'linear-gradient(135deg, #00D4FF 0%, #3B82F6 60%, #00D4FF 100%)',
                }}
              >
                trabajando sola
              </span>
              <br />
              con IA de élite.
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-slate-400 font-light max-w-xl leading-relaxed"
            >
              Automatizamos los procesos de agencias, despachos y empresas corporativas con IA
              avanzada. Flujos optimizados, asistentes virtuales y chatbots que trabajan 24/7.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#contacto"
                className="group relative inline-flex items-center gap-2 px-8 py-4 bg-electric text-navy-900 font-bold rounded-lg text-sm uppercase tracking-wider transition-all duration-300 hover:bg-white hover:shadow-[0_0_40px_rgba(0,212,255,0.5)] active:scale-95"
              >
                Solicitar Demo Gratuita
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#servicios"
                className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white font-medium rounded-lg text-sm uppercase tracking-wider hover:border-electric/60 hover:text-electric transition-all duration-300"
              >
                Ver Servicios
              </a>
            </motion.div>

          </div>

          {/* Mobile: static robot image, blend removes black bg */}
          {!isDesktop && (
            <div className="relative w-full flex justify-center mt-4">
              <img
                src="/robot-mobile.png"
                alt="Zyntria AI"
                draggable={false}
                className="w-full max-w-[320px] mix-blend-screen opacity-90 select-none"
              />
              <div
                className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
                style={{ background: 'linear-gradient(to top, #0A0F1E 30%, transparent)' }}
              />
            </div>
          )}

          {/* RIGHT: Spline 3D — desktop only to avoid WebGL issues on mobile */}
          {isDesktop && (
            <div className="flex-1 relative h-[620px] w-full">
              <Suspense
                fallback={
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-10 h-10 border-2 border-electric border-t-transparent rounded-full animate-spin" />
                  </div>
                }
              >
                <Spline
                  scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                  className="w-full h-full"
                />
              </Suspense>
              {/* Bottom fade */}
              <div
                className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
                style={{
                  background: 'linear-gradient(to top, #0A0F1E, transparent)',
                }}
              />
            </div>
          )}
        </div>
      </div>

      {/* Section divider glow */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(0,212,255,0.3), transparent)',
        }}
      />
    </section>
  )
}
