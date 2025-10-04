'use client'

import { useState } from 'react'

export default function Contact() {
  const [activeForm, setActiveForm] = useState<'client' | 'career'>('client')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setTimeout(() => setSubmitStatus('idle'), 3000)
    }, 1000)
  }

  return (
    <section id="contact" className="py-20 bg-neutral-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-digital-blue mb-6">
            Kontakt
          </h2>
          <p className="text-lg text-neutral-dark max-w-3xl mx-auto leading-relaxed">
            Haben Sie Fragen zu unseren Leistungen oder möchten Sie Teil unseres Teams werden? 
            Wir freuen uns auf Ihre Nachricht.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-digital-blue mb-6">
                Sprechen Sie uns an
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-digital-blue rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">📍</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-digital-blue mb-1">Adresse</h4>
                    <p className="text-neutral-dark">
                      Musterstraße 123<br />
                      10115 Berlin<br />
                      Deutschland
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-berlin-orange rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">📞</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-digital-blue mb-1">Telefon</h4>
                    <p className="text-neutral-dark">
                      <a href="tel:+4930123456789" className="hover:text-digital-blue transition-colors">
                        +49 (30) 123 456 789
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-digital-blue rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">✉️</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-digital-blue mb-1">E-Mail</h4>
                    <p className="text-neutral-dark">
                      <a href="mailto:info@sns-berlin.de" className="hover:text-digital-blue transition-colors">
                        info@sns-berlin.de
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-berlin-orange rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">🕒</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-digital-blue mb-1">Öffnungszeiten</h4>
                    <p className="text-neutral-dark">
                      Mo - Fr: 9:00 - 18:00 Uhr<br />
                      24/7 Notfall-Support
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-white rounded-xl p-6">
              <h4 className="font-bold text-digital-blue mb-4">Schnelle Hilfe</h4>
              <div className="space-y-3">
                <a href="tel:+4930123456789" className="flex items-center text-neutral-dark hover:text-digital-blue transition-colors">
                  <span className="w-2 h-2 bg-berlin-orange rounded-full mr-3"></span>
                  Notfall-Hotline: +49 (30) 123 456 789
                </a>
                <a href="mailto:support@sns-berlin.de" className="flex items-center text-neutral-dark hover:text-digital-blue transition-colors">
                  <span className="w-2 h-2 bg-berlin-orange rounded-full mr-3"></span>
                  Support: support@sns-berlin.de
                </a>
                <a href="mailto:karriere@sns-berlin.de" className="flex items-center text-neutral-dark hover:text-digital-blue transition-colors">
                  <span className="w-2 h-2 bg-berlin-orange rounded-full mr-3"></span>
                  Karriere: karriere@sns-berlin.de
                </a>
              </div>
            </div>
          </div>

          {/* Contact Forms */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            {/* Form Toggle */}
            <div className="flex mb-8 bg-neutral-light rounded-lg p-1">
              <button
                onClick={() => setActiveForm('client')}
                className={`flex-1 py-3 px-4 rounded-md font-semibold transition-all duration-200 ${
                  activeForm === 'client'
                    ? 'bg-digital-blue text-white shadow-md'
                    : 'text-neutral-dark hover:text-digital-blue'
                }`}
              >
                Interessent
              </button>
              <button
                onClick={() => setActiveForm('career')}
                className={`flex-1 py-3 px-4 rounded-md font-semibold transition-all duration-200 ${
                  activeForm === 'career'
                    ? 'bg-berlin-orange text-white shadow-md'
                    : 'text-neutral-dark hover:text-berlin-orange'
                }`}
              >
                Bewerber
              </button>
            </div>

            {/* Client Form */}
            {activeForm === 'client' && (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-digital-blue mb-2">
                    Interesse an unseren Leistungen?
                  </h3>
                  <p className="text-neutral-dark mb-6">
                    Lassen Sie uns über Ihre IT-Sicherheitsanforderungen sprechen.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-neutral-dark mb-2">
                      Vorname *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-neutral-mid rounded-lg focus:ring-2 focus:ring-digital-blue focus:border-transparent transition-all"
                      placeholder="Ihr Vorname"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-neutral-dark mb-2">
                      Nachname *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-neutral-mid rounded-lg focus:ring-2 focus:ring-digital-blue focus:border-transparent transition-all"
                      placeholder="Ihr Nachname"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-neutral-dark mb-2">
                    E-Mail-Adresse *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 border border-neutral-mid rounded-lg focus:ring-2 focus:ring-digital-blue focus:border-transparent transition-all"
                    placeholder="ihre.email@unternehmen.de"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-neutral-dark mb-2">
                    Unternehmen
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-neutral-mid rounded-lg focus:ring-2 focus:ring-digital-blue focus:border-transparent transition-all"
                    placeholder="Ihr Unternehmen"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-neutral-dark mb-2">
                    Interessensbereich
                  </label>
                  <select className="w-full px-4 py-3 border border-neutral-mid rounded-lg focus:ring-2 focus:ring-digital-blue focus:border-transparent transition-all">
                    <option value="">Bitte wählen...</option>
                    <option value="it-security">IT-Sicherheit</option>
                    <option value="network">Netzwerklösungen</option>
                    <option value="consulting">IT-Beratung</option>
                    <option value="cloud">Cloud Security</option>
                    <option value="managed">Managed Services</option>
                    <option value="training">Schulungen</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-neutral-dark mb-2">
                    Nachricht *
                  </label>
                  <textarea
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-neutral-mid rounded-lg focus:ring-2 focus:ring-digital-blue focus:border-transparent transition-all resize-none"
                    placeholder="Beschreiben Sie Ihre Anforderungen oder Fragen..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-digital-blue hover:bg-blue-700 disabled:bg-neutral-mid text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:transform-none disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Wird gesendet...' : 'Anfrage senden'}
                </button>
              </form>
            )}

            {/* Career Form */}
            {activeForm === 'career' && (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-berlin-orange mb-2">
                    Karriere bei SNS Berlin
                  </h3>
                  <p className="text-neutral-dark mb-6">
                    Werden Sie Teil unseres Expertenteams und gestalten Sie die Zukunft der IT-Sicherheit mit.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-neutral-dark mb-2">
                      Vorname *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-neutral-mid rounded-lg focus:ring-2 focus:ring-berlin-orange focus:border-transparent transition-all"
                      placeholder="Ihr Vorname"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-neutral-dark mb-2">
                      Nachname *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-neutral-mid rounded-lg focus:ring-2 focus:ring-berlin-orange focus:border-transparent transition-all"
                      placeholder="Ihr Nachname"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-neutral-dark mb-2">
                    E-Mail-Adresse *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 border border-neutral-mid rounded-lg focus:ring-2 focus:ring-berlin-orange focus:border-transparent transition-all"
                    placeholder="ihre.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-neutral-dark mb-2">
                    Position von Interesse
                  </label>
                  <select className="w-full px-4 py-3 border border-neutral-mid rounded-lg focus:ring-2 focus:ring-berlin-orange focus:border-transparent transition-all">
                    <option value="">Bitte wählen...</option>
                    <option value="security-engineer">Security Engineer</option>
                    <option value="network-engineer">Network Engineer</option>
                    <option value="security-analyst">Security Analyst</option>
                    <option value="consultant">IT-Consultant</option>
                    <option value="penetration-tester">Penetration Tester</option>
                    <option value="other">Sonstige</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-neutral-dark mb-2">
                    Erfahrung (Jahre)
                  </label>
                  <select className="w-full px-4 py-3 border border-neutral-mid rounded-lg focus:ring-2 focus:ring-berlin-orange focus:border-transparent transition-all">
                    <option value="">Bitte wählen...</option>
                    <option value="0-2">0-2 Jahre</option>
                    <option value="3-5">3-5 Jahre</option>
                    <option value="6-10">6-10 Jahre</option>
                    <option value="10+">10+ Jahre</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-neutral-dark mb-2">
                    Anschreiben *
                  </label>
                  <textarea
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-neutral-mid rounded-lg focus:ring-2 focus:ring-berlin-orange focus:border-transparent transition-all resize-none"
                    placeholder="Erzählen Sie uns von sich und Ihrer Motivation..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-neutral-dark mb-2">
                    Lebenslauf (PDF)
                  </label>
                  <input
                    type="file"
                    accept=".pdf"
                    className="w-full px-4 py-3 border border-neutral-mid rounded-lg focus:ring-2 focus:ring-berlin-orange focus:border-transparent transition-all"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-berlin-orange hover:bg-orange-600 disabled:bg-neutral-mid text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:transform-none disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Wird gesendet...' : 'Bewerbung senden'}
                </button>
              </form>
            )}

            {/* Success Message */}
            {submitStatus === 'success' && (
              <div className="mt-4 p-4 bg-green-100 border border-green-300 rounded-lg">
                <p className="text-green-800 font-semibold">
                  ✅ Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
