import { useParams, Link, useNavigate, Navigate } from 'react-router-dom'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, Calendar, CheckCircle2, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react'
import { SERVICES, POSICIONAMIENTO_IDS } from '@/data/services'
import { SETMORE_LINK } from '@/data/setmore'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import SEOMeta from '@/components/SEOMeta'

const WA_NUMBER = '56941522980'

export default function ServiceDetailPage() {
  const { serviceId } = useParams<{ serviceId: string }>()
  const navigate = useNavigate()
  const [relatedIdx, setRelatedIdx] = useState(0)

  const service = SERVICES.find((s) => s.id === serviceId)
  if (!service) return <Navigate to="/servicios" replace />

  const IconComponent = service.icon
  const isPosicionamiento = POSICIONAMIENTO_IDS.includes(service.id)

  // Related services: all others
  const related = SERVICES.filter((s) => s.id !== service.id)
  const visibleRelated = related.slice(relatedIdx, relatedIdx + 3)

  const waMessage = service.whatsappMessage ?? `Hola Edilio, me interesa: ${service.title}`
  const waUrl = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(waMessage)}`

  const renderPricing = () => {
    const p = service.pricing
    if (!p) return null
    return (
      <div className="space-y-3">
        {p.original && p.discounted && (
          <div className="flex justify-between items-center py-2 border-b border-white/10">
            <span className="text-gray-400">Precio oferta:</span>
            <div className="text-right">
              <span className="text-gray-500 line-through text-sm mr-2">{p.original}</span>
              <span className="text-[#C5A059] font-bold text-xl">{p.discounted}</span>
            </div>
          </div>
        )}
        {p.basic && p.basic !== 'Cotización' && !p.original && (
          <div className="flex justify-between items-center py-2 border-b border-white/10">
            <span className="text-gray-400">Precio:</span>
            <span className="text-[#C5A059] font-bold text-xl">{p.basic}</span>
          </div>
        )}
        {p.monthly && !p.original && (
          <div className="flex justify-between items-center py-2 border-b border-white/10">
            <span className="text-gray-400">Mensual:</span>
            <span className="text-[#C5A059] font-bold text-xl">{p.monthly}</span>
          </div>
        )}
        {(p.basic === 'Cotización') && (
          <div className="py-2 border-b border-white/10">
            <span className="text-[#C5A059] font-bold text-lg">Cotización personalizada</span>
          </div>
        )}
        {p.note && <p className="text-xs text-gray-500 mt-3">{p.note}</p>}
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

      <section className="pt-32 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">

          {/* Back → always to /servicios (change 10) */}
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mb-6">
            <button
              onClick={() => navigate('/servicios')}
              className="inline-flex items-center gap-2 text-gray-400 hover:text-[#C5A059] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Ver todos los servicios
            </button>
          </motion.div>

          {/* Icon + Title */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-[#C5A059]/20 rounded-full mb-6">
              <IconComponent className="w-10 h-10 text-[#C5A059]" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-4">{service.title}</h1>
          </motion.div>

          {/* Problem */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="bg-[#C5A059]/15 border border-[#C5A059]/30 rounded-xl p-6 mb-8"
          >
            <p className="text-xl text-[#C5A059] font-medium text-center">{service.problem}</p>
          </motion.div>

          {/* Content grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="space-y-6">
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <h2 className="text-xl font-bold text-white mb-4">¿Qué incluye?</h2>
                <p className="text-gray-300 leading-relaxed mb-6">{service.fullDescription}</p>
                <h3 className="text-lg font-semibold text-white mb-4">Características:</h3>
                <ul className="space-y-3">
                  {service.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#C5A059] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{f.replace('✓ ', '')}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {(service.detailImage || service.image) && (
                <div className="rounded-xl overflow-hidden border border-white/10">
                  <img src={service.detailImage ?? service.image} alt={`Propuesta ${service.title}`} className="w-full h-auto object-cover" />
                </div>
              )}
            </motion.div>

            {/* Right */}
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }} className="space-y-6">
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <h3 className="text-lg font-semibold text-white mb-4">Inversión</h3>
                {renderPricing()}
              </div>

              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <h3 className="text-lg font-semibold text-white mb-2">Tiempo de entrega</h3>
                <p className="text-[#C5A059] font-semibold">{service.timeline}</p>
              </div>

              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <h3 className="text-lg font-semibold text-white mb-4">Entregables</h3>
                <ul className="space-y-2">
                  {service.deliverables.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-300">
                      <span className="text-[#C5A059]">•</span>{item}
                    </li>
                  ))}
                </ul>
              </div>

              {service.note && (
                <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4">
                  <p className="text-yellow-400 text-sm">{service.note}</p>
                </div>
              )}

              {/* CTA Primary */}
              <a href={SETMORE_LINK} target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-[#C5A059] hover:bg-[#D4AF6A] text-[#05121F] font-bold py-4 px-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-[#C5A059]/30"
              >
                <Calendar className="w-5 h-5" />
                Agenda tu consultoría gratuita
              </a>

              {/* CTA WhatsApp */}
              <a href={waUrl} target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-green-600 hover:bg-green-500 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-green-600/30"
              >
                <MessageCircle className="w-5 h-5" />
                Escríbeme por WhatsApp
              </a>

              {/* Otros servicios BELOW WhatsApp (changes 8+12) — only for posicionamiento */}
              {isPosicionamiento && (
                <div>
                  <h3 className="text-sm font-semibold text-white/60 uppercase tracking-widest mb-3">Otros servicios</h3>
                  <div className="grid grid-cols-3 gap-2">
                    {visibleRelated.map((s) => {
                      const Icon = s.icon
                      return (
                        <Link key={s.id} to={`/servicios/${s.id}`}
                          className="group bg-white/5 border border-white/10 hover:border-[#C5A059]/50 rounded-xl p-3 transition-all duration-200 hover:bg-[#C5A059]/10 flex flex-col items-center gap-2 text-center"
                        >
                          <div className="w-8 h-8 bg-[#C5A059]/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Icon className="w-4 h-4 text-[#C5A059]" />
                          </div>
                          <span className="text-white text-xs line-clamp-2 group-hover:text-[#C5A059] transition-colors leading-tight">{s.title}</span>
                        </Link>
                      )
                    })}
                  </div>
                  {related.length > 3 && (
                    <div className="flex justify-center gap-3 mt-3">
                      <button onClick={() => setRelatedIdx(Math.max(0, relatedIdx - 3))} disabled={relatedIdx === 0}
                        className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white disabled:opacity-30 transition-colors"
                      ><ChevronLeft className="w-4 h-4" /></button>
                      <button onClick={() => setRelatedIdx(Math.min(related.length - 3, relatedIdx + 3))} disabled={relatedIdx + 3 >= related.length}
                        className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white disabled:opacity-30 transition-colors"
                      ><ChevronRight className="w-4 h-4" /></button>
                    </div>
                  )}
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Otros servicios section (for strategic services) */}
      {!isPosicionamiento && (
        <section className="pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-white">Otros servicios que podrían interesarte</h2>
              <div className="flex gap-2">
                <button onClick={() => setRelatedIdx(Math.max(0, relatedIdx - 3))} disabled={relatedIdx === 0}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white disabled:opacity-30 transition-colors"
                ><ChevronLeft className="w-4 h-4" /></button>
                <button onClick={() => setRelatedIdx(Math.min(related.length - 3, relatedIdx + 3))} disabled={relatedIdx + 3 >= related.length}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white disabled:opacity-30 transition-colors"
                ><ChevronRight className="w-4 h-4" /></button>
              </div>
            </div>
            <div className="grid sm:grid-cols-3 gap-6">
              {visibleRelated.map((s) => {
                const Icon = s.icon
                return (
                  <Link key={s.id} to={`/servicios/${s.id}`}
                    className="group bg-white/5 border border-white/10 hover:border-[#C5A059]/50 rounded-xl p-5 transition-all duration-300 hover:shadow-lg hover:shadow-[#C5A059]/10"
                  >
                    <div className="w-10 h-10 bg-[#C5A059]/20 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5 text-[#C5A059]" />
                    </div>
                    <h3 className="text-white font-semibold text-sm mb-2 line-clamp-2 group-hover:text-[#C5A059] transition-colors">{s.title}</h3>
                    <p className="text-gray-400 text-xs line-clamp-2">{s.executiveSummary}</p>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  )
}
