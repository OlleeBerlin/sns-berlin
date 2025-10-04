import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'IT-Infrastruktur Lösungen - SNS Berlin',
  description: 'Moderne IT-Infrastrukturen für optimale Geschäftsprozesse. 3CX Telefonanlagen, Multifunktionsgeräte und Hardware-Lösungen in Berlin.',
  keywords: ['IT-Infrastruktur', '3CX Telefonanlage', 'Hardware', 'Netzwerk', 'Berlin'],
}

export default function InfrastrukturPage() {
  const services = [
    {
      title: "3CX Telefonanlage",
      description: "Moderne VoIP-Telefonanlagen für professionelle Kommunikation",
      features: [
        "Cloud-basierte Telefonie",
        "Mobile Apps für alle Geräte",
        "Video-Konferenzen integriert",
        "Kosteneffiziente Lösung"
      ],
      icon: "📞"
    },
    {
      title: "Multifunktionsgeräte",
      description: "Professionelle Drucker, Scanner und Kopierer für Ihr Büro",
      features: [
        "Hochwertige Druckqualität",
        "Scan-to-Email Funktionen",
        "Wartung und Support inklusive",
        "Nachhaltige Lösungen"
      ],
      icon: "🖨️"
    },
    {
      title: "IT-Hardware",
      description: "Gebrauchte und neue IT-Hardware für jeden Bedarf",
      features: [
        "Zertifizierte Gebrauchtgeräte",
        "Garantie und Support",
        "Nachhaltig und kostengünstig",
        "Professionelle Aufbereitung"
      ],
      icon: "💻"
    },
    {
      title: "Netzwerk-Setup",
      description: "Planung und Implementierung Ihrer Netzwerkinfrastruktur",
      features: [
        "Strukturierte Verkabelung",
        "WLAN-Lösungen",
        "Netzwerk-Sicherheit",
        "Performance-Optimierung"
      ],
      icon: "🌐"
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
                  <li className="text-white">Infrastruktur</li>
                </ol>
              </nav>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                IT-Infrastruktur
                <span className="block text-berlin-orange">Lösungen</span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
                Moderne IT-Infrastrukturen für optimale Geschäftsprozesse – 
                von Telefonanlagen bis Hardware-Lösungen.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="#contact"
                  className="bg-berlin-orange hover:bg-orange-500 text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 text-center"
                >
                  Kostenlose Beratung
                </Link>
                <Link
                  href="tel:+4930123456789"
                  className="bg-white/10 backdrop-blur-md border border-white/30 text-white hover:bg-white hover:text-digital-blue font-semibold py-4 px-8 rounded-2xl transition-all duration-300 text-center"
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
                Unsere Infrastruktur-Services
              </h2>
              <p className="text-xl text-neutral-dark max-w-3xl mx-auto">
                Professionelle IT-Infrastruktur-Lösungen für maximale Effizienz und Zuverlässigkeit
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 border border-gray-100 group"
                >
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
                        <div className="w-2 h-2 bg-berlin-orange rounded-full mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-digital-blue to-blue-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Bereit für moderne IT-Infrastruktur?
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
              Lassen Sie uns Ihre IT-Infrastruktur auf das nächste Level bringen. 
              Unsere Experten beraten Sie gerne kostenlos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#contact"
                className="bg-berlin-orange hover:bg-orange-500 text-white font-semibold py-4 px-10 rounded-2xl transition-all duration-300 transform hover:scale-105"
              >
                Jetzt Beratung anfragen
              </Link>
              <Link
                href="/#services"
                className="bg-white/10 backdrop-blur-md border border-white/30 text-white hover:bg-white hover:text-digital-blue font-semibold py-4 px-10 rounded-2xl transition-all duration-300"
              >
                Alle Leistungen ansehen
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
