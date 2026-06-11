import { Mail, Linkedin, Twitter, Zap } from 'lucide-react'

const serviceLinks = [
  'Automatización de flujos',
  'Asistentes IA',
  'Chatbots corporativos',
  'Reporting inteligente',
]

const companyLinks = ['Sobre nosotros', 'Casos de éxito', 'Blog', 'Contacto']

export function Footer() {
  return (
    <footer className="bg-navy-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          {/* Brand */}
          <div className="max-w-xs">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 bg-electric rounded-md flex items-center justify-center">
                <Zap className="w-4 h-4 text-navy-900" fill="currentColor" />
              </div>
              <span className="text-xl font-black text-white">
                Zyntria<span className="text-electric">.</span>
              </span>
            </div>
            <p className="text-sm text-slate-500 font-light leading-relaxed">
              Automatización con inteligencia artificial para empresas que compiten en el siglo XXI.
              Flujos, agentes y chatbots que trabajan por ti.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-slate-600 hover:text-electric transition-colors duration-200"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="text-slate-600 hover:text-electric transition-colors duration-200"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="mailto:hola@zyntriatech.es"
                aria-label="Email"
                className="text-slate-600 hover:text-electric transition-colors duration-200"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-12">
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-white mb-5">
                Servicios
              </h4>
              <ul className="space-y-3">
                {serviceLinks.map((s) => (
                  <li key={s}>
                    <a
                      href="#servicios"
                      className="text-sm text-slate-500 hover:text-white transition-colors duration-200"
                    >
                      {s}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-white mb-5">
                Empresa
              </h4>
              <ul className="space-y-3">
                {companyLinks.map((s) => (
                  <li key={s}>
                    <a
                      href="#"
                      className="text-sm text-slate-500 hover:text-white transition-colors duration-200"
                    >
                      {s}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} Zyntria Technologies S.L. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-slate-600 hover:text-white transition-colors">
              Política de privacidad
            </a>
            <a href="#" className="text-xs text-slate-600 hover:text-white transition-colors">
              Aviso legal
            </a>
            <a href="#" className="text-xs text-slate-600 hover:text-white transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
