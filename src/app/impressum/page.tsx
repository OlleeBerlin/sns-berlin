import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Impressum - SNS Berlin',
  description: 'Impressum und Kontaktdaten von SNS Berlin - IT-Sicherheit & Netzwerklösungen.',
  robots: { index: false, follow: false },
}

export default function ImpressumPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-16">
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="mb-8">
              <ol className="flex items-center space-x-2 text-gray-500">
                <li><Link href="/" className="hover:text-digital-blue">Home</Link></li>
                <li className="mx-2">/</li>
                <li className="text-digital-blue">Impressum</li>
              </ol>
            </nav>
            
            <h1 className="text-4xl md:text-5xl font-bold text-digital-blue mb-8">
              Impressum
            </h1>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-digital-blue mb-4">Angaben gemäß § 5 TMG</h2>
              
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <p className="mb-2"><strong>SNS Berlin GmbH</strong></p>
                <p className="mb-2">Musterstraße 123</p>
                <p className="mb-2">10115 Berlin</p>
                <p className="mb-2">Deutschland</p>
              </div>

              <h3 className="text-xl font-bold text-digital-blue mb-3">Kontakt</h3>
              <p className="mb-2">Telefon: +49 (30) 123 456 789</p>
              <p className="mb-2">E-Mail: info@sns-berlin.de</p>
              <p className="mb-6">Website: www.sns-berlin.de</p>

              <h3 className="text-xl font-bold text-digital-blue mb-3">Handelsregister</h3>
              <p className="mb-2">Registergericht: Amtsgericht Berlin-Charlottenburg</p>
              <p className="mb-2">Registernummer: HRB 123456 B</p>
              <p className="mb-6">Umsatzsteuer-ID: DE123456789</p>

              <h3 className="text-xl font-bold text-digital-blue mb-3">Geschäftsführung</h3>
              <p className="mb-6">Max Mustermann</p>

              <h3 className="text-xl font-bold text-digital-blue mb-3">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h3>
              <p className="mb-2">Max Mustermann</p>
              <p className="mb-2">Musterstraße 123</p>
              <p className="mb-6">10115 Berlin</p>

              <h2 className="text-2xl font-bold text-digital-blue mb-4">Haftungsausschluss</h2>
              
              <h3 className="text-xl font-bold text-digital-blue mb-3">Haftung für Inhalte</h3>
              <p className="mb-4">
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den 
                allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht 
                unter der Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach 
                Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
              </p>
              <p className="mb-6">
                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen 
                Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt 
                der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden 
                Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
              </p>

              <h3 className="text-xl font-bold text-digital-blue mb-3">Haftung für Links</h3>
              <p className="mb-4">
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. 
                Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der 
                verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
              </p>
              <p className="mb-6">
                Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. 
                Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche 
                Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht 
                zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
              </p>

              <h3 className="text-xl font-bold text-digital-blue mb-3">Urheberrecht</h3>
              <p className="mb-4">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen 
                Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der 
                Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              </p>
              <p className="mb-6">
                Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. 
                Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte 
                Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem 
                auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. 
                Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
              </p>

              <div className="bg-blue-50 p-6 rounded-lg mt-8">
                <p className="text-sm text-gray-600">
                  <strong>Hinweis:</strong> Dies ist ein Muster-Impressum. Bitte passen Sie alle Angaben entsprechend 
                  Ihren tatsächlichen Unternehmensdaten an und lassen Sie das Impressum von einem Rechtsanwalt prüfen.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
