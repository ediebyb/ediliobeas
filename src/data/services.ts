import { MapPin, Globe, Smartphone, FileSpreadsheet, Database, TrendingUp, Share2 } from 'lucide-react'
import type { Service } from '@/types'

export const SERVICES: Service[] = [
  {
    id: 'google-maps',
    icon: MapPin,
    title: 'Aparece primero en Google Maps y convierte búsquedas en llamadas',
    problem: '¿Tus clientes te buscan en Google y no te encuentran?',
    executiveSummary: 'Optimización SEO local avanzada que posiciona tu negocio en las 3 primeras posiciones de Google Maps. Aumenta llamadas y visitas en 60 días con métricas reportadas mensualmente.',
    fullDescription: 'Servicio completo de optimización y creación de perfiles Google Mi Negocio enfocado en conversión. Implementamos estrategias SEO locales avanzadas, gestión de reseñas que generan confianza y contenido visual profesional para maximizar tu visibilidad en búsquedas locales. Todo medible y reportado.',
    features: [
      '✓ Optimización SEO local para top 3 en Google Maps',
      '✓ Estrategia de reseñas que aumentan conversión',
      '✓ Fotografías profesionales optimizadas para destacar',
      '✓ Publicación semanal de contenido que atrae',
      '✓ Reportes mensuales con métricas de llamadas y visitas',
      '✓ Soporte continuo y ajustes según resultados'
    ],
    pricing: {
      optimization: '$270.000 CLP',
      creation: '$300.000 CLP',
      note: 'Precio no incluye impuestos'
    },
    timeline: '2-3 semanas',
    deliverables: [
      'Perfil 100% optimizado y verificado en top 3',
      'Estrategia de keywords locales con alto volumen',
      'Galería de 10+ fotos profesionales optimizadas',
      'Plan de contenido mensual enfocado en conversiones'
    ],
    image: '/google maps.png',
    cta: 'Ver más →'
  },
  {
    id: 'paginas-web',
    icon: Globe,
    title: 'Tu web como vendedor 24/7: convierte visitas en oportunidades',
    problem: '¿Tu web actual no genera ventas, solo "se ve bonita"?',
    executiveSummary: 'Diseño + SEO + velocidad = conversión medible. Desarrollamos landing pages y eCommerce que transforman visitantes en clientes. Aumento promedio de 40% en leads calificados en 90 días.',
    fullDescription: 'Diseño y desarrollo de sitios web profesionales enfocados en resultados comerciales, no solo estética. Incluimos optimización SEO técnica completa, velocidad de carga optimizada (<3s), diseño responsive perfecto en móviles y integración con herramientas de marketing y ventas que miden y mejoran tus conversiones.',
    features: [
      '✓ Diseño profesional enfocado en conversión, no solo estética',
      '✓ Optimización SEO técnica completa para más tráfico calificado',
      '✓ Velocidad de carga optimizada (<3s) para retener visitantes',
      '✓ Integración WhatsApp y formularios que capturan leads',
      '✓ eCommerce con pasarela de pagos y flujo de checkout optimizado',
      '✓ Panel autoadministrable + métricas de conversión en tiempo real'
    ],
    pricing: {
      landing: '$570.000 CLP',
      ecommerce: 'Desde $970.000 CLP',
      note: 'Precio no incluye impuestos. Dominio y hosting no incluidos.'
    },
    timeline: '2-4 semanas',
    deliverables: [
      'Diseño personalizado único enfocado en conversiones',
      'Optimización SEO completa con keywords de alta intención',
      'Integración Google Analytics + configuración de goals',
      'Capacitación de uso incluida + guía de mejora continua',
      '30 días de soporte gratuito post-lanzamiento'
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
    title: 'Elimina el trabajo manual repetitivo y recupera 15+ horas/semana',
    problem: '¿Pierdes horas copiando-pegando y cometiendo errores manuales?',
    executiveSummary: 'Workflows con Google Apps Script que automatizan reportes, emails y procesos. Cero errores humanos + dashboards en tiempo real para tomar decisiones con datos, no con intuición.',
    fullDescription: 'Digitalización y automatización de procesos repetitivos mediante Google Apps Script enfocados en resultados medibles. Creamos sistemas inteligentes que generan reportes automáticos, integran herramientas y proporcionan dashboards en tiempo real para toma de decisiones basada en datos concretos.',
    features: [
      '✓ Automatización de reportes y emails programados',
      '✓ Integración Forms, Sheets, Gmail sin errores manuales',
      '✓ Dashboards automáticos en tiempo real para decisiones ágiles',
      '✓ Workflows avanzados Apps Script personalizados a tu operación',
      '✓ Cero errores manuales + trazabilidad completa',
      '✓ Informes ejecutivos automáticos con métricas clave'
    ],
    pricing: {
      process: '$270.000 CLP por proceso',
      note: 'Precio no incluye impuestos'
    },
    timeline: '2-3 semanas por proceso',
    deliverables: [
      'Proceso 100% automatizado y documentado',
      'Documentación técnica + manual de usuario',
      'Capacitación del equipo incluida',
      'Soporte técnico 1 mes post-implementación'
    ],
    image: '/sheet.png',
    cta: 'Ver más →'
  },
  {
    id: 'erp',
    icon: Database,
    title: 'Orden total en tu operación: ventas, inventario y finanzas en una plataforma',
    problem: '¿Caos operativo con Excel, WhatsApp y sistemas que no se hablan?',
    executiveSummary: 'ERP a medida que integra todas las áreas de tu negocio en tiempo real. Inversión única, sin mensualidades eternas. Escalabilidad sin contratar más personal.',
    fullDescription: 'Sistema de gestión comercial diseñado 100% a medida de tus procesos reales. Integra ventas, inventario, contabilidad y operaciones en una plataforma unificada con reportes en tiempo real que te dan el control total de tu negocio sin depender de múltiples herramientas separadas.',
    features: [
      '✓ Módulos de ventas, inventario y contabilidad integrados',
      '✓ Personalización total según tus flujos de trabajo',
      '✓ Migración de datos desde tus sistemas actuales',
      '✓ Reportes analytics en tiempo real para decisiones informadas',
      '✓ Multiusuario y multi-sucursal sin límites',
      '✓ Soporte y actualizaciones incluidas por 1 año'
    ],
    pricing: {
      basic: 'Desde $3.700.000 CLP',
      note: 'Precio no incluye impuestos. Inversión única, sin mensualidades eternas.'
    },
    timeline: '8-12 semanas',
    deliverables: [
      'Sistema ERP 100% funcional y testeado',
      'Capacitación completa para todo el equipo',
      'Documentación técnica completa + manual de usuario',
      'Soporte 3 meses post-implementación incluido',
      'Manual de usuario y video tutoriales'
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
  {
    id: 'redes-sociales',
    icon: Share2,
    title: 'Manejo de Redes Sociales',
    problem: '¿Publicas constantemente pero tus redes no generan ventas?',
    executiveSummary: 'Convierte tus seguidores en clientes. Estrategia de contenido diseñada para aumentar ventas, posicionarte como autoridad y fidelizar tu audiencia con publicaciones de alto valor.',
    fullDescription: 'Deja de publicar por publicar. La mayoría de las empresas en redes sociales generan contenido sin estrategia y terminan agotadas sin resultados. Este servicio transforma tu presencia digital en un canal de ventas efectivo: diagnostico tu situación actual, optimizo tus biografías para convertir visitantes en seguidores, y creo un plan de contenido mensual enfocado exclusivamente en tus objetivos de negocio. Desde la creación de piezas profesionales hasta la administración de campañas pagadas, todo trabaja para generar ROI real.',
    features: [
      '✓ Diagnóstico completo de tu presencia actual en redes sociales',
      '✓ Optimización de biografías que convierten visitantes en seguidores calificados',
      '✓ Plan de contenido mensual estratégico enfocado en resultados',
      '✓ Creación profesional de contenido (diseño gráfico + copywriting persuasivo)',
      '✓ Administración y optimización de campañas publicitarias pagadas',
      '✓ Métricas semanales de crecimiento y conversión real'
    ],
    pricing: {
      unique: 'Desde $370.000 CLP (pago único)',
      monthly: 'Desde $127.000 CLP/mes (pago recurrente)',
      note: 'Precio no incluye impuestos. Inversión en publicidad pagada no incluida.'
    },
    timeline: '1 semana diagnóstico + implementación inmediata',
    deliverables: [
      'Auditoría completa de redes sociales con informe detallado',
      'Biografías optimizadas para conversión en todas tus plataformas',
      'Plan de contenido mensual estratégico personalizado',
      '12-15 piezas de contenido profesional por mes',
      'Reporte semanal de métricas, alcance y conversiones',
      'Soporte continuo y ajustes de estrategia según resultados'
    ],
    image: '/rrss.png',
    cta: 'Ver más →'
  },
]
