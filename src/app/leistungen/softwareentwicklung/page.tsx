import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Softwareentwicklung - Individual-Software - SNS Berlin',
  description: 'Maßgeschneiderte Softwarelösungen und Anwendungen für Ihre spezifischen Geschäftsanforderungen. Web-Anwendungen, APIs und System-Integration in Berlin.',
  keywords: ['Softwareentwicklung', 'Individual-Software', 'Web-Anwendungen', 'API', 'Berlin'],
}

export default function SoftwareentwicklungPage() {
  const services = [
    {
      title: "Individual-Software",
      description: "Maßgeschneiderte Softwarelösungen für Ihre spezifischen Anforderungen",
      features: [
        "Bedarfsanalyse & Konzeption",
        "Agile Entwicklungsmethoden",
        "Moderne Technologie-Stacks",
        "Wartung & Support"
      ],
      icon: "💻",
      gradient: "from-blue-500 to-digital-blue"
    },
    {
      title: "Web-Anwendungen",
      description: "Moderne, responsive Webanwendungen für optimale User Experience",
      features: [
        "Progressive Web Apps (PWA)",
        "Single Page Applications (SPA)",
        "Responsive Design",
        "Cloud-native Architekturen"
      ],
      icon: "🌐",
      gradient: "from-green-500 to-emerald-600"
    },
    {
      title: "API-Entwicklung",
      description: "Robuste APIs für nahtlose System-Integration und Datenaustauch",
      features: [
        "RESTful APIs",
        "GraphQL Implementierung",
        "Microservices-Architektur",
        "API-Dokumentation"
      ],
      icon: "🔗",
      gradient: "from-purple-500 to-indigo-600"
    },
    {
      title: "System-Integration",
      description: "Verbindung bestehender Systeme für optimierte Workflows",
      features: [
        "Legacy-System-Integration",
        "Datenbank-Migration",
        "Third-Party-Integrationen",
        "Workflow-Automatisierung"
      ],
      icon: "⚙️",
      gradient: "from-orange-500 to-berlin-orange"
    }
  ]

  const technologies = [
    { name: "React/Next.js", category: "Frontend", icon: "⚛️" },
    { name: "Node.js", category: "Backend", icon: "🟢" },
    { name: "Python", category: "Backend", icon: "🐍" },
    { name: "TypeScript", category: "Language", icon: "📘" },
    { name: "PostgreSQL", category: "Database", icon: "🐘" },
    { name: "Docker", category: "DevOps", icon: "🐳" },
    { name: "AWS/Azure", category: "Cloud", icon: "☁️" },
    { name: "Git", category: "Version Control", icon: "📝" }
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-600 to-emerald-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <nav className="mb-8">
                <ol className="flex items-center space-x-2 text-green-200">
                  <li><Link href="/" className="hover:text-white">Home</Link></li>
                  <li className="mx-2">/</li>
                  <li><Link href="/#services" className="hover:text-white">Leistungen</Link></li>
                  <li className="mx-2">/</li>
                  <li className="text-white">Softwareentwicklung</li>
                </ol>
              </nav>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Software-
                <span className="block text-berlin-orange">entwicklung</span>
              </h1>
              <p className="text-xl md:text-2xl text-green-100 mb-8 leading-relaxed">
                Maßgeschneiderte Softwarelösungen und Anwendungen für Ihre 
                spezifischen Geschäftsanforderungen – von der Idee bis zur Umsetzung.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="#contact"
                  className="bg-berlin-orange hover:bg-orange-500 text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 text-center"
                >
                  Projekt besprechen
                </Link>
                <Link
                  href="tel:+4930123456789"
                  className="bg-white/10 backdrop-blur-md border border-white/30 text-white hover:bg-white hover:text-green-600 font-semibold py-4 px-8 rounded-2xl transition-all duration-300 text-center"
                >
                  Sofort anrufen
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-digital-blue mb-6">
                Unsere Entwicklungsservices
              </h2>
              <p className="text-xl text-neutral-dark max-w-3xl mx-auto">
                Von der Konzeption bis zur Wartung – wir entwickeln Software, die Ihr Business voranbringt
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
                    <h3 className="text-2xl font-bold text-digital-blue mb-4 group-hover:text-green-600 transition-colors">
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

        {/* Technologies */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-digital-blue mb-6">
                Unsere Technologien
              </h2>
              <p className="text-xl text-neutral-dark max-w-3xl mx-auto">
                Moderne Tech-Stacks für zukunftssichere und skalierbare Lösungen
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {technologies.map((tech, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {tech.icon}
                  </div>
                  <h3 className="font-bold text-digital-blue mb-2">{tech.name}</h3>
                  <p className="text-sm text-gray-500">{tech.category}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Development Process */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-digital-blue mb-6">
                Unser Entwicklungsprozess
              </h2>
              <p className="text-xl text-neutral-dark max-w-3xl mx-auto">
                Agile Methoden für transparente und effiziente Softwareentwicklung
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-digital-blue rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-6">
                  1
                </div>
                <h3 className="text-lg font-bold text-digital-blue mb-4">Analyse</h3>
                <p className="text-gray-600 text-sm">Anforderungsanalyse und Projektplanung</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-6">
                  2
                </div>
                <h3 className="text-lg font-bold text-digital-blue mb-4">Design</h3>
                <p className="text-gray-600 text-sm">UI/UX-Design und Systemarchitektur</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-6">
                  3
                </div>
                <h3 className="text-lg font-bold text-digital-blue mb-4">Entwicklung</h3>
                <p className="text-gray-600 text-sm">Agile Entwicklung in Sprints</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-berlin-orange rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-6">
                  4
                </div>
                <h3 className="text-lg font-bold text-digital-blue mb-4">Testing</h3>
                <p className="text-gray-600 text-sm">Umfassende Tests und Qualitätssicherung</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-rose-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-6">
                  5
                </div>
                <h3 className="text-lg font-bold text-digital-blue mb-4">Deployment</h3>
                <p className="text-gray-600 text-sm">Go-Live und kontinuierlicher Support</p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Warum Individual-Software?
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-6">
                  🎯
                </div>
                <h3 className="text-xl font-bold mb-4">Maßgeschneidert</h3>
                <p className="text-gray-300">Perfekt auf Ihre Geschäftsprozesse abgestimmte Lösungen</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-digital-blue rounded-2xl flex items-center justify-center text-2xl mx-auto mb-6">
                  📈
                </div>
                <h3 className="text-xl font-bold mb-4">Skalierbar</h3>
                <p className="text-gray-300">Wächst mit Ihrem Unternehmen und passt sich an</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-6">
                  🔒
                </div>
                <h3 className="text-xl font-bold mb-4">Sicher</h3>
                <p className="text-gray-300">Vollständige Kontrolle über Ihre Daten und Prozesse</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Bereit für Ihre Software-Lösung?
            </h2>
            <p className="text-xl text-green-100 mb-10 max-w-3xl mx-auto">
              Lassen Sie uns gemeinsam Ihre Idee in eine maßgeschneiderte Software verwandeln. 
              Von der ersten Skizze bis zum fertigen Produkt.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#contact"
                className="bg-berlin-orange hover:bg-orange-500 text-white font-semibold py-4 px-10 rounded-2xl transition-all duration-300 transform hover:scale-105"
              >
                Projekt starten
              </Link>
              <Link
                href="/leistungen/anwendungen"
                className="bg-white/10 backdrop-blur-md border border-white/30 text-white hover:bg-white hover:text-green-600 font-semibold py-4 px-10 rounded-2xl transition-all duration-300"
              >
                Business-Anwendungen ansehen
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
