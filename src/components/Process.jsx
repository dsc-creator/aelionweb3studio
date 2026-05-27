const steps = [
  { num: '01', icon: '🔍', title: 'Discovery', desc: "We deep-dive into your brand, goals, audience, and competitors. Every great product starts with the right questions." },
  { num: '02', icon: '✏️', title: 'Design', desc: "Wireframes, prototypes, and pixel-perfect UI designs. You approve before a single line of code is written." },
  { num: '03', icon: '⚙️', title: 'Development', desc: "Clean, performant code with modern frameworks. Regular updates keep you in the loop at every milestone." },
  { num: '04', icon: '🚀', title: 'Launch', desc: "QA tested, SEO optimized, and deployed. Plus 30 days of free post-launch support to ensure everything runs perfectly." },
]

export default function Process() {
  return (
    <section id="process" className="section">
      <div className="container">
        <div className="process-head reveal">
          <div className="section-label">How We Work</div>
          <h2 className="section-title">A Process Built for <span className="accent">Speed & Quality</span></h2>
          <p className="section-sub">Four clear steps from concept to launch. No surprises, no delays — just results.</p>
        </div>
        <div className="process-steps">
          {steps.map((s, i) => (
            <div className={`step reveal${i > 0 ? ` reveal-delay-${i}` : ''}`} key={i}>
              <div className="step-num">
                <span>{s.num}</span>
                <div className="step-icon">{s.icon}</div>
              </div>
              <h3 className="step-title">{s.title}</h3>
              <p className="step-desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
