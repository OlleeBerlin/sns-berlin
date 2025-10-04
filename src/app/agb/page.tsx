import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AGB - Allgemeine Geschäftsbedingungen - SNS Berlin',
  description: 'Allgemeine Geschäftsbedingungen von SNS Berlin für IT-Services und Dienstleistungen.',
  robots: { index: false, follow: false },
}

export default function AGBPage() {
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
                <li className="text-digital-blue">AGB</li>
              </ol>
            </nav>
            
            <h1 className="text-4xl md:text-5xl font-bold text-digital-blue mb-8">
              Allgemeine Geschäftsbedingungen
            </h1>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-digital-blue mb-4">§ 1 Geltungsbereich</h2>
              <p className="mb-4">
                (1) Diese Allgemeinen Geschäftsbedingungen (nachfolgend &ldquo;AGB&rdquo;) gelten für alle Verträge zwischen der 
                SNS Berlin GmbH (nachfolgend &ldquo;Auftragnehmer&rdquo;) und ihren Auftraggebern (nachfolgend &ldquo;Auftraggeber&rdquo;) 
                über die Erbringung von IT-Dienstleistungen.
              </p>
              <p className="mb-6">
                (2) Abweichende, entgegenstehende oder ergänzende Allgemeine Geschäftsbedingungen des Auftraggebers 
                werden nicht Vertragsbestandteil, es sei denn, ihrer Geltung wird ausdrücklich schriftlich zugestimmt.
              </p>

              <h2 className="text-2xl font-bold text-digital-blue mb-4">§ 2 Vertragsschluss</h2>
              <p className="mb-4">
                (1) Angebote des Auftragnehmers sind freibleibend und unverbindlich, sofern sie nicht ausdrücklich 
                als verbindlich bezeichnet sind.
              </p>
              <p className="mb-4">
                (2) Ein Vertrag kommt durch schriftliche Auftragsbestätigung des Auftragnehmers oder durch Beginn 
                der Leistungserbringung zustande.
              </p>
              <p className="mb-6">
                (3) Änderungen und Ergänzungen des Vertrages bedürfen der Schriftform.
              </p>

              <h2 className="text-2xl font-bold text-digital-blue mb-4">§ 3 Leistungsumfang</h2>
              <p className="mb-4">
                (1) Der Umfang der zu erbringenden Leistungen ergibt sich aus der jeweiligen Auftragsbestätigung 
                bzw. dem geschlossenen Vertrag.
              </p>
              <p className="mb-4">
                (2) Der Auftragnehmer erbringt seine Leistungen nach dem aktuellen Stand der Technik und den 
                anerkannten Regeln der IT-Branche.
              </p>
              <p className="mb-6">
                (3) Soweit nicht anders vereinbart, schuldet der Auftragnehmer eine Dienstleistung, nicht einen 
                bestimmten Erfolg.
              </p>

              <h2 className="text-2xl font-bold text-digital-blue mb-4">§ 4 Mitwirkungspflichten des Auftraggebers</h2>
              <p className="mb-4">
                (1) Der Auftraggeber stellt dem Auftragnehmer alle für die Leistungserbringung erforderlichen 
                Informationen, Daten und Zugänge rechtzeitig und vollständig zur Verfügung.
              </p>
              <p className="mb-4">
                (2) Der Auftraggeber sorgt für die erforderliche technische Ausstattung und Infrastruktur.
              </p>
              <p className="mb-6">
                (3) Verzögerungen aufgrund unzureichender Mitwirkung des Auftraggebers gehen zu dessen Lasten.
              </p>

              <h2 className="text-2xl font-bold text-digital-blue mb-4">§ 5 Vergütung und Zahlungsbedingungen</h2>
              <p className="mb-4">
                (1) Die Vergütung richtet sich nach der jeweiligen Vereinbarung. Soweit keine feste Vergütung 
                vereinbart ist, erfolgt die Abrechnung nach Aufwand zu den jeweils gültigen Stundensätzen.
              </p>
              <p className="mb-4">
                (2) Rechnungen sind innerhalb von 14 Tagen nach Rechnungsdatum ohne Abzug zur Zahlung fällig.
              </p>
              <p className="mb-6">
                (3) Bei Zahlungsverzug werden Verzugszinsen in Höhe von 9 Prozentpunkten über dem Basiszinssatz 
                der Europäischen Zentralbank berechnet.
              </p>

              <h2 className="text-2xl font-bold text-digital-blue mb-4">§ 6 Gewährleistung</h2>
              <p className="mb-4">
                (1) Der Auftragnehmer gewährleistet die vertragsgemäße Erbringung seiner Leistungen.
              </p>
              <p className="mb-4">
                (2) Mängel sind unverzüglich schriftlich anzuzeigen. Der Auftragnehmer hat das Recht zur 
                Nacherfüllung.
              </p>
              <p className="mb-6">
                (3) Die Gewährleistungsfrist beträgt 12 Monate ab Abnahme der Leistung.
              </p>

              <h2 className="text-2xl font-bold text-digital-blue mb-4">§ 7 Haftung</h2>
              <p className="mb-4">
                (1) Der Auftragnehmer haftet unbeschränkt für Schäden aus der Verletzung des Lebens, des Körpers 
                oder der Gesundheit sowie für Schäden, die auf einer vorsätzlichen oder grob fahrlässigen 
                Pflichtverletzung beruhen.
              </p>
              <p className="mb-4">
                (2) Für sonstige Schäden haftet der Auftragnehmer nur bei Verletzung wesentlicher Vertragspflichten. 
                In diesem Fall ist die Haftung auf den vorhersehbaren, typischerweise eintretenden Schaden begrenzt.
              </p>
              <p className="mb-6">
                (3) Eine weitergehende Haftung ist ausgeschlossen.
              </p>

              <h2 className="text-2xl font-bold text-digital-blue mb-4">§ 8 Datenschutz und Vertraulichkeit</h2>
              <p className="mb-4">
                (1) Der Auftragnehmer verpflichtet sich, alle im Rahmen des Auftrags bekannt gewordenen 
                Informationen vertraulich zu behandeln.
              </p>
              <p className="mb-4">
                (2) Der Umgang mit personenbezogenen Daten erfolgt entsprechend den Bestimmungen der 
                Datenschutz-Grundverordnung (DSGVO).
              </p>
              <p className="mb-6">
                (3) Soweit erforderlich, wird eine gesonderte Auftragsverarbeitungsvereinbarung geschlossen.
              </p>

              <h2 className="text-2xl font-bold text-digital-blue mb-4">§ 9 Kündigung</h2>
              <p className="mb-4">
                (1) Verträge über einmalige Leistungen können nicht ordentlich gekündigt werden.
              </p>
              <p className="mb-4">
                (2) Dauerschuldverhältnisse können von beiden Parteien mit einer Frist von 3 Monaten zum 
                Monatsende gekündigt werden.
              </p>
              <p className="mb-6">
                (3) Das Recht zur außerordentlichen Kündigung aus wichtigem Grund bleibt unberührt.
              </p>

              <h2 className="text-2xl font-bold text-digital-blue mb-4">§ 10 Schlussbestimmungen</h2>
              <p className="mb-4">
                (1) Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts.
              </p>
              <p className="mb-4">
                (2) Gerichtsstand ist Berlin, sofern der Auftraggeber Kaufmann, juristische Person des 
                öffentlichen Rechts oder öffentlich-rechtliches Sondervermögen ist.
              </p>
              <p className="mb-6">
                (3) Sollten einzelne Bestimmungen dieser AGB unwirksam sein, bleibt die Wirksamkeit der 
                übrigen Bestimmungen unberührt.
              </p>

              <div className="bg-gray-50 p-6 rounded-lg mt-8">
                <h3 className="text-lg font-bold text-digital-blue mb-3">Kontakt</h3>
                <p className="mb-2"><strong>SNS Berlin GmbH</strong></p>
                <p className="mb-2">Musterstraße 123, 10115 Berlin</p>
                <p className="mb-2">Telefon: +49 (30) 123 456 789</p>
                <p className="mb-2">E-Mail: info@sns-berlin.de</p>
                <p className="text-sm text-gray-600 mt-4">Stand: Januar 2025</p>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg mt-8">
                <p className="text-sm text-gray-600">
                  <strong>Hinweis:</strong> Dies sind Muster-AGB für IT-Dienstleistungen. Bitte lassen Sie diese 
                  von einem Rechtsanwalt an Ihre spezifischen Geschäftsprozesse anpassen und prüfen.
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
