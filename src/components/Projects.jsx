import { useState, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { PROJECTS } from '../data/content'
import { BlurText } from '../animations'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 } }),
}

const sectionFade = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
}

export default function Projects() {
  return (
    <section id="projects" style={{ padding: '100px 0', background: '#FFFFFF', borderBottom: '1px solid #EAEEF2' }}>
      <div className="section-inner">
        <motion.div
          variants={sectionFade} initial="hidden" whileInView="visible"
          viewport={{ once: true, margin: '0px 0px -40px 0px' }}
          style={{ marginBottom: '56px' }}
        >
          <span style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#6E7781', display: 'block', marginBottom: '10px' }}>02 — Work</span>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '36px', fontWeight: '700', letterSpacing: '-1.5px', color: '#1F2328', lineHeight: '1.1', marginBottom: '12px' }}>
            <BlurText text="Featured Projects" />
          </h2>
          <p style={{ fontSize: '16px', color: '#57606A', lineHeight: '1.65', maxWidth: '500px' }}>A selection of enterprise and B2B software projects I've designed, built, and shipped.</p>
        </motion.div>

        <div className="proj-grid">
          {PROJECTS.map((p, i) => <ProjectCard key={p.name} project={p} index={i} />)}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project: p, index }) {
  const [hovered, setHovered] = useState(false)
  const cardRef = useRef(null)

  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)
  const smoothX = useSpring(rotateX, { stiffness: 300, damping: 28 })
  const smoothY = useSpring(rotateY, { stiffness: 300, damping: 28 })

  const handleMouseMove = (e) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    rotateX.set(((e.clientY - rect.top) / rect.height - 0.5) * 7)
    rotateY.set(((e.clientX - rect.left) / rect.width - 0.5) * -7)
  }

  const handleMouseLeave = () => {
    setHovered(false)
    rotateX.set(0)
    rotateY.set(0)
  }

  return (
    <motion.div
      ref={cardRef}
      custom={index}
      variants={fadeUp} initial="hidden" whileInView="visible"
      viewport={{ once: true, margin: '0px 0px -40px 0px' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      style={{
        rotateX: smoothX,
        rotateY: smoothY,
        transformStyle: 'preserve-3d',
        background: '#FFFFFF',
        borderRadius: '8px',
        border: '1px solid #D0D7DE',
        display: 'flex', flexDirection: 'column',
        transition: 'box-shadow 0.2s ease',
        boxShadow: hovered ? '0 12px 32px rgba(31,35,40,0.12)' : '0 1px 3px rgba(31,35,40,0.04)',
        overflow: 'hidden',
        willChange: 'transform',
      }}
    >
      {/* Card header */}
      <div style={{ padding: '20px 24px 18px', borderBottom: '1px solid #EAEEF2', background: p.bg }}>
        <div style={{ marginBottom: '10px' }}>
          <span style={{
            display: 'inline-flex', padding: '2px 9px',
            background: '#FFFFFF', border: `1px solid ${p.border}`,
            borderRadius: '100px', fontSize: '11px', fontWeight: '600',
            color: p.color, letterSpacing: '0.04em', fontFamily: "'Inter', sans-serif",
          }}>
            {p.category}
          </span>
        </div>
        <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '19px', fontWeight: '700', color: '#1F2328', letterSpacing: '-0.4px', marginBottom: '2px', lineHeight: '1.25' }}>
          {p.name}
        </h3>
        <p style={{ fontSize: '13px', color: '#57606A', fontWeight: '400', fontFamily: "'Inter', sans-serif" }}>
          {p.subtitle}
        </p>
      </div>

      {/* Card body */}
      <div style={{ padding: '20px 24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <p style={{ fontSize: '13px', lineHeight: '1.75', color: '#57606A', marginBottom: '16px' }}>
          {p.summary}
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '7px', flex: 1 }}>
          {p.bullets.map((bullet, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
              <span style={{ color: p.color, flexShrink: 0, fontSize: '14px', lineHeight: '1.65', fontWeight: '400' }}>—</span>
              <span style={{ fontSize: '13px', color: '#57606A', lineHeight: '1.65' }}>{bullet}</span>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px solid #EAEEF2', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
          <span style={{
            fontSize: '12px', color: '#6E7781',
            fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Consolas, monospace',
            flexShrink: 1, minWidth: 0,
          }}>
            {p.tech.join(' · ')}
          </span>
          <ArrowBtn color={p.color} bg={p.bg} border={p.border} url={p.url} />
        </div>
      </div>
    </motion.div>
  )
}

function ArrowBtn({ color, bg, border, url }) {
  const [hovered, setHovered] = useState(false)
  const sharedStyle = {
    display: 'inline-flex', alignItems: 'center',
    background: hovered ? bg : 'transparent',
    color: hovered ? color : '#6E7781',
    border: `1px solid ${hovered ? border : '#D0D7DE'}`,
    borderRadius: '6px', padding: '5px 10px',
    fontFamily: "'Inter', sans-serif", fontSize: '13px',
    fontWeight: '500', cursor: 'pointer',
    transition: 'all 0.15s', flexShrink: 0,
    whiteSpace: 'nowrap', textDecoration: 'none',
  }
  if (url) {
    return (
      <a href={url} target="_blank" rel="noreferrer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={sharedStyle}
      >
        Visit →
      </a>
    )
  }
  return (
    <button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={sharedStyle}
    >
      View →
    </button>
  )
}
