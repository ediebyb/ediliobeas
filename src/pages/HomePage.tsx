import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import ClientsSection from '@/components/ClientsSection'
import ServicesSection from '@/components/ServicesSection'
import AboutSection from '@/components/AboutSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import BlogPreviewSection from '@/components/BlogPreviewSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <section id="inicio">
          <HeroSection />
        </section>
        <ClientsSection />
        <section id="servicios">
          <ServicesSection />
        </section>
        <section id="sobre-mi">
          <AboutSection />
        </section>
        <section id="testimonios">
          <TestimonialsSection />
        </section>
        <section id="blog">
          <BlogPreviewSection />
        </section>
        <section id="contacto">
          <ContactSection />
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
