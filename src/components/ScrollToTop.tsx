import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * On route change:
 * - If the URL has a hash (#section), scroll to that section after a brief delay.
 * - Otherwise scroll to the top instantly.
 */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      // Give the DOM time to render the target page before scrolling
      const id = hash.replace('#', '')
      const timer = setTimeout(() => {
        const el = document.getElementById(id)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' })
        } else {
          window.scrollTo({ top: 0, behavior: 'instant' })
        }
      }, 100)
      return () => clearTimeout(timer)
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' })
    }
  }, [pathname, hash])

  return null
}
