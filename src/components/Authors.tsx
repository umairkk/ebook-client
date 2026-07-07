import { asset } from '../asset'

export default function Authors() {
  return (
    <section id="authors" className="section authors" style={{ ['--authors-bg' as string]: `url('${asset('images/hero-bg.svg')}')` }}>
      <div className="container">
        <article className="author-card">
          <div className="author-photo">
            <img
              src={asset('images/real/justin-foote.jpg')}
              alt="LTC Justin Foote in uniform"
              onError={(event) => {
                event.currentTarget.src = asset('images/author-foote.svg')
              }}
            />
          </div>
          <div className="author-body">
            <p className="eyebrow">About the Author</p>
            <h3 className="author-name">LTC Justin Foote</h3>
            <p>
              Justin Foote is a retired Army Lieutenant Colonel with over 20 years of service. He
              deployed to Afghanistan in 2010-2011 as a platoon leader with the 2nd Battalion, 503rd
              Infantry Regiment, 173rd Airborne Brigade.
            </p>
            <p>
              His experiences in leadership, combat, and sacrifice inspired him to write
              <em> Miraculous Turn of Events: The Battle of Do Ab</em>, a memoir honoring his
              Soldiers and their extraordinary courage.
            </p>
            <a href="#contact" className="btn btn-outline author-button">
              Read More About Justin
            </a>
          </div>
        </article>
      </div>
    </section>
  )
}
