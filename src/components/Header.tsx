'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const navigation = [
    { name: 'Home', href: '#home' },
    { 
      name: 'Leistungen', 
      href: '#services',
      dropdown: [
        { name: 'Infrastruktur', href: '#services', description: '3CX, Hardware, Netzwerk' },
        { name: 'Cloud-Lösungen', href: '#services', description: 'Microsoft 365, Azure' },
        { name: 'Security', href: '#services', description: 'SOC, Firewalls, Backup' },
        { name: 'Managed Services', href: '#services', description: '24/7 Monitoring & Support' }
      ]
    },
    { 
      name: 'Unternehmen', 
      href: '#team',
      dropdown: [
        { name: 'Über uns', href: '#team', description: 'Unser Team & Vision' },
        { name: 'Referenzen', href: '#team', description: 'Erfolgreiche Projekte' },
        { name: 'Karriere', href: '#team', description: 'Jobs & Praktika' }
      ]
    },
    { name: 'Kontakt', href: '#contact' },
  ]

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="SNS Berlin Logo"
                width={120}
                height={40}
                className="h-10 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="text-neutral-dark hover:text-digital-blue px-3 py-2 text-sm font-medium transition-colors duration-200 flex items-center"
                >
                  {item.name}
                  {item.dropdown && (
                    <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>
                
                {/* Dropdown Menu */}
                {item.dropdown && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-xl border border-gray-100 py-4 z-50">
                    <div className="px-6 py-2">
                      <h3 className="text-sm font-semibold text-digital-blue mb-3">{item.name}</h3>
                      <div className="space-y-3">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block group"
                          >
                            <div className="flex flex-col">
                              <span className="text-sm font-medium text-neutral-dark group-hover:text-digital-blue transition-colors">
                                {subItem.name}
                              </span>
                              <span className="text-xs text-gray-500 mt-1">
                                {subItem.description}
                              </span>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
            
            {/* CTA Button */}
            <Link
              href="#contact"
              className="bg-digital-blue hover:bg-blue-700 text-white px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 transform hover:scale-105"
            >
              Beratung anfragen
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="bg-white inline-flex items-center justify-center p-2 rounded-md text-neutral-dark hover:text-digital-blue hover:bg-neutral-light focus:outline-none focus:ring-2 focus:ring-inset focus:ring-digital-blue"
            >
              <span className="sr-only">Hauptmenü öffnen</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-4 pt-4 pb-6 space-y-4 bg-white border-t border-neutral-mid">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className="text-neutral-dark hover:text-digital-blue block py-2 text-base font-medium transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.dropdown && (
                    <div className="ml-4 mt-2 space-y-2">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block py-1 text-sm text-gray-600 hover:text-digital-blue transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              {/* Mobile CTA */}
              <div className="pt-4 border-t border-neutral-mid">
                <Link
                  href="#contact"
                  className="bg-digital-blue hover:bg-blue-700 text-white px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 block text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Beratung anfragen
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
