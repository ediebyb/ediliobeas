import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, ArrowLeft } from 'lucide-react'
import { SERVICES, POSICIONAMIENTO_IDS, ESTRATEGICOS_IDS } from '@/data/services'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import SEOMeta from '@/components/SEOMeta'

const posicionamiento = SERVICES.filter(s => POSICIONAMIENTO_IDS.includes(s.id))
const estrategicos = SERVICES.filter(s => ESTRATEGICOS_IDS.includes(s.id))

export default function ServicesListPage() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-tech-blue">
      <SEOMeta
        title="Servicios de Marketing Digital y Transformación Digital para PyMEs"
        description="Google Perfil, WhatsApp Business Pro, RRSS con IA, Web Corporativa, E-commerce, Fábrica de Contenido, Gestión Ads, App Android y ERP/CRM. Precios claros y resultados medibles."
        ogUrl="/servicios"
      />
      <Navigation />

      <section className="pt-32 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <button onClick={() => navigate('/')} className="inline-flex items-center gap-2 text-gray-400 hover:text-[#C5A059] transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            Volver al inicio
          </button>

          <div className="text-center mb-12">
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold text-white mb-4"
            >
              Servicios de Marketing Digital y Transformación Digital
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Selecciona el servicio para ver precios, plazos y entregables completos.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-16">

          {/* SERVICIOS DE POSICIONAMIENTO */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <h2 className="text-2xl font-bold text-white uppercase tracking-wide">Servicios de Posicionamiento</h2>
              <div className="flex-1 h-px bg-white/10" />
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posicionamiento.map((service, index) => {
                const Icon = service.icon
                const price = service.pricing.basic
                return (
                  <Link key={service.id} to={`/servicios/${service.id}`}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.08 }}
                      className="group bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-[#C5A059]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#C5A059]/10 h-full flex flex-col"
                    >
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-14 h-14 bg-[#C5A059]/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                          <Icon className="w-7 h-7 text-[#C5A059]" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-white group-hover:text-[#C5A059] transition-colors leading-snug">{service.title}</h3>
                          {price && price !== 'Cotización' && (
                            <span className="text-[#C5A059] font-bold text-lg">{price}</span>
                          )}
                        </div>
                      </div>
                      <p className="text-[#C5A059]/80 font-medium text-sm mb-3">{service.problem}</p>
                      <p className="text-gray-400 text-sm line-clamp-3 flex-1">{service.executiveSummary}</p>
                      <div className="mt-4 inline-flex items-center gap-2 text-white/60 group-hover:text-[#C5A059] transition-colors text-sm font-semibold">
                        Ver detalles <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </motion.div>
                  </Link>
                )
              })}
            </div>
          </div>

          {/* SERVICIOS ESTRATÉGICOS */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <h2 className="text-2xl font-bold text-white uppercase tracking-wide">
                Servicios Estratégicos{' '}
                <span className="text-[#C5A059] normal-case font-semibold text-lg">(Ofertas por Tiempo Limitado)</span>
              </h2>
              <div className="flex-1 h-px bg-white/10" />
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {estrategicos.map((service, index) => {
                const Icon = service.icon
                const hasDiscount = !!(service.pricing.original && service.pricing.discounted)
                return (
                  <Link key={service.id} to={`/servicios/${service.id}`}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.08 }}
                      className="group bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-[#C5A059]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#C5A059]/10 h-full flex flex-col relative"
                    >
                      {hasDiscount && (
                        <span className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">OFERTA</span>
                      )}
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-14 h-14 bg-[#C5A059]/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                          <Icon className="w-7 h-7 text-[#C5A059]" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-white group-hover:text-[#C5A059] transition-colors leading-snug">{service.title}</h3>
                          {hasDiscount ? (
                            <div>
                              <span className="text-gray-500 line-through text-sm">{service.pricing.original}</span>
                              <span className="text-[#C5A059] font-bold text-lg ml-2">{service.pricing.discounted}</span>
                            </div>
                          ) : service.pricing.monthly ? (
                            <span className="text-[#C5A059] font-bold">{service.pricing.monthly}</span>
                          ) : (
                            <span className="text-[#C5A059] font-bold">{service.pricing.basic}</span>
                          )}
                        </div>
                      </div>
                      <p className="text-[#C5A059]/80 font-medium text-sm mb-3">{service.problem}</p>
                      <p className="text-gray-400 text-sm line-clamp-3 flex-1">{service.executiveSummary}</p>
                      <div className="mt-4 inline-flex items-center gap-2 text-white/60 group-hover:text-[#C5A059] transition-colors text-sm font-semibold">
                        Ver detalles <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </motion.div>
                  </Link>
                )
              })}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <p className="text-gray-400 mb-6">¿No estás seguro cuál necesitas?</p>
            <a href="https://ediliobeas.setmore.com" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#C5A059] hover:bg-[#D4AF6A] text-[#05121F] font-bold py-4 px-8 rounded-xl transition-all"
            >
              Agenda tu consultoría gratuita
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
