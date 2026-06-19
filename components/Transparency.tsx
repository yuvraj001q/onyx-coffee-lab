'use client';

const metrics = [
  { icon: '☀️', value: '100%', label: 'Solar Powered Roastery' },
  { icon: '📊', value: 'Published', label: 'Green Coffee Pricing' },
  { icon: '📈', value: 'Open', label: 'Scoring Data Published' },
  { icon: '💚', value: 'Above', label: 'Fair Trade Wages' },
];

export default function Transparency() {
  return (
    <section className="transparency" id="transparency">
      <div className="container">
        <div style={{ textAlign: 'center' }} data-reveal>
          <span className="section-label">Radical Transparency</span>
          <h2 className="section-title">What We Stand For</h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            We believe in sharing everything. Our pricing, our process, our data.
            No secrets. No shortcuts.
          </p>
        </div>
        <div className="transparency__grid">
          {metrics.map((m) => (
            <div className="metric-card" key={m.label} data-reveal>
              <div className="metric-card__icon">{m.icon}</div>
              <div className="metric-card__value">{m.value}</div>
              <div className="metric-card__label">{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
