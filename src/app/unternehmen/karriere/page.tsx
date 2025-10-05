import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Karriere - Jobs & Praktika - SNS Berlin',
  description: 'Karriere bei SNS Berlin. Werden Sie Teil unseres Teams und gestalten Sie die Zukunft der IT-Sicherheit mit. Jobs, Praktika und Ausbildungsplätze.',
  keywords: ['Karriere', 'Jobs', 'Praktika', 'Ausbildung', 'IT-Jobs', 'Berlin'],
}

export default function KarrierePage() {
  const jobOpenings = [
    {
      title: "IT-Systemadministrator (m/w/d)",
      type: "Vollzeit",
      location: "Berlin",
      department: "Infrastruktur",
      description: "Verantwortlich für die Wartung und Optimierung unserer IT-Infrastruktur",
      requirements: [
        "Abgeschlossene Ausbildung oder Studium im IT-Bereich",
        "Erfahrung mit Windows Server und Linux",
        "Kenntnisse in Netzwerktechnik",
        "Teamfähigkeit und Kommunikationsstärke"
      ],
      benefits: [
        "Flexible Arbeitszeiten",
        "Homeoffice-Möglichkeit",
        "Weiterbildungsbudget",
        "Moderne Arbeitsplätze"
      ]
    },
    {
      title: "Cybersecurity-Spezialist (m/w/d)",
      type: "Vollzeit",
      location: "Berlin",
      department: "Security",
      description: "Entwicklung und Umsetzung von Sicherheitskonzepten für unsere Kunden",
      requirements: [
        "Studium oder Ausbildung im Bereich IT-Sicherheit",
        "Zertifizierungen (z.B. CISSP, CISM) von Vorteil",
        "Erfahrung mit Security-Tools",
        "Analytisches Denken"
      ],
      benefits: [
        "Spezialisierte Weiterbildung",
        "Zertifizierungsunterstützung",
        "Interessante Projekte",
        "Karriereentwicklung"
      ]
    },
    {
      title: "Cloud-Architekt (m/w/d)",
      type: "Vollzeit",
      location: "Berlin",
      department: "Cloud",
      description: "Planung und Implementierung von Cloud-Lösungen für unsere Kunden",
      requirements: [
        "Erfahrung mit Microsoft Azure und AWS",
        "Kenntnisse in Container-Technologien",
        "Projektmanagement-Erfahrung",
        "Kundenorientierte Arbeitsweise"
      ],
      benefits: [
        "Cloud-Zertifizierungen",
        "Innovative Technologien",
        "Kundenkontakt",
        "Technische Führung"
      ]
    },
    {
      title: "Praktikum IT-Support (m/w/d)",
      type: "Praktikum",
      location: "Berlin",
      department: "Support",
      description: "Einstieg in die IT-Welt mit praktischen Erfahrungen im Support-Bereich",
      requirements: [
        "Studium oder Ausbildung im IT-Bereich",
        "Grundkenntnisse in Windows und Office",
        "Lernbereitschaft und Engagement",
        "Gute Deutschkenntnisse"
      ],
      benefits: [
        "Praktische Erfahrung",
        "Mentoring-Programm",
        "Übernahmechancen",
        "Vergütung"
      ]
    }
  ]

  const benefits = [
    {
      title: "Flexible Arbeitszeiten",
      description: "Work-Life-Balance durch flexible Arbeitszeiten und Homeoffice",
      icon: "⏰"
    },
    {
      title: "Weiterbildung",
      description: "Umfangreiches Weiterbildungsprogramm und Zertifizierungsunterstützung",
      icon: "🎓"
    },
    {
      title: "Moderne Technologien",
      description: "Arbeit mit neuesten Technologien und innovativen Lösungen",
      icon: "💻"
    },
    {
      title: "Team-Events",
      description: "Regelmäßige Team-Events und gemeinsame Aktivitäten",
      icon: "🎉"
    },
    {
      title: "Gesundheitsförderung",
      description: "Betriebliches Gesundheitsmanagement und Sportangebote",
      icon: "💪"
    },
    {
      title: "Karriereentwicklung",
      description: "Klare Karrierepfade und Entwicklungsmöglichkeiten",
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
                  <li><Link href="#team" className="hover:text-white">Unternehmen</Link></li>
                  <li className="mx-2">/</li>
                  <li className="text-white">Karriere</li>
                </ol>
              </nav>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Karriere bei
                <span className="block text-berlin-orange">SNS Berlin</span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
                Werden Sie Teil unseres Teams und gestalten Sie die Zukunft der IT-Sicherheit mit. 
                Wir bieten spannende Aufgaben, moderne Technologien und beste Entwicklungsmöglichkeiten.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="#jobs"
                  className="bg-berlin-orange hover:bg-orange-500 text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 text-center"
                >
                  Offene Stellen ansehen
                </Link>
                <Link
                  href="/kontakt"
                  className="bg-white/10 backdrop-blur-md border border-white/30 text-white hover:bg-white hover:text-digital-blue font-semibold py-4 px-8 rounded-2xl transition-all duration-300 text-center"
                >
                  Initiativbewerbung
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
                Warum SNS Berlin?
              </h2>
              <p className="text-xl text-neutral-dark max-w-3xl mx-auto">
                Wir bieten mehr als nur einen Job – wir bieten eine Karriere mit Zukunft
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

        {/* Job Openings */}
        <section id="jobs" className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-digital-blue mb-6">
                Offene Stellen
              </h2>
              <p className="text-xl text-neutral-dark max-w-3xl mx-auto">
                Werden Sie Teil unseres wachsenden Teams und gestalten Sie die Zukunft der IT mit
              </p>
            </div>

            <div className="space-y-8">
              {jobOpenings.map((job, index) => (
                <div
                  key={index}
                  className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 border border-gray-100"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <h3 className="text-2xl font-bold text-digital-blue">
                          {job.title}
                        </h3>
                        <span className="bg-berlin-orange text-white px-3 py-1 rounded-full text-sm font-medium">
                          {job.type}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-gray-600 mb-4">
                        <span className="flex items-center">
                          📍 {job.location}
                        </span>
                        <span className="flex items-center">
                          🏢 {job.department}
                        </span>
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        {job.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-digital-blue mb-3">Anforderungen:</h4>
                      <ul className="space-y-2">
                        {job.requirements.map((req, reqIndex) => (
                          <li key={reqIndex} className="flex items-start text-sm text-gray-700">
                            <div className="w-2 h-2 bg-berlin-orange rounded-full mt-2 mr-3 flex-shrink-0" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-digital-blue mb-3">Benefits:</h4>
                      <ul className="space-y-2">
                        {job.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-start text-sm text-gray-700">
                            <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <Link
                      href="/kontakt"
                      className="bg-digital-blue hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 inline-block"
                    >
                      Jetzt bewerben
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-digital-blue mb-6">
                Bewerbungsprozess
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-digital-blue rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-6">
                  1
                </div>
                <h3 className="text-lg font-bold text-digital-blue mb-4">Bewerbung</h3>
                <p className="text-gray-600 text-sm">Senden Sie uns Ihre Bewerbungsunterlagen per E-Mail</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-6">
                  2
                </div>
                <h3 className="text-lg font-bold text-digital-blue mb-4">Erstgespräch</h3>
                <p className="text-gray-600 text-sm">Telefonisches oder Video-Interview mit HR</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-6">
                  3
                </div>
                <h3 className="text-lg font-bold text-digital-blue mb-4">Fachgespräch</h3>
                <p className="text-gray-600 text-sm">Persönliches Gespräch mit dem Fachbereich</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-berlin-orange rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-6">
                  4
                </div>
                <h3 className="text-lg font-bold text-digital-blue mb-4">Entscheidung</h3>
                <p className="text-gray-600 text-sm">Schnelle Rückmeldung und Vertragsangebot</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-digital-blue to-blue-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Starten Sie Ihre Karriere bei uns!
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
              Keine passende Stelle gefunden? Senden Sie uns eine Initiativbewerbung. 
              Wir freuen uns auf motivierte IT-Experten, die unser Team verstärken möchten.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/kontakt"
                className="bg-berlin-orange hover:bg-orange-500 text-white font-semibold py-4 px-10 rounded-2xl transition-all duration-300 transform hover:scale-105"
              >
                Initiativbewerbung senden
              </Link>
              <Link
                href="/unternehmen/ueber-uns"
                className="bg-white/10 backdrop-blur-md border border-white/30 text-white hover:bg-white hover:text-digital-blue font-semibold py-4 px-10 rounded-2xl transition-all duration-300"
              >
                Mehr über uns erfahren
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
