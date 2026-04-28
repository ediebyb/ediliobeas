import { motion } from 'framer-motion'
import { Shield, CreditCard, Bitcoin, Landmark } from 'lucide-react'
import { fadeIn } from '@/utils/animations'

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

        {/* GRID: Stats | Métodos de Pago (vertical) | Navegación (derecha) */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">

          {/* COLUMNA 1: Stats de Autoridad */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <div className="text-3xl font-bold text-[#C5A059] mb-2">150+</div>
              <div className="text-gray-400 text-sm">Proyectos Exitosos</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#C5A059] mb-2">30+</div>
              <div className="text-gray-400 text-sm">PyMEs Transformadas</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#C5A059] mb-2">4 países</div>
              <div className="text-gray-400 text-sm">En LATAM</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#C5A059] mb-2">100%</div>
              <div className="text-gray-400 text-sm">Clientes Satisfechos</div>
            </div>
          </div>

          {/* COLUMNA 2: Métodos de Pago (vertical) */}
          <div className="flex flex-col items-center justify-center">
            <h4 className="text-white font-semibold mb-4">Métodos de pago</h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 text-gray-300 hover:text-[#C5A059] transition-colors cursor-pointer">
                <CreditCard className="w-5 h-5" />
                <span className="text-sm">PayPal</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300 hover:text-[#C5A059] transition-colors cursor-pointer">
                <Bitcoin className="w-5 h-5" />
                <span className="text-sm">Criptomonedas</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300 hover:text-[#C5A059] transition-colors cursor-pointer">
                <Landmark className="w-5 h-5" />
                <span className="text-sm">Transferencia Bancaria</span>
              </div>
            </div>
          </div>

          {/* COLUMNA 3: Navegación (alineada derecha) */}
          <div className="md:text-right">
            <h4 className="text-white font-semibold mb-4">Navegación</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#inicio" className="hover:text-[#C5A059] transition-colors">Inicio</a></li>
              <li><a href="#servicios" className="hover:text-[#C5A059] transition-colors">Servicios</a></li>
              <li><a href="#sobre-mi" className="hover:text-[#C5A059] transition-colors">Sobre mí</a></li>
              <li><a href="#testimonios" className="hover:text-[#C5A059] transition-colors">Testimonios</a></li>
              <li><a href="#contacto" className="hover:text-[#C5A059] transition-colors">Contacto</a></li>
            </ul>
            <div className="mt-6 flex items-center md:justify-end gap-2 text-sm text-gray-500">
              <Shield className="w-4 h-4 text-[#C5A059]" />
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
            <a href="/terminos" className="hover:text-white transition-colors">Términos y Condiciones</a>
            <a href="/privacidad" className="hover:text-white transition-colors">Política de Privacidad</a>
          </div>
        </div>
      </div>
    </motion.footer>
  )
}
