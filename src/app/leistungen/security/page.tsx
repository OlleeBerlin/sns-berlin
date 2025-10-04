import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'IT-Security & Cybersecurity - SOC Services - SNS Berlin',
  description: 'Umfassender Schutz vor Cyberbedrohungen. Security Operations Center, WithSecure, Fortinet Firewalls und Password Manager in Berlin.',
  keywords: ['IT-Security', 'Cybersecurity', 'SOC', 'Fortinet', 'WithSecure', 'Berlin'],
}

export default function SecurityPage() {
  const services = [
    {
      title: "Security Operations Center (SOC)",
      description: "24/7 Überwachung und Schutz vor Cyberbedrohungen",
      features: [
        "Kontinuierliches Monitoring",
        "Threat Detection & Response",
        "Incident Management",
        "Forensische Analysen"
      ],
      icon: "🛡️",
      gradient: "from-red-500 to-rose-600"
    },
    {
      title: "WithSecure Lösungen",
      description: "Enterprise-Security-Lösungen für umfassenden Schutz",
      features: [
        "Endpoint Detection & Response",
        "Email Security",
        "Vulnerability Management",
        "Security Awareness Training"
      ],
      icon: "🔒",
      gradient: "from-orange-500 to-red-600"
    },
    {
      title: "Fortinet Firewalls",
      description: "Next-Generation Firewalls für maximalen Netzwerkschutz",
      features: [
        "Application Control",
        "Intrusion Prevention (IPS)",
        "Web Filtering",
        "VPN-Konnektivität"
      ],
      icon: "🔥",
      gradient: "from-red-600 to-pink-600"
    },
    {
      title: "Password Manager",
      description: "Sichere Verwaltung und Generierung von Passwörtern",
      features: [
        "Zentrale Passwortverwaltung",
        "Sichere Passwort-Generierung",
        "Multi-Faktor-Authentifizierung",
        "Team-Sharing-Funktionen"
      ],
      icon: "🔑",
      gradient: "from-purple-500 to-red-500"
    }
  ]

  const threats = [
    { stat: "68%", description: "der Unternehmen wurden bereits Opfer von Cyberattacken" },
    { stat: "206 Mrd. €", description: "Schaden durch Cyberkriminalität in Deutschland pro Jahr" },
    { stat: "87%", description: "der Angriffe erfolgen durch organisierte Kriminalität" },
    { stat: "25.000+", description: "neue Malware-Varianten täglich entdeckt" }
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-red-600 to-rose-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <nav className="mb-8">
                <ol className="flex items-center space-x-2 text-red-200">
                  <li><Link href="/" className="hover:text-white">Home</Link></li>
                  <li className="mx-2">/</li>
                  <li><Link href="/#services" className="hover:text-white">Leistungen</Link></li>
                  <li className="mx-2">/</li>
                  <li className="text-white">Security</li>
                </ol>
              </nav>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                IT-Security
                <span className="block text-berlin-orange">& Cyberschutz</span>
              </h1>
              <p className="text-xl md:text-2xl text-red-100 mb-8 leading-relaxed">
                Umfassender Schutz vor Cyberbedrohungen durch modernste 
                Sicherheitstechnologien und unser Security Operations Center.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="#contact"
                  className="bg-berlin-orange hover:bg-orange-500 text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 text-center"
                >
                  Security-Check anfragen
                </Link>
                <Link
                  href="tel:+4930123456789"
                  className="bg-white/10 backdrop-blur-md border border-white/30 text-white hover:bg-white hover:text-red-600 font-semibold py-4 px-8 rounded-2xl transition-all duration-300 text-center"
                >
                  Notfall-Hotline
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Threat Statistics */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Die Bedrohungslage
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Cyberkriminalität nimmt exponentiell zu – schützen Sie Ihr Unternehmen jetzt
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {threats.map((threat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-berlin-orange mb-4">
                    {threat.stat}
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    {threat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-digital-blue mb-6">
                Unsere Security-Services
              </h2>
              <p className="text-xl text-neutral-dark max-w-3xl mx-auto">
                Mehrschichtiger Schutz durch bewährte Technologien und Expertise
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
                    <h3 className="text-2xl font-bold text-digital-blue mb-4 group-hover:text-red-600 transition-colors">
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

        {/* Security Framework */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-digital-blue mb-6">
                Unser Security-Framework
              </h2>
              <p className="text-xl text-neutral-dark max-w-3xl mx-auto">
                Systematischer Schutz in allen Bereichen Ihrer IT-Infrastruktur
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-rose-600 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-6">
                  🎯
                </div>
                <h3 className="text-xl font-bold text-digital-blue mb-4">Prävention</h3>
                <p className="text-gray-600">Proaktiver Schutz durch Firewalls, Endpoint-Security und Awareness-Training.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-6">
                  👁️
                </div>
                <h3 className="text-xl font-bold text-digital-blue mb-4">Detection</h3>
                <p className="text-gray-600">24/7 Monitoring durch unser SOC mit modernsten Threat-Detection-Systemen.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-red-500 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-6">
                  ⚡
                </div>
                <h3 className="text-xl font-bold text-digital-blue mb-4">Response</h3>
                <p className="text-gray-600">Schnelle Incident-Response und forensische Analyse bei Sicherheitsvorfällen.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-red-600 to-rose-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Schützen Sie Ihr Unternehmen jetzt!
            </h2>
            <p className="text-xl text-red-100 mb-10 max-w-3xl mx-auto">
              Warten Sie nicht auf den ersten Cyberangriff. Lassen Sie uns Ihre 
              Sicherheitslücken identifizieren und schließen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#contact"
                className="bg-berlin-orange hover:bg-orange-500 text-white font-semibold py-4 px-10 rounded-2xl transition-all duration-300 transform hover:scale-105"
              >
                Kostenlosen Security-Check anfragen
              </Link>
              <Link
                href="/leistungen/managed-services"
                className="bg-white/10 backdrop-blur-md border border-white/30 text-white hover:bg-white hover:text-red-600 font-semibold py-4 px-10 rounded-2xl transition-all duration-300"
              >
                Managed Security Services
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
