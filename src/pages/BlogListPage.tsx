import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Calendar, Tag, ArrowRight, BookOpen } from 'lucide-react'
import { BLOG_POSTS } from '@/data/blog'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import SEOMeta from '@/components/SEOMeta'
import { staggerContainer, fadeInUp } from '@/utils/animations'

const POSTS_PER_PAGE = 6

export default function BlogListPage() {
  const [page, setPage] = useState(1)
  const totalPages = Math.ceil(BLOG_POSTS.length / POSTS_PER_PAGE)
  const paginated = BLOG_POSTS.slice((page - 1) * POSTS_PER_PAGE, page * POSTS_PER_PAGE)

  return (
    <div className="min-h-screen bg-tech-blue">
      <SEOMeta
        title="Blog — Transformación Digital para PyMEs"
        description="Artículos con respaldo académico sobre marketing digital, automatización y crecimiento para PyMEs en LATAM. Investigación con fuentes referenciadas."
        ogUrl="/blog"
      />
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1 bg-[#C5A059]/20 rounded-full mb-6"
          >
            <BookOpen className="w-4 h-4 text-[#C5A059]" />
            <span className="text-[#C5A059] text-sm font-semibold">Conocimiento con respaldo académico</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Blog de Transformación Digital
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Artículos con fuentes referenciadas para que tomes decisiones de negocio con datos reales, no con intuición.
          </motion.p>
        </div>
      </section>

      {/* Posts grid */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {paginated.map((post) => (
              <motion.article
                key={post.slug}
                variants={fadeInUp}
                className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-[#C5A059]/40 transition-all duration-300 hover:shadow-lg hover:shadow-[#C5A059]/10 flex flex-col"
              >
                <Link to={`/blog/${post.slug}`} className="flex flex-col flex-1 no-underline">
                {post.image && (
                  <div className="h-48 overflow-hidden">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" />
                  </div>
                )}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="inline-flex items-center gap-1 text-xs text-[#C5A059] font-semibold">
                      <Tag className="w-3 h-3" />{post.category}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs text-gray-400">
                      <Calendar className="w-3 h-3" />
                      {new Date(post.date).toLocaleDateString('es-CL', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </span>
                  </div>
                  <h2 className="text-lg font-bold text-white mb-3 line-clamp-3 leading-snug group-hover:text-[#C5A059] transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-400 text-sm mb-6 line-clamp-3 flex-1">{post.excerpt}</p>
                  <span className="inline-flex items-center gap-2 text-[#C5A059] font-semibold text-sm">
                    Leer artículo completo
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
                </Link>
              </motion.article>
            ))}
          </motion.div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center gap-3 mt-12">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <button
                  key={p}
                  onClick={() => setPage(p)}
                  className={`w-10 h-10 rounded-lg font-semibold transition-colors ${
                    p === page
                      ? 'bg-[#C5A059] text-[#05121F]'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}
