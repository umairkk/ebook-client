import { asset } from '../asset'

const authors = [
  {
    id: 'justin-foote',
    name: 'LTC Justin Foote',
    role: 'U.S. Army (Ret.) · Combat Veteran',
    photo: '/images/author-foote.svg',
    alt: 'LTC Justin Foote in uniform',
    reverse: false,
    bio: [
      'Justin Foote has dedicated more than twenty-eight years to the United States Army, rising from the enlisted ranks to earn his commission. His extensive career spans nearly three decades, leading across diverse operational, recruiting, training, logistics, and command assignments.',
      'A combat veteran of Afghanistan, Justin writes from firsthand experience at the intersection of military service and family life. This book stands as a testament to Justin\u2019s journey \u2014 a memoir to the resilient soldiers who served alongside him and to the family relationships that endured through it.',
      'Justin resides in Iowa with his wife, Laura, and their children, Owen and Kyra.',
    ],
  },
  {
    id: 'john-kelling',
    name: 'John Kelling',
    role: 'Author · Broadcaster · Journalist',
    photo: '/images/author-kelling.svg',
    alt: 'John Kelling',
    reverse: true,
    bio: [
      'John Kelling was a graduate of Minnesota State University, Mankato with a field of study in broadcasting and journalism. His work included various groups, most notably WHO Radio, ESPN, Fox Sports, and the Big Ten Network. In recent years he was a blog writer for several sports outlets.',
      'The blog on his son\u2019s deployment to Afghanistan led to the writing of his first book, Hope is a Weapon. Though the Battle of Do Ab was spoken of briefly in his earlier work, it remained at the forefront of his mind. This book is a testament to John\u2019s final career as a writer \u2014 a memoir to the faithful men who fought the battle and to the God who reigned over it.',
      'John is a native of Iowa where he and his wife Joanne happily raised their three sons, Kristopher, Jonathan, and Jordan.',
    ],
  },
]

export default function Authors() {
  return (
    <section id="authors" className="section authors" style={{ ['--authors-bg' as string]: `url('${asset('images/hero-bg.svg')}')` }}>
      <div className="container">
        <p className="eyebrow">About the Authors</p>
        <h2 className="section-title" style={{ color: 'var(--text-light)' }}>
          The Men Behind the Story
        </h2>

        {authors.map((a) => (
          <article key={a.id} className={`author-card${a.reverse ? ' reverse' : ''}`}>
            <div className="author-photo">
              <img src={asset(a.photo)} alt={a.alt} />
            </div>
            <div className="author-body">
              <p className="eyebrow">About the Author</p>
              <h3 className="author-name">{a.name}</h3>
              <div className="author-role">{a.role}</div>
              {a.bio.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
