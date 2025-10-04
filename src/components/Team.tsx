'use client'

import { useState, useEffect, useRef } from 'react'

export default function Team() {
  const [visibleMembers, setVisibleMembers] = useState<number[]>([])
  const [hoveredMember, setHoveredMember] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            teamMembers.forEach((_, index) => {
              setTimeout(() => {
                setVisibleMembers(prev => [...prev, index])
              }, index * 200)
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

  const teamMembers = [
    {
      name: "Dr. Marcus Weber",
      role: "Geschäftsführer & IT-Security Experte",
      description: "15+ Jahre Erfahrung in der IT-Sicherheit mit Fokus auf Penetrationstests und Security Architecture. Promovierter Informatiker mit Spezialisierung auf Cybersecurity.",
      expertise: ["Penetrationstests", "Security Architecture", "Compliance", "Team Leadership"],
      image: "/team/marcus-weber.jpg",
      gradient: "from-blue-600 to-digital-blue",
      initials: "MW"
    },
    {
      name: "Sarah Schmidt",
      role: "Senior Network Engineer",
      description: "Spezialistin für komplexe Netzwerkinfrastrukturen und Cloud-Migrationen mit 12 Jahren Berufserfahrung. Zertifizierte Cisco und Juniper Expertin.",
      expertise: ["Netzwerkdesign", "Cloud Migration", "WLAN-Lösungen", "Performance Tuning"],
      image: "/team/sarah-schmidt.jpg",
      gradient: "from-green-500 to-emerald-600",
      initials: "SS"
    },
    {
      name: "Thomas Müller",
      role: "Cybersecurity Analyst",
      description: "Experte für Threat Detection und Incident Response mit umfassender Erfahrung in der Bedrohungsanalyse. Ehemaliger BSI-Mitarbeiter.",
      expertise: ["Threat Detection", "Incident Response", "SIEM", "Forensik"],
      image: "/team/thomas-mueller.jpg",
      gradient: "from-purple-500 to-indigo-600",
      initials: "TM"
    },
    {
      name: "Lisa Chen",
      role: "Cloud Security Consultant",
      description: "Spezialistin für Multi-Cloud-Sicherheit und DevSecOps mit Zertifizierungen in AWS, Azure und GCP. Internationale Erfahrung in Fortune 500 Unternehmen.",
      expertise: ["Multi-Cloud Security", "DevSecOps", "Container Security", "IAM"],
      image: "/team/lisa-chen.jpg",
      gradient: "from-pink-500 to-rose-600",
      initials: "LC"
    }
  ]

  return (
    <section ref={sectionRef} id="team" className="py-24 bg-gradient-to-b from-neutral-light/30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 bg-berlin-orange/10 rounded-full text-berlin-orange font-semibold text-sm mb-4">
            Unser Expertenteam
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-digital-blue mb-6 leading-tight">
            Die Köpfe hinter
            <span className="block text-berlin-orange">SNS Berlin</span>
          </h2>
          <p className="text-xl text-neutral-dark max-w-4xl mx-auto leading-relaxed">
            Lernen Sie die Experten kennen, die Ihr digitales Geschäft schützen. 
            Unser Team vereint jahrzehntelange Erfahrung mit innovativen Ansätzen für Ihre IT-Sicherheit.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500 transform border border-gray-100 ${
                visibleMembers.includes(index) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              } ${hoveredMember === index ? 'scale-105' : ''}`}
              onMouseEnter={() => setHoveredMember(index)}
              onMouseLeave={() => setHoveredMember(null)}
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`} />
              
              {/* Profile Image */}
              <div className="relative text-center mb-8">
                <div className={`w-32 h-32 bg-gradient-to-br ${member.gradient} rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-3xl font-bold text-white">
                    {member.initials}
                  </span>
                </div>
              </div>

              {/* Name & Role */}
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-digital-blue mb-3 group-hover:text-berlin-orange transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-berlin-orange font-semibold text-lg mb-4">
                  {member.role}
                </p>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {member.description}
                </p>
              </div>

              {/* Expertise Tags */}
              <div className="flex flex-wrap gap-3 justify-center">
                {member.expertise.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className={`bg-gradient-to-r ${member.gradient} text-white px-4 py-2 rounded-full text-sm font-medium shadow-md group-hover:scale-105 transition-transform duration-300`}
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Hover Effect Border */}
              <div className={`absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-gradient-to-r group-hover:${member.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
            </div>
          ))}
        </div>

        {/* Company Values */}
        <div className="mt-24">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-digital-blue mb-6">
              Unsere Werte
            </h3>
            <p className="text-xl text-neutral-dark max-w-3xl mx-auto leading-relaxed">
              Diese Prinzipien leiten uns in allem, was wir tun und machen uns zu Ihrem vertrauensvollen Partner
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="group text-center p-8 rounded-3xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-digital-blue to-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <span className="text-3xl">🎯</span>
              </div>
              <h4 className="text-2xl font-bold text-digital-blue mb-4 group-hover:text-berlin-orange transition-colors duration-300">Präzision</h4>
              <p className="text-gray-600 leading-relaxed text-lg">
                Jede Lösung wird sorgfältig geplant und präzise umgesetzt, um optimale Ergebnisse zu gewährleisten.
              </p>
            </div>

            <div className="group text-center p-8 rounded-3xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-berlin-orange to-red-500 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <span className="text-3xl">🤝</span>
              </div>
              <h4 className="text-2xl font-bold text-digital-blue mb-4 group-hover:text-berlin-orange transition-colors duration-300">Vertrauen</h4>
              <p className="text-gray-600 leading-relaxed text-lg">
                Transparente Kommunikation und verlässliche Partnerschaften sind die Basis unserer Zusammenarbeit.
              </p>
            </div>

            <div className="group text-center p-8 rounded-3xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <span className="text-3xl">🚀</span>
              </div>
              <h4 className="text-2xl font-bold text-digital-blue mb-4 group-hover:text-berlin-orange transition-colors duration-300">Innovation</h4>
              <p className="text-gray-600 leading-relaxed text-lg">
                Wir bleiben am Puls der Zeit und setzen modernste Technologien für Ihren Erfolg ein.
              </p>
            </div>
          </div>
        </div>

        {/* Join Team CTA */}
        <div className="mt-20 text-center">
          <div className="relative bg-gradient-to-r from-digital-blue via-blue-700 to-blue-900 rounded-3xl p-12 md:p-16 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-berlin-orange rounded-full translate-x-32 -translate-y-32" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full -translate-x-24 translate-y-24" />
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Werden Sie Teil unseres Expertenteams
              </h3>
              <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
                Wir suchen talentierte IT-Sicherheitsexperten, die mit uns die digitale Zukunft gestalten möchten. 
                Bringen Sie Ihre Expertise in ein dynamisches Team ein.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="#contact"
                  className="bg-berlin-orange hover:bg-orange-500 text-white font-semibold py-4 px-10 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl"
                >
                  Karriere bei SNS Berlin
                </a>
                <a
                  href="mailto:karriere@sns-berlin.de"
                  className="bg-white/10 backdrop-blur-md border border-white/30 text-white hover:bg-white hover:text-digital-blue font-semibold py-4 px-10 rounded-2xl transition-all duration-300"
                >
                  Initiativbewerbung
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
