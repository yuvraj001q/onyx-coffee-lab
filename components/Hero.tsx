'use client';

interface HeroProps {
  onReserve: () => void;
}

export default function Hero({ onReserve }: HeroProps) {
  const scrollToLocations = () => {
    document.getElementById('locations')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero">
      <div className="hero__bg" />
      <div className="container hero__content">
        <div className="hero__label">
          <span className="hero__label-dot" />
          Specialty Coffee Since 2012
        </div>
        <h1 className="hero__title">
          Never Settle<br />For <em>Good Enough.</em>
        </h1>
        <p className="hero__desc">
          Founded in 2012 in Northwest Arkansas, Onyx Coffee Lab has built a global
          reputation through radical transparency, world-class competition success,
          and relentless pursuit of excellence.
        </p>
        <div className="hero__ctas">
          <button className="btn btn--primary btn--lg" onClick={onReserve}>
            Reserve a Table
          </button>
          <button className="btn btn--outline btn--lg" onClick={scrollToLocations}>
            Explore Locations
          </button>
        </div>
      </div>
      <div className="hero__scroll">
        <span>Scroll</span>
        <div className="hero__scroll-line" />
      </div>
    </section>
  );
}
