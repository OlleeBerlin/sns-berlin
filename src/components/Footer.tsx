export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-digital-blue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <span className="text-3xl font-bold">
                <span className="text-white">SNS</span>
                <span className="text-berlin-orange ml-1">Berlin</span>
              </span>
            </div>
            <p className="text-blue-100 mb-4 max-w-md">
              Ihr vertrauensvoller Partner für IT-Sicherheit, Netzwerklösungen und 
              innovative IT-Beratung in Berlin und darüber hinaus.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-100 hover:text-berlin-orange transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" className="text-blue-100 hover:text-berlin-orange transition-colors">
                <span className="sr-only">Xing</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.188 0c-.517 0-.741.325-.927.66 0 0-7.455 13.224-7.702 13.657.284.52 4.56 8.668 4.56 8.668.214.364.456.715.957.715h3.345c.298 0 .517-.204.517-.517 0-.204-.062-.36-.204-.517L14.5 14.212l7.702-13.657C22.394.325 22.394.073 22.394 0h-4.206zM3.648 4.74c-.214 0-.456.142-.456.456 0 .073.04.204.142.334l2.551 4.755-3.918 6.996c-.113.188-.142.317-.142.456 0 .298.204.517.517.517h3.345c.517 0 .74-.325.927-.66L8.740 9.957 7.264 7.42c-.214-.364-.456-.715-.957-.715H3.648v.035z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-blue-100 hover:text-berlin-orange transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-blue-100 hover:text-berlin-orange transition-colors">
                  Leistungen
                </a>
              </li>
              <li>
                <a href="#team" className="text-blue-100 hover:text-berlin-orange transition-colors">
                  Team
                </a>
              </li>
              <li>
                <a href="#contact" className="text-blue-100 hover:text-berlin-orange transition-colors">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-blue-100 hover:text-berlin-orange transition-colors">
                  IT-Sicherheit
                </a>
              </li>
              <li>
                <a href="#services" className="text-blue-100 hover:text-berlin-orange transition-colors">
                  Netzwerklösungen
                </a>
              </li>
              <li>
                <a href="#services" className="text-blue-100 hover:text-berlin-orange transition-colors">
                  Cloud Security
                </a>
              </li>
              <li>
                <a href="#services" className="text-blue-100 hover:text-berlin-orange transition-colors">
                  Managed Services
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-blue-100 text-sm mb-4 md:mb-0">
              © {currentYear} SNS Berlin. Alle Rechte vorbehalten.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="/impressum" className="text-blue-100 hover:text-berlin-orange transition-colors">
                Impressum
              </a>
              <a href="/datenschutz" className="text-blue-100 hover:text-berlin-orange transition-colors">
                Datenschutz
              </a>
              <a href="/agb" className="text-blue-100 hover:text-berlin-orange transition-colors">
                AGB
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
