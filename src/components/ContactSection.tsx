import { motion } from 'framer-motion'

import { Mail, Phone, MapPin, Linkedin, Instagram, Youtube, Facebook, MessageCircle, MessageSquare, Music, X } from 'lucide-react'

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

        {/* Encabezado */}

        <motion.div

          variants={staggerContainer}

          initial="hidden"

          whileInView="visible"

          viewport={{ once: true, margin: '-100px' }}

          className="text-center mb-16"

        >

          <motion.span

            variants={fadeInUp}

            className="inline-block text-brand-primary font-semibold text-sm uppercase tracking-wider mb-3"

          >

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

            Sin compromiso. Analizamos tu negocio y te digo exactamente cómo puedo ayudarte.

          </motion.p>

        </motion.div>



        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Info de contacto */}

          <motion.div

            variants={slideInLeft}

            initial="hidden"

            whileInView="visible"

            viewport={{ once: true, margin: '-100px' }}

            className="space-y-8"

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

                    <a

                      href="mailto:edilio.beas@gmail.com"

                      className="text-brand-dark font-medium hover:text-brand-primary transition-colors"

                    >

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

                    <a

                      href="https://wa.me/56941522980"

                      target="_blank"

                      rel="noopener noreferrer"

                      className="text-brand-dark font-medium hover:text-brand-primary transition-colors"

                    >

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



            {/* Disponibilidad */}

            <div className="bg-brand-primary/5 rounded-2xl p-6 border border-brand-primary/10">

              <h4 className="font-heading font-semibold text-brand-dark mb-2">

                Horario de atención

              </h4>

              <p className="text-gray-600 text-sm">

                Lunes a Viernes: 9:00 – 17:00 (hora Chile)

              </p>

            </div>

            {/* Sección de Redes Sociales - 9 iconos */}

            <div className="mt-8">

              <h4 className="text-[#05121F] font-semibold mb-4">Sígueme en:</h4>

              <div className="grid grid-cols-3 md:grid-cols-5 gap-4 max-w-4xl mx-auto">

                <a

                  href="https://instagram.com/ediliobeas"

                  target="_blank"

                  rel="noopener noreferrer"

                  className="flex flex-col items-center gap-2 p-4 bg-white border border-gray-200 rounded-lg hover:border-[#D4AF6A] hover:shadow-lg transition-all group"

                  aria-label="Instagram"

                >

                  <div className="p-2 bg-[#05121F] rounded-lg group-hover:bg-[#C5A059] transition-colors">
                    <Instagram className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-xs text-gray-600 group-hover:text-[#C5A059] font-medium">Instagram</span>

                </a>

                <a

                  href="https://threads.net/@ediliobeas"

                  target="_blank"

                  rel="noopener noreferrer"

                  className="flex flex-col items-center gap-2 p-4 bg-white border border-gray-200 rounded-lg hover:border-[#D4AF6A] hover:shadow-lg transition-all group"

                  aria-label="Threads"

                >

                  <div className="p-2 bg-[#05121F] rounded-lg group-hover:bg-[#C5A059] transition-colors">
                    <MessageSquare className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-xs text-gray-600 group-hover:text-[#C5A059] font-medium">Threads</span>

                </a>

                <a

                  href="https://tiktok.com/@ediliobeas"

                  target="_blank"

                  rel="noopener noreferrer"

                  className="flex flex-col items-center gap-2 p-4 bg-white border border-gray-200 rounded-lg hover:border-[#D4AF6A] hover:shadow-lg transition-all group"

                  aria-label="TikTok"

                >

                  <div className="p-2 bg-[#05121F] rounded-lg group-hover:bg-[#C5A059] transition-colors">
                    <Music className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-xs text-gray-600 group-hover:text-[#C5A059] font-medium">TikTok</span>

                </a>

                <a

                  href="https://twitter.com/ediliobeas"

                  target="_blank"

                  rel="noopener noreferrer"

                  className="flex flex-col items-center gap-2 p-4 bg-white border-2 border-gray-200 rounded-lg hover:border-[#C5A059] hover:shadow-xl hover:scale-105 transition-all group"

                  aria-label="X (Twitter)"

                >

                  <div className="p-2 bg-[#05121F] rounded-lg group-hover:bg-[#C5A059] transition-colors">
                    <X className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-xs text-gray-600 group-hover:text-[#C5A059] font-medium">X</span>

                </a>

                <a

                  href="https://linkedin.com/in/ediliobeas"

                  target="_blank"

                  rel="noopener noreferrer"

                  className="flex flex-col items-center gap-2 p-4 bg-white border border-gray-200 rounded-lg hover:border-[#D4AF6A] hover:shadow-lg transition-all group"

                  aria-label="LinkedIn"

                >

                  <div className="p-2 bg-[#05121F] rounded-lg group-hover:bg-[#C5A059] transition-colors">
                    <Linkedin className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-xs text-gray-600 group-hover:text-[#C5A059] font-medium">LinkedIn</span>

                </a>

                <a

                  href="https://youtube.com/@ediliobeas"

                  target="_blank"

                  rel="noopener noreferrer"

                  className="flex flex-col items-center gap-2 p-4 bg-white border border-gray-200 rounded-lg hover:border-[#D4AF6A] hover:shadow-lg transition-all group"

                  aria-label="YouTube"

                >

                  <div className="p-2 bg-[#05121F] rounded-lg group-hover:bg-[#C5A059] transition-colors">
                    <Youtube className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-xs text-gray-600 group-hover:text-[#C5A059] font-medium">YouTube</span>

                </a>

                <a

                  href="https://facebook.com/ediliobeas"

                  target="_blank"

                  rel="noopener noreferrer"

                  className="flex flex-col items-center gap-2 p-4 bg-white border border-gray-200 rounded-lg hover:border-[#D4AF6A] hover:shadow-lg transition-all group"

                  aria-label="Facebook"

                >

                  <div className="p-2 bg-[#05121F] rounded-lg group-hover:bg-[#C5A059] transition-colors">
                    <Facebook className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-xs text-gray-600 group-hover:text-[#C5A059] font-medium">Facebook</span>

                </a>

                <a

                  href="https://wa.me/56941522980"

                  target="_blank"

                  rel="noopener noreferrer"

                  className="flex flex-col items-center gap-2 p-4 bg-white border border-gray-200 rounded-lg hover:border-[#D4AF6A] hover:shadow-lg transition-all group"

                  aria-label="WhatsApp"

                >

                  <div className="p-2 bg-[#05121F] rounded-lg group-hover:bg-[#C5A059] transition-colors">
                    <MessageCircle className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-xs text-gray-600 group-hover:text-[#C5A059] font-medium">WhatsApp</span>

                </a>

                <a

                  href="https://t.me/ediliobeas"

                  target="_blank"

                  rel="noopener noreferrer"

                  className="flex flex-col items-center gap-2 p-4 bg-white border border-gray-200 rounded-lg hover:border-[#D4AF6A] hover:shadow-lg transition-all group"

                  aria-label="Telegram"

                >

                  <div className="p-2 bg-[#05121F] rounded-lg group-hover:bg-[#C5A059] transition-colors">
                    <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                    </svg>
                  </div>
                  <span className="text-xs text-gray-600 group-hover:text-[#C5A059] font-medium">Telegram</span>

                </a>

                <a

                  href="mailto:edilio.beas@gmail.com"

                  className="flex flex-col items-center gap-2 p-4 bg-white border border-gray-200 rounded-lg hover:border-[#D4AF6A] hover:shadow-lg transition-all group"

                  aria-label="Email"

                >

                  <div className="p-2 bg-[#05121F] rounded-lg group-hover:bg-[#C5A059] transition-colors">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-xs text-gray-600 group-hover:text-[#C5A059] font-medium">Email</span>

                </a>

              </div>

            </div>

          </motion.div>



          {/* Formulario */}

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

