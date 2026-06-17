import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Hero({ onScrollToProjects, onScrollToContact }) {
  return (
    <section
      id="hero"
      style={{ minHeight: '100vh', paddingTop: '64px', display: 'flex', alignItems: 'center', background: '#FFFFFF', borderBottom: '1px solid #EAEEF2' }}
    >
      <div className="hero-wrap">
        {/* Left */}
        <div className="hero-col-l">

          {/* Name — line-by-line slide up */}
          <h1 className="hero-name" style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: '700', color: '#1F2328' }}>
            {['BUTRINT', 'PLLANA'].map((line, i) => (
              <span key={line} style={{ display: 'block', overflow: 'hidden', lineHeight: '0.95' }}>
                <motion.span
                  initial={{ y: '108%' }}
                  animate={{ y: '0%' }}
                  transition={{ delay: 0.22 + i * 0.13, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                  style={{ display: 'block' }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          {/* Status line */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.52, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            style={{ fontSize: '14px', color: '#6E7781', fontFamily: "'Inter', sans-serif", letterSpacing: '0.01em' }}
          >
            Frontend Engineer&nbsp;&nbsp;·&nbsp;&nbsp;Software Developer&nbsp;&nbsp;·&nbsp;&nbsp;Project Manager
            <br />
            <span style={{ color: '#8C959F' }}>Prishtina, Kosovo&nbsp;&nbsp;·&nbsp;&nbsp;Open to opportunities</span>
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.82, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            style={{ fontSize: '16px', lineHeight: '1.75', color: '#57606A', maxWidth: '480px' }}
          >
            Building scalable digital products and business solutions that help organizations operate more efficiently and grow faster.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="hero-btns"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <PrimaryBtn onClick={onScrollToProjects}>View Projects</PrimaryBtn>
            <GhostBtn onClick={onScrollToContact}>Contact Me</GhostBtn>
            <ResumeLink />
            <GitHubLink />
          </motion.div>
        </div>

        {/* Right — avatar */}
        <motion.div
          className="hero-col-r"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <BPAvatar />
        </motion.div>
      </div>
    </section>
  )
}

function BPAvatar() {
  return (
    <div style={{ position: 'relative', width: '260px', height: '260px', animation: 'float-y 7s ease-in-out infinite', flexShrink: 0 }}>
      <div style={{
        width: '100%', height: '100%', borderRadius: '50%',
        background: 'linear-gradient(145deg, #F6F8FA 0%, #EAEEF2 100%)',
        border: '2px solid #D0D7DE',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        boxShadow: '0 4px 24px rgba(31,35,40,0.08)',
      }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '64px', fontWeight: '700', color: '#1F2328', letterSpacing: '-4px', userSelect: 'none', lineHeight: 1 }}>BP</div>
          <div style={{ fontSize: '11px', color: '#6E7781', letterSpacing: '0.08em', textTransform: 'uppercase', marginTop: '8px', fontFamily: "'Inter', sans-serif" }}>Frontend Engineer</div>
        </div>
      </div>
    </div>
  )
}

function PrimaryBtn({ children, onClick }) {
  const [hovered, setHovered] = useState(false)
  return (
    <motion.button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
      style={{
        background: hovered ? '#0550AE' : '#0969DA',
        color: '#fff', border: 'none', borderRadius: '8px',
        padding: '12px 24px', fontFamily: "'Inter', sans-serif",
        fontSize: '14px', fontWeight: '500', cursor: 'pointer',
        transition: 'background 0.15s',
      }}
    >
      {children}
    </motion.button>
  )
}

function GhostBtn({ children, onClick }) {
  const [hovered, setHovered] = useState(false)
  return (
    <motion.button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
      style={{
        background: hovered ? '#F6F8FA' : '#FFFFFF',
        color: '#1F2328', border: '1px solid #D0D7DE',
        borderRadius: '8px', padding: '12px 24px',
        fontFamily: "'Inter', sans-serif", fontSize: '14px',
        fontWeight: '500', cursor: 'pointer', transition: 'background 0.15s',
      }}
    >
      {children}
    </motion.button>
  )
}

function ResumeLink() {
  const [hovered, setHovered] = useState(false)
  return (
    <a
      href="/Butrint-Pllana-CV.pdf"
      download="Butrint-Pllana-CV.pdf"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: '6px',
        color: hovered ? '#0969DA' : '#57606A',
        fontSize: '14px', fontWeight: '500', textDecoration: 'none',
        padding: '12px 8px', transition: 'color 0.15s',
        fontFamily: "'Inter', sans-serif",
      }}
    >
      ↓ Download CV
    </a>
  )
}

function GitHubLink() {
  const [hovered, setHovered] = useState(false)
  return (
    <a
      href="https://github.com/butrintpllana"
      target="_blank"
      rel="noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: '6px',
        color: hovered ? '#1F2328' : '#57606A',
        fontSize: '14px', fontWeight: '500', textDecoration: 'none',
        padding: '12px 8px', transition: 'color 0.15s',
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
      </svg>
      GitHub
    </a>
  )
}
