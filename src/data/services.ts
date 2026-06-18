import { CalendarCheck, MapPin, MessageCircle, Share2, LayoutTemplate, Rocket, Database, Megaphone, Sparkles, ShoppingCart, Building, Smartphone } from 'lucide-react'
import type { Service } from '@/types'

export const SERVICES: Service[] = [
  {
    id: 'consultoria-gratis',
    icon: CalendarCheck,
    title: '1° Consultoría Gratuita',
    problem: '¿No sabes por dónde empezar a profesionalizar tu marca?',
    executiveSummary: 'Diagnóstico de visibilidad digital actual y propuesta ejecutiva personalizada en menos de 4 horas.',
    fullDescription: 'Llamada de 30 minutos (WhatsApp o Google Meet) donde evaluaremos la salud de tu imagen de marca digital y te entregaré una guía sobre cómo empezar a trabajar en ella para profesionalizarla y vender más.',
    features: [
      '✓ Diagnóstico de visibilidad digital actual',
      '✓ Identificación de 3 oportunidades de mejora',
      '✓ Recomendaciones concretas y accionables',
      '✓ Propuesta ejecutiva personalizada en <4h',
      '✓ Checklist de acciones inmediatas'
    ],
    pricing: {
      precio: '$0',
      note: 'Sin costo, sin compromiso de compra'
    },
    timeline: '30 minutos',
    deliverables: [
      'Claridad sobre la salud de tu marca',
      'Guía paso a paso',
      'Propuesta ejecutiva'
    ],
    image: '/placeholder.png', // Update with actual image later
    cta: 'Agendar Gratis →'
  },
  {
    id: 'google-perfil',
    icon: MapPin,
    title: 'Google Perfil Empresa',
    problem: '¿Tu negocio no aparece cuando te buscan en Google?',
    executiveSummary: 'Optimización completa de Google Mi Negocio. Aumenta tu visibilidad un 30-50% en 15-30 días.',
    fullDescription: 'Servicio de optimización de perfil de empresa para búsquedas "cerca de mí" y motores de Inteligencia Artificial. Aparecerás en Google Maps y estarás listo para ser recomendado por IAs.',
    features: [
      '✓ Keywords locales para búsquedas "cerca de mí"',
      '✓ Fotos estratégicas que generan confianza',
      '✓ Enlace directo a WhatsApp para consultas',
      '✓ Descripción estructurada para respuestas de IA'
    ],
    pricing: {
      unico: '$130.000 CLP',
      note: 'Pago único'
    },
    timeline: '15-30 días',
    deliverables: [
      'Perfil 100% optimizado',
      'Guía rápida "5 Pasos para Mantener Perfil Google"'
    ],
    image: '/google maps.png',
    cta: 'Ver más →'
  },
  {
    id: 'whatsapp-pro',
    icon: MessageCircle,
    title: 'Whatsapp Business Pro',
    problem: '¿Pierdes ventas por respuestas lentas o catálogo desordenado?',
    executiveSummary: 'Configuración profesional para cerrar ventas 24/7 sin estar conectado.',
    fullDescription: 'Organización integral de tu WhatsApp Business. Crearemos un catálogo visual, mensajes automáticos y etiquetas para cualificar leads desde el primer contacto.',
    features: [
      '✓ Catálogo visual con hasta 15 productos',
      '✓ Respuestas automáticas para dudas predefinidas',
      '✓ Mensaje de bienvenida que cualifica leads',
      '✓ Etiquetas para organizar y hacer seguimiento'
    ],
    pricing: {
      unico: '$100.000 CLP',
      note: 'Pago único'
    },
    timeline: '1-2 semanas',
    deliverables: [
      'Configuración de WhatsApp Business lista',
      'Plantilla de respuestas rápidas + guía de uso'
    ],
    image: '/placeholder.png',
    cta: 'Ver más →'
  },
  {
    id: 'optimizacion-rrss',
    icon: Share2,
    title: 'Optimización 2 RRSS + Contenido IA',
    problem: '¿Tus redes sociales no generan clientes reales?',
    executiveSummary: 'Redes que generan consultas calificadas, no solo likes. Contenido que las IA pueden recomendar.',
    fullDescription: 'Optimización estratégica de perfiles con enfoque en conversión e IA. Incluye la integración de CTAs claros y palabras clave que te posicionan ante preguntas en buscadores y ChatGPT.',
    features: [
      '✓ Bio con CTA claro y keywords conversacionales',
      '✓ Descripción optimizada para IA y buscadores',
      '✓ 2 publicaciones estáticas con IA (educa y convierte)',
      '✓ Integración con Linktree para tráfico medible'
    ],
    pricing: {
      unico: '$100.000 CLP',
      note: 'Pago único'
    },
    timeline: '1 semana',
    deliverables: [
      '2 perfiles de RRSS optimizados',
      'Calendario editorial básico',
      'Guía de hashtags conversacionales'
    ],
    image: '/rrss.png',
    cta: 'Ver más →'
  },
  {
    id: 'landing-page',
    icon: LayoutTemplate,
    title: 'Pág. Web Básica (1 sección)',
    problem: '¿Tu web no convierte visitantes en consultas?',
    executiveSummary: 'Landing page diseñada para convertir tráfico en leads sin inversión compleja.',
    fullDescription: 'Página de alta conversión donde mostramos de manera clara quién eres, qué ofreces y un fuerte CTA hacia tu WhatsApp. No requiere mantenimiento técnico por tu parte.',
    features: [
      '✓ 1 sección clara (quién eres + qué ofreces + CTA)',
      '✓ SEO básico para búsquedas locales',
      '✓ Dominio incluido (ej: tupyme.page.dev)',
      '✓ Contenido optimizado para respuestas de IA'
    ],
    pricing: {
      unico: '$160.000 CLP',
      note: 'Pago único'
    },
    timeline: 'Máx. 30 días hábiles',
    deliverables: [
      'Sitio web 100% funcional y publicado',
      'Guía "CTA que convierten desconocidos en clientes"'
    ],
    image: '/pag web.png',
    cta: 'Ver más →'
  },
  {
    id: 'pack-posicionamiento',
    icon: Rocket,
    title: 'Pack Posicionamiento',
    problem: '¿No te encuentran en Google, pierdes ventas por WhatsApp y no apareces en IA?',
    executiveSummary: 'Google Perfil Empresa + WhatsApp Pro + Landing Page + 2 RRSS. Todo optimizado para IA.',
    fullDescription: 'El paquete definitivo para dueños de PyMEs que quieren tomar control de su presencia digital. Ahorras $235.000 CLP comparado con comprar cada servicio por separado.',
    features: [
      '✓ Google Perfil Empresa optimizado',
      '✓ WhatsApp Business Pro con catálogo',
      '✓ Landing Page básica (1 sección)',
      '✓ Optimización de 2 RRSS con IA'
    ],
    pricing: {
      descuento: '44% Descuento',
      note: 'Promoción válida para los primeros 3 clientes del mes.'
    },
    timeline: '30-45 días hábiles',
    deliverables: [
      'Ecosistema digital completo funcionando',
      'Guía "Mantén tu negocio en las primeras posiciones de Google"',
      '1° Consultoría 30" Gratis: Diagnóstico+Propuesta<4h'
    ],
    image: '/placeholder.png',
    cta: 'Ver más →'
  },
  {
    id: 'erp-crm',
    icon: Database,
    title: 'ERP/CRM Adaptado a PyMEs',
    problem: '¿Desorden operativo, falta de control de inventario o clientes perdidos?',
    executiveSummary: 'Sistema de gestión empresarial personalizado para ordenar operaciones administrativas.',
    fullDescription: 'Mapeamos los procesos actuales de tu negocio y diseñamos un sistema a medida sin complejidad empresarial innecesaria. Tomarás decisiones basadas en datos reales, no en estimaciones.',
    features: [
      '✓ Gestión de clientes (historial, etiquetas)',
      '✓ Inventario (stock, alertas, movimientos)',
      '✓ Facturación (emisión, envío, registro)',
      '✓ Reportes (ventas por período, clientes frecuentes)',
      '✓ Agenda de citas/reservas'
    ],
    pricing: {
      cotizacion: 'Cotización personalizada',
      note: 'Precio varía según módulos y complejidad'
    },
    timeline: '45-60 días hábiles',
    deliverables: [
      'Software ERP/CRM funcionando',
      'Capacitación para tu equipo (2 sesiones de 1h)',
      'Soporte técnico 30 días post-implementación',
      'Manual de usuario en PDF'
    ],
    image: '/erp.png',
    cta: 'Ver más →'
  },
  {
    id: 'ads-campaigns',
    icon: Megaphone,
    title: 'Gestión de Campañas Ads (Meta/Google)',
    problem: '¿Tus anuncios no generan clientes o estás gastando sin ver retorno?',
    executiveSummary: 'Escalas consultas calificadas sin desperdiciar presupuesto. Pauta que se paga sola con clientes nuevos.',
    fullDescription: 'Gestión profesional de campañas publicitarias en Meta (Facebook/Instagram) y/o Google Ads. Creamos copies optimizados, configuramos landing pages AEO-ready y optimizamos tu inversión semanalmente.',
    features: [
      '✓ Estrategia de audiencia y retargeting',
      '✓ Creación de 3-5 anuncios por campaña',
      '✓ Copies y creatividades optimizados con IA',
      '✓ Implementación de píxel de seguimiento',
      '✓ Reporte mensual (CPL, CPA, ROI)'
    ],
    pricing: {
      mensual: 'Desde $250.000 CLP/mes',
      note: 'Presupuesto de pauta publicitaria no incluido, lo define el cliente.'
    },
    timeline: 'Resultados en 15-30 días',
    deliverables: [
      'Campañas activas y en constante optimización',
      'Reunión mensual de 30 min para revisar resultados'
    ],
    image: '/placeholder.png',
    cta: 'Ver más →'
  },
  {
    id: 'fabrica-contenido',
    icon: Sparkles,
    title: 'Fábrica de Contenido RRSS con IA',
    problem: '¿Te quedas sin ideas o no tienes tiempo para publicar en redes de forma constante?',
    executiveSummary: 'Servicio mensual de creación de contenido. Mantén presencia constante sin invertir horas.',
    fullDescription: 'Estrategia Digital que muestra Presencia constante. No más bloqueos creativos. Nosotros creamos el contenido base usando IA, lo repurponemos para múltiples formatos y medimos los resultados.',
    features: [
      '✓ 8-12 publicaciones estáticas con IA mensuales',
      '✓ Calendario editorial mensual con fechas',
      '✓ Repurposing (1 pieza base = múltiples formatos)',
      '✓ Análisis mensual de alcance y conversiones'
    ],
    pricing: {
      mensual: 'Desde $200.000 CLP/mes',
      note: 'Servicio recurrente mensual.'
    },
    timeline: 'Continuo (primer contenido en 7 días)',
    deliverables: [
      'Contenido mensual listo para publicar',
      'Reunión mensual de 30 min',
      'Soporte por WhatsApp para dudas'
    ],
    image: '/placeholder.png',
    cta: 'Ver más →'
  },
  {
    id: 'ecommerce',
    icon: ShoppingCart,
    title: 'Pág. Web E-commerce Básico',
    problem: '¿Quieres vender 24/7 de manera automática y aceptar pagos con tarjeta?',
    executiveSummary: 'Tienda online funcional para vender sin depender solo de WhatsApp. Catálogo y pagos integrados.',
    fullDescription: 'Vendes mientras duermes, sin responder cada consulta manualmente. Los clientes compran con confianza gracias a un sitio profesional y métodos de pago locales.',
    features: [
      '✓ Diseño de tienda online con hasta 20 productos',
      '✓ Carrito con cálculo automático de envío',
      '✓ Integración Webpay, Mercado Pago o Transbank',
      '✓ Sistema de cupones de descuento',
      '✓ Panel de administración para gestionar pedidos'
    ],
    pricing: {
      unico: 'Desde $750.000 CLP',
      note: 'Varía según la cantidad de productos'
    },
    timeline: '45-60 días hábiles',
    deliverables: [
      'Tienda E-commerce funcional',
      'Capacitación para gestionar la tienda',
      'Dominio y hosting por 1 año',
      '1 ronda de ajustes'
    ],
    image: '/placeholder.png',
    cta: 'Ver más →'
  },
  {
    id: 'web-corporativa',
    icon: Building,
    title: 'Pág. Web Corporativa (6 Secciones)',
    problem: '¿Necesitas mostrar toda tu autoridad, servicios y equipo para generar confianza B2B?',
    executiveSummary: 'Sitio web profesional de 6 secciones diseñado para posicionar tu marca y capturar leads.',
    fullDescription: 'Sitio completo para negocios que necesitan detallar servicios, historia y testimonios. Tu negocio aparece en Google y en respuestas de IA. Conviertes visitantes en consultas con una plataforma que transmite autoridad.',
    features: [
      '✓ Diseño de 6 secciones (Inicio, Servicios, Blog, etc.)',
      '✓ SEO on-page completo y velocidad optimizada',
      '✓ Integración con Google Analytics 4',
      '✓ Botón flotante de WhatsApp y formulario a email'
    ],
    pricing: {
      unico: 'Desde $550.000 CLP',
      note: 'Varía según la complejidad del proyecto'
    },
    timeline: '45-60 días hábiles',
    deliverables: [
      'Sitio Web Corporativo',
      'Dominio y hosting por 1 año',
      'Capacitación básica',
      '1 ronda de ajustes por sección'
    ],
    image: '/placeholder.png',
    cta: 'Ver más →'
  },
  {
    id: 'app-android',
    icon: Smartphone,
    title: 'App Android de Ventas y Fidelización',
    problem: '¿Quieres aumentar la retención y frecuencia de compra de tus clientes actuales?',
    executiveSummary: 'Aplicación nativa Android con catálogo, notificaciones push y programa de puntos.',
    fullDescription: 'Clientes que vuelven porque tu app les da valor real. Desarrollamos una app que vive en los teléfonos de tus clientes para facilitar pedidos, darles beneficios por fidelidad y avisarles de promociones directamente.',
    features: [
      '✓ App Android nativa con catálogo interactivo',
      '✓ Notificaciones push para promociones',
      '✓ Programa de puntos (compras = descuentos)',
      '✓ Perfil de usuario con historial de compras',
      '✓ Publicación en Google Play Store'
    ],
    pricing: {
      cotizacion: 'Cotización personalizada',
      note: 'Varía según las funcionalidades requeridas'
    },
    timeline: '45-60 días hábiles',
    deliverables: [
      'App nativa publicada en la tienda',
      'Panel de administración',
      'Capacitación para gestionar',
      'Soporte técnico 30 días post-lanzamiento'
    ],
    image: '/app.png',
    cta: 'Ver más →'
  }
]
