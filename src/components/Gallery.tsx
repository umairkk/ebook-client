const images = [
  { src: '/images/gallery-1.svg', alt: 'Chinook helicopter in flight' },
  { src: '/images/gallery-2.svg', alt: 'Soldiers preparing for a mission' },
  { src: '/images/gallery-3.svg', alt: 'Mountain terrain of Nuristan' },
  { src: '/images/gallery-4.svg', alt: 'Platoon on patrol' },
  { src: '/images/gallery-5.svg', alt: 'Soldiers advancing under fire' },
  { src: '/images/gallery-6.svg', alt: 'Regimental insignia' },
  { src: '/images/gallery-7.svg', alt: 'The book with campaign medals' },
]

export default function Gallery() {
  return (
    <section id="gallery" className="section gallery">
      <div className="container">
        <p className="eyebrow">Gallery</p>
        <div className="gallery-grid">
          {images.map((img) => (
            <figure key={img.src}>
              <img src={img.src} alt={img.alt} loading="lazy" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
