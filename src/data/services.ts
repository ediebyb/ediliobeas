import { MapPin, Globe, Smartphone, FileSpreadsheet, Database, TrendingUp, Share2 } from 'lucide-react'
import type { Service } from '@/types'

export const SERVICES: Service[] = [
  {
    id: 'google-maps',
    icon: MapPin,
    title: 'Aparece primero en Google Maps y roba clientes a tu competencia',
    problem: '¿Tu competencia aparece antes que tú cuando tus clientes buscan?',
    executiveSummary: 'El 76% de las búsquedas "cerca de mí" terminan en visita ese mismo día. Si no estás en los 3 primeros resultados de Google Maps, no existes para ese cliente. Eso se arregla en menos de 30 días.',
    fullDescription: 'No es suficiente tener un perfil en Google — necesitas controlarlo y optimizarlo para que te encuentren primero. Hacemos la optimización completa: nombre con keywords locales, estrategia de reseñas para llegar a 4.5+ estrellas, 10+ fotos profesionales, publicaciones semanales que el algoritmo premia, y link directo a tu WhatsApp para que la fricción no mate la venta. Todo medible con reportes mensuales.',
    features: [
      '✓ Control total del perfil (muchas PyMEs no son dueñas del suyo)',
      '✓ Nombre optimizado para búsqueda con keywords locales de alto volumen',
      '✓ Estrategia de reseñas para llegar y mantener 4.5+ estrellas',
      '✓ 10+ fotos profesionales (42% más solicitudes de ruta con fotos)',
      '✓ Publicaciones semanales que le ganan visibilidad a quien no las hace',
      '✓ Link directo a WhatsApp — cero fricción, más ventas'
    ],
    pricing: {
      optimization: '$270.000 CLP',
      creation: '$300.000 CLP',
      note: 'Precio no incluye impuestos'
    },
    timeline: '2-3 semanas',
    deliverables: [
      'Perfil 100% optimizado y verificado en top 3',
      'Estrategia de keywords locales con alto volumen de búsqueda',
      'Galería de 10+ fotos profesionales optimizadas',
      'Plan de contenido mensual enfocado en conversiones',
      'Reporte mensual con métricas de llamadas y visitas reales'
    ],
    image: '/icono-google-maps.png',
    detailImage: '/ss-google-maps.png',
    cta: 'Ver más →',
    whatsappMessage: 'Hola Edilio, busqué mi negocio en Google Maps y mi competencia aparece antes que yo. Me interesa el servicio de optimización de Google Perfil. ¿Podemos hablar?'
  },
  {
    id: 'paginas-web',
    icon: Globe,
    title: 'Una web que vende 24/7 — no solo "se ve bonita"',
    problem: '¿Tu web tiene visitas pero no genera clientes ni ventas reales?',
    executiveSummary: 'La mayoría de los freelancers te entregan la web y desaparecen. Yo construyo un ecosistema completo: Web + SEO + velocidad + integración WhatsApp. Aumento promedio del 40% en leads calificados en 90 días.',
    fullDescription: 'No hago cosas bonitas, hago sistemas que traen clientes. Diseño y desarrollo sitios web con foco exclusivo en conversión: velocidad <3s (el 53% abandona si tarda más), SEO técnico completo para que te encuentren antes que tu competencia, formularios y WhatsApp integrado para capturar leads, y métricas reales para que sepas exactamente cuánto ROI está generando tu inversión.',
    features: [
      '✓ Diseño enfocado en conversión, no en ganar premios de diseño',
      '✓ SEO técnico completo — tus clientes te encuentran antes que a tu competencia',
      '✓ Velocidad <3s — el 53% abandona si la web tarda más de 3 segundos',
      '✓ Integración WhatsApp con mensaje predefinido — cero fricción entre visita y venta',
      '✓ eCommerce con checkout optimizado para reducir abandono de carrito',
      '✓ Analytics + goals configurados — sabes exactamente qué funciona y qué no'
    ],
    pricing: {
      landing: '$570.000 CLP',
      ecommerce: 'Desde $970.000 CLP',
      note: 'Precio no incluye impuestos. Dominio y hosting no incluidos.'
    },
    timeline: '2-4 semanas',
    deliverables: [
      'Diseño personalizado único enfocado en conversiones',
      'Optimización SEO completa con keywords de alta intención de compra',
      'Integración Google Analytics + configuración de goals de conversión',
      'Capacitación de uso incluida + guía de mejora continua',
      '30 días de soporte gratuito post-lanzamiento'
    ],
    image: '/icono-pagweb.png',
    detailImage: '/ss-pagweb.png',
    cta: 'Ver más →',
    whatsappMessage: 'Hola Edilio, tengo una web pero no genera ventas reales. Me interesa crear o mejorar mi ecosistema digital. ¿Podemos agendar una llamada?'
  },
  {
    id: 'app-movil',
    icon: Smartphone,
    title: 'Lleva tu negocio al bolsillo de tus clientes con una app propia',
    problem: '¿Tus clientes tienen que llamarte o escribirte para comprarte?',
    executiveSummary: 'Una app nativa Android pone tu negocio en el bolsillo de tus clientes — catálogo, pagos, notificaciones y fidelización en un solo lugar. Más retención, más ventas recurrentes, menos dependencia de intermediarios.',
    fullDescription: 'Desarrollo aplicaciones móviles nativas Android diseñadas para funcionar como canal de ventas directo: vitrina de productos interactiva, pasarela de pagos integrada, notificaciones push para reactivar clientes inactivos, y publicación en Google Play Store. Sin mensualidades de plataforma, sin comisiones de intermediarios.',
    features: [
      '✓ App nativa Android de alto rendimiento — no una web disfrazada de app',
      '✓ Vitrina de productos interactiva con fotos, precios y descripción',
      '✓ Pasarela de pagos integrada — el cliente paga sin salir de la app',
      '✓ Notificaciones push para reactivar clientes que no vuelven',
      '✓ CRM básico integrado para gestión de clientes y pedidos',
      '✓ Publicación en Google Play Store incluida'
    ],
    pricing: {
      basic: 'Desde $1.700.000 CLP',
      note: 'Precio no incluye impuestos. Costo final según funcionalidades requeridas.'
    },
    timeline: '6-10 semanas',
    deliverables: [
      'App funcional, testeada y publicada en Google Play Store',
      'Diseño UX/UI profesional centrado en conversión',
      'Integración completa con backend y pasarela de pagos',
      'Soporte técnico 3 meses post-lanzamiento incluido',
      'Manual de usuario y video tutoriales'
    ],
    image: '/icono-app.png',
    detailImage: '/ss-app.png',
    cta: 'Ver más →',
    whatsappMessage: 'Hola Edilio, me interesa desarrollar una app móvil para mi negocio para vender directamente a mis clientes. ¿Cuáles son los próximos pasos?'
  },
  {
    id: 'google-sheet',
    icon: FileSpreadsheet,
    title: 'Elimina el trabajo manual repetitivo y recupera 15+ horas cada semana',
    problem: '¿Sigues copiando datos a mano, enviando reportes manualmente y cometiendo errores en Excel?',
    executiveSummary: 'Lo que tu equipo hace 10 veces al día de forma manual, un sistema lo hace solo en segundos. Automatizo tus procesos con Google Apps Script para que recuperes 15+ horas semanales y cero errores de transcripción.',
    fullDescription: 'El caos operativo no es solo agotador — es caro. Si tienes personas dedicando horas a copiar, pegar y enviar información que podría fluir sola, estás perdiendo dinero todos los días. Implemento workflows con Google Apps Script que conectan Forms, Sheets, Gmail y Drive para que los reportes se generen solos, los datos fluyan sin intervención humana y las decisiones se tomen con información en tiempo real.',
    features: [
      '✓ Reportes automáticos generados y enviados sin intervención humana',
      '✓ Integración Forms → Sheets → Gmail sin copiar ni pegar',
      '✓ Dashboards en tiempo real para decisiones basadas en datos reales',
      '✓ Alertas automáticas cuando algo sale del rango esperado',
      '✓ Cero errores de transcripción — la máquina no se equivoca',
      '✓ Documentación completa para que tu equipo use el sistema sin ti'
    ],
    pricing: {
      process: '$270.000 CLP por proceso',
      note: 'Precio no incluye impuestos'
    },
    timeline: '2-3 semanas por proceso',
    deliverables: [
      'Proceso 100% automatizado y documentado',
      'Documentación técnica + manual de usuario en lenguaje simple',
      'Capacitación del equipo incluida',
      'Soporte técnico 1 mes post-implementación'
    ],
    image: '/icono-sheets.png',
    detailImage: '/ss-sheets.png',
    cta: 'Ver más →',
    whatsappMessage: 'Hola Edilio, tengo procesos manuales repetitivos que consumen mucho tiempo de mi equipo. Me interesa automatizarlos con Google Sheets. ¿Podemos revisar mi caso?'
  },
  {
    id: 'erp',
    icon: Database,
    title: 'Orden total en tu operación — ventas, inventario y finanzas en un solo sistema',
    problem: '¿Tu negocio vive en Excel, WhatsApp y la cabeza de una sola persona?',
    executiveSummary: 'En una PyME promedio, el desorden operativo silencioso cuesta entre $1.500.000 y $3.000.000 CLP al mes en errores, tiempo perdido y decisiones a ciegas. Un ERP a medida lo resuelve de una vez, con inversión única sin mensualidades eternas.',
    fullDescription: 'No necesitas el software corporativo más complejo del mundo. SAP y Salesforce son aviones para empresas que necesitan una camioneta. Yo implemento un ERP/CRM adaptado exactamente a tus procesos: ventas, inventario, facturación y CRM conectados en tiempo real. Cero complejidad innecesaria, solo los módulos que tu empresa realmente usa. Sin mensualidades por usuario que se acumulan año tras año.',
    features: [
      '✓ Módulos de ventas, inventario y facturación integrados en tiempo real',
      '✓ CRM para que ningún cliente ni seguimiento quede en la memoria de alguien',
      '✓ Migración de datos desde Excel y sistemas actuales incluida',
      '✓ Reportes gerenciales automáticos — no más esperar al contador del mes',
      '✓ Multiusuario y multi-sucursal sin costo adicional por usuario',
      '✓ Soporte y actualizaciones incluidas por 1 año completo'
    ],
    pricing: {
      basic: 'Desde $3.700.000 CLP',
      note: 'Precio no incluye impuestos. Inversión única, sin mensualidades eternas.'
    },
    timeline: '8-12 semanas',
    deliverables: [
      'Sistema ERP 100% funcional, testeado y adaptado a tus procesos',
      'Capacitación completa para todo el equipo — nadie queda sin saber usarlo',
      'Documentación técnica + manual de usuario en lenguaje simple',
      'Soporte técnico 3 meses post-implementación incluido',
      'Video tutoriales por módulo para consulta interna'
    ],
    image: '/icono-erp.png',
    detailImage: '/ss-erp.png',
    cta: 'Ver más →',
    whatsappMessage: 'Hola Edilio, mi operación es un caos con Excel y WhatsApp. Me interesa implementar un ERP/CRM para ordenar el negocio. ¿Podemos hablar?'
  },
  {
    id: 'inversion',
    icon: TrendingUp,
    title: 'Aprende a invertir en bolsa con criterio — no con miedo ni con suerte',
    problem: '¿Quieres invertir tu dinero pero no sabes en qué, dónde ni cómo empezar?',
    executiveSummary: 'Educación financiera práctica en sesión personalizada de 1 hora. Conoce tu perfil de inversor, entiende los mercados y toma decisiones informadas con criterio profesional — sin promesas falsas de rentabilidad.',
    fullDescription: 'Sesión en vivo 1:1 donde evalúo tu capacidad real de inversión, tu relación con el riesgo y te muestro el panorama completo: plataformas disponibles, brokers, costos, comisiones y estrategias básicas de diversificación. Educación bursátil práctica y honesta. Sin productos financieros que vender, sin comisiones por recomendación.',
    features: [
      '✓ Evaluación de perfil inversor y tolerancia real al riesgo',
      '✓ Panorama completo de plataformas y brokers disponibles en LATAM',
      '✓ Costos, comisiones y aspectos prácticos que nadie te explica',
      '✓ Estrategias básicas de diversificación para preservar capital',
      '✓ Gestión emocional del riesgo — la parte más ignorada de invertir',
      '✓ Sin promesas de rentabilidad — solo educación real'
    ],
    pricing: {
      session: '$37.000 CLP',
      note: 'Precio no incluye impuestos. Sesión de 1 hora online con grabación incluida.'
    },
    timeline: '1 hora (sesión online)',
    deliverables: [
      'Sesión personalizada 1:1 adaptada a tu situación específica',
      'Material de apoyo descargable con recursos y plataformas',
      'Grabación de la sesión para revisar cuantas veces necesites',
      'Seguimiento por email durante 7 días post-sesión'
    ],
    note: '* Servicio complementario — Requiere haber trabajado al menos 1 proyecto de transformación digital',
    image: '/icono-inversion.png',
    detailImage: '/ss-inversion.png',
    cta: 'Ver más →',
    whatsappMessage: 'Hola Edilio, me interesa la consultoría 1:1 sobre cómo empezar a invertir en bolsa. ¿Cómo puedo agendar mi sesión?'
  },
  {
    id: 'redes-sociales',
    icon: Share2,
    title: 'Redes sociales que venden — no que acumulan likes sin conversión',
    problem: '¿Publicas constantemente pero tus redes no generan clientes reales?',
    executiveSummary: 'Saber qué publicar no sirve si no tienes tiempo de hacerlo. Creo 12-15 publicaciones profesionales al mes usando IA para que tu negocio nunca deje de publicar — mientras tú te dedicas a vender.',
    fullDescription: 'Deja de publicar por publicar. La mayoría de las PyMEs en redes sociales generan contenido sin estrategia y terminan agotadas sin resultados. Evalúo tu situación actual, optimizo tus biografías para que conviertan visitantes en seguidores calificados, y ejecuto un plan de contenido mensual con IA enfocado en tus objetivos de venta. Diseño gráfico + copywriting + administración de campañas pagadas + métricas reales de conversión.',
    features: [
      '✓ Auditoría completa de tu presencia actual con informe detallado',
      '✓ Bios optimizadas para algoritmos e IA — que te encuentren y te recomienden',
      '✓ 12-15 piezas de contenido profesional al mes usando IA',
      '✓ Copywriting orientado a venta, no a acumular likes sin conversión',
      '✓ Administración y optimización de campañas pagadas Meta/Google Ads',
      '✓ Métricas semanales de crecimiento y conversión real — no solo seguidores'
    ],
    pricing: {
      unique: 'Desde $370.000 CLP (pago único)',
      monthly: 'Desde $127.000 CLP/mes (pago recurrente)',
      note: 'Precio no incluye impuestos. Inversión en publicidad pagada no incluida.'
    },
    timeline: '1 semana de consultoría inicial + implementación inmediata',
    deliverables: [
      'Auditoría completa de redes con informe de oportunidades',
      'Bios optimizadas para conversión en todas tus plataformas',
      'Plan de contenido mensual estratégico personalizado',
      '12-15 piezas de contenido profesional por mes',
      'Reporte semanal de métricas, alcance y conversiones reales',
      'Soporte continuo y ajuste de estrategia según resultados'
    ],
    image: '/icono-rrss.png',
    detailImage: '/ss-rrss.png',
    cta: 'Ver más →',
    whatsappMessage: 'Hola Edilio, publico en redes pero no genero ventas reales. Me interesa que manejes la estrategia de contenido de mi negocio. ¿Podemos hablar?'
  },
]
