import { FacebookIcon, InstagramIcon, MailIcon, YoutubeIcon } from './icons'

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About the Book', href: '#about-book' },
  { label: 'About the Author', href: '#authors' },
  { label: 'Buy the Book', href: '#buy' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="brand-title">MIRACULOUS TURN OF EVENTS</div>
            <div className="brand-sub" style={{ color: 'var(--olive-light)', marginBottom: 14 }}>
              THE BATTLE OF DO AB
            </div>
            <p>A true story of courage, leadership, and brotherhood.</p>
          </div>

          <div>
            <h4>Quick Links</h4>
            <ul>
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href}>{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Connect</h4>
            <div className="social">
              <a href="#" aria-label="Facebook"><FacebookIcon /></a>
              <a href="#" aria-label="Instagram"><InstagramIcon /></a>
              <a href="#" aria-label="YouTube"><YoutubeIcon /></a>
              <a href="mailto:justinfooteauthor@gmail.com" aria-label="Email"><MailIcon /></a>
            </div>
          </div>

          <div>
            <h4>Contact Info</h4>
            <ul>
              <li><a href="mailto:justinfooteauthor@gmail.com">justinfooteauthor@gmail.com</a></li>
              <li>United States</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copyright">
        © {new Date().getFullYear()} Justin Foote &amp; John Kelling. All Rights Reserved.
      </div>
    </footer>
  )
}
