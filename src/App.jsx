import { useEffect } from 'react'
import Loader from './components/Loader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Services from './components/Services'
import Projects from './components/Projects'
import About from './components/About'
import Process from './components/Process'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Contact from './components/Contact'
import Footer from './components/Footer'
import useReveal from './components/useReveal'

export default function App() {
  useReveal()

  return (
    <>
      <Loader />
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <Projects />
      <About />
      <Process />
      <Testimonials />
      <CTA />
      <Contact />
      <Footer />
    </>
  )
}
