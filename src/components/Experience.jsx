import { motion } from 'framer-motion'
import { EXPERIENCE } from '../data/content'
import { BlurText } from '../animations'

const sectionFade = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
}

const cardVariants = {
  hidden: { opacity: 0, x: -24 },
  visible: (i) => ({
    opacity: 1, x: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  }),
}

export default function Experience() {
  return (
    <section id="experience" style={{ padding: '100px 0', background: '#FFFFFF', borderBottom: '1px solid #EAEEF2' }}>
      <div className="section-inner">
        <motion.div variants={sectionFade} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '0px 0px -40px 0px' }} style={{ marginBottom: '56px' }}>
          <span style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#6E7781', display: 'block', marginBottom: '10px' }}>04 — Experience</span>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '36px', fontWeight: '700', letterSpacing: '-1.5px', color: '#1F2328', lineHeight: '1.1', marginBottom: '12px' }}>
            <BlurText text="Work History" />
          </h2>
          <p style={{ fontSize: '16px', color: '#57606A', lineHeight: '1.65', maxWidth: '500px' }}>Roles where I've delivered impact across engineering, product, and people operations.</p>
        </motion.div>

        <div style={{ position: 'relative', maxWidth: '760px' }}>
          {/* Timeline line — draws in on scroll */}
          {EXPERIENCE.length > 1 && (
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: '0px 0px -120px 0px' }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
              style={{
                position: 'absolute', left: '13px', top: '24px', bottom: '48px',
                width: '1px',
                background: 'linear-gradient(to bottom, #D0D7DE 80%, transparent)',
                transformOrigin: 'top',
              }}
            />
          )}

          {EXPERIENCE.map((exp, i) => (
            <motion.div
              key={exp.company + i}
              custom={i}
              variants={cardVariants} initial="hidden" whileInView="visible"
              viewport={{ once: true, margin: '0px 0px -40px 0px' }}
              style={{ display: 'flex', gap: '32px', paddingBottom: '40px', position: 'relative' }}
            >
              {/* Dot */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 + 0.1, type: 'spring', stiffness: 500, damping: 25 }}
                style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#FFFFFF', border: `2px solid ${exp.color}`, flexShrink: 0, position: 'relative', zIndex: 1, marginTop: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: exp.color }} />
              </motion.div>

              {/* Card */}
              <motion.div
                whileHover={{ y: -3, boxShadow: '0 8px 24px rgba(31,35,40,0.09)' }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                style={{ flex: 1, background: '#FFFFFF', borderRadius: '8px', border: '1px solid #D0D7DE', padding: '24px 28px' }}
              >
                {/* Header */}
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '12px', marginBottom: '6px', flexWrap: 'wrap' }}>
                  <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '17px', fontWeight: '700', color: '#1F2328', letterSpacing: '-0.3px', lineHeight: '1.3' }}>
                    {exp.role}
                  </h3>
                  <span style={{ fontSize: '12px', color: '#6E7781', fontWeight: '500', whiteSpace: 'nowrap', paddingTop: '3px', fontFamily: "'Inter', sans-serif" }}>
                    {exp.period}
                  </span>
                </div>

                {/* Company + type */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: exp.companyNote ? '4px' : '20px' }}>
                  <span style={{ fontSize: '13px', color: exp.color, fontWeight: '600', fontFamily: "'Inter', sans-serif" }}>{exp.company}</span>
                  <span style={{ width: '3px', height: '3px', borderRadius: '50%', background: '#8C959F', display: 'inline-block', flexShrink: 0 }} />
                  <span style={{ display: 'inline-flex', padding: '2px 8px', background: `${exp.color}15`, border: `1px solid ${exp.color}30`, borderRadius: '100px', fontSize: '11px', fontWeight: '600', color: exp.color, letterSpacing: '0.04em', fontFamily: "'Inter', sans-serif" }}>
                    {exp.type}
                  </span>
                  {exp.location && (
                    <>
                      <span style={{ width: '3px', height: '3px', borderRadius: '50%', background: '#8C959F', display: 'inline-block', flexShrink: 0 }} />
                      <span style={{ fontSize: '12px', color: '#6E7781', fontFamily: "'Inter', sans-serif" }}>{exp.location}</span>
                    </>
                  )}
                </div>

                {/* Company note */}
                {exp.companyNote && (
                  <p style={{ fontSize: '12px', color: '#8C959F', fontFamily: "'Inter', sans-serif", marginBottom: '20px', lineHeight: '1.5' }}>
                    {exp.companyNote}
                  </p>
                )}

                {/* Product tags */}
                {exp.products && exp.products.length > 0 && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
                    <span style={{ fontSize: '11px', color: '#6E7781', fontFamily: "'Inter', sans-serif", alignSelf: 'center', marginRight: '2px' }}>Key products:</span>
                    {exp.products.map((product, j) => (
                      <motion.span
                        key={product}
                        initial={{ opacity: 0, scale: 0.85 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.15 + j * 0.06 + 0.3, duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        style={{
                          display: 'inline-flex', padding: '3px 10px',
                          background: '#F6F8FA', border: '1px solid #D0D7DE',
                          borderRadius: '100px', fontSize: '12px', fontWeight: '500',
                          color: '#1F2328', fontFamily: "'Inter', sans-serif",
                        }}
                      >
                        {product}
                      </motion.span>
                    ))}
                  </div>
                )}

                {/* Achievements */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '9px' }}>
                  {exp.achievements.map((ach, j) => (
                    <motion.div
                      key={j}
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 + j * 0.07 + 0.2, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}
                    >
                      <span style={{ color: exp.color, flexShrink: 0, fontSize: '14px', lineHeight: '1.65', fontWeight: '400' }}>—</span>
                      <span style={{ fontSize: '13px', color: '#57606A', lineHeight: '1.65' }}>{ach}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
