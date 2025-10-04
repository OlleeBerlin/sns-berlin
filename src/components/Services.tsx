export default function Services() {
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
      icon: "🛡️"
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
      icon: "🌐"
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
      icon: "💡"
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
      icon: "☁️"
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
      icon: "⚙️"
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
      icon: "🎓"
    }
  ]

  return (
    <section id="services" className="py-20 bg-neutral-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-digital-blue mb-6">
            Unsere Leistungen
          </h2>
          <p className="text-lg text-neutral-dark max-w-3xl mx-auto leading-relaxed">
            Von der strategischen Planung bis zur technischen Umsetzung – 
            wir bieten Ihnen maßgeschneiderte IT-Lösungen für alle Bereiche Ihres Unternehmens.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-8"
            >
              {/* Icon */}
              <div className="text-4xl mb-4">{service.icon}</div>
              
              {/* Title */}
              <h3 className="text-2xl font-bold text-digital-blue mb-4">
                {service.title}
              </h3>
              
              {/* Description */}
              <p className="text-neutral-dark mb-6 leading-relaxed">
                {service.description}
              </p>
              
              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-neutral-dark">
                    <span className="w-2 h-2 bg-berlin-orange rounded-full mr-3 flex-shrink-0"></span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="mt-6 pt-6 border-t border-neutral-mid">
                <a
                  href="#contact"
                  className="text-berlin-orange hover:text-orange-600 font-semibold text-sm transition-colors duration-200"
                >
                  Mehr erfahren →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-digital-blue rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Individuelle Lösungen für Ihr Unternehmen
            </h3>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Jedes Unternehmen ist einzigartig. Lassen Sie uns gemeinsam die perfekte IT-Lösung für Ihre spezifischen Anforderungen entwickeln.
            </p>
            <a
              href="#contact"
              className="bg-berlin-orange hover:bg-orange-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg inline-block"
            >
              Kostenlose Beratung anfragen
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
