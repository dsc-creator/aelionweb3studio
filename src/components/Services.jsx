const services = [
  { icon: '🌐', color: 'blue', title: 'Custom Website Development', desc: 'Bespoke, performance-optimized websites built from scratch. Tailored to your brand identity and engineered to convert visitors into customers.' },
  { icon: '🛒', color: 'purple', title: 'Ecommerce Store Development', desc: 'High-converting Shopify and custom ecommerce stores with seamless checkout, product management, and revenue-focused design.' },
  { icon: '⛓️', color: 'cyan', title: 'Crypto & Web3 Landing Pages', desc: 'Cutting-edge Web3 landing pages for token launches, NFT projects, and DeFi protocols. Built with the aesthetics that attract crypto communities.' },
  { icon: '📊', color: 'pink', title: 'SaaS & Dashboard Development', desc: 'Complex web applications, analytics dashboards, and SaaS platforms with intuitive UX and scalable architecture using React & Next.js.' },
  { icon: '🎨', color: 'green', title: 'UI/UX Design', desc: 'Strategic design that blends aesthetics with psychology. We craft interfaces users love to navigate and that guide them toward conversion.' },
  { icon: '🔄', color: 'orange', title: 'Website Redesigns', desc: 'Transform your outdated site into a modern, high-performance digital experience. We audit, redesign, and rebuild for maximum impact.' },
]

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <div className="services-head">
          <div>
            <div className="section-label">What We Do</div>
            <h2 className="section-title">Services Built for <span className="accent">Modern Brands</span></h2>
          </div>
          <p className="section-sub">
            From lightning-fast websites to complex Web3 applications, we craft digital products that convert visitors into customers and ideas into revenue.
          </p>
        </div>
        <div className="services-grid">
          {services.map((s, i) => (
            <div className={`service-card reveal${i % 3 > 0 ? ` reveal-delay-${i % 3}` : ''}`} key={i}>
              <div className={`svc-icon ${s.color}`}>{s.icon}</div>
              <h3 className="svc-title">{s.title}</h3>
              <p className="svc-desc">{s.desc}</p>
              <div className="svc-arrow">Learn more →</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
