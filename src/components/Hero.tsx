import Header from './Header'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-digital-blue to-blue-800">
      <Header />
      
      <div className="pt-16 flex items-center justify-center min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            {/* Logo groß */}
            <div className="mb-8">
              <h1 className="text-6xl md:text-8xl font-bold mb-4">
                <span className="text-white">SNS</span>
                <span className="text-berlin-orange ml-2">Berlin</span>
              </h1>
            </div>

            {/* Hauptüberschrift */}
            <h2 className="text-2xl md:text-4xl font-semibold text-white mb-6 leading-tight">
              IT-Sicherheit & Netzwerklösungen
              <br />
              <span className="text-berlin-orange">aus Berlin</span>
            </h2>

            {/* Beschreibung */}
            <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              Professionelle IT-Sicherheit, innovative Netzwerklösungen und kompetente Beratung 
              für Unternehmen jeder Größe. Ihr vertrauensvoller Partner für eine sichere digitale Zukunft.
            </p>

            {/* Call-to-Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#services"
                className="bg-berlin-orange hover:bg-orange-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Unsere Leistungen
              </a>
              <a
                href="#contact"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-digital-blue font-semibold py-4 px-8 rounded-lg transition-all duration-300"
              >
                Kontakt aufnehmen
              </a>
            </div>

            {/* Vertrauen schaffen */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="text-white">
                <div className="text-3xl font-bold text-berlin-orange mb-2">10+</div>
                <div className="text-blue-100">Jahre Erfahrung</div>
              </div>
              <div className="text-white">
                <div className="text-3xl font-bold text-berlin-orange mb-2">100+</div>
                <div className="text-blue-100">Zufriedene Kunden</div>
              </div>
              <div className="text-white">
                <div className="text-3xl font-bold text-berlin-orange mb-2">24/7</div>
                <div className="text-blue-100">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
