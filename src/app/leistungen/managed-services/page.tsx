import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Managed Services - 24/7 IT-Support - SNS Berlin',
  description: 'Kontinuierliche Überwachung und Wartung Ihrer IT-Systeme. 24/7 Monitoring, proaktive Wartung und Help Desk Support in Berlin.',
  keywords: ['Managed Services', '24/7 Support', 'IT-Monitoring', 'Help Desk', 'Berlin'],
}

export default function ManagedServicesPage() {
  const services = [
    {
      title: "24/7 Monitoring",
      description: "Kontinuierliche Überwachung Ihrer IT-Infrastruktur rund um die Uhr",
      features: [
        "Proaktive Systemüberwachung",
        "Automatische Alerting-Systeme",
        "Performance-Monitoring",
        "Verfügbarkeits-Garantien"
      ],
      icon: "📊",
      gradient: "from-blue-500 to-digital-blue"
    },
    {
      title: "Proaktive Wartung",
      description: "Vorbeugende Maßnahmen für optimale System-Performance",
      features: [
        "Regelmäßige Updates & Patches",
        "System-Optimierung",
        "Kapazitätsplanung",
        "Präventive Fehlerbehebung"
      ],
      icon: "🔧",
      gradient: "from-green-500 to-emerald-600"
    },
    {
      title: "Backup & Recovery",
      description: "Zuverlässige Datensicherung und schnelle Wiederherstellung",
      features: [
        "Automatisierte Backups",
        "Disaster Recovery Planning",
        "Schnelle Datenwiederherstellung",
        "Backup-Monitoring & Testing"
      ],
      icon: "💾",
      gradient: "from-purple-500 to-indigo-600"
    },
    {
      title: "Help Desk Support",
      description: "Professioneller IT-Support für Ihre Mitarbeiter",
      features: [
        "Multi-Channel Support (Telefon, Email, Chat)",
        "Ticket-Management-System",
        "Remote-Support-Lösungen",
        "Eskalations-Prozesse"
      ],
      icon: "🎧",
      gradient: "from-orange-500 to-berlin-orange"
    }
  ]

  const benefits = [
    {
      title: "Kostenreduzierung",
      description: "Bis zu 40% Einsparung gegenüber interner IT-Abteilung",
      icon: "💰"
    },
    {
      title: "Höhere Verfügbarkeit",
      description: "99.9% Uptime durch proaktives Monitoring",
      icon: "⚡"
    },
    {
      title: "Expertise",
      description: "Zugang zu spezialisierten IT-Experten",
      icon: "🎓"
    },
    {
      title: "Skalierbarkeit",
      description: "Flexible Anpassung an Ihr Unternehmenswachstum",
      icon: "📈"
    }
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-digital-blue to-blue-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <nav className="mb-8">
                <ol className="flex items-center space-x-2 text-blue-200">
                  <li><Link href="/" className="hover:text-white">Home</Link></li>
                  <li className="mx-2">/</li>
                  <li><Link href="/#services" className="hover:text-white">Leistungen</Link></li>
                  <li className="mx-2">/</li>
                  <li className="text-white">Managed Services</li>
                </ol>
              </nav>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Managed Services
                <span className="block text-berlin-orange">24/7 IT-Betreuung</span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
                Kontinuierliche Überwachung und Wartung Ihrer IT-Systeme durch 
                unser zertifiziertes Expertenteam – rund um die Uhr.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="#contact"
                  className="bg-berlin-orange hover:bg-orange-500 text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 text-center"
                >
                  Managed Services anfragen
                </Link>
                <Link
                  href="tel:+4930123456789"
                  className="bg-white/10 backdrop-blur-md border border-white/30 text-white hover:bg-white hover:text-digital-blue font-semibold py-4 px-8 rounded-2xl transition-all duration-300 text-center"
                >
                  24/7 Hotline
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-digital-blue mb-6">
                Warum Managed Services?
              </h2>
              <p className="text-xl text-neutral-dark max-w-3xl mx-auto">
                Konzentrieren Sie sich auf Ihr Kerngeschäft – wir kümmern uns um Ihre IT
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-digital-blue to-blue-600 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-digital-blue mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-digital-blue mb-6">
                Unsere Managed Services
              </h2>
              <p className="text-xl text-neutral-dark max-w-3xl mx-auto">
                Umfassende IT-Betreuung für maximale Effizienz und Sicherheit
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
                    <h3 className="text-2xl font-bold text-digital-blue mb-4 group-hover:text-berlin-orange transition-colors">
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

        {/* SLA Section */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Unsere Service Level Agreements
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Garantierte Leistung mit messbaren Ergebnissen
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-800 rounded-2xl p-8 text-center">
                <div className="text-4xl font-bold text-berlin-orange mb-4">99.9%</div>
                <h3 className="text-xl font-bold mb-4">Verfügbarkeit</h3>
                <p className="text-gray-300">Garantierte Uptime Ihrer kritischen Systeme</p>
              </div>
              
              <div className="bg-gray-800 rounded-2xl p-8 text-center">
                <div className="text-4xl font-bold text-berlin-orange mb-4">&lt; 15 Min</div>
                <h3 className="text-xl font-bold mb-4">Response Time</h3>
                <p className="text-gray-300">Reaktionszeit bei kritischen Incidents</p>
              </div>
              
              <div className="bg-gray-800 rounded-2xl p-8 text-center">
                <div className="text-4xl font-bold text-berlin-orange mb-4">24/7</div>
                <h3 className="text-xl font-bold mb-4">Support</h3>
                <p className="text-gray-300">Rund-um-die-Uhr Betreuung an 365 Tagen</p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-digital-blue mb-6">
                Unser Managed Services Prozess
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-digital-blue rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-6">
                  1
                </div>
                <h3 className="text-lg font-bold text-digital-blue mb-4">Assessment</h3>
                <p className="text-gray-600 text-sm">Analyse Ihrer aktuellen IT-Infrastruktur und Identifikation von Optimierungspotenzialen</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-6">
                  2
                </div>
                <h3 className="text-lg font-bold text-digital-blue mb-4">Onboarding</h3>
                <p className="text-gray-600 text-sm">Nahtlose Integration unserer Monitoring-Tools und Etablierung der Service-Prozesse</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-6">
                  3
                </div>
                <h3 className="text-lg font-bold text-digital-blue mb-4">Monitoring</h3>
                <p className="text-gray-600 text-sm">24/7 Überwachung und proaktive Wartung Ihrer Systeme durch unser Expertenteam</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-berlin-orange rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-6">
                  4
                </div>
                <h3 className="text-lg font-bold text-digital-blue mb-4">Optimization</h3>
                <p className="text-gray-600 text-sm">Kontinuierliche Verbesserung und Anpassung der Services an Ihre Bedürfnisse</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-digital-blue to-blue-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Bereit für sorgenfreie IT?
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
              Überlassen Sie uns die Verantwortung für Ihre IT-Infrastruktur. 
              Wir sorgen für optimale Performance und maximale Sicherheit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#contact"
                className="bg-berlin-orange hover:bg-orange-500 text-white font-semibold py-4 px-10 rounded-2xl transition-all duration-300 transform hover:scale-105"
              >
                Managed Services starten
              </Link>
              <Link
                href="/leistungen/security"
                className="bg-white/10 backdrop-blur-md border border-white/30 text-white hover:bg-white hover:text-digital-blue font-semibold py-4 px-10 rounded-2xl transition-all duration-300"
              >
                Security Services ansehen
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
