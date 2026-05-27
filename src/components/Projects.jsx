const projects = [
  {
    previewClass: 'preview-fashion',
    previewContent: (
      <div className="preview-deco">
        <div className="deco-fashion">
          <div className="deco-product" style={{ background: 'linear-gradient(180deg,rgba(255,192,203,0.15),rgba(255,255,255,0.03))' }}></div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <div style={{ height: '55%', background: 'linear-gradient(180deg,rgba(255,255,255,0.1),rgba(255,255,255,0.03))', borderRadius: 8 }}></div>
            <div style={{ height: '40%', background: 'linear-gradient(180deg,rgba(255,192,203,0.12),rgba(255,255,255,0.03))', borderRadius: 8 }}></div>
          </div>
        </div>
      </div>
    ),
    cat: 'Ecommerce',
    name: 'Lumière Fashion Store',
    desc: 'A premium Shopify fashion store with advanced filtering, wishlist, AR try-on integration, and a seamless checkout flow that doubled conversion rates.',
    tags: ['Shopify', 'React', 'Tailwind', 'Node.js'],
  },
  {
    previewClass: 'preview-crypto',
    previewContent: (
      <div className="preview-deco">
        <div className="deco-crypto-chart">
          {[30, 55, 40, 80, 60, 95, 70].map((h, i) => (
            <div className="deco-bar" key={i} style={{ height: `${h}%` }}></div>
          ))}
        </div>
      </div>
    ),
    cat: 'Crypto / Web3',
    name: 'NebulaFi Token Launch',
    desc: 'A Web3 landing page for a DeFi protocol with animated tokenomics, wallet connect, roadmap, and presale countdown that raised $2M in 48 hours.',
    tags: ['Next.js', 'Web3.js', 'TypeScript'],
  },
  {
    previewClass: 'preview-saas',
    previewContent: (
      <div className="preview-deco">
        <div className="deco-saas">
          <div className="deco-saas-top">
            <div className="deco-metric"><div className="deco-m-val">94k</div><div className="deco-m-lbl">Active Users</div></div>
            <div className="deco-metric"><div className="deco-m-val">$82k</div><div className="deco-m-lbl">MRR</div></div>
          </div>
          <div className="deco-chart-line">
            {[40, 60, 45, 80, 65, 90, 75, 100].map((h, i) => (
              <div className="deco-cl" key={i} style={{ height: `${h}%` }}></div>
            ))}
          </div>
        </div>
      </div>
    ),
    cat: 'SaaS Dashboard',
    name: 'Analytix Pro Dashboard',
    desc: 'A comprehensive SaaS analytics platform with real-time data visualization, multi-workspace support, and custom reporting built with React.',
    tags: ['React', 'TypeScript', 'Node.js'],
  },
  {
    previewClass: 'preview-ai',
    previewContent: (
      <div className="preview-deco">
        <div className="deco-ai">
          <div className="deco-ai-circle"></div>
          <div className="deco-ai-line"></div>
          <div className="deco-ai-line"></div>
          <div className="deco-ai-line"></div>
        </div>
      </div>
    ),
    cat: 'AI Startup',
    name: 'Synapse AI Website',
    desc: 'A stunning AI startup marketing site with interactive demos, animated feature showcases, and a pricing flow that increased trial signups by 340%.',
    tags: ['Next.js', 'Framer Motion', 'Tailwind'],
  },
  {
    previewClass: 'preview-resto',
    previewContent: (
      <div className="preview-deco">
        <div className="deco-resto">
          <div className="deco-food-card">
            <div className="deco-food-img"></div>
            <div style={{ flex: 1 }}>
              <div className="deco-food-line" style={{ width: '80%' }}></div>
              <div className="deco-food-line" style={{ width: '50%' }}></div>
            </div>
          </div>
          <div className="deco-food-card">
            <div className="deco-food-img" style={{ background: 'linear-gradient(135deg,#22c55e,#16a34a)' }}></div>
            <div style={{ flex: 1 }}>
              <div className="deco-food-line" style={{ width: '90%' }}></div>
              <div className="deco-food-line" style={{ width: '60%' }}></div>
            </div>
          </div>
        </div>
      </div>
    ),
    cat: 'Restaurant & Booking',
    name: 'Maison Bistro App',
    desc: 'A full-stack restaurant website with online booking, menu management, delivery integration, and a CMS that empowered the team to self-manage.',
    tags: ['Next.js', 'Sanity CMS', 'Stripe'],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="projects-head reveal">
          <div className="section-label">Featured Work</div>
          <h2 className="section-title">Projects That <span className="accent">Define Excellence</span></h2>
          <p className="section-sub">A curated selection of digital experiences we've crafted for brands across industries.</p>
        </div>
        <div className="projects-grid">
          {projects.map((p, i) => (
            <div className={`project-card reveal${i % 3 > 0 ? ` reveal-delay-${i % 3}` : ''}`} key={i}>
              <div className="project-img">
                <div className={`project-preview ${p.previewClass}`}>
                  {p.previewContent}
                  <div className="preview-overlay">
                    <div className="view-btn">View Project</div>
                  </div>
                </div>
              </div>
              <div className="project-info">
                <div className="project-cat">{p.cat}</div>
                <div className="project-name">{p.name}</div>
                <div className="project-desc">{p.desc}</div>
                <div className="tech-tags">
                  {p.tags.map((t, j) => <span className="tag" key={j}>{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
