import { motion } from 'framer-motion'
import { Mail, Phone, MapPin } from 'lucide-react'
import { staggerContainer, fadeInUp, slideInLeft, slideInRight } from '@/utils/animations'
import ContactForm from './ContactForm'

export default function ContactSection() {
  return (
    <section
      id="contacto"
      className="py-20 bg-brand-light"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <motion.span variants={fadeInUp} className="inline-block text-brand-primary font-semibold text-sm uppercase tracking-wider mb-3">
            Hablemos
          </motion.span>
          <motion.h2
            id="contact-heading"
            variants={fadeInUp}
            className="text-3xl sm:text-4xl font-heading font-bold text-brand-dark mb-4"
          >
            Agenda tu 1ª Consultoría Gratuita
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-gray-600 max-w-2xl mx-auto text-lg">
            Sin compromiso. Analizamos tu negocio y te digo exactamente cómo puedo ayudarte en 30 minutos.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left: Contact info + image */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-xl font-heading font-semibold text-brand-dark mb-6">
                Información de contacto
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-brand-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail size={20} className="text-brand-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Correo electrónico</p>
                    <a href="mailto:edilio.beas@gmail.com" className="text-brand-dark font-medium hover:text-brand-primary transition-colors">
                      edilio.beas@gmail.com
                    </a>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-brand-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone size={20} className="text-brand-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">WhatsApp</p>
                    <a href="https://wa.me/56941522980" target="_blank" rel="noopener noreferrer" className="text-brand-dark font-medium hover:text-brand-primary transition-colors">
                      +56 9 4152 2980
                    </a>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-brand-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} className="text-brand-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Ubicación</p>
                    <p className="text-brand-dark font-medium">Chile — Atención en toda LATAM</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Propuesta visual de autoridad */}
            <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
              <img
                src="/ss-consultoria.png"
                alt="Propuesta de consultoría digital — Edilio Beas"
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100"
          >
            <ContactForm />
          </motion.div>

        </div>
      </div>
    </section>
  )
}
