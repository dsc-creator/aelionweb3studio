const testimonials = [
  { text: "Aelion Studio completely transformed our online store. Sales jumped 180% in the first month after launch. The attention to detail and conversion-focused design is unmatched.", name: 'Sarah Kimura', role: 'Founder, Lumière Fashion', av: 'av-1', emoji: '👩' },
  { text: "Our token launch page raised $2M in 48 hours. The Web3 expertise and beautiful design gave our project the credibility it needed. Absolutely elite work.", name: 'Marcus Webb', role: 'Co-Founder, NebulaFi', av: 'av-2', emoji: '👨' },
  { text: "We went from an embarrassing old website to a product we're genuinely proud to show investors. Delivered faster than promised, and the quality blew us away.", name: 'Priya Nair', role: 'CEO, Synapse AI', av: 'av-3', emoji: '👩' },
  { text: "The SaaS dashboard they built handles 100k+ daily users without breaking a sweat. The code quality and UX thinking are on par with top Silicon Valley teams.", name: 'David Okonkwo', role: 'CTO, Analytix Pro', av: 'av-4', emoji: '👨' },
  { text: "From discovery to launch in 3 weeks. Responsive, professional, and incredibly talented. Aelion Studio is the only agency I'd ever recommend to fellow founders.", name: 'Amara Osei', role: 'Founder, GreenBite', av: 'av-5', emoji: '👩' },
  { text: "Our restaurant bookings increased by 220% after the new website launched. The online ordering flow is flawless and customers constantly compliment the design.", name: 'Julien Beaumont', role: 'Owner, Maison Bistro', av: 'av-6', emoji: '👨' },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="section">
      <div className="container">
        <div className="testi-head reveal">
          <div className="section-label">Client Stories</div>
          <h2 className="section-title">Words From <span className="accent">Happy Clients</span></h2>
          <p className="section-sub">Don't take our word for it. Here's what founders and business owners say about working with us.</p>
        </div>
        <div className="testi-grid">
          {testimonials.map((t, i) => (
            <div className={`testi-card reveal${i % 3 > 0 ? ` reveal-delay-${i % 3}` : ''}`} key={i}>
              <div className="testi-quote">"</div>
              <p className="testi-text">{t.text}</p>
              <div className="testi-author">
                <div className={`testi-avatar ${t.av}`}>{t.emoji}</div>
                <div>
                  <div className="testi-name">{t.name}</div>
                  <div className="testi-role">{t.role}</div>
                  <div className="testi-stars">★★★★★</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
