import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import About from './components/About'
import Stats from './components/Stats'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'
import Cursor from './components/Cursor'

function App() {
  return (
    <div className="min-h-screen bg-background text-white font-sans overflow-x-hidden selection:bg-primary selection:text-white selection:bg-opacity-30">
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <Features />
        <About />
        <Stats />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
