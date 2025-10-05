import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Kontakt - SNS Berlin IT-Sicherheit & Netzwerklösungen',
  description: 'Kontaktieren Sie SNS Berlin für IT-Sicherheit, Cloud-Lösungen und Netzwerkservices. Beratung, Support und Projektanfragen in Berlin.',
  keywords: ['Kontakt', 'Beratung', 'Support', 'IT-Services', 'Berlin'],
}

export default function KontaktPage() {
  const contactInfo = [
    {
      title: "Telefon",
      value: "+49 (30) 123 456 789",
      description: "Mo-Fr: 8:00-18:00 Uhr",
      icon: "📞",
      link: "tel:+4930123456789"
    },
    {
      title: "E-Mail",
      value: "info@sns-berlin.de",
      description: "Antwort innerhalb von 24h",
      icon: "✉️",
      link: "mailto:info@sns-berlin.de"
    },
    {
      title: "Adresse",
      value: "Musterstraße 123",
      description: "10115 Berlin, Deutschland",
      icon: "📍",
      link: "https://maps.google.com/?q=Musterstraße+123,+10115+Berlin"
    },
    {
      title: "Support",
      value: "+49 (30) 123 456 790",
      description: "24/7 Notfall-Hotline",
      icon: "🚨",
      link: "tel:+4930123456790"
    }
  ]

  const services = [
    "IT-Sicherheit & Cybersecurity",
    "Cloud-Lösungen (Microsoft 365, Azure)",
    "Netzwerkinfrastruktur",
    "Managed Services & 24/7 Support",
    "Künstliche Intelligenz & Automatisierung",
    "Softwareentwicklung",
    "Dokumentenmanagement (DocuWare)",
    "Backup & Disaster Recovery"
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
                  <li className="text-white">Kontakt</li>
                </ol>
              </nav>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Kontakt
                <span className="block text-berlin-orange">aufnehmen</span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
                Lassen Sie uns gemeinsam Ihre IT-Herausforderungen lösen. 
                Kontaktieren Sie uns für eine kostenlose Beratung oder Support.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-digital-blue mb-6">
                So erreichen Sie uns
              </h2>
              <p className="text-xl text-neutral-dark max-w-3xl mx-auto">
                Wählen Sie den für Sie passenden Kontaktweg
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-digital-blue to-blue-600 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    {info.icon}
                  </div>
                  <h3 className="text-xl font-bold text-digital-blue mb-2">
                    {info.title}
                  </h3>
                  <a
                    href={info.link}
                    className="text-lg font-semibold text-neutral-dark hover:text-berlin-orange transition-colors block mb-2"
                  >
                    {info.value}
                  </a>
                  <p className="text-gray-600 text-sm">
                    {info.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & Map */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold text-digital-blue mb-8">
                  Nachricht senden
                </h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                        Vorname *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-digital-blue focus:border-transparent transition-all duration-200"
                        placeholder="Ihr Vorname"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                        Nachname *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-digital-blue focus:border-transparent transition-all duration-200"
                        placeholder="Ihr Nachname"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      E-Mail-Adresse *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-digital-blue focus:border-transparent transition-all duration-200"
                      placeholder="ihre.email@beispiel.de"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Unternehmen
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-digital-blue focus:border-transparent transition-all duration-200"
                      placeholder="Ihr Unternehmen"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Telefonnummer
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-digital-blue focus:border-transparent transition-all duration-200"
                      placeholder="+49 (30) 123 456 789"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Interessierter Service
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-digital-blue focus:border-transparent transition-all duration-200"
                    >
                      <option value="">Bitte wählen...</option>
                      <option value="infrastruktur">IT-Infrastruktur</option>
                      <option value="cloud">Cloud-Lösungen</option>
                      <option value="security">IT-Security</option>
                      <option value="managed-services">Managed Services</option>
                      <option value="ki">Künstliche Intelligenz</option>
                      <option value="software">Softwareentwicklung</option>
                      <option value="anwendungen">Business-Anwendungen</option>
                      <option value="beratung">Allgemeine Beratung</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Nachricht *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-digital-blue focus:border-transparent transition-all duration-200"
                      placeholder="Beschreiben Sie Ihr Anliegen..."
                    ></textarea>
                  </div>
                  
                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="privacy"
                      name="privacy"
                      required
                      className="mt-1 h-4 w-4 text-digital-blue focus:ring-digital-blue border-gray-300 rounded"
                    />
                    <label htmlFor="privacy" className="ml-3 text-sm text-gray-700">
                      Ich stimme der <Link href="/datenschutz" className="text-digital-blue hover:underline">Datenschutzerklärung</Link> zu und erlaube die Verarbeitung meiner Daten. *
                    </label>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-digital-blue hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105"
                  >
                    Nachricht senden
                  </button>
                </form>
              </div>
              
              {/* Map & Additional Info */}
              <div>
                <h2 className="text-3xl font-bold text-digital-blue mb-8">
                  Unser Standort
                </h2>
                
                {/* Map Placeholder */}
                <div className="bg-gray-200 rounded-2xl h-64 mb-8 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <div className="text-4xl mb-4">🗺️</div>
                    <p>Interaktive Karte</p>
                    <p className="text-sm">Musterstraße 123, 10115 Berlin</p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-digital-blue mb-4">
                      Öffnungszeiten
                    </h3>
                    <div className="space-y-2 text-gray-700">
                      <div className="flex justify-between">
                        <span>Montag - Freitag:</span>
                        <span>8:00 - 18:00 Uhr</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Samstag:</span>
                        <span>Geschlossen</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sonntag:</span>
                        <span>Geschlossen</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-digital-blue mb-4">
                      Unsere Services
                    </h3>
                    <ul className="space-y-2">
                      {services.map((service, index) => (
                        <li key={index} className="flex items-center text-gray-700">
                          <div className="w-2 h-2 bg-berlin-orange rounded-full mr-3 flex-shrink-0" />
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-digital-blue to-blue-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Bereit für Ihr IT-Projekt?
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
              Lassen Sie uns gemeinsam Ihre IT-Herausforderungen lösen. 
              Kontaktieren Sie uns für eine kostenlose Erstberatung.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+4930123456789"
                className="bg-berlin-orange hover:bg-orange-500 text-white font-semibold py-4 px-10 rounded-2xl transition-all duration-300 transform hover:scale-105"
              >
                Jetzt anrufen
              </a>
              <Link
                href="/#services"
                className="bg-white/10 backdrop-blur-md border border-white/30 text-white hover:bg-white hover:text-digital-blue font-semibold py-4 px-10 rounded-2xl transition-all duration-300"
              >
                Unsere Services ansehen
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
