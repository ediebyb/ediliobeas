import { MapPin, Globe, Smartphone, FileSpreadsheet, Database, TrendingUp } from 'lucide-react'
import type { Service } from '@/types'

export const SERVICES: Service[] = [
  {
    id: 'google-maps',
    icon: MapPin,
    title: 'Optimización/Creación de Perfil Google Mi Negocio',
    problem: '¿Tu negocio no aparece cuando te buscan en Google?',
    executiveSummary: 'Posiciona tu negocio en los primeros resultados de Google Maps. Optimización SEO local avanzada que aumenta llamadas y visitas en 60 días. Ideal para negocios locales que quieren destacar frente a su competencia.',
    fullDescription: 'Servicio completo de optimización y creación de perfiles Google Mi Negocio. Implementamos estrategias SEO locales avanzadas, gestión de reseñas y contenido visual profesional para maximizar tu visibilidad en búsquedas locales.',
    features: [
      '✓ Optimización SEO local con verificación completa',
      '✓ Estrategia de reseñas que generan confianza',
      '✓ Fotografías profesionales optimizadas',
      '✓ Publicación semanal de contenido',
      '✓ Reportes mensuales de rendimiento',
      '✓ Soporte continuo y actualizaciones'
    ],
    pricing: {
      optimization: '$270.000 CLP',
      creation: '$300.000 CLP',
      note: 'Precio no incluye impuestos'
    },
    timeline: '2-3 semanas',
    deliverables: [
      'Perfil 100% optimizado y verificado',
      'Estrategia de keywords locales',
      'Galería de 10+ fotos profesionales',
      'Plan de contenido mensual'
    ],
    image: '/google maps.png',
    cta: 'Ver más →'
  },
  {
    id: 'paginas-web',
    icon: Globe,
    title: 'Creación de Páginas Web con/sin carrito de compra',
    problem: '¿Sin web profesional o tu web actual no vende?',
    executiveSummary: 'Desarrollo de páginas web profesionales, rápidas y optimizadas para SEO. Desde landing pages hasta eCommerce completos. Tu negocio abierto 24/7 generando ventas automáticas mientras duermes.',
    fullDescription: 'Diseño y desarrollo de sitios web profesionales con las últimas tecnologías. Incluimos optimización SEO, velocidad de carga optimizada, diseño responsive perfecto en móviles y integración con herramientas de marketing y ventas.',
    features: [
      '✓ Diseño profesional 100% responsive',
      '✓ Optimización SEO técnica completa',
      '✓ Velocidad de carga optimizada (<3s)',
      '✓ Integración WhatsApp y formularios',
      '✓ eCommerce con pasarela de pagos',
      '✓ Panel autoadministrable intuitivo'
    ],
    pricing: {
      landing: '$570.000 CLP',
      ecommerce: 'Desde $970.000 CLP',
      note: 'Precio no incluye impuestos. Dominio y hosting no incluidos.'
    },
    timeline: '2-4 semanas',
    deliverables: [
      'Diseño personalizado único',
      'Optimización SEO completa',
      'Integración Google Analytics',
      'Capacitación de uso incluida',
      '30 días de soporte gratuito'
    ],
    image: '/pag web.png',
    cta: 'Ver más →'
  },
  {
    id: 'app-movil',
    icon: Smartphone,
    title: 'Desarrollo de Aplicación Móvil',
    problem: '¿Tus clientes necesitan una app para comprarte?',
    executiveSummary: 'Apps Android nativas que venden y fidelizan. Lleva tu negocio al bolsillo de tus clientes con una aplicación profesional, rápida y fácil de usar que aumenta la retención y ventas recurrentes.',
    fullDescription: 'Desarrollo de aplicaciones móviles nativas Android para funciones específicas: vitrina de productos, pagos, CRM o gestión de clientes. Incluye notificaciones push, integración con backend y publicación en Play Store.',
    features: [
      '✓ App nativa Android alto rendimiento',
      '✓ Vitrina de productos interactiva',
      '✓ Pasarela de pagos móvil integrada',
      '✓ CRM móvil para gestión clientes',
      '✓ Notificaciones push engagement',
      '✓ Publicación en Google Play Store'
    ],
    pricing: {
      basic: 'Desde $1.700.000 CLP',
      note: 'Precio no incluye impuestos. Costo final según funcionalidades.'
    },
    timeline: '6-10 semanas',
    deliverables: [
      'App funcional y testeada',
      'Diseño UX/UI profesional',
      'Integración backend completa',
      'Soporte 3 meses post-lanzamiento',
      'Manual de usuario'
    ],
    image: '/app.png',
    cta: 'Ver más →'
  },
  {
    id: 'google-sheet',
    icon: FileSpreadsheet,
    title: 'Desarrollo de Flujo de Trabajo Automatizado en Google Sheet',
    problem: '¿Pierdes horas en tareas manuales repetitivas?',
    executiveSummary: 'Automatiza procesos que quitan tiempo y generan errores. Workflows avanzados con Google Apps Script que recuperan 15+ horas semanales y eliminan errores humanos en tus datos.',
    fullDescription: 'Digitalización y automatización de procesos repetitivos mediante Google Apps Script. Creamos sistemas inteligentes que generan reportes automáticos, integran herramientas y proporcionan dashboards en tiempo real para toma de decisiones.',
    features: [
      '✓ Automatización reportes y emails',
      '✓ Integración Forms, Sheets, Gmail',
      '✓ Dashboards automáticos tiempo real',
      '✓ Workflows avanzados Apps Script',
      '✓ Cero errores manuales',
      '✓ Informes ejecutivos automáticos'
    ],
    pricing: {
      process: '$270.000 CLP por proceso',
      note: 'Precio no incluye impuestos'
    },
    timeline: '2-3 semanas por proceso',
    deliverables: [
      'Proceso 100% automatizado',
      'Documentación del sistema',
      'Capacitación de uso',
      'Soporte técnico 1 mes'
    ],
    image: '/sheet.png',
    cta: 'Ver más →'
  },
  {
    id: 'erp',
    icon: Database,
    title: 'Desarrollo de Sistemas de Gestión Comercial ERP',
    problem: '¿Caos operativo con Excel y sistemas separados?',
    executiveSummary: 'Software ERP a medida que integra ventas, inventario y finanzas en una sola plataforma. Orden total en tu operación con inversión única, sin mensualidades eternas.',
    fullDescription: 'Sistema de gestión comercial diseñado 100% a medida de tus necesidades. Integra todas las áreas de tu negocio: ventas, inventario, contabilidad y operaciones en una plataforma unificada con reportes en tiempo real.',
    features: [
      '✓ Módulos ventas, inventario, contabilidad',
      '✓ Personalización total necesidades',
      '✓ Migración datos sistemas actuales',
      '✓ Reportes analytics tiempo real',
      '✓ Multiusuario y multi-sucursal',
      '✓ Soporte y actualizaciones incluidas'
    ],
    pricing: {
      basic: 'Desde $3.700.000 CLP',
      note: 'Precio no incluye impuestos. Inversión única, sin mensualidades.'
    },
    timeline: '8-12 semanas',
    deliverables: [
      'Sistema ERP 100% funcional',
      'Capacitación todo el equipo',
      'Documentación técnica completa',
      'Soporte 3 meses post-implementación',
      'Manual de usuario'
    ],
    image: '/erp.png',
    cta: 'Ver más →'
  },
  {
    id: 'inversion',
    icon: TrendingUp,
    title: 'Consultoría 1:1 - Técnicas y Estrategias para Aprender a Invertir en Bolsa',
    problem: '¿Quieres invertir pero no sabes por dónde empezar?',
    executiveSummary: 'Educación financiera práctica en sesión personalizada de 1 hora. Aprende a conocer tu perfil de inversor, entiende los mercados y toma decisiones informadas con criterio profesional.',
    fullDescription: 'Sesión en vivo 1:1 donde evalúo tu capacidad de inversión, relación con el riesgo y te muestro las opciones disponibles: plataformas, brokers, costos y comisiones. Educación bursátil práctica sin promesas falsas de rentabilidad.',
    features: [
      '✓ Evaluación perfil inversor y riesgo',
      '✓ Educación fundamentos bolsa',
      '✓ Análisis plataformas y brokers',
      '✓ Costos, comisiones, aspectos prácticos',
      '✓ Estrategias de diversificación',
      '✓ Gestión emocional del riesgo'
    ],
    pricing: {
      session: '$37.000 CLP',
      note: 'Precio no incluye impuestos. Sesión de 1 hora online.'
    },
    timeline: '1 hora (sesión online)',
    deliverables: [
      'Sesión personalizada 1:1',
      'Material de apoyo descargable',
      'Grabación de la sesión',
      'Seguimiento por email 7 días'
    ],
    note: '* Servicio complementario - Requiere haber trabajado al menos 1 proyecto de transformación digital',
    image: '/inversion.png',
    cta: 'Ver más →'
  },
]
