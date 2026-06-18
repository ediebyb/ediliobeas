import { motion } from 'framer-motion'
import { CLIENTS } from '@/data/clients'
import { staggerContainer, fadeInUp } from '@/utils/animations'

export default function ClientsSection() {
  return (
    <section
      id="clientes"
      className="py-16 bg-[#05121F] border-y border-white/5"
      aria-labelledby="clients-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="text-center mb-12"
        >
          <motion.p
            variants={fadeInUp}
            className="text-sm text-[#C5A059] font-semibold uppercase tracking-widest mb-2"
          >
            Empresas que confían en mí
          </motion.p>
          <motion.h2
            id="clients-heading"
            variants={fadeInUp}
            className="text-2xl md:text-3xl font-bold text-white"
          >
            Negocios que dejaron el caos operativo atrás
          </motion.h2>
        </motion.div>

        {/* Desktop grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="hidden sm:grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {CLIENTS.map((client) => (
            <motion.div
              key={client.id}
              variants={fadeInUp}
              className="group flex items-center justify-center p-6 rounded-xl border border-white/10 bg-white/5 hover:border-[#C5A059]/50 hover:bg-[#C5A059]/5 transition-all duration-300 cursor-default"
            >
              {client.logo ? (
                <img
                  src={client.logo}
                  alt={`Logo ${client.name}`}
                  className="h-12 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 opacity-60 group-hover:opacity-100"
                />
              ) : (
                <span className="text-white/50 group-hover:text-[#C5A059] font-semibold text-sm text-center transition-colors duration-300">
                  {client.name}
                </span>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile scroll carousel */}
        <div className="sm:hidden overflow-x-auto pb-4 -mx-4 px-4">
          <div className="flex gap-3 w-max">
            {CLIENTS.map((client) => (
              <div
                key={client.id}
                className="flex items-center justify-center p-4 rounded-xl border border-white/10 bg-white/5 min-w-[140px] h-16"
              >
                {client.logo ? (
                  <img
                    src={client.logo}
                    alt={`Logo ${client.name}`}
                    className="h-8 object-contain filter grayscale opacity-60"
                  />
                ) : (
                  <span className="text-white/50 font-semibold text-xs text-center">
                    {client.name}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
