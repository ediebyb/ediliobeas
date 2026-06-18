import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Calendar } from 'lucide-react'
import { SERVICES } from '@/data/services'
import { staggerContainer, fadeInUp } from '@/utils/animations'
import ServiceCard from './ServiceCard'
import { SETMORE_LINK } from '@/data/setmore'

export default function ServicesSection() {
  return (
    <section
      id="servicios"
      className="py-20 bg-brand-light"
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <motion.span
            variants={fadeInUp}
            className="inline-block text-brand-primary font-semibold text-sm uppercase tracking-wider mb-3"
          >
            Cada peso invertido debe generar más ventas
          </motion.span>
          <motion.h2
            id="services-heading"
            variants={fadeInUp}
            className="text-3xl sm:text-4xl font-heading font-bold text-brand-dark mb-4"
          >
            Servicios que transforman tu PyME en una máquina de ventas
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-gray-600 max-w-2xl mx-auto text-lg"
          >
            No vendas menos de lo que puedes. Cada servicio está diseñado para que el retorno
            supere la inversión en el menor tiempo posible.
          </motion.p>
        </motion.div>

        {/* Grilla de servicios - Primeros 6 */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {SERVICES.slice(0, 6).map((service) => (
            <motion.div key={service.id} variants={fadeInUp}>
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>

        {/* Franja horizontal - Servicio 7: Redes Sociales */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="mt-8"
        >
          {SERVICES[6] && (
            <div className="bg-gradient-to-r from-[#05121F] via-[#0a1f35] to-[#05121F] rounded-2xl p-8 shadow-xl border border-[#C5A059]/30">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                {/* Imagen */}
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 rounded-2xl overflow-hidden bg-[#C5A059]/20 flex items-center justify-center">
                    <img
                      src={SERVICES[6].image}
                      alt={SERVICES[6].title}
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </div>
                </div>
                
                {/* Contenido */}
                <div className="flex-1 text-center lg:text-left">
                  <div className="inline-block px-4 py-1 bg-[#C5A059]/20 rounded-full mb-3">
                    <span className="text-[#C5A059] font-semibold text-sm">NUEVO SERVICIO</span>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3">
                    {SERVICES[6].title}
                  </h3>
                  <p className="text-[#D4AF6A] font-semibold mb-3 text-lg">
                    {SERVICES[6].problem}
                  </p>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {SERVICES[6].executiveSummary}
                  </p>
                  
                  {/* Opciones de objetivos */}
                  <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-4">
                    <span className="px-4 py-2 bg-[#C5A059]/20 text-[#C5A059] rounded-lg text-sm font-medium">
                      Op1: Ventas
                    </span>
                    <span className="px-4 py-2 bg-[#C5A059]/20 text-[#C5A059] rounded-lg text-sm font-medium">
                      Op2: Posicionamiento
                    </span>
                    <span className="px-4 py-2 bg-[#C5A059]/20 text-[#C5A059] rounded-lg text-sm font-medium">
                      Op3: Seguidores Calificados
                    </span>
                  </div>
                  
                  {/* Precios */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-4">
                    <div className="text-center sm:text-left">
                      <span className="text-gray-400 text-sm">Pago Único</span>
                      <p className="text-[#C5A059] font-bold text-xl">{SERVICES[6].pricing.unique}</p>
                    </div>
                    <div className="text-center sm:text-left">
                      <span className="text-gray-400 text-sm">Pago Recurrente</span>
                      <p className="text-[#C5A059] font-bold text-xl">{SERVICES[6].pricing.monthly}</p>
                    </div>
                  </div>
                </div>
                
                {/* CTA */}
                <div className="flex-shrink-0">
                  <Link
                    to={`/servicios/${SERVICES[6].id}`}
                    className="inline-block px-8 py-4 bg-[#C5A059] hover:bg-[#D4AF6A] text-[#05121F] font-bold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl whitespace-nowrap"
                  >
                    Ver detalles →
                  </Link>
                </div>
              </div>
            </div>
          )}
        </motion.div>

        {/* CTA final */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a
            href={SETMORE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-primary text-white font-semibold rounded-xl hover:bg-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-base"
          >
            <Calendar size={20} aria-hidden="true" />
            Agenda tu 1ª Consultoría Gratuita
          </a>
        </motion.div>

        {/* Price disclaimer */}
        <div className="text-center text-sm text-gray-500 mt-8">
          * Precios en CLP sin impuestos. Para clientes fuera de Chile se convierten a USD. Los valores finales pueden variar según las necesidades específicas de cada proyecto.
        </div>
      </div>
    </section>
  )
}
