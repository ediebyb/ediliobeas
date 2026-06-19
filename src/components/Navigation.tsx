import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS } from '@/data/navigation'
import { SETMORE_LINK } from '@/data/setmore'



export default function Navigation() {
  const location = useLocation()
  const navigate = useNavigate()
  const isHomePage = location.pathname === '/'

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('inicio')



  useEffect(() => {

    const handleScroll = () => {

      setIsScrolled(window.scrollY > 20)

      // Scroll spy - detectar seccion activa
      const sections = NAV_LINKS
        .filter(link => link.href.startsWith('#'))
        .map(link => link.href.replace('#', ''))
      let current = 'inicio'
      
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100) {
            current = section
          }
        }
      }
      
      setActiveSection(current)

    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    handleScroll() // Llamar una vez al inicio

    return () => window.removeEventListener('scroll', handleScroll)

  }, [])



  const handleNavClick = (e: React.MouseEvent, href: string) => {
    // Page routes (start with / but not /#) — navigate directly
    if (href.startsWith('/') && !href.startsWith('/#')) {
      setIsMenuOpen(false)
      navigate(href)
      return
    }

    e.preventDefault()

    if (isHomePage) {
      // On home, smooth scroll to section
      const sectionId = href.replace('#', '').replace('/', '')
      const target = document.getElementById(sectionId)
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      // On sub-page, navigate to home with hash — ScrollToTop will handle the scroll
      navigate(`/${href}`)
    }

    setIsMenuOpen(false)
  }



  return (

    <header

      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#05121F]/95 backdrop-blur-md shadow-lg shadow-black/20 border-b border-white/10'
          : 'bg-[#05121F]/80 backdrop-blur-sm border-b border-white/5'
      }`}

    >

      <nav

        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"

        aria-label="Navegación principal"

      >

        <div className="flex items-center justify-between h-20">

          {/* Logo / Marca */}
          <Link
            to="/"
            onClick={(e) => {
              if (isHomePage) {
                e.preventDefault()
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }
              setIsMenuOpen(false)
            }}
            className="flex items-center"
            aria-label="Edilio Beas - Ir al inicio"
          >
            <img
              src="/logomini.png"
              alt="Edilio Beas — Consultor Digital"
              className="h-12 w-auto rounded-lg"
            />
          </Link>



          {/* Links desktop */}

          <ul className="hidden md:flex items-center space-x-2" role="list">

            {NAV_LINKS.map((link) => {
              const isPageRoute = link.href.startsWith('/') && !link.href.startsWith('/#')
              const isActive = isPageRoute
                ? location.pathname.startsWith(link.href)
                : activeSection === link.href.replace('#', '')

              return (

                <li key={link.href} className="relative">

                  <a

                    href={link.href}

                    onClick={(e) => handleNavClick(e, link.href)}

                    className={`relative px-4 py-2 font-medium transition-colors duration-200 text-sm rounded-lg ${

                      isActive

                        ? 'text-[#05121F] bg-[#C5A059]'

                        : 'text-white hover:text-[#C5A059]'

                    }`}

                  >

                    {link.label}

                  </a>

                </li>

              )

            })}

          </ul>



          {/* CTA desktop */}

          <a

            href={SETMORE_LINK}

            target="_blank"

            rel="noopener noreferrer"

            className="hidden md:inline-flex items-center px-6 py-3 bg-[#C5A059] text-white text-sm font-semibold rounded-lg hover:shadow-lg hover:shadow-[#C5A059]/30 transition-all duration-200"

          >

            Agenda tu consultoría

          </a>



          {/* Botón hamburguesa */}

          <button

            type="button"

            className="md:hidden p-2 rounded-md text-white hover:text-[#C5A059] hover:bg-white/10 transition-colors"

            onClick={() => setIsMenuOpen(!isMenuOpen)}

            aria-expanded={isMenuOpen}

            aria-controls="mobile-menu"

            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}

          >

            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}

          </button>

        </div>



        {/* Menú móvil */}

        <AnimatePresence>

          {isMenuOpen && (

            <motion.div

              id="mobile-menu"

              initial={{ opacity: 0, height: 0 }}

              animate={{ opacity: 1, height: 'auto' }}

              exit={{ opacity: 0, height: 0 }}

              transition={{ duration: 0.2 }}

              className="md:hidden overflow-hidden bg-[#05121F]/95 backdrop-blur-md border-t border-white/10"

            >

              <ul className="py-2 space-y-1" role="list">

                {NAV_LINKS.map((link) => (

                  <li key={link.href}>

                    <a

                      href={link.href}

                      onClick={(e) => handleNavClick(e, link.href)}

                      className="block px-4 py-3 text-white hover:text-[#C5A059] hover:bg-white/10 font-medium transition-colors duration-200"

                    >

                      {link.label}

                    </a>

                  </li>

                ))}

                <li className="px-4 py-2">

                  <a

                    href={SETMORE_LINK}

                    target="_blank"

                    rel="noopener noreferrer"

                    className="block w-full text-center px-4 py-3 bg-[#C5A059] text-white text-sm font-semibold rounded-lg hover:shadow-lg hover:shadow-[#C5A059]/30 transition-all duration-200"

                  >

                    Agenda tu consultoría

                  </a>

                </li>

              </ul>

            </motion.div>

          )}

        </AnimatePresence>

      </nav>

    </header>

  )

}

