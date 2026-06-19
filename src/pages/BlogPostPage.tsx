import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Calendar, Tag, Bot, ExternalLink } from 'lucide-react'
import { BLOG_POSTS } from '@/data/blog'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import SEOMeta from '@/components/SEOMeta'

export default function BlogPostPage() {
  const { postSlug } = useParams<{ postSlug: string }>()
  const post = BLOG_POSTS.find((p) => p.slug === postSlug)

  if (!post) return <Navigate to="/blog" replace />

  return (
    <div className="min-h-screen bg-tech-blue">
      <SEOMeta
        title={post.title}
        description={post.excerpt}
        ogUrl={`/blog/${post.slug}`}
        ogType="article"
        ogImage={post.image}
      />
      <Navigation />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        {/* Back */}
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-[#C5A059] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al Blog
          </Link>
        </motion.div>

        {/* Meta */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="inline-flex items-center gap-1 text-sm text-[#C5A059] font-semibold">
              <Tag className="w-4 h-4" />
              {post.category}
            </span>
            <span className="inline-flex items-center gap-1 text-sm text-gray-400">
              <Calendar className="w-4 h-4" />
              {new Date(post.date).toLocaleDateString('es-CL', { year: 'numeric', month: 'long', day: 'numeric' })}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-6">
            {post.title}
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed border-l-4 border-[#C5A059] pl-4">
            {post.excerpt}
          </p>
        </motion.div>

        {/* AI disclaimer — removed from top, shown at bottom */}

        {/* Hero image */}
        {post.image && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
            className="mb-10 rounded-2xl overflow-hidden"
          >
            <img src={post.image} alt={post.title} className="w-full h-64 object-cover" />
          </motion.div>
        )}

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="prose prose-invert prose-lg max-w-none
            prose-headings:text-white prose-headings:font-bold
            prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h2:text-[#C5A059]
            prose-p:text-white prose-p:leading-relaxed prose-p:mb-4
            prose-strong:text-white prose-strong:font-semibold
            prose-ul:text-white prose-li:mb-2 prose-li:text-white
            prose-ol:text-white
            prose-a:text-[#C5A059] prose-a:no-underline hover:prose-a:underline"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* References */}
        {post.references.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-16 pt-8 border-t border-white/10"
          >
            <h2 className="text-xl font-bold text-white mb-6">Referencias bibliográficas</h2>
            <ol className="space-y-4">
              {post.references.map((ref) => (
                <li key={ref.id} className="flex gap-3 text-sm text-gray-400">
                  <span className="text-[#C5A059] font-bold flex-shrink-0">[{ref.id}]</span>
                  <span>
                    {ref.authors} ({ref.year}). <em className="text-gray-300">{ref.title}</em>. {ref.source}.
                    {ref.doi && (
                      <span> DOI: <a href={`https://doi.org/${ref.doi}`} target="_blank" rel="noopener noreferrer" className="text-[#C5A059] hover:underline">{ref.doi}</a></span>
                    )}
                    {ref.url && !ref.doi && (
                      <a href={ref.url} target="_blank" rel="noopener noreferrer" className="ml-2 inline-flex items-center gap-1 text-[#C5A059] hover:underline">
                        Ver fuente <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </span>
                </li>
              ))}
            </ol>
          </motion.section>
        )}

        {/* AI disclaimer — moved to bottom, small */}
        {post.aiGenerated && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-8 pt-6 border-t border-white/10"
          >
            <p className="text-xs text-gray-500 italic flex items-center gap-2">
              <Bot className="w-3 h-3 text-gray-500 flex-shrink-0" />
              Artículo generado con asistencia de IA. Las fuentes académicas y datos citados han sido verificados manualmente por el autor antes de la publicación.
            </p>
          </motion.div>
        )}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 bg-gradient-to-r from-[#05121F] via-[#0a1f35] to-[#05121F] border border-[#C5A059]/30 rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-3">¿Listo para aplicar esto en tu PyME?</h3>
          <p className="text-gray-300 mb-6">La primera consultoría es gratuita. Sin compromiso. Con un plan de acción real.</p>
          <a
            href="https://ediliobeas.setmore.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#C5A059] text-[#05121F] font-bold px-8 py-4 rounded-xl hover:bg-[#D4AF6A] transition-colors"
          >
            Agenda tu consultoría gratuita →
          </a>
        </motion.div>
      </article>

      <Footer />
    </div>
  )
}
