import { motion } from 'framer-motion'
import type { Service } from '@/types'
import { cardHover } from '@/utils/animations'
import { ArrowRight } from 'lucide-react'

interface ServiceCardProps {
  service: Service
  onOpenModal: (service: Service) => void
}

export default function ServiceCard({ service, onOpenModal }: ServiceCardProps) {
  // Get lowest price from pricing object
  const getLowestPrice = () => {
    const prices = Object.entries(service.pricing)
      .filter(([key]) => key !== 'note')
      .map(([_, value]) => value)
    if (prices.length === 0) return ''
    const lowest = prices[0]
    return lowest.startsWith('Desde') ? lowest : `Desde ${lowest}`
  }

  return (
    <motion.div
      variants={cardHover}
      initial="rest"
      whileHover="hover"
      className="p-6 hover:shadow-xl transition-shadow duration-300 bg-white rounded-xl border border-gray-100 flex flex-col h-full"
    >
      {/* Image - medium size, centered */}
      <div className="w-full h-48 mb-4 rounded-xl overflow-hidden bg-gray-50">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-[#05121F] mb-3">
        {service.title}
      </h3>

      {/* Problem - short phrase in gold */}
      <p className="text-sm font-semibold text-[#D4AF6A] mb-2">
        {service.problem}
      </p>

      {/* Executive Summary - structured and uniform */}
      <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
        {service.executiveSummary}
      </p>

      {/* Price - only lowest with "Desde" */}
      <div className="mb-4 mt-auto">
        <p className="text-2xl font-bold text-[#D4AF6A]">
          {getLowestPrice()}
        </p>
        <p className="text-xs text-gray-500 mt-1">
          * Precio no incluye impuestos
        </p>
      </div>

      {/* Button "Ver más" */}
      <button
        onClick={() => onOpenModal(service)}
        className="w-full bg-[#05121F] text-white py-3 rounded-lg font-semibold hover:bg-[#0F2436] transition-colors flex items-center justify-center gap-2"
        aria-label={`Ver más detalles de ${service.title}`}
      >
        Ver más →
        <ArrowRight className="w-4 h-4" aria-hidden="true" />
      </button>
    </motion.div>
  )
}
