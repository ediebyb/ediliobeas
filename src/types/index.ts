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
    optimization?: string
    creation?: string
    landing?: string
    ecommerce?: string
    basic?: string
    process?: string
    session?: string
    note: string
  }
  timeline: string
  deliverables: string[]
  note?: string
  image: string
  cta: string
}

export interface Testimonial {
  id: string
  name: string
  role: string
  quote: string
  avatar?: string
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
}

export type FormErrors = Partial<Record<keyof FormData, string>>

export type FormStatus = 'idle' | 'submitting' | 'success' | 'error'
