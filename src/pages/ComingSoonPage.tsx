import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, Bell } from 'lucide-react'
import { Link } from 'react-router-dom'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

interface ComingSoonPageProps {
  title: string
  description: string
}

export default function ComingSoonPage({ title, description }: ComingSoonPageProps) {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-tech-blue">
      <Navigation />
      <section className="min-h-[80vh] flex items-center justify-center px-4 py-32">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-[#C5A059]/20 rounded-full mb-8">
              <Bell className="w-10 h-10 text-[#C5A059]" />
            </div>
            <span className="inline-block px-4 py-1 bg-[#C5A059]/20 text-[#C5A059] rounded-full text-sm font-semibold mb-6">
              Próximamente
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{title}</h1>
            <p className="text-xl text-gray-300 mb-10">{description}</p>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Tu correo electrónico"
                  required
                  className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-[#C5A059] transition-colors"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-[#C5A059] text-[#05121F] font-bold rounded-xl hover:bg-[#D4AF6A] transition-colors whitespace-nowrap"
                >
                  Avísame
                </button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-[#C5A059]/20 border border-[#C5A059]/30 rounded-xl p-6"
              >
                <p className="text-[#C5A059] font-semibold text-lg">¡Listo! Te avisamos cuando esté disponible.</p>
              </motion.div>
            )}

            <div className="mt-10">
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-gray-400 hover:text-[#C5A059] transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Volver al inicio
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
