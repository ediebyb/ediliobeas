import { useParams, Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Calendar, CheckCircle2 } from 'lucide-react'
import { SERVICES } from '@/data/services'
import { SETMORE_LINK } from '@/data/setmore'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function ServiceDetailPage() {
  const { serviceId } = useParams<{ serviceId: string }>()
  const navigate = useNavigate()

  const service = SERVICES.find((s) => s.id === serviceId)

  if (!service) {
    return (
      <div className="min-h-screen bg-tech-blue">
        <Navigation />
        <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
          <h1 className="text-4xl font-bold text-white mb-4">Servicio no encontrado</h1>
          <p className="text-gray-400 mb-8">El servicio que buscas no existe o ha sido movido.</p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-[#C5A059] hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Volver al inicio
          </Link>
        </div>
        <Footer />
      </div>
    )
  }

  const IconComponent = service.icon

  // Helper para mostrar precios dinámicamente
  const renderPricing = () => {
    const pricing = service.pricing
    if (!pricing) return null

    return (
      <div className="space-y-3">
        {pricing.optimization && (
          <div className="flex justify-between items-center py-2 border-b border-white/10">
            <span className="text-gray-400">Optimización:</span>
            <span className="text-[#C5A059] font-bold text-lg">{pricing.optimization}</span>
          </div>
        )}
        {pricing.creation && (
          <div className="flex justify-between items-center py-2 border-b border-white/10">
            <span className="text-gray-400">Creación desde cero:</span>
            <span className="text-[#C5A059] font-bold text-lg">{pricing.creation}</span>
          </div>
        )}
        {pricing.landing && (
          <div className="flex justify-between items-center py-2 border-b border-white/10">
            <span className="text-gray-400">Landing Page:</span>
            <span className="text-[#C5A059] font-bold text-lg">{pricing.landing}</span>
          </div>
        )}
        {pricing.ecommerce && (
          <div className="flex justify-between items-center py-2 border-b border-white/10">
            <span className="text-gray-400">eCommerce:</span>
            <span className="text-[#C5A059] font-bold text-lg">{pricing.ecommerce}</span>
          </div>
        )}
        {pricing.basic && (
          <div className="flex justify-between items-center py-2 border-b border-white/10">
            <span className="text-gray-400">Inversión:</span>
            <span className="text-[#C5A059] font-bold text-lg">{pricing.basic}</span>
          </div>
        )}
        {pricing.process && (
          <div className="flex justify-between items-center py-2 border-b border-white/10">
            <span className="text-gray-400">Por proceso:</span>
            <span className="text-[#C5A059] font-bold text-lg">{pricing.process}</span>
          </div>
        )}
        {pricing.session && (
          <div className="flex justify-between items-center py-2 border-b border-white/10">
            <span className="text-gray-400">Sesión 1:1:</span>
            <span className="text-[#C5A059] font-bold text-lg">{pricing.session}</span>
          </div>
        )}
        {pricing.unique && (
          <div className="flex justify-between items-center py-2 border-b border-white/10">
            <span className="text-gray-400">Setup inicial:</span>
            <span className="text-[#C5A059] font-bold text-lg">{pricing.unique}</span>
          </div>
        )}
        {pricing.monthly && (
          <div className="flex justify-between items-center py-2 border-b border-white/10">
            <span className="text-gray-400">Mensual:</span>
            <span className="text-[#C5A059] font-bold text-lg">{pricing.monthly}</span>
          </div>
        )}
        {pricing.note && (
          <p className="text-sm text-gray-500 mt-3">{pricing.note}</p>
        )}
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-tech-blue">
      <Navigation />

      {/* Hero del servicio */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6"
          >
            <button
              onClick={() => navigate(-1)}
              className="inline-flex items-center gap-2 text-gray-400 hover:text-[#C5A059] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Volver
            </button>
          </motion.div>

          {/* Icono y título */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-center mb-8"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-[#C5A059]/20 rounded-full mb-6">
              <IconComponent className="w-10 h-10 text-[#C5A059]" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
              {service.title}
            </h1>
          </motion.div>

          {/* Problem */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-[#C5A059]/15 border border-[#C5A059]/30 rounded-xl p-6 mb-8"
          >
            <p className="text-xl text-[#C5A059] font-medium text-center">
              {service.problem}
            </p>
          </motion.div>

          {/* Grid de contenido */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Columna izquierda: Descripción */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-6"
            >
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <h2 className="text-xl font-bold text-white mb-4">¿Qué incluye?</h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                  {service.fullDescription}
                </p>

                <h3 className="text-lg font-semibold text-white mb-4">Características:</h3>
                <ul className="space-y-3">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#C5A059] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{feature.replace('✓ ', '')}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Imagen del servicio */}
              {service.image && (
                <div className="rounded-xl overflow-hidden border border-white/10">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-64 object-cover"
                  />
                </div>
              )}
            </motion.div>

            {/* Columna derecha: Info y CTA */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-6"
            >
              {/* Pricing */}
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <h3 className="text-lg font-semibold text-white mb-4">Inversión</h3>
                {renderPricing()}
              </div>

              {/* Timeline */}
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <h3 className="text-lg font-semibold text-white mb-2">Tiempo de entrega</h3>
                <p className="text-gray-300">{service.timeline}</p>
              </div>

              {/* Deliverables */}
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <h3 className="text-lg font-semibold text-white mb-4">Entregables</h3>
                <ul className="space-y-2">
                  {service.deliverables.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-300">
                      <span className="text-[#C5A059]">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Nota especial */}
              {service.note && (
                <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4">
                  <p className="text-yellow-400 text-sm">{service.note}</p>
                </div>
              )}

              {/* CTA Principal */}
              <a
                href={SETMORE_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-[#C5A059] hover:bg-[#D4AF6A] text-white font-bold py-4 px-6 rounded-xl text-center transition-all duration-300 hover:shadow-lg hover:shadow-[#C5A059]/30 group"
              >
                <span className="inline-flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Agenda tu consultoría gratuita
                </span>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
