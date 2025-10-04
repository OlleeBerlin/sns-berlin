export default function Team() {
  const teamMembers = [
    {
      name: "Max Mustermann",
      role: "Geschäftsführer & IT-Security Experte",
      description: "15+ Jahre Erfahrung in der IT-Sicherheit mit Fokus auf Penetrationstests und Security Architecture.",
      expertise: ["Penetrationstests", "Security Architecture", "Compliance", "Team Leadership"],
      image: "/team/max-mustermann.jpg" // Placeholder
    },
    {
      name: "Sarah Schmidt",
      role: "Senior Network Engineer",
      description: "Spezialistin für komplexe Netzwerkinfrastrukturen und Cloud-Migrationen mit 12 Jahren Berufserfahrung.",
      expertise: ["Netzwerkdesign", "Cloud Migration", "WLAN-Lösungen", "Performance Tuning"],
      image: "/team/sarah-schmidt.jpg" // Placeholder
    },
    {
      name: "Thomas Weber",
      role: "Cybersecurity Analyst",
      description: "Experte für Threat Detection und Incident Response mit umfassender Erfahrung in der Bedrohungsanalyse.",
      expertise: ["Threat Detection", "Incident Response", "SIEM", "Forensik"],
      image: "/team/thomas-weber.jpg" // Placeholder
    },
    {
      name: "Lisa Chen",
      role: "Cloud Security Consultant",
      description: "Spezialistin für Multi-Cloud-Sicherheit und DevSecOps mit Zertifizierungen in AWS, Azure und GCP.",
      expertise: ["Multi-Cloud Security", "DevSecOps", "Container Security", "IAM"],
      image: "/team/lisa-chen.jpg" // Placeholder
    }
  ]

  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-digital-blue mb-6">
            Unser Team
          </h2>
          <p className="text-lg text-neutral-dark max-w-3xl mx-auto leading-relaxed">
            Lernen Sie die Experten kennen, die hinter SNS Berlin stehen. 
            Unser Team vereint jahrelange Erfahrung mit innovativen Ansätzen für Ihre IT-Sicherheit.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-neutral-light rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Profile Image Placeholder */}
              <div className="w-24 h-24 bg-gradient-to-br from-digital-blue to-berlin-orange rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>

              {/* Name & Role */}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-digital-blue mb-2">
                  {member.name}
                </h3>
                <p className="text-berlin-orange font-semibold mb-4">
                  {member.role}
                </p>
                <p className="text-neutral-dark leading-relaxed">
                  {member.description}
                </p>
              </div>

              {/* Expertise Tags */}
              <div className="flex flex-wrap gap-2 justify-center">
                {member.expertise.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-white text-digital-blue px-3 py-1 rounded-full text-sm font-medium border border-digital-blue"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Company Values */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-digital-blue mb-4">
              Unsere Werte
            </h3>
            <p className="text-neutral-dark max-w-2xl mx-auto">
              Diese Prinzipien leiten uns in allem, was wir tun
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-digital-blue rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🎯</span>
              </div>
              <h4 className="text-xl font-bold text-digital-blue mb-2">Präzision</h4>
              <p className="text-neutral-dark">
                Jede Lösung wird sorgfältig geplant und präzise umgesetzt, um optimale Ergebnisse zu gewährleisten.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-berlin-orange rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🤝</span>
              </div>
              <h4 className="text-xl font-bold text-digital-blue mb-2">Vertrauen</h4>
              <p className="text-neutral-dark">
                Transparente Kommunikation und verlässliche Partnerschaften sind die Basis unserer Zusammenarbeit.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-digital-blue rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🚀</span>
              </div>
              <h4 className="text-xl font-bold text-digital-blue mb-2">Innovation</h4>
              <p className="text-neutral-dark">
                Wir bleiben am Puls der Zeit und setzen modernste Technologien für Ihren Erfolg ein.
              </p>
            </div>
          </div>
        </div>

        {/* Join Team CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-digital-blue to-blue-800 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Werden Sie Teil unseres Teams
            </h3>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Wir suchen talentierte IT-Sicherheitsexperten, die mit uns die digitale Zukunft gestalten möchten.
            </p>
            <a
              href="#contact"
              className="bg-berlin-orange hover:bg-orange-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg inline-block"
            >
              Karriere bei SNS Berlin
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
