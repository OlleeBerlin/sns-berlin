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
      title: "Infrastruktur",
      description: "Moderne IT-Infrastrukturen für optimale Geschäftsprozesse - von Telefonanlagen bis Hardware-Lösungen.",
      features: [
        "3CX Telefonanlage",
        "Multifunktionsgeräte",
        "Gebrauchte IT-Hardware",
        "Netzwerk-Setup"
      ],
      icon: "🏗️",
      gradient: "from-blue-500 to-digital-blue",
      color: "text-blue-600"
    },
    {
      title: "Cloud-Lösungen",
      description: "Professionelle Cloud-Services für maximale Flexibilität und Skalierbarkeit Ihres Unternehmens.",
      features: [
        "Microsoft 365",
        "Microsoft Azure",
        "Cloud Migration",
        "Hybrid-Cloud-Strategien"
      ],
      icon: "☁️",
      gradient: "from-cyan-500 to-blue-600",
      color: "text-cyan-600"
    },
    {
      title: "Security",
      description: "Umfassender Schutz vor Cyberbedrohungen durch modernste Sicherheitstechnologien und SOC-Services.",
      features: [
        "Security Operations Center",
        "WithSecure Lösungen",
        "Fortinet Firewalls",
        "Password Manager"
      ],
      icon: "🛡️",
      gradient: "from-red-500 to-rose-600",
      color: "text-red-600"
    },
    {
      title: "Managed Services",
      description: "Kontinuierliche Überwachung und Wartung Ihrer IT-Systeme durch unser zertifiziertes Expertenteam.",
      features: [
        "24/7 Monitoring",
        "Proaktive Wartung",
        "Backup & Recovery",
        "Help Desk Support"
      ],
      icon: "⚙️",
      gradient: "from-orange-500 to-berlin-orange",
      color: "text-orange-600"
    },
    {
      title: "Künstliche Intelligenz",
      description: "Innovative KI-Lösungen zur Automatisierung und Optimierung Ihrer Geschäftsprozesse.",
      features: [
        "KI-Beratung",
        "Prozessautomatisierung",
        "Machine Learning",
        "AI-Integration"
      ],
      icon: "🤖",
      gradient: "from-purple-500 to-indigo-600",
      color: "text-purple-600"
    },
    {
      title: "Softwareentwicklung",
      description: "Maßgeschneiderte Softwarelösungen und Anwendungen für Ihre spezifischen Geschäftsanforderungen.",
      features: [
        "Individual-Software",
        "Web-Anwendungen",
        "API-Entwicklung",
        "System-Integration"
      ],
      icon: "💻",
      gradient: "from-green-500 to-emerald-600",
      color: "text-green-600"
    },
    {
      title: "Anwendungen",
      description: "Spezialisierte Business-Anwendungen zur Digitalisierung und Optimierung Ihrer Arbeitsabläufe.",
      features: [
        "DocuWare DMS",
        "Workflow-Automation",
        "Dokumentenmanagement",
        "Lettershop-Services"
      ],
      icon: "📋",
      gradient: "from-teal-500 to-cyan-600",
      color: "text-teal-600"
    },
    {
      title: "Backup & Recovery",
      description: "Zuverlässige Datensicherung und Wiederherstellung für maximalen Schutz Ihrer kritischen Daten.",
      features: [
        "Automatische Backups",
        "Disaster Recovery",
        "Backup-Restore-Service",
        "Cloud-Backup-Lösungen"
      ],
      icon: "💾",
      gradient: "from-slate-500 to-gray-600",
      color: "text-slate-600"
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
            Von Infrastruktur und Cloud-Services bis hin zu KI und Security – 
            wir digitalisieren Ihr Unternehmen mit modernsten Technologien und bewährter Expertise.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
