import { useState } from 'react'
import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
}

export default function Contact() {
  return (
    <section id="contact" style={{ padding: '100px 0', background: '#F6F8FA', borderBottom: '1px solid #EAEEF2' }}>
      <div className="section-inner">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '0px 0px -40px 0px' }} style={{ marginBottom: '64px' }}>
          <span style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#6E7781', display: 'block', marginBottom: '10px' }}>05 — Contact</span>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '36px', fontWeight: '700', letterSpacing: '-1.5px', color: '#1F2328', lineHeight: '1.1', marginBottom: '12px' }}>Let's Work Together</h2>
          <p style={{ fontSize: '16px', color: '#57606A', lineHeight: '1.65', maxWidth: '500px' }}>Open to full-time roles, freelance projects, consulting, and startup collaborations.</p>
        </motion.div>

        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible"
          viewport={{ once: true, margin: '0px 0px -40px 0px' }}
          className="contact-redesign"
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }}
        >
          {/* Left — availability info */}
          <div>
            <p style={{ fontSize: '15px', lineHeight: '1.8', color: '#57606A', marginBottom: '40px' }}>
              Whether you're hiring, building something from scratch, or looking for a technical partner — I'd love to hear from you. Reach out directly and I'll get back to you within 24 hours.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <StatusRow
                dot="#1A7F37"
                label="Status"
                value="Available for new opportunities"
                valueColor="#1A7F37"
                pulse
              />
              <StatusRow dot="#6E7781" label="Location" value="Kosovo (CET timezone)" />
              <StatusRow dot="#6E7781" label="Open to" value="Full-time · Freelance · Remote" />
            </div>
          </div>

          {/* Right — contact links */}
          <div>
            <p style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#8C959F', marginBottom: '16px', fontFamily: "'Inter', sans-serif" }}>
              Best way to reach me
            </p>

            {/* Email — primary CTA */}
            <EmailLink />

            {/* Divider */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', margin: '28px 0' }}>
              <div style={{ flex: 1, height: '1px', background: '#EAEEF2' }} />
              <span style={{ fontSize: '11px', color: '#8C959F', fontFamily: "'Inter', sans-serif" }}>or find me on</span>
              <div style={{ flex: 1, height: '1px', background: '#EAEEF2' }} />
            </div>

            {/* Social links — simple text style */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
              <SocialRow href="https://github.com/butrintpllana" label="GitHub" handle="@butrintpllana" />
              <SocialRow href="https://linkedin.com/in/butrint-pllana" label="LinkedIn" handle="in/butrint-pllana" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function StatusRow({ dot, label, value, valueColor, pulse }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      <span style={{
        width: '7px', height: '7px', borderRadius: '50%',
        background: dot, flexShrink: 0,
        animation: pulse ? 'pulse-green 2.5s ease-in-out infinite' : 'none',
        display: 'inline-block',
      }} />
      <span style={{ fontSize: '12px', color: '#8C959F', fontFamily: "'Inter', sans-serif", width: '72px', flexShrink: 0 }}>{label}</span>
      <span style={{ fontSize: '13px', color: valueColor || '#57606A', fontFamily: "'Inter', sans-serif", fontWeight: valueColor ? '600' : '400' }}>{value}</span>
    </div>
  )
}

function EmailLink() {
  const [hovered, setHovered] = useState(false)
  return (
    <a
      href="mailto:butrint.pllana@gmail.com"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '20px 24px',
        background: hovered ? '#FFFFFF' : '#FFFFFF',
        border: `1px solid ${hovered ? '#0969DA' : '#D0D7DE'}`,
        borderRadius: '10px',
        textDecoration: 'none',
        transition: 'border-color 0.15s, box-shadow 0.15s',
        boxShadow: hovered ? '0 0 0 3px rgba(9,105,218,0.08)' : 'none',
        gap: '16px',
      }}
    >
      <div>
        <div style={{ fontSize: '11px', color: '#8C959F', fontFamily: "'Inter', sans-serif", marginBottom: '4px', fontWeight: '500', letterSpacing: '0.04em' }}>EMAIL</div>
        <div style={{
          fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Consolas, monospace',
          fontSize: '15px', fontWeight: '500',
          color: hovered ? '#0969DA' : '#1F2328',
          transition: 'color 0.15s',
          letterSpacing: '-0.2px',
        }}>
          butrint.pllana@gmail.com
        </div>
      </div>
      <span style={{ fontSize: '18px', color: hovered ? '#0969DA' : '#D0D7DE', transition: 'color 0.15s', flexShrink: 0 }}>→</span>
    </a>
  )
}

function SocialRow({ href, label, handle }) {
  const [hovered, setHovered] = useState(false)
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '14px 24px',
        borderRadius: '8px',
        textDecoration: 'none',
        background: hovered ? '#FFFFFF' : 'transparent',
        border: `1px solid ${hovered ? '#D0D7DE' : 'transparent'}`,
        transition: 'all 0.15s',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
        <span style={{ fontSize: '13px', fontWeight: '600', color: hovered ? '#1F2328' : '#57606A', fontFamily: "'Inter', sans-serif", transition: 'color 0.15s', width: '64px' }}>{label}</span>
        <span style={{ fontSize: '13px', color: '#8C959F', fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Consolas, monospace' }}>{handle}</span>
      </div>
      <span style={{ fontSize: '12px', color: hovered ? '#0969DA' : '#D0D7DE', transition: 'color 0.15s' }}>↗</span>
    </a>
  )
}
