import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Calendar, Tag } from 'lucide-react'
import { SERVICES } from '@/data/services'
import { staggerContainer, fadeInUp } from '@/utils/animations'
import ServiceCard from './ServiceCard'
import { SETMORE_LINK } from '@/data/setmore'

const CARTA = ['google-perfil', 'whatsapp-business', 'redes-sociales-ia', 'pagina-web-basica']
const PACK = ['pack-posicionamiento']
const ESTRATEGICOS = ['web-corporativa', 'ecommerce', 'fabrica-contenido', 'gestion-ads', 'app-movil', 'erp']

const carta = SERVICES.filter(s => CARTA.includes(s.id))
const pack = SERVICES.filter(s => PACK.includes(s.id))
const estrategicos = SERVICES.filter(s => ESTRATEGICOS.includes(s.id))

export default function ServicesSection() {
  return (
    <section
      id="servicios"
      className="py-20 bg-brand-light"
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <motion.span variants={fadeInUp} className="inline-block text-brand-primary font-semibold text-sm uppercase tracking-wider mb-3">
            Tecnología que genera Retorno sobre la Inversión, no tecnología por moda
          </motion.span>
          <motion.h2 id="services-heading" variants={fadeInUp} className="text-3xl sm:text-4xl font-heading font-bold text-brand-dark mb-4">
            Ecosistemas digitales que venden por ti
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-gray-600 max-w-2xl mx-auto text-lg">
            No hablo en código, hablo en Retorno sobre la Inversión. Cada servicio está diseñado para que el retorno supere la inversión — y para que puedas medirlo desde el primer mes.
          </motion.p>
        </motion.div>

        {/* 1ª Consultoría Gratuita */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12 bg-gradient-to-r from-[#C5A059]/20 to-[#C5A059]/5 border border-[#C5A059]/40 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4">
            <img src="/icono-consultoria.png" alt="Consultoría gratuita" className="w-16 h-16 object-contain flex-shrink-0" />
            <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">🎁</span>
              <span className="text-[#C5A059] font-bold text-lg uppercase tracking-wide">1ª Consultoría Gratuita</span>
              <span className="bg-green-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">GRATIS</span>
            </div>
            <p className="text-brand-dark font-medium">30 minutos por WhatsApp o Google Meet — analizamos tu negocio y definimos exactamente qué necesitas.</p>
            <p className="text-gray-500 text-sm mt-1">Sin compromiso. Sin letra chica. Solo claridad sobre tu próximo paso digital.</p>
          </div>
          </div>
          <a
            href={SETMORE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-[#C5A059] text-white font-semibold rounded-xl hover:bg-[#D4AF6A] transition-all duration-200 shadow-lg hover:shadow-[#C5A059]/30 whitespace-nowrap"
          >
            <Calendar size={18} />
            Agendar ahora
          </a>
        </motion.div>

        {/* SERVICIOS A LA CARTA */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="mb-4"
        >
          <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
            <Tag size={16} className="text-brand-primary" />
            <h3 className="text-lg font-bold text-brand-dark uppercase tracking-wide">Servicios a la carta</h3>
            <div className="flex-1 h-px bg-gray-200" />
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {carta.map((service) => (
              <motion.div key={service.id} variants={fadeInUp}>
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* PACK POSICIONAMIENTO */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="my-10"
        >
          {pack[0] && (
            <div className="bg-gradient-to-r from-[#05121F] via-[#0a1f35] to-[#05121F] rounded-2xl p-8 shadow-xl border border-[#C5A059]/40 relative overflow-hidden">
              {/* Badge */}
              <div className="absolute top-4 right-4">
                <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">44% OFF — Solo 3 cupos/mes</span>
              </div>

              <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-2xl">📦</span>
                    <span className="text-[#C5A059] font-bold text-sm uppercase tracking-widest">Pack Posicionamiento</span>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3">{pack[0].title}</h3>
                  <p className="text-gray-300 mb-5 leading-relaxed">{pack[0].executiveSummary}</p>

                  {/* Included services */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-5">
                    {pack[0].features.map((f, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm text-gray-300">
                        <span className="text-[#C5A059] flex-shrink-0 mt-0.5">✓</span>
                        <span>{f.replace('✓ ', '')}</span>
                      </div>
                    ))}
                  </div>

                  {/* Pricing */}
                  <div className="flex flex-wrap items-end gap-4">
                    <div>
                      <p className="text-gray-400 text-xs line-through">Precio normal: $455.000 CLP</p>
                      <p className="text-[#C5A059] font-bold text-3xl">$255.000 CLP</p>
                      <p className="text-green-400 text-sm font-semibold">Ahorro: $200.000 CLP</p>
                    </div>
                  </div>
                </div>

                <div className="flex-shrink-0 flex flex-col gap-3 w-full lg:w-auto">
                  <Link
                    to="/servicios/pack-posicionamiento"
                    className="block text-center px-8 py-4 bg-[#C5A059] hover:bg-[#D4AF6A] text-[#05121F] font-bold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl"
                  >
                    Ver detalles del Pack →
                  </Link>
                  <a
                    href={`https://wa.me/56941522980?text=${encodeURIComponent(pack[0].whatsappMessage ?? '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center px-8 py-3 bg-green-600 hover:bg-green-500 text-white font-semibold rounded-xl transition-all duration-200"
                  >
                    Quiero este pack
                  </a>
                </div>
              </div>
            </div>
          )}
        </motion.div>

        {/* SERVICIOS ESTRATÉGICOS */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="mt-10"
        >
          <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
            <Tag size={16} className="text-brand-primary" />
            <h3 className="text-lg font-bold text-brand-dark uppercase tracking-wide">Servicios estratégicos</h3>
            <div className="flex-1 h-px bg-gray-200" />
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {estrategicos.map((service) => (
              <motion.div key={service.id} variants={fadeInUp}>
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </div>
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
            Agenda tu 1ª Consultoría Gratuita (30 min)
          </a>
        </motion.div>

        <div className="text-center text-sm text-gray-500 mt-6">
          * Precios en CLP sin impuestos. Para clientes fuera de Chile se convierten a USD. Los valores finales pueden variar según las necesidades específicas de cada proyecto.
        </div>
      </div>
    </section>
  )
}
