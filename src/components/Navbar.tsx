import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Cómo funciona', href: '#como-funciona' },
  { label: 'Resultados', href: '#resultados' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-navy-900/95 backdrop-blur-xl border-b border-white/5 shadow-[0_1px_30px_rgba(0,0,0,0.4)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-[68px] flex items-center justify-between">
        {/* Logo */}
        <a
          href="/"
          className="group flex-shrink-0 flex items-center transition-all duration-300 hover:opacity-85 active:scale-95"
        >
          {/* Desktop: full logo with wordmark */}
          <img
            src="/logo-full.png"
            alt="Zyntria"
            draggable={false}
            className="hidden md:block h-9 lg:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.03]"
          />
          {/* Mobile: symbol mark only */}
          <img
            src="/logo-mark.png"
            alt="Zyntria"
            draggable={false}
            className="md:hidden h-9 w-9 object-contain transition-transform duration-300 group-hover:scale-[1.03]"
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-slate-400 hover:text-white transition-colors duration-200 font-medium relative group"
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-electric transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-electric text-navy-900 font-bold rounded-lg text-sm uppercase tracking-wider hover:bg-white hover:shadow-[0_0_25px_rgba(0,212,255,0.45)] transition-all duration-300 active:scale-95"
          >
            Solicitar Demo
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-navy-900/98 backdrop-blur-xl border-t border-white/5"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-slate-300 hover:text-white font-medium py-2 border-b border-white/5"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contacto"
                className="mt-2 text-center px-5 py-3 bg-electric text-navy-900 font-bold rounded-lg text-sm uppercase tracking-wider"
                onClick={() => setOpen(false)}
              >
                Solicitar Demo
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
