'use client';

import Image from 'next/image';

interface LocationsProps {
  onReserve: (location: string) => void;
}

const locations = [
  {
    id: 'rogers',
    name: 'Rogers HQ',
    tag: 'Flagship',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80',
    description: 'Restored 1907 warehouse. Exposed brick. Industrial beams. Home to our roastery, bakery, and flagship cafe.',
  },
  {
    id: 'momentary',
    name: 'The Momentary',
    tag: 'Experience',
    image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&q=80',
    description: 'Futuristic cafe inside a repurposed cheese factory. Pink and cream terra-cotta tiles. Glass coffee bar. Oat milk default.',
  },
];

export default function Locations({ onReserve }: LocationsProps) {
  return (
    <section className="locations" id="locations">
      <div className="container">
        <div style={{ textAlign: 'center' }} data-reveal>
          <span className="section-label">Visit Us</span>
          <h2 className="section-title">Our Locations</h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            Two distinct spaces. One uncompromising standard.
          </p>
        </div>
        <div className="locations__grid">
          {locations.map((loc) => (
            <div className="location-card" key={loc.id} data-reveal>
              <div className="location-card__image">
                <Image
                  src={loc.image}
                  alt={loc.name}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="location-card__badge">{loc.tag}</div>
              </div>
              <div className="location-card__body">
                <h3 className="location-card__title">{loc.name}</h3>
                <p className="location-card__text">{loc.description}</p>
                <button
                  className="btn btn--primary"
                  onClick={() => onReserve(loc.name)}
                >
                  Reserve Here
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
