'use client'

import { useState, useEffect, useRef } from 'react'

export default function Services() {
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Staggered animation for cards
            services.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards(prev => [...prev, index])
              }, index * 150)
            })
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

  const services = [
    {
      title: "IT-Sicherheit",
      description: "Umfassender Schutz vor Cyberbedrohungen durch moderne Sicherheitslösungen und proaktive Überwachung.",
      features: [
        "Penetrationstests",
        "Vulnerability Assessments", 
        "Security Monitoring",
        "Incident Response"
      ],
      icon: "🛡️",
      gradient: "from-blue-500 to-digital-blue",
      color: "text-blue-600"
    },
    {
      title: "Netzwerklösungen",
      description: "Planung, Implementierung und Optimierung von Netzwerkinfrastrukturen für maximale Performance.",
      features: [
        "Netzwerkdesign",
        "WLAN-Lösungen",
        "VPN-Konfiguration",
        "Performance-Optimierung"
      ],
      icon: "🌐",
      gradient: "from-green-500 to-emerald-600",
      color: "text-green-600"
    },
    {
      title: "IT-Beratung",
      description: "Strategische Beratung für Ihre IT-Landschaft mit Fokus auf Sicherheit und Effizienz.",
      features: [
        "IT-Strategie",
        "Compliance-Beratung",
        "Risikobewertung",
        "Digitale Transformation"
      ],
      icon: "💡",
      gradient: "from-purple-500 to-indigo-600",
      color: "text-purple-600"
    },
    {
      title: "Cloud Security",
      description: "Sichere Migration und Verwaltung Ihrer Cloud-Infrastruktur mit bewährten Sicherheitsstandards.",
      features: [
        "Cloud Migration",
        "Multi-Cloud Management",
        "Identity & Access Management",
        "Cloud Compliance"
      ],
      icon: "☁️",
      gradient: "from-cyan-500 to-blue-600",
      color: "text-cyan-600"
    },
    {
      title: "Managed Services",
      description: "Kontinuierliche Überwachung und Wartung Ihrer IT-Systeme durch unser Expertenteam.",
      features: [
        "24/7 Monitoring",
        "Proaktive Wartung",
        "Backup & Recovery",
        "Help Desk Support"
      ],
      icon: "⚙️",
      gradient: "from-orange-500 to-red-600",
      color: "text-orange-600"
    },
    {
      title: "Schulungen",
      description: "Praxisnahe Schulungen für Ihre Mitarbeiter zu IT-Sicherheit und aktuellen Bedrohungen.",
      features: [
        "Security Awareness",
        "Phishing-Simulationen",
        "Best Practices",
        "Individuelle Workshops"
      ],
      icon: "🎓",
      gradient: "from-pink-500 to-rose-600",
      color: "text-pink-600"
    }
  ]

  return (
    <section ref={sectionRef} id="services" className="py-24 bg-gradient-to-b from-white to-neutral-light/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 bg-digital-blue/10 rounded-full text-digital-blue font-semibold text-sm mb-4">
            Unsere Expertise
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-digital-blue mb-6 leading-tight">
            Maßgeschneiderte
            <span className="block text-berlin-orange">IT-Lösungen</span>
          </h2>
          <p className="text-xl text-neutral-dark max-w-4xl mx-auto leading-relaxed">
            Von der strategischen Planung bis zur technischen Umsetzung – 
            wir bieten Ihnen innovative Lösungen für alle Bereiche Ihres digitalen Geschäfts.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform p-8 border border-gray-100 overflow-hidden ${
                visibleCards.includes(index) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              } ${hoveredCard === index ? 'scale-105' : ''}`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              {/* Icon with Background */}
              <div className="relative mb-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
              </div>
              
              {/* Title */}
              <h3 className={`text-2xl font-bold mb-4 group-hover:${service.color} transition-colors duration-300`}>
                {service.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              {/* Features */}
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                    <div className={`w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full mr-3 flex-shrink-0`} />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="relative">
                <a
                  href="#contact"
                  className={`inline-flex items-center ${service.color} hover:text-berlin-orange font-semibold text-sm transition-all duration-300 group-hover:translate-x-2`}
                >
                  Mehr erfahren 
                  <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="relative bg-gradient-to-r from-digital-blue to-blue-800 rounded-3xl p-12 md:p-16 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full -translate-x-20 -translate-y-20" />
              <div className="absolute bottom-0 right-0 w-60 h-60 bg-berlin-orange rounded-full translate-x-30 translate-y-30" />
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Bereit für die digitale Zukunft?
              </h3>
              <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
                Lassen Sie uns gemeinsam Ihre IT-Infrastruktur auf das nächste Level bringen. 
                Unsere Experten entwickeln maßgeschneiderte Lösungen für Ihre individuellen Anforderungen.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="#contact"
                  className="bg-berlin-orange hover:bg-orange-500 text-white font-semibold py-4 px-10 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl"
                >
                  Kostenlose Beratung anfragen
                </a>
                <a
                  href="tel:+4930123456789"
                  className="bg-white/10 backdrop-blur-md border border-white/30 text-white hover:bg-white hover:text-digital-blue font-semibold py-4 px-10 rounded-2xl transition-all duration-300"
                >
                  Sofort anrufen
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
