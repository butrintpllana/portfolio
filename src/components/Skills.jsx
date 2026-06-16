import { motion } from 'framer-motion'
import { SKILLS } from '../data/content'
import { BlurText } from '../animations'

const sectionFade = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
}

const rowVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i) => ({
    opacity: 1, x: 0,
    transition: { delay: i * 0.09, duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  }),
}

const pillVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: (i) => ({
    opacity: 1, scale: 1,
    transition: { delay: i * 0.04, duration: 0.35, ease: [0.16, 1, 0.3, 1] },
  }),
}

export default function Skills() {
  return (
    <section id="skills" style={{ padding: '100px 0', background: '#F6F8FA', borderBottom: '1px solid #EAEEF2' }}>
      <div className="section-inner">
        <motion.div
          variants={sectionFade} initial="hidden" whileInView="visible"
          viewport={{ once: true, margin: '0px 0px -40px 0px' }}
          style={{ marginBottom: '48px' }}
        >
          <span style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#6E7781', display: 'block', marginBottom: '10px' }}>03 — Skills</span>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '36px', fontWeight: '700', letterSpacing: '-1.5px', color: '#1F2328', lineHeight: '1.1', marginBottom: '12px' }}>
            <BlurText text="Technical Stack" />
          </h2>
          <p style={{ fontSize: '16px', color: '#57606A', lineHeight: '1.65', maxWidth: '500px' }}>Technologies and frameworks I use across engineering, data, and operations.</p>
        </motion.div>

        <motion.div
          variants={sectionFade} initial="hidden" whileInView="visible"
          viewport={{ once: true, margin: '0px 0px -40px 0px' }}
          style={{ background: '#FFFFFF', border: '1px solid #D0D7DE', borderRadius: '8px', overflow: 'hidden' }}
        >
          <div className="skills-table" style={{ padding: '0 28px' }}>
            {SKILLS.map((cat, i) => (
              <motion.div
                key={cat.cat}
                custom={i}
                variants={rowVariants} initial="hidden" whileInView="visible"
                viewport={{ once: true, margin: '0px 0px -20px 0px' }}
                className="skills-row"
              >
                {/* Category label */}
                <div className="skills-cat">
                  <span style={{
                    display: 'inline-flex', alignItems: 'center', gap: '6px',
                    fontSize: '11px', fontWeight: '700', letterSpacing: '0.1em',
                    textTransform: 'uppercase', color: cat.color,
                    fontFamily: "'Space Grotesk', sans-serif",
                  }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: cat.color, display: 'inline-block', flexShrink: 0 }} />
                    {cat.cat}
                  </span>
                </div>

                {/* Skill pills */}
                <div className="skills-tags">
                  {cat.skills.map((skill, j) => (
                    <motion.span
                      key={skill}
                      custom={j}
                      variants={pillVariants} initial="hidden" whileInView="visible"
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.06, background: cat.bg, borderColor: cat.border, color: cat.color }}
                      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                      style={{
                        display: 'inline-flex', padding: '4px 12px',
                        background: '#F6F8FA', border: '1px solid #D0D7DE',
                        borderRadius: '100px', fontSize: '13px',
                        fontFamily: "'Inter', sans-serif", fontWeight: '400',
                        color: '#1F2328', whiteSpace: 'nowrap', cursor: 'default',
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
