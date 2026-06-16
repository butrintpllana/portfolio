import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Lazy import so the heavy Three.js bundle only loads when needed
let LanyardComponent = null

export default function Loader({ onDismiss }) {
  const [exiting, setExiting] = useState(false)
  const [Lanyard, setLanyard] = useState(null)

  // Load Lanyard dynamically to avoid SSR issues / blocking initial paint
  useEffect(() => {
    if (!LanyardComponent) {
      import('./Lanyard').then(m => {
        LanyardComponent = m.default
        setLanyard(() => m.default)
      }).catch(() => {
        // If assets aren't downloaded yet, skip the 3D loader
        onDismiss()
      })
    } else {
      setLanyard(() => LanyardComponent)
    }
  }, [])

  // ESC to dismiss
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') handleDismiss() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  // Auto-dismiss after 5 seconds
  useEffect(() => {
    const t = setTimeout(handleDismiss, 5000)
    return () => clearTimeout(t)
  }, [])

  // Lock body scroll while loader is visible
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  const handleDismiss = () => {
    if (exiting) return
    setExiting(true)
    setTimeout(onDismiss, 700)
  }

  return (
    <AnimatePresence>
      {!exiting && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: 'fixed', inset: 0, zIndex: 1000,
            background: '#0D1117',
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center',
            overflow: 'hidden',
          }}
        >
          {/* 3D Badge */}
          <div style={{ width: '100%', flex: 1, minHeight: 0 }}>
            {Lanyard ? (
              <Lanyard
                position={[0, 0, 16]}
                gravity={[0, -40, 0]}
                cardName="Butrint Pllana"
                cardTitle="Frontend Developer"
              />
            ) : (
              <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ width: '40px', height: '40px', border: '2px solid #30363D', borderTopColor: '#58A6FF', borderRadius: '50%', animation: 'spin 0.8s linear infinite' }} />
              </div>
            )}
          </div>

          {/* Bottom bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            style={{ paddingBottom: '48px', textAlign: 'center', flexShrink: 0 }}
          >
            <p style={{
              color: '#6E7781', fontSize: '11px', letterSpacing: '0.14em',
              textTransform: 'uppercase', marginBottom: '20px',
              fontFamily: "'Inter', sans-serif",
            }}>
              Drag the badge to interact · Press ESC to skip
            </p>
            <button
              onClick={handleDismiss}
              style={{
                background: 'transparent',
                border: '1px solid #30363D',
                borderRadius: '8px',
                padding: '12px 36px',
                color: '#FFFFFF',
                fontSize: '14px',
                fontFamily: "'Inter', sans-serif",
                fontWeight: '500',
                cursor: 'pointer',
                letterSpacing: '0.04em',
                transition: 'border-color 0.2s, color 0.2s',
              }}
              onMouseEnter={e => { e.target.style.borderColor = '#58A6FF'; e.target.style.color = '#58A6FF' }}
              onMouseLeave={e => { e.target.style.borderColor = '#30363D'; e.target.style.color = '#FFFFFF' }}
            >
              Enter Portfolio →
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
