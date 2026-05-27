import { useEffect, useState } from 'react'
import logoImg from '../assets/logo.jpeg'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        <button className="menu-close" onClick={closeMenu}>✕</button>
        <a href="#services" onClick={closeMenu}>Services</a>
        <a href="#projects" onClick={closeMenu}>Projects</a>
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#process" onClick={closeMenu}>Process</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
      </div>

      <nav className={scrolled ? 'scrolled' : ''}>
        <div className="container nav-inner">
          <a href="#" className="logo">
            <img src={logoImg} alt="Aelion Studio Logo" className="logo-img" />
            Aelion<span>Studio</span>
          </a>
          <ul className="nav-links">
            <li><a href="#services">Services</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#process">Process</a></li>
            <li><a href="#testimonials">Reviews</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <a href="#contact" className="nav-cta">Start a Project</a>
          <button className="hamburger" onClick={() => setMenuOpen(true)}>
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>
    </>
  )
}
