import { useEffect, useRef } from 'react'

function animateCounter(el, target, suffix = '') {
  let start = null
  const duration = 1800
  const step = (timestamp) => {
    if (!start) start = timestamp
    const progress = Math.min((timestamp - start) / duration, 1)
    const eased = 1 - Math.pow(1 - progress, 3)
    el.textContent = Math.floor(eased * target) + suffix
    if (progress < 1) requestAnimationFrame(step)
  }
  requestAnimationFrame(step)
}

const stats = [
  { target: 120, suffix: '+', label: 'Projects Completed' },
  { target: 7, suffix: '+', label: 'Technologies Mastered' },
  { target: 98, suffix: '%', label: 'Client Satisfaction' },
  { target: 4, suffix: 'yr', label: 'Years of Excellence' },
]

export default function Stats() {
  const refs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const idx = refs.current.indexOf(entry.target)
          if (idx !== -1) {
            animateCounter(entry.target, stats[idx].target, stats[idx].suffix)
            observer.unobserve(entry.target)
          }
        }
      })
    }, { threshold: 0.5 })

    refs.current.forEach(el => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="stats">
      <div className="container">
        <div className="stats-grid">
          {stats.map((s, i) => (
            <div className={`stat-item reveal${i > 0 ? ` reveal-delay-${i}` : ''}`} key={i}>
              <div className="stat-num" ref={el => refs.current[i] = el}>
                {s.target}{s.suffix}
              </div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
