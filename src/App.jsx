import { useState, useEffect, useCallback } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Loader from './components/Loader'
import './index.css'

export default function App() {
  const [loaderDone, setLoaderDone] = useState(false)
  const [navScrolled, setNavScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY
      setNavScrolled(y > 50)
      const ids = ['contact', 'experience', 'skills', 'projects', 'about', 'hero']
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && y >= el.offsetTop - 160) {
          setActiveSection(id)
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = useCallback((id) => {
    const el = document.getElementById(id)
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 64, behavior: 'smooth' })
    setMobileMenuOpen(false)
  }, [])

  return (
    <>
      {/* Loader — shown first, fades out on dismiss */}
      {!loaderDone && <Loader onDismiss={() => setLoaderDone(true)} />}

      {/* Main portfolio — fades in after loader */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: loaderDone ? 1 : 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.div
          style={{
            position: 'fixed', top: 0, left: 0, right: 0, height: '2px',
            background: 'linear-gradient(90deg, #0969DA 0%, #8250DF 60%, #1A7F37 100%)',
            transformOrigin: '0%', scaleX, zIndex: 201, pointerEvents: 'none',
          }}
        />
        <Nav
          navScrolled={navScrolled}
          activeSection={activeSection}
          mobileMenuOpen={mobileMenuOpen}
          onToggleMenu={() => setMobileMenuOpen(v => !v)}
          onScrollTo={scrollTo}
        />
        <Hero
          onScrollToProjects={() => scrollTo('projects')}
          onScrollToContact={() => scrollTo('contact')}
        />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
        <Footer onScrollTo={scrollTo} />
      </motion.div>
    </>
  )
}
