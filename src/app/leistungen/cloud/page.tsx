import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Cloud-Lösungen - Microsoft 365 & Azure - SNS Berlin',
  description: 'Professionelle Cloud-Services für maximale Flexibilität. Microsoft 365, Azure, Cloud Migration und Hybrid-Cloud-Strategien in Berlin.',
  keywords: ['Cloud-Lösungen', 'Microsoft 365', 'Azure', 'Cloud Migration', 'Berlin'],
}

export default function CloudPage() {
  const services = [
    {
      title: "Microsoft 365",
      description: "Vollständige Office-Suite in der Cloud mit modernster Kollaboration",
      features: [
        "Word, Excel, PowerPoint in der Cloud",
        "Teams für Videokonferenzen",
        "SharePoint für Dokumentenmanagement",
        "OneDrive für sicheren Dateiaustausch"
      ],
      icon: "☁️",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Microsoft Azure",
      description: "Skalierbare Cloud-Infrastruktur für Ihre Anwendungen",
      features: [
        "Virtual Machines und Container",
        "Datenbanken und Analytics",
        "KI und Machine Learning Services",
        "Hybrid-Cloud-Integration"
      ],
      icon: "🌐",
      gradient: "from-cyan-500 to-blue-600"
    },
    {
      title: "Cloud Migration",
      description: "Sichere Migration Ihrer bestehenden Systeme in die Cloud",
      features: [
        "Migrations-Strategie und Planung",
        "Datenübertragung ohne Ausfallzeiten",
        "Testing und Validierung",
        "Schulung Ihrer Mitarbeiter"
      ],
      icon: "🚀",
      gradient: "from-purple-500 to-indigo-600"
    },
    {
      title: "Hybrid-Cloud-Strategien",
      description: "Optimale Kombination aus On-Premise und Cloud-Lösungen",
      features: [
        "Bedarfsanalyse und Strategie",
        "Sichere Verbindungen (VPN/ExpressRoute)",
        "Backup und Disaster Recovery",
        "Compliance und Datenschutz"
      ],
      icon: "🔗",
      gradient: "from-green-500 to-teal-600"
    }
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-cyan-600 to-blue-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <nav className="mb-8">
                <ol className="flex items-center space-x-2 text-cyan-200">
                  <li><Link href="/" className="hover:text-white">Home</Link></li>
                  <li className="mx-2">/</li>
                  <li><Link href="/#services" className="hover:text-white">Leistungen</Link></li>
                  <li className="mx-2">/</li>
                  <li className="text-white">Cloud-Lösungen</li>
                </ol>
              </nav>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Cloud-Lösungen
                <span className="block text-berlin-orange">für die Zukunft</span>
              </h1>
              <p className="text-xl md:text-2xl text-cyan-100 mb-8 leading-relaxed">
                Professionelle Cloud-Services für maximale Flexibilität und Skalierbarkeit 
                Ihres Unternehmens mit Microsoft 365 und Azure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="#contact"
                  className="bg-berlin-orange hover:bg-orange-500 text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 text-center"
                >
                  Cloud-Beratung anfragen
                </Link>
                <Link
                  href="tel:+4930123456789"
                  className="bg-white/10 backdrop-blur-md border border-white/30 text-white hover:bg-white hover:text-cyan-600 font-semibold py-4 px-8 rounded-2xl transition-all duration-300 text-center"
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
                Unsere Cloud-Services
              </h2>
              <p className="text-xl text-neutral-dark max-w-3xl mx-auto">
                Von Microsoft 365 bis Azure – wir bringen Ihr Unternehmen sicher in die Cloud
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
                    <h3 className="text-2xl font-bold text-digital-blue mb-4 group-hover:text-cyan-600 transition-colors">
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

        {/* Benefits Section */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-digital-blue mb-6">
                Warum Cloud mit SNS Berlin?
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-6">
                  💰
                </div>
                <h3 className="text-xl font-bold text-digital-blue mb-4">Kosteneffizient</h3>
                <p className="text-gray-600">Reduzieren Sie IT-Kosten durch bedarfsgerechte Cloud-Lösungen ohne hohe Investitionen.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-6">
                  📈
                </div>
                <h3 className="text-xl font-bold text-digital-blue mb-4">Skalierbar</h3>
                <p className="text-gray-600">Wachsen Sie flexibel mit Ihrem Unternehmen – Cloud-Ressourcen nach Bedarf.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-6">
                  🔒
                </div>
                <h3 className="text-xl font-bold text-digital-blue mb-4">Sicher</h3>
                <p className="text-gray-600">Enterprise-Grade Sicherheit mit deutschen Datenschutz-Standards und Compliance.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Bereit für die Cloud?
            </h2>
            <p className="text-xl text-cyan-100 mb-10 max-w-3xl mx-auto">
              Starten Sie Ihre Cloud-Journey mit Microsoft 365 und Azure. 
              Wir begleiten Sie von der Planung bis zur erfolgreichen Umsetzung.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#contact"
                className="bg-berlin-orange hover:bg-orange-500 text-white font-semibold py-4 px-10 rounded-2xl transition-all duration-300 transform hover:scale-105"
              >
                Cloud-Migration starten
              </Link>
              <Link
                href="/leistungen/security"
                className="bg-white/10 backdrop-blur-md border border-white/30 text-white hover:bg-white hover:text-cyan-600 font-semibold py-4 px-10 rounded-2xl transition-all duration-300"
              >
                Cloud Security ansehen
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
