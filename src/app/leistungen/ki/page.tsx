import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Künstliche Intelligenz & KI-Lösungen - SNS Berlin',
  description: 'Innovative KI-Lösungen zur Automatisierung und Optimierung Ihrer Geschäftsprozesse. KI-Beratung, Machine Learning und AI-Integration in Berlin.',
  keywords: ['Künstliche Intelligenz', 'KI', 'Machine Learning', 'AI', 'Automatisierung', 'Berlin'],
}

export default function KIPage() {
  const services = [
    {
      title: "KI-Beratung & Strategie",
      description: "Strategische Beratung für den erfolgreichen Einsatz von KI in Ihrem Unternehmen",
      features: [
        "KI-Potentialanalyse",
        "Use-Case-Identifikation",
        "ROI-Bewertung",
        "Implementierungsroadmap"
      ],
      icon: "🧠",
      gradient: "from-purple-500 to-indigo-600"
    },
    {
      title: "Prozessautomatisierung",
      description: "Intelligente Automatisierung wiederkehrender Geschäftsprozesse",
      features: [
        "Robotic Process Automation (RPA)",
        "Workflow-Optimierung",
        "Dokumentenverarbeitung",
        "Intelligente Datenextraktion"
      ],
      icon: "⚙️",
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      title: "Machine Learning",
      description: "Datenbasierte Lösungen für Vorhersagen und Entscheidungsunterstützung",
      features: [
        "Predictive Analytics",
        "Anomalieerkennung",
        "Empfehlungssysteme",
        "Datenanalyse & Insights"
      ],
      icon: "📊",
      gradient: "from-green-500 to-teal-600"
    },
    {
      title: "AI-Integration",
      description: "Nahtlose Integration von KI-Lösungen in bestehende Systeme",
      features: [
        "API-Integration",
        "Cloud-AI-Services",
        "Custom AI-Modelle",
        "Hybrid-AI-Architekturen"
      ],
      icon: "🔗",
      gradient: "from-orange-500 to-red-600"
    }
  ]

  const useCases = [
    {
      title: "Kundenservice",
      description: "Intelligente Chatbots und automatisierte Anfragenbearbeitung",
      icon: "💬"
    },
    {
      title: "Qualitätskontrolle",
      description: "Automatische Fehlererkennung durch Computer Vision",
      icon: "🔍"
    },
    {
      title: "Predictive Maintenance",
      description: "Vorhersage von Wartungsbedarfen durch Datenanalyse",
      icon: "🔧"
    },
    {
      title: "Fraud Detection",
      description: "Betrugserkennung in Echtzeit durch ML-Algorithmen",
      icon: "🛡️"
    }
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-600 to-indigo-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <nav className="mb-8">
                <ol className="flex items-center space-x-2 text-purple-200">
                  <li><Link href="/" className="hover:text-white">Home</Link></li>
                  <li className="mx-2">/</li>
                  <li><Link href="/#services" className="hover:text-white">Leistungen</Link></li>
                  <li className="mx-2">/</li>
                  <li className="text-white">Künstliche Intelligenz</li>
                </ol>
              </nav>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Künstliche
                <span className="block text-berlin-orange">Intelligenz</span>
              </h1>
              <p className="text-xl md:text-2xl text-purple-100 mb-8 leading-relaxed">
                Innovative KI-Lösungen zur Automatisierung und Optimierung Ihrer 
                Geschäftsprozesse – die Zukunft beginnt heute.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="#contact"
                  className="bg-berlin-orange hover:bg-orange-500 text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 text-center"
                >
                  KI-Beratung anfragen
                </Link>
                <Link
                  href="tel:+4930123456789"
                  className="bg-white/10 backdrop-blur-md border border-white/30 text-white hover:bg-white hover:text-purple-600 font-semibold py-4 px-8 rounded-2xl transition-all duration-300 text-center"
                >
                  Sofort anrufen
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* AI Impact Stats */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                KI transformiert Unternehmen
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Nutzen Sie das Potential künstlicher Intelligenz für Ihr Unternehmen
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-berlin-orange mb-4">40%</div>
                <h3 className="text-lg font-semibold mb-2">Effizienzsteigerung</h3>
                <p className="text-gray-300">durch intelligente Prozessautomatisierung</p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-berlin-orange mb-4">60%</div>
                <h3 className="text-lg font-semibold mb-2">Kosteneinsparung</h3>
                <p className="text-gray-300">bei repetitiven Aufgaben durch KI</p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-berlin-orange mb-4">24/7</div>
                <h3 className="text-lg font-semibold mb-2">Verfügbarkeit</h3>
                <p className="text-gray-300">KI-Systeme arbeiten rund um die Uhr</p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-berlin-orange mb-4">95%</div>
                <h3 className="text-lg font-semibold mb-2">Genauigkeit</h3>
                <p className="text-gray-300">bei der automatisierten Datenverarbeitung</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-digital-blue mb-6">
                Unsere KI-Services
              </h2>
              <p className="text-xl text-neutral-dark max-w-3xl mx-auto">
                Von der Strategie bis zur Implementierung – wir begleiten Sie auf Ihrer KI-Journey
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 border border-gray-100 group overflow-hidden relative"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  <div className="relative z-10">
                    <div className="text-4xl mb-6">{service.icon}</div>
                    <h3 className="text-2xl font-bold text-digital-blue mb-4 group-hover:text-purple-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                          <div className={`w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full mr-3 flex-shrink-0`} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-digital-blue mb-6">
                KI-Anwendungsfälle
              </h2>
              <p className="text-xl text-neutral-dark max-w-3xl mx-auto">
                Praktische KI-Lösungen für verschiedene Unternehmensbereiche
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    {useCase.icon}
                  </div>
                  <h3 className="text-xl font-bold text-digital-blue mb-4">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {useCase.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-digital-blue mb-6">
                Unser KI-Implementierungsprozess
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-6">
                  1
                </div>
                <h3 className="text-lg font-bold text-digital-blue mb-4">Analyse</h3>
                <p className="text-gray-600 text-sm">Identifikation von KI-Potentialen und Use Cases in Ihrem Unternehmen</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-6">
                  2
                </div>
                <h3 className="text-lg font-bold text-digital-blue mb-4">Konzeption</h3>
                <p className="text-gray-600 text-sm">Entwicklung einer maßgeschneiderten KI-Strategie und Architektur</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-6">
                  3
                </div>
                <h3 className="text-lg font-bold text-digital-blue mb-4">Implementierung</h3>
                <p className="text-gray-600 text-sm">Schrittweise Umsetzung und Integration der KI-Lösungen</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-6">
                  4
                </div>
                <h3 className="text-lg font-bold text-digital-blue mb-4">Optimierung</h3>
                <p className="text-gray-600 text-sm">Kontinuierliche Verbesserung und Anpassung der KI-Systeme</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Bereit für die KI-Revolution?
            </h2>
            <p className="text-xl text-purple-100 mb-10 max-w-3xl mx-auto">
              Lassen Sie uns gemeinsam das Potential künstlicher Intelligenz für Ihr 
              Unternehmen erschließen und Ihre Wettbewerbsfähigkeit stärken.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#contact"
                className="bg-berlin-orange hover:bg-orange-500 text-white font-semibold py-4 px-10 rounded-2xl transition-all duration-300 transform hover:scale-105"
              >
                KI-Potentialanalyse anfragen
              </Link>
              <Link
                href="/leistungen/softwareentwicklung"
                className="bg-white/10 backdrop-blur-md border border-white/30 text-white hover:bg-white hover:text-purple-600 font-semibold py-4 px-10 rounded-2xl transition-all duration-300"
              >
                Softwareentwicklung ansehen
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
