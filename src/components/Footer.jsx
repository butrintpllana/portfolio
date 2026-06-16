import { useState } from 'react'
import { NAV_ITEMS } from '../data/content'

export default function Footer({ onScrollTo }) {
  return (
    <footer style={{ background: '#FFFFFF', borderTop: '1px solid #EAEEF2', padding: '32px 0' }}>
      <div className="footer-inner">
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ width: '30px', height: '30px', background: '#0D1117', borderRadius: '6px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', flexShrink: 0, padding: '0 6px', gap: '1px' }}>
            <span style={{ fontFamily: "'Courier New', Courier, monospace", fontSize: '9px', fontWeight: '700', lineHeight: '1.25', whiteSpace: 'nowrap' }}>
              <span style={{ color: '#58A6FF' }}>&lt;</span>
              <span style={{ color: '#FFFFFF' }}>BP</span>
            </span>
            <span style={{ fontFamily: "'Courier New', Courier, monospace", fontSize: '9px', fontWeight: '700', lineHeight: '1.25', color: '#58A6FF' }}>/&gt;</span>
          </div>
          <span style={{ fontSize: '13px', color: '#6E7781', fontFamily: "'Inter', sans-serif" }}>© 2025 Butrint Pllana. All rights reserved.</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '2px', flexWrap: 'wrap' }}>
          {NAV_ITEMS.map(id => <FooterNavBtn key={id} id={id} onClick={() => onScrollTo(id)} />)}
        </div>
      </div>
    </footer>
  )
}

function FooterNavBtn({ id, onClick }) {
  const [hovered, setHovered] = useState(false)
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: 'none', border: 'none',
        fontFamily: "'Inter', sans-serif", fontSize: '12px',
        color: hovered ? '#1F2328' : '#6E7781',
        cursor: 'pointer', padding: '5px 10px', borderRadius: '5px',
        transition: 'color 0.15s',
      }}
    >
      {id.charAt(0).toUpperCase() + id.slice(1)}
    </button>
  )
}
