import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import Carousel from './Carousel'

export default function HeroSection() {
  const handleScrollDown = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const target = document.querySelector('#servicios')
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#0F2436] via-[#05121F] to-[#05121F] overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Fondo decorativo con gradiente radial */}
      <div className="absolute inset-0 opacity-20" aria-hidden="true">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#C5A059] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#0F2436] rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col items-center justify-center">
        <Carousel />

        {/* Prueba social - Métricas B2B */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-6 md:gap-10 text-center"
        >
          <div className="flex items-center gap-2">
            <span className="text-[#C5A059] font-bold text-2xl">+150</span>
            <span className="text-white/70 text-sm">proyectos exitosos</span>
          </div>
          <div className="w-px h-8 bg-white/20 hidden md:block" />
          <div className="flex items-center gap-2">
            <span className="text-[#C5A059] font-bold text-2xl">+40%</span>
            <span className="text-white/70 text-sm">ventas promedio en 90 días</span>
          </div>
          <div className="w-px h-8 bg-white/20 hidden md:block" />
          <div className="flex items-center gap-2">
            <span className="text-[#C5A059] font-bold text-2xl">4</span>
            <span className="text-white/70 text-sm">países en LATAM</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#servicios"
        onClick={handleScrollDown}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-[#C5A059] transition-colors"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        aria-label="Desplazarse hacia abajo"
      >
        <ArrowDown size={24} />
      </motion.a>
    </section>
  )
}
