import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Team - Unser Expertenteam - SNS Berlin',
  description: 'Lernen Sie das Expertenteam von SNS Berlin kennen. Erfahrene IT-Spezialisten für Sicherheit, Cloud, Netzwerk und Softwareentwicklung.',
  keywords: ['Team', 'Experten', 'IT-Spezialisten', 'Sicherheit', 'Cloud', 'Berlin'],
}

export default function TeamPage() {
  const teamMembers = [
    {
      name: "Max Mustermann",
      position: "Geschäftsführer & IT-Security Experte",
      department: "Management",
      experience: "15+ Jahre",
      specialties: ["IT-Security", "Strategie", "Management"],
      description: "Experte für IT-Sicherheit mit langjähriger Erfahrung in der Leitung von IT-Projekten.",
      image: "👨‍💼",
      certifications: ["CISSP", "CISM", "ISO 27001"]
    },
    {
      name: "Anna Schmidt",
      position: "Cloud-Architektin",
      department: "Cloud Services",
      experience: "12+ Jahre",
      specialties: ["Microsoft Azure", "AWS", "Cloud Migration"],
      description: "Spezialistin für Cloud-Lösungen und moderne IT-Architekturen.",
      image: "👩‍💻",
      certifications: ["Azure Solutions Architect", "AWS Certified"]
    },
    {
      name: "Thomas Weber",
      position: "Senior Systemadministrator",
      department: "Infrastruktur",
      experience: "10+ Jahre",
      specialties: ["Windows Server", "Linux", "Netzwerktechnik"],
      description: "Experte für IT-Infrastruktur und Systemadministration.",
      image: "👨‍🔧",
      certifications: ["MCSE", "RHCE", "CCNA"]
    },
    {
      name: "Sarah Müller",
      position: "Cybersecurity-Spezialistin",
      department: "Security",
      experience: "8+ Jahre",
      specialties: ["Penetration Testing", "SOC", "Incident Response"],
      description: "Spezialistin für Cybersecurity und Bedrohungsanalyse.",
      image: "👩‍🔒",
      certifications: ["CEH", "OSCP", "GCIH"]
    },
    {
      name: "Michael Klein",
      position: "Software-Entwickler",
      department: "Entwicklung",
      experience: "7+ Jahre",
      specialties: ["Full-Stack Development", "API-Design", "DevOps"],
      description: "Erfahrener Entwickler für moderne Web-Anwendungen und APIs.",
      image: "👨‍💻",
      certifications: ["AWS Developer", "Microsoft Certified"]
    },
    {
      name: "Lisa Hoffmann",
      position: "Projektmanagerin",
      department: "Projektmanagement",
      experience: "6+ Jahre",
      specialties: ["Agile Methoden", "Scrum", "Kundenbetreuung"],
      description: "Erfahrene Projektmanagerin für IT-Projekte aller Größenordnungen.",
      image: "👩‍💼",
      certifications: ["PMP", "Scrum Master", "ITIL"]
    }
  ]

  const departments = [
    {
      name: "Management",
      description: "Strategische Führung und Geschäftsentwicklung",
      color: "from-blue-500 to-digital-blue"
    },
    {
      name: "Cloud Services",
      description: "Cloud-Architektur und Migration",
      color: "from-cyan-500 to-blue-600"
    },
    {
      name: "Infrastruktur",
      description: "Systemadministration und Netzwerktechnik",
      color: "from-green-500 to-emerald-600"
    },
    {
      name: "Security",
      description: "Cybersecurity und Bedrohungsanalyse",
      color: "from-red-500 to-rose-600"
    },
    {
      name: "Entwicklung",
      description: "Softwareentwicklung und DevOps",
      color: "from-purple-500 to-indigo-600"
    },
    {
      name: "Projektmanagement",
      description: "Projektleitung und Kundenbetreuung",
      color: "from-orange-500 to-berlin-orange"
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
                  <li className="text-white">Team</li>
                </ol>
              </nav>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Unser
                <span className="block text-berlin-orange">Expertenteam</span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
                Lernen Sie die IT-Experten kennen, die Ihre Projekte zum Erfolg führen. 
                Unser Team vereint jahrelange Erfahrung mit modernster Technologie.
              </p>
            </div>
          </div>
        </section>

        {/* Team Stats */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-digital-blue mb-6">
                Unser Team in Zahlen
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-berlin-orange mb-4">25+</div>
                <h3 className="text-lg font-semibold text-digital-blue mb-2">Mitarbeiter</h3>
                <p className="text-gray-600">Erfahrene IT-Experten</p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-berlin-orange mb-4">50+</div>
                <h3 className="text-lg font-semibold text-digital-blue mb-2">Zertifizierungen</h3>
                <p className="text-gray-600">Anerkannte Qualifikationen</p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-berlin-orange mb-4">10+</div>
                <h3 className="text-lg font-semibold text-digital-blue mb-2">Jahre Erfahrung</h3>
                <p className="text-gray-600">Durchschnittliche Berufserfahrung</p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-berlin-orange mb-4">6</div>
                <h3 className="text-lg font-semibold text-digital-blue mb-2">Abteilungen</h3>
                <p className="text-gray-600">Spezialisierte Teams</p>
              </div>
            </div>
          </div>
        </section>

        {/* Departments */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-digital-blue mb-6">
                Unsere Abteilungen
              </h2>
              <p className="text-xl text-neutral-dark max-w-3xl mx-auto">
                Spezialisierte Teams für jeden Bereich der IT
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {departments.map((dept, index) => (
                <div
                  key={index}
                  className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 border border-gray-100 group"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${dept.color} rounded-2xl flex items-center justify-center text-2xl mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-digital-blue mb-4 text-center">
                    {dept.name}
                  </h3>
                  <p className="text-gray-600 text-center leading-relaxed">
                    {dept.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Members */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-digital-blue mb-6">
                Unser Team
              </h2>
              <p className="text-xl text-neutral-dark max-w-3xl mx-auto">
                Die Experten hinter unseren erfolgreichen Projekten
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 border border-gray-100 group"
                >
                  <div className="text-center mb-6">
                    <div className="text-6xl mb-4">{member.image}</div>
                    <h3 className="text-xl font-bold text-digital-blue mb-2">
                      {member.name}
                    </h3>
                    <p className="text-berlin-orange font-semibold mb-2">
                      {member.position}
                    </p>
                    <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                      {member.department}
                    </span>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-digital-blue mb-2">Erfahrung:</h4>
                      <p className="text-gray-700">{member.experience}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-digital-blue mb-2">Spezialgebiete:</h4>
                      <div className="flex flex-wrap gap-2">
                        {member.specialties.map((specialty, specIndex) => (
                          <span key={specIndex} className="text-xs bg-blue-100 text-digital-blue px-2 py-1 rounded-full">
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-digital-blue mb-2">Zertifizierungen:</h4>
                      <div className="flex flex-wrap gap-2">
                        {member.certifications.map((cert, certIndex) => (
                          <span key={certIndex} className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                            {cert}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {member.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Join Team CTA */}
        <section className="py-20 bg-gradient-to-r from-digital-blue to-blue-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Werden Sie Teil unseres Teams!
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
              Wir suchen motivierte IT-Experten, die gemeinsam mit uns die Zukunft der IT gestalten möchten. 
              Schauen Sie sich unsere offenen Stellen an.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/unternehmen/karriere"
                className="bg-berlin-orange hover:bg-orange-500 text-white font-semibold py-4 px-10 rounded-2xl transition-all duration-300 transform hover:scale-105"
              >
                Offene Stellen ansehen
              </Link>
              <Link
                href="/kontakt"
                className="bg-white/10 backdrop-blur-md border border-white/30 text-white hover:bg-white hover:text-digital-blue font-semibold py-4 px-10 rounded-2xl transition-all duration-300"
              >
                Initiativbewerbung senden
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
