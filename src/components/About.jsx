import logoImg from '../assets/logo.jpeg'

const highlights = [
  { icon: '⚡', title: 'Performance First', text: '99+ Lighthouse scores. Sub-2s load times. Your users feel the difference.' },
  { icon: '🎯', title: 'Conversion Driven', text: 'Every design decision is rooted in psychology and data to maximize revenue.' },
  { icon: '🔐', title: 'Clean Code', text: 'Scalable, maintainable, and production-ready. No shortcuts, ever.' },
  { icon: '🚀', title: 'Fast Delivery', text: 'Most projects delivered in 2–4 weeks without sacrificing quality.' },
]

const techStack = ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Shopify', 'Web3', 'Node.js']

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="about-grid">
          <div className="about-img-wrap reveal">
            <div className="about-img">
              <div className="about-logo-display">
                <img src={logoImg} alt="Aelion Studio" className="about-logo-img" />
                <div className="about-logo-label">Aelion Studio</div>
              </div>
            </div>
            <div className="about-badge-float">
              <div className="fc-label">Client Satisfaction</div>
              <div className="fc-value purple">98%</div>
              <div className="fc-sub">★★★★★ Average Rating</div>
            </div>
          </div>
          <div className="about-body reveal reveal-delay-1">
            <div className="section-label">About Us</div>
            <h2 className="section-title">Crafting Digital Excellence <span className="accent">Since Day One</span></h2>
            <p className="about-text">
              At Aelion Studio, we're obsessed with building digital products that don't just look stunning — they perform. Every pixel is intentional. Every interaction is crafted to guide users and grow businesses.
            </p>
            <p className="about-text">
              We work with startups, ecommerce brands, crypto projects, and businesses that refuse to settle for ordinary. Our process is lean, our standards are elite, and our results speak for themselves.
            </p>
            <div className="about-highlights">
              {highlights.map((h, i) => (
                <div className="highlight" key={i}>
                  <div className="highlight-icon">{h.icon}</div>
                  <div className="highlight-title">{h.title}</div>
                  <div className="highlight-text">{h.text}</div>
                </div>
              ))}
            </div>
            <div className="tech-stack">
              <div className="tech-stack-title">Tech Stack</div>
              <div className="tech-badges">
                {techStack.map((t, i) => <span className="tech-badge" key={i}>{t}</span>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
