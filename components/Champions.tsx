'use client';

import Image from 'next/image';

const champions = [
  {
    name: 'Andrea Allen',
    title: 'World Barista Champion',
    image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=600&q=80',
    bio: 'Three-time US Barista Champion and 2023 World Champion. Andrea brings precision, storytelling, and unparalleled technical skill to every competition.',
    stats: [
      { value: '3x', label: 'US Champion' },
      { value: '2023', label: 'World Champion' },
    ],
  },
  {
    name: 'Morgan Eckroth',
    title: 'US Barista Champion',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',
    bio: '2022 US Barista Champion. Known for innovative flavor profiling and a deep commitment to sustainability and transparency in coffee sourcing.',
    stats: [
      { value: '2022', label: 'US Champion' },
      { value: '100+', label: 'Recipes Created' },
    ],
  },
];

export default function Champions() {
  return (
    <section className="champions" id="champions">
      <div className="container">
        <div style={{ textAlign: 'center' }} data-reveal>
          <span className="section-label">World-Class Talent</span>
          <h2 className="section-title">Champions<br />In Every Cup</h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            Our team includes some of the most decorated baristas in the world.
          </p>
        </div>
        <div className="champions__grid">
          {champions.map((champ) => (
            <div className="champion-card" key={champ.name} data-reveal>
              <div className="champion-card__image">
                <Image
                  src={champ.image}
                  alt={champ.name}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="champion-card__image-tag">{champ.title}</div>
              </div>
              <div>
                <h3 className="champion-card__name">{champ.name}</h3>
                <div className="champion-card__title">{champ.title}</div>
                <p className="champion-card__bio">{champ.bio}</p>
                <div className="champion-card__stats">
                  {champ.stats.map((s) => (
                    <div className="champion-stat" key={s.label}>
                      <div className="champion-stat__value">{s.value}</div>
                      <div className="champion-stat__label">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
