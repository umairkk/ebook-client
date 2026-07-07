import type { ReactNode } from 'react'
import { BookIcon, FlagIcon, MapIcon, ShieldIcon, StarIcon, UsersIcon } from './icons'

const features: { icon: ReactNode; title: string; sub: string }[] = [
  { icon: <FlagIcon />, title: 'Afghanistan Deployment', sub: '2010 – 2011' },
  { icon: <MapIcon />, title: 'The Battle of Do Ab', sub: 'A fight for survival' },
  { icon: <BookIcon />, title: 'Military Memoir', sub: 'A true story' },
  { icon: <UsersIcon />, title: 'Brotherhood', sub: 'Stronger than blood' },
  { icon: <ShieldIcon />, title: 'Leadership', sub: 'In the face of chaos' },
  { icon: <StarIcon />, title: 'Sacrifice', sub: 'Never forgotten' },
]

export default function AboutBook() {
  return (
    <section id="about-book" className="section about-book">
      <div className="container">
        <p className="eyebrow">About the Book</p>
        <h2 className="section-title">A Battle That Changed Everything</h2>
        <div className="star-divider">
          <StarIcon style={{ width: 16, height: 16 }} />
        </div>

        <div className="about-grid">
          <div className="about-text">
            <p>
              On May 25, 2011, sixty U.S. and Afghan Soldiers were dropped by helicopter into the
              remote, enemy-held Do Ab District Center of Nuristan, Afghanistan. Their mission: a
              simple reconnaissance. But within minutes of landing, they were ambushed.
            </p>
            <p>
              Pinned down, outnumbered more than five to one, and taking fire from all directions,
              the platoon was trapped in a kill zone with nowhere to run. For the next seven hours,
              they would have to rely on their training, courage, and each other to withstand an
              overwhelming onslaught from over 300 Taliban fighters.
            </p>
            <p>
              This is a story of incredible bravery, impossible odds, and the unwavering bond
              between Soldiers who faced death and refused to break.
            </p>
          </div>

          <div className="about-image">
            <img src="/images/about-book.svg" alt="Soldiers on patrol in Afghanistan" />
          </div>

          <div className="feature-list">
            {features.map((f) => (
              <div className="feature" key={f.title}>
                <div className="feature-icon">{f.icon}</div>
                <div>
                  <h4>{f.title}</h4>
                  <span>{f.sub}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
