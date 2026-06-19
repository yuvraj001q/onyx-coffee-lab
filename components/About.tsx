'use client';

import Image from 'next/image';

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about__grid">
          <div className="about__image" data-reveal>
            <Image
              src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=800&q=80"
              alt="Onyx Coffee Lab roastery"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="about__image-badge">Est. 2012</div>
          </div>
          <div data-reveal>
            <span className="section-label">Our Journey</span>
            <h2 className="section-title">Crafted With<br />Purpose & Precision</h2>
            <p className="section-desc">
              From a small roastery in Northwest Arkansas to a globally recognized
              specialty coffee brand. We source the finest beans, roast with scientific
              precision, and serve with intention. Every cup tells a story of
              transparency and craft.
            </p>
            <div className="about__stats">
              <div className="about__stat">
                <div className="about__stat-number">12+</div>
                <div className="about__stat-label">Years of Craft</div>
              </div>
              <div className="about__stat">
                <div className="about__stat-number">3</div>
                <div className="about__stat-label">Championship Titles</div>
              </div>
              <div className="about__stat">
                <div className="about__stat-number">100%</div>
                <div className="about__stat-label">Transparent Pricing</div>
              </div>
              <div className="about__stat">
                <div className="about__stat-number">Solar</div>
                <div className="about__stat-label">Powered Roastery</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
