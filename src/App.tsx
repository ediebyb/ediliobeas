import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import ScrollToTop from '@/components/ScrollToTop'
import HomePage from '@/pages/HomePage'
import ServicesListPage from '@/pages/ServicesListPage'
import ServiceDetailPage from '@/pages/ServiceDetailPage'
import BlogListPage from '@/pages/BlogListPage'
import BlogPostPage from '@/pages/BlogPostPage'
import ComingSoonPage from '@/pages/ComingSoonPage'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/servicios" element={<ServicesListPage />} />
        <Route path="/servicios/:serviceId" element={<ServiceDetailPage />} />
        <Route path="/blog" element={<BlogListPage />} />
        <Route path="/blog/:postSlug" element={<BlogPostPage />} />
        <Route path="/tienda" element={<ComingSoonPage title="Tienda Online" description="Próximamente podrás contratar servicios y comprar cursos directamente desde aquí." />} />
        <Route path="/tienda/:productId" element={<ComingSoonPage title="Tienda Online" description="Próximamente podrás contratar servicios y comprar cursos directamente desde aquí." />} />
        <Route path="/cursos" element={<ComingSoonPage title="Cursos Digitales" description="Próximamente: cursos de transformación digital, marketing y automatización para PyMEs." />} />
        <Route path="/cursos/:courseId" element={<ComingSoonPage title="Cursos Digitales" description="Próximamente: cursos de transformación digital, marketing y automatización para PyMEs." />} />
        {/* Redirects para URLs legacy */}
        <Route path="/inicio" element={<Navigate to="/" replace />} />
        <Route path="/sobre-mi" element={<Navigate to="/#sobre-mi" replace />} />
        <Route path="/testimonios" element={<Navigate to="/#testimonios" replace />} />
        <Route path="/contacto" element={<Navigate to="/#contacto" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
