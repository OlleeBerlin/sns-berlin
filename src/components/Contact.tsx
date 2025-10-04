'use client'

import { useState, useEffect, useRef } from 'react'

export default function Contact() {
  const [activeForm, setActiveForm] = useState<'client' | 'career'>('client')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [isVisible, setIsVisible] = useState(false)
  const [focusedField, setFocusedField] = useState<string | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setTimeout(() => setSubmitStatus('idle'), 5000)
    }, 1500)
  }

  return (
    <section ref={sectionRef} id="contact" className="py-24 bg-gradient-to-b from-white to-neutral-light/50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-digital-blue/5 rounded-full translate-x-48 -translate-y-48" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-berlin-orange/5 rounded-full -translate-x-32 translate-y-32" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-block px-4 py-2 bg-digital-blue/10 rounded-full text-digital-blue font-semibold text-sm mb-4">
            Kontakt & Karriere
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-digital-blue mb-6 leading-tight">
            Lassen Sie uns
            <span className="block text-berlin-orange">sprechen</span>
          </h2>
          <p className="text-xl text-neutral-dark max-w-4xl mx-auto leading-relaxed">
            Haben Sie Fragen zu unseren Leistungen oder möchten Sie Teil unseres Teams werden? 
            Wir freuen uns auf den Dialog mit Ihnen.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className={`space-y-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div>
              <h3 className="text-3xl font-bold text-digital-blue mb-8">
                Sprechen Sie uns an
              </h3>
              
              <div className="space-y-8">
                <div className="group flex items-start space-x-6 p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="w-16 h-16 bg-gradient-to-br from-digital-blue to-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-digital-blue mb-2 text-lg">Unser Standort</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Unter den Linden 42<br />
                      10117 Berlin Mitte<br />
                      Deutschland
                    </p>
                  </div>
                </div>

                <div className="group flex items-start space-x-6 p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="w-16 h-16 bg-gradient-to-br from-berlin-orange to-red-500 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-digital-blue mb-2 text-lg">Telefon & Notfall</h4>
                    <p className="text-gray-600">
                      <a href="tel:+4930123456789" className="hover:text-berlin-orange transition-colors font-medium">
                        +49 (30) 123 456 789
                      </a><br />
                      <span className="text-sm text-gray-500">24/7 Notfall-Hotline</span>
                    </p>
                  </div>
                </div>

                <div className="group flex items-start space-x-6 p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-digital-blue mb-2 text-lg">E-Mail Kontakt</h4>
                    <p className="text-gray-600">
                      <a href="mailto:info@sns-berlin.de" className="hover:text-berlin-orange transition-colors font-medium">
                        info@sns-berlin.de
                      </a><br />
                      <span className="text-sm text-gray-500">Antwort innerhalb 24h</span>
                    </p>
                  </div>
                </div>

                <div className="group flex items-start space-x-6 p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-digital-blue mb-2 text-lg">Öffnungszeiten</h4>
                    <p className="text-gray-600">
                      Mo - Fr: 9:00 - 18:00 Uhr<br />
                      <span className="text-berlin-orange font-medium">24/7 Emergency Support</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-gradient-to-r from-digital-blue to-blue-700 rounded-3xl p-8">
              <h4 className="font-bold text-white mb-6 text-xl">Sofortige Hilfe benötigt?</h4>
              <div className="space-y-4">
                <a 
                  href="tel:+4930123456789" 
                  className="flex items-center text-blue-100 hover:text-white transition-colors group"
                >
                  <div className="w-3 h-3 bg-berlin-orange rounded-full mr-4 group-hover:scale-125 transition-transform duration-300"></div>
                  <span className="font-medium">Notfall-Hotline: +49 (30) 123 456 789</span>
                </a>
                <a 
                  href="mailto:support@sns-berlin.de" 
                  className="flex items-center text-blue-100 hover:text-white transition-colors group"
                >
                  <div className="w-3 h-3 bg-berlin-orange rounded-full mr-4 group-hover:scale-125 transition-transform duration-300"></div>
                  <span className="font-medium">Support: support@sns-berlin.de</span>
                </a>
                <a 
                  href="mailto:karriere@sns-berlin.de" 
                  className="flex items-center text-blue-100 hover:text-white transition-colors group"
                >
                  <div className="w-3 h-3 bg-berlin-orange rounded-full mr-4 group-hover:scale-125 transition-transform duration-300"></div>
                  <span className="font-medium">Karriere: karriere@sns-berlin.de</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Forms */}
          <div className={`bg-white rounded-3xl shadow-xl p-10 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            {/* Form Toggle */}
            <div className="flex mb-10 bg-gray-100 rounded-2xl p-2">
              <button
                onClick={() => setActiveForm('client')}
                className={`flex-1 py-4 px-6 rounded-xl font-semibold transition-all duration-300 transform ${
                  activeForm === 'client'
                    ? 'bg-digital-blue text-white shadow-lg scale-105'
                    : 'text-gray-600 hover:text-digital-blue hover:bg-white hover:shadow-md'
                }`}
              >
                <span className="flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0H8m8 0v2a2 2 0 01-2 2H10a2 2 0 01-2-2V6" />
                  </svg>
                  Interessent
                </span>
              </button>
              <button
                onClick={() => setActiveForm('career')}
                className={`flex-1 py-4 px-6 rounded-xl font-semibold transition-all duration-300 transform ${
                  activeForm === 'career'
                    ? 'bg-berlin-orange text-white shadow-lg scale-105'
                    : 'text-gray-600 hover:text-berlin-orange hover:bg-white hover:shadow-md'
                }`}
              >
                <span className="flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0H8m8 0v2a2 2 0 01-2 2H10a2 2 0 01-2-2V6" />
                  </svg>
                  Bewerber
                </span>
              </button>
            </div>

            {/* Client Form */}
            {activeForm === 'client' && (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <h3 className="text-3xl font-bold text-digital-blue mb-3">
                    Interesse an unseren Leistungen?
                  </h3>
                  <p className="text-gray-600 mb-8 text-lg">
                    Lassen Sie uns über Ihre IT-Sicherheitsanforderungen sprechen. Wir melden uns innerhalb von 24 Stunden bei Ihnen.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Vorname *
                    </label>
                    <input
                      type="text"
                      required
                      onFocus={() => setFocusedField('firstname')}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full px-5 py-4 border-2 rounded-xl transition-all duration-300 bg-gray-50 focus:bg-white focus:outline-none ${
                        focusedField === 'firstname' 
                          ? 'border-digital-blue shadow-lg transform scale-105' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      placeholder="Ihr Vorname"
                    />
                  </div>
                  <div className="relative">
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Nachname *
                    </label>
                    <input
                      type="text"
                      required
                      onFocus={() => setFocusedField('lastname')}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full px-5 py-4 border-2 rounded-xl transition-all duration-300 bg-gray-50 focus:bg-white focus:outline-none ${
                        focusedField === 'lastname' 
                          ? 'border-digital-blue shadow-lg transform scale-105' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      placeholder="Ihr Nachname"
                    />
                  </div>
                </div>

                <div className="relative">
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    E-Mail-Adresse *
                  </label>
                  <input
                    type="email"
                    required
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full px-5 py-4 border-2 rounded-xl transition-all duration-300 bg-gray-50 focus:bg-white focus:outline-none ${
                      focusedField === 'email' 
                        ? 'border-digital-blue shadow-lg transform scale-105' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    placeholder="ihre.email@unternehmen.de"
                  />
                </div>

                <div className="relative">
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Unternehmen
                  </label>
                  <input
                    type="text"
                    onFocus={() => setFocusedField('company')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full px-5 py-4 border-2 rounded-xl transition-all duration-300 bg-gray-50 focus:bg-white focus:outline-none ${
                      focusedField === 'company' 
                        ? 'border-digital-blue shadow-lg transform scale-105' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    placeholder="Ihr Unternehmen"
                  />
                </div>

                <div className="relative">
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Interessensbereich
                  </label>
                  <select 
                    onFocus={() => setFocusedField('interest')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full px-5 py-4 border-2 rounded-xl transition-all duration-300 bg-gray-50 focus:bg-white focus:outline-none ${
                      focusedField === 'interest' 
                        ? 'border-digital-blue shadow-lg transform scale-105' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <option value="">Bitte wählen...</option>
                    <option value="it-security">🛡️ IT-Sicherheit</option>
                    <option value="network">🌐 Netzwerklösungen</option>
                    <option value="consulting">💡 IT-Beratung</option>
                    <option value="cloud">☁️ Cloud Security</option>
                    <option value="managed">⚙️ Managed Services</option>
                    <option value="training">🎓 Schulungen</option>
                  </select>
                </div>

                <div className="relative">
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Nachricht *
                  </label>
                  <textarea
                    required
                    rows={5}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full px-5 py-4 border-2 rounded-xl transition-all duration-300 bg-gray-50 focus:bg-white focus:outline-none resize-none ${
                      focusedField === 'message' 
                        ? 'border-digital-blue shadow-lg transform scale-105' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    placeholder="Beschreiben Sie Ihre Anforderungen oder Fragen..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-digital-blue to-blue-700 hover:from-blue-700 hover:to-blue-800 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold py-5 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 disabled:transform-none disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Wird gesendet...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                      Anfrage senden
                    </span>
                  )}
                </button>
              </form>
            )}

            {/* Career Form */}
            {activeForm === 'career' && (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <h3 className="text-3xl font-bold text-berlin-orange mb-3">
                    Karriere bei SNS Berlin
                  </h3>
                  <p className="text-gray-600 mb-8 text-lg">
                    Werden Sie Teil unseres Expertenteams und gestalten Sie die Zukunft der IT-Sicherheit mit. Wir freuen uns auf Ihre Bewerbung!
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Vorname *
                    </label>
                    <input
                      type="text"
                      required
                      onFocus={() => setFocusedField('career-firstname')}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full px-5 py-4 border-2 rounded-xl transition-all duration-300 bg-gray-50 focus:bg-white focus:outline-none ${
                        focusedField === 'career-firstname' 
                          ? 'border-berlin-orange shadow-lg transform scale-105' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      placeholder="Ihr Vorname"
                    />
                  </div>
                  <div className="relative">
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Nachname *
                    </label>
                    <input
                      type="text"
                      required
                      onFocus={() => setFocusedField('career-lastname')}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full px-5 py-4 border-2 rounded-xl transition-all duration-300 bg-gray-50 focus:bg-white focus:outline-none ${
                        focusedField === 'career-lastname' 
                          ? 'border-berlin-orange shadow-lg transform scale-105' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      placeholder="Ihr Nachname"
                    />
                  </div>
                </div>

                <div className="relative">
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    E-Mail-Adresse *
                  </label>
                  <input
                    type="email"
                    required
                    onFocus={() => setFocusedField('career-email')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full px-5 py-4 border-2 rounded-xl transition-all duration-300 bg-gray-50 focus:bg-white focus:outline-none ${
                      focusedField === 'career-email' 
                        ? 'border-berlin-orange shadow-lg transform scale-105' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    placeholder="ihre.email@example.com"
                  />
                </div>

                <div className="relative">
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Position von Interesse
                  </label>
                  <select 
                    onFocus={() => setFocusedField('position')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full px-5 py-4 border-2 rounded-xl transition-all duration-300 bg-gray-50 focus:bg-white focus:outline-none ${
                      focusedField === 'position' 
                        ? 'border-berlin-orange shadow-lg transform scale-105' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <option value="">Bitte wählen...</option>
                    <option value="security-engineer">🛡️ Security Engineer</option>
                    <option value="network-engineer">🌐 Network Engineer</option>
                    <option value="security-analyst">🔍 Security Analyst</option>
                    <option value="consultant">💡 IT-Consultant</option>
                    <option value="penetration-tester">🎯 Penetration Tester</option>
                    <option value="other">🚀 Sonstige Position</option>
                  </select>
                </div>

                <div className="relative">
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Berufserfahrung
                  </label>
                  <select 
                    onFocus={() => setFocusedField('experience')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full px-5 py-4 border-2 rounded-xl transition-all duration-300 bg-gray-50 focus:bg-white focus:outline-none ${
                      focusedField === 'experience' 
                        ? 'border-berlin-orange shadow-lg transform scale-105' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <option value="">Bitte wählen...</option>
                    <option value="0-2">🌱 0-2 Jahre (Berufseinsteiger)</option>
                    <option value="3-5">📈 3-5 Jahre (Junior Level)</option>
                    <option value="6-10">🎖️ 6-10 Jahre (Senior Level)</option>
                    <option value="10+">👑 10+ Jahre (Expert Level)</option>
                  </select>
                </div>

                <div className="relative">
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Anschreiben *
                  </label>
                  <textarea
                    required
                    rows={5}
                    onFocus={() => setFocusedField('cover-letter')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full px-5 py-4 border-2 rounded-xl transition-all duration-300 bg-gray-50 focus:bg-white focus:outline-none resize-none ${
                      focusedField === 'cover-letter' 
                        ? 'border-berlin-orange shadow-lg transform scale-105' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    placeholder="Erzählen Sie uns von sich, Ihrer Motivation und warum Sie zu SNS Berlin passen..."
                  />
                </div>

                <div className="relative">
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Lebenslauf (PDF)
                  </label>
                  <div className={`relative border-2 border-dashed rounded-xl transition-all duration-300 ${
                    focusedField === 'cv' 
                      ? 'border-berlin-orange bg-orange-50' 
                      : 'border-gray-300 hover:border-gray-400'
                  }`}>
                    <input
                      type="file"
                      accept=".pdf"
                      onFocus={() => setFocusedField('cv')}
                      onBlur={() => setFocusedField(null)}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                    <div className="p-8 text-center">
                      <svg className="w-12 h-12 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                      <p className="text-gray-600 font-medium">Lebenslauf hochladen</p>
                      <p className="text-gray-500 text-sm mt-1">PDF-Datei, max. 5MB</p>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-berlin-orange to-red-500 hover:from-red-500 hover:to-red-600 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold py-5 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 disabled:transform-none disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Wird gesendet...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Bewerbung senden
                    </span>
                  )}
                </button>
              </form>
            )}

            {/* Success Message */}
            {submitStatus === 'success' && (
              <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl shadow-lg">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-green-800 font-bold text-lg">
                      Vielen Dank für Ihre Nachricht!
                    </p>
                    <p className="text-green-700">
                      Wir melden uns innerhalb von 24 Stunden bei Ihnen zurück.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
