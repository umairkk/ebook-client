import { useState } from 'react'

const reviews = [
  {
    text: 'A powerful, unflinching account of courage and brotherhood. This book had me on the edge of my seat.',
    by: 'Reader Name',
  },
  {
    text: 'Captures the raw reality of war and the unbreakable bond between men. Highly recommended.',
    by: 'Reader Name',
  },
  {
    text: 'An incredible story of leadership and sacrifice. A must-read for anyone who wants to understand the true cost of war.',
    by: 'Reader Name',
  },
]

export default function Engage() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSent(true)
    e.currentTarget.reset()
    window.setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contact" className="section engage">
      <div className="container engage-grid">
        <div>
          <div className="block-head">
            <p className="eyebrow">What Readers Are Saying</p>
            <h2 className="block-title">Reviews &amp; Testimonials</h2>
          </div>
          {reviews.map((r, i) => (
            <div className="review" key={i}>
              <div className="quote-mark">&ldquo;</div>
              <p>{r.text}</p>
              <div className="reviewer">&mdash; {r.by}</div>
            </div>
          ))}
        </div>

        <div>
          <div className="block-head">
            <p className="eyebrow">Contact</p>
            <h2 className="block-title">Get in Touch</h2>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="row">
              <input type="text" name="name" placeholder="Your Name" required />
              <input type="email" name="email" placeholder="Your Email" required />
            </div>
            <input type="text" name="subject" placeholder="Subject" />
            <textarea name="message" placeholder="Your Message" required />
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
            {sent && (
              <p className="form-status">
                Thank you for reaching out! Your message has been received.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
