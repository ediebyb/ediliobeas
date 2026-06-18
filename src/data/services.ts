import { MapPin, MessageCircle, Share2, Layout, Package, Globe, ShoppingCart, Video, BarChart2, Smartphone, Database } from 'lucide-react'
import type { Service } from '@/types'

export const SERVICES: Service[] = [
  // ─────────────── SERVICIOS A LA CARTA ───────────────
  {
    id: 'google-perfil',
    icon: MapPin,
    title: 'Google Perfil Empresa',
    problem: '¿Tu competencia aparece primero en Google cuando tus clientes buscan?',
    executiveSummary: 'El 76% de las búsquedas "cerca de mí" terminan en visita ese mismo día. Si no estás en los 3 primeros resultados de Google Maps, estás regalando clientes a tu competencia. Lo arreglamos en menos de 30 días.',
    fullDescription: 'Optimización completa de tu perfil de Google Mi Negocio para que aparezcas primero cuando tus clientes te buscan. Nombre con keywords locales, estrategia de reseñas para llegar a 4.5+ estrellas, fotos profesionales, publicaciones semanales que el algoritmo premia, y link directo a tu WhatsApp para que ningún cliente se pierda en el camino.',
    features: [
      '✓ Control total del perfil como propietario verificado',
      '✓ Nombre optimizado con keywords locales de alto volumen',
      '✓ Estrategia de reseñas para llegar y mantener 4.5+ estrellas',
      '✓ Optimización de fotos para más solicitudes de ruta',
      '✓ Publicaciones semanales que ganan visibilidad frente a la competencia',
      '✓ Link directo a WhatsApp — cero fricción entre búsqueda y venta'
    ],
    pricing: {
      basic: '$130.000 CLP',
      note: 'Precio no incluye impuestos'
    },
    timeline: '2-3 semanas',
    deliverables: [
      'Perfil 100% optimizado y verificado',
      'Estrategia de keywords locales documentada',
      'Galería de fotos optimizadas',
      'Configuración de mensajería directa y WhatsApp',
      'Reporte inicial de métricas base'
    ],
    image: '/icono-google-maps.png',
    detailImage: '/ss-google-maps.png',
    cta: 'Ver más →',
    whatsappMessage: 'Hola Edilio, mi competencia aparece antes que yo en Google Maps. Me interesa el servicio de Google Perfil Empresa ($130.000). ¿Podemos hablar?'
  },
  {
    id: 'whatsapp-business',
    icon: MessageCircle,
    title: 'WhatsApp Business Pro',
    problem: '¿Pierdes tiempo respondiendo lo mismo 100 veces al día por WhatsApp?',
    executiveSummary: 'Configuro tu WhatsApp Business como una máquina de ventas: catálogo visual, respuestas automáticas, mensajes de bienvenida y ausencia profesionales. Tus clientes compran solos, tú te dedicas a cerrar negocios.',
    fullDescription: 'WhatsApp es el canal de ventas más importante para PyMEs en LATAM y la mayoría lo usa como si fuera un chat de amigos. Lo convierto en un sistema de ventas profesional: catálogo visual de productos/servicios, plantillas de respuesta para las preguntas más frecuentes, mensajes automáticos fuera de horario, y flujos que guían al cliente desde la duda hasta la compra sin que tú tengas que intervenir en cada paso.',
    features: [
      '✓ Catálogo visual de productos/servicios directamente en WhatsApp',
      '✓ 5 plantillas de respuesta para las consultas más frecuentes',
      '✓ Mensaje de bienvenida profesional que califica al cliente',
      '✓ Mensaje de ausencia que no pierde ventas fuera de horario',
      '✓ Configuración de etiquetas para organizar clientes y seguimientos',
      '✓ Capacitación de uso para ti y tu equipo'
    ],
    pricing: {
      basic: '$100.000 CLP',
      note: 'Precio no incluye impuestos'
    },
    timeline: '1 semana',
    deliverables: [
      'WhatsApp Business 100% configurado y profesionalizado',
      'Catálogo de productos/servicios publicado',
      '5 plantillas de respuesta rápida instaladas',
      'Mensajes automáticos configurados',
      'Manual de uso para el equipo'
    ],
    image: '/icono-pagweb.png',
    detailImage: '/ss-whatsapp.png',
    cta: 'Ver más →',
    whatsappMessage: 'Hola Edilio, me interesa profesionalizar mi WhatsApp Business para vender más. Me interesa el servicio de WhatsApp Business Pro ($100.000). ¿Podemos hablar?'
  },
  {
    id: 'redes-sociales-ia',
    icon: Share2,
    title: 'Optimización 2 RRSS + IA',
    problem: '¿Tus redes sociales tienen seguidores pero no generan ventas reales?',
    executiveSummary: 'Optimizo 2 de tus redes sociales y las configuro con contenido generado con IA para que publiques de forma consistente sin dedicarle horas. Bios que convierten, contenido que vende.',
    fullDescription: 'Optimización completa de 2 redes sociales de tu elección (Instagram, Facebook, TikTok, LinkedIn): bios reescritas con keywords para algoritmos e IA, plan de contenido mensual con piezas creadas con IA, y estrategia de hashtags que maximiza el alcance orgánico. Tus redes empiezan a trabajar por ti.',
    features: [
      '✓ Optimización completa de 2 redes sociales a elección',
      '✓ Bios reescritas con keywords para algoritmos e IAs',
      '✓ 12 piezas de contenido mensual generadas con IA incluidas',
      '✓ Estrategia de hashtags conversacionales por nicho',
      '✓ Plantilla de contenido replicable para publicar de forma autónoma',
      '✓ Capacitación básica para mantener la estrategia en el tiempo'
    ],
    pricing: {
      basic: '$100.000 CLP',
      note: 'Precio no incluye impuestos. Gestión mensual continua disponible por separado.'
    },
    timeline: '1-2 semanas',
    deliverables: [
      'Auditoría de ambas redes con informe de oportunidades',
      'Bios optimizadas y actualizadas en ambas plataformas',
      '12 piezas de contenido listas para publicar',
      'Banco de hashtags por categoría de contenido',
      'Plantilla de contenido mensual replicable'
    ],
    image: '/icono-rrss.png',
    detailImage: '/ss-rrss.png',
    cta: 'Ver más →',
    whatsappMessage: 'Hola Edilio, me interesa optimizar mis redes sociales con IA para generar más ventas. Me interesa el servicio de Optimización 2 RRSS + IA ($100.000). ¿Podemos hablar?'
  },
  {
    id: 'pagina-web-basica',
    icon: Layout,
    title: 'Página Web Básica (1 sección)',
    problem: '¿No tienes presencia web o tu web actual no genera confianza en tus clientes?',
    executiveSummary: 'Una landing page profesional de 1 sección con todo lo que un cliente necesita para decidir contratarte: quién eres, qué ofreces, prueba social y cómo contactarte. Lista en menos de 2 semanas.',
    fullDescription: 'La web mínima viable que todo negocio necesita: una página profesional, rápida y optimizada para móviles que convierte visitantes en consultas. Incluye sección de presentación, servicios o productos, testimonios o prueba social, y formulario o botón de WhatsApp para contacto directo. Sin mensualidades, con dominio y hosting de bajo costo.',
    features: [
      '✓ Diseño profesional adaptado a tu marca y colores',
      '✓ Responsive 100% — se ve perfecta en celular y computador',
      '✓ Carga rápida optimizada para retener visitantes',
      '✓ Botón de WhatsApp con mensaje predefinido integrado',
      '✓ Formulario de contacto funcional',
      '✓ Optimización SEO básica para que Google te indexe'
    ],
    pricing: {
      basic: '$160.000 CLP',
      note: 'Precio no incluye impuestos. Dominio y hosting (~$30.000/año) no incluidos.'
    },
    timeline: '1-2 semanas',
    deliverables: [
      'Página web profesional de 1 sección publicada',
      'Integración WhatsApp + formulario de contacto',
      'Optimización SEO básica (title, meta description)',
      'Versión móvil optimizada',
      '15 días de soporte post-lanzamiento'
    ],
    image: '/icono-pagweb.png',
    detailImage: '/ss-pagweb.png',
    cta: 'Ver más →',
    whatsappMessage: 'Hola Edilio, me interesa crear mi página web básica para tener presencia profesional en internet. Me interesa el servicio de Página Web Básica ($160.000). ¿Podemos hablar?'
  },
  // ─────────────── PACK ───────────────
  {
    id: 'pack-posicionamiento',
    icon: Package,
    title: 'Pack Posicionamiento — Todo lo que necesitas para dominar tu mercado local',
    problem: '¿Quieres el paquete completo a precio especial?',
    executiveSummary: 'Google Perfil + WhatsApp Business Pro + Optimización 2 RRSS + IA en un solo pack con 44% de descuento. Solo para los primeros 3 clientes por mes. Ahorro real de $235.000 CLP vs contratar cada servicio por separado.',
    fullDescription: 'El Pack Posicionamiento reúne los 4 servicios fundamentales para que tu negocio sea encontrado, confíe y venda: perfil de Google optimizado para aparecer primero, WhatsApp Business profesional que cierra ventas solo, 2 redes sociales con contenido IA que construyen autoridad, y una página web básica que da credibilidad. Todo integrado y trabajando en conjunto.',
    features: [
      '✓ Google Perfil Empresa optimizado (valor: $130.000)',
      '✓ WhatsApp Business Pro configurado (valor: $100.000)',
      '✓ Optimización 2 RRSS + IA — 12 piezas de contenido (valor: $100.000)',
      '✓ Página Web Básica 1 sección (valor: $160.000)',
      '✓ BONUS: Guía "Mantén tu negocio en las primeras posiciones de Google"',
      '✓ 44% de descuento — solo para los primeros 3 clientes por mes'
    ],
    pricing: {
      basic: '$255.000 CLP',
      note: 'Precio normal: $455.000 CLP. Ahorro: $200.000 CLP. Solo 3 cupos por mes. Precio no incluye impuestos.'
    },
    timeline: '3-4 semanas (todos los servicios en paralelo)',
    deliverables: [
      'Google Perfil 100% optimizado y verificado',
      'WhatsApp Business Pro configurado con catálogo y plantillas',
      '2 redes sociales optimizadas + 12 piezas de contenido IA',
      'Página web básica publicada y funcional',
      'BONUS: Guía PDF de mantenimiento de posicionamiento en Google'
    ],
    image: '/icono-pagweb.png',
    detailImage: '/ss-pack-posicionamiento.png',
    cta: 'Quiero este pack →',
    whatsappMessage: 'Hola Edilio, me interesa el Pack Posicionamiento completo ($255.000 CLP con 44% de descuento). ¿Quedan cupos disponibles este mes?'
  },
  // ─────────────── ESTRATÉGICOS ───────────────
  {
    id: 'web-corporativa',
    icon: Globe,
    title: 'Web Corporativa (6 secciones)',
    problem: '¿Tu negocio necesita una presencia web completa y profesional?',
    executiveSummary: 'Sitio web corporativo completo de 6 secciones: Inicio, Servicios, Sobre mí/nosotros, Testimonios, Blog y Contacto. SEO técnico completo, diseño a medida y velocidad optimizada para convertir visitantes en clientes.',
    fullDescription: 'Desarrollo web corporativo completo para PyMEs que quieren ser tomadas en serio en internet. Incluye diseño personalizado alineado a tu marca, SEO técnico completo, integración con Google Analytics, formulario de contacto funcional y versión mobile perfecta. El sitio que hace que tus clientes confíen antes de llamarte.',
    features: [
      '✓ 6 secciones completas: Inicio, Servicios, Sobre mí, Testimonios, Blog, Contacto',
      '✓ Diseño personalizado alineado a tu marca e identidad visual',
      '✓ SEO técnico completo para posicionamiento orgánico',
      '✓ Integración Google Analytics con configuración de conversiones',
      '✓ Velocidad optimizada — carga en menos de 3 segundos',
      '✓ Panel de administración para gestionar contenido de forma autónoma'
    ],
    pricing: {
      basic: 'Desde $550.000 CLP',
      note: 'Precio no incluye impuestos. Dominio y hosting no incluidos.'
    },
    timeline: '3-5 semanas',
    deliverables: [
      'Sitio web corporativo completo de 6 secciones publicado',
      'Optimización SEO técnica completa',
      'Integración Google Analytics + goals de conversión',
      '30 días de soporte post-lanzamiento',
      'Capacitación para gestión autónoma del contenido'
    ],
    image: '/icono-pagweb.png',
    detailImage: '/ss-web-corporativa.png',
    cta: 'Ver más →',
    whatsappMessage: 'Hola Edilio, me interesa una Web Corporativa completa de 6 secciones (desde $550.000). ¿Podemos revisar los detalles?'
  },
  {
    id: 'ecommerce',
    icon: ShoppingCart,
    title: 'E-commerce Full',
    problem: '¿Quieres vender tus productos o servicios directamente por internet?',
    executiveSummary: 'Tienda online completa con pasarela de pagos, gestión de inventario, carrito de compras y checkout optimizado para reducir abandono. Tu tienda vende 24/7 sin que tú tengas que estar presente.',
    fullDescription: 'Desarrollo de tienda online completa: catálogo de productos con fotos y descripción, pasarela de pagos integrada (WebPay, PayPal, Mercado Pago), gestión de inventario, panel de administración de pedidos y checkout optimizado para maximizar la tasa de conversión. Con SEO técnico para que Google te envíe tráfico orgánico.',
    features: [
      '✓ Catálogo de productos con fotos, precios y descripción',
      '✓ Pasarela de pagos integrada (WebPay, PayPal, Mercado Pago)',
      '✓ Carrito de compras y checkout optimizado para reducir abandono',
      '✓ Panel de administración de pedidos e inventario',
      '✓ Integración WhatsApp para soporte post-venta',
      '✓ SEO técnico para posicionamiento orgánico en Google'
    ],
    pricing: {
      basic: 'Desde $750.000 CLP',
      note: 'Precio no incluye impuestos. Dominio, hosting y comisiones de pasarela no incluidos.'
    },
    timeline: '4-6 semanas',
    deliverables: [
      'Tienda online completa y funcional publicada',
      'Integración con pasarela de pagos configurada y testeada',
      'Panel de administración de productos y pedidos',
      'Optimización SEO técnica completa',
      '30 días de soporte post-lanzamiento'
    ],
    image: '/icono-pagweb.png',
    detailImage: '/ss-ecommerce.png',
    cta: 'Ver más →',
    whatsappMessage: 'Hola Edilio, me interesa crear una tienda online completa para vender mis productos por internet (desde $750.000). ¿Podemos hablar?'
  },
  {
    id: 'fabrica-contenido',
    icon: Video,
    title: 'Fábrica de Contenido RRSS + IA',
    problem: '¿Quieres publicar de forma consistente pero no tienes tiempo de crear contenido?',
    executiveSummary: 'Producción mensual de contenido profesional para tus redes sociales usando IA: diseño gráfico, copywriting persuasivo y estrategia de publicación. Tu negocio publica todos los días sin que tú lo hagas.',
    fullDescription: 'Servicio de producción de contenido mensual que combina inteligencia artificial con estrategia de marketing real. Creamos piezas de contenido para todas tus redes: posts, historias, carruseles y videos cortos. Todo alineado a tu identidad visual y orientado a venta, posicionamiento o captación de leads según el objetivo del mes.',
    features: [
      '✓ 12-20 piezas de contenido profesional al mes según el plan',
      '✓ Diseño gráfico alineado a tu identidad visual de marca',
      '✓ Copywriting orientado a venta con IA + revisión humana',
      '✓ Estrategia de publicación con calendario editorial mensual',
      '✓ Adaptación para Instagram, Facebook, TikTok y LinkedIn',
      '✓ Reporte mensual de métricas y ajuste de estrategia'
    ],
    pricing: {
      monthly: 'Desde $200.000 CLP/mes',
      note: 'Precio no incluye impuestos. Inversión en publicidad pagada no incluida.'
    },
    timeline: 'Implementación inmediata — primer lote en 1 semana',
    deliverables: [
      'Calendario editorial mensual con todas las piezas',
      '12-20 piezas de contenido listas para publicar',
      'Adaptaciones por plataforma incluidas',
      'Reporte mensual de métricas y rendimiento',
      'Ajuste de estrategia mensual según resultados'
    ],
    image: '/icono-rrss.png',
    detailImage: '/ss-rrss.png',
    cta: 'Ver más →',
    whatsappMessage: 'Hola Edilio, me interesa el servicio de Fábrica de Contenido RRSS + IA para publicar de forma consistente (desde $200.000/mes). ¿Podemos hablar?'
  },
  {
    id: 'gestion-ads',
    icon: BarChart2,
    title: 'Gestión Campañas Ads',
    problem: '¿Inviertes en publicidad digital pero no ves resultados concretos?',
    executiveSummary: 'Gestión profesional de campañas de publicidad pagada en Meta Ads (Facebook/Instagram) y Google Ads. Solo pagas si los resultados llegan — optimización continua para maximizar el retorno de tu inversión publicitaria.',
    fullDescription: 'Gestión estratégica de campañas de publicidad pagada en Meta Ads y/o Google Ads. Creación de audiencias, diseño de creatividades, configuración de objetivos de conversión y optimización continua basada en datos reales. Con reportes semanales de rendimiento y ajuste de presupuesto según resultados medibles.',
    features: [
      '✓ Creación y configuración de campañas en Meta Ads y/o Google Ads',
      '✓ Segmentación de audiencias por intereses, comportamientos y geografía',
      '✓ Diseño de creatividades (imágenes y textos) orientadas a conversión',
      '✓ Configuración de pixel de Meta y conversiones de Google',
      '✓ Optimización continua con ajustes semanales basados en datos',
      '✓ Reporte semanal de métricas: alcance, clics, costo por lead y ROAS'
    ],
    pricing: {
      monthly: 'Desde $250.000 CLP/mes',
      note: 'Precio no incluye impuestos. Presupuesto publicitario (inversión en pauta) se acuerda por separado.'
    },
    timeline: 'Campañas activas en 1 semana',
    deliverables: [
      'Campañas configuradas y activas en Meta y/o Google',
      'Pixel e integraciones de conversión instaladas',
      'Creatividades (imágenes + textos) por campaña',
      'Reporte semanal de rendimiento y métricas',
      'Reunión mensual de revisión de resultados y estrategia'
    ],
    image: '/icono-erp.png',
    detailImage: '/ss-google-maps.png',
    cta: 'Ver más →',
    whatsappMessage: 'Hola Edilio, me interesa que gestiones mis campañas de publicidad en Meta y/o Google Ads (desde $250.000/mes). ¿Podemos revisar mi caso?'
  },
  {
    id: 'app-movil',
    icon: Smartphone,
    title: 'App Android',
    problem: '¿Necesitas una app móvil para tu negocio?',
    executiveSummary: 'Desarrollo de aplicación nativa Android a medida: vitrina de productos, pasarela de pagos, notificaciones push y publicación en Google Play Store. Precio según funcionalidades — solicita tu cotización.',
    fullDescription: 'Desarrollo de aplicaciones móviles nativas Android diseñadas para tu negocio específico. Desde una app de catálogo y pedidos hasta un sistema de gestión de clientes móvil. Incluye diseño UX/UI profesional, integración con backend y APIs, pasarela de pagos y publicación en Google Play Store.',
    features: [
      '✓ App nativa Android de alto rendimiento',
      '✓ Diseño UX/UI personalizado y orientado a conversión',
      '✓ Integración con pasarela de pagos (si aplica)',
      '✓ Notificaciones push para reactivar clientes',
      '✓ Panel de administración web para gestionar el contenido de la app',
      '✓ Publicación en Google Play Store incluida'
    ],
    pricing: {
      basic: 'Cotización',
      note: 'Precio según funcionalidades. Solicita tu cotización gratuita sin compromiso.'
    },
    timeline: '6-12 semanas según complejidad',
    deliverables: [
      'App funcional y testeada publicada en Google Play Store',
      'Diseño UX/UI profesional centrado en conversión',
      'Documentación técnica completa',
      'Soporte técnico 3 meses post-lanzamiento',
      'Manual de usuario y video tutoriales'
    ],
    image: '/icono-app.png',
    detailImage: '/ss-app.png',
    cta: 'Solicitar cotización →',
    whatsappMessage: 'Hola Edilio, me interesa desarrollar una app Android para mi negocio. ¿Podemos hablar sobre los detalles y obtener una cotización?'
  },
  {
    id: 'erp',
    icon: Database,
    title: 'ERP/CRM para PyMEs',
    problem: '¿Tu operación completa vive en Excel, WhatsApp y la memoria de una sola persona?',
    executiveSummary: 'Sistema de gestión a medida que integra ventas, inventario, facturación y CRM en una sola plataforma. Sin mensualidades eternas, sin software genérico que nadie usa. Inversión única, hecha a la medida de tu operación real.',
    fullDescription: 'No necesitas el software corporativo más complejo del mundo. SAP y Salesforce son para empresas que necesitan aviones — yo te doy la camioneta perfecta para tu negocio. ERP/CRM adaptado exactamente a tus procesos: módulos de ventas, inventario, facturación y gestión de clientes conectados en tiempo real, sin mensualidades por usuario.',
    features: [
      '✓ Módulos de ventas, inventario y facturación integrados en tiempo real',
      '✓ CRM para seguimiento de clientes y pipeline de ventas',
      '✓ Reportes gerenciales automáticos — sin esperar al contador',
      '✓ Multiusuario y multi-sucursal sin costo adicional',
      '✓ Migración de datos desde Excel y sistemas actuales',
      '✓ Soporte y actualizaciones por 1 año incluidos'
    ],
    pricing: {
      basic: 'Cotización',
      note: 'Precio según funcionalidades requeridas. Inversión única, sin mensualidades eternas. Solicita tu cotización gratuita.'
    },
    timeline: '8-16 semanas según complejidad',
    deliverables: [
      'Sistema ERP/CRM 100% funcional y adaptado a tus procesos',
      'Capacitación completa para todo el equipo',
      'Documentación técnica + manual de usuario',
      'Soporte técnico 3 meses post-implementación',
      'Video tutoriales por módulo'
    ],
    image: '/icono-erp.png',
    detailImage: '/ss-erp.png',
    cta: 'Solicitar cotización →',
    whatsappMessage: 'Hola Edilio, me interesa implementar un ERP/CRM para ordenar la operación de mi empresa. ¿Podemos hablar sobre los detalles y obtener una cotización?'
  },
]
