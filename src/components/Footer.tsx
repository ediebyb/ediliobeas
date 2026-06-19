import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Shield, CreditCard, Bitcoin, Landmark, ArrowRight, Instagram, Linkedin, Youtube, Facebook, MessageCircle, Music, MessageSquare, Mail } from 'lucide-react'
import { fadeIn } from '@/utils/animations'
import { SETMORE_LINK } from '@/data/setmore'

const CURRENT_YEAR = new Date().getFullYear()

const SOCIAL_LINKS = [
  { href: 'https://instagram.com/ediliobeas', label: 'Instagram', icon: Instagram },
  { href: 'https://linkedin.com/in/ediliobeas', label: 'LinkedIn', icon: Linkedin },
  { href: 'https://youtube.com/@ediliobeas', label: 'YouTube', icon: Youtube },
  { href: 'https://facebook.com/ediliobeas', label: 'Facebook', icon: Facebook },
  { href: 'https://tiktok.com/@ediliobeas', label: 'TikTok', icon: Music },
  { href: 'https://threads.net/@ediliobeas', label: 'Threads', icon: MessageSquare },
  { href: 'https://wa.me/56941522980', label: 'WhatsApp', icon: MessageCircle },
  { href: 'mailto:edilio.beas@gmail.com', label: 'Email', icon: Mail },
]

export default function Footer() {
  return (
    <motion.footer
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="bg-tech-blue border-t border-white/10"
      aria-label="Pie de página"
    >
      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* GRID PRINCIPAL: Logo | RRSS+Horario (centro) | Nav+Pagos (derecha) */}
        <div className="grid md:grid-cols-3 gap-8 mb-10">

          {/* COL 1: Logo + CTA */}
          <div>
            <img src="/logomini.png" alt="Edilio Beas — Consultor Digital" className="h-12 w-auto mb-4 rounded-lg" />
            <h3 className="text-white font-bold text-lg mb-3">¿Listo para digitalizar tu negocio?</h3>
            <p className="text-gray-400 mb-5 text-sm">
              Agenda tu diagnóstico digital gratuito de 30 minutos.
            </p>
            <a href={SETMORE_LINK} target="_blank" rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 bg-[#C5A059] text-white px-5 py-3 rounded-lg font-semibold hover:bg-[#D4AF6A] transition-all duration-300 hover:shadow-lg hover:shadow-[#C5A059]/30"
            >
              Agenda tu consultoría
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <div className="mt-5 flex items-center gap-2 text-sm text-gray-500">
              <div className="p-1 rounded bg-[#C5A059]/20"><Shield className="w-4 h-4 text-[#C5A059]" /></div>
              <span>Confidencialidad 100% garantizada</span>
            </div>
          </div>

          {/* COL 2 (CENTRO): Redes Sociales + Horario */}
          <div>
            <h4 className="text-white font-semibold mb-3">Sígueme en</h4>
            <div className="grid grid-cols-4 gap-2 mb-5">
              {SOCIAL_LINKS.map(({ href, label, icon: Icon }) => (
                <a key={label} href={href} target={href.startsWith('mailto') ? undefined : '_blank'} rel="noopener noreferrer"
                  aria-label={label}
                  className="flex flex-col items-center gap-1 p-2 rounded-xl bg-white/5 hover:bg-[#C5A059]/20 border border-white/10 hover:border-[#C5A059]/40 transition-all duration-200 group"
                >
                  <Icon className="w-4 h-4 text-white/70 group-hover:text-[#C5A059] transition-colors" />
                  <span className="text-xs text-white/40 group-hover:text-[#C5A059]/80 transition-colors leading-none">{label}</span>
                </a>
              ))}
            </div>
            <div className="bg-white/5 rounded-xl p-4 border border-white/10">
              <h5 className="text-white/70 text-xs font-semibold uppercase tracking-widest mb-2">Horario de atención</h5>
              <p className="text-white text-sm font-medium">Lunes – Viernes</p>
              <p className="text-[#C5A059] text-sm font-bold">9:00 – 18:00 hrs (Chile)</p>
              <div className="flex items-center gap-2 mt-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs text-green-400">Disponible ahora</span>
              </div>
            </div>
          </div>

          {/* COL 3 (DERECHA): Navegación + Métodos de Pago */}
          <div className="flex flex-col gap-6">
            <div>
              <h4 className="text-white font-semibold mb-3">Navegación</h4>
              <nav className="flex flex-col gap-2">
                <Link to="/servicios" className="text-gray-400 hover:text-[#C5A059] text-sm transition-colors">Servicios</Link>
                <Link to="/blog" className="text-gray-400 hover:text-[#C5A059] text-sm transition-colors">Blog</Link>
                <a href="/#sobre-mi" className="text-gray-400 hover:text-[#C5A059] text-sm transition-colors">Sobre mí</a>
                <a href="/#testimonios" className="text-gray-400 hover:text-[#C5A059] text-sm transition-colors">Testimonios</a>
                <a href="/#contacto" className="text-gray-400 hover:text-[#C5A059] text-sm transition-colors">Contacto</a>
              </nav>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Métodos de pago</h4>
              <div className="flex flex-col gap-2">
                {[{ icon: CreditCard, label: 'PayPal' }, { icon: Bitcoin, label: 'Criptomonedas' }, { icon: Landmark, label: 'Transferencia Bancaria' }].map(({ icon: Icon, label }) => (
                  <div key={label} className="group flex items-center gap-3 text-gray-300 hover:text-[#C5A059] transition-all duration-300">
                    <div className="p-1.5 rounded-lg bg-white/5 group-hover:bg-[#C5A059]/20 transition-colors duration-300">
                      <Icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <span className="text-sm">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* LÍNEA DIVISORIA */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-500 text-sm">
            © {CURRENT_YEAR} Edilio Beas — Consultor Digital. Todos los derechos reservados.
          </div>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="/terminos" className="hover:text-white transition-colors duration-300">Términos y Condiciones</a>
            <a href="/privacidad" className="hover:text-white transition-colors duration-300">Política de Privacidad</a>
          </div>
        </div>
      </div>
    </motion.footer>
  )
}
