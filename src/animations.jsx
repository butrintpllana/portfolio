import { motion, useInView, useMotionValue, animate } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

export function BlurText({ text, style, delay = 0, wordDelay = 0.09 }) {
  const words = text.split(' ')
  return (
    <span style={style}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, filter: 'blur(12px)', y: 8 }}
          whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
          transition={{ delay: delay + i * wordDelay, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          style={{ display: 'inline-block', marginRight: '0.28em', willChange: 'filter, opacity, transform' }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  )
}

export function CountUp({ value }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '0px 0px -40px 0px' })
  const mv = useMotionValue(0)
  const [display, setDisplay] = useState(0)
  const numeric = parseInt(value)
  const suffix = value.replace(/\d/g, '')

  useEffect(() => {
    if (!inView) return
    const ctrl = animate(mv, numeric, {
      duration: 1.8,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: v => setDisplay(Math.round(v)),
    })
    return ctrl.stop
  }, [inView])

  return <span ref={ref}>{display}{suffix}</span>
}
