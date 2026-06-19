'use client';

import Image from 'next/image';

const champions = [
  {
    name: 'Andrea Allen',
    title: 'Co-Founder & US Barista Champion',
    image: 'https://storage.ghost.io/c/fe/59/fe5955ce-11a9-48c2-837e-6927d128a3ea/content/images/2024/10/242348584_6221519084588960_8544090912778890936_n.jpg',
    bio: 'Co-Founder & Director of Hospitality at Onyx. Working in coffee since 2002. 2020 US Barista Champion and 2022 World Barista Runner-Up. Andrea brings precision, operational excellence, and a deep love for the people of coffee to everything she does.',
    stats: [
      { value: '2020', label: 'US Champion' },
      { value: '2022', label: 'World Runner-Up' },
    ],
  },
  {
    name: 'Morgan Eckroth',
    title: 'US Barista Champion & Content Creator',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=80',
    bio: '2022 US Barista Champion and World Barista Runner-Up. Known as MorganDrinksCoffee to millions of followers. Morgan makes specialty coffee accessible through content, education, and an unwavering commitment to the craft.',
    stats: [
      { value: '2022', label: 'US Champion' },
      { value: '7M+', label: 'Followers' },
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
