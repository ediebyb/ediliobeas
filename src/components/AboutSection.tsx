import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, ChevronLeft, ChevronRight } from 'lucide-react'
import { STATS, BIO } from '@/data/about'
import { staggerContainer, fadeInUp, slideInLeft } from '@/utils/animations'
import { SETMORE_LINK } from '@/data/setmore'

export default function AboutSection() {
  const [statsIndex, setStatsIndex] = useState(0)

  const nextStats = () => {
    setStatsIndex((prev) => (prev + 3) % STATS.length)
  }

  const prevStats = () => {
    setStatsIndex((prev) => (prev - 3 + STATS.length) % STATS.length)
  }

  const getCurrentStats = () => {
    const result = []
    for (let i = 0; i < 3; i++) {
      result.push(STATS[(statsIndex + i) % STATS.length])
    }
    return result
  }

  return (
    <section
      id="sobre-mi"
      className="py-20 bg-white"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Columna izquierda: Foto de perfil + Logo + CTA */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="flex flex-col items-center gap-6"
          >
            {/* Foto de perfil */}
            <div className="relative">
              <img
                src="/Perfil.jpg"
                alt="Foto de Edilio Beas"
                className="w-64 h-64 md:w-56 md:h-56 lg:w-72 lg:h-72 rounded-3xl object-cover shadow-2xl"
              />

              {/* Badge flotante 1 - Experiencia */}
              <div className="absolute -top-2 -right-2 md:-top-3 md:-right-3 bg-[#C5A059] text-white px-4 py-2 md:px-5 md:py-2 rounded-xl shadow-xl">
                <div className="text-xl md:text-2xl font-bold">10+</div>
                <div className="text-xs">Años de experiencia</div>
              </div>

              {/* Badge flotante 2 - Proyectos */}
              <div className="absolute -bottom-2 -left-2 md:-bottom-3 md:-left-3 bg-[#05121F] text-white px-4 py-2 md:px-5 md:py-2 rounded-xl shadow-xl">
                <div className="text-xl md:text-2xl font-bold">150+</div>
                <div className="text-xs">Proyectos exitosos</div>
              </div>

              {/* Elemento decorativo - Líneas doradas */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%]">
                <div className="w-full h-full border-2 border-[#C5A059]/20 rounded-3xl rotate-3" />
              </div>
            </div>

            {/* Logo debajo de la foto - mismo tamaño */}
            <img
              src="/logo 1.png"
              alt="Edilio Beas Logo"
              className="w-64 h-64 md:w-56 md:h-56 lg:w-72 lg:h-72 rounded-3xl object-contain shadow-2xl bg-[#05121F] p-4"
            />

            {/* CTA centrado */}
            <motion.div variants={fadeInUp}>
              <a
                href={SETMORE_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm md:text-base bg-brand-primary text-white font-semibold rounded-xl hover:bg-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                <Calendar size={18} aria-hidden="true" />
                Agenda tu 1ª Consultoría Gratuita
              </a>
            </motion.div>
          </motion.div>

          {/* Contenido */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="space-y-4 md:space-y-3"
          >
            <motion.span
              variants={fadeInUp}
              className="inline-block text-brand-primary font-semibold text-sm uppercase tracking-wider"
            >
              Sobre mí
            </motion.span>

            <motion.h2
              id="about-heading"
              variants={fadeInUp}
              className="text-2xl md:text-3xl font-heading font-bold text-brand-dark leading-tight"
            >
              Consultor especialista en{' '}
              <span className="text-brand-primary">PyMEs de LATAM</span>
            </motion.h2>

            <motion.div variants={fadeInUp} className="space-y-3">
              {BIO.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </motion.div>

            {/* Stats - Desktop carousel (3 at a time) */}
            <motion.div variants={fadeInUp} className="hidden md:block">
              <div className="grid grid-cols-3 gap-2 py-4 border-t border-b border-gray-100">
                {getCurrentStats().map((stat) => (
                  <div key={`${stat.label}-${statsIndex}`} className="text-center">
                    <div className="text-xl md:text-2xl font-heading font-bold text-brand-primary">
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
                    {stat.description && (
                      <div className="text-xs text-gray-400 mt-1 hidden lg:block">{stat.description}</div>
                    )}
                  </div>
                ))}
              </div>
              {/* Navigation */}
              <div className="flex items-center justify-center gap-4 mt-4">
                <button
                  type="button"
                  onClick={prevStats}
                  className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
                  aria-label="Estadísticas anteriores"
                >
                  <ChevronLeft size={20} />
                </button>
                <div className="flex gap-2">
                  {[0, 1].map((i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setStatsIndex(i * 3)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        statsIndex === i * 3 ? 'bg-brand-primary w-4' : 'bg-gray-300'
                      }`}
                      aria-label={`Ver estadísticas ${i + 1}`}
                    />
                  ))}
                </div>
                <button
                  type="button"
                  onClick={nextStats}
                  className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
                  aria-label="Siguientes estadísticas"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </motion.div>

            {/* Stats - Mobile (show all 6 in 2 rows) */}
            <motion.div
              variants={fadeInUp}
              className="md:hidden grid grid-cols-2 gap-4 py-6 border-t border-b border-gray-100"
            >
              {STATS.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-heading font-bold text-brand-primary">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
                  {stat.description && (
                    <div className="text-xs text-gray-400 mt-1 line-clamp-2">{stat.description}</div>
                  )}
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
