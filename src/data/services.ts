import { MapPin, MessageCircle, Share2, Layout, Package, Globe, ShoppingCart, Video, BarChart2, Smartphone, Database } from 'lucide-react'
import type { Service } from '@/types'

// Groups for ServicesListPage
export const POSICIONAMIENTO_IDS = ['google-perfil', 'whatsapp-business', 'redes-sociales-ia', 'pagina-web-basica', 'pack-posicionamiento']
export const ESTRATEGICOS_IDS = ['web-corporativa', 'ecommerce', 'fabrica-contenido', 'gestion-ads', 'app-movil', 'erp']

export const SERVICES: Service[] = [
  // ─────────────── SERVICIOS DE POSICIONAMIENTO ───────────────
  {
    id: 'google-perfil',
    icon: MapPin,
    title: 'Google Perfil Empresa',
    problem: '¿Tu competencia aparece primero en Google cuando tus clientes buscan?',
    executiveSummary: 'El 76% de las búsquedas "cerca de mí" terminan en visita ese mismo día. Si no estás en los 3 primeros resultados de Google Maps, estás regalando clientes a tu competencia. Lo arreglamos en 10 días hábiles.',
    fullDescription: 'Optimización completa de tu perfil de Google Mi Negocio para que aparezcas primero cuando tus clientes te buscan. Nombre con keywords locales, estrategia de reseñas para llegar a 4.5+ estrellas, fotos profesionales, publicaciones semanales que el algoritmo premia, y link directo a tu WhatsApp.',
    features: [
      '✓ Control total del perfil como propietario verificado',
      '✓ Nombre optimizado con keywords locales de alto volumen',
      '✓ Estrategia de reseñas para llegar y mantener 4.5+ estrellas',
      '✓ Optimización de fotos para más solicitudes de ruta',
      '✓ Publicaciones semanales que ganan visibilidad frente a la competencia',
      '✓ Link directo a WhatsApp — cero fricción entre búsqueda y venta'
    ],
    pricing: { basic: '$130.000 CLP', note: 'Precio fijo. No incluye impuestos.' },
    timeline: '10 días hábiles',
    deliverables: [
      'Perfil 100% optimizado y verificado',
      'Estrategia de keywords locales documentada',
      'Galería de fotos optimizadas',
      'Configuración de mensajería directa y WhatsApp',
      'Reporte inicial de métricas base'
    ],
    image: '/icono-google-perfil.png',
    detailImage: '/ss-google-perfil.png',
    cta: 'Ver más →',
    whatsappMessage: 'Hola Edilio, mi competencia aparece antes que yo en Google. Me interesa el servicio de Google Perfil Empresa ($130.000). ¿Podemos hablar?'
  },
  {
    id: 'whatsapp-business',
    icon: MessageCircle,
    title: 'WhatsApp Business Pro',
    problem: '¿Pierdes tiempo respondiendo lo mismo 100 veces al día por WhatsApp?',
    executiveSummary: 'Configuro tu WhatsApp Business como una máquina de ventas: catálogo visual, respuestas automáticas, mensajes de bienvenida y ausencia profesionales. Listo en 5 días hábiles.',
    fullDescription: 'WhatsApp es el canal de ventas más importante para PyMEs en LATAM. Lo convierto en un sistema profesional: catálogo visual, plantillas de respuesta, mensajes automáticos fuera de horario, y flujos que guían al cliente desde la duda hasta la compra.',
    features: [
      '✓ Catálogo visual de productos/servicios directamente en WhatsApp',
      '✓ 5 plantillas de respuesta para las consultas más frecuentes',
      '✓ Mensaje de bienvenida profesional que califica al cliente',
      '✓ Mensaje de ausencia que no pierde ventas fuera de horario',
      '✓ Configuración de etiquetas para organizar clientes',
      '✓ Capacitación de uso para ti y tu equipo'
    ],
    pricing: { basic: '$100.000 CLP', note: 'Precio fijo. No incluye impuestos.' },
    timeline: '10-15 días hábiles',
    deliverables: [
      'WhatsApp Business 100% configurado',
      'Catálogo de productos/servicios publicado',
      '5 plantillas de respuesta rápida instaladas',
      'Mensajes automáticos configurados',
      'Manual de uso para el equipo'
    ],
    image: '/icono-whatsapp.png',
    detailImage: '/ss-whatsapp-pro.png',
    cta: 'Ver más →',
    whatsappMessage: 'Hola Edilio, me interesa profesionalizar mi WhatsApp Business ($100.000). ¿Podemos hablar?'
  },
  {
    id: 'redes-sociales-ia',
    icon: Share2,
    title: 'Optimización 2 RRSS con IA',
    problem: '¿Tus redes sociales tienen seguidores pero no generan ventas reales?',
    executiveSummary: 'Optimizo 2 de tus redes sociales con contenido generado con IA. Bios que convierten, 12 piezas listas para publicar. Entrega en 7 días hábiles.',
    fullDescription: 'Optimización completa de 2 redes sociales (Instagram, Facebook, TikTok, LinkedIn): bios con keywords para algoritmos e IA, plan de contenido mensual con piezas IA, y estrategia de hashtags para maximizar el alcance orgánico.',
    features: [
      '✓ Optimización completa de 2 redes sociales a elección',
      '✓ Bios reescritas con keywords para algoritmos e IAs',
      '✓ 12 piezas de contenido mensual generadas con IA',
      '✓ Estrategia de hashtags conversacionales por nicho',
      '✓ Plantilla de contenido replicable para publicar de forma autónoma',
      '✓ Capacitación básica para mantener la estrategia'
    ],
    pricing: { basic: '$100.000 CLP', note: 'Precio fijo. No incluye impuestos. Gestión mensual disponible por separado.' },
    timeline: '7 días hábiles',
    deliverables: [
      'Auditoría de ambas redes con informe de oportunidades',
      'Bios optimizadas en ambas plataformas',
      '12 piezas de contenido listas para publicar',
      'Banco de hashtags por categoría',
      'Plantilla de contenido mensual replicable'
    ],
    image: '/icono-rrss-ia.png',
    detailImage: '/ss-rrss-ia.png',
    cta: 'Ver más →',
    whatsappMessage: 'Hola Edilio, me interesa optimizar mis redes sociales con IA ($100.000). ¿Podemos hablar?'
  },
  {
    id: 'pagina-web-basica',
    icon: Layout,
    title: 'Página Web Básica (1 sección)',
    problem: '¿No tienes presencia web o tu web no genera confianza en tus clientes?',
    executiveSummary: 'Landing page profesional con todo lo que un cliente necesita para contratarte. Lista en 7 días hábiles.',
    fullDescription: 'La web mínima viable que todo negocio necesita: profesional, rápida y optimizada para móviles. Presentación, servicios, prueba social y botón de WhatsApp para contacto directo.',
    features: [
      '✓ Diseño profesional adaptado a tu marca',
      '✓ Responsive 100% — perfecta en celular y computador',
      '✓ Carga rápida para retener visitantes',
      '✓ Botón de WhatsApp con mensaje predefinido',
      '✓ Formulario de contacto funcional',
      '✓ SEO básico para que Google te indexe'
    ],
    pricing: { basic: '$160.000 CLP', note: 'Precio fijo. No incluye impuestos. Dominio y hosting (~$30.000/año) no incluidos.' },
    timeline: '15-30 días hábiles',
    deliverables: [
      'Página web profesional publicada',
      'Integración WhatsApp + formulario',
      'SEO básico configurado',
      'Versión móvil optimizada',
      '15 días de soporte post-lanzamiento'
    ],
    image: '/icono-web-basica.png',
    detailImage: '/ss-web-basica.png',
    cta: 'Ver más →',
    whatsappMessage: 'Hola Edilio, me interesa crear mi página web básica ($160.000). ¿Podemos hablar?'
  },
  // ─────────────── PACK ───────────────
  {
    id: 'pack-posicionamiento',
    icon: Package,
    title: 'Pack Posicionamiento — Todo para dominar tu mercado local',
    problem: '¿Quieres el paquete completo a precio especial?',
    executiveSummary: 'Google Perfil Mi Negocio + WhatsApp Business Pro + Optimización 2 RRSS con IA + Pág. Web Básica en un solo pack con 44% de descuento. Solo 3 cupos por mes.',
    fullDescription: 'Los 4 servicios fundamentales para ser encontrado, generar confianza y vender: perfil Google optimizado, WhatsApp profesional, 2 redes sociales con IA, y web básica. Todo integrado y trabajando en conjunto en menos de 20 días hábiles.',
    features: [
      '✓ Google Perfil Empresa optimizado (valor: $130.000)',
      '✓ WhatsApp Business Pro configurado (valor: $100.000)',
      '✓ Optimización 2 RRSS con IA — 12 piezas (valor: $100.000)',
      '✓ Página Web Básica 1 sección (valor: $160.000)',
      '✓ BONUS: Guía "Mantén tu negocio en las primeras posiciones de Google"',
      '✓ 44% de descuento — solo primeros 3 clientes/mes'
    ],
    pricing: { basic: '$255.000 CLP', note: 'Precio normal: $490.000 CLP. Ahorro: $235.000 CLP. Solo 3 cupos por mes. No incluye impuestos.' },
    timeline: '25-35 días hábiles',
    deliverables: [
      'Google Perfil optimizado y verificado',
      'WhatsApp Business Pro con catálogo y plantillas',
      '2 redes sociales optimizadas + 12 piezas de contenido',
      'Página web básica publicada',
      'BONUS: Guía PDF de posicionamiento en Google'
    ],
    image: '/icono-pack.png',
    detailImage: '/ss-pack.png',
    cta: 'Quiero este pack →',
    whatsappMessage: 'Hola Edilio, me interesa el Pack Posicionamiento ($255.000 con 44% de descuento). ¿Quedan cupos este mes?'
  },
  // ─────────────── ESTRATÉGICOS ───────────────
  {
    id: 'web-corporativa',
    icon: Globe,
    title: 'Pág. Web Corporativa (6 secciones)',
    problem: '¿Tu negocio necesita presencia web completa y profesional?',
    executiveSummary: 'Sitio web corporativo de 6 secciones con SEO técnico y diseño a medida. El sitio que hace que tus clientes confíen antes de llamarte. Entrega en 25 días hábiles.',
    fullDescription: 'Desarrollo web corporativo completo: diseño personalizado, SEO técnico, Google Analytics, formulario de contacto y versión mobile perfecta.',
    features: [
      '✓ 6 secciones: Inicio, Servicios, Sobre mí, Testimonios, Blog, Contacto',
      '✓ Diseño personalizado alineado a tu marca',
      '✓ SEO técnico completo para posicionamiento orgánico',
      '✓ Google Analytics con goals de conversión',
      '✓ Velocidad optimizada — menos de 3 segundos',
      '✓ Panel de administración de contenido autónomo'
    ],
    pricing: { original: '$550.000 CLP', discounted: '$250.000 CLP', note: 'Oferta por tiempo limitado. No incluye impuestos ni dominio/hosting.' },
    timeline: '45-60 días hábiles estimados',
    deliverables: [
      'Sitio corporativo de 6 secciones publicado',
      'SEO técnico completo',
      'Google Analytics + goals configurados',
      '30 días de soporte post-lanzamiento',
      'Capacitación para gestión autónoma'
    ],
    image: '/icono-web-corp.png',
    detailImage: '/ss-web-corp.png',
    cta: 'Ver más →',
    whatsappMessage: 'Hola Edilio, me interesa la Web Corporativa ($250.000 oferta). ¿Podemos hablar?'
  },
  {
    id: 'ecommerce',
    icon: ShoppingCart,
    title: 'Pág. Web E-commerce Full',
    problem: '¿Quieres vender tus productos directamente por internet las 24 horas?',
    executiveSummary: 'Tienda online completa con pasarela de pagos, inventario y checkout optimizado. Tu tienda vende 24/7. Entrega en 30 días hábiles.',
    fullDescription: 'Tienda online: catálogo, pasarela de pagos (WebPay, PayPal, Mercado Pago), inventario, panel de pedidos y checkout optimizado para maximizar conversión.',
    features: [
      '✓ Catálogo de productos con fotos, precios y descripción',
      '✓ Pasarela de pagos integrada (WebPay, PayPal, Mercado Pago)',
      '✓ Checkout optimizado para reducir abandono de carrito',
      '✓ Panel de administración de pedidos e inventario',
      '✓ Integración WhatsApp para soporte post-venta',
      '✓ SEO técnico para posicionamiento en Google'
    ],
    pricing: { original: '$750.000 CLP', discounted: '$550.000 CLP', note: 'Oferta por tiempo limitado. No incluye impuestos, dominio ni hosting.' },
    timeline: '45-60 días hábiles estimados',
    deliverables: [
      'Tienda online completa y funcional',
      'Pasarela de pagos configurada y testeada',
      'Panel de administración de productos y pedidos',
      'SEO técnico completo',
      '30 días de soporte post-lanzamiento'
    ],
    image: '/icono-ecommerce.png',
    detailImage: '/ss-ecommerce-full.png',
    cta: 'Ver más →',
    whatsappMessage: 'Hola Edilio, me interesa el E-commerce Full ($550.000 oferta). ¿Podemos hablar?'
  },
  {
    id: 'fabrica-contenido',
    icon: Video,
    title: 'Fábrica de Contenido RRSS con IA',
    problem: '¿Quieres publicar de forma consistente pero no tienes tiempo?',
    executiveSummary: 'Contenido mensual profesional con IA: diseño, copywriting y estrategia. Primer lote en 5 días hábiles.',
    fullDescription: 'Producción mensual de contenido con IA + estrategia de marketing. Posts, historias, carruseles y videos cortos alineados a tu marca y objetivos de venta.',
    features: [
      '✓ 12 piezas de contenido hecho con IA al mes',
      '✓ Diseño gráfico alineado a tu identidad visual',
      '✓ Copywriting orientado a venta con IA',
      '✓ Calendario editorial mensual',
      '✓ Adaptación para Instagram, Facebook, TikTok y LinkedIn',
      '✓ Reporte mensual de métricas y ajuste de estrategia'
    ],
    pricing: { original: '$200.000 CLP/mes', discounted: '$150.000 CLP/mes', note: 'Oferta por tiempo limitado. No incluye publicidad pagada.' },
    timeline: 'Primera entrega en 7 días hábiles',
    deliverables: [
      'Calendario editorial mensual',
      '12-20 piezas listas para publicar',
      'Adaptaciones por plataforma',
      'Reporte mensual de métricas',
      'Ajuste de estrategia mensual'
    ],
    image: '/icono-fabrica.png',
    detailImage: '/ss-fabrica.png',
    cta: 'Ver más →',
    whatsappMessage: 'Hola Edilio, me interesa la Fábrica de Contenido RRSS con IA ($150.000/mes oferta). ¿Podemos hablar?'
  },
  {
    id: 'gestion-ads',
    icon: BarChart2,
    title: 'Gestión Campañas Ads',
    problem: '¿Inviertes en publicidad digital pero no ves resultados concretos?',
    executiveSummary: 'Gestión profesional de Meta Ads y Google Ads con optimización continua. Campañas activas en 5 días hábiles.',
    fullDescription: 'Gestión estratégica de Meta Ads y/o Google Ads: audiencias, creatividades, conversiones y optimización continua con reportes semanales reales.',
    features: [
      '✓ Configuración de campañas en Meta Ads y/o Google Ads',
      '✓ Segmentación de audiencias por intereses y geografía',
      '✓ Creatividades orientadas a conversión',
      '✓ Pixel de Meta y conversiones de Google configurados',
      '✓ Optimización continua con ajustes semanales',
      '✓ Reporte semanal: alcance, clics, costo por lead y ROAS'
    ],
    pricing: { original: '$250.000 CLP/mes', discounted: '$200.000 CLP/mes', note: 'Oferta por tiempo limitado. Presupuesto publicitario se acuerda por separado.' },
    timeline: 'Campañas activas en 5 días hábiles',
    deliverables: [
      'Campañas activas en Meta y/o Google',
      'Pixel e integraciones de conversión instaladas',
      'Creatividades por campaña',
      'Reporte semanal de rendimiento',
      'Reunión mensual de resultados'
    ],
    image: '/icono-ads.png',
    detailImage: '/ss-ads.png',
    cta: 'Ver más →',
    whatsappMessage: 'Hola Edilio, me interesa que gestiones mis campañas Ads ($200.000/mes oferta). ¿Podemos hablar?'
  },
  {
    id: 'app-movil',
    icon: Smartphone,
    title: 'App Android',
    problem: '¿Necesitas una app móvil propia para tu negocio?',
    executiveSummary: 'App nativa Android a medida con vitrina, pagos y notificaciones push. Cotización según funcionalidades.',
    fullDescription: 'Aplicaciones Android nativas: catálogo, pedidos o gestión de clientes. Diseño UX/UI profesional, pasarela de pagos y publicación en Google Play Store.',
    features: [
      '✓ App nativa Android de alto rendimiento',
      '✓ Diseño UX/UI personalizado',
      '✓ Pasarela de pagos integrada',
      '✓ Notificaciones push para reactivar clientes',
      '✓ Panel de administración web incluido',
      '✓ Publicación en Google Play Store'
    ],
    pricing: { basic: 'Cotización', note: 'Precio según funcionalidades. Sin compromiso.' },
    timeline: 'Según complejidad (mínimo 30 días hábiles)',
    deliverables: [
      'App publicada en Google Play Store',
      'Diseño UX/UI profesional',
      'Documentación técnica',
      'Soporte 3 meses post-lanzamiento',
      'Manual de usuario y tutoriales'
    ],
    image: '/icono-app-android.png',
    detailImage: '/ss-app-android.png',
    cta: 'Solicitar cotización →',
    whatsappMessage: 'Hola Edilio, me interesa desarrollar una App Android. ¿Podemos hablar sobre cotización?'
  },
  {
    id: 'erp',
    icon: Database,
    title: 'ERP/CRM para PyMEs',
    problem: '¿Tu operación vive en Excel, WhatsApp y en la memoria de una persona?',
    executiveSummary: 'Sistema de gestión a medida: ventas, inventario, facturación y CRM en una plataforma. Sin mensualidades. Cotización según operación.',
    fullDescription: 'ERP/CRM adaptado a tus procesos: ventas, inventario, facturación y clientes conectados en tiempo real. Sin mensualidades por usuario.',
    features: [
      '✓ Ventas, inventario y facturación en tiempo real',
      '✓ CRM para seguimiento de clientes',
      '✓ Reportes gerenciales automáticos',
      '✓ Multiusuario y multi-sucursal',
      '✓ Migración de datos desde Excel',
      '✓ Soporte y actualizaciones por 1 año'
    ],
    pricing: { basic: 'Cotización', note: 'Inversión única, sin mensualidades. Solicita cotización gratuita.' },
    timeline: 'Según complejidad (mínimo 40 días hábiles)',
    deliverables: [
      'Sistema ERP/CRM funcional y adaptado',
      'Capacitación completa del equipo',
      'Documentación técnica + manual',
      'Soporte técnico 3 meses',
      'Video tutoriales por módulo'
    ],
    image: '/icono-erp-crm.png',
    detailImage: '/ss-erp-crm.png',
    cta: 'Solicitar cotización →',
    whatsappMessage: 'Hola Edilio, me interesa un ERP/CRM para mi empresa. ¿Podemos hablar sobre cotización?'
  },
]
