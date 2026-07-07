import { asset } from '../asset'
import { CartIcon } from './icons'

const formats = [
  {
    name: 'Paperback',
    desc: 'The perfect edition to read anywhere.',
    price: '$19.99',
    img: '/images/book-cover.svg',
  },
  {
    name: 'Hardcover',
    desc: "A collector's keepsake edition.",
    price: '$29.99',
    img: '/images/book-cover.svg',
  },
  {
    name: 'Ebook',
    desc: 'Instant download. Read anywhere.',
    price: '$9.99',
    img: '/images/book-cover.svg',
  },
]

export default function BuyBook() {
  return (
    <section id="buy" className="section buy">
      <div className="container">
        <p className="eyebrow">Buy the Book</p>
        <h2 className="section-title">Get Your Copy Today</h2>

        <div className="buy-grid">
          {formats.map((f) => (
            <div className="buy-card" key={f.name}>
              <img src={asset(f.img)} alt={`${f.name} edition`} />
              <h3>{f.name}</h3>
              <p className="format-desc">{f.desc}</p>
              <div className="price">{f.price}</div>
              <a href="#contact" className="btn btn-primary">
                <CartIcon /> Buy Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
