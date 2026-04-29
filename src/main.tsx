import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'

const rootElement = document.getElementById('root')

if (!rootElement) {
  throw new Error('No se encontró el elemento root en el DOM.')
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
)

// Detectar ruta al cargar y hacer scroll a la sección correspondiente
// Esto permite links directos tipo: ediliobeas.pages.dev/servicios
const handleDirectLink = () => {
  const path = window.location.pathname
  const pathToSection: Record<string, string> = {
    '/': 'inicio',
    '/inicio': 'inicio',
    '/servicios': 'servicios',
    '/sobre-mi': 'sobre-mi',
    '/testimonios': 'testimonios',
    '/contacto': 'contacto',
  }

  const sectionId = pathToSection[path]
  if (sectionId && path !== '/') {
    // Esperar a que React renderice el DOM
    setTimeout(() => {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }, 100)
  }
}

// Ejecutar al cargar
handleDirectLink()
