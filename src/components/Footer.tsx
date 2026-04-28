import { motion } from 'framer-motion'
import { Shield, CreditCard, Bitcoin, Landmark, ArrowRight } from 'lucide-react'
import { fadeIn } from '@/utils/animations'
import { SETMORE_LINK } from '@/data/setmore'

const CURRENT_YEAR = new Date().getFullYear()

export default function Footer() {

  return (
    <motion.footer
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="bg-[#05121F] border-t border-white/10"
      aria-label="Pie de página"
    >
      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* GRID DE 4 COLUMNAS */}
        <div className="grid md:grid-cols-4 gap-8 mb-8">

          {/* COLUMNA 1: Logo + Propuesta de Valor + CTA */}
          <div>
            <img
              src="/logomini.png"
              alt="Edilio Beas Logo"
              className="h-12 w-auto mb-4 rounded-lg"
            />
            <h3 className="text-white font-bold text-lg mb-4">
              ¿Listo para transformar tu PyME?
            </h3>
            <p className="text-gray-400 mb-6 text-sm">
              Únete a las 30+ empresas en LATAM que ya aumentaron sus ventas y recuperaron su tiempo.
            </p>
            <a
              href={SETMORE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 bg-[#C5A059] text-white px-5 py-3 rounded-lg font-semibold hover:bg-[#D4AF6A] transition-all duration-300 hover:shadow-lg hover:shadow-[#C5A059]/30"
            >
              Agenda tu consultoría
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* COLUMNA 2: Stats de Autoridad */}
          <div className="grid grid-cols-2 gap-4">
            <div className="group cursor-default">
              <div className="text-2xl font-bold text-[#C5A059] mb-1 group-hover:scale-110 transition-transform duration-300 inline-block">150+</div>
              <div className="text-gray-400 text-xs">Proyectos Exitosos</div>
            </div>
            <div className="group cursor-default">
              <div className="text-2xl font-bold text-[#C5A059] mb-1 group-hover:scale-110 transition-transform duration-300 inline-block">30+</div>
              <div className="text-gray-400 text-xs">PyMEs Transformadas</div>
            </div>
            <div className="group cursor-default">
              <div className="text-2xl font-bold text-[#C5A059] mb-1 group-hover:scale-110 transition-transform duration-300 inline-block">4</div>
              <div className="text-gray-400 text-xs">Países en LATAM</div>
            </div>
            <div className="group cursor-default">
              <div className="text-2xl font-bold text-[#C5A059] mb-1 group-hover:scale-110 transition-transform duration-300 inline-block">100%</div>
              <div className="text-gray-400 text-xs">Clientes Satisfechos</div>
            </div>
          </div>

          {/* COLUMNA 3: Métodos de Pago */}
          <div className="flex flex-col">
            <h4 className="text-white font-semibold mb-4">Métodos de pago</h4>
            <div className="flex flex-col gap-3">
              <div className="group flex items-center gap-3 text-gray-300 hover:text-[#C5A059] transition-all duration-300 cursor-pointer">
                <div className="p-2 rounded-lg bg-white/5 group-hover:bg-[#C5A059]/20 transition-colors duration-300">
                  <CreditCard className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <span className="text-sm">PayPal</span>
              </div>
              <div className="group flex items-center gap-3 text-gray-300 hover:text-[#C5A059] transition-all duration-300 cursor-pointer">
                <div className="p-2 rounded-lg bg-white/5 group-hover:bg-[#C5A059]/20 transition-colors duration-300">
                  <Bitcoin className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <span className="text-sm">Criptomonedas</span>
              </div>
              <div className="group flex items-center gap-3 text-gray-300 hover:text-[#C5A059] transition-all duration-300 cursor-pointer">
                <div className="p-2 rounded-lg bg-white/5 group-hover:bg-[#C5A059]/20 transition-colors duration-300">
                  <Landmark className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <span className="text-sm">Transferencia Bancaria</span>
              </div>
            </div>
          </div>

          {/* COLUMNA 4: Navegación */}
          <div>
            <h4 className="text-white font-semibold mb-4">Navegación</h4>
            <ul className="space-y-2 text-gray-400">
              {[
                { href: '#inicio', label: 'Inicio' },
                { href: '#servicios', label: 'Servicios' },
                { href: '#sobre-mi', label: 'Sobre mí' },
                { href: '#testimonios', label: 'Testimonios' },
                { href: '#contacto', label: 'Contacto' },
              ].map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href} 
                    className="group inline-flex items-center gap-1 hover:text-[#C5A059] transition-all duration-300"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex items-center gap-2 text-sm text-gray-500">
              <div className="p-1 rounded bg-[#C5A059]/20">
                <Shield className="w-4 h-4 text-[#C5A059]" />
              </div>
              <span>Confidencialidad 100% garantizada</span>
            </div>
          </div>
        </div>

        {/* LÍNEA DIVISORIA */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-500 text-sm">
            © {CURRENT_YEAR} Edilio Beas - Consultor PyME. Todos los derechos reservados.
          </div>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="/terminos" className="hover:text-white transition-colors duration-300">Términos y Condiciones</a>
            <a href="/privacidad" className="hover:text-white transition-colors duration-300">Política de Privacidad</a>
          </div>
        </div>
      </div>
    </motion.footer>
  )
}
