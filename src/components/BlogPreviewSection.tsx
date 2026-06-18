import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, Tag, BookOpen } from 'lucide-react'
import { BLOG_POSTS } from '@/data/blog'
import { staggerContainer, fadeInUp } from '@/utils/animations'

export default function BlogPreviewSection() {
  const recentPosts = BLOG_POSTS.slice(0, 3)

  return (
    <section
      id="blog"
      className="py-20 bg-white"
      aria-labelledby="blog-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2 px-4 py-1 bg-[#05121F]/10 rounded-full mb-4"
          >
            <BookOpen className="w-4 h-4 text-[#05121F]" />
            <span className="text-[#05121F] text-sm font-semibold">Conocimiento con respaldo académico</span>
          </motion.div>
          <motion.h2
            id="blog-heading"
            variants={fadeInUp}
            className="text-3xl sm:text-4xl font-bold text-[#05121F] mb-4"
          >
            Blog: aprende a vender más con datos reales
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-gray-600 max-w-2xl mx-auto text-lg">
            Artículos con fuentes referenciadas para que tomes mejores decisiones en tu PyME.
          </motion.p>
        </motion.div>

        {/* Posts */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid md:grid-cols-3 gap-8"
        >
          {recentPosts.map((post) => (
            <motion.article
              key={post.slug}
              variants={fadeInUp}
              className="group border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl hover:border-[#C5A059]/30 transition-all duration-300 flex flex-col bg-white"
            >
              {post.image && (
                <div className="h-48 overflow-hidden bg-[#05121F]">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex items-center gap-1 text-xs text-[#C5A059] font-semibold">
                    <Tag className="w-3 h-3" />
                    {post.category}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs text-gray-400">
                    <Calendar className="w-3 h-3" />
                    {new Date(post.date).toLocaleDateString('es-CL', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </span>
                </div>
                <h3 className="font-bold text-[#05121F] text-lg mb-3 line-clamp-3 leading-snug group-hover:text-[#C5A059] transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-500 text-sm line-clamp-2 mb-6 flex-1">{post.excerpt}</p>
                <Link
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-[#05121F] font-semibold text-sm hover:text-[#C5A059] transition-colors group/btn"
                >
                  Leer artículo
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[#05121F] text-[#05121F] font-semibold rounded-xl hover:bg-[#05121F] hover:text-white transition-all duration-200"
          >
            Ver todos los artículos
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
