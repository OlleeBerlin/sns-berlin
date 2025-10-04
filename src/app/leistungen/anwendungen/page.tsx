import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Business-Anwendungen - DocuWare & Lettershop - SNS Berlin',
  description: 'Spezialisierte Business-Anwendungen zur Digitalisierung Ihrer Arbeitsabläufe. DocuWare DMS, Workflow-Automation und Lettershop-Services in Berlin.',
  keywords: ['DocuWare', 'DMS', 'Dokumentenmanagement', 'Lettershop', 'Workflow-Automation', 'Berlin'],
}

export default function AnwendungenPage() {
  const services = [
    {
      title: "DocuWare DMS",
      description: "Professionelles Dokumentenmanagement für papierlose Büros",
      features: [
        "Digitale Dokumentenarchivierung",
        "Intelligente Indexierung",
        "Volltext-Suche",
        "Revisionssichere Archivierung"
      ],
      icon: "📄",
      gradient: "from-blue-500 to-digital-blue"
    },
    {
      title: "Workflow-Automation",
      description: "Automatisierte Geschäftsprozesse für maximale Effizienz",
      features: [
        "Digitale Freigabeprozesse",
        "Automatische Weiterleitung",
        "Status-Tracking",
        "Benachrichtigungssystem"
      ],
      icon: "🔄",
      gradient: "from-green-500 to-emerald-600"
    },
    {
      title: "Dokumentenmanagement",
      description: "Zentrale Verwaltung und Organisation aller Unternehmensdokumente",
      features: [
        "Versionskontrolle",
        "Zugriffsberechtigungen",
        "Compliance-Management",
        "Backup & Recovery"
      ],
      icon: "📋",
      gradient: "from-purple-500 to-indigo-600"
    },
    {
      title: "Lettershop-Services",
      description: "Professionelle Briefdienstleistungen und Postversand",
      features: [
        "Digitaler Briefversand",
        "Frankierung & Porto-Optimierung",
        "Adressvalidierung",
        "Sendungsverfolgung"
      ],
      icon: "📮",
      gradient: "from-orange-500 to-berlin-orange"
    }
  ]

  const docuwareFeatures = [
    {
      title: "Rechnungsverarbeitung",
      description: "Automatisierte Erfassung und Verarbeitung von Eingangsrechnungen",
      icon: "💰"
    },
    {
      title: "Vertragsmanagement",
      description: "Digitale Verwaltung und Überwachung von Verträgen",
      icon: "📝"
    },
    {
      title: "Personalakten",
      description: "Sichere und DSGVO-konforme Verwaltung von Personalunterlagen",
      icon: "👥"
    },
    {
      title: "Projektdokumentation",
      description: "Zentrale Ablage und Verwaltung von Projektunterlagen",
      icon: "📊"
    }
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-teal-600 to-cyan-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <nav className="mb-8">
                <ol className="flex items-center space-x-2 text-teal-200">
                  <li><Link href="/" className="hover:text-white">Home</Link></li>
                  <li className="mx-2">/</li>
                  <li><Link href="/#services" className="hover:text-white">Leistungen</Link></li>
                  <li className="mx-2">/</li>
                  <li className="text-white">Anwendungen</li>
                </ol>
              </nav>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Business-
                <span className="block text-berlin-orange">Anwendungen</span>
              </h1>
              <p className="text-xl md:text-2xl text-teal-100 mb-8 leading-relaxed">
                Spezialisierte Business-Anwendungen zur Digitalisierung und 
                Optimierung Ihrer Arbeitsabläufe mit DocuWare und Lettershop-Services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="#contact"
                  className="bg-berlin-orange hover:bg-orange-500 text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 text-center"
                >
                  Demo anfragen
                </Link>
                <Link
                  href="tel:+4930123456789"
                  className="bg-white/10 backdrop-blur-md border border-white/30 text-white hover:bg-white hover:text-teal-600 font-semibold py-4 px-8 rounded-2xl transition-all duration-300 text-center"
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
                Unsere Business-Anwendungen
              </h2>
              <p className="text-xl text-neutral-dark max-w-3xl mx-auto">
                Professionelle Lösungen für effiziente Dokumentenverwaltung und Geschäftsprozesse
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
                    <h3 className="text-2xl font-bold text-digital-blue mb-4 group-hover:text-teal-600 transition-colors">
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

        {/* DocuWare Focus */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-digital-blue mb-6">
                DocuWare Anwendungsbereiche
              </h2>
              <p className="text-xl text-neutral-dark max-w-3xl mx-auto">
                Vielseitige Einsatzmöglichkeiten für verschiedene Unternehmensbereiche
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {docuwareFeatures.map((feature, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-digital-blue mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-digital-blue mb-6">
                  Vorteile digitaler Dokumentenverwaltung
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-berlin-orange rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-digital-blue mb-2">Effizienzsteigerung</h3>
                      <p className="text-gray-600">Bis zu 70% Zeitersparnis bei der Dokumentensuche</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-berlin-orange rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-digital-blue mb-2">Kosteneinsparung</h3>
                      <p className="text-gray-600">Reduzierung von Papier-, Druck- und Lagerkosten</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-berlin-orange rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-digital-blue mb-2">Compliance</h3>
                      <p className="text-gray-600">DSGVO-konforme und revisionssichere Archivierung</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-berlin-orange rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-digital-blue mb-2">Mobilität</h3>
                      <p className="text-gray-600">Zugriff auf Dokumente von überall und jederzeit</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-teal-500 to-cyan-600 rounded-3xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">ROI-Kalkulation</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Zeitersparnis pro Mitarbeiter/Tag:</span>
                    <span className="font-bold">2 Stunden</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Kostenersparnis pro Jahr:</span>
                    <span className="font-bold">€15.000+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>ROI nach:</span>
                    <span className="font-bold">6-12 Monaten</span>
                  </div>
                  <div className="border-t border-teal-300 pt-4 mt-6">
                    <p className="text-sm text-teal-100">
                      *Durchschnittswerte basierend auf Unternehmen mit 10-50 Mitarbeitern
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Implementation Process */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Implementierungsprozess
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Strukturierte Einführung für maximalen Erfolg
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-6">
                  1
                </div>
                <h3 className="text-lg font-bold mb-4">Analyse</h3>
                <p className="text-gray-300 text-sm">Erfassung Ihrer aktuellen Dokumentenprozesse und Anforderungen</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-digital-blue rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-6">
                  2
                </div>
                <h3 className="text-lg font-bold mb-4">Konzeption</h3>
                <p className="text-gray-300 text-sm">Entwicklung einer maßgeschneiderten DMS-Lösung</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-6">
                  3
                </div>
                <h3 className="text-lg font-bold mb-4">Implementation</h3>
                <p className="text-gray-300 text-sm">Installation, Konfiguration und Datenmigration</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-berlin-orange rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-6">
                  4
                </div>
                <h3 className="text-lg font-bold mb-4">Schulung</h3>
                <p className="text-gray-300 text-sm">Umfassende Mitarbeiterschulungen und Go-Live-Support</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-teal-600 to-cyan-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Bereit für das papierlose Büro?
            </h2>
            <p className="text-xl text-teal-100 mb-10 max-w-3xl mx-auto">
              Digitalisieren Sie Ihre Dokumentenprozesse mit DocuWare und steigern Sie 
              die Effizienz Ihres Unternehmens nachhaltig.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#contact"
                className="bg-berlin-orange hover:bg-orange-500 text-white font-semibold py-4 px-10 rounded-2xl transition-all duration-300 transform hover:scale-105"
              >
                DocuWare Demo anfragen
              </Link>
              <Link
                href="/leistungen/managed-services"
                className="bg-white/10 backdrop-blur-md border border-white/30 text-white hover:bg-white hover:text-teal-600 font-semibold py-4 px-10 rounded-2xl transition-all duration-300"
              >
                Managed Services ansehen
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
