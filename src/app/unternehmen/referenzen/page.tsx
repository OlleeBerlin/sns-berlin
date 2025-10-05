import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Referenzen - Erfolgreiche Projekte - SNS Berlin',
  description: 'Erfolgreiche IT-Projekte und zufriedene Kunden von SNS Berlin. Referenzen aus verschiedenen Branchen und Anwendungsbereichen.',
  keywords: ['Referenzen', 'Projekte', 'Kunden', 'Erfolg', 'Berlin'],
}

export default function ReferenzenPage() {
  const references = [
    {
      company: "TechStart GmbH",
      industry: "Startup",
      project: "Cloud-Migration & Security",
      description: "Vollständige Migration zu Microsoft 365 mit erweiterten Sicherheitsmaßnahmen",
      results: [
        "99.9% Verfügbarkeit erreicht",
        "50% Kosteneinsparung durch Cloud-Lösung",
        "DSGVO-konforme Datenverarbeitung"
      ],
      logo: "🚀"
    },
    {
      company: "Medizinzentrum Berlin",
      industry: "Gesundheitswesen",
      project: "IT-Infrastruktur & Compliance",
      description: "Aufbau einer sicheren IT-Infrastruktur mit höchsten Datenschutzstandards",
      results: [
        "HIPAA-konforme Systeme",
        "24/7 Monitoring implementiert",
        "Schnellere Datenverarbeitung"
      ],
      logo: "🏥"
    },
    {
      company: "Handelsunternehmen Nord",
      industry: "Einzelhandel",
      project: "Netzwerk & Managed Services",
      description: "Modernisierung der IT-Infrastruktur mit zentralem Management",
      results: [
        "30% Performance-Steigerung",
        "Reduzierte Ausfallzeiten",
        "Zentralisierte Verwaltung"
      ],
      logo: "🏪"
    },
    {
      company: "Anwaltskanzlei Schmidt",
      industry: "Rechtswesen",
      project: "Dokumentenmanagement & Security",
      description: "Implementierung von DocuWare DMS mit erweiterten Sicherheitsfeatures",
      results: [
        "80% Zeitersparnis bei Dokumentensuche",
        "Vollständige Compliance",
        "Mobile Zugriffsmöglichkeiten"
      ],
      logo: "⚖️"
    },
    {
      company: "Produktionsbetrieb Süd",
      industry: "Industrie",
      project: "KI-Integration & Automatisierung",
      description: "Einführung von KI-Lösungen für Prozessoptimierung und Qualitätskontrolle",
      results: [
        "25% Effizienzsteigerung",
        "Automatisierte Qualitätskontrolle",
        "Predictive Maintenance"
      ],
      logo: "🏭"
    },
    {
      company: "Bildungseinrichtung Ost",
      industry: "Bildung",
      project: "Schul-IT & Digitalisierung",
      description: "Digitalisierung der Schul-IT mit modernen Lernplattformen",
      results: [
        "Hybrides Lernen ermöglicht",
        "Zentrale Verwaltung aller Geräte",
        "Kosteneffiziente Lösung"
      ],
      logo: "🎓"
    }
  ]

  const stats = [
    { number: "150+", label: "Zufriedene Kunden" },
    { number: "500+", label: "Erfolgreiche Projekte" },
    { number: "99.9%", label: "Verfügbarkeit" },
    { number: "24/7", label: "Support" }
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
                  <li><Link href="#team" className="hover:text-white">Unternehmen</Link></li>
                  <li className="mx-2">/</li>
                  <li className="text-white">Referenzen</li>
                </ol>
              </nav>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Unsere
                <span className="block text-berlin-orange">Referenzen</span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
                Erfolgreiche IT-Projekte und zufriedene Kunden aus verschiedenen Branchen – 
                von Startups bis Großunternehmen.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-digital-blue mb-6">
                Unsere Erfolgszahlen
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-berlin-orange mb-4">
                    {stat.number}
                  </div>
                  <h3 className="text-lg font-semibold text-digital-blue">
                    {stat.label}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* References Grid */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-digital-blue mb-6">
                Erfolgreiche Projekte
              </h2>
              <p className="text-xl text-neutral-dark max-w-3xl mx-auto">
                Ausgewählte Referenzen aus verschiedenen Branchen und Anwendungsbereichen
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {references.map((reference, index) => (
                <div
                  key={index}
                  className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 border border-gray-100 group"
                >
                  <div className="text-4xl mb-6">{reference.logo}</div>
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-digital-blue mb-2 group-hover:text-berlin-orange transition-colors">
                      {reference.company}
                    </h3>
                    <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                      {reference.industry}
                    </span>
                  </div>
                  
                  <h4 className="text-lg font-semibold text-neutral-dark mb-3">
                    {reference.project}
                  </h4>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {reference.description}
                  </p>
                  
                  <div className="space-y-2">
                    <h5 className="font-semibold text-digital-blue text-sm">Ergebnisse:</h5>
                    <ul className="space-y-1">
                      {reference.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-center text-sm text-gray-700">
                          <div className="w-2 h-2 bg-berlin-orange rounded-full mr-3 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-digital-blue mb-6">
                Kundenstimmen
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="text-berlin-orange text-2xl mb-4">★★★★★</div>
                <p className="text-gray-700 mb-6 italic">
                  &ldquo;SNS Berlin hat unsere IT-Infrastruktur komplett modernisiert. 
                  Die Verfügbarkeit ist deutlich gestiegen und die Kosten gesunken.&rdquo;
                </p>
                <div className="font-semibold text-digital-blue">- TechStart GmbH</div>
              </div>
              
              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="text-berlin-orange text-2xl mb-4">★★★★★</div>
                <p className="text-gray-700 mb-6 italic">
                  &ldquo;Professionelle Beratung und Umsetzung. Die Cloud-Migration 
                  verlief reibungslos und unsere Mitarbeiter sind begeistert.&rdquo;
                </p>
                <div className="font-semibold text-digital-blue">- Medizinzentrum Berlin</div>
              </div>
              
              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="text-berlin-orange text-2xl mb-4">★★★★★</div>
                <p className="text-gray-700 mb-6 italic">
                  &ldquo;24/7 Support und proaktive Wartung. Wir fühlen uns 
                  bestens betreut und können uns auf unser Kerngeschäft konzentrieren.&rdquo;
                </p>
                <div className="font-semibold text-digital-blue">- Handelsunternehmen Nord</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-digital-blue to-blue-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Werden Sie unser nächster Erfolg!
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
              Lassen Sie uns gemeinsam Ihr IT-Projekt zum Erfolg führen. 
              Kontaktieren Sie uns für ein unverbindliches Beratungsgespräch.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/kontakt"
                className="bg-berlin-orange hover:bg-orange-500 text-white font-semibold py-4 px-10 rounded-2xl transition-all duration-300 transform hover:scale-105"
              >
                Projekt besprechen
              </Link>
              <Link
                href="/unternehmen/ueber-uns"
                className="bg-white/10 backdrop-blur-md border border-white/30 text-white hover:bg-white hover:text-digital-blue font-semibold py-4 px-10 rounded-2xl transition-all duration-300"
              >
                Über uns erfahren
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
