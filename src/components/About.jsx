import { motion } from 'framer-motion'
import { STATS } from '../data/content'
import { BlurText, CountUp } from '../animations'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
}

const staggerGrid = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const statCard = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
}

export default function About() {
  return (
    <section id="about" style={{ padding: '100px 0', background: '#F6F8FA', borderBottom: '1px solid #EAEEF2' }}>
      <div className="section-inner">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '0px 0px -40px 0px' }} style={{ marginBottom: '56px' }}>
          <span style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#6E7781', display: 'block', marginBottom: '10px' }}>01 — About</span>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '36px', fontWeight: '700', letterSpacing: '-1.5px', color: '#1F2328', lineHeight: '1.1', marginBottom: '12px' }}>
            <BlurText text="Who I Am" />
          </h2>
          <p style={{ fontSize: '16px', color: '#57606A', lineHeight: '1.65', maxWidth: '520px' }}>A multidisciplinary professional bridging engineering, product, and people operations.</p>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="stats-grid"
          variants={staggerGrid} initial="hidden" whileInView="visible"
          viewport={{ once: true, margin: '0px 0px -40px 0px' }}
        >
          {STATS.map((stat) => (
            <motion.div
              key={stat.lbl}
              variants={statCard}
              whileHover={{ y: -4, boxShadow: '0 8px 24px rgba(31,35,40,0.1)' }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              style={{ background: '#FFFFFF', borderRadius: '8px', border: '1px solid #D0D7DE', padding: '28px 24px', cursor: 'default' }}
            >
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '36px', fontWeight: '700', letterSpacing: '-1.5px', color: '#1F2328', lineHeight: '1', marginBottom: '8px' }}>
                <CountUp value={stat.val} />
              </div>
              <div style={{ fontSize: '13px', color: '#6E7781', fontWeight: '500' }}>{stat.lbl}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bio */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '0px 0px -40px 0px' }} style={{ maxWidth: '640px' }}>
          <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '20px', fontWeight: '700', color: '#1F2328', marginBottom: '16px', letterSpacing: '-0.3px' }}>
            <BlurText text="Building the full picture" delay={0.05} />
          </h3>
          <motion.p
            variants={fadeUp}
            style={{ fontSize: '15px', lineHeight: '1.8', color: '#57606A', marginBottom: '14px' }}
          >
            I'm a software developer and frontend engineer specializing in React, Next.js, and TypeScript — building scalable web applications, B2B platforms, and enterprise software solutions.
          </motion.p>
          <motion.p variants={fadeUp} style={{ fontSize: '15px', lineHeight: '1.8', color: '#57606A' }}>
            Beyond engineering, I bring product management and HR leadership experience — a unique ability to lead cross-functional teams and ship software that solves real business problems.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
