'use client'

import { useEffect, useState } from 'react'
import Header from './Header'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setIsVisible(true)
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-gradient-to-br from-digital-blue via-blue-900 to-slate-900">
      <Header />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute w-96 h-96 bg-berlin-orange/10 rounded-full blur-3xl animate-pulse"
          style={{
            left: `${mousePosition.x * 0.02}px`,
            top: `${mousePosition.y * 0.02}px`,
          }}
        />
        <div 
          className="absolute w-64 h-64 bg-blue-400/20 rounded-full blur-2xl animate-pulse delay-1000"
          style={{
            right: `${mousePosition.x * 0.01}px`,
            bottom: `${mousePosition.y * 0.01}px`,
          }}
        />
      </div>
      
      <div className="relative pt-16 flex items-center justify-center min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-5xl mx-auto">
            {/* Logo mit Animation */}
            <div className={`mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h1 className="text-7xl md:text-9xl font-bold mb-6 tracking-tight">
                <span className="text-white drop-shadow-2xl">SNS</span>
                <span className="text-berlin-orange ml-3 drop-shadow-2xl animate-pulse">Berlin</span>
              </h1>
            </div>

            {/* Hauptüberschrift mit Typewriter-Effekt */}
            <div className={`mb-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h2 className="text-3xl md:text-5xl font-light text-white mb-4 leading-tight">
                IT-Sicherheit & Netzwerklösungen
              </h2>
              <div className="text-2xl md:text-4xl font-semibold text-berlin-orange mb-6">
                aus dem Herzen Berlins
              </div>
            </div>

            {/* Beschreibung */}
            <div className={`mb-12 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed font-light">
                Wir schützen Ihr digitales Geschäft mit modernster Technologie und jahrelanger Expertise. 
                <span className="text-white font-medium"> Vertrauen Sie auf Berlins führende IT-Sicherheitsexperten.</span>
              </p>
            </div>

            {/* Premium Call-to-Action Buttons */}
            <div className={`mb-16 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <a
                  href="#services"
                  className="group bg-berlin-orange hover:bg-orange-500 text-white font-semibold py-5 px-10 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-xl backdrop-blur-sm border border-orange-400/30 relative overflow-hidden"
                >
                  <span className="relative z-10">Unsere Expertise entdecken</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
                <a
                  href="#contact"
                  className="group bg-white/10 backdrop-blur-md border-2 border-white/30 text-white hover:bg-white hover:text-digital-blue font-semibold py-5 px-10 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                >
                  <span className="group-hover:text-digital-blue transition-colors duration-300">Kostenlose Beratung</span>
                </a>
              </div>
            </div>

            {/* Trust Indicators mit Animation */}
            <div className={`transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                <div className="group cursor-pointer">
                  <div className="text-5xl font-bold text-berlin-orange mb-3 group-hover:scale-110 transition-transform duration-300">15+</div>
                  <div className="text-blue-100 text-lg font-medium">Jahre Erfahrung</div>
                  <div className="text-blue-300 text-sm mt-1">in kritischen Systemen</div>
                </div>
                <div className="group cursor-pointer">
                  <div className="text-5xl font-bold text-berlin-orange mb-3 group-hover:scale-110 transition-transform duration-300">500+</div>
                  <div className="text-blue-100 text-lg font-medium">Erfolgreiche Projekte</div>
                  <div className="text-blue-300 text-sm mt-1">deutschlandweit</div>
                </div>
                <div className="group cursor-pointer">
                  <div className="text-5xl font-bold text-berlin-orange mb-3 group-hover:scale-110 transition-transform duration-300">24/7</div>
                  <div className="text-blue-100 text-lg font-medium">Premium Support</div>
                  <div className="text-blue-300 text-sm mt-1">rund um die Uhr</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Verbesserter Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>

      {/* Subtle gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-neutral-light/10 to-transparent" />
    </section>
  )
}
