import type { ComponentType } from 'react'

export interface Service {
  id: string
  icon: ComponentType<{ size?: number | string; className?: string }>
  title: string
  problem: string
  executiveSummary: string
  fullDescription: string
  features: string[]
  pricing: {
    note: string
    original?: string
    discounted?: string
    [key: string]: string | undefined
  }
  timeline: string
  deliverables: string[]
  note?: string
  image: string
  detailImage?: string
  cta: string
  whatsappMessage?: string
}

export interface Testimonial {
  id: string
  name: string
  role: string
  quote: string
  avatar?: string
  result?: string
}

export interface CredentialStat {
  value: string
  label: string
  description?: string
}

export interface NavLink {
  label: string
  href: string
}

export interface FormData {
  name: string
  email: string
  phone: string
  message: string
  serviceInterest?: string
}

export type FormErrors = Partial<Record<keyof FormData, string>>

export type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

export interface Reference {
  id: number
  authors: string
  year: number
  title: string
  source: string
  url?: string
  doi?: string
}

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  date: string
  category: string
  content: string
  references: Reference[]
  image?: string
  aiGenerated: boolean
}

export interface Client {
  id: string
  name: string
  logo?: string
  url?: string
}

export interface Product {
  id: string
  type: 'service' | 'course'
  title: string
  description: string
  price: number
  currency: 'CLP' | 'USD'
  instructor?: string
  slug: string
  status: 'active' | 'coming_soon'
}

export interface CartItem {
  productId: string
  quantity: number
  price: number
}
