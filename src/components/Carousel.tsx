import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, PanInfo } from 'framer-motion'
import { Calendar, TrendingUp, Award } from 'lucide-react'
import { SETMORE_LINK } from '@/data/setmore'

interface Slide {
  title: string
  subtitle: string
  stats?: { value: string; label: string }[]
  bullets?: string[]
  cta: string
  icon: React.ComponentType<{ size?: number | string; className?: string }>
}

const slides: Slide[] = [
  {
    title: 'Transforma tu operación en ventas predecibles',
    subtitle: 'Optimizamos tu presencia digital y automatizamos procesos clave para escalar tu PyME sin sobrecargar tu tiempo',
    cta: 'Solicita tu consultoría estratégica gratuita',
    icon: TrendingUp,
  },
  {
    title: 'Más de 150 proyectos con resultados medibles',
    subtitle: 'PyMEs en Chile, México, Colombia y Argentina escalan sin aumentar personal',
    stats: [
      { value: '+150%', label: 'llamadas desde Google' },
      { value: '15h+', label: 'horas recuperadas/semana' },
      { value: '40%', label: 'más leads calificados' },
    ],
    cta: 'Ver casos de éxito',
    icon: Award,
  },
  {
    title: 'Consultoría estratégica gratuita',
    subtitle: '30 minutos para identificar oportunidades de crecimiento y crear tu plan de acción personalizado',
    bullets: [
      'Auditoría digital completa',
      'Plan de crecimiento predecible',
      'Sin obligación de contratar',
    ],
    cta: 'Agenda tu consultoría gratuita',
    icon: Calendar,
  },
]

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const carouselRef = useRef<HTMLDivElement>(null)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  const resetTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current)
    }
    timerRef.current = setInterval(() => {
      if (!isDragging) {
        setCurrentIndex((prev) => (prev + 1) % slides.length)
      }
    }, 20000)
  }

  useEffect(() => {
    resetTimer()
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length)
    resetTimer()
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length)
    resetTimer()
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    resetTimer()
  }

  const handleDragStart = () => {
    setIsDragging(true)
    if (timerRef.current) clearInterval(timerRef.current)
  }

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    setIsDragging(false)
    if (info.offset.x < -50) {
      nextSlide()
    } else if (info.offset.x > 50) {
      prevSlide()
    } else {
      resetTimer()
    }
  }

  return (
    <div className="relative w-full max-w-4xl mx-auto" ref={carouselRef}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          className="text-center cursor-grab active:cursor-grabbing min-h-[500px] md:min-h-[480px] flex flex-col justify-center"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-accent/20 rounded-full mb-6">
            {(() => {
              const Icon = slides[currentIndex].icon
              return <Icon size={32} className="text-brand-accent" />
            })()}
          </div>

          <h2 className="text-4xl md:text-6xl font-heading font-bold text-white leading-tight tracking-tight mb-6">
            {slides[currentIndex].title}
          </h2>

          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-6">
            {slides[currentIndex].subtitle}
          </p>

          {slides[currentIndex].stats && (
            <div className="flex flex-wrap items-center justify-center gap-8 mb-6">
              {slides[currentIndex].stats?.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl sm:text-3xl font-heading font-bold text-brand-accent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/70">{stat.label}</div>
                </div>
              ))}
            </div>
          )}

          {slides[currentIndex].bullets && (
            <ul className="text-left max-w-md mx-auto mb-6 space-y-2">
              {slides[currentIndex].bullets?.map((bullet, index) => (
                <li key={index} className="flex items-center gap-2 text-white/80">
                  <span className="text-brand-accent">→</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          )}

          <div className="flex justify-center">
            <a
              href={SETMORE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-brand-accent text-white font-semibold rounded-xl hover:bg-amber-600 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-sm md:text-base whitespace-nowrap"
            >
              <Calendar size={18} />
              {slides[currentIndex].cta}
            </a>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation dots */}
      <div className="flex items-center justify-center gap-2 mt-8">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentIndex ? 'bg-brand-accent w-8' : 'bg-white/30 hover:bg-white/50'
            }`}
            aria-label={`Ir a slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Arrow navigation */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-12 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
        aria-label="Slide anterior"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-12 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
        aria-label="Slide siguiente"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>
    </div>
  )
}
