import { asset } from '../asset'
import { CartIcon } from './icons'

export default function Hero() {
  return (
    <header
      id="home"
      className="hero"
      style={{ ['--hero-bg' as string]: `url('${asset('images/hero-bg.svg')}')` }}
    >
      <div className="container">
        <div className="hero-book">
          <img
            src={asset('images/real/book-cover.jpg')}
            alt="The Battle of Do Ab book cover"
            onError={(event) => {
              event.currentTarget.src = asset('images/book-cover.svg')
            }}
          />
        </div>

        <div className="hero-content">
          <div className="hero-stars">&#9733; &#9733; &#9733;</div>
          <p className="hero-tagline">A True Story of Courage, Leadership, and Brotherhood</p>
          <h1 className="hero-title">Miraculous Turn of Events</h1>
          <div className="hero-title-main">The Battle of Do Ab</div>
          <p className="hero-desc">
            A gripping firsthand account of a routine mission that became a fight for survival in
            Afghanistan. A story of ordinary men facing extraordinary odds.
          </p>
          <div className="hero-actions">
            <a href="#buy" className="btn btn-primary">
              <CartIcon /> Buy Now
            </a>
            <a href="#about-book" className="btn btn-outline">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
