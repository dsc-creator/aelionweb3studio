import logoImg from '../assets/logo.jpeg'

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
<<<<<<< HEAD
            <a href="#" className="footer-brand-logo">
              <img src={logoImg} alt="Aelion Studio" className="footer-logo-img" />
              <div className="footer-logo">AelionStudio</div>
            </a>
=======
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
              <img src={logoImg} alt="Aelion Studio" style={{ width: 36, height: 36, borderRadius: '50%', objectFit: 'cover' }} />
              <div className="footer-logo">AelionStudio</div>
            </div>
>>>>>>> 106ce11afd55bcc20d26774aea6361db84acd2e8
            <p className="footer-desc">Building premium digital experiences for startups, ecommerce brands, and modern businesses worldwide.</p>
            <div className="footer-socials">
              {['𝕏', 'in', '📸', '✈️', '▶'].map((s, i) => (
                <a href="#" className="footer-social" key={i}>{s}</a>
              ))}
            </div>
          </div>

          <div className="footer-col">
            <h4>Services</h4>
            <ul className="footer-links-list">
              {['Custom Websites', 'Ecommerce Stores', 'Crypto / Web3', 'SaaS Dashboards', 'UI/UX Design', 'Redesigns'].map((item, i) => (
                <li key={i}><a href="#services">{item}</a></li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <ul className="footer-links-list">
              <li><a href="#about">About Us</a></li>
              <li><a href="#projects">Portfolio</a></li>
              <li><a href="#process">Our Process</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Tech Stack</h4>
            <ul className="footer-links-list">
              {['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Shopify', 'Web3 / Solidity'].map((item, i) => (
                <li key={i}><a href="#">{item}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
<<<<<<< HEAD
          <div className="footer-copy">© 2026 Aelion Studio. All rights reserved.</div>
=======
          <div className="footer-copy">© 2025 Aelion Studio. All rights reserved.</div>
>>>>>>> 106ce11afd55bcc20d26774aea6361db84acd2e8
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
