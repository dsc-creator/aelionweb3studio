import { useEffect, useState } from 'react'
import logoImg from '../assets/logo.jpeg'

export default function Loader() {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setHidden(true), 1600)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div id="loader" className={hidden ? 'hidden' : ''}>
      <img src={logoImg} alt="Aelion Studio" style={{ width: 72, height: 72, borderRadius: '50%', objectFit: 'cover', marginBottom: 16 }} />
      <div className="loader-logo">Aelion Studio</div>
      <div className="loader-bar-wrap">
        <div className="loader-bar"></div>
      </div>
    </div>
  )
}
