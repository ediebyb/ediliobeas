import { motion } from 'framer-motion'
import { CLIENTS } from '@/data/clients'
import { staggerContainer, fadeInUp } from '@/utils/animations'

// Duplicate list for seamless infinite loop
const TRACK = [...CLIENTS, ...CLIENTS, ...CLIENTS]

export default function ClientsSection() {
  return (
    <section
      id="clientes"
      className="py-16 bg-[#05121F] border-y border-white/5 overflow-hidden"
      aria-labelledby="clients-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="text-center"
        >
          <motion.p
            variants={fadeInUp}
            className="text-sm text-[#C5A059] font-semibold uppercase tracking-widest mb-2"
          >
            Empresas que han confiado en mí
          </motion.p>
          <motion.h2
            id="clients-heading"
            variants={fadeInUp}
            className="text-2xl md:text-3xl font-bold text-white"
          >
            Negocios reales que apostaron por la transformación digital
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-gray-400 mt-3 text-sm max-w-xl mx-auto"
          >
            Negocios con los que he trabajado y que decidieron aparecer aquí para ganar visibilidad digital extra.
          </motion.p>
        </motion.div>
      </div>

      {/* Infinite scroll track */}
      <div className="relative w-full">
        {/* Gradient masks on edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none bg-gradient-to-r from-[#05121F] to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none bg-gradient-to-l from-[#05121F] to-transparent" />

        {/* Scrolling track */}
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          {TRACK.map((client, i) => (
            <div
              key={`${client.id}-${i}`}
              className="flex-shrink-0 mx-4 flex items-center justify-center w-44 h-20 rounded-xl border border-white/10 bg-white/5 hover:border-[#C5A059]/50 hover:bg-[#C5A059]/5 transition-all duration-300 cursor-default group"
              aria-label={client.name}
            >
              {client.logo ? (
                <img
                  src={client.logo}
                  alt={`Logo ${client.name}`}
                  className="h-10 object-contain filter grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100 transition-all duration-300"
                />
              ) : (
                <span className="text-white/50 group-hover:text-[#C5A059] font-semibold text-xs text-center px-3 transition-colors duration-300 leading-tight">
                  {client.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
