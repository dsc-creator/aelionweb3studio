export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-bg"></div>
      <div className="hero-grid"></div>
      <div className="hero-orb hero-orb-1"></div>
      <div className="hero-orb hero-orb-2"></div>
      <div className="hero-orb hero-orb-3"></div>
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-badge">
              <div className="hero-badge-dot"></div>
              Available for new projects in 2025
            </div>
            <h1 className="hero-h1">
              Building Modern Websites, Ecommerce Stores &amp;{' '}
              <span className="grad-text">Web Apps That Grow Brands</span>
            </h1>
            <p className="hero-sub">
              We help startups, businesses, and creators launch fast, beautiful, conversion-focused digital experiences that stand out.
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="btn-primary">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
                View Projects
              </a>
              <a href="#contact" className="btn-secondary">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                Book Free Consultation
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-mockup">
              <div className="mockup-bar">
                <div className="mockup-dot"></div>
                <div className="mockup-dot"></div>
                <div className="mockup-dot"></div>
                <div className="mockup-url">aelion.studio/project</div>
              </div>
              <div className="mockup-screen">
                <div className="mock-header">
                  <div className="mock-logo-box"></div>
                  <div className="mock-nav-dots">
                    <div className="mock-nav-dot"></div>
                    <div className="mock-nav-dot"></div>
                    <div className="mock-nav-dot"></div>
                  </div>
                </div>
                <div className="mock-hero-text">
                  <div className="mock-h"></div>
                  <div className="mock-h"></div>
                </div>
                <div className="mock-p"></div>
                <div className="mock-p"></div>
                <div className="mock-btns">
                  <div className="mock-btn"></div>
                  <div className="mock-btn"></div>
                </div>
                <div className="mock-cards">
                  {[0, 1, 2].map(i => (
                    <div className="mock-card" key={i}>
                      <div className="mock-card-icon"></div>
                      <div className="mock-card-line"></div>
                      <div className="mock-card-line"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="float-card float-card-1">
              <div className="fc-label">Projects Delivered</div>
              <div className="fc-value blue">120+</div>
              <div className="fc-sub">↑ 18 this quarter</div>
            </div>
            <div className="float-card float-card-2">
              <div className="fc-row">
                <div className="fc-avatar"></div>
                <div className="fc-info">
                  <div className="fc-name">Sarah K.</div>
                  <div className="fc-role">Ecommerce Founder</div>
                  <div className="fc-stars">★★★★★</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
