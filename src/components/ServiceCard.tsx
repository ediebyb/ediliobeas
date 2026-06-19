import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import type { Service } from '@/types'
import { cardHover } from '@/utils/animations'
import { ArrowRight } from 'lucide-react'

interface ServiceCardProps {
  service: Service
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const { pricing } = service
  const hasDiscount = !!(pricing.original && pricing.discounted)

  const displayPrice = () => {
    if (hasDiscount) return null // handled separately
    if (pricing.basic && pricing.basic !== 'Cotización') return pricing.basic
    if (pricing.monthly) return pricing.monthly
    if (pricing.basic === 'Cotización') return 'Cotización'
    return ''
  }

  return (
    <motion.div
      variants={cardHover}
      initial="rest"
      whileHover="hover"
      className="p-6 hover:shadow-xl transition-shadow duration-300 bg-white rounded-xl border border-gray-100 flex flex-col h-full relative"
    >
      {hasDiscount && (
        <span className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">OFERTA</span>
      )}

      {/* Icon image */}
      <div className="w-full h-40 mb-4 rounded-xl overflow-hidden">
        <img src={service.image} alt={service.title} className="w-full h-full object-contain" />
      </div>

      {/* Title */}
      <h3 className="text-lg font-bold text-[#05121F] mb-2 line-clamp-2">{service.title}</h3>

      {/* Problem */}
      <p className="text-sm font-bold text-[#C5A059] mb-2">{service.problem}</p>

      {/* Summary */}
      <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed flex-1">{service.executiveSummary}</p>

      {/* Price */}
      <div className="mb-4">
        {hasDiscount ? (
          <div>
            <span className="text-gray-400 line-through text-sm mr-2">{pricing.original}</span>
            <span className="text-[#C5A059] font-bold text-2xl">{pricing.discounted}</span>
          </div>
        ) : (
          <p className="text-2xl font-bold text-[#C5A059]">{displayPrice()}</p>
        )}
        <p className="text-xs text-gray-500 mt-1">* Precio no incluye impuestos</p>
      </div>

      <Link
        to={`/servicios/${service.id}`}
        className="w-full bg-[#05121F] text-white py-3 rounded-lg font-semibold hover:bg-[#C5A059] transition-colors flex items-center justify-center gap-2"
        aria-label={`Ver más detalles de ${service.title}`}
      >
        Ver más
        <ArrowRight className="w-4 h-4" aria-hidden="true" />
      </Link>
    </motion.div>
  )
}
