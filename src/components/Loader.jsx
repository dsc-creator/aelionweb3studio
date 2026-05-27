import { useEffect, useState } from 'react'
import logoImg from '../assets/logo.jpeg'

export default function Loader() {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
<<<<<<< HEAD
    const timer = setTimeout(() => setHidden(true), 1800)
=======
    const timer = setTimeout(() => setHidden(true), 1600)
>>>>>>> 106ce11afd55bcc20d26774aea6361db84acd2e8
    return () => clearTimeout(timer)
  }, [])

  return (
    <div id="loader" className={hidden ? 'hidden' : ''}>
<<<<<<< HEAD
      <div className="loader-logo-wrap">
        <div className="loader-logo-ring"></div>
        <img src={logoImg} alt="Aelion Studio" className="loader-img" />
      </div>
      <div className="loader-name">Aelion Studio</div>
      <div className="loader-sub">Web Development Agency</div>
=======
      <img src={logoImg} alt="Aelion Studio" style={{ width: 72, height: 72, borderRadius: '50%', objectFit: 'cover', marginBottom: 16 }} />
      <div className="loader-logo">Aelion Studio</div>
>>>>>>> 106ce11afd55bcc20d26774aea6361db84acd2e8
      <div className="loader-bar-wrap">
        <div className="loader-bar"></div>
      </div>
    </div>
  )
}
