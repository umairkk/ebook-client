import { useState } from 'react'
import { CartIcon } from './icons'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About the Book', href: '#about-book' },
  { label: 'About the Author', href: '#authors' },
  { label: 'Buy the Book', href: '#buy' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className={`navbar${open ? ' open' : ''}`}>
      <div className="container">
        <a className="brand" href="#home" onClick={() => setOpen(false)}>
          <div className="brand-title">MIRACULOUS TURN OF EVENTS</div>
          <div className="brand-sub">THE BATTLE OF DO AB</div>
        </a>

        <ul className="nav-links">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#buy" className="btn btn-primary nav-cta">
          <CartIcon /> Buy Now
        </a>

        <button
          className="nav-toggle"
          aria-label="Toggle navigation"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? '\u2715' : '\u2630'}
        </button>
      </div>
    </nav>
  )
}
