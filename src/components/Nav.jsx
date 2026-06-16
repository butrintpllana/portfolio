import { useState } from 'react'
import { NAV_ITEMS } from '../data/content'

export default function Nav({ navScrolled, activeSection, mobileMenuOpen, onToggleMenu, onScrollTo }) {
  return (
    <>
      {/* Mobile overlay */}
      <div style={{
        display: mobileMenuOpen ? 'flex' : 'none',
        position: 'fixed', inset: 0, zIndex: 99,
        background: 'rgba(255,255,255,0.98)',
        flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        gap: '4px', paddingTop: '72px',
        backdropFilter: 'blur(16px)',
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
          {NAV_ITEMS.map(id => (
            <button
              key={id}
              onClick={() => onScrollTo(id)}
              style={{
                background: 'none', border: 'none',
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '28px', fontWeight: '700',
                color: '#1F2328', cursor: 'pointer',
                padding: '10px 32px', letterSpacing: '-0.5px',
              }}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </button>
          ))}
        </div>
        <button
          onClick={() => onScrollTo('contact')}
          style={{
            marginTop: '24px', background: '#0969DA', color: '#fff',
            border: 'none', borderRadius: '8px', padding: '14px 40px',
            fontFamily: "'Inter', sans-serif", fontSize: '15px',
            fontWeight: '600', cursor: 'pointer',
          }}
        >
          Contact Me
        </button>
        <button
          onClick={onToggleMenu}
          style={{
            marginTop: '12px', background: 'transparent',
            border: '1px solid #D0D7DE', borderRadius: '8px',
            padding: '10px 28px', fontFamily: "'Inter', sans-serif",
            fontSize: '13px', color: '#6E7781', cursor: 'pointer',
          }}
        >
          ✕ Close
        </button>
      </div>

      {/* Nav bar */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: navScrolled ? 'rgba(255,255,255,0.95)' : '#FFFFFF',
        backdropFilter: navScrolled ? 'blur(12px)' : 'none',
        borderBottom: '1px solid #EAEEF2',
        transition: 'background 0.2s ease, backdrop-filter 0.2s ease',
      }}>
        <div style={{ maxWidth: '1200px', width: '100%', margin: '0 auto', padding: '0 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }} onClick={() => onScrollTo('about')}>
            <div style={{ width: '36px', height: '36px', background: '#0D1117', borderRadius: '8px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', flexShrink: 0, padding: '0 7px', gap: '1px' }}>
              <span style={{ fontFamily: "'Courier New', Courier, monospace", fontSize: '11px', fontWeight: '700', lineHeight: '1.25', letterSpacing: '0', whiteSpace: 'nowrap' }}>
                <span style={{ color: '#58A6FF' }}>&lt;</span>
                <span style={{ color: '#FFFFFF' }}>BP</span>
              </span>
              <span style={{ fontFamily: "'Courier New', Courier, monospace", fontSize: '11px', fontWeight: '700', lineHeight: '1.25', color: '#58A6FF', letterSpacing: '0' }}>/&gt;</span>
            </div>
            <div>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '14px', fontWeight: '600', color: '#1F2328', letterSpacing: '-0.2px', lineHeight: '1.2' }}>Butrint Pllana</div>
              <div style={{ fontSize: '11px', color: '#6E7781', letterSpacing: '0.02em', lineHeight: '1.2' }}>Frontend Engineer</div>
            </div>
          </div>

          {/* Center (desktop) */}
          <div className="desktop-only" style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
            {NAV_ITEMS.map(id => (
              <NavBtn key={id} id={id} active={activeSection === id} onClick={() => onScrollTo(id)} />
            ))}
          </div>

          {/* Right */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div className="desktop-only" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#1A7F37', animation: 'pulse-green 2.5s ease-in-out infinite', display: 'inline-block', flexShrink: 0 }} />
              <span style={{ fontSize: '12px', color: '#57606A', whiteSpace: 'nowrap' }}>Available for work</span>
            </div>
            <ContactBtn className="desktop-only" onClick={() => onScrollTo('contact')} />
            {/* Hamburger */}
            <button
              onClick={onToggleMenu}
              className="mobile-only"
              style={{ background: '#F6F8FA', border: '1px solid #D0D7DE', borderRadius: '8px', width: '38px', height: '38px', cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: '4px', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}
            >
              <span style={{ width: '14px', height: '1.5px', background: '#1F2328', borderRadius: '1px', display: 'block' }} />
              <span style={{ width: '14px', height: '1.5px', background: '#1F2328', borderRadius: '1px', display: 'block' }} />
              <span style={{ width: '9px', height: '1.5px', background: '#1F2328', borderRadius: '1px', display: 'block' }} />
            </button>
          </div>
        </div>
      </nav>
    </>
  )
}

function NavBtn({ id, active, onClick }) {
  const [hovered, setHovered] = useState(false)
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? '#F6F8FA' : 'none',
        border: 'none',
        fontFamily: "'Inter', sans-serif",
        fontSize: '13px', cursor: 'pointer',
        padding: '6px 12px', borderRadius: '6px',
        transition: 'color 0.15s, background 0.15s',
        color: active ? '#1F2328' : hovered ? '#1F2328' : '#57606A',
        fontWeight: active ? '600' : '400',
      }}
    >
      {id.charAt(0).toUpperCase() + id.slice(1)}
    </button>
  )
}

function ContactBtn({ className, onClick }) {
  const [hovered, setHovered] = useState(false)
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={className}
      style={{
        background: hovered ? '#0550AE' : '#0969DA',
        color: '#fff', border: 'none', borderRadius: '6px',
        padding: '8px 18px', fontFamily: "'Inter', sans-serif",
        fontSize: '13px', fontWeight: '500', cursor: 'pointer',
        transition: 'background 0.15s',
      }}
    >
      Contact
    </button>
  )
}
