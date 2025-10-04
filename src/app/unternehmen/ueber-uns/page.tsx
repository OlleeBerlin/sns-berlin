import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Über uns - SNS Berlin IT-Sicherheit & Netzwerklösungen',
  description: 'Lernen Sie das Team von SNS Berlin kennen. Erfahrene IT-Experten für Sicherheit, Cloud und Netzwerklösungen in Berlin.',
  keywords: ['Über uns', 'Team', 'IT-Experten', 'Berlin', 'SNS Berlin'],
}

export default function UeberUnsPage() {
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
                  <li className="text-white">Über uns</li>
                </ol>
              </nav>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Über
                <span className="block text-berlin-orange">SNS Berlin</span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
                Ihr vertrauensvoller Partner für IT-Sicherheit, Netzwerklösungen und 
                innovative IT-Beratung in Berlin und darüber hinaus.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-digital-blue mb-6">
                  Unsere Mission
                </h2>
                <p className="text-xl text-neutral-dark mb-6 leading-relaxed">
                  Wir digitalisieren Unternehmen mit modernster Technologie und jahrelanger Expertise. 
                  Unser Ziel ist es, der führende IT-Dienstleister in Berlin zu werden.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Dabei sind wir uns unserer Verantwortung bewusst. Von der Qualität unserer Services 
                  hängt das Wohlergehen vieler Unternehmen in der Region ab. Dem stellen wir uns mit 
                  all unserer fachlichen Expertise und dem Engagement unserer großartigen Mitarbeiter.
                </p>
                <Link
                  href="#contact"
                  className="bg-digital-blue hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 inline-block"
                >
                  Jetzt Kontakt aufnehmen
                </Link>
              </div>
              <div className="bg-gradient-to-br from-digital-blue to-blue-800 rounded-3xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Unsere Werte</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-berlin-orange rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold mb-1">Vertrauen</h4>
                      <p className="text-blue-100 text-sm">Transparente Kommunikation und zuverlässige Lösungen</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-berlin-orange rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold mb-1">Innovation</h4>
                      <p className="text-blue-100 text-sm">Modernste Technologien für zukunftssichere Lösungen</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-berlin-orange rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold mb-1">Expertise</h4>
                      <p className="text-blue-100 text-sm">Jahrelange Erfahrung und kontinuierliche Weiterbildung</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-digital-blue mb-6">
                SNS Berlin in Zahlen
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-berlin-orange mb-4">150+</div>
                <h3 className="text-lg font-semibold text-digital-blue mb-2">Zufriedene Kunden</h3>
                <p className="text-gray-600">Unternehmen vertrauen auf unsere Expertise</p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-berlin-orange mb-4">24/7</div>
                <h3 className="text-lg font-semibold text-digital-blue mb-2">Support</h3>
                <p className="text-gray-600">Rund-um-die-Uhr Betreuung an 365 Tagen</p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-berlin-orange mb-4">99.9%</div>
                <h3 className="text-lg font-semibold text-digital-blue mb-2">Verfügbarkeit</h3>
                <p className="text-gray-600">Garantierte Uptime für kritische Systeme</p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-berlin-orange mb-4">10+</div>
                <h3 className="text-lg font-semibold text-digital-blue mb-2">Jahre Erfahrung</h3>
                <p className="text-gray-600">Bewährte Expertise im IT-Bereich</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-digital-blue to-blue-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Werden Sie Teil unserer Erfolgsgeschichte
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
              Lassen Sie uns gemeinsam Ihre IT-Infrastruktur auf das nächste Level bringen. 
              Kontaktieren Sie uns für ein unverbindliches Beratungsgespräch.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#contact"
                className="bg-berlin-orange hover:bg-orange-500 text-white font-semibold py-4 px-10 rounded-2xl transition-all duration-300 transform hover:scale-105"
              >
                Kostenlose Beratung anfragen
              </Link>
              <Link
                href="/unternehmen/referenzen"
                className="bg-white/10 backdrop-blur-md border border-white/30 text-white hover:bg-white hover:text-digital-blue font-semibold py-4 px-10 rounded-2xl transition-all duration-300"
              >
                Referenzen ansehen
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
