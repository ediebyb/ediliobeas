import { motion } from 'framer-motion'
import { Calendar } from 'lucide-react'
import { BIO } from '@/data/about'
import { staggerContainer, fadeInUp, slideInLeft } from '@/utils/animations'
import { SETMORE_LINK } from '@/data/setmore'

export default function AboutSection() {
  return (
    <section
      id="sobre-mi"
      className="py-20 bg-white"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">

          {/* Left column: images */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="flex flex-col items-center gap-6 order-2 md:order-1"
          >
            <div className="relative">
              <img
                src="/perfil-edie.jpg"
                alt="Foto de Edilio Beas — Consultor Digital"
                className="w-64 h-64 md:w-56 md:h-56 lg:w-72 lg:h-72 rounded-3xl object-cover shadow-2xl"
              />
              <div className="absolute -top-2 -right-2 md:-top-3 md:-right-3 bg-[#C5A059] text-white px-4 py-2 md:px-5 md:py-2 rounded-xl shadow-xl">
                <div className="text-xl md:text-2xl font-bold">8+</div>
                <div className="text-xs">Años experiencia profesional</div>
              </div>
              <div className="absolute -bottom-2 -left-2 md:-bottom-3 md:-left-3 bg-[#05121F] text-white px-3 py-2 md:px-4 md:py-2 rounded-xl shadow-xl">
                <div className="text-xs font-bold">Marketing · Ventas</div>
                <div className="text-xs">Gestión Digital</div>
              </div>
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%]">
                <div className="w-full h-full border-2 border-[#C5A059]/20 rounded-3xl rotate-3" />
              </div>
            </div>

            <img
              src="/logo_oficial_digital.png"
              alt="Edilio Beas — Consultor Digital"
              className="w-64 h-auto md:w-56 lg:w-72 rounded-3xl object-contain shadow-2xl bg-[#05121F] p-4"
            />

            <div className="w-full rounded-2xl overflow-hidden shadow-lg border border-[#C5A059]/20">
              <img
                src="/banner-autoridad.png"
                alt="Escala tu negocio y tus ingresos — Edilio Beas Consultor Digital"
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>

          {/* Right column: text + CTA at bottom */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="flex flex-col space-y-4 md:space-y-3 order-1 md:order-2"
          >
            <motion.span variants={fadeInUp} className="inline-block text-brand-primary font-semibold text-sm uppercase tracking-wider">
              Sobre mí
            </motion.span>

            <motion.h2
              id="about-heading"
              variants={fadeInUp}
              className="text-2xl md:text-3xl font-heading font-bold text-brand-dark leading-tight"
            >
              Consultor Digital Especialista en{' '}
              <span className="text-brand-primary">Marketing · Ventas · Gestión PyMEs</span>
            </motion.h2>

            <motion.div variants={fadeInUp} className="space-y-3">
              {BIO.split('\n\n').map((paragraph, index) => (
                <p key={index} className={`text-sm md:text-base leading-relaxed ${
                  index === 1 ? 'text-brand-primary font-semibold text-base' : 'text-gray-600'
                }`}>
                  {paragraph}
                </p>
              ))}
            </motion.div>

            {/* CTA — full width rectangular, below all text */}
            <motion.div variants={fadeInUp} className="pt-4">
              <a
                href={SETMORE_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full px-6 py-4 bg-[#05121F] text-white font-bold rounded-xl hover:bg-[#C5A059] transition-all duration-200 shadow-lg hover:shadow-[#C5A059]/30 text-base border border-[#C5A059]/30"
              >
                <Calendar size={20} aria-hidden="true" />
                Agenda tu 1ª Consultoría Gratuita — Es gratis
              </a>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
