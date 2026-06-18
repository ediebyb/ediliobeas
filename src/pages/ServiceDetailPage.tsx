import { useParams, Link, useNavigate, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Calendar, CheckCircle2, MessageCircle } from 'lucide-react'
import { SERVICES } from '@/data/services'
import { SETMORE_LINK } from '@/data/setmore'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import SEOMeta from '@/components/SEOMeta'

const WA_NUMBER = '56941522980'

export default function ServiceDetailPage() {
  const { serviceId } = useParams<{ serviceId: string }>()
  const navigate = useNavigate()

  const service = SERVICES.find((s) => s.id === serviceId)

  if (!service) return <Navigate to="/servicios" replace />

  const IconComponent = service.icon

  // Related services: up to 3 others
  const related = SERVICES.filter((s) => s.id !== service.id).slice(0, 3)

  // WhatsApp URL with predefined message
  const waMessage = service.whatsappMessage ?? `Hola Edilio, me interesa el servicio: ${service.title}`
  const waUrl = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(waMessage)}`

  const renderPricing = () => {
    const pricing = service.pricing
    if (!pricing) return null
    const pricingKeys = Object.keys(pricing).filter(key => key !== 'note')
    const labels: Record<string, string> = {
      optimization: 'Optimización', creation: 'Creación desde cero',
      landing: 'Landing Page', ecommerce: 'eCommerce',
      basic: 'Inversión', process: 'Por proceso',
      session: 'Sesión 1:1', unique: 'Setup inicial', monthly: 'Mensual',
    }
    return (
      <div className="space-y-3">
        {pricingKeys.map(key => (
          <div key={key} className="flex justify-between items-center py-2 border-b border-white/10">
            <span className="text-gray-400">{labels[key] ?? key}:</span>
            <span className="text-[#C5A059] font-bold text-lg">{(pricing as Record<string, string>)[key]}</span>
          </div>
        ))}
        {pricing.note && <p className="text-sm text-gray-500 mt-3">{pricing.note}</p>}
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-tech-blue">
      <SEOMeta
        title={service.title}
        description={service.executiveSummary}
        ogUrl={`/servicios/${service.id}`}
        ogImage={service.detailImage ?? service.image}
      />
      <Navigation />

      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Back */}
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mb-6">
            <button
              onClick={() => navigate(-1)}
              className="inline-flex items-center gap-2 text-gray-400 hover:text-[#C5A059] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Volver
            </button>
          </motion.div>

          {/* Icon + Title */}
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
            <p className="text-xl text-[#C5A059] font-medium text-center">{service.problem}</p>
          </motion.div>

          {/* Content grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left: Description */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-6"
            >
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <h2 className="text-xl font-bold text-white mb-4">¿Qué incluye?</h2>
                <p className="text-gray-300 leading-relaxed mb-6">{service.fullDescription}</p>
                <h3 className="text-lg font-semibold text-white mb-4">Características:</h3>
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#C5A059] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{feature.replace('✓ ', '')}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {(service.detailImage || service.image) && (
                <div className="rounded-xl overflow-hidden border border-white/10">
                  <img
                    src={service.detailImage ?? service.image}
                    alt={`Propuesta ${service.title}`}
                    className="w-full h-auto object-cover"
                  />
                </div>
              )}
            </motion.div>

            {/* Right: Pricing + CTAs */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-6"
            >
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <h3 className="text-lg font-semibold text-white mb-4">Inversión</h3>
                {renderPricing()}
              </div>

              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <h3 className="text-lg font-semibold text-white mb-2">Tiempo de entrega</h3>
                <p className="text-gray-300">{service.timeline}</p>
              </div>

              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <h3 className="text-lg font-semibold text-white mb-4">Entregables</h3>
                <ul className="space-y-2">
                  {service.deliverables.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-300">
                      <span className="text-[#C5A059]">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {service.note && (
                <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4">
                  <p className="text-yellow-400 text-sm">{service.note}</p>
                </div>
              )}

              {/* CTA Primary — Consultoría */}
              <a
                href={SETMORE_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-[#C5A059] hover:bg-[#D4AF6A] text-[#05121F] font-bold py-4 px-6 rounded-xl text-center transition-all duration-300 hover:shadow-lg hover:shadow-[#C5A059]/30"
              >
                <Calendar className="w-5 h-5" />
                Agenda tu consultoría gratuita
              </a>

              {/* CTA Secondary — WhatsApp */}
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-green-600 hover:bg-green-500 text-white font-bold py-4 px-6 rounded-xl text-center transition-all duration-300 hover:shadow-lg hover:shadow-green-600/30"
              >
                <MessageCircle className="w-5 h-5" />
                Escríbeme por WhatsApp
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Otros servicios */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            Otros servicios que podrían interesarte
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {related.map((s) => {
              const Icon = s.icon
              return (
                <Link
                  key={s.id}
                  to={`/servicios/${s.id}`}
                  className="group bg-white/5 border border-white/10 hover:border-[#C5A059]/50 rounded-xl p-5 transition-all duration-300 hover:shadow-lg hover:shadow-[#C5A059]/10"
                >
                  <div className="w-10 h-10 bg-[#C5A059]/20 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5 text-[#C5A059]" />
                  </div>
                  <h3 className="text-white font-semibold text-sm mb-2 line-clamp-2 group-hover:text-[#C5A059] transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-gray-400 text-xs line-clamp-2">{s.executiveSummary}</p>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
