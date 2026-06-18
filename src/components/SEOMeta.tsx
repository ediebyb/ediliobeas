import { useEffect } from 'react'

interface SEOMetaProps {
  title: string
  description: string
  ogImage?: string
  ogUrl?: string
  ogType?: 'website' | 'article'
}

const SITE_NAME = 'Edilio Beas — Consultor PyME LATAM'
const DEFAULT_IMAGE = '/og-image.jpg'
const BASE_URL = 'https://ediliobeas.page.dev'

export default function SEOMeta({
  title,
  description,
  ogImage = DEFAULT_IMAGE,
  ogUrl,
  ogType = 'website',
}: SEOMetaProps) {
  const fullTitle = `${title} | ${SITE_NAME}`
  const fullImage = ogImage.startsWith('http') ? ogImage : `${BASE_URL}${ogImage}`
  const fullUrl = ogUrl ? `${BASE_URL}${ogUrl}` : BASE_URL

  useEffect(() => {
    // Title
    document.title = fullTitle

    // Meta description
    setMeta('name', 'description', description)

    // Open Graph
    setMeta('property', 'og:title', fullTitle)
    setMeta('property', 'og:description', description)
    setMeta('property', 'og:image', fullImage)
    setMeta('property', 'og:url', fullUrl)
    setMeta('property', 'og:type', ogType)
    setMeta('property', 'og:site_name', SITE_NAME)

    // Twitter Card
    setMeta('name', 'twitter:card', 'summary_large_image')
    setMeta('name', 'twitter:title', fullTitle)
    setMeta('name', 'twitter:description', description)
    setMeta('name', 'twitter:image', fullImage)

    return () => {
      document.title = SITE_NAME
    }
  }, [fullTitle, description, fullImage, fullUrl, ogType])

  return null
}

function setMeta(attr: 'name' | 'property', key: string, value: string) {
  let el = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', value)
}
