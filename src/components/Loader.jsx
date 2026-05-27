import { useEffect, useState } from 'react'
import logoImg from '../assets/logo.jpeg'

export default function Loader() {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setHidden(true), 1800)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div id="loader" className={hidden ? 'hidden' : ''}>
      <div className="loader-logo-wrap">
        <div className="loader-logo-ring"></div>
        <img src={logoImg} alt="Aelion Studio" className="loader-img" />
      </div>
      <div className="loader-name">Aelion Studio</div>
      <div className="loader-sub">Web Development Agency</div>
      <div className="loader-bar-wrap">
        <div className="loader-bar"></div>
      </div>
    </div>
  )
}
