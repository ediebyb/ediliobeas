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
      className="bg-tech-blue border-t border-white/10"
      aria-label="Pie de página"
    >
      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* GRID DE 2 COLUMNAS */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">

          {/* COLUMNA 1: Logo + Propuesta de Valor + CTA + Confidencialidad */}
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
            <div className="mt-6 flex items-center gap-2 text-sm text-gray-500">
              <div className="p-1 rounded bg-[#C5A059]/20">
                <Shield className="w-4 h-4 text-[#C5A059]" />
              </div>
              <span>Confidencialidad 100% garantizada</span>
            </div>
          </div>

          {/* COLUMNA 2: Métodos de Pago */}
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
